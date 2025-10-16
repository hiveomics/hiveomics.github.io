import { HTMLAttributes } from 'react';

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  containerWidth?: 'full' | 'container' | 'content';
  className?: string;
}

export default function Section({
  children,
  containerWidth = 'container',
  className = '',
  ...props
}: SectionProps) {
  const widthClasses = {
    full: '',
    container: 'container',
    content: 'content',
  };

  return (
    <section className={`section ${className}`.trim()} {...props}>
      {containerWidth === 'full' ? (
        children
      ) : (
        <div className={widthClasses[containerWidth]}>{children}</div>
      )}
    </section>
  );
}
