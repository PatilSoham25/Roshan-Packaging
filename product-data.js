// Product Database - Complete
const products = {
  // PACKAGING - BOPP (1-6)
  1: {
    id: 1,
    name: "Transparent BOPP Tape",
    category: "Packaging",
    type: "BOPP - Transparent",
    image: "Final/PACKAGING/BOPP/Transparent/1.jpg",
    usage_image: "Final/PACKAGING/BOPP/Transparent/1.webp", 
    description: "Crystal clear BOPP tape offering superior clarity and strong adhesion. Perfect for general-purpose packaging where visibility is important. The transparent finish ensures a professional appearance while maintaining excellent holding power on cardboard boxes, cartons, and shipping containers.",
    features: [
      "Crystal clear transparency",
      "Strong adhesive strength",
      "Weather resistant",
      "Easy tear capability",
      "Ideal for light to medium-duty sealing",
      "Professional appearance"
    ],
    specifications: {
      width: "48mm",
      thickness: "0.05mm",
      length: "100 yards",
      adhesive: "Synthetic Rubber",
      temperature: "-10°C to 60°C"
    }
  },
  2: {
    id: 2,
    name: "Brown BOPP Tape",
    category: "Packaging",
    type: "BOPP - Brown",
    image: "Final/PACKAGING/BOPP/Brown/USAGE.webp",
    
    description: "Heavy-duty brown BOPP tape designed for demanding packaging applications. Features enhanced adhesive formulation for superior holding power on corrugated boxes and cartons. Perfect for shipping, storage, and long-term protection.",
    features: [
      "Heavy-duty performance",
      "Extra strong adhesive",
      "Professional brown color",
      "UV resistant",
      "Waterproof backing",
      "Ideal for long-term storage"
    ],
    specifications: {
      width: "48mm, 72mm",
      thickness: "0.055mm",
      length: "100 yards",
      adhesive: "Acrylic",
      temperature: "-20°C to 70°C"
    }
  },
  3: {
    id: 3,
    name: "Hot Melt BOPP Tape",
    category: "Packaging",
    type: "BOPP - Hot Melt",
    image: "Final/PACKAGING/BOPP/Hotmelt/Product.jpeg",
   
    description: "High-temperature resistant BOPP tape with hot melt adhesive formulation. Excellent for applications requiring strong immediate bond and heat resistance. Perfect for industrial packaging and demanding environments.",
    features: [
      "Hot melt adhesive technology",
      "Immediate strong bond",
      "High temperature resistant",
      "Industrial-grade performance",
      "Excellent holding power",
      "Fast sealing capability"
    ],
    specifications: {
      width: "48mm",
      thickness: "0.055mm",
      length: "100 yards",
      adhesive: "Hot Melt",
      temperature: "-10°C to 80°C"
    }
  },
  4: {
    id: 4,
    name: "Milky BOPP Tape",
    category: "Packaging",
    type: "BOPP - Milky",
    image: "Final/PACKAGING/BOPP/Milky/Product.jpg",
   
    description: "Translucent milky white BOPP tape combining visibility with semi-opaque coverage. Ideal for boxes where you want to partially conceal contents while maintaining visibility. Great for retail packaging and general-purpose sealing.",
    features: [
      "Translucent milky appearance",
      "Semi-opaque coverage",
      "Strong adhesion",
      "Professional look",
      "Good balance of visibility and coverage",
      "Cost-effective solution"
    ],
    specifications: {
      width: "48mm",
      thickness: "0.055mm",
      length: "100 yards",
      adhesive: "Acrylic",
      temperature: "-15°C to 65°C"
    }
  },
  5: {
    id: 5,
    name: "Printed BOPP Tape",
    category: "Packaging",
    type: "BOPP - Printed",
    image: "Final/PACKAGING/BOPP/Printed/Product.avif",
    
    description: "Custom printed BOPP tape perfect for branding and corporate packaging. Enhance your brand visibility with custom printed tape on every package. Excellent for marketing and professional brand presentation.",
    features: [
      "Custom print capability",
      "Brand enhancement",
      "Professional appearance",
      "Strong adhesive",
      "Marketing tool",
      "Customizable designs"
    ],
    specifications: {
      width: "48mm",
      thickness: "0.055mm",
      length: "100 yards",
      adhesive: "Acrylic",
      temperature: "-10°C to 60°C"
    }
  },
  6: {
    id: 6,
    name: "Rubber Based BOPP Tape",
    category: "Packaging",
    type: "BOPP - Rubber Based",
    image: "Final/PACKAGING/BOPP/Rubber Based/Product.jpg",
   
    description: "Strong rubber-based BOPP packaging tape providing excellent adhesion and flexibility. Ideal for irregular surfaces and high-stress applications. Superior holding power for heavy-duty packaging requirements.",
    features: [
      "Rubber-based adhesive",
      "Excellent flexibility",
      "Works on irregular surfaces",
      "Strong holding power",
      "Professional performance",
      "Heavy-duty applications"
    ],
    specifications: {
      width: "48mm, 72mm",
      thickness: "0.06mm",
      length: "100 yards",
      adhesive: "Rubber Based",
      temperature: "-20°C to 75°C"
    }
  },

  // PACKAGING - OTHER (7-13)
  7: {
    id: 7,
    name: "Aluminium Foil Tape",
    category: "Packaging",
    type: "Aluminium Foil",
    image: "Final/PACKAGING/ALUMINIUM FOIL/1.jpg",
    usage_image: "Final/PACKAGING/ALUMINIUM FOIL/USAGE.jpg", 
    description: "The aluminum tape is a specialized adhesive tape featuring a soft aluminum foil backing coated with a modified acrylic adhesive and a siliconized paper liner. This range of aluminum tape rolls is ideal for applications such as insulation, ductwork, water heater vent coverage, shielding, exhaust repair, and various other personal and professional uses. It offers excellent heat resistance, waterproofing, and electrical conductivity.",
    features: [
      "Moisture proof",
      "High Adhesion Power",
      "Good ageing strength",
      "Applicable for both high temperature/low temperatures",
      "Flame retardant",
      
      "vapor-proof barrier"
    ],
    applications: [
      "Low moisture content makes this product as a good sealant.",
      "Suitable as a masking in electroplating of aluminum due to its non-contamination properties",
      "This product is a perfect recommendation for HOLDING of condenser/evaporator coils wires in appliance walls for refrigeration/AC units.",
      "A suitable PSA tape used as 'Heat Reflector'.",
      "HVAC duct wrap, protective masking and electroplating"
    ],
    specifications: {
      width: "50mm",
      thickness: "0.08mm",
      length: "50 yards",
      backing: "Aluminium Foil",
      temperature: "-40°C to 120°C"
    }
  },
  8: {
    id: 8,
    name: "Premium Duct Tape",
    category: "Packaging",
    type: "Duct Tape",
    image: "Final/PACKAGING/DUCK TAPE/1.webp",
usage_image: "Final/PACKAGING/ALUMINIUM FOIL/USAGE.jpg", 
    description: "Heavy-duty waterproof duct tape with reinforced mesh construction. Versatile solution for repairs, bundling, and temporary fixes on almost any surface. Weather-resistant backing makes it suitable for indoor and outdoor use.",
    features: [
      "Waterproof backing",
      "Reinforced mesh construction",
      "Exceptional tear resistance",
      "Weather resistant",
      "Multi-purpose application",
      "Strong adhesion to any surface"
    ],
    applications: [
      "Construction Industry: Ideal for securing AC ducting and other materials in construction projects.",
      "Repairs and Maintenance: Excellent for fixing and securing various items for long-lasting durability."
    ],
    specifications: {
      width: "48mm, 72mm",
      thickness: "0.28mm",
      length: "20 yards",
      backing: "Polyethylene with mesh",
      temperature: "-10°C to 60°C"
    }
  },
  9: {
    id: 9,
    name: "Cross Filament Tape",
    category: "Packaging",
    type: "Cross Filament",
    image: "Final/PACKAGING/CROSS FILAMENT/1.webp",
    usage_image: "Final/PACKAGING/CROSS FILAMENT/USAGE.jpg",
    description: "Cross Filament Tape provides exceptional reinforcement and durability, delivering dependable packaging performance even in demanding conditions. Its cross-woven fiberglass filaments combined with a strong adhesive make it highly resistant to tearing and stretching, making it perfect for securing heavy cartons and strengthening packages. With superior holding strength and lasting adhesion across multiple surfaces, it stands out as a trusted solution for industrial, e-commerce, and warehouse use.",
    features: [
      "Extreme Tensile Strength: Reinforced with cross-weave fiberglass filaments, providing maximum strength and preventing tearing or splitting.",
      "Superior Adhesion: Strong adhesive power for secure sealing on multiple surfaces, including cardboard, plastic, and metal.",
      "High Durability: Resistant to stretching, making it perfect for securing heavy loads or irregularly shaped objects.",
      
      "Easy to Use: Excellent handling and application, with no reside upon removal, ensuring smooth packaging processes"
      
    ],
    applications: [
      "Heavy-Duty Packaging: Secures large and heavy cartons with reinforced strength.",
      "Palletizing: Ideal for binding multiple packages together on a pallet, preventing shifting during transportation.",
      "Reinforcing Cartons: Strengthens weak or damaged packaging, ensuring goods remain intact during transit.",
      "Bundling Pipes & Tubes: Effective for keeping bundles of pipes, rods, or tubes securely together.",
      "Strapping and Holding: Replaces traditional strapping, especially for irregular or oversized packages."
    ],

    specifications: {
      width: "48mm",
      thickness: "0.08mm",
      length: "50 yards",
      backing: "Polypropylene with fibers",
      temperature: "-10°C to 65°C"
    }
  },
  10: {
    id: 10,
    name: "Monofilament Tape",
    category: "Packaging",
    type: "Monofilament",
    image: "Final/PACKAGING/MONO FILAMENT/1.webp",
    usage_image: "Final/PACKAGING/MONO FILAMENT/USAGE.jpg",
    description: "Mono filament tape is a high-strength adhesive tape reinforced with mono-directional fiberglass filaments and backed by a tough polyester or polypropylene film. It offers excellent tensile strength and resistance to abrasion, making it ideal for bundling, palletizing, and heavy-duty carton sealing. With strong adhesion and durability, it securely holds heavy packages and prevents tearing during transit. The tape is widely used in industrial packaging, export, and warehouse applications for reliable reinforcement and protection.",
    features: [
      "High tensile strength",
      "Reinforced with fiberglass filaments",
      "Strong synthetic rubber adhesive",
      "Resistant to abrasion, moisture, and impact",
      
    ],
    applications: [
      "Palletizing carton loads",
      "Reinforcing export packages",
      "Bundling heavy items",
      "Sealing and securing boxes"
    ],
    specifications: {
      width: "48mm",
      thickness: "0.07mm",
      length: "50 yards",
      backing: "Polypropylene with filament",
      temperature: "-10°C to 65°C"
    }
  },
  11: {
    id: 11,
    name: "Paper Reinforced Tape",
    category: "Packaging",
    type: "Paper Reinforced",
    image: "Final/PACKAGING/PAPER REINFORCE/1.webp",
    usage_image: "Final/PACKAGING/PAPER REINFORCE/USAGE.webp",
    description: "Kraft paper tape is a durable, eco-friendly tape made from natural kraft paper with strong adhesive properties. It is moisture-resistant, tear-resistant, and easy to tear by hand, making it ideal for sealing cartons and packaging. This tape is biodegradable and recyclable, offering a sustainable packaging solution for various industries.",
    features: [
      "Moisture-resistant and waterproof adhesive",
      "Strong adhesion and high tensile strength",
      "Tear-resistant and easy to hand-tear",
      "Eco-friendly and biodegradable",
      
    ],
    applications: [
      "Sealing cartons and packages",
      "Bundling items securely",
      "Suitable for cold storage and food packaging"
    ],
    specifications: {
      width: "48mm",
      thickness: "0.1mm",
      length: "50 yards",
      backing: "Paper reinforced",
      temperature: "-10°C to 60°C"
    }
  },
  12: {
    id: 12,
    name: "Permacel P-254 Tape",
    category: "Packaging",
    type: "Permacel P-254",
    image: "Final/PACKAGING/PARMACELL/1.jpg",
    usage_image: "Final/PACKAGING/PARMACELL/USAGE.png",
    description:"Saint-Gobain Permacel Paint Tape is a high-performance polyester tape with a strong high-tack adhesive used for paint adhesion testing according to ASTM standards. It withstands temperatures up to 130°C and is also used for insulation in electrical components like coils and small transformers. The tape is suitable for industrial and testing applications.",
    features: [
      "High-tack rubber adhesive for strong, clean bonding",
      "Durable polyester film backing",
      "Heat resistant up to 130°C",
      "Easy to remove without residue",
    ],
    applications: [
      "Insulating coils and transformers",
      "Securing electrical components",
      "General industrial masking and protection",
      "Paint and coating adhesion testing"
    ],
    specifications: {
      width: "24mm, 48mm",
      thickness: "0.07mm",
      length: "50 yards",
      adhesive: "Medical Grade",
      temperature: "-10°C to 60°C"
    }
  },
  13: {
    id: 13,
    name: "Security Tape (Packaging)",
    category: "Packaging",
    type: "Security",
    image: "Final/PACKAGING/SECURITY/1.jpg",
     usage_image: "Final/PACKAGING/SECURITY/USAGE.png",
    description: "Security tapes for packaging are high-quality, tamper-evident tapes designed to protect shipments from theft and unauthorized opening during storage and transit. These tapes display clear evidence of tampering, such as void markings, making any interference immediately noticeable. They are widely used in industries like aviation for securing boxes, luggage, bottles, and as caution tape to enhance security and prevent pilferage. ",
    features: [
      "Simple application by hand",
      "Easy to transfer",
      "Increase in sales and profits through decrease in revenue loss, less complaints & lowering costs of replacement shipments.",
      "Securing shipments throughout the entire distribution chain.",
      
    ],
    applications: [
      "Application areas include logistics monitoring, banking security, medical packaging seals, electronic goods protection and a variety of paper and plastic bags, boxes and cartons, and many more."
    ],
    specifications: {
      width: "48mm",
      thickness: "0.07mm",
      length: "50 yards",
      adhesive: "Security Grade",
      temperature: "-10°C to 60°C"
    }
  },

  // DOUBLE SIDED - AFT (14-15)
  14: {
    id: 14,
    name: "AFT - Clear",
    category: "Double Sided Tape",
    type: "AFT (Acrylic Foam Tape)",
    image: "Final/Double Sided/AFT/Clear.jpg",
    description:"Acrylic Foam Tape is a durable double-sided adhesive designed for permanent attachment of mounting trims, emblems, and body side moldings using a high-performance adhesive. Different grades of high-bond single and double-sided Acrylic and PE foam tapes, along with die-cut options from leading acrylic foam tape manufacturers, are also offered.",
    features: [
      "Thickness Available : 0.4mm, 0.8mm, 1.1mm, 1.2mm, 1.5mm & 2mm",
      "Width: As per requirement",
      "Rolls and die-cut tape options available",
      "grey, and clear acrylic foam tape options.",
      
    ],
    applications: ["Our Acrylic double sided tape is used for fixing of GI Panels, MS Sheets & Body Building Industries",
      "Acrylic adhesive tape is employed for mounted trims, emblems & body side moldings are fixed",
      "Acrylic foam tape is recommended to bond many similar or dissimilar substrates",
    ],
    specifications: {
      width: "24mm, 48mm",
      thickness: "1.0mm",
      length: "10 meters",
      adhesive: "Acrylic",
      temperature: "-20°C to 80°C"
    }

  },
  15: {
    id: 15,
    name: "AFT - Grey",
    category: "Double Sided Tape",
    type: "AFT (Acrylic Foam Tape)",
    image: "Final/Double Sided/AFT/Grey.jpg",
    description: "Grey acrylic foam double-sided tape providing excellent visibility and strong bonding. The grey color helps hide the tape for a cleaner appearance. Ideal for professional assembly and mounting applications.",
    features: [
      "Grey color for discretion",
      "Strong acrylic adhesive",
      "Conformable foam backing",
      "Professional appearance",
      "Temperature resistant",
      "Excellent holding power"
    ],
    specifications: {
      width: "24mm, 48mm",
      thickness: "1.0mm",
      length: "10 meters",
      adhesive: "Acrylic",
      temperature: "-20°C to 80°C"
    }
  },

  // DOUBLE SIDED - FOAM (16-20)
  16: {
    id: 16,
    name: "Foam Tape - Blue Black",
    category: "Double Sided Tape",
    type: "Foam Tape",
    image: "Final/Double Sided/FOAM/BLUE BLACK/1.jpg",
    description: "Blue and black colored foam tape designed for strong double-sided bonding. Ideal for mounting, sealing gaps, and assembly applications. The color combination provides visibility for alignment.",
    features: [
      "Blue and black colors",
      "Strong double-sided bond",
      "Conformable foam",
      "Easy alignment",
      "Weather resistant",
      "Gap filling capability"
    ],
    specifications: {
      width: "18mm, 24mm",
      thickness: "1.5mm",
      length: "5 meters",
      adhesive: "Acrylic",
      temperature: "-20°C to 60°C"
    }
  },
  17: {
    id: 17,
    name: "Foam Tape - Green Black",
    category: "Double Sided Tape",
    type: "Foam Tape",
    image: "Final/Double Sided/FOAM/GREEN BLACK/GREEN BLACK.jpg",
    description: "Green and black foam tape for professional bonding and mounting. The distinctive color helps with alignment and visibility. Perfect for assembly lines and precision mounting.",
    features: [
      "Green and black colors",
      "Strong adhesive bond",
      "Conformable foam",
      "Alignment visibility",
      "Professional application",
      "Excellent gap filling"
    ],
    specifications: {
      width: "18mm, 24mm",
      thickness: "1.5mm",
      length: "5 meters",
      adhesive: "Acrylic",
      temperature: "-20°C to 60°C"
    }
  },
  18: {
    id: 18,
    name: "Foam Tape - Mirror Mount",
    category: "Double Sided Tape",
    type: "Foam Tape",
    image: "Final/Double Sided/FOAM/MIRROR MOUNT TAPE/1.jpg",
    description: "Specialized foam tape designed specifically for mounting mirrors and glass. Provides strong yet removable bonding perfect for interior design applications. Holds mirrors securely without damage.",
    features: [
      "Mirror mounting optimized",
      "Removable adhesive",
      "No damage to surfaces",
      "Strong holding power",
      "Glass compatible",
      "Professional appearance"
    ],
    specifications: {
      width: "24mm",
      thickness: "2.0mm",
      length: "5 meters",
      adhesive: "Acrylic",
      temperature: "-15°C to 70°C"
    }
  },
  19: {
    id: 19,
    name: "Foam Tape - Red Black",
    category: "Double Sided Tape",
    type: "Foam Tape",
    image: "Final/Double Sided/FOAM/RED BLACK/1.jpg",
    description: "Red and black foam bonding tape ideal for assembly and bonding applications. The contrasting colors aid in alignment and visibility. Excellent for professional manufacturing and assembly work.",
    features: [
      "Red and black colors",
      "Strong bonding power",
      "Conformable foam structure",
      "Alignment assistance",
      "Weather resistant",
      "Professional grade"
    ],
    specifications: {
      width: "18mm, 24mm",
      thickness: "1.5mm",
      length: "5 meters",
      adhesive: "Acrylic",
      temperature: "-20°C to 60°C"
    }
  },
  20: {
    id: 20,
    name: "Foam Tape - Yellow White",
    category: "Double Sided Tape",
    type: "Foam Tape",
    image: "Final/Double Sided/FOAM/YELLOW WHITE/1.jpg",
    description: "Yellow and white foam tape for various bonding and mounting applications. The bright color combination provides excellent visibility for alignment and inspection. Perfect for quality control and assembly.",
    features: [
      "Yellow and white colors",
      "High visibility",
      "Strong double-sided bond",
      "Easy alignment",
      "Conformable foam",
      "Professional application"
    ],
    specifications: {
      width: "18mm, 24mm",
      thickness: "1.5mm",
      length: "5 meters",
      adhesive: "Acrylic",
      temperature: "-20°C to 60°C"
    }
  },

  // DOUBLE SIDED - OTHER (21-23)
  21: {
    id: 21,
    name: "Red Pet Tape",
    category: "Double Sided Tape",
    type: "Red Pet Tape",
    image: "Final/Double Sided/Red pet tape/Product.jpeg",
    description: "High-performance polyester double-sided tape with red coloring. Ideal for demanding bonding applications requiring excellent temperature and chemical resistance. Professional-grade performance for industrial use.",
    features: [
      "Polyester backing",
      "Temperature resistant",
      "Chemical resistant",
      "Strong adhesive",
      "Professional performance",
      "Long-lasting bonds"
    ],
    specifications: {
      width: "18mm, 24mm",
      thickness: "0.08mm",
      length: "50 meters",
      backing: "Polyester",
      temperature: "-10°C to 80°C"
    }
  },
  22: {
    id: 22,
    name: "Tissue Tape",
    category: "Double Sided Tape",
    type: "Tissue",
    image: "Final/Double Sided/Tissue tape/Product.webp",
    description: "Double-sided tissue tape is made of tissue paper on both sides coated with solvent acrylic-based adhesives and laminated with double-sided release paper. There is a wide application of D/S tissue tapes like foam Laminations, leather, paper, white goods, postal, decoration, labels, and many more applications. It is available in various thicknesses.  The products are available in a different -thicknesses suitable for various applications and temperature",
    features: [
      "Tissue paper backing coated with adhesive on one or both sides.",
      "Nearly invisible bond for aesthetic and precise applications.",
      "Custom adhesive options for varying strength, temperature, and tack requirements.",
      "Perfect for electronics, automotive, packaging, and fine assembly work.",
      
    ],
    specifications: {
      width: "12mm, 24mm",
      thickness: "0.05mm",
      length: "33 meters",
      adhesive: "Rubber",
      temperature: "0°C to 40°C"
    }
  },
  23: {
    id: 23,
    name: "Transfer Tape",
    category: "Double Sided Tape",
    type: "Transfer Tape",
    image: "Final/Double Sided/Transfer tape/Product.webp",
    description: "Professional transfer tape for decals and graphics application. Perfect for vinyl decals, signage, and professional graphics work. Helps transfer designs smoothly onto various surfaces.",
    features: [
      "Professional transfer capability",
      "Decal application optimized",
      "Clean transfer process",
      "Strong adhesion",
      "Residue-free removal",
      "Signage compatible"
    ],
    specifications: {
      width: "24mm, 48mm",
      thickness: "0.08mm",
      length: "50 meters",
      adhesive: "Acrylic",
      temperature: "-10°C to 70°C"
    }
  },

  // INSULATION (24-28)
  24: {
    id: 24,
    name: "Blue TCT",
    category: "Insulation Tape",
    type: "Blue TCT",
    image: "Final/Insulation/BLUE TCT/USAGE.jpg",
    description:  "Blue Thermal Conductive Tape (Blue TCT) is a double-sided adhesive tape designed for applications requiring both thermal transfer and strong bonding. It has a blue-colored liner for easy identification and handling. The tape is made from a thermally conductive acrylic adhesive coated on a fiberglass or film carrier, providing excellent heat dissipation, electrical insulation, and long-term adhesion stability.",
    features: [
      "High thermal conductivity (typically 1.0–1.5 W/m·K) for effective heat transfer",
      "Excellent electrical insulation properties",
      "Blue liner for easy identification and placement",
      "Shock and vibration resistant for durable performance",
      "Temperature resistance: –40 °C to +180 °C (short-term)",
      "Double-sided adhesion — strong bond on metals, ceramics, and plastics"
    ],
    applications:["Mounting LED modules and heat sinks",
      "Bonding IC chips, MOSFETs, and power transistors to cooling surfaces",
    "Battery pack assembly and power supply units",
  "CPU, GPU, and SSD heat dissipation in electronics",
"Used in home appliances and communication devices for thermal management",
"Bonding IC chips, MOSFETs, and power transistors to cooling surfaces"],
    specifications: {
      width: "18mm, 24mm",
      thickness: "0.08mm",
      length: "20 meters",
      adhesive: "Rubber",
      temperature: "-10°C to 120°C"
    }
  },
  25: {
    id: 25,
    name: "Kapton",
    category: "Insulation Tape",
    type: "Kapton",
    image: "Final/Insulation/KAPTON/1.jpg",
    usage_image:"Final/Insulation/SEAGE.jpg",
    description: "Kapton tape is made from polyimide film coated with a silicone adhesive. It maintains its physical, chemical, and electrical properties across a wide temperature range — typically from -269°C to +260°C.",
    features: ["Excellent heat and chemical resistance",
      "Electrical insulation properties",
      "Leaves no residue after removal",
      "Resistant to radiation and solvents"
    ],
    applications:[
"Masking during soldering, wave soldering, and powder coating",
"Insulating circuit boards, coils, and transformers",
"Used in 3D printing beds for better adhesion",
"Common in aerospace and automotive components"
    ],
    specifications: {
      width: "12mm, 24mm, 50mm",
      thickness: "0.06mm",
      length: "33 meters",
      adhesive: "Acrylic",
      temperature: "-40°C to 260°C"
    }
  },
  26: {
    id: 26,
    name: "Nitto 923S",
    category: "Insulation Tape",
    type: "Nitto 923S",
    image: "Final/Insulation/NITTO 923s/1.jpg",
    description:"Nitto 923S is a double-coated adhesive tape that uses a strong acrylic adhesive on both sides, providing excellent adhesion to metals, plastics, and painted surfaces. It features a PET carrier film for dimensional stability and easy handling.",
    features: [
      "The non-adhesive side exhibits excellent features of PTFE such as desirable electrical properties and resistance to heat, weather, chemical, and water (water-shedding), and non-adhesiveness.",
      "Superior tensile strength.","Superior flame resistance."
    ],
    applications:[
"General industrial bonding where thin, strong adhesive layers are required",
"Fixing electronic components and automotive parts",
"Roll wrapping: Protects laminator rollers with durable, strong wrapping.",
"Coil insulation: Provides Class H heat-resistant coil insulation.",
"Lamination: Acts as a smooth sliding layer on metals, plastics, and ceramics.",
"Endless belts: Forms continuous belts to reduce tape replacement time."
    ],
    specifications: {
      width: "18mm, 24mm, 48mm",
      thickness: "0.18mm",
      length: "25 meters",
      adhesive: "Rubber",
      temperature: "-20°C to 130°C"
    }
  },
  27: {
    id: 27,
    name: "PVC",
    category: "Insulation Tape",
    type: "PVC",
    image: "Final/Insulation/PVC/Product.webp",
    usage_image:"Final/Insulation/PVC/Usage.jpg",
    description: "PVC Electrical Tapes are high-quality insulation products engineered to deliver outstanding performance in a wide range of electrical uses. With strong adhesive properties, long-lasting durability, and dependable insulation, these tapes help maintain safety and efficiency in electrical work. Offered in various colors, PVC Electrical Tapes are ideal for labeling, organizing, and shielding wires and cables.",
    features: [
      "Exceptional Insulation",
      "Strong Adhesion",
"Flexible & Easy to Apply",
"Heat & Moisture Resistant",
"Multiple Color Options"

    ],
    applications:[
"Electrical Insulation",
"Wire Bundling & Harnessing",
"Color Coding of Wires",
"Repair & Maintenance"

    ],

    specifications: {
      width: "18mm, 24mm",
      thickness: "0.15mm",
      length: "10 meters",
      adhesive: "Rubber",
      temperature: "-10°C to 80°C"
    }
  },
  28: {
    id: 28,
    name: "Self-Amalgamating Tape",
    category: "Insulation Tape",
    type: "Self-Amalgamating",
    image: "Final/Insulation/self amalgamating tape/Product.jpg",
    usage_image:"Final/Insulation/self amalgamating tape/Usage.jpg",
    description: " Self-Amalgamating Tape is a high-performance, rubber-based tape that self-bonds when stretched and wrapped, creating a seamless waterproof and insulating layer. Designed for jointing, repairing, and protecting cables and electrical components, it is widely used in power, telecom, and marine applications. Its excellent resistance to moisture, ozone, and temperature extremes makes it essential for professional insulation and repair tasks",
    features: [
     " Excellent electrical and physical insulation properties, suitable for high-voltage tasks​",
"Rapid amalgamation under tension, forming void-free homogeneous wraps​",
"Compatible with a wide range of cable insulation materials (including polyethylene, PVC, neoprene, butyl)​",

"Excellent resistance to moisture, ozone, and environmental stresses​",
"Clean removal for temporary applications"

    ],
    applications:[
      "Insulating and repairing power cables up to 69 kV (EPR type)​",
      "Waterproofing, splicing, and protecting cables and components​",
      "Repairing and sealing dielectric cable joints​",
      "Corrosion protection of metal pipes and connections​",
      "Temporary or permanent insulation in electrical installations​"
    ],
    specifications: {
      width: "19mm, 25mm",
      thickness: "0.5mm",
      length: "4 meters",
      material: "Silicone",
      temperature: "-50°C to 260°C"
    }
  },

  // PROTECTION (29-31)
  29: {
    id: 29,
    name: "SPT Blue",
    category: "Protection Tape",
    type: "SPT Blue",
    image: "Final/Protection/SPT blue/Product.jpeg",
    usage_image: "Final/Protection/SPT blue/USAGE.jpg",
    description: "Blue protective tape for surface protection during manufacturing and transportation. Prevents scratches and damage to surfaces. Easy to apply and remove without residue.",
    features: [
      "Surface protection",
      "Blue color identification",
      "Easy application",
      "Residue-free removal"
      
    ],
    specifications: {
      width: "50mm",
      thickness: "0.08mm",
      length: "100 meters",
      backing: "Polyethylene",
      temperature: "-10°C to 60°C"
    }
  },
  30: {
    id: 30,
    name: "SPT BW",
    category: "Protection Tape",
    type: "SPT BW",
    image: "Final/Protection/SPT BW/1.webp",
    usage_image: "Final/Protection/SPT BW/USAGE.webp",
    description: "Black and white protection tape for marking and surface protection. The striped pattern provides high visibility for marking and identification. Ideal for safety markings and protective applications.",
    features: [
      "Black and white stripes",
      "High visibility",
      "Protection and marking",
      "Easy identification",
      "Professional application",
      "Safety compliant"
    ],
    specifications: {
      width: "48mm, 50mm",
      thickness: "0.08mm",
      length: "100 meters",
      backing: "Polyethylene",
      temperature: "-10°C to 60°C"
    }
  },
  31: {
    id: 31,
    name: "SPT TR",
    category: "Protection Tape",
    type: "SPT TR",
    image: "Final/Protection/SPT TR/1.jpg",
    usage_image: "Final/Protection/SPT TR/USAGE.jpg",
    description: "Transparent protective tape for all surfaces. Provides clear protection without obscuring underlying materials. Perfect for protecting sensitive surfaces and electronic components.",
    features: [
      "Clear transparent appearance",
      "Universal surface protection",
      "Non-invasive",
      "Easy to apply",
      "Component safe",
      "Professional performance"
    ],
    specifications: {
      width: "50mm",
      thickness: "0.08mm",
      length: "100 meters",
      backing: "Polyethylene",
      temperature: "-10°C to 60°C"
    }
  },

  // SAFETY (32-34)
  32: {
    id: 32,
    name: "Anti-Skit",
    category: "Safety Tapes",
    type: "Anti-Skit",
    image: "Final/SAFETY/ANTI SKIT/1.webp",
    usage_image:"Final/SAFETY/ANTI SKIT/USAGE.jpg",
    description: "Our Anti-Skid Tape is your ultimate solution for preventing slips and ensuring safety in any environment. Whether you're securing your home, workplace, or public spaces, this tape provides reliable traction and peace of mind.",
    features: [
      " Reliable traction: Strong grip on various surfaces",
      "Easy application: Durable and long-lasting.",
    " Wet condition safety: Effective even when wet.",
      "Versatile use: Suitable for indoor and outdoor use",

    ],
    applications:[

"Ramps & Inclined Surfaces – Ensures safety for people and trolleys on sloped areas.",
"Industrial Floors – Prevents slipping in factories, workshops, and warehouses.",

"Transport Vehicles – Used on bus, train, and aircraft steps for passenger safety.",
"Loading Docks & Platforms – Reduces accident risk in high-traffic loading areas.",
"Outdoor Areas – Suitable for walkways, parking lots, and construction sites."

    ],
    specifications: {
      width: "50mm",
      thickness: "0.8mm",
      length: "18 meters",
      surface: "Abrasive",
      temperature: "-20°C to 70°C"
    }
  },
  33: {
    id: 33,
    name: "Floor Marking",
    category: "Safety Tapes",
    type: "Floor Marking",
    image: "Final/SAFETY/FLOOR MARKING/1.jpg",
    usage_image:"Final/SAFETY/FLOOR MARKING/1.webp",
    description: "Floor marking tape is used to clearly define specific areas. Made from durable PVC, it offers excellent resistance to solvents, oil, and water. The tape features a strong natural rubber adhesive that ensures premium bonding and long-lasting performance. It is ideal for marking and separating zones, identifying hazardous areas like construction sites, and serving as an effective safety warning indicator.",
    features: [
      "Good Resistance to chemical & other moving objects.",

"Available in various sizes & colors",
"Bright Color",
"High Strength",
"Rubber Adhesive Tape"

    ],
    applications:[
"Used for Safety Identification and Lane Marking for storage segmentation.",
"To mark hurdles like wiring lines, man hole or other safety areas in exhibition.",
"Great for office and industrial use"

    ],
    specifications: {
      width: "50mm, 100mm",
      thickness: "0.08mm",
      length: "45 meters",
      material: "Vinyl",
      temperature: "-20°C to 70°C"
    }
  },
  34: {
    id: 34,
    name: "Security",
    category: "Safety Tapes",
    type: "Security",
    image: "Final/SAFETY/SECURITY/1.jpg",
    usage_image:"Final/SAFETY/SECURITY/USAGE.png",
    description:"Security tapes for packaging are high-quality, tamper-evident tapes designed to protect shipments from theft and unauthorized opening during storage and transit. These tapes display clear evidence of tampering, such as void markings, making any interference immediately noticeable. They are widely used in industries like aviation for securing boxes, luggage, bottles, and as caution tape to enhance security and prevent pilferage. ",
    features: [
      "Simple application by hand",

"Easy to transfer",
"Increase in sales and profits through decrease in revenue loss, less complaints & lowering costs of replacement shipment",
"Securing shipments throughout the entire distribution chain."

    ],
    applications:["Application areas include logistics monitoring , banking security, medical packaging seals, electronic goods protection and a variety of paper and plastic bags, boxes and cartons, and many more."],
    specifications: {
      width: "50mm, 100mm",
      thickness: "0.09mm",
      length: "45 meters",
      material: "Reflective Microprism",
      temperature: "-20°C to 70°C"
    }
  },
  35: {
    id: 35,
    name: "Tesa 2410 BOPP",
    category: "Tesa",
    type: "Tesa 2410 BOPP",
    image: "Final/TESA/2410 BOPP/1.jpg",
    // usage_image: "path/to/usage.jpg",
    description: "A high-performance BOPP (Biaxially Oriented Polypropylene) packaging tape with a natural rubber adhesive system designed for reliable carton sealing and general packaging applications. It offers strong bonding on corrugated boxes including those made from recycled paper.",
    features: [
      "BOPP film backing with natural rubber adhesive",
      "Shrink- and wrinkle-resistant",
      "Good UV resistance",
      "Printable surface suitable for branding"
    ],
    applications: [
      "Food and consumer goods packaging",
      "Bundling and palletizing",
      "Carton sealing and packaging operations",
      "Printing and lamination processes"
    ],
    specifications: {
      width: "",
      thickness: "",
      length: "",
      adhesive: "",
      temperature: ""
    }
  },
  36: {
    id: 36,
    name: "Tesa 4657 00 - 01",
    category: "Tesa",
    type: "Tesa 4657 00 - 01",
    image: "/Final/TESA/4657 00 - 01/1.jpg",
    usage_image: "Final/TESA/4657 00 - 01/USAGE.jpg",
    description: "A premium acrylic-coated cloth tape with high-quality natural rubber adhesive designed for heavy-duty industrial applications requiring durability, abrasion resistance, and strong adhesion.",
    features: [
      "High tensile strength cloth backing",
      "Excellent abrasion and wear resistance",
      "Strong adhesion to rough surfaces",
      "Resistant to aging and temperature",
      "Easy hand tearability"
    ],
    applications: [
      "Automotive paint shop masking",
      "Hole covering in car body panels",
      "Powder coating masking",
      "Butt splicing and end tabbing",
      "Core starting and overlap splicing"
    ],
    specifications: {
      width: "",
      thickness: "",
      length: "",
      adhesive: "",
      temperature: ""
    }
  },
  37: {
    id: 37,
    name: "Tesa 4848",
    category: "Tesa",
    type: "Tesa 4848",
    image: "Final/TESA/4848/2.jpg",
    usage_image: "Final/TESA/4848/image.jpg",
    description: "tesa 4848 is a transparent PE (polyethylene) surface protection film with acrylic adhesive designed to temporarily protect sensitive surfaces from dirt, paint, chemicals, moisture, and mechanical damage during production, transport, or installation processes. It is UV-resistant and can be removed cleanly without residue after several weeks of use.",
    features: [
      "PE film backing with acrylic adhesive",
      "Residue-free removal for up to ~4 weeks after application",
      "Protects surfaces from paint droplets, chemicals, moisture, and contamination",
      "Thin and flexible film for easy application on large areas",
      "Good resistance to aging and environmental exposure"
    ],
    applications: [
      "Protection of carpets in vehicles during manufacturing or servicing",
      "Temporary protection of vehicle interiors and surfaces during assembly processes",
      "Protection of glass, plastic, aluminum, and finished surfaces during production",
      "Temporary surface protection during building construction",
      "Masking large glass areas during painting or facade work"
    ],
    specifications: {
      width: "",
      thickness: "",
      length: "",
      adhesive: "",
      temperature: ""
    }
  },
  38: {
    id: 38,
    name: "Tesa 4952 MMT",
    category: "Tesa",
    type: "Tesa 4952 MMT",
    image: "Final/TESA/4952 MMT/1.jpg",
    usage_image: "Final/TESA/4952 MMT/USAGE.jpg",
    description: "tesa 4952 is a double-sided PE foam tape with modified acrylic adhesive used for constructive mounting applications. The conformable foam backing helps compensate for uneven surfaces and material expansion.",
    features: [
      "Suitable for indoor and outdoor applications",
      "Resistant to UV, water, humidity, chemicals, and aging",
      "Compensates for thermal expansion of different materials",
      "Good shock absorption and sealing capability",
      "Strong bonding even with low application pressure"
    ],
    applications: [
      "Furniture mirror mounting",
      "Automotive mirror mounting",
      "Mounting decorative panels and signage",
      "Fixing trims and profiles"
    ],
    specifications: {
      width: "",
      thickness: "",
      length: "",
      adhesive: "",
      temperature: ""
    }
  },
  39: {
    id: 39,
    name: "Tesa 4965",
    category: "Tesa",
    type: "Tesa 4965",
    image: "Final/TESA/4965/1.jpg",
    usage_image: "Final/TESA/4965/USAGE.jpg",
    description: "Tesa 4965 is a high-performance transparent double-sided polyester film tape coated with a robust acrylic adhesive, designed for demanding bonding applications. It offers excellent shear strength, outstanding temperature resistance, and reliable adhesion to both high-energy and low-energy surfaces. Known for its long-term durability and UV, chemical, and aging resistance, Tesa 4965 is ideal for mounting, laminating, and permanent fastening across industries like automotive, electronics, printing, and general manufacturing.",
    features: [
      "Strong adhesion to LSE & HSE surfaces",
      "Excellent temperature resistance",
      "UV, chemical & aging resistance",
      "High-strength acrylic adhesive",
      "Suitable for demanding industrial applications"
    ],
    applications: [
      "Bonding in automotive interiors",
      "Mounting of plastic and metal components",
      "Electronics assembly and device mounting",
      "Lamination on foam, films, and fabrics",
      "Fixing rubber profiles and decorative trims"
    ],
    specifications: {
      width: "",
      thickness: "",
      length: "",
      adhesive: "",
      temperature: ""
    }
  },
  40: {
    id: 40,
    name: "Tesa 4968",
    category: "Tesa",
    type: "Tesa 4968",
    image: "Final/TESA/4968/1.jpg",
    // usage_image: "Final/TESA/4968/",
    description: "tesa 4968 is a double-sided mounting tape designed for reliable bonding on rough or dusty surfaces and long-term industrial use.",

    features: [
      "Strong bonding on rough surfaces",
      "High adhesion performance",
      "Reliable bonding on different substrates",
      "Suitable for long-term applications"
    ],
    applications: [
      "Mounting decorative components",
      "Industrial assembly applications",
      "Signage and display mounting",
      "Bonding plastic and metal parts"
    ],
    specifications: {
      width: "",
      thickness: "",
      length: "",
      adhesive: "",
      temperature: ""
    }
  },
  41: {
    id: 41,
    name: "Tesa 7044 ACX",
    category: "Tesa",
    type: "Tesa 7044 ACX",
    image: "Final/TESA/7044 ACX/Screenshot 2026-03-11 175421.png",
    // usage_image: "Final/TESA/4968/",
    description: "tesa ACXplus 7044 is a high-performance acrylic foam tape designed for structural bonding applications in industry and construction.",

    features: [
      "High-performance acrylic foam core with pure acrylic adhesive",
      "Very high bonding strength on metals, plastics, and glass",
      "Compensates for thermal expansion of bonded materials",
      "Excellent temperature and weather resistance"
    ],
    applications: [
      "Touch panel bonding (e.g., washing machines)",
      "Furniture component mounting",
      "Mounting decorative panels such as refrigerator glass doors"
    ],
    specifications: {
      width: "",
      thickness: "",
      length: "",
      adhesive: "",
      temperature: ""
    }
  },
  42: {
    id: 42,
    name: "Tesa 7062 ACX",
    category: "Tesa",
    type: "Tesa 7062 ACX",
    image: "Final/TESA/7062 ACX/1.jpg",
    usage_image: "Final/TESA/7062 ACX/USAGE.jpg",
    description: "tesa ACXplus 7062 is a double-sided acrylic foam tape (500 µm) designed for permanent bonding of demanding substrates. It provides very high adhesion, excellent stress dissipation, and reliable bonding on powder-coated metals and plastics. The viscoelastic acrylic core compensates for thermal expansion, ensuring long-term bonding performance in industrial applications.",

    features: [
      "Very high adhesion on hard-to-bond substrates such as powder-coated metals and plastics",
      "Viscoelastic acrylic foam core that absorbs stress and compensates for thermal expansion",
      "High immediate tack and peel adhesion",
      "Designed for permanent indoor mounting applications"
    ],
    applications: [
      "Bonding bumper rails and automotive components",
      "Mounting emblems, trims, and decorative elements",
      "Mounting decorative components and profiles",
      "Fixing decorative parts in appliances",
      "Used in industries such as elevators, extrusion equipment, transportation systems, and interior fit-out projects for structural bonding tasks."
    ],
    specifications: {
      width: "",
      thickness: "",
      length: "",
      adhesive: "",
      temperature: ""
    }
  },
  43: {
    id: 43,
    name: "Tesa 50551",
    category: "Tesa",
    type: "Tesa 50551",
    image: "Final/TESA/50551/1.jpg",
    usage_image: "Final/TESA/50551/Usage.jpg",
    description: "tesa 50551 is a temporary surface protection tape consisting of a PE film with an acrylic adhesive designed to protect sensitive surfaces during manufacturing, storage, and transportation. It offers good UV resistance and clean residue-free removal, making it suitable for protecting surfaces such as metal sheets, plastics, and glass.",

    features: [
      "PE film backing with acrylic adhesive",
      "Good UV resistance for outdoor exposure",
      "Protects surfaces from scratches, dust, and contamination",
      "Residue-free removal after temporary protection"
    ],
    applications: [
      "Temporary protection of metal sheets such as aluminum or stainless steel",
      "Protection of plastic and glass surfaces during manufacturing",
      "Surface protection during storage, processing, and transportation",
      "Used in industries like metal processing, appliance manufacturing, and construction"
    ],
    specifications: {
      width: "",
      thickness: "",
      length: "",
      adhesive: "",
      temperature: ""
    }
  },
  44: {
    id: 44,
    name: "Tesa 51025",
    category: "Tesa",
    type: "Tesa 51025",
    image: "Final/TESA/51025/1.jpg",
    usage_image: "Final/TESA/51025/Usage.jpg",
    description: "tesa 51025 is a PET cloth wire harness tape with rubber adhesive designed for bundling and protecting automotive wiring harnesses. It offers good abrasion resistance, flexibility, and noise damping properties, making it suitable for cable protection in vehicle interiors and general wire harness applications.",

    features: [
      "PET cloth backing with rubber adhesive",
      "High flexibility and conformability",
      "Noise damping properties",
      "Good abrasion resistance"
    ],
    applications: [
      "Automotive wire harness wrapping",
      "Interior cable protection",
      "Automotive interior noise reduction",
      "Electrical cable bundling"
    ],
    specifications: {
      width: "",
      thickness: "",
      length: "",
      adhesive: "",
      temperature: ""
    }
  },
  45: {
    id: 45,
    name: "Tesa 51025",
    category: "Tesa",
    type: "Tesa 51025",
    image: "Final/TESA/51025/1.jpg",
    usage_image: "Final/TESA/51025/Usage.jpg",
    description: "tesa 51036 is a PET cloth wire harness tape with advanced acrylic adhesive designed for protecting and bundling automotive wiring harnesses in high-temperature areas. It provides excellent abrasion resistance, high temperature stability, and strong adhesion, making it suitable for demanding automotive environments such as engine compartments.",

    features: [
      "Very high abrasion resistance",
      "High temperature resistance for engine compartments",
      "Strong adhesive performance",
      "Durable and flexible construction"
    ],
    applications: [
      "Engine compartment wire harness protection",
      "Automotive electrical insulation",
      "Protection against vibration and wear",
      "Cable bundling in high-temperature zones"
    ],
    specifications: {
      width: "",
      thickness: "",
      length: "",
      adhesive: "",
      temperature: ""
    }
  }
};