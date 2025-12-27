import React, { useState } from 'react';
import { BoxShowcase } from './components/BoxShowcase';
import { StackShowcase } from './components/StackShowcase';
import { InlineShowcase } from './components/InlineShowcase';
import { DividerShowcase } from './components/DividerShowcase';
import { SurfaceShowcase } from './components/SurfaceShowcase';
import { ContainerShowcase } from './components/ContainerShowcase';
import { HeadingShowcase } from './components/HeadingShowcase';
import { BodyTextShowcase } from './components/BodyTextShowcase';
import { RichContentShowcase } from './components/RichContentShowcase';
import { PageShowcase } from './components/PageShowcase';
import { SectionShowcase } from './components/SectionShowcase';
import { GridShowcase } from './components/GridShowcase';
import { CardShowcase } from './components/CardShowcase';
import { ButtonShowcase } from './components/ButtonShowcase';
import { BadgeShowcase } from './components/BadgeShowcase';
import { TagShowcase } from './components/TagShowcase';
import { AvatarShowcase } from './components/AvatarShowcase';
import { IconShowcase } from './components/IconShowcase';
import { TooltipShowcase } from './components/TooltipShowcase';
import { InputShowcase } from './components/InputShowcase';
import { TextareaShowcase } from './components/TextareaShowcase';
import { SelectShowcase } from './components/SelectShowcase';
import { CheckboxShowcase } from './components/CheckboxShowcase';
import { RadioShowcase } from './components/RadioShowcase';
import { SwitchShowcase } from './components/SwitchShowcase';
import { LabelShowcase } from './components/LabelShowcase';
import { FormFieldShowcase } from './components/FormFieldShowcase';

interface NavItem {
  id: string;
  label: string;
  component: React.ComponentType;
}

interface NavGroup {
  title: string;
  items: NavItem[];
}

const navigationGroups: NavGroup[] = [
  {
    title: 'Foundations',
    items: [
      {
        id: 'box',
        label: 'Box',
        component: BoxShowcase
      },
      {
        id: 'stack',
        label: 'Stack',
        component: StackShowcase
      },
      {
        id: 'inline',
        label: 'Inline',
        component: InlineShowcase
      },
      {
        id: 'divider',
        label: 'Divider',
        component: DividerShowcase
      },
      {
        id: 'surface',
        label: 'Surface',
        component: SurfaceShowcase
      },
      {
        id: 'container',
        label: 'Container',
        component: ContainerShowcase
      },
    ]
  },
  {
    title: 'Layout',
    items: [
      {
        id: 'page',
        label: 'Page',
        component: PageShowcase
      },
      {
        id: 'section',
        label: 'Section',
        component: SectionShowcase
      },
      {
        id: 'grid',
        label: 'Grid',
        component: GridShowcase
      }
    ]
  },
  {
    title: 'Typography',
    items: [
      {
        id: 'headings',
        label: 'Headings',
        component: HeadingShowcase
      },
      {
        id: 'body-text',
        label: 'Body Text',
        component: BodyTextShowcase
      },
      {
        id: 'rich-content',
        label: 'Rich Content',
        component: RichContentShowcase
      },
    ]
  },
  {
    title: 'Core UI Components',
    items: [
      {
        id: 'card',
        label: 'Card',
        component: CardShowcase
      },
      {
        id: 'button',
        label: 'Button',
        component: ButtonShowcase
      },
      {
        id: 'badge',
        label: 'Badge',
        component: BadgeShowcase
      },
      {
        id: 'tag',
        label: 'Tag',
        component: TagShowcase
      },
      {
        id: 'avatar',
        label: 'Avatar',
        component: AvatarShowcase
      },
      {
        id: 'icon',
        label: 'Icon',
        component: IconShowcase
      },
      {
        id: 'tooltip',
        label: 'Tooltip',
        component: TooltipShowcase
      }
    ]
  },
  {
    title: 'Forms',
    items: [
      {
        id: 'input',
        label: 'Input',
        component: InputShowcase
      },
      {
        id: 'textarea',
        label: 'Textarea',
        component: TextareaShowcase
      },
      {
        id: 'select',
        label: 'Select',
        component: SelectShowcase
      },
      {
        id: 'checkbox',
        label: 'Checkbox',
        component: CheckboxShowcase
      },
      {
        id: 'radio',
        label: 'Radio',
        component: RadioShowcase
      },
      {
        id: 'switch',
        label: 'Switch',
        component: SwitchShowcase
      },
      {
        id: 'label',
        label: 'Label',
        component: LabelShowcase
      },
      {
        id: 'form-field',
        label: 'Form Field',
        component: FormFieldShowcase
      }
    ]
  },
];

// Flatten all items for easy lookup
const allNavigationItems = navigationGroups.flatMap(group => group.items);

function App() {
  const [activeComponent, setActiveComponent] = useState<string>('box');

  const ActiveComponent = allNavigationItems.find(item => item.id === activeComponent)?.component || BoxShowcase;

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <nav className="sidebar">
        <div className="mb-8">
          <h1 className="text-xl font-bold text-blue-500 mb-2">Dav/Devs Paper UI</h1>
          <p className="text-sm text-gray-600">Component Library</p>
        </div>
        
        <div className="sidebar-nav">
          {navigationGroups.map((group) => (
            <div key={group.title} className="mb-6">
              <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                {group.title}
              </h2>
              {group.items.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveComponent(item.id)}
                  className={`sidebar-link w-full text-left ${
                    activeComponent === item.id ? 'active' : ''
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          ))}
        </div>
      </nav>

      {/* Main Content */}
      <main className="main-content">
        <ActiveComponent />
      </main>
    </div>
  );
}

export default App;