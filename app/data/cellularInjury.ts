// No external imports - completely self-contained

export interface SelfCheckQuestion {
  id: number;
  question: string;
}

export interface TeachingReceipt {
  mastered: string[];
  selfCheckQuestions: SelfCheckQuestion[];
}

export interface Section {
  id: number;
  title: string;
  content: string;
  isDeepDive?: boolean;
}

export interface Chapter {
  moduleSlug: string;
  chapterTitle: string;
  sections: Section[];
  teachingReceipt: TeachingReceipt;
}

export const cellularInjuryChapter: Chapter = {
  moduleSlug: "cellular-injury",
  chapterTitle: "Cellular Injury & Adaptation CRASHCHAPTER™",
  sections: [
    {
      id: 0,
      title: "The City Under Stress (The Marable™)",
      content: `Imagine a bustling city. When a storm hits, the city doesn't just collapse—it adapts. Homes get reinforced, power grids reroute, and emergency services activate. But if the storm is too severe or lasts too long, damage becomes irreversible.

Your cells work the same way. When faced with stress (hypoxia, toxins, infections), they don't immediately die. They adapt, change, and try to survive. But cross a threshold, and injury becomes irreversible.

This chapter is about understanding that threshold—the point of no return—and how cells respond before and after crossing it.`,
    },
    {
      id: 1,
      title: "Cellular Adaptations: Survival Strategies",
      content: `Before cells die, they adapt. Think of these as the city's emergency responses:

**Hypertrophy:** Cells get bigger
- Example: Bodybuilder's muscles, pregnant uterus
- Why: Increased workload demands more function
- Mechanism: ↑ protein synthesis, ↑ organelles

**Hyperplasia:** More cells are made
- Example: Endometrial thickening, liver regeneration
- Why: Increased demand or hormonal stimulation
- Mechanism: Growth factor signaling → mitosis

**Atrophy:** Cells shrink
- Example: Muscle wasting from disuse, brain atrophy in Alzheimer's
- Why: Decreased workload, loss of innervation, aging
- Mechanism: ↓ protein synthesis, ↑ autophagy (self-eating)

**Metaplasia:** One cell type replaces another
- Example: Smoker's lung (ciliated columnar → squamous)
- Why: Better suited to handle chronic irritation
- Risk: Precancerous (can progress to dysplasia → cancer)`,
    },
    {
      id: 2,
      title: "Reversible Injury: The Warning Stage",
      content: `This is cellular injury you can still reverse if you act fast. Like a car engine overheating—turn it off in time, and it recovers.

**Key Features:**
- Cell swelling (cytoplasmic swelling, organelle swelling)
- Fatty change (lipid accumulation—especially in liver, heart)
- Blebs (membrane blebbing)
- Loss of microvilli
- ER swelling

**Why it happens:**
- ↓ ATP production (mitochondria fail)
- Na⁺/K⁺ pump fails → Na⁺ and water rush in → swelling
- Glycolysis switches on → lactic acid → ↓ pH
- Ribosomes detach → ↓ protein synthesis

**Clinical example:** Ischemic heart during angina (chest pain). Blood flow returns, cells recover.`,
    },
    {
      id: 3,
      title: "Irreversible Injury: The Point of No Return",
      content: `Cross this line, and the cell is dead. The engine seized up—no going back.

**Key Features:**
- Severe mitochondrial damage (unable to make ATP)
- Membrane rupture (cell leaks)
- Lysosomal enzyme release (cell digests itself)
- Nuclear changes (pyknosis, karyorrhexis, karyolysis)
- Ca²⁺ influx (triggers death pathways)

**The critical threshold:**
- Mitochondrial permeability transition pore (MPTP) opens
- Ca²⁺ floods in
- Cytochrome C leaks out → apoptosis
- Membrane integrity lost → necrosis

**Clinical example:** Myocardial infarction (heart attack). Cells die within 20-40 minutes of complete ischemia.`,
    },
    {
      id: 4,
      title: "Necrosis: Messy Cell Death",
      content: `Necrosis is uncontrolled, accidental cell death. It's like a building exploding—debris everywhere, inflammation follows.

**Types of Necrosis:**

**1. Coagulative Necrosis (most common)**
- Architecture preserved (ghost cells)
- Proteins denature, enzymes destroyed
- Example: Heart attack, kidney infarct

**2. Liquefactive Necrosis**
- Tissue turns to liquid
- Enzyme-rich tissues (brain, bacterial infection)
- Example: Brain infarct, abscess

**3. Caseous Necrosis**
- Cheese-like appearance
- Granulomatous inflammation
- Example: Tuberculosis

**4. Fat Necrosis**
- Adipose tissue breakdown
- Chalky white deposits (Ca²⁺ soaps)
- Example: Pancreatitis, breast trauma

**5. Fibrinoid Necrosis**
- Blood vessel walls
- Immune complexes + fibrin
- Example: Vasculitis, malignant hypertension

**6. Gangrenous Necrosis**
- Dry (coagulative) or wet (liquefactive + infection)
- Example: Diabetic foot, bowel ischemia`,
    },
    {
      id: 5,
      title: "Apoptosis: Controlled Cell Death",
      content: `Apoptosis is clean, programmed suicide. The cell packages itself neatly and is eaten by macrophages—no inflammation.

**When does it happen?**
- Normal development (webbed fingers separate, tadpole tail disappears)
- Immune system (killing infected/cancerous cells)
- Hormone withdrawal (endometrial shedding during period)
- DNA damage (p53 activation)

**The Process:**
1. Cell shrinks (condensation)
2. Chromatin condenses (pyknosis)
3. Membrane blebs (apoptotic bodies)
4. Macrophages eat it (no inflammation)

**Two Pathways:**

**Intrinsic (Mitochondrial):**
- DNA damage, hypoxia, toxins
- Cytochrome C released
- Caspase-9 activated

**Extrinsic (Death Receptor):**
- Fas ligand or TNF binds receptor
- Caspase-8 activated

Both pathways converge → Caspase-3 → cell death.`,
    },
    {
      id: 6,
      title: "Ischemia-Reperfusion Injury: The Paradox",
      content: `Here's something strange: Restoring blood flow after ischemia can WORSEN injury. It's like jump-starting a flooded engine—you can blow it up.

**Why does this happen?**

**During Ischemia:**
- ATP depleted
- Anaerobic glycolysis → lactic acid
- Ca²⁺ accumulates
- Cells stressed but holding on

**During Reperfusion:**
- O₂ returns → free radicals (ROS) generated
- Ca²⁺ overload triggers cell death
- Inflammatory cells rush in → more damage
- Complement activation

**Clinical examples:**
- Thrombolysis for MI (clot-busting drugs)
- Organ transplantation (kidney, liver)
- Stroke treatment (restoring blood flow)

**How to prevent it:**
- Antioxidants (vitamin E, glutathione)
- Calcium channel blockers
- Gradual reperfusion (controlled)`,
    },
    {
      id: 7,
      title: "Free Radical Injury: The Cellular Rust",
      content: `Free radicals are unstable molecules with unpaired electrons. They steal electrons from other molecules, causing chain reactions of damage—like rust spreading across metal.

**Common Free Radicals:**
- Superoxide (O₂⁻)
- Hydrogen peroxide (H₂O₂)
- Hydroxyl radical (•OH)

**Sources:**
- Normal metabolism (mitochondrial respiration)
- Inflammation (neutrophils make ROS to kill bacteria)
- Radiation, toxins, smoking

**Damage Caused:**
- Lipid peroxidation (membrane damage)
- DNA mutations (cancer risk)
- Protein denaturation (enzyme dysfunction)

**Defense Mechanisms:**
- Superoxide dismutase (SOD) → converts O₂⁻ to H₂O₂
- Catalase → converts H₂O₂ to water
- Glutathione peroxidase → neutralizes peroxides
- Vitamins A, C, E (antioxidants)

**Clinical example:** Reperfusion injury, aging, neurodegenerative diseases (Alzheimer's, Parkinson's).`,
    },
    {
      id: 8,
      title: "Chemical and Physical Injury: External Threats",
      content: `Cells face attacks from the environment. Some injuries are obvious (burns, toxins), others are subtle (chronic exposure).

**Chemical Injuries:**

**Direct toxicity:**
- Heavy metals (lead, mercury)
- Alcohol (liver damage)
- Carbon tetrachloride (CCl₄ → free radicals)

**Conversion to toxic metabolites:**
- Acetaminophen (Tylenol) → NAPQI (liver toxic)
- Carbon monoxide (CO) → binds hemoglobin → hypoxia

**Physical Injuries:**

**Temperature:**
- Heat → protein denaturation, burns
- Cold → frostbite, ice crystal formation

**Radiation:**
- Ionizing (X-rays, gamma rays) → DNA breaks
- UV light → skin cancer, sunburn

**Mechanical trauma:**
- Crush injury, abrasions
- Shear stress (blood vessels, brain injury)

**Clinical pearl:** Many drugs are safe until metabolized (acetaminophen is fine at normal doses, toxic in overdose because detox pathways saturate).`,
    },
    {
      id: 9,
      title: "Accumulations: When Cells Hoard",
      content: `Sometimes cells can't process or get rid of substances, so they accumulate. Think of it like a house with too much junk—eventually it stops functioning.

**Types of Accumulations:**

**1. Lipids:**
- Fatty liver (steatosis) from alcohol, diabetes, obesity
- Cholesterol (atherosclerosis)

**2. Proteins:**
- Hyaline change (kidney disease, alcoholic liver)
- Amyloid (Alzheimer's, multiple myeloma)

**3. Glycogen:**
- Glycogen storage diseases (enzyme defects)

**4. Pigments:**
- Lipofuscin (aging pigment—"wear and tear")
- Melanin (tanning, melanoma)
- Hemosiderin (iron overload—hemochromatosis)
- Bilirubin (jaundice)
- Carbon (anthracosis from smoking/pollution)

**Clinical example:** Fatty liver disease (NAFLD) is reversible if caught early (stop drinking, lose weight). Progress to cirrhosis, and it's irreversible.`,
    },
    {
      id: 10,
      title: "Deep Dive: Molecular Mechanisms of Cell Death",
      content: `**The Bcl-2 Family:**
These proteins control the mitochondrial pathway of apoptosis. They're the gatekeepers of life and death.

**Pro-survival:** Bcl-2, Bcl-xL (prevent cytochrome C release)
**Pro-death:** Bax, Bak (punch holes in mitochondria)

Cancer cells often overexpress Bcl-2 → resist apoptosis → keep growing.

**Autophagy: Self-Eating for Survival:**
Cells digest their own components to survive starvation. It's recycling—break down old proteins and organelles for energy.

**Process:**
1. Autophagosome forms (double membrane)
2. Fuses with lysosome
3. Contents degraded and recycled

**When it helps:** Starvation, clearing damaged organelles
**When it hurts:** Excessive autophagy → autophagic cell death

**p53: The Guardian of the Genome:**
When DNA is damaged, p53 activates. It can:
- Stop cell cycle (give time for repair)
- Activate DNA repair enzymes
- Trigger apoptosis (if damage is irreversible)

**Why it matters:** p53 is mutated in >50% of cancers. Without it, damaged cells keep dividing → cancer.

**Necroptosis: Programmed Necrosis:**
A newly discovered pathway—controlled necrosis (not accidental). Triggered by death receptors when apoptosis is blocked (e.g., by viruses).

**Clinical relevance:** Potential drug target for neurodegenerative diseases, heart attacks, strokes.`,
      isDeepDive: true,
    },
  ],
  teachingReceipt: {
    mastered: [
      "Cellular adaptations (hypertrophy, hyperplasia, atrophy, metaplasia)",
      "Reversible vs. irreversible cell injury",
      "Types of necrosis (coagulative, liquefactive, caseous, fat, fibrinoid, gangrenous)",
      "Apoptosis pathways (intrinsic and extrinsic)",
      "Ischemia-reperfusion injury mechanisms",
      "Free radical damage and antioxidant defenses",
      "Chemical and physical cell injury",
      "Intracellular accumulations (lipids, proteins, pigments)",
      "Molecular mechanisms of cell death (Bcl-2, p53, autophagy)",
    ],
    selfCheckQuestions: [
      {
        id: 0,
        question: "What's the difference between hypertrophy and hyperplasia? Give an example of each.",
      },
      {
        id: 1,
        question: "Why does metaplasia increase cancer risk? Use Barrett's esophagus as an example.",
      },
      {
        id: 2,
        question: "What are the key features that distinguish reversible from irreversible cell injury?",
      },
      {
        id: 3,
        question: "A patient has a heart attack. What type of necrosis occurs in the heart? Why?",
      },
      {
        id: 4,
        question: "Explain why reperfusion injury can worsen tissue damage after ischemia.",
      },
      {
        id: 5,
        question: "What's the difference between necrosis and apoptosis in terms of inflammation?",
      },
      {
        id: 6,
        question: "How do free radicals cause cellular damage? Name 3 antioxidant defense mechanisms.",
      },
      {
        id: 7,
        question: "Why does acetaminophen (Tylenol) overdose cause liver failure?",
      },
      {
        id: 8,
        question: "What's the role of p53 in preventing cancer? Why is it called the 'guardian of the genome'?",
      },
      {
        id: 9,
        question: "Describe the intrinsic (mitochondrial) pathway of apoptosis. What triggers it?",
      },
    ],
  },
};
