import React from 'react';
import { User } from 'lucide-react';
import { Avatar } from '@davdevs/paper-basic';

export function AvatarShowcase() {
  return (
    <div>
      <div className="showcase-section">
        <h1 className="showcase-title">Avatar Component</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          Flexible avatar component supporting images, initials, and icons with status indicators and paper-inspired design.
        </p>
      </div>

      {/* Size Variants */}
      <section className="showcase-section">
        <h2 className="showcase-subtitle">Avatar Sizes</h2>
        <div className="showcase-grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6">
          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Extra Small</h3>
            <Avatar size="xs" name="XS" className="mb-4" />
            <pre className="showcase-code">
{`<Avatar size="xs" name="XS" />`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Small</h3>
            <Avatar size="sm" name="SM" className="mb-4" />
            <pre className="showcase-code">
{`<Avatar size="sm" name="SM" />`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Medium</h3>
            <Avatar size="md" name="MD" className="mb-4" />
            <pre className="showcase-code">
{`<Avatar size="md" name="MD" />`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Large</h3>
            <Avatar size="lg" name="LG" className="mb-4" />
            <pre className="showcase-code">
{`<Avatar size="lg" name="LG" />`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Extra Large</h3>
            <Avatar size="xl" name="XL" className="mb-4" />
            <pre className="showcase-code">
{`<Avatar size="xl" name="XL" />`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">2X Large</h3>
            <Avatar size="2xl" name="2XL" className="mb-4" />
            <pre className="showcase-code">
{`<Avatar size="2xl" name="2XL" />`}
            </pre>
          </div>
        </div>
      </section>

      {/* Fallback Types */}
      <section className="showcase-section">
        <h2 className="showcase-subtitle">Fallback Types</h2>
        <div className="showcase-grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Image Avatar</h3>
            <Avatar 
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150" 
              alt="John Doe" 
              size="lg"
              className="mb-4" 
            />
            <pre className="showcase-code">
{`<Avatar 
  src="/profile.jpg"
  alt="John Doe"
  size="lg"
/>`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Name Initials</h3>
            <Avatar name="Jane Smith" size="lg" className="mb-4" />
            <pre className="showcase-code">
{`<Avatar 
  name="Jane Smith"
  size="lg"
/>`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Custom Initials</h3>
            <Avatar initials="AB" size="lg" className="mb-4" />
            <pre className="showcase-code">
{`<Avatar 
  initials="AB"
  size="lg"
/>`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Default Icon</h3>
            <Avatar size="lg" className="mb-4" />
            <pre className="showcase-code">
{`<Avatar size="lg" />`}
            </pre>
          </div>
        </div>
      </section>

      {/* Color Variants */}
      <section className="showcase-section">
        <h2 className="showcase-subtitle">Color Variants</h2>
        <div className="showcase-grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6">
          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Default</h3>
            <Avatar name="Default" className="mb-4" />
            <pre className="showcase-code">
{`<Avatar name="Default" />`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Primary</h3>
            <Avatar name="Primary" variant="primary" className="mb-4" />
            <pre className="showcase-code">
{`<Avatar 
  name="Primary"
  variant="primary"
/>`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Secondary</h3>
            <Avatar name="Secondary" variant="secondary" className="mb-4" />
            <pre className="showcase-code">
{`<Avatar 
  name="Secondary"
  variant="secondary"
/>`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Success</h3>
            <Avatar name="Success" variant="success" className="mb-4" />
            <pre className="showcase-code">
{`<Avatar 
  name="Success"
  variant="success"
/>`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Warning</h3>
            <Avatar name="Warning" variant="warning" className="mb-4" />
            <pre className="showcase-code">
{`<Avatar 
  name="Warning"
  variant="warning"
/>`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Danger</h3>
            <Avatar name="Danger" variant="danger" className="mb-4" />
            <pre className="showcase-code">
{`<Avatar 
  name="Danger"
  variant="danger"
/>`}
            </pre>
          </div>
        </div>
      </section>

      {/* Shape Variants */}
      <section className="showcase-section">
        <h2 className="showcase-subtitle">Shape Variants</h2>
        <div className="showcase-grid grid-cols-1 md:grid-cols-2">
          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Circle (Default)</h3>
            <div className="flex gap-4 items-center mb-4">
              <Avatar name="Circle" size="lg" />
              <Avatar 
                src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150" 
                size="lg" 
                alt="Circle Image"
              />
            </div>
            <pre className="showcase-code">
{`<Avatar name="Circle" size="lg" />`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Square</h3>
            <div className="flex gap-4 items-center mb-4">
              <Avatar name="Square" size="lg" shape="square" />
              <Avatar 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150" 
                size="lg" 
                shape="square"
                alt="Square Image"
              />
            </div>
            <pre className="showcase-code">
{`<Avatar 
  name="Square"
  size="lg"
  shape="square"
/>`}
            </pre>
          </div>
        </div>
      </section>

      {/* Status Indicators */}
      <section className="showcase-section">
        <h2 className="showcase-subtitle">Status Indicators</h2>
        <div className="showcase-grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Online</h3>
            <Avatar 
              name="Online" 
              size="lg" 
              showStatus 
              status="online"
              className="mb-4" 
            />
            <pre className="showcase-code">
{`<Avatar 
  name="Online"
  showStatus
  status="online"
/>`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Away</h3>
            <Avatar 
              name="Away" 
              size="lg" 
              showStatus 
              status="away"
              className="mb-4" 
            />
            <pre className="showcase-code">
{`<Avatar 
  name="Away"
  showStatus
  status="away"
/>`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Busy</h3>
            <Avatar 
              name="Busy" 
              size="lg" 
              showStatus 
              status="busy"
              className="mb-4" 
            />
            <pre className="showcase-code">
{`<Avatar 
  name="Busy"
  showStatus
  status="busy"
/>`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Offline</h3>
            <Avatar 
              name="Offline" 
              size="lg" 
              showStatus 
              status="offline"
              className="mb-4" 
            />
            <pre className="showcase-code">
{`<Avatar 
  name="Offline"
  showStatus
  status="offline"
/>`}
            </pre>
          </div>
        </div>
      </section>

      {/* Interactive Avatars */}
      <section className="showcase-section">
        <h2 className="showcase-subtitle">Interactive Avatars</h2>
        <div className="showcase-grid grid-cols-1 md:grid-cols-2">
          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Clickable Avatar</h3>
            <Avatar 
              name="Clickable" 
              size="lg" 
              interactive
              onClick={() => alert('Avatar clicked!')}
              className="mb-4" 
            />
            <p className="text-sm text-gray-600 mb-4">Click the avatar above</p>
            <pre className="showcase-code">
{`<Avatar 
  name="Clickable"
  interactive
  onClick={() => openProfile()}
/>`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Custom Element</h3>
            <Avatar 
              as="a"
              href="#"
              name="Link"
              size="lg"
              interactive
              className="mb-4"
            />
            <p className="text-sm text-gray-600 mb-4">Avatar as a link</p>
            <pre className="showcase-code">
{`<Avatar 
  as="a"
  href="/profile"
  name="Link"
  interactive
/>`}
            </pre>
          </div>
        </div>
      </section>

      {/* Avatar Groups */}
      <section className="showcase-section">
        <h2 className="showcase-subtitle">Avatar Groups</h2>
        <div className="showcase-item">
          <h3 className="font-semibold mb-2">Team Members</h3>
          <div className="flex -space-x-2 mb-4">
            <Avatar 
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150" 
              size="md" 
              alt="John"
              className="border-2 border-white dark:border-gray-800"
            />
            <Avatar 
              src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150" 
              size="md" 
              alt="Jane"
              className="border-2 border-white dark:border-gray-800"
            />
            <Avatar 
              name="Mike Wilson" 
              size="md" 
              className="border-2 border-white dark:border-gray-800"
            />
            <Avatar 
              name="Sarah Davis" 
              size="md" 
              className="border-2 border-white dark:border-gray-800"
            />
            <div className="flex items-center justify-center w-10 h-10 bg-gray-100 dark:bg-gray-700 border-2 border-white dark:border-gray-800 rounded-full text-xs font-medium text-gray-500 dark:text-gray-400">
              +3
            </div>
          </div>
          <pre className="showcase-code">
{`<div className="flex -space-x-2">
  <Avatar 
    src="/user1.jpg"
    className="border-2 border-white dark:border-gray-800"
  />
  <Avatar 
    src="/user2.jpg"
    className="border-2 border-white dark:border-gray-800"
  />
  <Avatar 
    name="Mike Wilson"
    className="border-2 border-white dark:border-gray-800"
  />
  <div className="flex items-center justify-center w-10 h-10 bg-gray-100 dark:bg-gray-700 border-2 border-white dark:border-gray-800 rounded-full text-xs font-medium text-gray-500 dark:text-gray-400">
    +3
  </div>
</div>`}
          </pre>
        </div>
      </section>

      {/* Custom Icons */}
      <section className="showcase-section">
        <h2 className="showcase-subtitle">Custom Icons</h2>
        <div className="showcase-item">
          <h3 className="font-semibold mb-2">Custom Icon Fallback</h3>
          <div className="flex gap-4 items-center mb-4">
            <Avatar icon={<User className="w-6 h-6" />} size="lg" />
            <Avatar 
              icon={<User className="w-6 h-6" />} 
              size="lg" 
              variant="primary"
            />
          </div>
          <pre className="showcase-code">
{`<Avatar 
  icon={<CustomIcon />}
  size="lg"
  variant="primary"
/>`}
          </pre>
        </div>
      </section>
    </div>
  );
}