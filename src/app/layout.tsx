import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { ScrollProgressBar } from '@/components/shared/scroll-progress-bar';

export const metadata: Metadata = {
  title: 'Monkey Prints',
  description: 'Design and print your custom T-shirts.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-background">
        <ScrollProgressBar />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
