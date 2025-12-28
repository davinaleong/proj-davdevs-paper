import React, { useState } from 'react';

// Mock Toast component for demonstration
const Toast = ({ 
  children, 
  variant = 'info', 
  position = 'top-right', 
  showIcon = true,
  dismissible = true,
  onDismiss,
  title,
  open = true,
  className = '' 
}: any) => {
  if (!open) return null;

  const variants = {
    info: 'bg-blue-50/90 border-blue-200 text-blue-800',
    success: 'bg-green-50/90 border-green-200 text-green-800',
    warning: 'bg-yellow-50/90 border-yellow-200 text-yellow-800',
    error: 'bg-red-50/90 border-red-200 text-red-800'
  };

  const positions = {
    'top-left': 'top-4 left-4',
    'top-center': 'top-4 left-1/2 -translate-x-1/2',
    'top-right': 'top-4 right-4',
    'bottom-left': 'bottom-4 left-4',
    'bottom-center': 'bottom-4 left-1/2 -translate-x-1/2',
    'bottom-right': 'bottom-4 right-4'
  };

  const icons = {
    info: (
      <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
      </svg>
    ),
    success: (
      <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
      </svg>
    ),
    warning: (
      <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
      </svg>
    ),
    error: (
      <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
      </svg>
    )
  };

  return (
    <div className={`fixed z-50 flex max-w-sm w-full p-4 border backdrop-blur-sm shadow-lg rounded-md transition-all duration-300 ${positions[position]} ${variants[variant]} ${className}`} role="alert">
      {showIcon && (
        <div className="mr-3">
          {icons[variant]}
        </div>
      )}
      <div className="flex-1 min-w-0">
        {title && (
          <h4 className="font-medium text-sm mb-1">{title}</h4>
        )}
        <div className="text-sm">{children}</div>
      </div>
      {dismissible && (
        <button
          type="button"
          className="ml-3 flex-shrink-0 p-1 rounded-sm opacity-70 hover:opacity-100 transition-opacity"
          onClick={onDismiss}
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      )}
    </div>
  );
};

export function ToastShowcase() {
  const [toasts, setToasts] = useState<{[key: string]: boolean}>({});
  const [selectedPosition, setSelectedPosition] = useState<'top-right' | 'top-left' | 'bottom-right' | 'bottom-left'>('top-right');

  const showToast = (id: string) => {
    setToasts(prev => ({ ...prev, [id]: true }));
    // Auto hide after 4 seconds
    setTimeout(() => {
      setToasts(prev => ({ ...prev, [id]: false }));
    }, 4000);
  };

  const hideToast = (id: string) => {
    setToasts(prev => ({ ...prev, [id]: false }));
  };

  return (
    <div>
      <div className="showcase-section">
        <h1 className="showcase-title">Toast Component</h1>
        <p className="text-gray-600 mb-8">
          Display temporary notifications with paper-inspired design, automatic dismissal, and positioning options.
        </p>
      </div>

      {/* Toast Variants */}
      <section className="showcase-section">
        <h2 className="showcase-subtitle">Toast Variants</h2>
        <div className="showcase-grid grid-cols-2 md:grid-cols-4">
          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Info</h3>
            <button 
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              onClick={() => showToast('info')}
            >
              Show Info Toast
            </button>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Success</h3>
            <button 
              className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
              onClick={() => showToast('success')}
            >
              Show Success Toast
            </button>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Warning</h3>
            <button 
              className="px-4 py-2 bg-yellow-600 text-white rounded-md hover:bg-yellow-700 transition-colors"
              onClick={() => showToast('warning')}
            >
              Show Warning Toast
            </button>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Error</h3>
            <button 
              className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
              onClick={() => showToast('error')}
            >
              Show Error Toast
            </button>
          </div>
        </div>

        <pre className="showcase-code">
{`// Basic usage
<Toast variant="success">
  Operation completed successfully!
</Toast>

// With title
<Toast variant="info" title="Information">
  This is an informational message.
</Toast>`}
        </pre>
      </section>

      {/* Position Demo */}
      <section className="showcase-section">
        <h2 className="showcase-subtitle">Toast Positions</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Select Position:
          </label>
          <select 
            value={selectedPosition} 
            onChange={(e) => setSelectedPosition(e.target.value as any)}
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="top-right">Top Right</option>
            <option value="top-left">Top Left</option>
            <option value="bottom-right">Bottom Right</option>
            <option value="bottom-left">Bottom Left</option>
          </select>
        </div>

        <button 
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          onClick={() => showToast(`positioned-${selectedPosition}`)}
        >
          Show Toast at {selectedPosition}
        </button>

        <pre className="showcase-code mt-4">
{`<Toast 
  variant="info" 
  position="${selectedPosition}"
>
  This toast appears at ${selectedPosition}
</Toast>`}
        </pre>
      </section>

      {/* With Title */}
      <section className="showcase-section">
        <h2 className="showcase-subtitle">Toast with Title</h2>
        <div className="showcase-item">
          <button 
            className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
            onClick={() => showToast('with-title')}
          >
            Show Toast with Title
          </button>
          <pre className="showcase-code mt-2">
{`<Toast 
  variant="success" 
  title="Success!"
>
  Your changes have been saved successfully.
</Toast>`}
          </pre>
        </div>
      </section>

      {/* Without Icon */}
      <section className="showcase-section">
        <h2 className="showcase-subtitle">Toast without Icon</h2>
        <div className="showcase-item">
          <button 
            className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
            onClick={() => showToast('no-icon')}
          >
            Show Toast without Icon
          </button>
          <pre className="showcase-code mt-2">
{`<Toast variant="info" showIcon={false}>
  This toast doesn't display an icon.
</Toast>`}
          </pre>
        </div>
      </section>

      {/* Rendered Toasts */}
      {toasts['info'] && (
        <Toast variant="info" position={selectedPosition} onDismiss={() => hideToast('info')}>
          This is an informational message.
        </Toast>
      )}
      {toasts['success'] && (
        <Toast variant="success" position={selectedPosition} onDismiss={() => hideToast('success')}>
          Operation completed successfully!
        </Toast>
      )}
      {toasts['warning'] && (
        <Toast variant="warning" position={selectedPosition} onDismiss={() => hideToast('warning')}>
          Please review your input.
        </Toast>
      )}
      {toasts['error'] && (
        <Toast variant="error" position={selectedPosition} onDismiss={() => hideToast('error')}>
          An error occurred. Please try again.
        </Toast>
      )}
      {toasts[`positioned-${selectedPosition}`] && (
        <Toast variant="info" position={selectedPosition} onDismiss={() => hideToast(`positioned-${selectedPosition}`)}>
          This toast appears at {selectedPosition}
        </Toast>
      )}
      {toasts['with-title'] && (
        <Toast variant="success" title="Success!" position={selectedPosition} onDismiss={() => hideToast('with-title')}>
          Your changes have been saved successfully.
        </Toast>
      )}
      {toasts['no-icon'] && (
        <Toast variant="info" showIcon={false} position={selectedPosition} onDismiss={() => hideToast('no-icon')}>
          This toast doesn't display an icon.
        </Toast>
      )}
    </div>
  );
}