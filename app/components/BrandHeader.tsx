import Link from 'next/link';
import styles from './BrandHeader.module.css';

type BrandHeaderProps = {
  step?: string;
};

export function BrandHeader({ step }: BrandHeaderProps) {
  return (
    <header className={styles.header}>
      <Link className={styles.brand} href="/" aria-label="Character Manager — на главную">
        <span className={styles.brandMark} aria-hidden="true"><i>CM</i></span>
        <span className={styles.brandName}>Character Manager</span>
      </Link>
      {step ? <span className={styles.step}>{step}</span> : null}
    </header>
  );
}
