import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './index.module.css';

const plugins = [
  {
    title: 'ExecutableItems',
    description: 'Create custom items with advanced features, commands, and behaviors for your Minecraft server.',
    link: '/docs/executableitems/information-ei',
    icon: '⚔️',
  },
  {
    title: 'ExecutableBlocks',
    description: 'Design custom blocks with unique functionalities and interactive features.',
    link: '/docs/executableblocks/information-eb',
    icon: '🧱',
  },
  {
    title: 'ExecutableEvents',
    description: 'Set up custom events and triggers to enhance your server gameplay experience.',
    link: '/docs/executableevents/information-ee',
    icon: '⚡',
  },
  {
    title: 'MyFurniture',
    description: 'Add custom furniture and decorative elements to enrich your Minecraft world.',
    link: '/docs/myfurniture/information-mf',
    icon: '🪑',
  },
  {
    title: 'ExecutableCrafting',
    description: 'Create custom crafting recipes with advanced conditions and outputs.',
    link: '/docs/executablecrafting/information-ec',
    icon: '🔨',
  },
  {
    title: 'AI Chat Moderation',
    description: 'Intelligent chat moderation powered by AI to keep your server chat clean and safe.',
    link: '/docs/ai-chat-moderation/information-acm',
    icon: '🤖',
  },
  {
    title: 'CustomPiglinsTrades',
    description: 'Customize Piglin bartering trades with your own items and exchange rates.',
    link: '/docs/custompiglinstrades/information-cpt',
    icon: '🐷',
  },
  {
    title: 'ScreenShop',
    description: 'Create immersive shop interfaces with custom screens and menus.',
    link: '/docs/screenshop/information-screenshop',
    icon: '🛒',
  },
];

function PluginCard({title, description, link, icon}) {
  return (
    <Link to={link} className={styles.pluginCard}>
      <div className={styles.cardIcon}>{icon}</div>
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardDescription}>{description}</p>
      <div className={styles.cardArrow}>→</div>
    </Link>
  );
}

export default function Home() {
  return (
    <Layout
      title="Home"
      description="Complete documentation for Score Plugins - ExecutableItems, ExecutableBlocks, ExecutableEvents, and more">
      <main className={styles.mainContainer}>
        <div className={styles.hero}>
          <h1 className={styles.heroTitle}>Score Plugins Wiki</h1>
          <p className={styles.heroSubtitle}>
            Complete documentation for ExecutableItems, ExecutableBlocks, ExecutableEvents, and more
          </p>
        </div>

        <div className={styles.pluginsGrid}>
          {plugins.map((plugin, idx) => (
            <PluginCard key={idx} {...plugin} />
          ))}
        </div>
      </main>
    </Layout>
  );
}
