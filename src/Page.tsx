import { type ReactNode } from 'react';
import clsx from 'clsx';

export type MaxWidth = 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';

export interface PageProps {
  children: ReactNode;
  className?: string;
  /** Max width constraint (default: "xl") */
  maxWidth?: MaxWidth;
}

const maxWidthClasses: Record<MaxWidth, string> = {
  sm: 'max-w-screen-sm',
  md: 'max-w-screen-md',
  lg: 'max-w-screen-lg',
  xl: 'max-w-screen-xl',
  '2xl': 'max-w-screen-2xl',
  full: 'max-w-full',
};

/**
 * Page wrapper with responsive padding and configurable max width.
 */
export function Page({ children, className, maxWidth = 'xl' }: PageProps) {
  return (
    <main
      className={clsx(
        'mx-auto px-4 py-8 sm:px-6 lg:px-8',
        maxWidthClasses[maxWidth],
        className
      )}
    >
      {children}
    </main>
  );
}
