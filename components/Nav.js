import Link from 'next/link';
import styles from '@/styles/Nav.module.css';

function Nav() {
  return (
    <nav className={styles.nav}>
      <Link href='/resume'>Resume</Link>
    </nav>
  );
}

export default Nav;
