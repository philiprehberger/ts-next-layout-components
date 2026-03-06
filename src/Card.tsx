import { type ReactNode } from 'react';
import clsx from 'clsx';

export type CardPadding = 'none' | 'sm' | 'md' | 'lg';

export interface CardProps {
  title?: string;
  children: ReactNode;
  className?: string;
  contentWrapperClassName?: string;
  /** Padding size (default: "md") */
  padding?: CardPadding;
  /** Enable hover effect via "card-hover" class (default: false) */
  hoverable?: boolean;
}

const paddingClasses: Record<CardPadding, string> = {
  none: '',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
};

/**
 * Card container with optional title, configurable padding, and hover effect.
 * Styled for light/dark mode with Tailwind CSS.
 */
export function Card({
  title,
  children,
  className,
  contentWrapperClassName,
  padding = 'md',
  hoverable = false,
}: CardProps) {
  return (
    <div
      className={clsx(
        'rounded-xl bg-white dark:bg-gray-900',
        'border border-gray-200 dark:border-gray-800',
        'shadow-sm',
        hoverable && 'card-hover',
        paddingClasses[padding],
        className
      )}
    >
      {title && (
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
          {title}
        </h2>
      )}
      <div className={contentWrapperClassName}>{children}</div>
    </div>
  );
}
