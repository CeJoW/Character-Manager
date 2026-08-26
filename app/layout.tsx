import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.SITE_URL ?? 'http://localhost:3000'),
  title: 'Character Manager — менеджер персонажей для НРИ',
  description: 'Создавайте персонажей для Pathfinder 2e и Dungeons & Dragons 5e и храните всё важное в одном месте.',
  openGraph: {
    title: 'Character Manager',
    description: 'Твои герои. Твои истории.',
    images: [{ url: '/og.png', width: 1743, height: 910, alt: 'Character Manager — Твои герои. Твои истории.' }],
    locale: 'ru_RU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Character Manager',
    description: 'Твои герои. Твои истории.',
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
