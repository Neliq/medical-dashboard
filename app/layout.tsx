// Import statements are grouped and ordered for better readability
import type { Metadata } from "next";
import localFont from 'next/font/local'
import { cn } from "@/lib/utils"
import LeftMenu from "@/components/blocks/LeftMenu";
import DashboardBody from "@/components/blocks/DashboardBody";
import "./globals.css";

// Font paths
const fontSans = localFont({
  variable: "--font-sans",
  src: [
    { path: '../fonts/Gilroy-Black.woff2', weight: '900', style: 'normal' },
    { path: '../fonts/Gilroy-BlackItalic.woff2', weight: '900', style: 'italic' },
    { path: '../fonts/Gilroy-Extrabold.woff2', weight: '800', style: 'normal' },
    { path: '../fonts/Gilroy-ExtraboldItalic.woff2', weight: '800', style: 'italic' },
    { path: '../fonts/Gilroy-Bold.woff2', weight: '700', style: 'normal' },
    { path: '../fonts/Gilroy-BoldItalic.woff2', weight: '700', style: 'italic' },
    { path: '../fonts/Gilroy-Semibold.woff2', weight: '600', style: 'normal' },
    { path: '../fonts/Gilroy-SemiboldItalic.woff2', weight: '600', style: 'italic' },
    { path: '../fonts/Gilroy-Medium.woff2', weight: '500', style: 'normal' },
    { path: '../fonts/Gilroy-MediumItalic.woff2', weight: '500', style: 'italic' },
    { path: '../fonts/Gilroy-Regular.woff2', weight: '400', style: 'normal' },
    { path: '../fonts/Gilroy-RegularItalic.woff2', weight: '400', style: 'italic' },
    { path: '../fonts/Gilroy-Light.woff2', weight: '300', style: 'normal' },
    { path: '../fonts/Gilroy-LightItalic.woff2', weight: '300', style: 'italic' },
    { path: '../fonts/Gilroy-UltraLight.woff2', weight: '200', style: 'normal' },
    { path: '../fonts/Gilroy-UltraLightItalic.woff2', weight: '200', style: 'italic' },
    { path: '../fonts/Gilroy-Thin.woff2', weight: '100', style: 'normal' },
    { path: '../fonts/Gilroy-ThinItalic.woff2', weight: '100', style: 'italic' },
  ],
});

// Props are destructured directly in the function signature for brevity
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <div className="flex fixed inset-0 p-0 items-center space-x-0 space-y-0 rounded-2xl bg-white">
          <LeftMenu />
          <DashboardBody>{children}</DashboardBody>
        </div>
      </body>
    </html>
  );
}