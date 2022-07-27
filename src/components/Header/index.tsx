import { useState } from 'react';
import Hamburger from 'hamburger-react';

import { DropdownMenu } from '../DropdownMenu';
import { Logo } from '../Logo';
import { MenuButton } from '../MenuButton';

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

  const [activeMenu, setActiveMenu] = useState(false);

  const toggleMenu = () => {
    setActiveMenu(!activeMenu);
  };

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <div className={styles.headerTop}>
          <MenuButton
            onClick={() => {
              if (!document.body.classList.contains('overflowHidden')) {
                document.body.classList.add('overflowHidden');
              } else {
                document.body.classList.remove('overflowHidden');
              }
            }}
          >
            <div>
              <Hamburger
                toggled={activeMenu}
                toggle={toggleMenu}
                size={18}
                direction="left"
              />
            </div>
          </MenuButton>
          <Logo styles={styles} />
          <MenuButton>
            <img src="/images/icons/search.svg" alt="Search Button" />
          </MenuButton>
        </div>

        <nav className={activeMenu ? styles.menuOpen : styles.menuClose}>
          {activeMenu ? (
            ourProducts
              .concat(intimateHealth)
              .map(menuOption => (
                <a href={menuOption.replace(' ', '_')}>{menuOption}</a>
              ))
          ) : (
            <>
              <DropdownMenu title="about us" list={aboutUs} />
              <DropdownMenu title="our products" list={ourProducts} />
              <DropdownMenu title="intimate health" list={intimateHealth} />
            </>
          )}
          <a href="/contact-us">contact us</a>
        </nav>
      </div>
    </header>
  );
}
