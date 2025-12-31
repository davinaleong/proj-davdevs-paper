import React from 'react';
import { cn } from '../../../../foundations/src/utils';

export interface PaperStackProps {
  children: React.ReactNode;
  className?: string;
  count?: number;
  offset?: 'sm' | 'md' | 'lg';
  shadow?: 'none' | 'soft' | 'medium' | 'hard';
  texture?: 'none' | 'grain' | 'linen' | 'fiber';
  rotation?: boolean;
  interactive?: boolean;
}

export const PaperStack: React.FC<PaperStackProps> = ({
  children,
  className,
  count = 3,
  offset = 'md',
  shadow = 'medium',
  texture = 'grain',
  rotation = true,
  interactive = false,
  ...props
}) => {
  const stackLayers = Array.from({ length: Math.min(count, 5) }, (_, i) => i);

  return (
    <div 
      className={cn(
        'paper-stack',
        `paper-stack-offset-${offset}`,
        `paper-stack-shadow-${shadow}`,
        `paper-stack-texture-${texture}`,
        rotation && 'paper-stack-rotated',
        interactive && 'paper-stack-interactive',
        className
      )}
      {...props}
    >
      {/* Background paper layers */}
      {stackLayers.slice(0, -1).map((_, index) => (
        <div
          key={`layer-${index}`}
          className={cn(
            'paper-stack-layer',
            `paper-stack-layer-${index + 1}`
          )}
          style={{
            '--layer-index': index + 1,
          } as React.CSSProperties}
        />
      ))}
      
      {/* Main content layer */}
      <div className="paper-stack-content">
        {children}
      </div>
    </div>
  );
};