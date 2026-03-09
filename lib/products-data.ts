export interface Product {
  name: string;
  description: string;
  image: string;
}

export interface ProductCategory {
  id: string;
  title: string;
  description: string;
  products: Product[];
  specifications?: string[];
}

export const productCategories: ProductCategory[] = [
  {
    id: "automobile-components",
    title: "Automobile Components",
    description:
      "High-precision automobile parts manufactured to exacting OEM standards with CNC machining technology.",
    products: [
      {
        name: "",
        description: "",
        image: "/images/001.jpg",
      },
      {
        name: "",
        description: "",
        image: "/images/002.jpg",
      },
      {
        name: "",
        description: "",
        image: "/images/003.jpg",
      },
      {
        name: "",
        description: "",
        image: "/images/004.jpg",
      },
      {
        name: "",
        description: "",
        image: "/images/005.jpg",
      },
      {
        name: "",
        description: "",
        image: "/images/006.jpg",
      },
      {
        name: "",
        description: "",
        image: "/images/007.jpg",
      },
      {
        name: "",
        description: "",
        image: "/images/008.jpg",
      },
      {
        name: "",
        description: "",
        image: "/images/009.jpg",
      },
      {
        name: "",
        description: "",
        image: "/images/0010.jpg",
      },
      {
        name: "",
        description: "",
        image: "/images/0011.jpg",
      },
      {
        name: "",
        description: "",
        image: "/images/0012.jpg",
      },
      {
        name: "",
        description: "",
        image: "/images/0015.jpg",
      },
    ],
  },
  {
    id: "machine-tool-components",
    title: "Machine Tool Components",
    description:
      "Industrial-grade machine tool parts engineered for precision, durability, and reliable performance in demanding environments.",
    products: [
      {
        name: "",
        description: "",
        image: "/images/0013.jpg",
      },
      {
        name: "",
        description: "",
        image: "/images/0014.jpg",
      },
      {
        name: "",
        description: "",
        image: "/images/0016.jpg",
      },
      {
        name: "",
        description: "",
        image: "/images/0017.jpg",
      },

      {
        name: "",
        description: "",
        image: "/images/0019.jpg",
      },
      {
        name: "",
        description: "",
        image: "/images/0020.jpg",
      },
      {
        name: "",
        description: "",
        image: "/images/0021.jpg",
      },

      {
        name: "",
        description: "",
        image: "/images/0023.jpg",
      },
      {
        name: "",
        description: "",
        image: "/images/0024.jpg",
      },
    ],
  },
  {
    id: "pipe-fittings-pump-parts",
    title: "Pipe Fittings & Pump Parts",
    description:
      "Industrial-grade pipe fittings and pump components for fluid handling systems, manufactured to international standards.",
    specifications: [
      "Standard: IS 1239 PT 2 & BS 21:1985",
      "Standard: ASTM A865",
      "Thread Quality: CNC Machining",
      "Steel Grade: As specified by standard",
      "Zinc Coating: As specified by standard",
      "Tensile Strength: 320 / 450 MPa",
      "Hardness: 100 / 140 VPN",
      "Material: Welded / Seamless",
    ],

    products: [
      {
        name: "",
        description: "",
        image: "/images/0028.jpg",
      },
      {
        name: "",
        description: "",
        image: "/images/0029.jpg",
      },
      {
        name: "",
        description: "",
        image: "/images/0030.jpg",
      },
      {
        name: "",
        description: "",
        image: "/images/0031.jpg",
      },
      {
        name: "",
        description: "",
        image: "/images/0032.jpg",
      },
      {
        name: "",
        description: "",
        image: "/images/0033.jpg",
      },
      {
        name: "",
        description: "",
        image: "/images/0034.jpg",
      },
    ],
  },
];
