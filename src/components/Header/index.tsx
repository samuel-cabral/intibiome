import styles from './styles.module.scss';

export function Header() {
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
          <a>about us</a>
          <a>our products</a>
          <a>intimate health</a>
          <a>contact us</a>
        </nav>
      </div>
    </header>
  );
}
