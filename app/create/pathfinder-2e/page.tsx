import type { Metadata } from 'next';
import { BuilderEntry } from '../BuilderEntry';

export const metadata: Metadata = {
  title: 'Создание персонажа Pathfinder 2e — Character Manager',
};

export default function PathfinderBuilderEntry() {
  return <BuilderEntry system="Pathfinder" edition="2e" code="PF2e" accent="pathfinder" />;
}
