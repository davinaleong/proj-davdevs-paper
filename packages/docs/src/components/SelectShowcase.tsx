import { useState } from 'react';
import { Select } from '@davdevs/paper-basic';

// Sample options for demonstrations
const countryOptions = [
  { value: 'us', label: 'United States' },
  { value: 'uk', label: 'United Kingdom' },
  { value: 'ca', label: 'Canada' },
  { value: 'au', label: 'Australia' },
  { value: 'de', label: 'Germany' },
  { value: 'fr', label: 'France' },
  { value: 'jp', label: 'Japan' },
];

const priorityOptions = [
  { value: 'low', label: 'Low Priority' },
  { value: 'medium', label: 'Medium Priority' },
  { value: 'high', label: 'High Priority' },
  { value: 'urgent', label: 'Urgent' },
];

const teamOptions = [
  { value: 'design', label: 'Design Team' },
  { value: 'engineering', label: 'Engineering Team' },
  { value: 'marketing', label: 'Marketing Team' },
  { value: 'sales', label: 'Sales Team' },
];

// Grouped options for optgroup demonstrations
const foodOptgroups = [
  {
    label: 'Fruits',
    options: [
      { value: 'apple', label: 'Apple' },
      { value: 'banana', label: 'Banana' },
      { value: 'orange', label: 'Orange' },
      { value: 'grape', label: 'Grape' }
    ]
  },
  {
    label: 'Vegetables',
    options: [
      { value: 'carrot', label: 'Carrot' },
      { value: 'lettuce', label: 'Lettuce' },
      { value: 'tomato', label: 'Tomato' },
      { value: 'broccoli', label: 'Broccoli' }
    ]
  },
  {
    label: 'Grains',
    options: [
      { value: 'rice', label: 'Rice' },
      { value: 'wheat', label: 'Wheat' },
      { value: 'oats', label: 'Oats' }
    ]
  }
];

const regionOptgroups = [
  {
    label: 'North America',
    options: [
      { value: 'us', label: 'United States' },
      { value: 'ca', label: 'Canada' },
      { value: 'mx', label: 'Mexico' }
    ]
  },
  {
    label: 'Europe',
    options: [
      { value: 'uk', label: 'United Kingdom' },
      { value: 'de', label: 'Germany' },
      { value: 'fr', label: 'France' },
      { value: 'it', label: 'Italy' }
    ]
  },
  {
    label: 'Asia Pacific',
    options: [
      { value: 'jp', label: 'Japan' },
      { value: 'au', label: 'Australia' },
      { value: 'sg', label: 'Singapore' }
    ]
  }
];

// Icons for demonstration
const LocationIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

export function SelectShowcase() {
  const [selectValues, setSelectValues] = useState({
    country: '',
    priority: 'medium',
    team: '',
    size: '',
    food: '',
    region: ''
  });

  return (
    <div>
      <div className="showcase-section">
        <h1 className="showcase-title">Select Component</h1>
        <p className="text-gray-700 dark:text-gray-300 mb-8">
          Dropdown selection component with customizable options, icons, and paper-inspired styling.
        </p>
      </div>

      {/* Basic Usage */}
      <section className="showcase-section">
        <h2 className="showcase-subtitle">Basic Usage</h2>
        <div className="showcase-grid grid-cols-1 md:grid-cols-2">
          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Simple Select</h3>
            <Select 
              placeholder="Choose a country"
              options={countryOptions}
              value={selectValues.country}
              onChange={(e) => setSelectValues({...selectValues, country: e.target.value})}
              className="mb-4" 
            />
            <pre className="showcase-code">
{`<Select 
  placeholder="Choose a country"
  options={countryOptions}
  value={value}
  onChange={setValue}
/>`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">With Helper Text</h3>
            <Select 
              placeholder="Select priority"
              options={priorityOptions}
              value={selectValues.priority}
              onChange={(e) => setSelectValues({...selectValues, priority: e.target.value})}
              helperText="Choose the task priority level"
              className="mb-4"
            />
            <pre className="showcase-code">
{`<Select 
  placeholder="Select priority"
  options={priorityOptions}
  helperText="Choose priority level"
/>`}
            </pre>
          </div>
        </div>
      </section>

      {/* Option Groups */}
      <section className="showcase-section">
        <h2 className="showcase-subtitle">Option Groups (Optgroups)</h2>
        <div className="showcase-grid grid-cols-1 md:grid-cols-2">
          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Food Categories</h3>
            <Select 
              placeholder="Choose food type"
              optgroups={foodOptgroups}
              value={selectValues.food}
              onChange={(e) => setSelectValues({...selectValues, food: e.target.value})}
              className="mb-4" 
            />
            <pre className="showcase-code">
{`<Select 
  placeholder="Choose food type"
  optgroups={[
    {
      label: 'Fruits',
      options: [
        { value: 'apple', label: 'Apple' },
        { value: 'banana', label: 'Banana' }
      ]
    },
    {
      label: 'Vegetables',
      options: [
        { value: 'carrot', label: 'Carrot' },
        { value: 'lettuce', label: 'Lettuce' }
      ]
    }
  ]}
/>`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Regional Groups</h3>
            <Select 
              placeholder="Choose region"
              optgroups={regionOptgroups}
              value={selectValues.region}
              onChange={(e) => setSelectValues({...selectValues, region: e.target.value})}
              className="mb-4"
            />
            <pre className="showcase-code">
{`<Select 
  placeholder="Choose region"
  optgroups={[
    {
      label: 'North America',
      options: [
        { value: 'us', label: 'United States' },
        { value: 'ca', label: 'Canada' }
      ]
    },
    {
      label: 'Europe',
      options: [
        { value: 'uk', label: 'United Kingdom' },
        { value: 'de', label: 'Germany' }
      ]
    }
  ]}
/>`}
            </pre>
          </div>
        </div>
      </section>

      {/* Variants */}
      <section className="showcase-section">
        <h2 className="showcase-subtitle">Variants</h2>
        <div className="showcase-grid grid-cols-1 md:grid-cols-3">
          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Default</h3>
            <Select 
              variant="default"
              placeholder="Default variant" 
              options={teamOptions}
              className="mb-4" 
            />
            <pre className="showcase-code">
{`<Select variant="default" />`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Filled</h3>
            <Select 
              variant="filled"
              placeholder="Filled variant" 
              options={teamOptions}
              className="mb-4" 
            />
            <pre className="showcase-code">
{`<Select variant="filled" />`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Outlined</h3>
            <Select 
              variant="outlined"
              placeholder="Outlined variant" 
              options={teamOptions}
              className="mb-4" 
            />
            <pre className="showcase-code">
{`<Select variant="outlined" />`}
            </pre>
          </div>
        </div>
      </section>

      {/* Sizes */}
      <section className="showcase-section">
        <h2 className="showcase-subtitle">Sizes</h2>
        <div className="showcase-grid grid-cols-1 md:grid-cols-3">
          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Small</h3>
            <Select 
              size="sm" 
              placeholder="Small select"
              options={priorityOptions}
              className="mb-4" 
            />
            <pre className="showcase-code">
{`<Select size="sm" />`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Medium (Default)</h3>
            <Select 
              size="md" 
              placeholder="Medium select"
              options={priorityOptions}
              className="mb-4" 
            />
            <pre className="showcase-code">
{`<Select size="md" />`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Large</h3>
            <Select 
              size="lg" 
              placeholder="Large select"
              options={priorityOptions}
              className="mb-4" 
            />
            <pre className="showcase-code">
{`<Select size="lg" />`}
            </pre>
          </div>
        </div>
      </section>

      {/* With Icons */}
      <section className="showcase-section">
        <h2 className="showcase-subtitle">With Icons</h2>
        <div className="showcase-grid grid-cols-1 md:grid-cols-2">
          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Start Icon</h3>
            <Select 
              startIcon={<LocationIcon />}
              placeholder="Select location"
              options={countryOptions}
              className="mb-4"
            />
            <pre className="showcase-code">
{`<Select 
  startIcon={<LocationIcon />}
  placeholder="Select location"
  options={countryOptions}
/>`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Custom Icon (Placeholder)</h3>
            <Select 
              placeholder="Choose priority"
              options={priorityOptions}
              className="mb-4"
            />
            <pre className="showcase-code">
{`<Select 
  placeholder="Choose priority"
  placeholder="Choose priority"
  options={priorityOptions}
/>`}
            </pre>
          </div>
        </div>
      </section>

      {/* States */}
      <section className="showcase-section">
        <h2 className="showcase-subtitle">States</h2>
        <div className="showcase-grid grid-cols-1 md:grid-cols-2">
          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Success State</h3>
            <Select 
              state="success"
              placeholder="Success select"
              options={teamOptions}
              helperText="Good choice!"
              className="mb-4"
            />
            <pre className="showcase-code">
{`<Select 
  state="success"
  helperText="Good choice!"
/>`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Error State</h3>
            <Select 
              error="Please select an option"
              placeholder="Error select"
              options={teamOptions}
              className="mb-4"
            />
            <pre className="showcase-code">
{`<Select 
  error="Please select an option"
  placeholder="Error select"
/>`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Warning State</h3>
            <Select 
              state="warning"
              placeholder="Warning select"
              options={teamOptions}
              helperText="Please review your selection"
              className="mb-4"
            />
            <pre className="showcase-code">
{`<Select 
  state="warning"
  helperText="Please review"
/>`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Disabled State</h3>
            <Select 
              disabled
              placeholder="Disabled select"
              options={teamOptions}
              className="mb-4"
            />
            <pre className="showcase-code">
{`<Select disabled />`}
            </pre>
          </div>
        </div>
      </section>

      {/* Full Width */}
      <section className="showcase-section">
        <h2 className="showcase-subtitle">Full Width</h2>
        <div className="showcase-item">
          <h3 className="font-semibold mb-2">Full Width Select</h3>
          <Select 
            fullWidth
            placeholder="This select takes the full width of its container"
            options={countryOptions}
            helperText="Useful for form layouts"
            className="mb-4"
          />
          <pre className="showcase-code">
{`<Select 
  fullWidth
  placeholder="Full width select"
  options={options}
/>`}
          </pre>
        </div>
      </section>
    </div>
  );
}