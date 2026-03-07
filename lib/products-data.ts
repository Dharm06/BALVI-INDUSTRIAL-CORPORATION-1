export interface Product {
  name: string;
  description: string;
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
        name: "Bush",
        description:
          "Precision-machined bushings for automotive suspension and drivetrain applications, ensuring smooth operation and long service life.",
      },
      {
        name: "Hub Lock Nut",
        description:
          "Heavy-duty hub lock nuts engineered for secure wheel hub assemblies, designed to withstand extreme torque and vibration.",
      },
      {
        name: "Upper Lower Washer",
        description:
          "Precision-ground upper and lower washers for automotive assemblies, manufactured to tight tolerances for optimal load distribution.",
      },
      {
        name: "Spacer Table Shaft",
        description:
          "CNC-machined spacer table shafts for drivetrain and transmission components, delivering precision fit and alignment.",
      },
      {
        name: "Spacer Oil Sling",
        description:
          "Engineered oil sling spacers for effective lubrication management in rotating automotive assemblies.",
      },
      {
        name: "Spacer RI Shaft",
        description:
          "High-tolerance RI shaft spacers designed for critical automotive shaft assemblies requiring exact dimensional accuracy.",
      },
      {
        name: "Muff Ring",
        description:
          "Precision muff rings for coupling and shaft connection applications, machined for secure interference fits.",
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
        name: "Leveling Screw",
        description:
          "Precision leveling screws for machine tool bases, enabling fine adjustment and stable positioning of heavy equipment.",
      },
      {
        name: "Foundation Bolt",
        description:
          "High-strength foundation bolts for secure machine tool mounting, engineered to absorb vibration and maintain alignment.",
      },
      {
        name: "Leveling Washer",
        description:
          "Precision-ground leveling washers for accurate machine bed adjustment, ensuring optimal surface alignment.",
      },
      {
        name: "Chain Sprocket",
        description:
          "CNC-machined chain sprockets for power transmission systems, manufactured with hardened teeth for extended wear life.",
      },
      {
        name: "Middle Spacer",
        description:
          "Precision middle spacers for spindle and shaft assemblies, maintaining critical dimensional spacing in machine tools.",
      },
      {
        name: "Shaft Ball",
        description:
          "High-precision shaft balls for bearing and spindle applications, ground to exacting sphericity and surface finish standards.",
      },
      {
        name: "Tool Disk Plug",
        description:
          "Engineered tool disk plugs for CNC tool changers and turret assemblies, ensuring reliable tool retention.",
      },
      {
        name: "Out Centering Ring",
        description:
          "Precision centering rings for tool holder and spindle alignment, critical for achieving tight machining tolerances.",
      },
      {
        name: "Bearing Cover",
        description:
          "Precision-machined bearing covers for spindle protection, designed to seal and protect bearing assemblies from contamination.",
      },
      {
        name: "Leveling Nut",
        description:
          "Heavy-duty leveling nuts for machine tool installation, providing secure and adjustable base leveling.",
      },
      {
        name: "Drawbar Nut",
        description:
          "High-precision drawbar nuts for CNC spindle assemblies, engineered for reliable tool clamping force.",
      },
      {
        name: "Lock Nut 1",
        description:
          "Precision lock nuts (Type 1) for preloaded bearing assemblies, preventing rotational loosening under vibration.",
      },
      {
        name: "Lock Nut 2",
        description:
          "Precision lock nuts (Type 2) for spindle and shaft retention, designed with enhanced locking features.",
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
        name: "Galvanized Socket",
        description:
          "Corrosion-resistant galvanized sockets for plumbing and industrial piping systems, providing secure threaded connections.",
      },
      {
        name: "Black Socket",
        description:
          "Heavy-duty black iron sockets for industrial piping, ideal for steam, gas, and high-pressure fluid applications.",
      },
      {
        name: "Plate Flange",
        description:
          "Precision-machined plate flanges for pipe connections, manufactured to ANSI/ASME standards with flat sealing surfaces.",
      },
      {
        name: "Conical Flange",
        description:
          "Engineered conical flanges for specialized piping connections, providing self-centering alignment and reliable sealing.",
      },
      {
        name: "Cable Slot Flange",
        description:
          "Specialized cable slot flanges with integrated cable routing, designed for instrumentation and electrical piping applications.",
      },
      {
        name: "Spindle 1",
        description:
          "Precision pump spindles (Type 1) for rotary pump assemblies, machined to tight tolerances for efficient fluid transfer.",
      },
      {
        name: "Spindle 2",
        description:
          "Precision pump spindles (Type 2) for high-performance pump applications, featuring enhanced surface finish and balance.",
      },
    ],
  },
];
