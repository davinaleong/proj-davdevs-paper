import React, { useState } from 'react';
import { ThemeProvider } from '../context/ThemeContext';
import { BoxShowcase } from './BoxShowcase';
import { StackShowcase } from './StackShowcase';
import { InlineShowcase } from './InlineShowcase';
import { DividerShowcase } from './DividerShowcase';
import { SurfaceShowcase } from './SurfaceShowcase';
import { ContainerShowcase } from './ContainerShowcase';
import { HeadingShowcase } from './HeadingShowcase';
import { BodyTextShowcase } from './BodyTextShowcase';
import { RichContentShowcase } from './RichContentShowcase';
import { ProseShowcase } from './ProseShowcase';
import { PageShowcase } from './PageShowcase';
import { SectionShowcase } from './SectionShowcase';
import { GridShowcase } from './GridShowcase';
import { CardShowcase } from './CardShowcase';
import { ButtonShowcase } from './ButtonShowcase';
import { BadgeShowcase } from './BadgeShowcase';
import { TagShowcase } from './TagShowcase';
import { AvatarShowcase } from './AvatarShowcase';
import { IconShowcase } from './IconShowcase';
import { TooltipShowcase } from './TooltipShowcase';
import { InputShowcase } from './InputShowcase';
import { TextareaShowcase } from './TextareaShowcase';
import { SelectShowcase } from './SelectShowcase';
import { CheckboxShowcase } from './CheckboxShowcase';
import { RadioShowcase } from './RadioShowcase';
import { SwitchShowcase } from './SwitchShowcase';
import { LabelShowcase } from './LabelShowcase';
import { FormFieldShowcase } from './FormFieldShowcase';
import { AlertShowcase } from './AlertShowcase';
import { ToastShowcase } from './ToastShowcase';
import { ModalShowcase } from './ModalShowcase';
import { DrawerShowcase } from './DrawerShowcase';
import { SkeletonShowcase } from './SkeletonShowcase';
import { ProgressShowcase } from './ProgressShowcase';
import { BreadcrumbShowcase } from './BreadcrumbShowcase';
import { TabsShowcase } from './TabsShowcase';
import { PaginationShowcase } from './PaginationShowcase';
import { NavbarShowcase } from './NavbarShowcase';
import { FooterShowcase } from './FooterShowcase';
import { PaperStackShowcase } from './PaperStackShowcase';
import { SidebarLayoutShowcase } from './SidebarLayoutShowcase';
import { NotebookComponentShowcase } from './NotebookComponentShowcase';

interface ComponentItem {
  id: string;
  label: string;
  component: React.ComponentType;
  tier: 'basic' | 'premium';
}

// All available components organized by category
const componentGroups = [
  {
    title: 'Layout',
    items: [
      { id: 'box', label: 'Box', component: BoxShowcase, tier: 'basic' as const },
      { id: 'stack', label: 'Stack', component: StackShowcase, tier: 'basic' as const },
      { id: 'inline', label: 'Inline', component: InlineShowcase, tier: 'basic' as const },
      { id: 'divider', label: 'Divider', component: DividerShowcase, tier: 'basic' as const },
      { id: 'surface', label: 'Surface', component: SurfaceShowcase, tier: 'basic' as const },
      { id: 'container', label: 'Container', component: ContainerShowcase, tier: 'basic' as const },
      { id: 'grid', label: 'Grid', component: GridShowcase, tier: 'basic' as const },
      { id: 'page', label: 'Page', component: PageShowcase, tier: 'basic' as const },
      { id: 'section', label: 'Section', component: SectionShowcase, tier: 'basic' as const },
    ]
  },
  {
    title: 'Typography',
    items: [
      { id: 'heading', label: 'Heading', component: HeadingShowcase, tier: 'basic' as const },
      { id: 'body-text', label: 'Body Text', component: BodyTextShowcase, tier: 'basic' as const },
      { id: 'rich-content', label: 'Rich Content', component: RichContentShowcase, tier: 'basic' as const },
      { id: 'prose', label: 'Prose', component: ProseShowcase, tier: 'basic' as const },
    ]
  },
  {
    title: 'Components',
    items: [
      { id: 'card', label: 'Card', component: CardShowcase, tier: 'basic' as const },
      { id: 'button', label: 'Button', component: ButtonShowcase, tier: 'basic' as const },
      { id: 'badge', label: 'Badge', component: BadgeShowcase, tier: 'basic' as const },
      { id: 'tag', label: 'Tag', component: TagShowcase, tier: 'basic' as const },
      { id: 'avatar', label: 'Avatar', component: AvatarShowcase, tier: 'basic' as const },
      { id: 'icon', label: 'Icon', component: IconShowcase, tier: 'basic' as const },
      { id: 'tooltip', label: 'Tooltip', component: TooltipShowcase, tier: 'premium' as const },
    ]
  },
  {
    title: 'Forms',
    items: [
      { id: 'input', label: 'Input', component: InputShowcase, tier: 'basic' as const },
      { id: 'textarea', label: 'Textarea', component: TextareaShowcase, tier: 'basic' as const },
      { id: 'select', label: 'Select', component: SelectShowcase, tier: 'basic' as const },
      { id: 'checkbox', label: 'Checkbox', component: CheckboxShowcase, tier: 'basic' as const },
      { id: 'radio', label: 'Radio', component: RadioShowcase, tier: 'basic' as const },
      { id: 'switch', label: 'Switch', component: SwitchShowcase, tier: 'premium' as const },
      { id: 'label', label: 'Label', component: LabelShowcase, tier: 'basic' as const },
      { id: 'form-field', label: 'Form Field', component: FormFieldShowcase, tier: 'basic' as const },
    ]
  },
  {
    title: 'Feedback',
    items: [
      { id: 'alert', label: 'Alert', component: AlertShowcase, tier: 'basic' as const },
      { id: 'toast', label: 'Toast', component: ToastShowcase, tier: 'premium' as const },
      { id: 'modal', label: 'Modal', component: ModalShowcase, tier: 'premium' as const },
      { id: 'drawer', label: 'Drawer', component: DrawerShowcase, tier: 'premium' as const },
      { id: 'skeleton', label: 'Skeleton', component: SkeletonShowcase, tier: 'basic' as const },
      { id: 'progress', label: 'Progress', component: ProgressShowcase, tier: 'basic' as const },
    ]
  },
  {
    title: 'Navigation',
    items: [
      { id: 'breadcrumb', label: 'Breadcrumb', component: BreadcrumbShowcase, tier: 'basic' as const },
      { id: 'tabs', label: 'Tabs', component: TabsShowcase, tier: 'basic' as const },
      { id: 'pagination', label: 'Pagination', component: PaginationShowcase, tier: 'basic' as const },
      { id: 'navbar', label: 'Navbar', component: NavbarShowcase, tier: 'premium' as const },
      { id: 'footer', label: 'Footer', component: FooterShowcase, tier: 'premium' as const },
    ]
  },
  {
    title: 'Specialized',
    items: [
      { id: 'paper-stack', label: 'Paper Stack', component: PaperStackShowcase, tier: 'premium' as const },
      { id: 'sidebar-layout', label: 'Sidebar Layout', component: SidebarLayoutShowcase, tier: 'premium' as const },
      { id: 'notebook', label: 'Notebook', component: NotebookComponentShowcase, tier: 'premium' as const },
    ]
  }
];

// Flatten all items for easy access
const allComponents = componentGroups.flatMap(group => group.items);

export function ScreenshotGenerator() {
  const [selectedComponent, setSelectedComponent] = useState<string>('button');
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [filterTier, setFilterTier] = useState<'all' | 'basic' | 'premium'>('all');
  const [isGenerating, setIsGenerating] = useState<boolean>(false);

  const ActiveComponent = allComponents.find(item => item.id === selectedComponent)?.component || ButtonShowcase;
  
  const filteredComponents = allComponents.filter(component => 
    filterTier === 'all' || component.tier === filterTier
  );

  // Screenshot generation function
  const generateScreenshot = async () => {
    const screenshotArea = document.getElementById('screenshot-area');
    if (!screenshotArea) return;

    setIsGenerating(true);
    
    try {
      // Dynamic import of html2canvas
      const html2canvas = await import('html2canvas').then(module => module.default);
      
      const canvas = await html2canvas(screenshotArea, {
        width: 1080,
        height: 1080,
        scale: 2, // Higher resolution
        useCORS: true,
        allowTaint: false,
        backgroundColor: isDarkMode ? '#111827' : '#ffffff'
      });

      // Create download link
      const link = document.createElement('a');
      const currentComponent = allComponents.find(item => item.id === selectedComponent);
      const filename = `davdevs-paper-${currentComponent?.label?.toLowerCase().replace(/\s+/g, '-')}-${isDarkMode ? 'dark' : 'light'}.png`;
      
      link.download = filename;
      link.href = canvas.toDataURL('image/png');
      
      // Trigger download
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
    } catch (error) {
      console.error('Failed to generate screenshot:', error);
      // Fallback: open print dialog
      window.print();
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header Controls */}
      <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            📸 Social Media Screenshot Generator
          </h1>
          
          <div className="flex flex-wrap gap-4 items-center">
            {/* Component Selector */}
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Component
              </label>
              <select
                value={selectedComponent}
                onChange={(e) => setSelectedComponent(e.target.value)}
                className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                {componentGroups.map((group) => (
                  <optgroup key={group.title} label={group.title}>
                    {group.items
                      .filter(item => filterTier === 'all' || item.tier === filterTier)
                      .map((item) => (
                        <option key={item.id} value={item.id}>
                          {item.label} {item.tier === 'premium' ? '✨' : ''}
                        </option>
                      ))
                    }
                  </optgroup>
                ))}
              </select>
            </div>

            {/* Tier Filter */}
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Tier
              </label>
              <select
                value={filterTier}
                onChange={(e) => setFilterTier(e.target.value as 'all' | 'basic' | 'premium')}
                className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="all">All Components</option>
                <option value="basic">Basic Tier</option>
                <option value="premium">Premium Tier ✨</option>
              </select>
            </div>

            {/* Dark Mode Toggle */}
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Theme
              </label>
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className={`px-4 py-2 rounded-md font-medium transition-colors ${
                  isDarkMode
                    ? 'bg-gray-800 text-white border border-gray-600'
                    : 'bg-white text-gray-900 border border-gray-300'
                } hover:bg-opacity-80`}
              >
                {isDarkMode ? '🌙 Dark' : '☀️ Light'}
              </button>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Actions
              </label>
              <div className="flex gap-2">
                <button
                  onClick={() => {
                    const screenshot = document.getElementById('screenshot-area');
                    if (screenshot) {
                      screenshot.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm"
                >
                  📸 Focus
                </button>
                <button
                  onClick={generateScreenshot}
                  disabled={isGenerating}
                  className="px-3 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors text-sm"
                >
                  {isGenerating ? '⏳ Generating...' : '💾 Download'}
                </button>
              </div>
            </div>
          </div>

          {/* Component Info */}
          <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
            <div className="text-sm text-blue-800 dark:text-blue-200">
              <strong>Current:</strong> {allComponents.find(item => item.id === selectedComponent)?.label}{' '}
              {allComponents.find(item => item.id === selectedComponent)?.tier === 'premium' ? '✨' : ''} 
              <span className="mx-2">•</span>
              <strong>Theme:</strong> {isDarkMode ? 'Dark' : 'Light'}
              <span className="mx-2">•</span>
              <strong>Size:</strong> 1080×1080px (Square)
            </div>
          </div>
        </div>
      </div>

      {/* Screenshot Area */}
      <div className="flex justify-center p-8">
        <div className="relative">
          {/* Screenshot Container with Padding */}
          <div
            id="screenshot-area"
            className={`relative w-[1080px] h-[1080px] ${isDarkMode ? 'dark' : ''} p-8`}
            style={{
              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
              border: '2px solid #e5e7eb',
              borderRadius: '12px',
              overflow: 'hidden',
              backgroundColor: isDarkMode ? '#111827' : '#ffffff'
            }}
          >
            <ThemeProvider>
              <div className={`w-full h-full ${isDarkMode ? 'dark' : ''} bg-white dark:bg-gray-900 rounded-lg`}>
                <div className="w-full h-full overflow-auto p-6">
                  <ActiveComponent />
                </div>
              </div>
            </ThemeProvider>
            
            {/* Corner Badge for Tier */}
            <div className="absolute top-4 right-4 z-50">
              <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                allComponents.find(item => item.id === selectedComponent)?.tier === 'premium'
                  ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                  : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
              }`}>
                {allComponents.find(item => item.id === selectedComponent)?.tier === 'premium' ? '✨ Premium' : '🔧 Basic'}
              </span>
            </div>

            {/* Watermark */}
            <div className="absolute bottom-4 left-4 z-50 opacity-70">
              <div className="bg-black bg-opacity-20 dark:bg-white dark:bg-opacity-20 text-white dark:text-gray-900 px-3 py-2 rounded-lg text-sm font-medium backdrop-blur-sm">
                Dav/Devs Paper UI
              </div>
            </div>
          </div>
          
          {/* Screenshot Dimension Guide */}
          <div className="absolute -bottom-8 left-0 right-0 text-center">
            <div className="inline-flex items-center px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full text-sm">
              📐 1080 × 1080px
            </div>
          </div>
        </div>
      </div>

      {/* Instructions */}
      <div className="max-w-4xl mx-auto px-4 pb-8">
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            📋 How to Use
          </h2>
          <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-600 dark:text-gray-400">
            <div>
              <h3 className="font-medium text-gray-900 dark:text-white mb-2">Taking Screenshots:</h3>
              <ul className="space-y-1 list-disc list-inside">
                <li>Select component and theme from controls above</li>
                <li>Click "💾 Download" for automatic screenshot download</li>
                <li>Or use browser tools to manually capture the square area</li>
                <li>Perfect 1080×1080px dimensions with padding</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-gray-900 dark:text-white mb-2">Quick Tips:</h3>
              <ul className="space-y-1 list-disc list-inside">
                <li>Auto-download includes branding and tier badges</li>
                <li>High-resolution 2x scale for crisp images</li>
                <li>Filename includes component and theme info</li>
                <li>Fallback to print dialog if download fails</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}