// Dummy data for blog posts - Design & Web Development focused (inspired by Dribbble)
const dummyBlogs = [
    {
        _id: '1',
        title: 'Glassmorphism in 2026: The Ultimate UI Design Trend',
        content: 'Glassmorphism continues to dominate modern web design with its frosted glass aesthetic. This comprehensive guide explores how to implement stunning glass-morphic interfaces that captivate users.\n\nLearn the perfect balance of transparency, blur effects, and vibrant backgrounds that make glassmorphism work. We\'ll cover CSS techniques, best practices for accessibility, and when to use this trend effectively.\n\nFrom navigation bars to cards and modals, discover how top designers are pushing the boundaries of this elegant design pattern. Includes code examples and Figma resources.',
        image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=600&fit=crop',
        author: {
            _id: 'author1',
            name: 'Alex Rivera',
            avatar: 'https://i.pravatar.cc/150?img=33'
        },
        category: 'Design',
        tags: ['UI Design', 'Glassmorphism', 'CSS', 'Web Design'],
        readingTime: 8,
        createdAt: '2026-01-26T10:30:00Z',
        updatedAt: '2026-01-26T10:30:00Z'
    },
    {
        _id: '2',
        title: 'Dark Mode Design: Creating Beautiful Night-Friendly Interfaces',
        content: 'Dark mode isn\'t just a trend—it\'s a necessity for modern applications. This in-depth guide reveals the secrets to designing dark interfaces that are both beautiful and functional.\n\nDiscover optimal color palettes, contrast ratios for accessibility, and how to handle images and illustrations in dark themes. We\'ll explore the psychology of dark mode and why users prefer it.\n\nLearn from real-world examples including Spotify, Twitter, and Stripe. Plus, get actionable implementation strategies for React, Vue, and vanilla CSS with smooth theme transitions.',
        image: 'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=800&h=600&fit=crop',
        author: {
            _id: 'author2',
            name: 'Sophie Chen',
            avatar: 'https://i.pravatar.cc/150?img=45'
        },
        category: 'Design',
        tags: ['Dark Mode', 'UI/UX', 'Accessibility', 'Color Theory'],
        readingTime: 10,
        createdAt: '2026-01-25T14:20:00Z',
        updatedAt: '2026-01-25T14:20:00Z'
    },
    {
        _id: '3',
        title: 'Micro-Interactions That Delight: Animation Patterns for Web',
        content: 'Micro-interactions breathe life into static designs. These subtle animations provide feedback, guide users, and create memorable experiences that set your product apart.\n\nExplore button hover states, loading animations, form validations, and scroll-triggered effects. We\'ll cover Framer Motion, GSAP, and CSS animations with practical code examples.\n\nDiscover the psychology behind effective micro-interactions and learn to balance delight with performance. Includes 20+ downloadable animation patterns you can implement today.',
        image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop',
        author: {
            _id: 'author3',
            name: 'Marcus Kim',
            avatar: 'https://i.pravatar.cc/150?img=12'
        },
        category: 'Development',
        tags: ['Animation', 'Micro-interactions', 'UX', 'JavaScript'],
        readingTime: 12,
        createdAt: '2026-01-24T09:45:00Z',
        updatedAt: '2026-01-24T09:45:00Z'
    },
    {
        _id: '4',
        title: 'Typography Mastery: Choosing & Pairing Fonts Like a Pro',
        content: 'Typography can make or break your design. This comprehensive guide teaches you the art and science of selecting and pairing fonts that elevate your web projects.\n\nLearn about font psychology, readability metrics, and the perfect font pairings that work every time. We\'ll explore Google Fonts, Adobe Fonts, and custom web typography.\n\nFrom hero sections to body text, discover type scales, line heights, and spacing that create visual harmony. Includes 15 proven font combinations with implementation examples.',
        image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&h=600&fit=crop',
        author: {
            _id: 'author4',
            name: 'Emma Rodriguez',
            avatar: 'https://i.pravatar.cc/150?img=48'
        },
        category: 'Design',
        tags: ['Typography', 'Fonts', 'Web Design', 'UI'],
        readingTime: 9,
        createdAt: '2026-01-23T16:00:00Z',
        updatedAt: '2026-01-23T16:00:00Z'
    },
    {
        _id: '5',
        title: 'Building a Design System: From Tokens to Components',
        content: 'Design systems ensure consistency, accelerate development, and improve collaboration between designers and developers. This guide walks you through building one from scratch.\n\nStart with design tokens for colors, spacing, and typography. Then scale up to component libraries, documentation, and governance. Learn from systems like Material Design, Ant Design, and Chakra UI.\n\nIncludes practical strategies for adoption, versioning, and maintaining your design system across products. Perfect for teams ready to level up their design workflow.',
        image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&h=600&fit=crop',
        author: {
            _id: 'author5',
            name: 'Aiden Patel',
            avatar: 'https://i.pravatar.cc/150?img=23'
        },
        category: 'Design',
        tags: ['Design Systems', 'Components', 'Figma', 'Collaboration'],
        readingTime: 15,
        createdAt: '2026-01-22T08:15:00Z',
        updatedAt: '2026-01-22T08:15:00Z'
    },
    {
        _id: '6',
        title: 'CSS Grid & Flexbox: Modern Layout Techniques Explained',
        content: 'Master modern CSS layout with this definitive guide to Grid and Flexbox. Learn when to use each, how to combine them, and create responsive designs without media queries.\n\nExplore practical examples including masonry galleries, card layouts, and complex dashboard interfaces. We\'ll cover auto-fit, auto-fill, and the powerful minmax() function.\n\nIncludes interactive demos, browser support tips, and real-world use cases. By the end, you\'ll confidently build any layout you can imagine.',
        image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop',
        author: {
            _id: 'author6',
            name: 'Lucas Bennett',
            avatar: 'https://i.pravatar.cc/150?img=14'
        },
        category: 'Development',
        tags: ['CSS', 'Grid', 'Flexbox', 'Layout', 'Responsive'],
        readingTime: 11,
        createdAt: '2026-01-21T11:30:00Z',
        updatedAt: '2026-01-21T11:30:00Z'
    },
    {
        _id: '7',
        title: 'Neumorphism vs Glassmorphism: Which Style Wins in 2026?',
        content: 'Two dominant design trends battle for supremacy: the soft, tactile neumorphism and the sleek, transparent glassmorphism. This analysis compares both styles across usability, accessibility, and aesthetics.\n\nSee side-by-side examples of each approach in dashboards, mobile apps, and landing pages. We\'ll discuss accessibility concerns, implementation complexity, and user preferences.\n\nDiscover when to use each style and how to blend elements from both for unique interfaces. Includes CSS code snippets and Figma templates for both styles.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
        author: {
            _id: 'author1',
            name: 'Alex Rivera',
            avatar: 'https://i.pravatar.cc/150?img=33'
        },
        category: 'Design',
        tags: ['Neumorphism', 'Glassmorphism', 'UI Trends', 'Design'],
        readingTime: 7,
        createdAt: '2026-01-20T13:00:00Z',
        updatedAt: '2026-01-20T13:00:00Z'
    },
    {
        _id: '8',
        title: 'Mobile-First Design: Crafting Perfect Touch Interfaces',
        content: 'With mobile traffic dominating the web, mobile-first design is no longer optional. This guide teaches you to design touch-friendly interfaces that users love.\n\nLearn optimal button sizes, gesture patterns, and thumb-zone design. We\'ll cover progressive enhancement, breakpoint strategies, and performance optimization for mobile devices.\n\nExplore case studies from Instagram, TikTok, and Airbnb. Plus, get practical tips for testing on real devices and debugging mobile-specific issues.',
        image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop',
        author: {
            _id: 'author2',
            name: 'Sophie Chen',
            avatar: 'https://i.pravatar.cc/150?img=45'
        },
        category: 'Design',
        tags: ['Mobile Design', 'UX', 'Responsive', 'Touch UI'],
        readingTime: 10,
        createdAt: '2026-01-19T10:20:00Z',
        updatedAt: '2026-01-19T10:20:00Z'
    },
    {
        _id: '9',
        title: 'SVG Animations: Creating Stunning Web Graphics',
        content: 'SVG animations combine performance, scalability, and visual impact. This comprehensive guide reveals techniques for creating engaging animated graphics for the web.\n\nExplore path animations, morphing shapes, and interactive infographics. We\'ll use CSS animations, GSAP, and SVG.js to bring your designs to life.\n\nLearn optimization strategies, fallback techniques, and accessibility considerations. Includes 12 ready-to-use animation templates and a curated resource list.',
        image: 'https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=800&h=600&fit=crop',
        author: {
            _id: 'author3',
            name: 'Marcus Kim',
            avatar: 'https://i.pravatar.cc/150?img=12'
        },
        category: 'Development',
        tags: ['SVG', 'Animation', 'Graphics', 'Web Development'],
        readingTime: 13,
        createdAt: '2026-01-18T14:50:00Z',
        updatedAt: '2026-01-18T14:50:00Z'
    },
    {
        _id: '10',
        title: 'Color Gradients in Modern Web Design: A 2026 Guide',
        content: 'Gradients are back and better than ever. This guide explores how modern designers use gradients to create depth, draw attention, and establish brand identity.\n\nDiscover mesh gradients, color space techniques, and tools like Coolors and Gradient Hunt. We\'ll analyze gradient trends from leading tech companies and show how to create your own stunning palettes.\n\nLearn CSS gradient syntax, blend modes, and animation techniques. Includes 30 beautiful gradient examples you can copy and customize.',
        image: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=800&h=600&fit=crop',
        author: {
            _id: 'author4',
            name: 'Emma Rodriguez',
            avatar: 'https://i.pravatar.cc/150?img=48'
        },
        category: 'Design',
        tags: ['Gradients', 'Color', 'CSS', 'Web Design'],
        readingTime: 8,
        createdAt: '2026-01-17T12:00:00Z',
        updatedAt: '2026-01-17T12:00:00Z'
    },
    {
        _id: '11',
        title: 'Accessibility First: Designing for Everyone',
        content: 'Great design is inclusive design. This essential guide covers WCAG guidelines, screen reader optimization, and creating interfaces that work for all users.\n\nLearn about keyboard navigation, color contrast, semantic HTML, and ARIA labels. We\'ll explore assistive technologies and testing strategies to ensure your designs are truly accessible.\n\nIncludes practical checklists, accessible component patterns, and tools for automated testing. Make accessibility a core part of your design process.',
        image: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&h=600&fit=crop',
        author: {
            _id: 'author5',
            name: 'Aiden Patel',
            avatar: 'https://i.pravatar.cc/150?img=23'
        },
        category: 'Design',
        tags: ['Accessibility', 'WCAG', 'Inclusive Design', 'UX'],
        readingTime: 14,
        createdAt: '2026-01-16T09:30:00Z',
        updatedAt: '2026-01-16T09:30:00Z'
    },
    {
        _id: '12',
        title: 'Figma to Code: Bridging Design and Development',
        content: 'Transform your Figma designs into production-ready code with this developer-focused guide. Learn best practices for handoff, design tokens, and automated code generation.\n\nExplore tools like Figma API, Anima, and TeleportHQ. We\'ll cover component naming conventions, responsive design in Figma, and collaboration workflows.\n\nIncludes real-world examples of design-to-code pipelines and tips for maintaining consistency between design files and codebases.',
        image: 'https://images.unsplash.com/photo-1609921212029-bb5a28e60960?w=800&h=600&fit=crop',
        author: {
            _id: 'author6',
            name: 'Lucas Bennett',
            avatar: 'https://i.pravatar.cc/150?img=14'
        },
        category: 'Development',
        tags: ['Figma', 'Design Handoff', 'Workflow', 'Tools'],
        readingTime: 11,
        createdAt: '2026-01-15T15:45:00Z',
        updatedAt: '2026-01-15T15:45:00Z'
    },
    {
        _id: '13',
        title: '3D Elements in Web Design: Adding Depth to Your UI',
        content: 'Three-dimensional elements create stunning, immersive web experiences. This guide shows you how to integrate 3D graphics using Three.js, WebGL, and Spline.\n\nLearn to create 3D product showcases, interactive models, and parallax effects. We\'ll cover performance optimization, progressive enhancement, and fallbacks for older browsers.\n\nExplore examples from Apple, Stripe, and other industry leaders. Includes starter templates and optimization techniques to keep your sites fast.',
        image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=600&fit=crop',
        author: {
            _id: 'author1',
            name: 'Alex Rivera',
            avatar: 'https://i.pravatar.cc/150?img=33'
        },
        category: 'Development',
        tags: ['3D', 'Three.js', 'WebGL', 'Interactive Design'],
        readingTime: 16,
        createdAt: '2026-01-14T10:15:00Z',
        updatedAt: '2026-01-14T10:15:00Z'
    },
    {
        _id: '14',
        title: 'Landing Page Design: Converting Visitors into Customers',
        content: 'A great landing page can make or break your product launch. This conversion-focused guide reveals the psychology and design principles behind high-performing landing pages.\n\nDiscover hero section best practices, compelling CTAs, social proof placement, and persuasive copywriting techniques. We\'ll analyze top-converting pages from SaaS companies.\n\nLearn A/B testing strategies, page speed optimization, and mobile conversion tactics. Includes 10 landing page templates and a conversion checklist.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
        author: {
            _id: 'author2',
            name: 'Sophie Chen',
            avatar: 'https://i.pravatar.cc/150?img=45'
        },
        category: 'Design',
        tags: ['Landing Pages', 'Conversion', 'Marketing', 'UI/UX'],
        readingTime: 12,
        createdAt: '2026-01-13T08:00:00Z',
        updatedAt: '2026-01-13T08:00:00Z'
    },
    {
        _id: '15',
        title: 'Component-Driven Development: Modern Frontend Architecture',
        content: 'Component-driven development transforms how we build web applications. This architectural guide covers Storybook, component libraries, and modular design patterns.\n\nLearn to build isolated, reusable components with React, Vue, or Web Components. We\'ll explore atomic design methodology, prop APIs, and composition patterns.\n\nIncludes strategies for documentation, testing, and scaling component libraries across teams. Perfect for developers building maintainable frontend applications.',
        image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop',
        author: {
            _id: 'author3',
            name: 'Marcus Kim',
            avatar: 'https://i.pravatar.cc/150?img=12'
        },
        category: 'Development',
        tags: ['Components', 'React', 'Architecture', 'Frontend'],
        readingTime: 14,
        createdAt: '2026-01-12T11:20:00Z',
        updatedAt: '2026-01-12T11:20:00Z'
    }
];

export default dummyBlogs;
