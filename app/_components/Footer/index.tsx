import Link from 'next/link';
import styles from './index.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <nav className={styles.nav}>
        <ul className={styles.items}>
          <li className={styles.item}>
            <Link href="/news">記事一覧</Link>
          </li>
          <li className={styles.item}>
            <Link href="/members">自己紹介（今後作成予定）</Link>
          </li>
          <li className={styles.item}>
            <Link href="/contact">お問い合わせ（今後作成予定）</Link>
          </li>
        </ul>
      </nav>
      <p className={styles.cr}>© SIMPLE. ALL Rights Reserved 2024</p>
    </footer>
  );
}