import React, { useState } from 'react';
import { Pagination } from '@davdevs/paper-basic';

export function PaginationShowcase() {
  const [currentPage1, setCurrentPage1] = useState(1);
  const [currentPage2, setCurrentPage2] = useState(5);
  const [currentPage3, setCurrentPage3] = useState(1);

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-700 dark:text-gray-300 mb-2">Pagination</h1>
        <p className="text-gray-500">Page navigation with paper-inspired design</p>
      </div>

      <div className="space-y-8">
        {/* Basic Usage */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Basic Usage</h2>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-500 mb-2">Current page: {currentPage1} of 10</p>
              <Pagination
                currentPage={currentPage1}
                totalPages={10}
                onPageChange={setCurrentPage1}
              />
            </div>
          </div>
        </div>

        {/* Variants */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Variants</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-2">Default</h3>
              <Pagination
                currentPage={3}
                totalPages={10}
                onPageChange={() => {}}
                variant="default"
              />
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-2">Minimal</h3>
              <Pagination
                currentPage={3}
                totalPages={10}
                onPageChange={() => {}}
                variant="minimal"
              />
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-2">Pills</h3>
              <Pagination
                currentPage={3}
                totalPages={10}
                onPageChange={() => {}}
                variant="pills"
              />
            </div>
          </div>
        </div>

        {/* Sizes */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Sizes</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-2">Small</h3>
              <Pagination
                currentPage={3}
                totalPages={10}
                onPageChange={() => {}}
                size="sm"
              />
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-2">Medium (Default)</h3>
              <Pagination
                currentPage={3}
                totalPages={10}
                onPageChange={() => {}}
                size="md"
              />
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-2">Large</h3>
              <Pagination
                currentPage={3}
                totalPages={10}
                onPageChange={() => {}}
                size="lg"
              />
            </div>
          </div>
        </div>

        {/* Configuration Options */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Configuration</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-2">With Page Info</h3>
              <Pagination
                currentPage={currentPage2}
                totalPages={20}
                onPageChange={setCurrentPage2}
                showPageInfo={true}
              />
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-2">Without First/Last Buttons</h3>
              <Pagination
                currentPage={5}
                totalPages={10}
                onPageChange={() => {}}
                showFirstLast={false}
              />
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-2">Without Previous/Next Buttons</h3>
              <Pagination
                currentPage={5}
                totalPages={10}
                onPageChange={() => {}}
                showPrevNext={false}
              />
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-2">Custom Sibling Count (3)</h3>
              <Pagination
                currentPage={8}
                totalPages={20}
                onPageChange={() => {}}
                siblingCount={3}
              />
            </div>
          </div>
        </div>

        {/* Custom Labels */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Custom Labels</h2>
          <Pagination
            currentPage={3}
            totalPages={10}
            onPageChange={() => {}}
            showPageInfo={true}
            labels={{
              first: 'First',
              previous: 'Prev',
              next: 'Next',
              last: 'Last',
              pageInfo: (current, total) => `${current} of ${total} pages`
            }}
          />
        </div>

        {/* Large Dataset */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Large Dataset (100 pages)</h2>
          <div className="space-y-4">
            <p className="text-sm text-gray-500">Current page: {currentPage3} of 100</p>
            <Pagination
              currentPage={currentPage3}
              totalPages={100}
              onPageChange={setCurrentPage3}
              showPageInfo={true}
              siblingCount={2}
            />
            <div className="flex gap-2 mt-4">
              <button 
                onClick={() => setCurrentPage3(1)}
                className="px-3 py-1 bg-blue-600 text-white rounded text-sm"
              >
                Go to Page 1
              </button>
              <button 
                onClick={() => setCurrentPage3(50)}
                className="px-3 py-1 bg-blue-600 text-white rounded text-sm"
              >
                Go to Page 50
              </button>
              <button 
                onClick={() => setCurrentPage3(100)}
                className="px-3 py-1 bg-blue-600 text-white rounded text-sm"
              >
                Go to Page 100
              </button>
            </div>
          </div>
        </div>

        {/* Disabled State */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Disabled State</h2>
          <Pagination
            currentPage={5}
            totalPages={10}
            onPageChange={() => {}}
            disabled={true}
          />
        </div>

        {/* Implementation Example */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Usage Example</h2>
          <pre className="showcase-code mt-4">{`import { Pagination } from '@davdevs/paper-basic';
import { useState } from 'react';

function MyPagination() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 20;

  return (
    <Pagination
      currentPage={currentPage}
      totalPages={totalPages}
      onPageChange={setCurrentPage}
      showPageInfo={true}
      siblingCount={2}
      variant="pills"
      size="md"
      labels={{
        pageInfo: (current, total) => 
          \`Showing page \${current} of \${total}\`
      }}
    />
  );
}`}</pre>
        </div>

        {/* Edge Cases */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Edge Cases</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Single Page</h3>
              <Pagination
                currentPage={1}
                totalPages={1}
                onPageChange={() => {}}
              />
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Two Pages</h3>
              <Pagination
                currentPage={1}
                totalPages={2}
                onPageChange={() => {}}
              />
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Three Pages</h3>
              <Pagination
                currentPage={2}
                totalPages={3}
                onPageChange={() => {}}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}