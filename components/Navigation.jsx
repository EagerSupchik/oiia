import Link from 'next/link';
import styles from './Navigation.module.css';

export function Navigation() {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <img src="/images/main_cat.gif" alt="Cat logo" />
      </div>
      <div className={styles.links}>
        <Link href="/about" className={styles.link}>
          About Us
        </Link>
        <Link href="/" className={styles.link}>
          Home
        </Link>
        <Link href="/contact" className={styles.link}>
          Contact Us
        </Link>
      </div>
    </nav>
  );
}
