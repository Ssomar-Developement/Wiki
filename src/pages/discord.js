import React from 'react';
import Layout from '@theme/Layout';
import styles from './discord.module.css';

export default function Discord() {
  return (
    <Layout
      title="Discord Community"
      description="Join our Discord community for support and assistance">
      <div className={styles.discordContainer}>
        <div className={styles.header}>
          <h1>Need Help or Have Questions?</h1>
          <p className={styles.subtitle}>
            Join our Discord community for assistance:
          </p>
        </div>

        <div className={styles.discordEmbed}>
          <iframe
            src="https://discord.com/widget?id=701066025516531753&theme=dark"
            width="100%"
            height="500"
            allowTransparency="true"
            frameBorder="0"
            sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
            title="Discord Community Widget">
          </iframe>
        </div>
      </div>
    </Layout>
  );
}
