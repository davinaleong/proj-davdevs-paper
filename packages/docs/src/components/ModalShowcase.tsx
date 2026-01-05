import React, { useState } from 'react';
import { X } from 'lucide-react';

// Mock Modal component for demonstration
const Modal = ({ 
  children, 
  open = false, 
  onClose, 
  size = 'md', 
  title, 
  showCloseButton = true,
  className = '' 
}: any) => {
  if (!open) return null;

  const sizes = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    full: 'max-w-full w-full h-full'
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose?.();
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={handleBackdropClick}
    >
      <div className={`relative bg-white dark:bg-black rounded-lg shadow-xl border border-gray-200 dark:border-gray-800 ${sizes[size]} ${className}`}>
        {(title || showCloseButton) && (
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            {title && (
              <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{title}</h2>
            )}
            {showCloseButton && (
              <button
                type="button"
                className="p-1 ml-3 rounded-sm text-gray-400 dark:text-gray-600 hover:text-gray-600 hover:dark:text-gray-400 dark:hover:text-gray-400 transition-colors"
                onClick={onClose}
              >
                <X className="w-6 h-6" />
              </button>
            )}
          </div>
        )}
        <div className="p-6">
          {children}
        </div>
      </div>
    </div>
  );
};

export function ModalShowcase() {
  const [modals, setModals] = useState<{[key: string]: boolean}>({});

  const openModal = (id: string) => {
    setModals(prev => ({ ...prev, [id]: true }));
  };

  const closeModal = (id: string) => {
    setModals(prev => ({ ...prev, [id]: false }));
  };

  return (
    <div>
      <div className="showcase-section">
        <h1 className="showcase-title">Modal Component</h1>
        <p className="text-gray-700 dark:text-gray-300 mb-8">
          Display content in an overlay with paper-inspired design, focus management, and accessibility support.
        </p>
      </div>

      {/* Basic Modal */}
      <section className="showcase-section">
        <h2 className="showcase-subtitle">Basic Modal</h2>
        <div className="showcase-item">
          <button 
            className="px-4 py-2 bg-blue-600 text-white rounded-md transition-colors"
            onClick={() => openModal('basic')}
          >
            Open Basic Modal
          </button>
          <pre className="showcase-code mt-2">
{`<Modal open={isOpen} onClose={() => setIsOpen(false)}>
  <p>This is a basic modal with some content.</p>
</Modal>`}
          </pre>
        </div>
      </section>

      {/* Modal with Title */}
      <section className="showcase-section">
        <h2 className="showcase-subtitle">Modal with Title</h2>
        <div className="showcase-item">
          <button 
            className="px-4 py-2 bg-green-600 text-white rounded-md transition-colors"
            onClick={() => openModal('with-title')}
          >
            Open Modal with Title
          </button>
          <pre className="showcase-code mt-2">
{`<Modal 
  open={isOpen} 
  onClose={() => setIsOpen(false)}
  title="Modal Title"
>
  <p>This modal has a title in the header.</p>
  <div className="flex justify-end space-x-3 mt-6">
    <button className="px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 hover:dark:text-gray-200">
      Cancel
    </button>
    <button className="px-4 py-2 bg-blue-600 text-white rounded-md">
      Save Changes
    </button>
  </div>
</Modal>`}
          </pre>
        </div>
      </section>

      {/* Modal Sizes */}
      <section className="showcase-section">
        <h2 className="showcase-subtitle">Modal Sizes</h2>
        <div className="showcase-grid grid-cols-2 md:grid-cols-4">
          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Small</h3>
            <button 
              className="px-3 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 text-sm"
              onClick={() => openModal('small')}
            >
              Small Modal
            </button>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Medium</h3>
            <button 
              className="px-3 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 text-sm"
              onClick={() => openModal('medium')}
            >
              Medium Modal
            </button>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Large</h3>
            <button 
              className="px-3 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 text-sm"
              onClick={() => openModal('large')}
            >
              Large Modal
            </button>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Extra Large</h3>
            <button 
              className="px-3 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 text-sm"
              onClick={() => openModal('xl')}
            >
              XL Modal
            </button>
          </div>
        </div>

        <pre className="showcase-code">
{`// Different sizes
<Modal size="sm">Small modal</Modal>
<Modal size="md">Medium modal (default)</Modal>
<Modal size="lg">Large modal</Modal>
<Modal size="xl">Extra large modal</Modal>`}
        </pre>
      </section>

      {/* Confirmation Modal */}
      <section className="showcase-section">
        <h2 className="showcase-subtitle">Confirmation Modal</h2>
        <div className="showcase-item">
          <button 
            className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
            onClick={() => openModal('confirmation')}
          >
            Delete Item
          </button>
          <pre className="showcase-code mt-2">
{`<Modal 
  open={isOpen} 
  onClose={() => setIsOpen(false)}
  title="Confirm Deletion"
  size="sm"
>
  <p className="text-gray-700 dark:text-gray-300 mb-6">
    Are you sure you want to delete this item? This action cannot be undone.
  </p>
  <div className="flex justify-end space-x-3">
    <button 
      className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-gray-800 hover:dark:text-gray-200"
      onClick={() => setIsOpen(false)}
    >
      Cancel
    </button>
    <button className="px-4 py-2 bg-red-600 dark:bg-red-400 text-white dark:text-black rounded-md hover:bg-red-700 hover:dark:bg-red-300">
      Delete
    </button>
  </div>
</Modal>`}
          </pre>
        </div>
      </section>

      {/* Rendered Modals */}
      <Modal 
        open={modals['basic']} 
        onClose={() => closeModal('basic')}
      >
        <p>This is a basic modal with some content.</p>
        <p className="mt-4 text-gray-700 dark:text-gray-300">You can click outside the modal or press the X button to close it.</p>
      </Modal>

      <Modal 
        open={modals['with-title']} 
        onClose={() => closeModal('with-title')}
        title="Modal Title"
      >
        <p>This modal has a title in the header.</p>
        <p className="mt-4 text-gray-700 dark:text-gray-300">The title helps users understand the purpose of the modal.</p>
        <div className="flex justify-end space-x-3 mt-6">
          <button 
            className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-gray-800 hover:dark:text-gray-200 transition-colors"
            onClick={() => closeModal('with-title')}
          >
            Cancel
          </button>
          <button className="px-4 py-2 bg-blue-600 dark:bg-blue-400 text-white dark:text-black rounded-md hover:bg-blue-700 hover:dark:bg-blue-300 transition-colors">
            Save Changes
          </button>
        </div>
      </Modal>

      <Modal 
        open={modals['small']} 
        onClose={() => closeModal('small')}
        size="sm"
        title="Small Modal"
      >
        <p>This is a small modal with limited width.</p>
      </Modal>

      <Modal 
        open={modals['medium']} 
        onClose={() => closeModal('medium')}
        size="md"
        title="Medium Modal"
      >
        <p>This is a medium-sized modal (default size).</p>
        <p className="mt-4 text-gray-700 dark:text-gray-300">Perfect for most use cases.</p>
      </Modal>

      <Modal 
        open={modals['large']} 
        onClose={() => closeModal('large')}
        size="lg"
        title="Large Modal"
      >
        <p>This is a large modal with more space for content.</p>
        <p className="mt-4 text-gray-700 dark:text-gray-300">Great for forms or detailed information.</p>
        <div className="mt-6 p-4 bg-gray-100 dark:bg-gray-900 rounded-md">
          <h4 className="font-medium mb-2">Additional Content</h4>
          <p className="text-sm text-gray-700 dark:text-gray-300">Large modals can accommodate more complex layouts and multiple sections.</p>
        </div>
      </Modal>

      <Modal 
        open={modals['xl']} 
        onClose={() => closeModal('xl')}
        size="xl"
        title="Extra Large Modal"
      >
        <p>This is an extra large modal with maximum width.</p>
        <p className="mt-4 text-gray-700 dark:text-gray-300">Ideal for complex forms or rich content.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="p-4 bg-blue-50 dark:bg-blue-900 rounded-md">
            <h4 className="font-medium mb-2">Section 1</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300">Extra large modals can utilize grid layouts effectively.</p>
          </div>
          <div className="p-4 bg-green-50 dark:bg-green-900 rounded-md">
            <h4 className="font-medium mb-2">Section 2</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300">Perfect for side-by-side content arrangement.</p>
          </div>
        </div>
      </Modal>

      <Modal 
        open={modals['confirmation']} 
        onClose={() => closeModal('confirmation')}
        title="Confirm Deletion"
        size="sm"
      >
        <p className="text-gray-600 mb-6">
          Are you sure you want to delete this item? This action cannot be undone.
        </p>
        <div className="flex justify-end space-x-3">
          <button 
            className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
            onClick={() => closeModal('confirmation')}
          >
            Cancel
          </button>
          <button 
            className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
            onClick={() => closeModal('confirmation')}
          >
            Delete
          </button>
        </div>
      </Modal>
    </div>
  );
}