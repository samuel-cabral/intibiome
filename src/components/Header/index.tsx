import { useState } from 'react';
import { DropdownMenu } from '../DropdownMenu';

import styles from './styles.module.scss';

export function Header() {
  const [aboutUs] = useState(['brand philosophy', 'product technology']);

  const [ourProducts] = useState([
    'all products',
    'intibiome wellness',
    'intibiome active',
    'intibiome agecare',
  ]);

  const [intimateHealth] = useState([
    'article 1',
    'article 2',
    'article 3',
    'faq',
  ]);

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <div className={styles.headerTop}>
          <div>
            <img src="/images/logos/logo.png" alt="intibiome" />
          </div>
          <div className={styles.searchIconContainer}>
            <img src="/images/icons/search.svg" alt="Search Icon" />
          </div>
        </div>

        <nav>
          <DropdownMenu title="about us" list={aboutUs} />
          <DropdownMenu title="our products" list={ourProducts} />
          <DropdownMenu title="our products" list={intimateHealth} />
          <a href="/contact-us">contact us</a>
        </nav>
      </div>
    </header>
  );
}
