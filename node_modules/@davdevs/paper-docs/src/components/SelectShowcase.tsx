import React, { useState } from 'react';

// Mock Select component for demonstration
const Select = ({ 
  className = '',
  variant = 'default',
  size = 'md',
  state = 'default',
  placeholder = 'Select an option...',
  options = [],
  value,
  onChange,
  startIcon,
  endIcon,
  helperText,
  error,
  disabled,
  fullWidth = false,
  elevation = 'none',
  allowSearch = false,
  ...domProps 
}: any) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const variants = {
    default: 'bg-white border-gray-300',
    filled: 'bg-gray-50 border-gray-200',
    outlined: 'bg-transparent border-2 border-gray-300'
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-3 py-2 text-base',
    lg: 'px-4 py-3 text-lg'
  };

  const states = {
    default: 'focus:border-blue-500 focus:ring-blue-500',
    error: 'border-red-300 focus:border-red-500 focus:ring-red-500',
    success: 'border-green-300 focus:border-green-500 focus:ring-green-500',
    warning: 'border-yellow-300 focus:border-yellow-500 focus:ring-yellow-500'
  };

  const elevations = {
    none: '',
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg'
  };

  const finalState = error ? 'error' : state;
  const selectedOption = options.find((opt: any) => opt.value === value);
  const displayValue = selectedOption ? selectedOption.label : placeholder;

  const ChevronIcon = () => (
    <svg className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  );

  return (
    <div className={`relative ${fullWidth ? 'w-full' : ''} ${elevations[elevation]} ${className}`}>
      <div className="relative">
        {startIcon && (
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none z-10">
            {startIcon}
          </div>
        )}
        
        <button
          type="button"
          className={`w-full text-left border rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-0 disabled:bg-gray-50 disabled:text-gray-500 disabled:cursor-not-allowed transition-colors duration-200 ${variants[variant]} ${sizes[size]} ${states[finalState]} ${startIcon ? 'pl-10' : ''} pr-10 ${!selectedOption ? 'text-gray-500' : ''}`}
          onClick={() => !disabled && setIsOpen(!isOpen)}
          disabled={disabled}
          {...domProps}
        >
          {displayValue}
        </button>
        
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none">
          {endIcon || <ChevronIcon />}
        </div>
      </div>
      
      {/* Dropdown */}
      {isOpen && !disabled && (
        <div className="absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg">
          <div className="max-h-60 overflow-y-auto">
            {options.map((option: any, index: number) => (
              <button
                key={option.value || index}
                type="button"
                className={`w-full text-left px-3 py-2 hover:bg-gray-50 focus:bg-gray-50 focus:outline-none transition-colors ${option.value === value ? 'bg-blue-50 text-blue-700' : ''} ${index === 0 ? 'rounded-t-lg' : ''} ${index === options.length - 1 ? 'rounded-b-lg' : ''}`}
                onClick={() => {
                  onChange?.(option.value);
                  setIsOpen(false);
                }}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      )}
      
      {(error || helperText) && (
        <div className={`mt-1 text-sm ${error ? 'text-red-600' : 'text-gray-600'}`}>
          {error || helperText}
        </div>
      )}
    </div>
  );
};

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

// Icons for demonstration
const LocationIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const FlagIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 2H21l-3 6 3 6h-8.5l-1-2H5a2 2 0 00-2 2zm9-13.5V9" />
  </svg>
);

export function SelectShowcase() {
  const [selectValues, setSelectValues] = useState({
    country: '',
    priority: 'medium',
    team: '',
    size: ''
  });

  return (
    <div>
      <div className="showcase-section">
        <h1 className="showcase-title">Select Component</h1>
        <p className="text-gray-600 mb-8">
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
              onChange={(value: string) => setSelectValues({...selectValues, country: value})}
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
              onChange={(value: string) => setSelectValues({...selectValues, priority: value})}
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
            <h3 className="font-semibold mb-2">Custom End Icon</h3>
            <Select 
              endIcon={<FlagIcon />}
              placeholder="Choose priority"
              options={priorityOptions}
              className="mb-4"
            />
            <pre className="showcase-code">
{`<Select 
  endIcon={<FlagIcon />}
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