import React from 'react';
import Giscus from '@giscus/react';
import { useColorMode } from '@docusaurus/theme-common';

export default function GiscusComments() {
  const { colorMode } = useColorMode();

  return (
    <div style={{ marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid var(--doc-border)' }}>
      <h3>💬 Comments</h3>
      <p style={{ marginBottom: '1rem', color: 'var(--doc-text-muted)' }}>
        Have questions or feedback? Join the discussion below!
      </p>
      <Giscus
        id="comments"
        repo="Ssomar-Developement/Wiki"
        repoId="R_kgDOLlIo_Q"
        category="General"
        categoryId="DIC_kwDOLlIo_c4CfGxN"
        mapping="pathname"
        strict="0"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme={colorMode === 'dark' ? 'dark_dimmed' : 'light'}
        lang="en"
        loading="lazy"
      />
    </div>
  );
}