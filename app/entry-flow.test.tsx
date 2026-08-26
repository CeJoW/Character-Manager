import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import Home from './page';
import SystemsPage from './systems/page';
import { BuilderEntry } from './create/BuilderEntry';

afterEach(cleanup);

describe('стартовый сценарий', () => {
  it('ведёт со стартовой страницы к выбору системы', () => {
    render(<Home />);

    expect(screen.getByRole('heading', { name: 'С чего начнём?' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Создать персонажа/i })).toHaveAttribute('href', '/systems');
    expect(screen.getByText('Загрузить персонажа').closest('[aria-disabled="true"]')).toBeInTheDocument();
    expect(screen.getByText('Скоро')).toBeInTheDocument();
  });

  it('показывает два равнозначных варианта игровой системы', () => {
    render(<SystemsPage />);

    expect(screen.getByRole('heading', { name: 'Выбери игровую систему' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Pathfinder/i })).toHaveAttribute('href', '/create/pathfinder-2e');
    expect(screen.getByRole('link', { name: /Dungeons & Dragons/i })).toHaveAttribute('href', '/create/dnd-5e-2014');
  });

  it('сохраняет выбранную систему на входе в конструктор', () => {
    render(<BuilderEntry system="Pathfinder" edition="2e" code="PF2e" accent="pathfinder" />);

    expect(screen.getByRole('heading', { name: 'Создание персонажа' })).toBeInTheDocument();
    expect(screen.getByText('Pathfinder')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Выбрать другую систему/i })).toHaveAttribute('href', '/systems');
  });
});
