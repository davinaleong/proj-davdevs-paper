
import { Tooltip, Button } from '@davdevs/paper-basic';

// Sample icons
const InfoIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
  </svg>
);

const WarningIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
  </svg>
);

const SettingsIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

export function TooltipShowcase() {

  return (
    <div>
      <div className="showcase-section">
        <h1 className="showcase-title">Tooltip Component</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          Floating paper hints with smart positioning, accessibility support, and multiple trigger options.
        </p>
      </div>

      {/* Basic Usage */}
      <section className="showcase-section">
        <h2 className="showcase-subtitle">Basic Usage</h2>
        <div className="showcase-grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Simple Tooltip</h3>
            <Tooltip content="This is a tooltip">
              <Button>Hover me</Button>
            </Tooltip>
            <pre className="showcase-code mt-4">
{`<Tooltip content="This is a tooltip">
  <Button>Hover me</Button>
</Tooltip>`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">With Icon</h3>
            <Tooltip content="Information tooltip">
              <Button startIcon={<InfoIcon />}>Info</Button>
            </Tooltip>
            <pre className="showcase-code mt-4">
{`<Tooltip content="Information tooltip">
  <Button startIcon={<InfoIcon />}>Info</Button>
</Tooltip>`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Long Content</h3>
            <Tooltip content="This is a longer tooltip with more information to show how text wraps">
              <Button>Long tooltip</Button>
            </Tooltip>
            <pre className="showcase-code mt-4">
{`<Tooltip content="Long tooltip text">
  <Button>Long tooltip</Button>
</Tooltip>`}
            </pre>
          </div>
        </div>
      </section>

      {/* Variants */}
      <section className="showcase-section">
        <h2 className="showcase-subtitle">Variants</h2>
        <div className="showcase-grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Default</h3>
            <Tooltip content="Default dark tooltip" variant="default">
              <Button variant="outline">Default</Button>
            </Tooltip>
            <pre className="showcase-code mt-4">
{`<Tooltip variant="default" content="Dark tooltip">
  <Button variant="outline">Default</Button>
</Tooltip>`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Info</h3>
            <Tooltip content="Info colored tooltip" variant="info">
              <Button variant="outline">Info</Button>
            </Tooltip>
            <pre className="showcase-code mt-4">
{`<Tooltip variant="info" content="Info tooltip">
  <Button variant="outline">Info</Button>
</Tooltip>`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Warning</h3>
            <Tooltip content="Warning tooltip" variant="warning">
              <Button variant="outline" startIcon={<WarningIcon />}>Warning</Button>
            </Tooltip>
            <pre className="showcase-code mt-4">
{`<Tooltip variant="warning" content="Warning tooltip">
  <Button startIcon={<WarningIcon />}>Warning</Button>
</Tooltip>`}
            </pre>
          </div>
        </div>
      </section>

      {/* Interactive Examples */}
      <section className="showcase-section">
        <h2 className="showcase-subtitle">Interactive Examples</h2>
        <div className="showcase-grid grid-cols-1 md:grid-cols-2">
          <div className="showcase-item">
            <h3 className="font-semibold mb-4">Icon Tooltips</h3>
            <div className="flex gap-3">
              <Tooltip content="Settings and preferences">
                <button className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                  <SettingsIcon />
                </button>
              </Tooltip>
              <Tooltip content="Important information">
                <button className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                  <InfoIcon />
                </button>
              </Tooltip>
              <Tooltip content="Warning: This action cannot be undone">
                <button className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                  <WarningIcon />
                </button>
              </Tooltip>
            </div>
            <pre className="showcase-code mt-4">
{`<Tooltip content="Settings">
  <IconButton>
    <SettingsIcon />
  </IconButton>
</Tooltip>`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-4">Form Field Help</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <label className="text-sm font-medium">Username</label>
                <Tooltip content="Username must be 3-20 characters long">
                  <InfoIcon />
                </Tooltip>
              </div>
              <input 
                type="text" 
                placeholder="Enter username"
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
              />
            </div>
            <pre className="showcase-code mt-4">
{`<div className="flex items-center gap-2">
  <label>Username</label>
  <Tooltip content="Username requirements">
    <InfoIcon />
  </Tooltip>
</div>`}
            </pre>
          </div>
        </div>
      </section>

      {/* Usage Guidelines */}
      <section className="showcase-section">
        <h2 className="showcase-subtitle">Usage Guidelines</h2>
        <div className="prose prose-sm dark:prose-invert max-w-none">
          <h3>When to Use Tooltips</h3>
          <ul>
            <li><strong>Icon buttons</strong> - Provide context for icon-only actions</li>
            <li><strong>Form field help</strong> - Explain input requirements or provide examples</li>
            <li><strong>Truncated text</strong> - Show full text when space is limited</li>
            <li><strong>Additional context</strong> - Provide supplementary information without cluttering the UI</li>
          </ul>

          <h3>Best Practices</h3>
          <ul>
            <li>Keep tooltip content concise and helpful</li>
            <li>Use consistent placement within similar UI contexts</li>
            <li>Ensure tooltips don't interfere with user interactions</li>
            <li>Test tooltip positioning on different screen sizes</li>
            <li>Consider accessibility - tooltips should be keyboard accessible</li>
          </ul>
        </div>
      </section>
    </div>
  );
}