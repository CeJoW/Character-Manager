import Link from 'next/link';
import { BrandHeader } from '../components/BrandHeader';
import styles from './BuilderEntry.module.css';

type BuilderEntryProps = {
  system: string;
  edition: string;
  code: string;
  accent: 'pathfinder' | 'dnd';
};

export function BuilderEntry({ system, edition, code, accent }: BuilderEntryProps) {
  return (
    <main className={`${styles.page} ${styles[accent]}`}>
      <BrandHeader step="Система выбрана" />

      <section className={styles.content} aria-labelledby="builder-title">
        <div className={styles.orbit} aria-hidden="true">
          <span>{code}</span>
        </div>

        <p className={styles.eyebrow}>Следующая глава</p>
        <h1 id="builder-title">Создание персонажа</h1>
        <div className={styles.systemName}>
          <strong>{system}</strong>
          <span>{edition}</span>
        </div>
        <p className={styles.note}>
          Система выбрана. Здесь начнётся пошаговое создание твоего героя —
          от первого замысла до готового листа персонажа.
        </p>

        <div className={styles.status} role="status">
          <span className={styles.statusMark} aria-hidden="true">✦</span>
          <span>
            <strong>Конструктор — следующий этап</strong>
            <small>Точка входа уже готова</small>
          </span>
        </div>

        <nav className={styles.actions} aria-label="Навигация">
          <Link className={styles.primaryAction} href="/systems">← Выбрать другую систему</Link>
          <Link className={styles.secondaryAction} href="/">На главную</Link>
        </nav>
      </section>
    </main>
  );
}
