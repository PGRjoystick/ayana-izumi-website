# Adding Ayana's SVG Illustration

## How to Replace the Placeholder with Your Ayana SVG

### Step 1: Prepare Your SVG
1. Open your Ayana SVG file in a text editor
2. Copy the `<path>` elements and other SVG content
3. Note the `viewBox` dimensions

### Step 2: Update the Component
Replace the placeholder content in `src/components/AyanaIllustration.tsx`:

```tsx
export function AyanaIllustration({ className = "" }: AyanaIllustrationProps) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 YOUR_WIDTH YOUR_HEIGHT"  // Update with your SVG dimensions
      className={`w-full h-full ${className}`}
    >
      {/* Replace this section with your actual SVG content */}
      
      {/* Your gradients, if any */}
      <defs>
        <linearGradient id="hair-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor: "#yourcolor", stopOpacity: 1}} />
          <stop offset="100%" style={{stopColor: "#yourcolor", stopOpacity: 1}} />
        </linearGradient>
        {/* Add more gradients as needed */}
      </defs>
      
      {/* Your actual SVG paths */}
      <path d="your-svg-path-data" fill="#yourcolor" />
      <path d="your-svg-path-data" fill="url(#hair-gradient)" />
      {/* Add all your paths here */}
      
    </svg>
  );
}
```

### Step 3: SVG Optimization Tips
- Make sure colors work well with the cyan theme
- Consider using gradients that complement cyan (#00FFFF)
- Ensure the SVG is properly sized for background use

### Step 4: Color Integration
Your SVG can use these colors to match the theme:
- Primary: `#00FFFF` (cyan)
- Secondary: `#0080FF` (sky blue)
- Accent: `#00B3B3` (dark cyan)
- Light: `#E0FFFF` (light cyan)

### Step 5: Testing
After updating the SVG:
1. Run `npm run build` to check for errors
2. View the website to see how it looks
3. Adjust opacity in Hero.tsx if needed (currently set to `opacity-10`)

### Current Integration
The SVG is integrated as:
- Background element in the Hero section
- Positioned behind the text content
- Set to low opacity (10%) so text remains readable
- Responsive and centered
- Maximum width of 2xl (672px) for good proportions

### Customization Options
You can adjust these properties in `Hero.tsx`:
- `opacity-10` - Change opacity (10%, 20%, 30%, etc.)
- `max-w-2xl` - Change maximum width
- Position and size as needed

### Example Structure
```tsx
// Your SVG might look like this:
<svg viewBox="0 0 400 600">
  <defs>
    <linearGradient id="skin">
      <stop offset="0%" stopColor="#FFE4C4" />
      <stop offset="100%" stopColor="#F4A460" />
    </linearGradient>
  </defs>
  
  {/* Face */}
  <path d="M200,150 C220,150 240,170 240,190 L240,240 C240,260 220,280 200,280 C180,280 160,260 160,240 L160,190 C160,170 180,150 200,150 Z" fill="url(#skin)" />
  
  {/* Hair */}
  <path d="M160,150 Q200,100 240,150 L240,120 Q200,80 160,120 Z" fill="#00FFFF" />
  
  {/* Eyes */}
  <circle cx="185" cy="200" r="5" fill="#000" />
  <circle cx="215" cy="200" r="5" fill="#000" />
  
  {/* Body, clothes, etc. */}
  <path d="..." fill="..." />
</svg>
```

Once you add your actual Ayana illustration, she'll appear as a beautiful, subtle background element that makes the Hero section uniquely yours!
