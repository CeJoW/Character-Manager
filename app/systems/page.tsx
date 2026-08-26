import type { Metadata } from 'next';
import Link from 'next/link';
import { BrandHeader } from '../components/BrandHeader';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Выбор игровой системы — Character Manager',
  description: 'Выберите Pathfinder 2e или Dungeons & Dragons 5e · 2014 для нового персонажа.',
};

const systems = [
  {
    name: 'Pathfinder',
    edition: '2e',
    code: 'PF2e',
    description: 'Гибкая система развития, где каждый выбор помогает собрать уникального героя.',
    href: '/create/pathfinder-2e',
    accent: 'pathfinder',
  },
  {
    name: 'Dungeons & Dragons',
    edition: '5e · 2014',
    code: 'D&D',
    description: 'Классическое героическое приключение в самой узнаваемой редакции пятой версии.',
    href: '/create/dnd-5e-2014',
    accent: 'dnd',
  },
] as const;

export default function SystemsPage() {
  return (
    <main className={styles.page}>
      <BrandHeader step="Шаг 1 из 1" />

      <section className={styles.content} aria-labelledby="systems-title">
        <div className={styles.heading}>
          <Link className={styles.back} href="/">← На главную</Link>
          <p className={styles.eyebrow}>Новый персонаж</p>
          <h1 id="systems-title">Выбери игровую систему</h1>
          <p>
            От неё зависят правила, характеристики и дальнейший путь создания героя.
          </p>
        </div>

        <div className={styles.grid}>
          {systems.map((system, index) => (
            <Link
              className={`${styles.systemCard} ${styles[system.accent]}`}
              href={system.href}
              key={system.code}
            >
              <span className={styles.number}>0{index + 1}</span>
              <span className={styles.symbol} aria-hidden="true">
                <i>{system.code}</i>
              </span>
              <span className={styles.systemName}>
                <strong>{system.name}</strong>
                <span>{system.edition}</span>
              </span>
              <span className={styles.description}>{system.description}</span>
              <span className={styles.choose}>
                Создать персонажа <i aria-hidden="true">→</i>
              </span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
