import React, { useState } from 'react';
import Giscus from '@giscus/react';
import { useColorMode } from '@docusaurus/theme-common';

export default function GiscusComments({ enabled = false }) {
  const { colorMode } = useColorMode();
  const [showSetup, setShowSetup] = useState(false);

  if (!enabled) {
    return (
      <div style={{
        marginTop: '2rem',
        paddingTop: '2rem',
        borderTop: '1px solid var(--doc-border)',
        background: 'var(--doc-surface-muted)',
        borderRadius: '12px',
        padding: '1.5rem'
      }}>
        <h3>💬 Comments System (Demo)</h3>
        <p style={{ marginBottom: '1rem', color: 'var(--doc-text-muted)' }}>
          This is where GitHub-based comments would appear. To enable this feature:
        </p>

        <button
          onClick={() => setShowSetup(!showSetup)}
          style={{
            background: 'var(--ifm-color-primary)',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            padding: '0.5rem 1rem',
            cursor: 'pointer',
            marginBottom: '1rem'
          }}
        >
          {showSetup ? '📖 Hide Setup Instructions' : '🚀 Show Setup Instructions'}
        </button>

        {showSetup && (
          <div style={{
            background: 'rgba(91, 94, 230, 0.1)',
            padding: '1rem',
            borderRadius: '8px',
            marginTop: '1rem'
          }}>
            <h4>Setup Instructions:</h4>
            <ol>
              <li>
                <strong>Enable GitHub Discussions:</strong>
                <ul>
                  <li>Go to <a href="https://github.com/Ssomar-Developement/Wiki/settings" target="_blank">Repository Settings</a></li>
                  <li>Scroll to "Features" section</li>
                  <li>Check ✅ "Discussions"</li>
                </ul>
              </li>
              <li>
                <strong>Install Giscus App:</strong>
                <ul>
                  <li>Visit <a href="https://github.com/apps/giscus" target="_blank">Giscus App</a></li>
                  <li>Click "Install"</li>
                  <li>Select "Ssomar-Developement/Wiki" repository</li>
                </ul>
              </li>
              <li>
                <strong>Configure Giscus:</strong>
                <ul>
                  <li>Go to <a href="https://giscus.app" target="_blank">giscus.app</a></li>
                  <li>Enter repository: <code>Ssomar-Developement/Wiki</code></li>
                  <li>Choose "Discussions" category (e.g., "General")</li>
                  <li>Copy the generated configuration</li>
                </ul>
              </li>
              <li>
                <strong>Update Component:</strong>
                <ul>
                  <li>Replace the IDs in <code>src/components/GiscusComments.js</code></li>
                  <li>Set <code>enabled={'{true}'}</code> in the component props</li>
                </ul>
              </li>
            </ol>

            <div style={{
              background: 'rgba(34, 197, 94, 0.1)',
              padding: '0.75rem',
              borderRadius: '6px',
              marginTop: '1rem'
            }}>
              <strong>✨ Benefits of Giscus:</strong>
              <ul style={{ marginBottom: 0 }}>
                <li>No database needed - uses GitHub Discussions</li>
                <li>Free and open source</li>
                <li>Spam protection via GitHub authentication</li>
                <li>Full Markdown support</li>
                <li>Automatic theme switching</li>
              </ul>
            </div>
          </div>
        )}

        <div style={{
          marginTop: '1.5rem',
          padding: '1rem',
          background: 'var(--doc-surface)',
          borderRadius: '8px',
          border: '1px solid var(--doc-border)'
        }}>
          <h4>💭 Preview: What Comments Look Like</h4>
          <div style={{ fontSize: '0.9rem', color: 'var(--doc-text-muted)' }}>
            <div style={{ marginBottom: '0.75rem' }}>
              <strong>🧑 User123</strong> • 2 hours ago
              <p>Great documentation! Is there a way to customize the activator cooldown?</p>
              <span>👍 5 &nbsp; 💬 2 replies</span>
            </div>
            <div style={{ paddingLeft: '1.5rem', borderLeft: '2px solid var(--doc-border)' }}>
              <strong>🧑 Ssomar</strong> • 1 hour ago
              <p>Yes! Check the cooldown configuration in the activator settings.</p>
              <span>👍 3</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

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