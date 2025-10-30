import React, { useState, useEffect } from 'react';
import styles from './LinkPreview.module.css';

export default function LinkPreview({ url, title, description, favicon }) {
  const [domainName, setDomainName] = useState('');
  const [faviconUrl, setFaviconUrl] = useState(favicon);
  const [pageTitle, setPageTitle] = useState(title);

  useEffect(() => {
    try {
      const urlObj = new URL(url);
      setDomainName(urlObj.hostname);

      // If no favicon provided, try to get it from Google's favicon service
      if (!favicon) {
        setFaviconUrl(`https://www.google.com/s2/favicons?domain=${urlObj.hostname}&sz=32`);
      }

      // If no title provided, use the URL
      if (!title) {
        setPageTitle(url);
      }
    } catch (e) {
      setDomainName(url);
      setPageTitle(title || url);
    }
  }, [url, title, favicon]);

  return (
    <div className={styles.linkPreviewContainer}>
      <a
        href={url}
        className={styles.linkPreviewCard}
        target="_blank"
        rel="noopener noreferrer"
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
      </a>
    </div>
  );
}
