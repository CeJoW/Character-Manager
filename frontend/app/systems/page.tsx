import type { Metadata } from 'next';
import { HeroArchive } from '../components/HeroArchive';

export const metadata: Metadata = {
  title: 'Выбор игровой системы — Архив Героев',
  description: 'Pathfinder 2e и Dungeons & Dragons 5e · 2014. Билдер персонажей находится в разработке.',
};

export default function SystemsPage() {
  return <HeroArchive view="systems" />;
}
