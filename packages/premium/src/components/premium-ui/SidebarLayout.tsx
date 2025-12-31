import React from 'react';
import { cn } from '../../../../foundations/src/utils';

export interface SidebarLayoutProps {
  children: React.ReactNode;
  className?: string;
  sidebar: React.ReactNode;
  sidebarPosition?: 'left' | 'right';
  sidebarWidth?: 'sm' | 'md' | 'lg' | 'xl';
  gap?: 'none' | 'sm' | 'md' | 'lg';
  paperStyle?: 'flat' | 'elevated' | 'stacked';
  texture?: 'none' | 'grain' | 'linen' | 'fiber';
  responsive?: boolean;
  collapsible?: boolean;
}

export const SidebarLayout: React.FC<SidebarLayoutProps> = ({
  children,
  className,
  sidebar,
  sidebarPosition = 'left',
  sidebarWidth = 'md',
  gap = 'md',
  paperStyle = 'elevated',
  texture = 'grain',
  responsive = true,
  collapsible = false,
  ...props
}) => {
  const [isCollapsed, setIsCollapsed] = React.useState(false);

  return (
    <div 
      className={cn(
        'sidebar-layout',
        `sidebar-layout-${sidebarPosition}`,
        `sidebar-layout-width-${sidebarWidth}`,
        `sidebar-layout-gap-${gap}`,
        `sidebar-layout-${paperStyle}`,
        `sidebar-layout-texture-${texture}`,
        responsive && 'sidebar-layout-responsive',
        collapsible && 'sidebar-layout-collapsible',
        isCollapsed && 'sidebar-layout-collapsed',
        className
      )}
      {...props}
    >
      {/* Sidebar */}
      <aside className={cn(
        'sidebar-layout-sidebar',
        sidebarPosition === 'right' && 'order-2'
      )}>
        {collapsible && (
          <button
            className="sidebar-layout-toggle"
            onClick={() => setIsCollapsed(!isCollapsed)}
            aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          >
            <span className={cn(
              'sidebar-toggle-icon',
              isCollapsed && 'collapsed'
            )}>
              {sidebarPosition === 'left' ? '◀' : '▶'}
            </span>
          </button>
        )}
        
        <div className="sidebar-layout-sidebar-content">
          {!isCollapsed && sidebar}
        </div>
      </aside>

      {/* Main Content */}
      <main className={cn(
        'sidebar-layout-main',
        sidebarPosition === 'right' && 'order-1'
      )}>
        <div className="sidebar-layout-main-content">
          {children}
        </div>
      </main>
    </div>
  );
};