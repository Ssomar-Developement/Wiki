import React from 'react';
import DocsSearchBar from '@site/src/components/SearchNavbarItem';

export default function SearchNavbarItem({mobile, className}) {
  if (mobile) {
    return (
      <li className="menu__list-item">
        <DocsSearchBar mobile={mobile} className={className} />
      </li>
    );
  }
  return <DocsSearchBar mobile={mobile} className={className} />;
}
