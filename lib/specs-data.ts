export interface SpecRow {
  property: string
  value: string
  note?: string
}

export interface StandardSpec {
  id: string
  name: string
  description: string
  sizeRange: string
  rows: SpecRow[]
}

export const standards: StandardSpec[] = [
  {
    id: "is-1239-bs-21",
    name: 'IS 1239 PT 2 & BS 21:1985',
    description: 'Indian Standard and British Standard for steel tube fittings and pipe connections used in low-pressure plumbing and general engineering.',
    sizeRange: '1/2" to 6"',
    rows: [
      { property: "Standard", value: "IS 1239 Part 2 / BS 21:1985" },
      { property: "Size Range", value: '1/2" to 6"' },
      { property: "Thread Quality", value: "CNC Machined" },
      { property: "Steel Grade", value: "As per IS / BS standard" },
      { property: "Zinc Coating", value: "As per standard specification" },
      { property: "Tensile Strength", value: "320 MPA (min)" },
      { property: "Hardness", value: "100 VPN (min)" },
      { property: "Material", value: "Welded / Seamless" },
      { property: "End Connection", value: "Threaded BSP" },
    ],
  },
  {
    id: "astm-a865",
    name: "ASTM A865",
    description: 'American Society for Testing and Materials standard for steel pipe fittings. Widely used for industrial piping systems in oil & gas, petrochemical, and heavy engineering.',
    sizeRange: '1/2" to 12"',
    rows: [
      { property: "Standard", value: "ASTM A865" },
      { property: "Size Range", value: '1/2" to 12"' },
      { property: "Thread Quality", value: "CNC Machined" },
      { property: "Steel Grade", value: "As per ASTM standard" },
      { property: "Zinc Coating", value: "As per standard specification" },
      { property: "Tensile Strength", value: "450 MPA (min)" },
      { property: "Hardness", value: "140 VPN (min)" },
      { property: "Material", value: "Welded / Seamless" },
      { property: "End Connection", value: "Threaded NPT / BSP" },
    ],
  },
]

export interface MaterialProperty {
  property: string
  is1239: string
  astm: string
}

export const materialComparison: MaterialProperty[] = [
  { property: "Tensile Strength", is1239: "320 MPA", astm: "450 MPA" },
  { property: "Hardness", is1239: "100 VPN", astm: "140 VPN" },
  { property: "Thread Quality", is1239: "CNC Machined", astm: "CNC Machined" },
  { property: "Steel Grade", is1239: "As per IS / BS", astm: "As per ASTM" },
  { property: "Zinc Coating", is1239: "As per standard", astm: "As per standard" },
  { property: "Material Type", is1239: "Welded / Seamless", astm: "Welded / Seamless" },
  { property: "Size Range", is1239: '1/2" to 6"', astm: '1/2" to 12"' },
]
