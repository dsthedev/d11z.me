import { MetaTags } from '@redwoodjs/web'
import PriceSheet from 'src/components/PriceSheet/PriceSheet'

const SandboxPage = () => {
  const jsonprices = [
    {
      value: 150,
      currency: 'USD',
      type: 'Install',
      material: 'All Lock',
      modifiers: '',
      unit: 'Square Feet',
      description: '',
    },
    {
      value: 800,
      currency: 'USD',
      type: 'Install',
      material: 'Carpet',
      modifiers: '',
      unit: 'Square Yard',
      description: '',
    },
    {
      value: 900,
      currency: 'USD',
      type: 'Install',
      material: 'Carpet',
      modifiers: 'Pattern',
      unit: 'Square Yard',
      description: '',
    },
    {
      value: 950,
      currency: 'USD',
      type: 'Install',
      material: 'Carpet',
      modifiers: 'Softback, Pattern',
      unit: 'Square Yard',
      description: '',
    },
    {
      value: 850,
      currency: 'USD',
      type: 'Install',
      material: 'Carpet',
      modifiers: 'Softback',
      unit: 'Square Yard',
      description: '',
    },
    {
      value: 10000,
      currency: 'USD',
      type: 'Install',
      material: 'Carpet',
      modifiers: 'Stairs',
      unit: 'Flight',
      description: '',
    },
    {
      value: 650,
      currency: 'USD',
      type: 'Install',
      material: 'Carpet',
      modifiers: 'Tiles',
      unit: 'Square Yard',
      description: '',
    },
    {
      value: 1400,
      currency: 'USD',
      type: 'Install',
      material: 'Ceramic',
      modifiers: 'Backsplash',
      unit: 'Square Feet',
      description: '',
    },
    {
      value: 150,
      currency: 'USD',
      type: 'Install',
      material: 'LVT/P',
      modifiers: '',
      unit: 'Square Feet',
      description: '',
    },
    {
      value: 2000,
      currency: 'USD',
      type: 'Reset',
      material: 'Appliance',
      modifiers: '',
      unit: 'Item',
      description: '',
    },
    {
      value: 10000,
      currency: 'USD',
      type: 'Consult',
      material: 'Service Call',
      modifiers: '',
      unit: 'Trip',
      description: '',
    },
    {
      value: 5000,
      currency: 'USD',
      type: 'Prepare',
      material: 'Subfloor',
      modifiers: 'Feather Finish',
      unit: 'Item',
      description: '',
    },
    {
      value: 150,
      currency: 'USD',
      type: 'Remove',
      material: 'Carpet',
      modifiers: '',
      unit: 'Square Yard',
      description: '',
    },
    {
      value: 250,
      currency: 'USD',
      type: 'Remove',
      material: 'Vinyl',
      modifiers: '',
      unit: 'Square Yard',
      description: '',
    },
    {
      value: 300,
      currency: 'USD',
      type: 'Remove',
      material: 'Tile',
      modifiers: '',
      unit: 'Square Feet',
      description: '',
    },
    {
      value: 1000,
      currency: 'USD',
      type: 'Install',
      material: 'Transition',
      modifiers: '',
      unit: 'Item',
      description: '',
    },
    {
      value: 5000,
      currency: 'USD',
      type: 'Drive',
      material: 'Time',
      modifiers: '',
      unit: 'Trip',
      description: 'Any location further than 35 mile radius from store.',
    },
    {
      value: 2000,
      currency: 'USD',
      type: 'Install',
      material: 'Underlayment',
      modifiers: '',
      unit: 'Sheet',
      description: '',
    },
    {
      value: 3000,
      currency: 'USD',
      type: 'Install',
      material: 'Underlayment',
      modifiers: '3/8',
      unit: 'Sheet',
      description: '',
    },
    {
      value: 100,
      currency: 'USD',
      type: 'Install',
      material: 'Cove Base',
      modifiers: '',
      unit: 'Linear Feet',
      description: '',
    },
    {
      value: 100,
      currency: 'USD',
      type: 'Remove',
      material: 'Cove Base',
      modifiers: '',
      unit: 'Linear Feet',
      description: '',
    },
    {
      value: 1000,
      currency: 'USD',
      type: 'Install',
      material: 'Vinyl',
      modifiers: 'Sheet Goods',
      unit: 'Square Yard',
      description: '',
    },
    {
      value: 300,
      currency: 'USD',
      type: 'Install',
      material: 'Trim Base',
      modifiers: '',
      unit: 'Linear Feet',
      description: '',
    },
    {
      value: 100,
      currency: 'USD',
      type: 'Remove',
      material: 'Trim Base',
      modifiers: '',
      unit: 'Linear Feet',
      description: '',
    },
    {
      value: 100,
      currency: 'USD',
      type: 'Install',
      material: 'Shoe Base',
      modifiers: '',
      unit: 'Linear Feet',
      description: '',
    },
    {
      value: 100,
      currency: 'USD',
      type: 'Remove',
      material: 'Shoe Base',
      modifiers: '',
      unit: 'Linear Feet',
      description: '',
    },
    {
      value: 1000,
      currency: 'USD',
      type: 'Install',
      material: 'Corner Trim',
      modifiers: '',
      unit: 'Item',
      description: '',
    },
    {
      value: 200,
      currency: 'USD',
      type: 'Reset',
      material: 'Trim Base',
      modifiers: '',
      unit: 'Linear Feet',
      description: '',
    },
    {
      value: 15000,
      currency: 'USD',
      type: 'Restretch',
      material: 'Carpet',
      modifiers: '',
      unit: 'Area',
      description: '',
    },
    {
      value: 5000,
      currency: 'USD',
      type: 'Reset',
      material: 'Furniture',
      modifiers: '',
      unit: 'Area',
      description: '',
    },
    {
      value: 400,
      currency: 'USD',
      type: 'Install',
      material: 'Ceramic',
      modifiers: '',
      unit: 'Square Feet',
      description: '',
    },
    {
      value: 10000,
      currency: 'USD',
      type: 'Inlay',
      material: 'LVT/P',
      modifiers: '',
      unit: 'Area',
      description: '',
    },
    {
      value: 25000,
      currency: 'USD',
      type: 'Inlay',
      material: 'LVT/P',
      modifiers: 'Large',
      unit: 'Area',
      description: '',
    },
  ]

  return (
    <>
      <MetaTags
        title="d11z.me | Development Sandbox"
        description="The sandbox page is designed to quickly test code that isn't committed (important)."
      />

      <article className="post">
        <header>
          <div className="title">
            <h1>Sandbox</h1>
            <p>
              The sandbox page is designed to quickly test code that isn&apos;t
              committed (important).
            </p>
          </div>
        </header>

        <PriceSheet prices={jsonprices} />
      </article>
    </>
  )
}

export default SandboxPage
