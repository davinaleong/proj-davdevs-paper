import React, { useState } from 'react';
import { cn } from '../../utils';
import { Menu, X } from 'lucide-react';

export interface NavbarLink {
  label: string;
  href: string;
  active?: boolean;
  disabled?: boolean;
}

export interface NavbarProps {
  title?: string;
  titleHref?: string;
  links?: NavbarLink[];
  actions?: React.ReactNode;
  variant?: 'default' | 'elevated' | 'transparent';
  position?: 'static' | 'sticky' | 'fixed';
  className?: string;
  children?: React.ReactNode;
}

export const Navbar = React.forwardRef<HTMLElement, NavbarProps>(
  ({ 
    title,
    titleHref,
    links = [],
    actions,
    variant = 'default',
    position = 'static',
    className,
    children,
    ...props 
  }, ref) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
      setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const baseClasses = [
      'w-full',
      'transition-all',
      'duration-200',
      'ease-out'
    ];

    const variantClasses = {
      default: 'bg-white border-b border-gray-200 dark:bg-gray-900 dark:border-gray-700',
      elevated: 'bg-white shadow-sm border-b border-gray-200 dark:bg-gray-900 dark:border-gray-700',
      transparent: 'bg-transparent'
    };

    const positionClasses = {
      static: 'relative',
      sticky: 'sticky top-0 z-30',
      fixed: 'fixed top-0 left-0 right-0 z-30'
    };

    return (
      <nav
        ref={ref}
        className={cn(
          baseClasses,
          variantClasses[variant],
          positionClasses[position],
          className
        )}
        {...props}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Brand/Title */}
            <div className="flex items-center">
              {title && (
                titleHref ? (
                  <a
                    href={titleHref}
                    className="text-xl font-semibold text-gray-900 hover:text-gray-700 transition-colors dark:text-white dark:hover:text-gray-300"
                  >
                    {title}
                  </a>
                ) : (
                  <span className="text-xl font-semibold text-gray-900 dark:text-white">
                    {title}
                  </span>
                )
              )}
            </div>

            {/* Navigation Links */}
            {links.length > 0 && (
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  {links.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      className={cn(
                        'px-3 py-2 rounded-md text-sm font-medium transition-colors',
                        link.active
                          ? 'bg-gray-900 text-white dark:bg-gray-800 dark:text-white'
                          : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white',
                        link.disabled && 'opacity-50 cursor-not-allowed pointer-events-none'
                      )}
                      aria-current={link.active ? 'page' : undefined}
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            )}

            {/* Actions */}
            {actions && (
              <div className="flex items-center space-x-4">
                {actions}
              </div>
            )}

            {/* Mobile menu button */}
            {links.length > 0 && (
              <div className="md:hidden">
                <button
                  type="button"
                  onClick={toggleMobileMenu}
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                  aria-controls="mobile-menu"
                  aria-expanded={isMobileMenuOpen}
                >
                  <span className="sr-only">
                    {isMobileMenuOpen ? 'Close main menu' : 'Open main menu'}
                  </span>
                  {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
              </div>
            )}

            {/* Custom children */}
            {children}
          </div>
        </div>

        {/* Mobile menu */}
        {links.length > 0 && isMobileMenuOpen && (
          <div className="md:hidden" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-50 border-t border-gray-200">
              {links.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    'block px-3 py-2 rounded-md text-base font-medium transition-colors',
                    link.active
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900',
                    link.disabled && 'opacity-50 cursor-not-allowed pointer-events-none'
                  )}
                  aria-current={link.active ? 'page' : undefined}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    );
  }
);

Navbar.displayName = 'Navbar';