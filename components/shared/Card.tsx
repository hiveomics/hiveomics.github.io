import { HTMLAttributes } from 'react';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hoverable?: boolean;
  className?: string;
}

export default function Card({ children, hoverable = false, className = '', ...props }: CardProps) {
  const classes = `card ${hoverable ? 'card-hoverable' : ''} ${className}`.trim();

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
}
