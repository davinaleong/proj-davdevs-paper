import { useState } from 'react';
import { Checkbox } from '@davdevs/paper-basic';

export function CheckboxShowcase() {
  const [checkboxStates, setCheckboxStates] = useState({
    basic: false,
    withLabel: true,
    withDescription: false,
    indeterminate: true,
    terms: false,
    marketing: true,
    notifications: false,
    groupAll: false,
    groupItem1: true,
    groupItem2: false,
    groupItem3: true,
    smallSize: true,
    mediumSize: true,
    largeSize: true,
    primaryColor: true,
    secondaryColor: true,
    successColor: true,
    warningColor: true,
    dangerColor: true,
    indeterminateState: false,
    errorState: false
  });

  const handleGroupAllChange = (checked: boolean) => {
    setCheckboxStates({
      ...checkboxStates,
      groupAll: checked,
      groupItem1: checked,
      groupItem2: checked,
      groupItem3: checked
    });
  };

  const handleGroupItemChange = (item: string, checked: boolean) => {
    const newStates = {
      ...checkboxStates,
      [item]: checked
    };
    
    // Update the "all" checkbox based on individual items
    const allChecked = newStates.groupItem1 && newStates.groupItem2 && newStates.groupItem3;
    newStates.groupAll = allChecked;
    
    setCheckboxStates(newStates);
  };

  // Determine if "Select All" should be indeterminate
  const groupItems = [checkboxStates.groupItem1, checkboxStates.groupItem2, checkboxStates.groupItem3];
  const someChecked = groupItems.some(item => item);
  const allChecked = groupItems.every(item => item);
  const isIndeterminate = someChecked && !allChecked;

  return (
    <div>
      <div className="showcase-section">
        <h1 className="showcase-title">Checkbox Component</h1>
        <p className="text-gray-700 dark:text-gray-300 mb-8">
          Customizable checkbox component with labels, descriptions, and paper-inspired styling.
        </p>
      </div>

      {/* Basic Usage */}
      <section className="showcase-section">
        <h2 className="showcase-subtitle">Basic Usage</h2>
        <div className="showcase-grid grid-cols-1 md:grid-cols-3">
          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Simple Checkbox</h3>
            <div className="mb-4">
              <Checkbox 
                checked={checkboxStates.basic}
                onChange={(e: any) => setCheckboxStates({...checkboxStates, basic: e.target.checked})}
              />
            </div>
            <pre className="showcase-code">
{`<Checkbox 
  checked={checked}
  onChange={handleChange}
/>`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">With Label</h3>
            <div className="mb-4">
              <Checkbox 
                label="Accept terms"
                checked={checkboxStates.withLabel}
                onChange={(e: any) => setCheckboxStates({...checkboxStates, withLabel: e.target.checked})}
              />
            </div>
            <pre className="showcase-code">
{`<Checkbox 
  label="Accept terms"
  checked={checked}
  onChange={handleChange}
/>`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">With Description</h3>
            <div className="mb-4">
              <Checkbox 
                label="Newsletter"
                helperText="Weekly updates"
                checked={checkboxStates.withDescription}
                onChange={(e: any) => setCheckboxStates({...checkboxStates, withDescription: e.target.checked})}
              />
            </div>
            <pre className="showcase-code">
{`<Checkbox 
  label="Newsletter"
  helperText="Weekly updates"
  checked={checked}
  onChange={handleChange}
/>`}
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
            <div className="mb-4">
              <Checkbox 
                size="sm"
                label="Small checkbox"
                checked={checkboxStates.smallSize}
                onChange={(e: any) => setCheckboxStates({...checkboxStates, smallSize: e.target.checked})}
              />
            </div>
            <pre className="showcase-code">
{`<Checkbox 
  size="sm"
  label="Small checkbox"
/>`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Medium (Default)</h3>
            <div className="mb-4">
              <Checkbox 
                size="md"
                label="Medium checkbox"
                checked={checkboxStates.mediumSize}
                onChange={(e: any) => setCheckboxStates({...checkboxStates, mediumSize: e.target.checked})}
              />
            </div>
            <pre className="showcase-code">
{`<Checkbox 
  size="md"
  label="Medium checkbox"
/>`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Large</h3>
            <div className="mb-4">
              <Checkbox 
                size="lg"
                label="Large checkbox"
                checked={checkboxStates.largeSize}
                onChange={(e: any) => setCheckboxStates({...checkboxStates, largeSize: e.target.checked})}
              />
            </div>
            <pre className="showcase-code">
{`<Checkbox 
  size="lg"
  label="Large checkbox"
/>`}
            </pre>
          </div>
        </div>
      </section>

      {/* Colors */}
      <section className="showcase-section">
        <h2 className="showcase-subtitle">Colors</h2>
        <div className="showcase-grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Primary</h3>
            <div className="mb-4">
              <Checkbox 
                color="primary"
                label="Primary color"
                checked={checkboxStates.primaryColor}
                onChange={(e: any) => setCheckboxStates({...checkboxStates, primaryColor: e.target.checked})}
              />
            </div>
            <pre className="showcase-code">
{`<Checkbox color="primary" />`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Secondary</h3>
            <div className="mb-4">
              <Checkbox 
                color="secondary"
                label="Secondary color"
                checked={checkboxStates.secondaryColor}
                onChange={(e: any) => setCheckboxStates({...checkboxStates, secondaryColor: e.target.checked})}
              />
            </div>
            <pre className="showcase-code">
{`<Checkbox color="secondary" />`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Success</h3>
            <div className="mb-4">
              <Checkbox 
                color="success"
                label="Success color"
                checked={checkboxStates.successColor}
                onChange={(e: any) => setCheckboxStates({...checkboxStates, successColor: e.target.checked})}
              />
            </div>
            <pre className="showcase-code">
{`<Checkbox color="success" />`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Warning</h3>
            <div className="mb-4">
              <Checkbox 
                color="warning"
                label="Warning color"
                checked={checkboxStates.warningColor}
                onChange={(e: any) => setCheckboxStates({...checkboxStates, warningColor: e.target.checked})}
              />
            </div>
            <pre className="showcase-code">
{`<Checkbox color="warning" />`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Danger</h3>
            <div className="mb-4">
              <Checkbox 
                color="danger"
                label="Danger color"
                checked={checkboxStates.dangerColor}
                onChange={(e: any) => setCheckboxStates({...checkboxStates, dangerColor: e.target.checked})}
              />
            </div>
            <pre className="showcase-code">
{`<Checkbox color="danger" />`}
            </pre>
          </div>
        </div>
      </section>

      {/* States */}
      <section className="showcase-section">
        <h2 className="showcase-subtitle">States</h2>
        <div className="showcase-grid grid-cols-1 md:grid-cols-3">
          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Indeterminate</h3>
            <div className="mb-4">
              <Checkbox 
                indeterminate={checkboxStates.indeterminateState}
                label="Indeterminate state"
                helperText="Partially selected"
                checked={checkboxStates.indeterminateState}
                onChange={(e: any) => setCheckboxStates({...checkboxStates, indeterminateState: e.target.checked})}
              />
            </div>
            <pre className="showcase-code">
{`<Checkbox 
  indeterminate={true}
  label="Indeterminate state"
/>`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Error State</h3>
            <div className="mb-4">
              <Checkbox 
                error="This field has an error"
                label="Error state"
                checked={checkboxStates.errorState}
                onChange={(e: any) => setCheckboxStates({...checkboxStates, errorState: e.target.checked})}
              />
            </div>
            <pre className="showcase-code">
{`<Checkbox 
  error={true}
  label="Error state"
/>`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Disabled</h3>
            <div className="mb-4 space-y-2">
              <Checkbox 
                disabled={true}
                label="Disabled unchecked"
              />
              <Checkbox 
                disabled={true}
                checked={true}
                label="Disabled checked"
              />
            </div>
            <pre className="showcase-code">
{`<Checkbox 
  disabled={true}
  label="Disabled checkbox"
/>`}
            </pre>
          </div>
        </div>
      </section>

      {/* Practical Examples */}
      <section className="showcase-section">
        <h2 className="showcase-subtitle">Practical Examples</h2>
        
        {/* Form Example */}
        <div className="showcase-item mb-8">
          <h3 className="font-semibold mb-4">Form Settings</h3>
          <div className="space-y-4 p-6 border border-gray-200 rounded-lg bg-gray-50">
            <Checkbox 
              label="I agree to the Terms and Conditions"
              helperText="You must accept our terms to continue"
              checked={checkboxStates.terms}
              onChange={(e: any) => setCheckboxStates({...checkboxStates, terms: e.target.checked})}
              error={!checkboxStates.terms ? "This field is required" : undefined}
            />
            <Checkbox 
              label="Subscribe to marketing emails"
              helperText="Receive updates about new features and promotions"
              checked={checkboxStates.marketing}
              onChange={(e: any) => setCheckboxStates({...checkboxStates, marketing: e.target.checked})}
            />
            <Checkbox 
              label="Enable push notifications"
              helperText="Get notified about important updates"
              checked={checkboxStates.notifications}
              onChange={(e: any) => setCheckboxStates({...checkboxStates, notifications: e.target.checked})}
            />
          </div>
          <pre className="showcase-code mt-4">
{`<Checkbox 
  label="I agree to the Terms and Conditions"
  helperText="You must accept our terms"
  checked={terms}
  onChange={handleTermsChange}
  error={!terms ? "This field is required" : undefined}
/>`}
          </pre>
        </div>

        {/* Group Selection Example */}
        <div className="showcase-item">
          <h3 className="font-semibold mb-4">Group Selection</h3>
          <div className="space-y-2 p-6 border border-gray-200 rounded-lg bg-gray-50">
            <Checkbox 
              label="Select All"
              checked={checkboxStates.groupAll}
              indeterminate={isIndeterminate}
              onChange={(e: any) => handleGroupAllChange(e.target.checked)}
              className="font-medium border-b border-gray-300 pb-2"
            />
            <div className="ml-6 space-y-2">
              <Checkbox 
                label="Option 1"
                checked={checkboxStates.groupItem1}
                onChange={(e: any) => handleGroupItemChange('groupItem1', e.target.checked)}
              />
              <Checkbox 
                label="Option 2"
                checked={checkboxStates.groupItem2}
                onChange={(e: any) => handleGroupItemChange('groupItem2', e.target.checked)}
              />
              <Checkbox 
                label="Option 3"
                checked={checkboxStates.groupItem3}
                onChange={(e: any) => handleGroupItemChange('groupItem3', e.target.checked)}
              />
            </div>
          </div>
          <pre className="showcase-code mt-4">
{`// Parent checkbox
<Checkbox 
  label="Select All"
  checked={allSelected}
  indeterminate={someSelected && !allSelected}
  onChange={handleSelectAll}
/>

// Child checkboxes
<Checkbox 
  label="Option 1"
  checked={option1}
  onChange={handleOption1Change}
/>`}
          </pre>
        </div>
      </section>
    </div>
  );
}