import React from 'react';
import { cn } from '../../utils';

export interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export interface FooterProps {
  sections?: FooterSection[];
  copyright?: string;
  logo?: React.ReactNode;
  socialLinks?: FooterLink[];
  variant?: 'default' | 'minimal' | 'full';
  className?: string;
  children?: React.ReactNode;
}

export const Footer = React.forwardRef<HTMLElement, FooterProps>(
  ({ 
    sections = [],
    copyright,
    logo,
    socialLinks = [],
    variant = 'default',
    className,
    children,
    ...props 
  }, ref) => {
    const baseClasses = [
      'w-full',
      'bg-gray-50 dark:bg-gray-900',
      'border-t',
      'border-gray-300 dark:border-gray-700',
    ];

    const variantClasses = {
      default: 'py-12',
      minimal: 'py-6',
      full: 'py-16'
    };

    return (
      <footer
        ref={ref}
        className={cn(
          baseClasses,
          variantClasses[variant],
          className
        )}
        {...props}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {variant === 'minimal' ? (
            /* Minimal Footer */
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              {logo && (
                <div className="flex items-center">
                  {logo}
                </div>
              )}
              
              {copyright && (
                <div className="text-sm text-gray-500">
                  {copyright}
                </div>
              )}

              {socialLinks.length > 0 && (
                <div className="flex items-center space-x-4">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      target={link.external ? '_blank' : undefined}
                      rel={link.external ? 'noopener noreferrer' : undefined}
                      className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ) : (
            /* Default and Full Footers */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Logo and description */}
              {logo && (
                <div className="col-span-1 lg:col-span-1">
                  <div className="flex items-center mb-4">
                    {logo}
                  </div>
                </div>
              )}

              {/* Footer sections */}
              {sections.map((section, index) => (
                <div key={index} className="col-span-1">
                  <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 tracking-wider uppercase mb-4">
                    {section.title}
                  </h3>
                  <ul className="space-y-3">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <a
                          href={link.href}
                          target={link.external ? '_blank' : undefined}
                          rel={link.external ? 'noopener noreferrer' : undefined}
                          className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 "
                        >
                          {link.label}
                          {link.external && (
                            <svg
                              className="inline-block w-3 h-3 ml-1"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                              />
                            </svg>
                          )}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              {/* Custom children */}
              {children}
            </div>
          )}

          {variant !== 'minimal' && (
            /* Bottom section */
            <div className="mt-12 pt-8 border-t border-gray-300 dark:border-gray-700">
              <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
                {copyright && (
                  <div className="text-sm text-gray-500">
                    {copyright}
                  </div>
                )}

                {socialLinks.length > 0 && (
                  <div className="flex items-center gap-4 space-x-6">
                    {socialLinks.map((link, index) => (
                      <a
                        key={index}
                        href={link.href}
                        target={link.external ? '_blank' : undefined}
                        rel={link.external ? 'noopener noreferrer' : undefined}
                        className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                      >
                        <span className="sr-only">{link.label}</span>
                        {link.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </footer>
    );
  }
);

Footer.displayName = 'Footer';