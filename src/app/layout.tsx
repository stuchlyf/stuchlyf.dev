import React from "react";
import './globals.css'
import type { Metadata } from 'next'
import { Playfair_Display, Poppins } from 'next/font/google'
import {clsx} from "clsx";
import {Header} from "@/components/header";
import {ThemeProvider} from "@/components/theme-provider";
import BackgroundCircles from "@/components/background-circles";
import {Analytics} from "@vercel/analytics/react";

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  style: ['italic'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-playfair-display'
});
const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export const metadata = {
  title: 'stuchlyf.',
  description: 'My Portfolio showing off my professional experience, the projects I\'ve worked on and how to contact me.',
  keywords: ['portfolio', 'stuchlyf', 'florian stuchly', 'stuchly', 'software', 'engineer', 'developer', 'web developer', 'fullstack developer', 'fullstack', 'hof', 'german', 'cv', 'curriculum vitae'],
  icons: [
    { url: '/apple-touch-icon.png', sizes: '180x180', rel: 'apple-touch-icon' },
    { url: '/favicon-32x32.png', sizes: '32x32', rel: 'icon', type: 'image/png' },
    { url: '/favicon-16x16.png', sizes: '16x16', rel: 'icon', type: 'image/png' },
    { url: '/safari-pinned-tab.svg', rel: 'mask-icon', color: '#241f25' },
  ],
  manifest: '/site.webmanifest',
  themeColor: '#241f25',

} satisfies Metadata;

export type RootLayoutProps = {
  children: React.ReactNode
}

const bodyClassName = clsx(
  playfairDisplay.variable,
  poppins.variable,
  'h-safe-screen',
  'max-h-safe-screen',
);

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning className={'min-h-safe-screen'}>
      <body className={bodyClassName}>
        <ThemeProvider
          attribute={'class'}
          defaultTheme={'system'}
          enableSystem
          disableTransitionOnChange
        >
          <div className={'h-full grid grid-rows-[auto_1fr]'}>
            <Header />
            {children}
          </div>
        </ThemeProvider>
        <Analytics />
        <BackgroundCircles />
      </body>
    </html>
  )
}
