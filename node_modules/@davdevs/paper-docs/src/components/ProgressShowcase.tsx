import React, { useState, useEffect } from 'react';

// Mock Progress component for demonstration
const Progress = ({ 
  value = 0, 
  max = 100, 
  size = 'md', 
  variant = 'primary', 
  showPercentage = false,
  label,
  labelPosition = 'top',
  animated = true,
  striped = false,
  indeterminate = false,
  className = '' 
}: any) => {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

  const sizes = {
    sm: 'h-1',
    md: 'h-2',
    lg: 'h-3',
    xl: 'h-4'
  };

  const variants = {
    primary: 'bg-blue-600',
    secondary: 'bg-gray-600',
    success: 'bg-green-600',
    warning: 'bg-yellow-600',
    error: 'bg-red-600'
  };

  const trackClasses = `relative overflow-hidden bg-gray-200 rounded ${sizes[size]} ${className}`;
  
  const fillClasses = `h-full transition-all duration-500 ease-out rounded ${variants[variant]} ${
    animated ? 'transition-all duration-500 ease-out' : ''
  } ${striped ? 'bg-stripes' : ''}`;

  const fillStyle = {
    width: indeterminate ? '100%' : `${percentage}%`,
    ...(indeterminate && {
      backgroundImage: 'linear-gradient(45deg, transparent 25%, rgba(255,255,255,0.2) 25%, rgba(255,255,255,0.2) 50%, transparent 50%, transparent 75%, rgba(255,255,255,0.2) 75%)',
      backgroundSize: '1rem 1rem',
      animation: 'progress-indeterminate 2s linear infinite'
    })
  };

  const LabelComponent = () => {
    if (!label && !showPercentage) return null;
    const labelText = label || (showPercentage ? `${Math.round(percentage)}%` : '');
    return (
      <div className={`text-sm font-medium text-gray-700 ${
        labelPosition === 'inline' ? 'absolute inset-0 flex items-center justify-center text-xs text-white' : ''
      }`}>
        {labelText}
      </div>
    );
  };

  return (
    <div className="space-y-1">
      {labelPosition === 'top' && <LabelComponent />}
      <div className={trackClasses}>
        <div className={fillClasses} style={fillStyle} />
        {labelPosition === 'inline' && <LabelComponent />}
      </div>
      {labelPosition === 'bottom' && <LabelComponent />}
    </div>
  );
};

export function ProgressShowcase() {
  const [progressValue, setProgressValue] = useState(0);
  const [loading, setLoading] = useState(false);

  // Animated progress demo
  useEffect(() => {
    const interval = setInterval(() => {
      setProgressValue(prev => (prev >= 100 ? 0 : prev + 1));
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const runProgressDemo = () => {
    setLoading(true);
    let value = 0;
    const interval = setInterval(() => {
      value += Math.random() * 15;
      if (value >= 100) {
        value = 100;
        clearInterval(interval);
        setTimeout(() => setLoading(false), 500);
      }
      setProgressValue(Math.min(value, 100));
    }, 200);
  };

  return (
    <div>
      <div className="showcase-section">
        <h1 className="showcase-title">Progress Component</h1>
        <p className="text-gray-600 mb-8">
          Display progress with paper-inspired design, animations, and clear visual feedback for loading states and completion.
        </p>
      </div>

      {/* Progress Variants */}
      <section className="showcase-section">
        <h2 className="showcase-subtitle">Progress Variants</h2>
        <div className="space-y-6">
          <div className="showcase-item">
            <h3 className="font-semibold mb-3">Primary</h3>
            <Progress variant="primary" value={75} />
            <pre className="showcase-code mt-2">
{`<Progress variant="primary" value={75} />`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-3">Secondary</h3>
            <Progress variant="secondary" value={60} />
            <pre className="showcase-code mt-2">
{`<Progress variant="secondary" value={60} />`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-3">Success</h3>
            <Progress variant="success" value={100} />
            <pre className="showcase-code mt-2">
{`<Progress variant="success" value={100} />`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-3">Warning</h3>
            <Progress variant="warning" value={45} />
            <pre className="showcase-code mt-2">
{`<Progress variant="warning" value={45} />`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-3">Error</h3>
            <Progress variant="error" value={25} />
            <pre className="showcase-code mt-2">
{`<Progress variant="error" value={25} />`}
            </pre>
          </div>
        </div>
      </section>

      {/* Progress Sizes */}
      <section className="showcase-section">
        <h2 className="showcase-subtitle">Progress Sizes</h2>
        <div className="space-y-4">
          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Small</h3>
            <Progress size="sm" value={70} />
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Medium (Default)</h3>
            <Progress size="md" value={70} />
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Large</h3>
            <Progress size="lg" value={70} />
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Extra Large</h3>
            <Progress size="xl" value={70} />
          </div>
        </div>

        <pre className="showcase-code">
{`// Different sizes
<Progress size="sm" value={70} />
<Progress size="md" value={70} />
<Progress size="lg" value={70} />
<Progress size="xl" value={70} />`}
        </pre>
      </section>

      {/* With Labels */}
      <section className="showcase-section">
        <h2 className="showcase-subtitle">Progress with Labels</h2>
        <div className="space-y-6">
          <div className="showcase-item">
            <h3 className="font-semibold mb-3">Top Label</h3>
            <Progress value={65} label="Uploading files..." labelPosition="top" />
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-3">Bottom Label</h3>
            <Progress value={80} label="Processing..." labelPosition="bottom" />
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-3">Inline Label</h3>
            <Progress value={90} size="lg" label="90%" labelPosition="inline" />
          </div>
        </div>

        <pre className="showcase-code">
{`// Different label positions
<Progress value={65} label="Uploading files..." labelPosition="top" />
<Progress value={80} label="Processing..." labelPosition="bottom" />
<Progress value={90} label="90%" labelPosition="inline" />`}
        </pre>
      </section>

      {/* With Percentage */}
      <section className="showcase-section">
        <h2 className="showcase-subtitle">Progress with Percentage</h2>
        <div className="space-y-4">
          <div className="showcase-item">
            <h3 className="font-semibold mb-3">Show Percentage</h3>
            <Progress value={progressValue} showPercentage />
            <p className="text-sm text-gray-600 mt-2">This progress bar updates automatically to demonstrate the percentage display.</p>
          </div>
        </div>

        <pre className="showcase-code">
{`<Progress value={progressValue} showPercentage />`}
        </pre>
      </section>

      {/* Animated Progress */}
      <section className="showcase-section">
        <h2 className="showcase-subtitle">Animated Progress Demo</h2>
        <div className="showcase-item">
          <div className="mb-4">
            <button 
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50"
              onClick={runProgressDemo}
              disabled={loading}
            >
              {loading ? 'Running...' : 'Start Demo'}
            </button>
          </div>
          <Progress 
            value={loading ? progressValue : 0} 
            label={loading ? "Loading..." : "Click to start"} 
            showPercentage 
          />
          <pre className="showcase-code mt-2">
{`// Animated progress with realistic loading
<Progress 
  value={currentValue} 
  label="Loading..." 
  showPercentage 
/>`}
          </pre>
        </div>
      </section>

      {/* Indeterminate Progress */}
      <section className="showcase-section">
        <h2 className="showcase-subtitle">Indeterminate Progress</h2>
        <div className="space-y-4">
          <div className="showcase-item">
            <h3 className="font-semibold mb-3">Loading State</h3>
            <Progress indeterminate label="Please wait..." />
            <p className="text-sm text-gray-600 mt-2">Use when you don't know the exact progress percentage.</p>
          </div>
        </div>

        <pre className="showcase-code">
{`<Progress indeterminate label="Please wait..." />`}
        </pre>
      </section>

      {/* Striped Progress */}
      <section className="showcase-section">
        <h2 className="showcase-subtitle">Striped Progress</h2>
        <div className="space-y-4">
          <div className="showcase-item">
            <h3 className="font-semibold mb-3">Striped Pattern</h3>
            <Progress value={70} striped size="lg" />
            <p className="text-sm text-gray-600 mt-2">Striped pattern adds visual interest to the progress bar.</p>
          </div>
        </div>

        <pre className="showcase-code">
{`<Progress value={70} striped size="lg" />`}
        </pre>
      </section>

      {/* File Upload Example */}
      <section className="showcase-section">
        <h2 className="showcase-subtitle">File Upload Example</h2>
        <div className="max-w-md">
          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-medium mb-3">Uploading Files</h4>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>document.pdf</span>
                  <span>100%</span>
                </div>
                <Progress variant="success" value={100} size="sm" />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>image.jpg</span>
                  <span>75%</span>
                </div>
                <Progress value={75} size="sm" />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>video.mp4</span>
                  <span>Processing...</span>
                </div>
                <Progress indeterminate size="sm" />
              </div>
            </div>
          </div>
          <pre className="showcase-code mt-4">
{`<div className="space-y-3">
  <div>
    <div className="flex justify-between text-sm mb-1">
      <span>document.pdf</span>
      <span>100%</span>
    </div>
    <Progress variant="success" value={100} size="sm" />
  </div>
  <div>
    <div className="flex justify-between text-sm mb-1">
      <span>image.jpg</span>
      <span>75%</span>
    </div>
    <Progress value={75} size="sm" />
  </div>
  <div>
    <div className="flex justify-between text-sm mb-1">
      <span>video.mp4</span>
      <span>Processing...</span>
    </div>
    <Progress indeterminate size="sm" />
  </div>
</div>`}
          </pre>
        </div>
      </section>

      {/* Multi-step Progress */}
      <section className="showcase-section">
        <h2 className="showcase-subtitle">Multi-step Progress</h2>
        <div className="max-w-lg">
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h4 className="font-medium mb-4">Account Setup</h4>
            <div className="space-y-4">
              <div>
                <span className="text-sm text-gray-600">Step 2 of 4</span>
                <Progress value={50} showPercentage labelPosition="top" />
              </div>
              <div className="flex justify-between text-sm text-gray-600">
                <span>✓ Personal Info</span>
                <span>→ Preferences</span>
                <span>Security</span>
                <span>Complete</span>
              </div>
            </div>
          </div>
          <pre className="showcase-code mt-4">
{`<div className="space-y-4">
  <div>
    <span className="text-sm text-gray-600">Step 2 of 4</span>
    <Progress value={50} showPercentage labelPosition="top" />
  </div>
  <div className="flex justify-between text-sm text-gray-600">
    <span>✓ Personal Info</span>
    <span>→ Preferences</span>
    <span>Security</span>
    <span>Complete</span>
  </div>
</div>`}
          </pre>
        </div>
      </section>

      <style jsx>{`
        @keyframes progress-indeterminate {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(400%); }
        }
        
        .bg-stripes {
          background-image: linear-gradient(45deg, transparent 25%, rgba(255,255,255,0.2) 25%, rgba(255,255,255,0.2) 50%, transparent 50%, transparent 75%, rgba(255,255,255,0.2) 75%);
          background-size: 1rem 1rem;
        }
      `}</style>
    </div>
  );
}