import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

export default function CustomTag({ type, version, children, compact = false }) {
  const getTagConfig = () => {
    switch(type) {
      case 'paper':
        return {
          icon: '/img/paper-logo.png',
          label: children || 'Only for Paper and forks',
          className: styles.paperTag
        };
      case 'version':
        return {
          icon: '/img/minecraft-logo.png',
          label: children || `Only for version ${version}+`,
          className: styles.versionTag
        };
      case 'premium':
        return {
          icon: '/img/premium-icon.png',
          label: children || 'Premium Only',
          className: styles.premiumTag
        };
      case 'spigot':
        return {
          icon: '/img/spigot-logo.png',
          label: children || 'Only for Spigot',
          className: styles.spigotTag
        };
      case 'player_none':
        return {
          icon: null,
          label: children || 'PLAYER_NONE',
          className: styles.playerNoneTag
        };
      case 'player_block':
        return {
          icon: null,
          label: children || 'PLAYER_BLOCK',
          className: styles.playerBlockTag
        };
      case 'player_entity':
        return {
          icon: null,
          label: children || 'PLAYER_ENTITY',
          className: styles.playerEntityTag
        };
      case 'player_target':
        return {
          icon: null,
          label: children || 'PLAYER_TARGET',
          className: styles.playerTargetTag
        };
      case 'block_none':
        return {
          icon: null,
          label: children || 'BLOCK_NONE',
          className: styles.blockNoneTag
        };
      case 'block_block':
        return {
          icon: null,
          label: children || 'BLOCK_BLOCK',
          className: styles.blockBlockTag
        };
      case 'block_entity':
        return {
          icon: null,
          label: children || 'BLOCK_ENTITY',
          className: styles.blockEntityTag
        };
      case 'block_player':
        return {
          icon: null,
          label: children || 'BLOCK_PLAYER',
          className: styles.blockPlayerTag
        };
      case 'specific_activators':
        return {
          icon: null,
          label: children || 'SPECIFIC_ACTIVATORS',
          className: styles.specificActivatorsTag
        };
      default:
        return {
          icon: null,
          label: children || 'Custom Tag',
          className: styles.defaultTag
        };
    }
  };

  const config = getTagConfig();
  const iconUrl = useBaseUrl(config.icon || '');

  return (
    <span className={`${styles.customTag} ${config.className} ${compact ? styles.compact : ''}`}>
      {config.icon && (
        <img
          src={iconUrl}
          alt=""
          className={styles.tagIcon}
          onError={(e) => {
            // Hide icon if image fails to load
            e.target.style.display = 'none';
          }}
        />
      )}
      <span className={styles.tagLabel}>{config.label}</span>
    </span>
  );
}
