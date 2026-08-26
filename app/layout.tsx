import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://character-manager-rpg.kharseevvlad.chatgpt.site'),
  title: 'Архив Героев — персонажи для НРИ',
  description: 'Создавайте и храните героев для Pathfinder 2e и Dungeons & Dragons 5e в мрачном космическом архиве.',
  openGraph: {
    title: 'Архив Героев',
    description: 'Твои герои. Их судьбы. Один архив.',
    images: [{ url: '/og.png', width: 1730, height: 909, alt: 'Архив Героев.' }],
    locale: 'ru_RU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Архив Героев',
    description: 'Твои герои. Их судьбы. Один архив.',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
