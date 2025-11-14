# JeniDub Homepage Design Guidelines

## Design Approach
**Reference-Based Design**: Inspired by Podia's modern, playful course platform aesthetic with bold typography, geometric accents, and tilted card layouts. Adapting their clean, approachable style while maintaining JeniDub's brand identity.

## Core Design Elements

### Typography
- **Headlines**: Bold, large sans-serif (2.5-3rem desktop, 1.75-2rem mobile) - high impact
- **Subheadings**: Medium weight, 1.5-1.8rem
- **Body Text**: Regular weight, 1.1rem with 1.7 line-height for readability
- **CTA Text**: Semi-bold, 1.1-1.2rem
- **Font Stack**: System fonts (-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto)

### Layout System
**Spacing Units**: Tailwind units of 4, 6, 8, 12, 16, 20 (e.g., p-8, mb-12, gap-6)
- Section padding: py-20 (desktop), py-12 (mobile)
- Card padding: p-8 to p-10
- Element gaps: gap-6 to gap-8 in grids
- Generous whitespace between sections and elements

### Color Implementation
- **Pacific Teal (#008B8B)**: Primary brand color for headings, accents, CTA borders
- **Warm Coral (#FF6B6B)**: CTA buttons, highlights, decorative elements
- **Sage Green (#9CAF88)**: Supporting accents, gradient backgrounds
- **Backgrounds**: White (#FFFFFF) and light gray (#F8F9FA) alternating sections
- **Text**: Dark slate (#2C3E50)

### Component Library

**Navigation Header**
- Clean, minimal navigation bar with logo left, menu items right
- Transparent or white background with subtle shadow on scroll
- Simple text links with hover color transitions to Pacific Teal

**Hero Section**
- Gradient background (Pacific Teal to Sage Green, 135deg)
- Large, bold headline typography centered
- Decorative geometric shapes scattered (circles, triangles in Warm Coral and lighter tints)
- Black CTA button with high contrast, rounded corners (50px border-radius)
- Launch announcement badge with border and slight transparency
- Generous vertical padding (py-24 to py-32)

**Card Components**
- Rounded corners (10-15px border-radius)
- Soft shadows (0 4px 6px rgba(0,0,0,0.1))
- White backgrounds with subtle hover lift (translateY -5px)
- Tilted positioning (rotate 2-3deg) for visual interest on skill cards
- Pastel tinted backgrounds using brand colors at low opacity

**Skill Cards (3-column grid)**
- Overlapping, slightly rotated layout inspired by Podia
- Large emoji icons (3rem) at top
- Pacific Teal headings
- Hover effect: lift + enhanced shadow

**Philosophy Cards (3-column grid)**
- Straight alignment (not tilted)
- Warm Coral headings for contrast
- Icons in larger size for visual impact

**Bio Section**
- Circular profile photo (250px) with Pacific Teal border
- Side-by-side layout (photo left, text right) on desktop
- Stacked vertical on mobile
- "Learn More" link with arrow indicator and Pacific Teal color

**Two-Path CTA Cards**
- Side-by-side on gradient background (matching hero)
- White card backgrounds with rounded corners
- Clear hierarchy: heading (Pacific Teal), description, Warm Coral CTA button
- Shadow depth for card elevation

**Decorative Elements**
- Scattered geometric shapes (circles 60-120px, triangles, abstract forms)
- Positioned absolutely with low z-index
- Use brand colors with 20-30% opacity
- Distribute across hero and major sections for playful energy

**Footer**
- Dark background (#2C3E50)
- White text with reduced opacity (0.8)
- Centered, simple copyright text
- Optional: Add newsletter signup, social links (minimalist icons)

### Images
This design does NOT use a large hero image. Instead, it relies on gradient backgrounds with decorative geometric shapes for visual interest.

**Profile Photo**
- Circular placeholder (250px diameter) in bio section
- Placeholder shows "JW" initials centered
- Background: Sage Green with Pacific Teal border

### Responsive Behavior
- **Desktop (lg)**: 3-column grids, side-by-side layouts, full decorative elements
- **Tablet (md)**: 2-column grids, maintained spacing
- **Mobile (base)**: Single column stacks, reduced padding (py-12), smaller typography, hidden decorative elements for performance

### Hover States & Interactions
- **Cards**: Lift effect (translateY -5px) + enhanced shadow (0 8px 15px)
- **Buttons**: Minimal lift (translateY -2px) + deeper shadow
- **Links**: Color transition to Warm Coral (0.3s ease)
- **No distracting animations**: Simple, purposeful transitions only

### Visual Hierarchy
- Bold headlines command attention
- Generous whitespace creates breathing room
- Alternating section backgrounds (white/light gray) provide clear segmentation
- Geometric shapes add playfulness without overwhelming content
- Color used strategically to guide eye through content flow

This design balances Podia's modern, playful aesthetic with JeniDub's approachable "Cali Chill" brand personality, creating a professional yet welcoming educational platform.