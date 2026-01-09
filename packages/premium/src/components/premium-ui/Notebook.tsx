import React, { useState } from 'react';
import { cn } from '@davdevs/paper-foundations';

export interface NotebookPage {
  id: string;
  title: string;
  content: React.ReactNode;
  icon?: string;
  disabled?: boolean;
}

export interface NotebookProps {
  children?: React.ReactNode;
  className?: string;
  pages?: NotebookPage[];
  defaultPage?: string;
  activePage?: string;
  onPageChange?: (pageId: string) => void;
  style?: 'spiral' | 'composition' | 'leather' | 'ring';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  lines?: 'none' | 'ruled' | 'dotted' | 'grid';
  texture?: 'none' | 'grain' | 'linen' | 'fiber';
  binding?: 'left' | 'top' | 'right';
  interactive?: boolean;
}

export const Notebook: React.FC<NotebookProps> = ({
  children,
  className,
  pages = [],
  defaultPage,
  activePage,
  onPageChange,
  style = 'spiral',
  size = 'md',
  lines = 'ruled',
  texture = 'grain',
  binding = 'left',
  interactive = true,
  ...props
}) => {
  const [currentPage, setCurrentPage] = useState(
    activePage || defaultPage || (pages.length > 0 ? pages[0].id : '')
  );

  const handlePageChange = (pageId: string) => {
    if (onPageChange) {
      onPageChange(pageId);
    } else {
      setCurrentPage(pageId);
    }
  };

  const activePageId = activePage || currentPage;
  const activePageData = pages.find(page => page.id === activePageId);

  return (
    <div 
      className={cn(
        'notebook',
        `notebook-${style}`,
        `notebook-${size}`,
        `notebook-lines-${lines}`,
        `notebook-texture-${texture}`,
        `notebook-binding-${binding}`,
        interactive && 'notebook-interactive',
        className
      )}
      {...props}
    >
      {/* Notebook Cover/Spine */}
      <div className="notebook-cover">
        <div className="notebook-spine">
          {/* Binding elements based on style */}
          {style === 'spiral' && (
            <div className="notebook-spiral">
              {Array.from({ length: 15 }, (_, i) => (
                <div key={i} className="spiral-ring" />
              ))}
            </div>
          )}
          
          {style === 'ring' && (
            <div className="notebook-rings">
              <div className="ring ring-1" />
              <div className="ring ring-2" />
              <div className="ring ring-3" />
            </div>
          )}
          
          {(style === 'composition' || style === 'leather') && (
            <div className="notebook-stitching">
              {Array.from({ length: 8 }, (_, i) => (
                <div key={i} className="stitch" />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Page Tabs */}
      {pages.length > 0 && (
        <div className="notebook-tabs">
          {pages.map((page) => (
            <button
              key={page.id}
              className={cn(
                'notebook-tab',
                activePageId === page.id && 'active',
                page.disabled && 'disabled'
              )}
              onClick={() => !page.disabled && handlePageChange(page.id)}
              disabled={page.disabled}
            >
              {page.icon && <span className="notebook-tab-icon">{page.icon}</span>}
              <span className="notebook-tab-title">{page.title}</span>
            </button>
          ))}
        </div>
      )}

      {/* Main Content Area */}
      <div className="notebook-content">
        <div className="notebook-page">
          {/* Margin line */}
          <div className="notebook-margin" />
          
          {/* Page content */}
          <div className="notebook-page-content">
            {activePageData ? (
              <div className="notebook-page-inner">
                {activePageData.content}
              </div>
            ) : (
              <div className="notebook-page-inner">
                {children}
              </div>
            )}
          </div>
          
          {/* Page number */}
          {activePageData && (
            <div className="notebook-page-number">
              Page {pages.findIndex(p => p.id === activePageId) + 1}
            </div>
          )}
        </div>
      </div>

      {/* Notebook Shadow */}
      <div className="notebook-shadow" />
    </div>
  );
};