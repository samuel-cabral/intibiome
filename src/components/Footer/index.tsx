import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './styles.module.scss';

export function Footer() {
  return (
    <footer className={styles.pageFooter}>
      <ul>
        <li>
          <a href="/contact-us">contact us</a>
        </li>

        <li>
          <a href="/faq">faq</a>
        </li>

        <li>
          <a href="/site-map">site map</a>
        </li>

        <li>
          <a href="/privacy-policy">privacy policy</a>
        </li>

        <li>
          <a href="/cookies-policy">cookies policy</a>
        </li>

        <li>
          <a href="/legal-notice">legal notice</a>
        </li>
      </ul>

      <div className={styles.logos}>
        <a href="https://ulabs.com/">
          <img src="/images/logos/ulabs.png" alt="Ulabs" />
        </a>
        <a href="https://instagram.com/ulabs">
          <img src="/images/icons/instagram_icon.svg" alt="Instagram Icon" />
        </a>
      </div>
    </footer>
  );
}
