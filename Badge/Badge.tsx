// src/components/Badge.tsx
import React from 'react';
import classNames from 'classnames';

type BadgeColor = 'primary' | 'success' | 'warning' | 'danger';
type BadgeSize = 'sm' | 'md' | 'lg';

type BadgeProps = {
  color?: BadgeColor;
  size?: BadgeSize;
  children: React.ReactNode;
};

const colorClasses: Record<BadgeColor, string> = {
  primary: 'bg-blue-500 text-white',
  success: 'bg-green-500 text-white',
  warning: 'bg-yellow-400 text-black',
  danger: 'bg-red-500 text-white',
};

const sizeClasses: Record<BadgeSize, string> = {
  sm: 'text-xs px-2 py-0.5',
  md: 'text-sm px-3 py-1',
  lg: 'text-base px-4 py-1.5',
};

export default function Badge({
  color = 'primary',
  size = 'md',
  children
}: BadgeProps) {
  return (
    <span
      className={classNames(
        'inline-block rounded-full font-medium',
        colorClasses[color],
        sizeClasses[size]
      )}
    >
      {children}
    </span>
  );
}
