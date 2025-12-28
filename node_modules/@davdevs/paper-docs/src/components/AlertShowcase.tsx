import React, { useState } from 'react';

// Mock Alert component for demonstration
const Alert = ({ 
  children, 
  variant = 'info', 
  size = 'md', 
  showIcon = true, 
  dismissible = false, 
  onDismiss,
  title,
  className = '' 
}: any) => {
  const variants = {
    info: 'bg-blue-50 border-blue-200 text-blue-800',
    success: 'bg-green-50 border-green-200 text-green-800',
    warning: 'bg-yellow-50 border-yellow-200 text-yellow-800',
    error: 'bg-red-50 border-red-200 text-red-800'
  };

  const sizes = {
    sm: 'px-3 py-2 text-sm gap-2',
    md: 'px-4 py-3 text-sm gap-3',
    lg: 'px-6 py-4 text-base gap-4'
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
    <div className={`flex border shadow-sm rounded transition-all duration-200 ${variants[variant]} ${sizes[size]} ${className}`} role="alert">
      {showIcon && (
        <div className="mr-3">
          {icons[variant]}
        </div>
      )}
      <div className="flex-1 min-w-0">
        {title && (
          <h4 className="font-medium mb-1">{title}</h4>
        )}
        <div>{children}</div>
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

export function AlertShowcase() {
  const [dismissibleAlert, setDismissibleAlert] = useState(true);

  return (
    <div>
      <div className="showcase-section">
        <h1 className="showcase-title">Alert Component</h1>
        <p className="text-gray-600 mb-8">
          Display important information and status messages with paper-inspired design and clear visual hierarchy.
        </p>
      </div>

      {/* Basic Variants */}
      <section className="showcase-section">
        <h2 className="showcase-subtitle">Alert Variants</h2>
        <div className="space-y-4">
          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Info</h3>
            <Alert variant="info">
              This is an informational alert with helpful information.
            </Alert>
            <pre className="showcase-code mt-2">
{`<Alert variant="info">
  This is an informational alert with helpful information.
</Alert>`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Success</h3>
            <Alert variant="success">
              Great! Your action was completed successfully.
            </Alert>
            <pre className="showcase-code mt-2">
{`<Alert variant="success">
  Great! Your action was completed successfully.
</Alert>`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Warning</h3>
            <Alert variant="warning">
              Please review this information before continuing.
            </Alert>
            <pre className="showcase-code mt-2">
{`<Alert variant="warning">
  Please review this information before continuing.
</Alert>`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Error</h3>
            <Alert variant="error">
              There was an error processing your request.
            </Alert>
            <pre className="showcase-code mt-2">
{`<Alert variant="error">
  There was an error processing your request.
</Alert>`}
            </pre>
          </div>
        </div>
      </section>

      {/* Sizes */}
      <section className="showcase-section">
        <h2 className="showcase-subtitle">Alert Sizes</h2>
        <div className="space-y-4">
          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Small</h3>
            <Alert variant="info" size="sm">
              Small alert message
            </Alert>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Medium (Default)</h3>
            <Alert variant="info" size="md">
              Medium alert message
            </Alert>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Large</h3>
            <Alert variant="info" size="lg">
              Large alert message with more content
            </Alert>
          </div>
        </div>
      </section>

      {/* With Title */}
      <section className="showcase-section">
        <h2 className="showcase-subtitle">Alert with Title</h2>
        <div className="space-y-4">
          <div className="showcase-item">
            <Alert variant="success" title="Success!">
              Your profile has been updated successfully. All changes have been saved and are now active.
            </Alert>
            <pre className="showcase-code mt-2">
{`<Alert variant="success" title="Success!">
  Your profile has been updated successfully. All changes have been saved and are now active.
</Alert>`}
            </pre>
          </div>
        </div>
      </section>

      {/* Dismissible */}
      <section className="showcase-section">
        <h2 className="showcase-subtitle">Dismissible Alert</h2>
        <div className="space-y-4">
          <div className="showcase-item">
            {dismissibleAlert && (
              <Alert 
                variant="warning" 
                dismissible 
                onDismiss={() => setDismissibleAlert(false)}
                title="Dismissible Alert"
              >
                Click the X button to dismiss this alert.
              </Alert>
            )}
            {!dismissibleAlert && (
              <div className="text-gray-500 italic p-4 border border-dashed border-gray-300 rounded">
                Alert has been dismissed. 
                <button 
                  onClick={() => setDismissibleAlert(true)}
                  className="ml-2 text-blue-600 hover:text-blue-700 underline"
                >
                  Show again
                </button>
              </div>
            )}
            <pre className="showcase-code mt-2">
{`<Alert 
  variant="warning" 
  dismissible 
  onDismiss={() => setAlertVisible(false)}
  title="Dismissible Alert"
>
  Click the X button to dismiss this alert.
</Alert>`}
            </pre>
          </div>
        </div>
      </section>

      {/* Without Icon */}
      <section className="showcase-section">
        <h2 className="showcase-subtitle">Alert without Icon</h2>
        <div className="space-y-4">
          <div className="showcase-item">
            <Alert variant="info" showIcon={false}>
              This alert doesn't display an icon.
            </Alert>
            <pre className="showcase-code mt-2">
{`<Alert variant="info" showIcon={false}>
  This alert doesn't display an icon.
</Alert>`}
            </pre>
          </div>
        </div>
      </section>
    </div>
  );
}