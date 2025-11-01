import React, { useState, useEffect } from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './LinkPreview.module.css';

export default function LinkPreview({ url, title, description, favicon }) {
  const { siteConfig } = useDocusaurusContext();
  const [domainName, setDomainName] = useState('');
  const [faviconUrl, setFaviconUrl] = useState(favicon);
  const [pageTitle, setPageTitle] = useState(title);
  const [isInternal, setIsInternal] = useState(false);
  const [finalUrl, setFinalUrl] = useState(url);

  useEffect(() => {
    // Check if URL is relative (internal link)
    const isRelativeUrl = url.startsWith('/');
    setIsInternal(isRelativeUrl);

    try {
      if (isRelativeUrl) {
        // Internal link - use site domain
        const baseUrl = siteConfig.url + siteConfig.baseUrl;
        setFinalUrl(url);
        setDomainName(new URL(siteConfig.url).hostname);

        // Use site favicon for internal links
        if (!favicon) {
          setFaviconUrl(siteConfig.baseUrl + 'img/favicon.ico');
        }

        // If no title provided, use the URL path
        if (!title) {
          setPageTitle(url);
        }
      } else {
        // External link
        const urlObj = new URL(url);
        setDomainName(urlObj.hostname);
        setFinalUrl(url);

        // If no favicon provided, try to get it from Google's favicon service
        if (!favicon) {
          setFaviconUrl(`https://www.google.com/s2/favicons?domain=${urlObj.hostname}&sz=32`);
        }

        // If no title provided, use the URL
        if (!title) {
          setPageTitle(url);
        }
      }
    } catch (e) {
      setDomainName(url);
      setPageTitle(title || url);
      setFinalUrl(url);
    }
  }, [url, title, favicon, siteConfig]);

  const LinkComponent = isInternal ? Link : 'a';
  const linkProps = isInternal
    ? { to: finalUrl }
    : { href: finalUrl, target: '_blank', rel: 'noopener noreferrer' };

  return (
    <div className={styles.linkPreviewContainer}>
      <LinkComponent
        {...linkProps}
        className={styles.linkPreviewCard}
      >
        {faviconUrl && (
          <img
            src={faviconUrl}
            alt="Site icon"
            className={styles.favicon}
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
        )}
        <div className={styles.textContent}>
          <div className={styles.title}>{pageTitle}</div>
          {description && <div className={styles.description}>{description}</div>}
          <div className={styles.domain}>{domainName}</div>
        </div>
        <svg className={styles.chevron} width="12" height="12" viewBox="0 0 320 512" fill="currentColor">
          <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"/>
        </svg>
      </LinkComponent>
    </div>
  );
}
