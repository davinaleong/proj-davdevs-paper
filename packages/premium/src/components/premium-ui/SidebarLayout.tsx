import React from 'react';
import { cn } from '@davdevs/paper-foundations';

export interface SidebarLayoutProps {
  children: React.ReactNode;
  sidebar: React.ReactNode;
  className?: string;

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
  sidebar,
  className,

  sidebarPosition = 'left',
  sidebarWidth = 'md',
  gap = 'md',

  paperStyle = 'elevated',
  texture = 'grain',

  responsive = true,
  collapsible = false,
}) => {
  const [collapsed, setCollapsed] = React.useState(false);

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
        collapsed && 'sidebar-layout-collapsed',
        className
      )}
    >
      {/* Sidebar */}
      {!collapsed && (
        <aside className="sidebar-layout-sidebar">
          {collapsible && (
            <button
              className="sidebar-layout-toggle"
              onClick={() => setCollapsed(true)}
              aria-label="Collapse sidebar"
            >
              {sidebarPosition === 'left' ? '◀' : '▶'}
            </button>
          )}

          <div className="sidebar-layout-sidebar-content">
            {sidebar}
          </div>
        </aside>
      )}

      {/* Main */}
      <main className="sidebar-layout-main">
        {collapsible && collapsed && (
          <button
            className="sidebar-layout-toggle sidebar-layout-toggle-expand"
            onClick={() => setCollapsed(false)}
            aria-label="Expand sidebar"
          >
            {sidebarPosition === 'left' ? '▶' : '◀'}
          </button>
        )}

        <div className="sidebar-layout-main-content">
          {children}
        </div>
      </main>
    </div>
  );
};
