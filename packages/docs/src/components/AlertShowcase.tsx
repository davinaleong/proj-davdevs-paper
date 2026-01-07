import { useState } from 'react';
import { Alert } from '../../../basic/src/components/feedback';

export function AlertShowcase() {
  const [dismissibleAlert, setDismissibleAlert] = useState(true);

  return (
    <div>
      <div className="showcase-section">
        <h1 className="showcase-title">Alert Component</h1>
        <p className="text-gray-700 dark:text-gray-300 mb-8">
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