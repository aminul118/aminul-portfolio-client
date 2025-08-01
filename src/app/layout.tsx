import './globals.css';
import ThemeProvider from '@/providers/ThemeProvider';
import { spaceGrotesk } from '@/lib/fonts';
import AosProvider from '@/providers/AosProvider';
import { Toaster } from 'sonner';
import { TChildren } from '@/types';

const MainLayout = ({ children }: TChildren) => {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body className={spaceGrotesk.className}>
          <AosProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="dark"
              enableSystem
              disableTransitionOnChange
            >
              {children}
            </ThemeProvider>
          </AosProvider>
          <Toaster position="top-center" />
        </body>
      </html>
    </>
  );
};

export default MainLayout;
