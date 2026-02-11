import { Share2, ArrowUpRight, Radio, Mic, PenTool, Layers, Type, Grid, Circle, Square } from 'lucide-react';

// Images from Figma assets
import radioImg from 'figma:asset/ff148bf06b626d8e767fe2b38cfb8323af3ce071.png';
import fashionImg from 'figma:asset/0d94e862498a85d6d19460d76ab0f3cbbad73d03.png';
import travelImg from 'figma:asset/2c88af63a47f9a1f72955333ae3d78c7a1f0ef84.png';

export interface Post {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  image: string;
  date: string;
  readTime: string;
  tags: string[];
  content: {
    intro: string;
    whyItMatters: string;
    paragraphs: string[];
  };
  featured?: boolean;
  url?: string;
}

export const CATEGORIES = [
  { id: 'ui-ux', label: 'UI/UX', description: 'Interface patterns and user behaviors' },
  { id: 'visual', label: 'Design Gráfico', description: 'Aesthetics, typography, and color' },
  { id: 'figma', label: 'Figma', description: 'Workflows and technical mastery' },
  { id: 'culture', label: 'Cultura', description: 'Design in the broader context' },
];

export const POSTS: Post[] = [
  // UI/UX
  {
    id: 'travel-interfaces',
    title: 'Wanderlust UI',
    subtitle: 'Get to your dream destinations with Travel Pro',
    category: 'UI/UX',
    image: travelImg,
    date: 'Feb 8, 2026',
    readTime: '6 min read',
    tags: ['Travel', 'Booking', 'Immersion'],
    featured: true,
    content: {
      intro: "Travel interfaces are moving away from transactional grids to immersive storytelling. The booking process is becoming part of the journey itself.",
      whyItMatters: "Post-pandemic travel is about experience and trust. Interfaces that feel like editorial magazines build that trust better than cold, data-heavy tables.",
      paragraphs: [
        "Large photography is key. The interface recedes, allowing the destination to take center stage. Forms are conversational, asking 'Where do you want to go?' rather than 'Destination City'.",
        "We observe a trend of 'soft UI' in travel apps—rounded corners, pastel tones, and organic shapes that mimic the relaxation of a vacation."
      ]
    }
  },
  {
    id: 'architectural-shapes',
    title: 'Structural Beige',
    subtitle: 'Warmth and structure in modern layouts',
    category: 'UI/UX',
    image: 'https://images.unsplash.com/photo-1713518814139-e926e75c46f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGFyY2hpdGVjdHVyYWwlMjBzaGFwZXMlMjBsaWdodCUyMGJlaWdlfGVufDF8fHx8MTc3MDY0NjExM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    date: 'Jan 28, 2026',
    readTime: '4 min read',
    tags: ['Architecture', 'Layout', 'Warmth'],
    content: {
      intro: "Cold greys are out. Warm beige, sand, and stone tones are in. This palette brings a human, architectural quality to digital products.",
      whyItMatters: "It's less fatiguing. Warm tones are easier on the eyes and feel more organic. They suggest a space you want to inhabit, rather than a tool you have to use.",
      paragraphs: [
        "We combine these warm tones with strong, structural grids. It's a balance of soft and hard—the organic color palette meets the rigid layout.",
        "This style is particularly popular in productivity tools and knowledge bases, transforming them from spreadsheets into libraries."
      ]
    }
  },
  {
    id: 'mobile-gestures',
    title: 'Gestures First',
    subtitle: 'The end of the button era',
    category: 'UI/UX',
    image: 'https://images.unsplash.com/photo-1762341119237-98df67c9c3c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1aSUyMGRlc2lnbiUyMG1vYmlsZSUyMGFwcCUyMGludGVyZmFjZXxlbnwxfHx8fDE3NzA4MTc1Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    date: 'Feb 10, 2026',
    readTime: '5 min read',
    tags: ['Mobile', 'Gestures', 'Navigation'],
    content: {
      intro: "Buttons are disappearing. Swipes, pinches, and long-presses are becoming the primary way we interact with our devices.",
      whyItMatters: "Screen real estate is precious. Removing buttons allows for more content and a cleaner, more immersive experience.",
      paragraphs: [
        "This trend requires better onboarding. Users need to be taught how to interact with the interface without explicit visual cues.",
        "Haptic feedback is crucial here. It replaces the tactile click of a button, confirming to the user that their action was registered."
      ]
    }
  },

  // Design Gráfico (Visual Design)
  {
    id: 'fashion-editorial',
    title: 'Digital Haute Couture',
    subtitle: 'Representing brands as the source for inspiration',
    category: 'Design Gráfico',
    image: fashionImg,
    date: 'Feb 5, 2026',
    readTime: '5 min read',
    tags: ['Fashion', 'Editorial', 'Typography'],
    content: {
      intro: "Fashion e-commerce is shedding its grid-based catalog skin. The new standard is the 'shoppable editorial'—layouts that look like Vogue but convert like Amazon.",
      whyItMatters: "Brand identity is the only differentiator in a crowded market. When every store has the same Shopify checkout, the discovery layer must be unique.",
      paragraphs: [
        "Asymmetry is king here. Images overlap, text breaks the grid, and white space is used luxuriously. It's inefficient for density, but perfect for desire.",
        "Typography plays a huge role. We're seeing a mix of classic serifs for elegance and brutalist sans-serifs for edge. The contrast creates tension and interest."
      ]
    }
  },
  {
    id: 'minimalist-objects',
    title: 'Object Permanence',
    subtitle: 'The return of physical presence in digital design',
    category: 'Design Gráfico',
    image: 'https://images.unsplash.com/photo-1763013374216-dd0ececbd090?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwZGVzaWduJTIwb2JqZWN0JTIwYWVzdGhldGljfGVufDF8fHx8MTc3MDY0NjExM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    date: 'Feb 2, 2026',
    readTime: '3 min read',
    tags: ['3D', 'Materiality', 'Lighting'],
    content: {
      intro: "After years of flat design, we are craving texture. Not skeuomorphism, but 'materiality'—the sense that digital objects have weight and respond to light.",
      whyItMatters: "It grounds the user. In an ephemeral digital world, objects that feel 'real' provide a sense of stability and value.",
      paragraphs: [
        "This trend manifests in subtle shadows, grain textures, and 3D renders that look like studio photography. It's about the appreciation of form.",
        "Lighting is the new color. Instead of flat hex codes, designers are defining light sources and materials."
      ]
    }
  },
  {
    id: 'bold-typography',
    title: 'Bold Typography',
    subtitle: 'When text becomes the image',
    category: 'Design Gráfico',
    image: 'https://images.unsplash.com/photo-1770581939371-326fc1537f10?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFwaGljJTIwZGVzaWduJTIwdHlwb2dyYXBoeSUyMHBvc3RlcnxlbnwxfHx8fDE3NzA4MTc1MjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    date: 'Feb 08, 2026',
    readTime: '4 min read',
    tags: ['Typography', 'Layout', 'Bold'],
    featured: true,
    content: {
      intro: "Typography is no longer just for reading. It's for looking. Big, bold type is taking over hero sections, replacing images entirely.",
      whyItMatters: "It grabs attention instantly and communicates the message without ambiguity. It also loads faster than high-res images.",
      paragraphs: [
        "We're seeing massive display fonts used for headlines, often with tight letter spacing and negative leading.",
        "This trend pairs well with minimalist layouts, where the type is the only design element."
      ]
    }
  },
  {
    id: 'geometric-patterns',
    title: 'Geometric Patterns',
    subtitle: 'Mathematical beauty in design',
    category: 'Design Gráfico',
    image: 'https://images.unsplash.com/photo-1595411425732-e69c1abe2763?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGdlb21ldHJpYyUyMHBhdHRlcm4lMjBkZXNpZ258ZW58MXx8fHwxNzcwODE2NjIyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    date: 'Feb 02, 2026',
    readTime: '3 min read',
    tags: ['Patterns', 'Geometry', 'Abstract'],
    content: {
      intro: "Geometric patterns are back, but with a twist. They are complex, generative, and often animated.",
      whyItMatters: "They add depth and visual interest without adding semantic load. They are perfect for backgrounds and brand assets.",
      paragraphs: [
        "These patterns are often generated using code, allowing for infinite variations. They can react to user input or music.",
        "Color plays a huge role here, with vibrant, high-contrast palettes being the norm."
      ]
    }
  },

  // Figma
  {
    id: 'figma-variables',
    title: 'Mastering Variables',
    subtitle: 'The future of design tokens in Figma',
    category: 'Figma',
    image: 'https://images.unsplash.com/photo-1610497254766-c6a51afa9b64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwYXJjaGl0ZWN0dXJlJTIwYWJzdHJhY3R8ZW58MXx8fHwxNzcwNzg4ODc5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    date: 'Feb 12, 2026',
    readTime: '8 min read',
    tags: ['Figma', 'Tokens', 'System'],
    content: {
      intro: "Variables in Figma have revolutionized how we manage design systems. It's no longer about styles; it's about semantic logic.",
      whyItMatters: "Variables allow for multi-theme support (light/dark mode) and spacing systems without the overhead of multiple component variants.",
      paragraphs: [
        "Start by defining your primitives (hex codes, pixel values) and then alias them to semantic variables (text-primary, spacing-md).",
        "This abstraction layer makes your system flexible and maintainable. Changing a brand color is a one-line update."
      ]
    }
  },
  {
    id: 'auto-layout-tricks',
    title: 'Auto Layout Magic',
    subtitle: 'Responsive design right inside the canvas',
    category: 'Figma',
    image: 'https://images.unsplash.com/photo-1666302707255-13651d539be5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMDNkJTIwc2hhcGVzJTIwcmVuZGVyfGVufDF8fHx8MTc3MDczMTA1Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    date: 'Feb 07, 2026',
    readTime: '5 min read',
    tags: ['Figma', 'Auto Layout', 'Responsive'],
    content: {
      intro: "Auto Layout is the closest thing to CSS flexbox in a design tool. Mastering it is essential for modern product design.",
      whyItMatters: "It ensures your designs are realistic. If it breaks in Auto Layout, it will break in code.",
      paragraphs: [
        "Use 'Fill container' and 'Hug contents' to create fluid components. Avoid fixed widths whenever possible.",
        "Absolute positioning within Auto Layout frames allows for those tricky overlapping elements without breaking the flow."
      ]
    }
  },
  {
    id: 'dev-mode-handOff',
    title: 'Perfect Handoff',
    subtitle: 'Using Dev Mode to bridge the gap',
    category: 'Figma',
    image: 'https://images.unsplash.com/photo-1697725280320-e48c8cc4f074?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGNvZGluZyUyMGdlbmVyYXRpdmUlMjBhcnR8ZW58MXx8fHwxNzcwNzMyNzUzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    date: 'Feb 01, 2026',
    readTime: '6 min read',
    tags: ['Figma', 'Development', 'Collaboration'],
    content: {
      intro: "Figma's Dev Mode is a game changer for developer handoff. It translates design intent into code snippets and specs.",
      whyItMatters: "It reduces friction and ambiguity. Developers get exactly what they need without having to guess padding or font sizes.",
      paragraphs: [
        "Annotate your designs. Use sections to mark status (Ready for Dev, In Progress).",
        "The VS Code extension allows developers to inspect designs without leaving their editor, streamlining the workflow."
      ]
    }
  },

  // Cultura (Culture)
  {
    id: 'broadcast-era',
    title: 'The New Broadcast Era',
    subtitle: 'Be part of our broadcast',
    category: 'Cultura',
    image: radioImg,
    date: 'Feb 9, 2026',
    readTime: '4 min read',
    tags: ['Audio UI', 'Podcast', 'Community'],
    featured: true,
    content: {
      intro: "The visual language of audio is evolving. As screens become saturated, audio interfaces are adopting a bold, high-contrast aesthetic that demands attention without requiring constant gaze.",
      whyItMatters: "Audio apps are no longer utilitarian players. They are becoming lifestyle brands. The interface must reflect the quality of the content, creating a visual identity for sound.",
      paragraphs: [
        "We are seeing a shift from subtle, hidden controls to massive, tactile buttons. The 'Play' button is no longer an icon; it's a statement.",
        "Typography in audio apps is getting bigger, bolder, and more experimental. It's about rhythm and tempo, translating the auditory experience into a visual one."
      ]
    }
  },
  {
    id: 'avant-garde-fashion',
    title: 'The New Avant Garde',
    subtitle: 'Breaking the rules of traditional composition',
    category: 'Cultura',
    image: 'https://images.unsplash.com/photo-1739616194269-46f6247e65fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwZWRpdG9yaWFsJTIwYXZhbnQlMjBnYXJkZSUyMG1pbmltYWx8ZW58MXx8fHwxNzcwNjQ2MTEzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    date: 'Jan 25, 2026',
    readTime: '5 min read',
    tags: ['Experimental', 'Layout', 'Art Direction'],
    content: {
      intro: "When usability is mastered, art direction takes over. We are seeing sites that prioritize mood and expression over immediate clarity, challenging the user to explore.",
      whyItMatters: "It creates memorable experiences. In a sea of templates, the site that breaks the grid is the one you remember.",
      paragraphs: [
        "This isn't for every product. It's for brands that lead. It requires confidence to use small text, huge margins, and obscure navigation.",
        "The key is intention. You aren't breaking rules because you don't know them, but because the story requires it."
      ]
    }
  },
  {
    id: 'modern-workspace',
    title: 'Studio Culture',
    subtitle: 'Designing the spaces where we design',
    category: 'Cultura',
    image: 'https://images.unsplash.com/photo-1737305457462-57fcd66ccee4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBkZXNpZ24lMjBzdHVkaW98ZW58MXx8fHwxNzcwODE3NTIwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    date: 'Jan 20, 2026',
    readTime: '4 min read',
    tags: ['Workspace', 'Interior', 'Productivity'],
    content: {
      intro: "The remote work revolution has changed what we expect from a 'studio'. It's no longer just a desk; it's a sanctuary for creativity.",
      whyItMatters: "Environment shapes output. A well-designed space fosters focus and inspiration.",
      paragraphs: [
        "Natural light, plants, and high-quality materials are standard. But we're also seeing a focus on acoustic comfort and flexible zones.",
        "The home office is becoming more personalized and less corporate. It's about blending work into life seamlessly."
      ]
    }
  },
  {
    id: 'editorial-layouts',
    title: 'Editorial Layouts',
    subtitle: 'Print principles in the browser',
    category: 'Cultura',
    image: 'https://images.unsplash.com/photo-1766239303199-b45e6bcdc901?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZGl0b3JpYWwlMjBtYWdhemluZSUyMGxheW91dCUyMHNwcmVhZHxlbnwxfHx8fDE3NzA4MTc1MjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    date: 'Feb 04, 2026',
    readTime: '4 min read',
    tags: ['Print', 'Layout', 'Magazine'],
    content: {
      intro: "The web is rediscovering the joy of print. Multi-column layouts, drop caps, and sophisticated typography are making a comeback.",
      whyItMatters: "It elevates the reading experience. It turns consuming content into an aesthetic pleasure.",
      paragraphs: [
        "CSS Grid has made this easier than ever. We can create complex, print-like structures that are still responsive.",
        "It's a reaction against the infinite scroll. Editorial layouts encourage a more paced, deliberate consumption of content."
      ]
    }
  }
];
