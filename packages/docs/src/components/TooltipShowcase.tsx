import React, { useState } from 'react';

// Mock Tooltip component for demonstration (until the basic package is built)
const Tooltip = ({ 
  content, 
  children, 
  placement = 'top', 
  variant = 'default',
  trigger = 'hover',
  maxWidth = 200,
  showDelay = 200,
  hideDelay = 100,
  showArrow = true,
  open,
  onOpenChange,
  ...props 
}: any) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleMouseEnter = () => {
    if (trigger === 'hover') {
      setTimeout(() => setIsVisible(true), showDelay);
    }
  };

  const handleMouseLeave = () => {
    if (trigger === 'hover') {
      setTimeout(() => setIsVisible(false), hideDelay);
    }
  };

  const handleClick = () => {
    if (trigger === 'click') {
      setIsVisible(!isVisible);
    }
  };

  const handleFocus = () => {
    if (trigger === 'focus') {
      setIsVisible(true);
    }
  };

  const handleBlur = () => {
    if (trigger === 'focus') {
      setIsVisible(false);
    }
  };

  const isOpen = trigger === 'manual' ? open : isVisible;

  const variantStyles = {
    default: 'bg-gray-900 dark:bg-gray-800 text-white',
    dark: 'bg-black text-white',
    info: 'bg-blue-600 text-white',
    success: 'bg-green-600 text-white',
    warning: 'bg-yellow-600 text-white',
    danger: 'bg-red-600 text-white'
  };

  const placementStyles = {
    top: 'bottom-full left-1/2 transform -translate-x-1/2 mb-2',
    'top-start': 'bottom-full left-0 mb-2',
    'top-end': 'bottom-full right-0 mb-2',
    bottom: 'top-full left-1/2 transform -translate-x-1/2 mt-2',
    'bottom-start': 'top-full left-0 mt-2',
    'bottom-end': 'top-full right-0 mt-2',
    left: 'right-full top-1/2 transform -translate-y-1/2 mr-2',
    right: 'left-full top-1/2 transform -translate-y-1/2 ml-2'
  };

  return (
    <div className="relative inline-block">
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...props}
      >
        {children}
      </div>
      {isOpen && (
        <div
          className={`absolute z-50 px-3 py-2 text-sm rounded-lg shadow-lg whitespace-nowrap ${variantStyles[variant]} ${placementStyles[placement]}`}
          style={{ maxWidth: maxWidth }}
        >
          {showArrow && (
            <div className={`absolute w-2 h-2 ${variantStyles[variant]} transform rotate-45 ${
              placement.includes('top') ? 'top-full left-1/2 -translate-x-1/2 -translate-y-1/2' :
              placement.includes('bottom') ? 'bottom-full left-1/2 -translate-x-1/2 translate-y-1/2' :
              placement.includes('left') ? 'left-full top-1/2 -translate-y-1/2 -translate-x-1/2' :
              'right-full top-1/2 -translate-y-1/2 translate-x-1/2'
            }`} />
          )}
          {typeof content === 'string' ? <span>{content}</span> : content}
        </div>
      )}
    </div>
  );
};

// Mock Button component for demonstrations
const Button = ({ children, variant = 'primary', size = 'md', className = '', ...props }: any) => {
  const variants = {
    primary: 'bg-blue-500 dark:bg-blue-600 text-white hover:bg-blue-600 dark:hover:bg-blue-700',
    secondary: 'bg-gray-500 dark:bg-gray-600 text-white hover:bg-gray-600 dark:hover:bg-gray-700',
    outline: 'border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
  };
  
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base'
  };

  return (
    <button 
      className={`inline-flex items-center justify-center font-medium rounded-lg transition-colors ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

const IconButton = ({ children, className = '', ...props }: any) => (
  <button 
    className={`p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors ${className}`}
    {...props}
  >
    {children}
  </button>
);

// Sample icons
const InfoIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
  </svg>
);

const HelpIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM8.94 6.94a1.31 1.31 0 112.12 1.13c.5.5.5 1.31 0 1.81-.18.18-.43.29-.71.29h-.09A1.003 1.003 0 019 9c0-.26.07-.52.22-.7.08-.1.15-.21.21-.33.25-.46.04-1.05-.42-1.3-.46-.25-1.05-.04-1.3.42-.04.08-.08.17-.09.26A1.003 1.003 0 018.94 6.94zM10 13a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
  </svg>
);

const SettingsIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

export function TooltipShowcase() {
  const [manualOpen, setManualOpen] = useState(false);

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
            <div className="flex justify-center mb-4">
              <Tooltip content="This is a helpful tooltip">
                <Button>Hover me</Button>
              </Tooltip>
            </div>
            <pre className="showcase-code">
{`<Tooltip content="This is a helpful tooltip">
  <Button>Hover me</Button>
</Tooltip>`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">With Icon</h3>
            <div className="flex justify-center mb-4">
              <Tooltip content="Click to open settings">
                <IconButton>
                  <SettingsIcon />
                </IconButton>
              </Tooltip>
            </div>
            <pre className="showcase-code">
{`<Tooltip content="Click to open settings">
  <IconButton>
    <SettingsIcon />
  </IconButton>
</Tooltip>`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Help Icon</h3>
            <div className="flex justify-center mb-4">
              <div className="flex items-center gap-2">
                <span>Need help?</span>
                <Tooltip content="Click here for assistance or check our FAQ section">
                  <button className="text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300">
                    <HelpIcon />
                  </button>
                </Tooltip>
              </div>
            </div>
            <pre className="showcase-code">
{`<div className="flex items-center gap-2">
  <span>Need help?</span>
  <Tooltip content="Click here for assistance">
    <button className="text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300">
      <HelpIcon />
    </button>
  </Tooltip>
</div>`}
            </pre>
          </div>
        </div>
      </section>

      {/* Placements */}
      <section className="showcase-section">
        <h2 className="showcase-subtitle">Tooltip Placements</h2>
        <div className="showcase-item">
          <h3 className="font-semibold mb-2">All Positions</h3>
          <div className="grid grid-cols-3 gap-4 max-w-md mx-auto mb-4">
            {/* Top row */}
            <div className="flex justify-center">
              <Tooltip content="Top start tooltip" placement="top-start">
                <Button size="sm">Top Start</Button>
              </Tooltip>
            </div>
            <div className="flex justify-center">
              <Tooltip content="Top tooltip" placement="top">
                <Button size="sm">Top</Button>
              </Tooltip>
            </div>
            <div className="flex justify-center">
              <Tooltip content="Top end tooltip" placement="top-end">
                <Button size="sm">Top End</Button>
              </Tooltip>
            </div>
            
            {/* Middle row */}
            <div className="flex justify-center">
              <Tooltip content="Left tooltip" placement="left">
                <Button size="sm">Left</Button>
              </Tooltip>
            </div>
            <div className="flex justify-center">
              <Button size="sm" variant="outline">Center</Button>
            </div>
            <div className="flex justify-center">
              <Tooltip content="Right tooltip" placement="right">
                <Button size="sm">Right</Button>
              </Tooltip>
            </div>
            
            {/* Bottom row */}
            <div className="flex justify-center">
              <Tooltip content="Bottom start tooltip" placement="bottom-start">
                <Button size="sm">Bottom Start</Button>
              </Tooltip>
            </div>
            <div className="flex justify-center">
              <Tooltip content="Bottom tooltip" placement="bottom">
                <Button size="sm">Bottom</Button>
              </Tooltip>
            </div>
            <div className="flex justify-center">
              <Tooltip content="Bottom end tooltip" placement="bottom-end">
                <Button size="sm">Bottom End</Button>
              </Tooltip>
            </div>
          </div>
          <pre className="showcase-code">
{`<Tooltip content="Top tooltip" placement="top">
  <Button>Top</Button>
</Tooltip>

<Tooltip content="Right tooltip" placement="right">
  <Button>Right</Button>
</Tooltip>

<Tooltip content="Bottom tooltip" placement="bottom">
  <Button>Bottom</Button>
</Tooltip>

<Tooltip content="Left tooltip" placement="left">
  <Button>Left</Button>
</Tooltip>`}
          </pre>
        </div>
      </section>

      {/* Variants */}
      <section className="showcase-section">
        <h2 className="showcase-subtitle">Tooltip Variants</h2>
        <div className="showcase-grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Default</h3>
            <div className="flex justify-center mb-4">
              <Tooltip content="Default tooltip style">
                <Button>Default</Button>
              </Tooltip>
            </div>
            <pre className="showcase-code">
{`<Tooltip content="Default tooltip">
  <Button>Default</Button>
</Tooltip>`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Dark</h3>
            <div className="flex justify-center mb-4">
              <Tooltip content="Dark tooltip style" variant="dark">
                <Button>Dark</Button>
              </Tooltip>
            </div>
            <pre className="showcase-code">
{`<Tooltip 
  content="Dark tooltip" 
  variant="dark"
>
  <Button>Dark</Button>
</Tooltip>`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Info</h3>
            <div className="flex justify-center mb-4">
              <Tooltip content="Info tooltip for helpful hints" variant="info">
                <Button>Info</Button>
              </Tooltip>
            </div>
            <pre className="showcase-code">
{`<Tooltip 
  content="Info tooltip" 
  variant="info"
>
  <Button>Info</Button>
</Tooltip>`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Success</h3>
            <div className="flex justify-center mb-4">
              <Tooltip content="Success! Operation completed" variant="success">
                <Button>Success</Button>
              </Tooltip>
            </div>
            <pre className="showcase-code">
{`<Tooltip 
  content="Success message" 
  variant="success"
>
  <Button>Success</Button>
</Tooltip>`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Warning</h3>
            <div className="flex justify-center mb-4">
              <Tooltip content="Warning: This action cannot be undone" variant="warning">
                <Button>Warning</Button>
              </Tooltip>
            </div>
            <pre className="showcase-code">
{`<Tooltip 
  content="Warning message" 
  variant="warning"
>
  <Button>Warning</Button>
</Tooltip>`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Danger</h3>
            <div className="flex justify-center mb-4">
              <Tooltip content="Danger: This will delete all data" variant="danger">
                <Button>Danger</Button>
              </Tooltip>
            </div>
            <pre className="showcase-code">
{`<Tooltip 
  content="Danger message" 
  variant="danger"
>
  <Button>Danger</Button>
</Tooltip>`}
            </pre>
          </div>
        </div>
      </section>

      {/* Trigger Types */}
      <section className="showcase-section">
        <h2 className="showcase-subtitle">Trigger Types</h2>
        <div className="showcase-grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Hover (Default)</h3>
            <div className="flex justify-center mb-4">
              <Tooltip content="Triggered on hover" trigger="hover">
                <Button>Hover Me</Button>
              </Tooltip>
            </div>
            <pre className="showcase-code">
{`<Tooltip 
  content="Triggered on hover" 
  trigger="hover"
>
  <Button>Hover Me</Button>
</Tooltip>`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Click</h3>
            <div className="flex justify-center mb-4">
              <Tooltip content="Click me to toggle tooltip" trigger="click">
                <Button>Click Me</Button>
              </Tooltip>
            </div>
            <pre className="showcase-code">
{`<Tooltip 
  content="Click to toggle" 
  trigger="click"
>
  <Button>Click Me</Button>
</Tooltip>`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Focus</h3>
            <div className="flex justify-center mb-4">
              <Tooltip content="Focus on this input field" trigger="focus">
                <input 
                  type="text" 
                  placeholder="Focus me" 
                  className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </Tooltip>
            </div>
            <pre className="showcase-code">
{`<Tooltip 
  content="Focus tooltip" 
  trigger="focus"
>
  <input type="text" placeholder="Focus me" />
</Tooltip>`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Manual Control</h3>
            <div className="flex justify-center mb-4">
              <div className="flex flex-col gap-2 items-center">
                <Tooltip 
                  content="Manually controlled tooltip" 
                  trigger="manual"
                  open={manualOpen}
                  onOpenChange={setManualOpen}
                >
                  <Button>Target Element</Button>
                </Tooltip>
                <Button 
                  size="sm" 
                  variant="outline"
                  onClick={() => setManualOpen(!manualOpen)}
                >
                  {manualOpen ? 'Hide' : 'Show'} Tooltip
                </Button>
              </div>
            </div>
            <pre className="showcase-code">
{`const [open, setOpen] = useState(false);

<Tooltip 
  content="Manual tooltip" 
  trigger="manual"
  open={open}
  onOpenChange={setOpen}
>
  <Button>Target</Button>
</Tooltip>`}
            </pre>
          </div>
        </div>
      </section>

      {/* Rich Content */}
      <section className="showcase-section">
        <h2 className="showcase-subtitle">Rich Content</h2>
        <div className="showcase-grid grid-cols-1 md:grid-cols-2">
          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Multi-line Content</h3>
            <div className="flex justify-center mb-4">
              <Tooltip 
                content={
                  <div>
                    <div className="font-semibold mb-1">Rich Tooltip</div>
                    <div className="text-sm">This tooltip contains multiple lines of text and rich formatting.</div>
                  </div>
                }
                maxWidth={250}
              >
                <Button>Rich Content</Button>
              </Tooltip>
            </div>
            <pre className="showcase-code">
{`<Tooltip 
  content={
    <div>
      <div className="font-semibold mb-1">
        Rich Tooltip
      </div>
      <div className="text-sm">
        Multiple lines with formatting.
      </div>
    </div>
  }
  maxWidth={250}
>
  <Button>Rich Content</Button>
</Tooltip>`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">With Actions</h3>
            <div className="flex justify-center mb-4">
              <Tooltip 
                content={
                  <div className="text-center">
                    <div className="font-semibold mb-2">Confirm Action</div>
                    <div className="text-sm mb-3">Are you sure you want to delete this item?</div>
                    <div className="flex gap-2 justify-center">
                      <button className="px-2 py-1 bg-red-500 text-white text-xs rounded hover:bg-red-600">
                        Delete
                      </button>
                      <button className="px-2 py-1 bg-gray-300 text-gray-700 text-xs rounded hover:bg-gray-400">
                        Cancel
                      </button>
                    </div>
                  </div>
                }
                trigger="click"
                maxWidth={200}
              >
                <Button variant="outline">Delete Item</Button>
              </Tooltip>
            </div>
            <pre className="showcase-code">
{`<Tooltip 
  content={
    <div>
      <div className="font-semibold mb-2">
        Confirm Action
      </div>
      <div className="text-sm mb-3">
        Are you sure?
      </div>
      <div className="flex gap-2">
        <button>Delete</button>
        <button>Cancel</button>
      </div>
    </div>
  }
  trigger="click"
>
  <Button>Delete Item</Button>
</Tooltip>`}
            </pre>
          </div>
        </div>
      </section>

      {/* Timing & Behavior */}
      <section className="showcase-section">
        <h2 className="showcase-subtitle">Timing & Behavior</h2>
        <div className="showcase-grid grid-cols-1 md:grid-cols-3">
          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Fast Tooltip</h3>
            <div className="flex justify-center mb-4">
              <Tooltip 
                content="Shows quickly (100ms delay)" 
                showDelay={100}
                hideDelay={50}
              >
                <Button>Fast</Button>
              </Tooltip>
            </div>
            <pre className="showcase-code">
{`<Tooltip 
  content="Fast tooltip" 
  showDelay={100}
  hideDelay={50}
>
  <Button>Fast</Button>
</Tooltip>`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Slow Tooltip</h3>
            <div className="flex justify-center mb-4">
              <Tooltip 
                content="Takes longer to show (1000ms delay)" 
                showDelay={1000}
                hideDelay={300}
              >
                <Button>Slow</Button>
              </Tooltip>
            </div>
            <pre className="showcase-code">
{`<Tooltip 
  content="Slow tooltip" 
  showDelay={1000}
  hideDelay={300}
>
  <Button>Slow</Button>
</Tooltip>`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">No Arrow</h3>
            <div className="flex justify-center mb-4">
              <Tooltip 
                content="Tooltip without arrow pointer" 
                showArrow={false}
              >
                <Button>No Arrow</Button>
              </Tooltip>
            </div>
            <pre className="showcase-code">
{`<Tooltip 
  content="No arrow tooltip" 
  showArrow={false}
>
  <Button>No Arrow</Button>
</Tooltip>`}
            </pre>
          </div>
        </div>
      </section>

      {/* Practical Examples */}
      <section className="showcase-section">
        <h2 className="showcase-subtitle">Practical Examples</h2>
        <div className="showcase-grid grid-cols-1 md:grid-cols-2">
          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Form Help</h3>
            <div className="space-y-4 mb-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email Address</label>
                  <Tooltip content="We'll never share your email with anyone else">
                    <button className="text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300">
                      <InfoIcon />
                    </button>
                  </Tooltip>
                </div>
                <input 
                  type="email" 
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Password</label>
                  <Tooltip content="Password must be at least 8 characters long and contain uppercase, lowercase, and numbers">
                    <button className="text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300">
                      <HelpIcon />
                    </button>
                  </Tooltip>
                </div>
                <input 
                  type="password" 
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                  placeholder="Enter your password"
                />
              </div>
            </div>
            <pre className="showcase-code">
{`<div className="flex items-center gap-2 mb-2">
  <label>Email Address</label>
  <Tooltip content="We'll never share your email">
    <button className="text-gray-400">
      <InfoIcon />
    </button>
  </Tooltip>
</div>`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Action Buttons</h3>
            <div className="flex gap-2 justify-center mb-4">
              <Tooltip content="Edit this item">
                <IconButton>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </IconButton>
              </Tooltip>
              <Tooltip content="Delete this item" variant="danger">
                <IconButton className="hover:bg-red-100 dark:hover:bg-red-900">
                  <svg className="w-4 h-4 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </IconButton>
              </Tooltip>
              <Tooltip content="Share this item">
                <IconButton>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                  </svg>
                </IconButton>
              </Tooltip>
            </div>
            <pre className="showcase-code">
{`<Tooltip content="Edit this item">
  <IconButton>
    <EditIcon />
  </IconButton>
</Tooltip>

<Tooltip content="Delete this item" variant="danger">
  <IconButton>
    <DeleteIcon />
  </IconButton>
</Tooltip>`}
            </pre>
          </div>
        </div>
      </section>
    </div>
  );
}