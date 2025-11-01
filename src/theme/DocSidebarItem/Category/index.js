import React from 'react';
import Category from '@theme-original/DocSidebarItem/Category';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

export default function CategoryWrapper(props) {
  const {item} = props;
  const icon = item.customProps?.icon;
  const iconUrl = useBaseUrl(icon || '');

  // If there's an icon, we need to modify the label
  if (icon) {
    // Clone the item and add the icon to the label
    const modifiedItem = {
      ...item,
      label: (
        <>
          <img src={iconUrl} alt="" className={styles.categoryIcon} />
          {item.label}
        </>
      ),
    };

    return <Category {...props} item={modifiedItem} />;
  }

  // No icon, render normally
  return <Category {...props} />;
}
