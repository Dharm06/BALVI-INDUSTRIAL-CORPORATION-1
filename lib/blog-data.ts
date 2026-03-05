export interface BlogPost {
  slug: string
  title: string
  description: string
  content: string
  image: string
  category: string
  date: string
  author: string
  featured: boolean
}

export const categories = [
  "All",
  "Manufacturing",
  "Engineering",
  "Standards",
  "Industry",
] as const

export const blogPosts: BlogPost[] = [
  {
    slug: "importance-of-cnc-machining-in-modern-industry",
    title: "Importance of CNC Machining in Modern Industry",
    description:
      "CNC machining has revolutionized modern manufacturing with unparalleled precision, repeatability, and efficiency. Discover how this technology is shaping the future of industrial production across sectors.",
    content:
      "Computer Numerical Control (CNC) machining has transformed the manufacturing landscape by enabling unprecedented levels of precision and automation. From aerospace to automotive, CNC machines produce complex parts with tolerances as tight as 0.001mm, ensuring consistent quality across thousands of units. The technology reduces human error, speeds up production cycles, and allows manufacturers to tackle geometries that would be impossible with manual machining. As Industry 4.0 continues to evolve, CNC machining remains at the core of smart manufacturing strategies worldwide.",
    image: "/images/blog-cnc-machining.jpg",
    category: "Manufacturing",
    date: "2026-02-10",
    author: "Balvi Industrial Team",
    featured: true,
  },
  {
    slug: "forging-vs-casting-whats-better",
    title: "Forging vs Casting: What's Better?",
    description:
      "A detailed comparison of forging and casting processes, exploring their strengths, limitations, and ideal use cases in industrial manufacturing.",
    content:
      "Forging and casting are two fundamental metalworking processes, each with distinct advantages. Forging involves shaping metal using compressive forces, resulting in a refined grain structure that offers superior strength and fatigue resistance. Casting, on the other hand, pours molten metal into molds, allowing for intricate shapes and larger components at lower costs. The choice between them depends on factors like required strength, complexity, volume, and budget. For critical structural components, forging is often preferred, while casting excels for complex housings and large-scale parts.",
    image: "/images/blog-forging-casting.jpg",
    category: "Engineering",
    date: "2026-01-25",
    author: "Balvi Industrial Team",
    featured: false,
  },
  {
    slug: "pipe-fitting-standards-explained",
    title: "Pipe Fitting Standards Explained",
    description:
      "Understanding the key international standards for pipe fittings, including IS 1239, BS 21, and ASTM A865, and why compliance matters for safety and reliability.",
    content:
      "Pipe fitting standards ensure that components from different manufacturers are interchangeable, safe, and reliable. Standards like IS 1239 Part 2, BS 21:1985, and ASTM A865 define critical specifications including material composition, dimensional tolerances, threading requirements, and testing procedures. Compliance with these standards is not just a regulatory requirement but a mark of quality that global buyers rely on. At Balvi Industrial Corporation, every pipe fitting undergoes rigorous inspection against these standards before shipment.",
    image: "/images/blog-pipe-standards.jpg",
    category: "Standards",
    date: "2026-01-12",
    author: "Balvi Industrial Team",
    featured: false,
  },
  {
    slug: "galvanizing-process-for-industrial-durability",
    title: "Galvanizing Process for Industrial Durability",
    description:
      "Learn how hot-dip galvanizing protects steel components from corrosion, extending their lifespan and reducing maintenance costs across harsh environments.",
    content:
      "Hot-dip galvanizing is one of the most effective methods for protecting steel against corrosion. The process involves immersing cleaned steel parts into a bath of molten zinc at approximately 450 degrees Celsius, creating a metallurgical bond between the zinc and the steel substrate. This zinc coating acts as both a physical barrier and a sacrificial anode, protecting the underlying steel even if the coating is scratched. Galvanized components can last 50 years or more in rural environments, making it an economical choice for infrastructure, construction, and industrial applications.",
    image: "/images/blog-galvanizing.jpg",
    category: "Manufacturing",
    date: "2025-12-20",
    author: "Balvi Industrial Team",
    featured: false,
  },
  {
    slug: "how-india-is-growing-in-industrial-exports",
    title: "How India is Growing in Industrial Exports",
    description:
      "India's industrial export sector is booming. Explore the key factors driving growth and how Indian manufacturers are competing on the global stage.",
    content:
      "India's industrial manufacturing sector has witnessed remarkable growth in exports over the past decade. Driven by government initiatives like Make in India, competitive labor costs, and improving infrastructure, Indian manufacturers are capturing increasing market share in regions like the Middle East, Africa, and Southeast Asia. The country's expertise in precision engineering, forging, and CNC machining has positioned it as a reliable supplier of quality industrial components. Companies like Balvi Industrial Corporation are contributing to this growth by serving international clients in Oman, Dubai, and Abu Dhabi with world-class products and timely deliveries.",
    image: "/images/blog-india-exports.jpg",
    category: "Industry",
    date: "2025-12-05",
    author: "Balvi Industrial Team",
    featured: false,
  },
]
