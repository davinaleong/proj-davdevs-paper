import React, { useState } from 'react';
import { PaperStack, SidebarLayout, Notebook } from '@davdevs/paper-premium';
import type { NotebookPage } from '@davdevs/paper-premium';

export function PaperStackShowcase() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-8">Paper Stack</h1>
      <p className="text-lg text-gray-600 mb-8">
        Premium stacked sheets effect that creates depth with multiple paper layers
      </p>

      <div className="space-y-12">
        <section>
          <h2 className="text-xl font-semibold mb-4">Basic Stack Effects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <PaperStack count={3} offset="sm">
              <h3 className="text-lg font-medium mb-2">Small Offset</h3>
              <p>A subtle stacking effect with minimal offset between layers.</p>
            </PaperStack>

            <PaperStack count={3} offset="md">
              <h3 className="text-lg font-medium mb-2">Medium Offset</h3>
              <p>The default stacking with balanced visual depth.</p>
            </PaperStack>

            <PaperStack count={4} offset="lg">
              <h3 className="text-lg font-medium mb-2">Large Offset</h3>
              <p>More dramatic stacking for emphasis and visual impact.</p>
            </PaperStack>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Shadow Variations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <PaperStack shadow="none">
              <h4 className="font-medium mb-2">No Shadow</h4>
              <p>Clean, flat appearance.</p>
            </PaperStack>

            <PaperStack shadow="soft">
              <h4 className="font-medium mb-2">Soft Shadow</h4>
              <p>Gentle elevation effect.</p>
            </PaperStack>

            <PaperStack shadow="medium">
              <h4 className="font-medium mb-2">Medium Shadow</h4>
              <p>Balanced depth and realism.</p>
            </PaperStack>

            <PaperStack shadow="hard">
              <h4 className="font-medium mb-2">Hard Shadow</h4>
              <p>Strong, dramatic shadows.</p>
            </PaperStack>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Paper Textures</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <PaperStack texture="grain">
              <h4 className="font-medium mb-2">Grain Texture</h4>
              <p>Natural paper grain pattern for authentic feel.</p>
            </PaperStack>

            <PaperStack texture="linen">
              <h4 className="font-medium mb-2">Linen Texture</h4>
              <p>Woven fabric pattern for premium documents.</p>
            </PaperStack>

            <PaperStack texture="fiber">
              <h4 className="font-medium mb-2">Fiber Texture</h4>
              <p>Paper fiber weave for textured surfaces.</p>
            </PaperStack>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Interactive Effects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <PaperStack interactive rotation={false}>
              <h4 className="font-medium mb-2">Hover Effects</h4>
              <p>Stack lifts on hover with smooth animation transitions.</p>
              <p className="text-sm text-gray-600 mt-2">Try hovering over this card!</p>
            </PaperStack>

            <PaperStack interactive rotation count={5}>
              <h4 className="font-medium mb-2">Rotated + Interactive</h4>
              <p>Combines rotation with hover effects for dynamic interaction.</p>
              <p className="text-sm text-gray-600 mt-2">Layers rotate and lift on hover!</p>
            </PaperStack>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Use Cases</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <PaperStack count={4} texture="grain" interactive>
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900">Document Collection</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Resume.pdf</span>
                    <span className="text-sm text-gray-500">2.1 MB</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Cover Letter.pdf</span>
                    <span className="text-sm text-gray-500">1.8 MB</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Portfolio.pdf</span>
                    <span className="text-sm text-gray-500">5.4 MB</span>
                  </div>
                </div>
                <button className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors">
                  Download All
                </button>
              </div>
            </PaperStack>

            <PaperStack count={3} texture="linen" shadow="hard" offset="lg">
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900">Design Iterations</h4>
                <p className="text-gray-600">Track multiple versions of your designs with visual depth.</p>
                <div className="flex space-x-2">
                  <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">v3.2 Current</span>
                  <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">v3.1</span>
                  <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">v3.0</span>
                </div>
              </div>
            </PaperStack>
          </div>
        </section>
      </div>
    </div>
  );
}