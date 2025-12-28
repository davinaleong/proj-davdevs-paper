import React from 'react';

// Mock Skeleton component for demonstration
const Skeleton = ({ 
  width = 'full', 
  height = 'auto', 
  variant = 'rounded', 
  animate = true,
  lines = 1,
  className = '' 
}: any) => {
  const variants = {
    text: 'rounded h-4',
    circular: 'rounded-full aspect-square',
    rectangular: 'rounded-none',
    rounded: 'rounded'
  };

  const getWidthClass = (w: any) => {
    if (w === 'full') return 'w-full';
    if (w === 'auto') return 'w-auto';
    if (typeof w === 'string' && w.includes('%')) return `w-[${w}]`;
    return 'w-full';
  };

  const getHeightClass = (h: any) => {
    if (h === 'auto') return variant === 'text' ? 'h-4' : 'h-auto';
    if (typeof h === 'string') return `h-[${h}]`;
    return 'h-auto';
  };

  const classes = `
    bg-gray-200 overflow-hidden
    ${variants[variant]}
    ${getWidthClass(width)}
    ${getHeightClass(height)}
    ${animate ? 'animate-pulse' : ''}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  // For text variant with multiple lines
  if (variant === 'text' && lines > 1) {
    return (
      <div className="space-y-2">
        {Array.from({ length: lines }, (_, index) => (
          <div
            key={index}
            className={`${classes} ${index === lines - 1 ? 'w-3/4' : ''}`}
          />
        ))}
      </div>
    );
  }

  return <div className={classes} />;
};

export function SkeletonShowcase() {
  return (
    <div>
      <div className="showcase-section">
        <h1 className="showcase-title">Skeleton Component</h1>
        <p className="text-gray-600 mb-8">
          Display loading placeholders with paper-inspired design and smooth animations for better perceived performance.
        </p>
      </div>

      {/* Skeleton Variants */}
      <section className="showcase-section">
        <h2 className="showcase-subtitle">Skeleton Variants</h2>
        <div className="showcase-grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <div className="showcase-item">
            <h3 className="font-semibold mb-4">Text</h3>
            <Skeleton variant="text" />
            <Skeleton variant="text" width="80%" className="mt-2" />
            <Skeleton variant="text" width="60%" className="mt-2" />
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-4">Circular</h3>
            <Skeleton variant="circular" width="64px" height="64px" />
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-4">Rectangular</h3>
            <Skeleton variant="rectangular" height="100px" />
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-4">Rounded</h3>
            <Skeleton variant="rounded" height="80px" />
          </div>
        </div>

        <pre className="showcase-code">
{`// Different variants
<Skeleton variant="text" />
<Skeleton variant="circular" width="64px" height="64px" />
<Skeleton variant="rectangular" height="100px" />
<Skeleton variant="rounded" height="80px" />`}
        </pre>
      </section>

      {/* Multiple Text Lines */}
      <section className="showcase-section">
        <h2 className="showcase-subtitle">Multiple Text Lines</h2>
        <div className="showcase-item max-w-md">
          <Skeleton variant="text" lines={3} />
          <pre className="showcase-code mt-4">
{`<Skeleton variant="text" lines={3} />`}
          </pre>
        </div>
      </section>

      {/* Card Skeleton */}
      <section className="showcase-section">
        <h2 className="showcase-subtitle">Card Skeleton</h2>
        <div className="max-w-sm">
          <div className="border border-gray-200 rounded-lg p-4 space-y-4">
            <Skeleton variant="rounded" height="200px" />
            <div className="space-y-2">
              <Skeleton variant="text" />
              <Skeleton variant="text" width="80%" />
              <Skeleton variant="text" width="60%" />
            </div>
            <div className="flex items-center space-x-3">
              <Skeleton variant="circular" width="40px" height="40px" />
              <div className="flex-1 space-y-2">
                <Skeleton variant="text" width="50%" />
                <Skeleton variant="text" width="30%" />
              </div>
            </div>
          </div>
          <pre className="showcase-code mt-4">
{`<div className="border rounded-lg p-4 space-y-4">
  <Skeleton variant="rounded" height="200px" />
  <div className="space-y-2">
    <Skeleton variant="text" />
    <Skeleton variant="text" width="80%" />
    <Skeleton variant="text" width="60%" />
  </div>
  <div className="flex items-center space-x-3">
    <Skeleton variant="circular" width="40px" height="40px" />
    <div className="flex-1 space-y-2">
      <Skeleton variant="text" width="50%" />
      <Skeleton variant="text" width="30%" />
    </div>
  </div>
</div>`}
          </pre>
        </div>
      </section>

      {/* Profile Skeleton */}
      <section className="showcase-section">
        <h2 className="showcase-subtitle">Profile Skeleton</h2>
        <div className="max-w-md">
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="flex items-center space-x-4 mb-4">
              <Skeleton variant="circular" width="80px" height="80px" />
              <div className="flex-1 space-y-2">
                <Skeleton variant="text" width="60%" />
                <Skeleton variant="text" width="40%" />
                <Skeleton variant="text" width="70%" />
              </div>
            </div>
            <div className="space-y-3">
              <Skeleton variant="text" />
              <Skeleton variant="text" width="90%" />
              <Skeleton variant="text" width="75%" />
            </div>
            <div className="mt-6 flex space-x-3">
              <Skeleton variant="rounded" width="100px" height="36px" />
              <Skeleton variant="rounded" width="100px" height="36px" />
            </div>
          </div>
          <pre className="showcase-code mt-4">
{`<div className="bg-white border rounded-lg p-6">
  <div className="flex items-center space-x-4 mb-4">
    <Skeleton variant="circular" width="80px" height="80px" />
    <div className="flex-1 space-y-2">
      <Skeleton variant="text" width="60%" />
      <Skeleton variant="text" width="40%" />
      <Skeleton variant="text" width="70%" />
    </div>
  </div>
  <div className="space-y-3">
    <Skeleton variant="text" />
    <Skeleton variant="text" width="90%" />
    <Skeleton variant="text" width="75%" />
  </div>
  <div className="mt-6 flex space-x-3">
    <Skeleton variant="rounded" width="100px" height="36px" />
    <Skeleton variant="rounded" width="100px" height="36px" />
  </div>
</div>`}
          </pre>
        </div>
      </section>

      {/* List Skeleton */}
      <section className="showcase-section">
        <h2 className="showcase-subtitle">List Skeleton</h2>
        <div className="max-w-md">
          <div className="space-y-3">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="flex items-center space-x-3 p-3 bg-white border border-gray-200 rounded-md">
                <Skeleton variant="circular" width="48px" height="48px" />
                <div className="flex-1 space-y-2">
                  <Skeleton variant="text" width="70%" />
                  <Skeleton variant="text" width="50%" />
                </div>
                <Skeleton variant="rounded" width="60px" height="24px" />
              </div>
            ))}
          </div>
          <pre className="showcase-code mt-4">
{`<div className="space-y-3">
  {[1, 2, 3, 4].map((item) => (
    <div key={item} className="flex items-center space-x-3 p-3 border rounded-md">
      <Skeleton variant="circular" width="48px" height="48px" />
      <div className="flex-1 space-y-2">
        <Skeleton variant="text" width="70%" />
        <Skeleton variant="text" width="50%" />
      </div>
      <Skeleton variant="rounded" width="60px" height="24px" />
    </div>
  ))}
</div>`}
          </pre>
        </div>
      </section>

      {/* Table Skeleton */}
      <section className="showcase-section">
        <h2 className="showcase-subtitle">Table Skeleton</h2>
        <div className="overflow-hidden border border-gray-200 rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3">
                  <Skeleton variant="text" width="60px" />
                </th>
                <th className="px-6 py-3">
                  <Skeleton variant="text" width="80px" />
                </th>
                <th className="px-6 py-3">
                  <Skeleton variant="text" width="70px" />
                </th>
                <th className="px-6 py-3">
                  <Skeleton variant="text" width="50px" />
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {[1, 2, 3, 4, 5].map((row) => (
                <tr key={row}>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <Skeleton variant="circular" width="32px" height="32px" className="mr-3" />
                      <Skeleton variant="text" width="100px" />
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <Skeleton variant="text" width="120px" />
                  </td>
                  <td className="px-6 py-4">
                    <Skeleton variant="rounded" width="60px" height="20px" />
                  </td>
                  <td className="px-6 py-4">
                    <Skeleton variant="rounded" width="80px" height="32px" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <pre className="showcase-code mt-4">
{`<table className="min-w-full">
  <thead>
    <tr>
      <th><Skeleton variant="text" width="60px" /></th>
      <th><Skeleton variant="text" width="80px" /></th>
      {/* ... more headers */}
    </tr>
  </thead>
  <tbody>
    {[1, 2, 3].map((row) => (
      <tr key={row}>
        <td>
          <div className="flex items-center">
            <Skeleton variant="circular" width="32px" height="32px" />
            <Skeleton variant="text" width="100px" />
          </div>
        </td>
        {/* ... more cells */}
      </tr>
    ))}
  </tbody>
</table>`}
        </pre>
      </section>

      {/* Without Animation */}
      <section className="showcase-section">
        <h2 className="showcase-subtitle">Without Animation</h2>
        <div className="max-w-md space-y-3">
          <Skeleton variant="text" animate={false} />
          <Skeleton variant="text" width="80%" animate={false} />
          <Skeleton variant="text" width="60%" animate={false} />
        </div>
        <pre className="showcase-code mt-4">
{`<Skeleton variant="text" animate={false} />
<Skeleton variant="text" width="80%" animate={false} />
<Skeleton variant="text" width="60%" animate={false} />`}
        </pre>
      </section>
    </div>
  );
}