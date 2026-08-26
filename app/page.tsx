import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <Link className={styles.brand} href="/" aria-label="Character Manager — на главную">
          <span className={styles.brandMark} aria-hidden="true"><i>CM</i></span>
          <span className={styles.brandName}>Character Manager</span>
        </Link>
        <span className={styles.version}>Ранняя версия</span>
      </header>

      <section className={styles.hero} aria-labelledby="home-title">
        <div className={styles.intro}>
          <p className={styles.eyebrow}>Твои герои. Твои истории.</p>
          <h1 id="home-title">С чего начнём?</h1>
          <p className={styles.lead}>
            Создавай персонажей для любимых настольных ролевых игр и храни всё
            важное в одном месте.
          </p>
          <div className={styles.flourish} aria-hidden="true">
            <span />
            <i>✦</i>
            <span />
          </div>
        </div>

        <div className={styles.actions} aria-label="Действия с персонажем">
          <Link className={`${styles.actionCard} ${styles.primaryCard}`} href="/systems">
            <span className={styles.cardNumber}>01</span>
            <span className={styles.cardIcon} aria-hidden="true">＋</span>
            <span className={styles.cardCopy}>
              <strong>Создать персонажа</strong>
              <span>Начать новую историю с чистого листа</span>
            </span>
            <span className={styles.cardArrow} aria-hidden="true">→</span>
          </Link>

          <div className={`${styles.actionCard} ${styles.disabledCard}`} aria-disabled="true">
            <span className={styles.cardNumber}>02</span>
            <span className={styles.cardIcon} aria-hidden="true">↥</span>
            <span className={styles.cardCopy}>
              <span className={styles.titleRow}>
                <strong>Загрузить персонажа</strong>
                <small>Скоро</small>
              </span>
              <span>Продолжить путь уже знакомого героя</span>
            </span>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <span>Поддерживаемые системы</span>
        <span className={styles.dot} aria-hidden="true" />
        <span>Pathfinder 2e</span>
        <span className={styles.dot} aria-hidden="true" />
        <span>D&amp;D 5e · 2014</span>
      </footer>
    </main>
  );
}
