import type { Metadata } from 'next';
import { BuilderEntry } from '../BuilderEntry';

export const metadata: Metadata = {
  title: 'Создание персонажа D&D 5e · 2014 — Character Manager',
};

export default function DndBuilderEntry() {
  return <BuilderEntry system="Dungeons & Dragons" edition="5e · 2014" code="D&D" accent="dnd" />;
}
