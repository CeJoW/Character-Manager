import Link from 'next/link';
import styles from './HeroArchive.module.css';

const systems = [
  {
    mark: 'PF',
    title: 'Pathfinder',
    edition: 'Вторая редакция',
    description: 'Мир сложных судеб, древних тайн и бесчисленных путей развития.',
  },
  {
    mark: 'D20',
    title: 'Dungeons & Dragons',
    edition: '5e · 2014',
    description: 'Классическая летопись героических приключений и великих свершений.',
  },
] as const;

type HeroArchiveProps = {
  view?: 'home' | 'systems';
};

export function HeroArchive({ view = 'home' }: HeroArchiveProps) {
  return (
    <main className={styles.archive}>
      <header className={styles.header}>
        <Link className={styles.brand} href="/" aria-label="Архив Героев — на главную">
          <strong>Архив Героев</strong>
        </Link>
      </header>

      {view === 'home' ? <HomeView /> : <SystemsView />}

      <footer className={styles.footer}>
        <span>Pathfinder 2e</span>
        <i aria-hidden="true" />
        <span>D&amp;D 5e · 2014</span>
      </footer>
    </main>
  );
}

function HomeView() {
  return (
    <section className={styles.home} aria-labelledby="home-title">
      <div className={styles.heroCopy}>
        <p className={styles.eyebrow}><span /> Добро пожаловать, летописец <span /></p>
        <h1 id="home-title">С чего<br /><em>начнём?</em></h1>
        <p className={styles.lead}>
          Создай нового героя или призови из архива того,
          чья история уже началась.
        </p>
        <div className={styles.runeDivider} aria-hidden="true"><span />◇<span /></div>
      </div>

      <div className={styles.actions} aria-label="Действия с персонажем">
        <Link className={`${styles.actionCard} ${styles.createCard}`} href="/systems">
          <span className={styles.actionNumber}>I</span>
          <span className={styles.actionIcon} aria-hidden="true">✦</span>
          <span className={styles.actionText}>
            <small>Начать новую летопись</small>
            <strong>Создать персонажа</strong>
            <em>Выбрать систему и открыть чистый лист</em>
          </span>
          <span className={styles.arrow} aria-hidden="true">→</span>
        </Link>

        <button className={`${styles.actionCard} ${styles.loadCard}`} type="button" disabled>
          <span className={styles.actionNumber}>II</span>
          <span className={styles.actionIcon} aria-hidden="true">⌁</span>
          <span className={styles.actionText}>
            <small>Продолжить путь</small>
            <strong>Загрузить персонажа</strong>
            <em>Врата архива пока запечатаны</em>
          </span>
          <span className={styles.locked}>Скоро</span>
        </button>
      </div>
    </section>
  );
}

function SystemsView() {
  return (
    <section className={styles.systems} aria-labelledby="systems-title">
      <Link className={styles.backLink} href="/">← Вернуться в главный зал</Link>
      <div className={styles.systemsHeading}>
        <p className={styles.eyebrow}><span /> Новая летопись <span /></p>
        <h1 id="systems-title">Выбери мир</h1>
        <p>Правила мира определят путь героя. Билдер находится в разработке, поэтому печати пока закрыты.</p>
      </div>

      <div className={styles.systemGrid}>
        {systems.map((system) => (
          <button className={styles.systemCard} type="button" disabled key={system.title}>
            <span className={styles.systemMark} aria-hidden="true">{system.mark}</span>
            <span className={styles.systemInfo}>
              <small>{system.edition}</small>
              <strong>{system.title}</strong>
              <em>{system.description}</em>
            </span>
            <span className={styles.systemLock}>В разработке</span>
          </button>
        ))}
      </div>
    </section>
  );
}
