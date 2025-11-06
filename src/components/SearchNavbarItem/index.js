import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import {useAllDocsData} from '@docusaurus/plugin-content-docs/client';
import {useHistory} from '@docusaurus/router';
import clsx from 'clsx';
import searchIndex from '../../search/searchIndex.json';
import styles from './styles.module.css';

const TOKEN_SPLIT_REGEX = /[\s/._-]+/;

function normalize(value) {
  return value ? value.toLowerCase().trim() : '';
}

function uniqueTokens(value) {
  const normalized = normalize(value);
  if (!normalized) {
    return [];
  }
  return Array.from(
    new Set(normalized.split(TOKEN_SPLIT_REGEX).filter(Boolean)),
  );
}

function cleanContent(text) {
  if (!text) {
    return '';
  }

  return text
    // Remove markdown escape characters
    .replace(/\\([_*`#[\](){}])/g, '$1')
    // Remove custom tags like <sup>, <Badge>, etc.
    .replace(/<[^>]+>/g, '')
    .trim();
}

function highlightMatches(text, queryLower) {
  if (!text || !queryLower) {
    return text;
  }

  const textLower = normalize(text);
  const parts = [];
  let lastIndex = 0;

  // Find all occurrences of the query
  let index = textLower.indexOf(queryLower);
  while (index !== -1) {
    // Add text before match
    if (index > lastIndex) {
      parts.push({
        text: text.slice(lastIndex, index),
        highlight: false,
      });
    }

    // Add matched text
    parts.push({
      text: text.slice(index, index + queryLower.length),
      highlight: true,
    });

    lastIndex = index + queryLower.length;
    index = textLower.indexOf(queryLower, lastIndex);
  }

  // Add remaining text
  if (lastIndex < text.length) {
    parts.push({
      text: text.slice(lastIndex),
      highlight: false,
    });
  }

  return parts;
}

function buildSnippet(content, contentLower, queryLower) {
  if (!content) {
    return '';
  }

  // Clean the content first
  const cleanedContent = cleanContent(content);
  const cleanedContentLower = normalize(cleanedContent);

  const index = cleanedContentLower.indexOf(queryLower);
  if (index === -1) {
    return cleanedContent.length > 180 ? `${cleanedContent.slice(0, 180).trim()}…` : cleanedContent;
  }

  const radius = 90;
  const start = Math.max(0, index - radius);
  const end = Math.min(
    cleanedContent.length,
    index + queryLower.length + radius,
  );
  const prefix = start > 0 ? '…' : '';
  const suffix = end < cleanedContent.length ? '…' : '';
  return `${prefix}${cleanedContent.slice(start, end).trim()}${suffix}`;
}

function generateAnchorId(text) {
  // Docusaurus anchor generation algorithm
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // Remove special chars except spaces and hyphens
    .trim()
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-'); // Replace multiple hyphens with single
}

function buildContentMap() {
  const map = new Map();
  const headingsMap = new Map();
  if (searchIndex?.items?.length) {
    searchIndex.items.forEach((entry) => {
      if (entry?.source) {
        const content = entry.content ?? '';
        map.set(entry.source, content);

        // Extract headings from search index and generate anchor IDs
        const headings = (entry.headings ?? []).map(text => ({
          text,
          anchorId: generateAnchorId(text)
        }));
        headingsMap.set(entry.source, headings);
      }
    });
  }
  return { contentMap: map, headingsMap };
}

function buildDocsIndex(allDocsData) {
  const { contentMap, headingsMap } = buildContentMap();
  const docs = [];

  Object.values(allDocsData).forEach((pluginData) => {
    pluginData?.versions?.forEach((version) => {
      version?.docs?.forEach((doc) => {
        const title = doc.title ?? doc.id;
        const description = doc.description ?? '';
        const label = doc.frontMatter?.sidebar_label ?? '';
        const permalink = doc.path ?? doc.permalink;

        const titleLower = normalize(title);
        const descriptionLower = normalize(description);
        const labelLower = normalize(label);
        const idLower = normalize(doc.id);
        const permalinkLower = normalize(permalink);

        // Construct the search index source key from doc.id
        // Doc id: "ai-chat-moderation/commands-and-permissions"
        // Search index key: "@site/docs/ai-chat-moderation/commands-and-permissions.md"
        const searchIndexSource = `@site/docs/${doc.id}.md`;

        const plainContent = contentMap.get(searchIndexSource) ?? '';
        const plainContentLower = normalize(plainContent);
        const contentTokens = uniqueTokens(plainContentLower);

        const headings = headingsMap.get(searchIndexSource) ?? [];

        const headingsText = headings.map(h => h.text).join(' ');
        const headingsLower = normalize(headingsText);

        const tokenSet = new Set([
          ...uniqueTokens(titleLower),
          ...uniqueTokens(descriptionLower),
          ...uniqueTokens(labelLower),
          ...uniqueTokens(idLower),
          ...uniqueTokens(permalinkLower),
          ...uniqueTokens(headingsLower),
          ...contentTokens,
        ]);

        // Use the first heading as display title if available, otherwise use doc title
        const displayTitle = headings.length > 0 ? headings[0].text : title;

        docs.push({
          title,
          displayTitle,
          description,
          permalink,
          titleLower,
          descriptionLower,
          labelLower,
          idLower,
          permalinkLower,
          plainContent,
          plainContentLower,
          headings,
          headingsLower,
          contentTokens: new Set(contentTokens),
          tokens: tokenSet,
        });
      });
    });
  });

  return docs;
}

function scoreDoc(doc, queryLower, queryTokens) {
  let score = 0;

  const add = (amount) => {
    score += amount;
  };

  if (doc.titleLower === queryLower) add(140);
  else if (doc.titleLower.startsWith(queryLower)) add(110);
  else if (doc.titleLower.includes(queryLower)) add(80);

  if (doc.labelLower === queryLower) add(90);
  else if (doc.labelLower.startsWith(queryLower)) add(65);
  else if (doc.labelLower.includes(queryLower)) add(45);

  // Search in content headings with high priority
  // Check for exact match or partial word match
  if (doc.headingsLower.includes(queryLower)) {
    add(70);
  } else {
    // Check if query is prefix of any word in headings
    const headingWords = doc.headingsLower.split(/\s+/);
    if (headingWords.some(word => word.startsWith(queryLower))) {
      add(60);
    }
  }

  if (doc.descriptionLower.includes(queryLower)) add(30);
  if (doc.plainContentLower.includes(queryLower)) add(35);

  queryTokens.forEach((token) => {
    if (!token) {
      return;
    }

    if (doc.tokens.has(token)) {
      add(42);
    } else if (
      doc.titleLower.includes(token) ||
      doc.labelLower.includes(token) ||
      doc.descriptionLower.includes(token) ||
      doc.plainContentLower.includes(token)
    ) {
      add(22);
    }

    if (
      doc.idLower.includes(token) ||
      doc.permalinkLower.includes(token)
    ) {
      add(12);
    }
  });

  return score;
}

export default function DocsSearchBar({mobile, className}) {
  const allDocsData = useAllDocsData();
  const docsIndex = useMemo(
    () => buildDocsIndex(allDocsData),
    [allDocsData],
  );
  const history = useHistory();

  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const hideTimeoutRef = useRef(null);

  const navigateToDoc = useCallback(
    (permalink) => {
      if (!permalink) {
        return;
      }

      const target = permalink.startsWith('/')
        ? permalink
        : `/${permalink}`;

      history.push(target);

      if (typeof window !== 'undefined') {
        window.setTimeout(() => {
          if (window.location.pathname !== target) {
            window.location.assign(target);
          }
        }, 80);
      }

      setQuery('');
      setIsFocused(false);
    },
    [history],
  );

  useEffect(() => {
    const unlisten = history.listen(() => {
      setQuery('');
      setIsFocused(false);
    });

    return () => {
      unlisten();
    };
  }, [history]);

  const results = useMemo(() => {
    const queryLower = normalize(query);
    if (!queryLower || queryLower.length < 2) {
      return [];
    }

    const queryTokens = Array.from(
      new Set(queryLower.split(TOKEN_SPLIT_REGEX).filter(Boolean)),
    );

    return docsIndex
      .map((doc) => {
        const matchesTitle = doc.titleLower.includes(queryLower);
        const matchesDescription = doc.descriptionLower.includes(queryLower);
        const matchesLabel = doc.labelLower.includes(queryLower);
        const matchesHeadings = doc.headingsLower.includes(queryLower);

        // Check for partial word match in headings
        const headingWords = doc.headingsLower.split(/\s+/);
        const matchesHeadingsPartial = headingWords.some(word => word.startsWith(queryLower));

        const matchesContent = doc.plainContentLower.includes(queryLower);
        const matchesTokens = queryTokens.every((token) =>
          doc.tokens.has(token),
        );

        if (
          !matchesTitle &&
          !matchesDescription &&
          !matchesLabel &&
          !matchesHeadings &&
          !matchesHeadingsPartial &&
          !matchesContent &&
          !matchesTokens
        ) {
          return null;
        }

        const score = scoreDoc(doc, queryLower, queryTokens);
        if (score <= 0) {
          return null;
        }

        // Find first matching heading for anchor link
        let matchedHeading = null;
        if (!matchesTitle) {
          // Try exact heading match first
          if (matchesHeadings) {
            matchedHeading = doc.headings.find(h => {
              const headingLower = normalize(h.text);
              return headingLower.includes(queryLower);
            });
          }

          // Try partial word matching - check if query is prefix of any word in heading
          if (!matchedHeading && queryLower.length >= 3) {
            matchedHeading = doc.headings.find(h => {
              const headingLower = normalize(h.text);
              const words = headingLower.split(/\s+/);
              return words.some(word => word.startsWith(queryLower));
            });
          }
        }

        const snippet = buildSnippet(
          doc.plainContent,
          doc.plainContentLower,
          queryLower,
        );

        // Create highlighted snippet
        const highlightedSnippet = highlightMatches(snippet, queryLower);

        // Clean and highlight description
        const cleanedDescription = cleanContent(doc.description);
        const highlightedDescription = highlightMatches(cleanedDescription, queryLower);

        const permalink = matchedHeading
          ? `${doc.permalink}#${matchedHeading.anchorId}`
          : doc.permalink;

        return {
          ...doc,
          score,
          snippet,
          highlightedSnippet,
          cleanedDescription,
          highlightedDescription,
          permalink,
          matchedHeading,
        };
      })
      .filter(Boolean)
      .sort(
        (a, b) =>
          b.score - a.score || a.title.localeCompare(b.title),
      )
      .slice(0, 12);
  }, [docsIndex, query]);

  const showResults = isFocused && results.length > 0;

  return (
    <div
      className={clsx(
        styles.searchContainer,
        mobile && styles.searchContainerMobile,
        className,
      )}>
      <div className={styles.inputWrapper}>
        <span className={styles.magnifier} aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none">
            <path
              d="M11 5a6 6 0 104.472 10.126l3.35 3.351a1 1 0 001.414-1.414l-3.351-3.35A6 6 0 0011 5zm0 2a4 4 0 110 8 4 4 0 010-8z"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <input
          type="search"
          value={query}
          placeholder="Search documentation"
          className={styles.input}
          aria-label="Search documentation"
          onChange={(event) => setQuery(event.target.value)}
          onFocus={() => {
            if (hideTimeoutRef.current) {
              clearTimeout(hideTimeoutRef.current);
              hideTimeoutRef.current = null;
            }
            setIsFocused(true);
          }}
          onBlur={() => {
            if (hideTimeoutRef.current) {
              clearTimeout(hideTimeoutRef.current);
            }
            hideTimeoutRef.current = window.setTimeout(() => {
              setIsFocused(false);
            }, 150);
          }}
          onKeyDown={(event) => {
            if (event.key === 'Enter' && results.length > 0) {
              event.preventDefault();
              navigateToDoc(results[0].permalink);
            }
          }}
        />
        {query && (
          <button
            type="button"
            className={styles.clear}
            onMouseDown={(event) => event.preventDefault()}
            onClick={() => setQuery('')}
            aria-label="Clear search">
            <svg viewBox="0 0 24 24" fill="none">
              <path
                d="M8 8l8 8M16 8l-8 8"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
          </button>
        )}
      </div>
      {showResults && (
        <ul className={styles.results} role="listbox">
          {results.map((doc, index) => (
            <li key={`${doc.permalink}-${index}`}>
              <button
                type="button"
                className={styles.resultItem}
                onMouseDown={(event) => {
                  if (event.button !== 0) {
                    return;
                  }
                  event.preventDefault();
                  if (hideTimeoutRef.current) {
                    clearTimeout(hideTimeoutRef.current);
                    hideTimeoutRef.current = null;
                  }
                  navigateToDoc(doc.permalink);
                }}
                onClick={(event) => {
                  event.preventDefault();
                  if (hideTimeoutRef.current) {
                    clearTimeout(hideTimeoutRef.current);
                    hideTimeoutRef.current = null;
                  }
                  navigateToDoc(doc.permalink);
                }}>
                <span className={styles.resultTitle}>
                  <span className={styles.resultTitleMain}>
                    {doc.displayTitle}
                  </span>
                  {doc.matchedHeading && (
                    <span className={styles.resultTitleHeading}>
                      {' › '}
                      {doc.matchedHeading.text}
                    </span>
                  )}
                </span>
                {(doc.highlightedSnippet || doc.highlightedDescription) && (
                  <span className={styles.resultDescription}>
                    {(doc.highlightedSnippet || doc.highlightedDescription)?.map ?
                      (doc.highlightedSnippet || doc.highlightedDescription).map((part, i) => (
                        part.highlight ? (
                          <strong key={i} className={styles.highlight}>
                            {part.text}
                          </strong>
                        ) : (
                          <span key={i}>{part.text}</span>
                        )
                      ))
                      : (doc.snippet || doc.cleanedDescription)
                    }
                  </span>
                )}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
