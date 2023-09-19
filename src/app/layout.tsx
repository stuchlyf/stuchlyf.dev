import React from "react";
import './globals.css'
import type { Metadata } from 'next'
import { Playfair_Display, Poppins } from 'next/font/google'
import {clsx} from "clsx";
import {Header} from "@/components/header";
import {ThemeProvider} from "@/components/theme-provider";
import BackgroundCircles from "@/components/background-circles";

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
} satisfies Metadata

export type RootLayoutProps = {
  children: React.ReactNode
}

const bodyClassName = clsx(playfairDisplay.variable, poppins.variable, 'h-safe-screen', 'flex', 'flex-col');

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
          <BackgroundCircles />
          <Header />
          {children}
        </ThemeProvider>
        </body>
    </html>
  )
}
