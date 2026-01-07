
import { Skeleton } from '@davdevs/paper-basic';

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
            <Skeleton variant="text" width="4/5" className="mt-2" />
            <Skeleton variant="text" width="3/5" className="mt-2" />
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-4">Circular</h3>
            <Skeleton variant="circular" width="lg" height="lg" />
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-4">Rectangular</h3>
            <Skeleton variant="rectangular" width="lg" height="lg" />
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-4">Rounded</h3>
            <Skeleton variant="rounded" width="lg" height="lg" />
          </div>
        </div>

        <pre className="showcase-code">
{`// Different variants with preset sizes
<Skeleton variant="text" />
<Skeleton variant="circular" width="lg" height="lg" />
<Skeleton variant="rectangular" width="lg" height="lg" />
<Skeleton variant="rounded" width="lg" height="lg" />`}
        </pre>
      </section>

      {/* Size Presets */}
      <section className="showcase-section">
        <h2 className="showcase-subtitle">Size Presets</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold mb-3">Height Presets</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-4">
                <span className="w-16 text-sm">xs</span>
                <Skeleton variant="rounded" width="base" height="xs" />
              </div>
              <div className="flex items-center gap-4">
                <span className="w-16 text-sm">sm</span>
                <Skeleton variant="rounded" width="base" height="sm" />
              </div>
              <div className="flex items-center gap-4">
                <span className="w-16 text-sm">base</span>
                <Skeleton variant="rounded" width="base" height="base" />
              </div>
              <div className="flex items-center gap-4">
                <span className="w-16 text-sm">md</span>
                <Skeleton variant="rounded" width="base" height="md" />
              </div>
              <div className="flex items-center gap-4">
                <span className="w-16 text-sm">lg</span>
                <Skeleton variant="rounded" width="base" height="lg" />
              </div>
              <div className="flex items-center gap-4">
                <span className="w-16 text-sm">xl</span>
                <Skeleton variant="rounded" width="base" height="xl" />
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Width Presets</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-4">
                <span className="w-16 text-sm">xs</span>
                <Skeleton variant="rounded" width="xs" height="base" />
              </div>
              <div className="flex items-center gap-4">
                <span className="w-16 text-sm">sm</span>
                <Skeleton variant="rounded" width="sm" height="base" />
              </div>
              <div className="flex items-center gap-4">
                <span className="w-16 text-sm">base</span>
                <Skeleton variant="rounded" width="base" height="base" />
              </div>
              <div className="flex items-center gap-4">
                <span className="w-16 text-sm">md</span>
                <Skeleton variant="rounded" width="md" height="base" />
              </div>
              <div className="flex items-center gap-4">
                <span className="w-16 text-sm">lg</span>
                <Skeleton variant="rounded" width="lg" height="base" />
              </div>
              <div className="flex items-center gap-4">
                <span className="w-16 text-sm">xl</span>
                <Skeleton variant="rounded" width="xl" height="base" />
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Fractional Widths</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-4">
                <span className="w-16 text-sm">1/2</span>
                <Skeleton variant="rounded" width="1/2" height="base" />
              </div>
              <div className="flex items-center gap-4">
                <span className="w-16 text-sm">3/4</span>
                <Skeleton variant="rounded" width="3/4" height="base" />
              </div>
              <div className="flex items-center gap-4">
                <span className="w-16 text-sm">4/5</span>
                <Skeleton variant="rounded" width="4/5" height="base" />
              </div>
              <div className="flex items-center gap-4">
                <span className="w-16 text-sm">full</span>
                <Skeleton variant="rounded" width="full" height="base" />
              </div>
            </div>
          </div>
        </div>

        <pre className="showcase-code">
{`// Using size presets
<Skeleton variant="rounded" width="lg" height="md" />
<Skeleton variant="text" width="3/4" />
<Skeleton variant="circular" width="xl" height="xl" />`}
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
          <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-4 space-y-4">
            <Skeleton variant="rounded" width="full" height="2xl" />
            <div className="space-y-2">
              <Skeleton variant="text" />
              <Skeleton variant="text" width="4/5" />
              <Skeleton variant="text" width="3/5" />
            </div>
            <div className="flex items-center space-x-3">
              <Skeleton variant="circular" width="base" height="base" />
              <div className="flex-1 space-y-2">
                <Skeleton variant="text" width="1/2" />
                <Skeleton variant="text" width="1/3" />
              </div>
            </div>
          </div>
          <pre className="showcase-code mt-4">
{`<div className="border rounded-lg p-4 space-y-4">
  <Skeleton variant="rounded" width="full" height="2xl" />
  <div className="space-y-2">
    <Skeleton variant="text" />
    <Skeleton variant="text" width="4/5" />
    <Skeleton variant="text" width="3/5" />
  </div>
  <div className="flex items-center space-x-3">
    <Skeleton variant="circular" width="base" height="base" />
    <div className="flex-1 space-y-2">
      <Skeleton variant="text" width="1/2" />
      <Skeleton variant="text" width="1/3" />
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
          <div className="bg-white border dark:bg-black dark:border-gray-800 rounded-lg p-6">
            <div className="flex items-center space-x-4 mb-4">
              <Skeleton variant="circular" width="xl" height="xl" />
              <div className="flex-1 space-y-2">
                <Skeleton variant="text" width="3/5" />
                <Skeleton variant="text" width="2/5" />
                <Skeleton variant="text" width="4/5" />
              </div>
            </div>
            <div className="space-y-3">
              <Skeleton variant="text" />
              <Skeleton variant="text" width="9/10" />
              <Skeleton variant="text" width="3/4" />
            </div>
            <div className="mt-6 flex space-x-3">
              <Skeleton variant="rounded" width="md" height="base" />
              <Skeleton variant="rounded" width="md" height="base" />
            </div>
          </div>
          <pre className="showcase-code mt-4">
{`<div className="bg-white border rounded-lg p-6">
  <div className="flex items-center space-x-4 mb-4">
    <Skeleton variant="circular" width="xl" height="xl" />
    <div className="flex-1 space-y-2">
      <Skeleton variant="text" width="3/5" />
      <Skeleton variant="text" width="2/5" />
      <Skeleton variant="text" width="4/5" />
    </div>
  </div>
  <div className="space-y-3">
    <Skeleton variant="text" />
    <Skeleton variant="text" width="9/10" />
    <Skeleton variant="text" width="3/4" />
  </div>
  <div className="mt-6 flex space-x-3">
    <Skeleton variant="rounded" width="md" height="base" />
    <Skeleton variant="rounded" width="md" height="base" />
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
              <div key={item} className="flex items-center space-x-3 p-3 bg-white dark:bg-black dark:border-gray-800 border border-gray-200 rounded-md">
                <Skeleton variant="circular" width="md" height="md" />
                <div className="flex-1 space-y-2">
                  <Skeleton variant="text" width="4/5" />
                  <Skeleton variant="text" width="1/2" />
                </div>
                <Skeleton variant="rounded" width="sm" height="sm" />
              </div>
            ))}
          </div>
          <pre className="showcase-code mt-4">
{`<div className="space-y-3">
  {[1, 2, 3, 4].map((item) => (
    <div key={item} className="flex items-center space-x-3 p-3 border rounded-md">
      <Skeleton variant="circular" width="md" height="md" />
      <div className="flex-1 space-y-2">
        <Skeleton variant="text" width="4/5" />
        <Skeleton variant="text" width="1/2" />
      </div>
      <Skeleton variant="rounded" width="sm" height="sm" />
    </div>
  ))}
</div>`}
          </pre>
        </div>
      </section>

      {/* Table Skeleton */}
      <section className="showcase-section">
        <h2 className="showcase-subtitle">Table Skeleton</h2>
        <div className="overflow-hidden border border-gray-200 dark:border-gray-800 rounded-lg">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-800">
            <thead className="bg-gray-50 dark:bg-gray-900">
              <tr>
                <th className="px-6 py-3">
                  <Skeleton variant="text" width="sm" />
                </th>
                <th className="px-6 py-3">
                  <Skeleton variant="text" width="base" />
                </th>
                <th className="px-6 py-3">
                  <Skeleton variant="text" width="sm" />
                </th>
                <th className="px-6 py-3">
                  <Skeleton variant="text" width="xs" />
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-black divide-y divide-gray-200 dark:divide-gray-800">
              {[1, 2, 3, 4, 5].map((row) => (
                <tr key={row}>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <Skeleton variant="circular" width="sm" height="sm" className="mr-3" />
                      <Skeleton variant="text" width="base" />
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <Skeleton variant="text" width="md" />
                  </td>
                  <td className="px-6 py-4">
                    <Skeleton variant="rounded" width="sm" height="xs" />
                  </td>
                  <td className="px-6 py-4">
                    <Skeleton variant="rounded" width="base" height="sm" />
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
      <th><Skeleton variant="text" width="sm" /></th>
      <th><Skeleton variant="text" width="base" /></th>
      {/* ... more headers */}
    </tr>
  </thead>
  <tbody>
    {[1, 2, 3].map((row) => (
      <tr key={row}>
        <td>
          <div className="flex items-center">
            <Skeleton variant="circular" width="sm" height="sm" />
            <Skeleton variant="text" width="base" />
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
          <Skeleton variant="text" width="4/5" animate={false} />
          <Skeleton variant="text" width="3/5" animate={false} />
        </div>
        <pre className="showcase-code mt-4">
{`<Skeleton variant="text" animate={false} />
<Skeleton variant="text" width="4/5" animate={false} />
<Skeleton variant="text" width="3/5" animate={false} />`}
        </pre>
      </section>
    </div>
  );
}