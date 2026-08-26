import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import Home from './page';
import SystemsPage from './systems/page';

afterEach(() => {
  cleanup();
});

describe('сценарий Архива Героев', () => {
  it('показывает создание слева, а загрузку справа', () => {
    render(<Home />);

    expect(screen.getByRole('heading', { name: /С чего\s*начнём/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Создать персонажа/i })).toHaveAttribute('href', '/systems');
    expect(screen.getByRole('button', { name: /Загрузить персонажа/i })).toBeDisabled();
  });

  it('не позволяет перейти к отсутствующему билдеру', () => {
    render(<SystemsPage />);

    expect(screen.getByRole('heading', { name: 'Выбери мир' })).toBeInTheDocument();
    expect(screen.getAllByText('В разработке')).toHaveLength(2);
    expect(screen.queryByRole('link', { name: /Pathfinder/i })).not.toBeInTheDocument();
    expect(screen.queryByRole('link', { name: /Dungeons & Dragons/i })).not.toBeInTheDocument();
  });
});
