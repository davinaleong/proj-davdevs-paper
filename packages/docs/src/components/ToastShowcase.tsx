import React, { useState } from 'react';
import { Toast } from '../../../basic/src/components/feedback';
import { Select } from '../../../basic/src/components/forms';

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
        <p className="text-gray-700 dark:text-gray-300 mb-8">
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
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Select Position:
          </label>
          <Select 
            value={selectedPosition} 
            onChange={(e) => setSelectedPosition(e.target.value as any)}
          >
            <option value="top-right">Top Right</option>
            <option value="top-left">Top Left</option>
            <option value="bottom-right">Bottom Right</option>
            <option value="bottom-left">Bottom Left</option>
          </Select>
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