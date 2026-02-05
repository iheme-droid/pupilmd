export interface Section {
  id: number;
  title: string;
  content: string;
  isDeepDive: boolean;
}

export interface TeachingReceipt {
  mastered: string[];
  selfCheckQuestions: string[];
}

export interface CrashChapter {
  chapterTitle: string;
  moduleSlug: string;
  sections: Section[];
  teachingReceipt: TeachingReceipt;
}

export const cellularInjuryChapter: CrashChapter = {
  chapterTitle: "Cellular Injury & Adaptation",
  moduleSlug: "cellular-injury",
  sections: [
    {
      id: 0,
      title: "Marable™: The City Under Siege",
      content: `Imagine a bustling city—let's call it Cell City. This city has power plants (mitochondria), a waste management system (lysosomes), a city hall that stores all the blueprints and laws (nucleus with DNA), and a police force maintaining order (proteins and enzymes).

Cell City thrives when everything runs smoothly. The power plants generate energy, waste gets cleared efficiently, and the city follows its master plans to build new structures and maintain existing ones.

But what happens when this city faces challenges? What if the power supply gets cut? What if toxic waste starts accumulating? What if the blueprints in city hall get damaged?

Let's watch what happens to Cell City under different types of stress—and how it tries to adapt, compensate, and sometimes fails entirely. This story will help you understand exactly what happens to your cells when they face injury.`,
      isDeepDive: false,
    },
    {
      id: 1,
      title: "Translation: From City to Cell",
      content: `Now let's map our city analogy directly to cellular biology.

**Cell City = Your actual cells**
Every cell in your body is like a miniature city with specialized structures performing specific jobs.

**Power plants = Mitochondria**
These organelles generate ATP (adenosine triphosphate), the energy currency your cells use for everything from muscle contraction to synthesizing proteins.

**City hall with blueprints = Nucleus with DNA**
Your DNA contains all the instructions for making proteins, which do virtually all the work in your cells. Damage here can be catastrophic.

**Waste management = Lysosomes and proteasomes**
These structures break down damaged proteins, old organelles, and foreign materials. When they fail, toxic waste accumulates.

**Police force = Cellular proteins and enzymes**
These maintain homeostasis—the stable internal environment cells need to function. They regulate pH, ion concentrations, and metabolic reactions.

Understanding cellular injury means understanding what happens when any of these systems get disrupted. Cells can adapt to mild stress, but severe or prolonged injury leads to cell death—and that's when disease begins.`,
      isDeepDive: false,
    },
    {
      id: 2,
      title: "Normal Baseline: What 'Healthy' Looks Like",
      content: `Before we discuss injury, let's establish what normal cellular function looks like.

**Energy production is steady**
Mitochondria efficiently convert oxygen and nutrients into ATP. A typical cell might have hundreds to thousands of mitochondria, depending on its energy needs. Heart muscle cells, for example, are packed with mitochondria because they never stop working.

**Protein synthesis is balanced**
Cells constantly make new proteins based on DNA instructions. Old or damaged proteins get tagged and broken down. This balance—making new and destroying old—keeps the cellular machinery running smoothly.

**Membranes maintain their integrity**
Cell membranes act as selective barriers. They keep sodium mostly outside and potassium mostly inside through energy-dependent pumps. This electrical gradient is crucial for nerve signals, muscle contraction, and cellular metabolism.

**DNA remains intact and properly regulated**
Genes turn on and off as needed. A liver cell expresses liver-specific genes; a neuron expresses neuron-specific genes. DNA damage gets detected and repaired constantly.

**Waste gets cleared efficiently**
Damaged organelles get engulfed and recycled through autophagy. Toxic byproducts of metabolism get neutralized or exported.

This is homeostasis—the cellular steady state. When injury threatens this balance, cells have remarkable adaptive mechanisms. But these mechanisms have limits.`,
      isDeepDive: false,
    },
    {
      id: 3,
      title: "Stress Enters: What Goes Wrong",
      content: `Cellular stress can come from many sources. Let's look at the major categories:

**Hypoxia (oxygen deprivation)**
This is the most common cause of cellular injury. Whether it's a blocked coronary artery causing a heart attack, a blood clot causing a stroke, or severe anemia reducing oxygen delivery, cells start struggling within minutes of oxygen loss.

**Physical injury**
Trauma, extreme temperatures (burns or frostbite), radiation, and electrical shocks can directly damage cellular structures.

**Chemical injury**
Toxins, drugs, heavy metals, and even high concentrations of normally safe substances (like glucose in diabetes) can poison cellular machinery.

**Infectious agents**
Bacteria, viruses, fungi, and parasites can directly damage cells or trigger immune responses that cause collateral damage.

**Immunologic injury**
Sometimes your own immune system attacks healthy cells, as in autoimmune diseases like lupus or rheumatoid arthritis.

**Genetic defects**
Mutations can produce defective proteins that cause cells to malfunction from birth (like sickle cell disease or cystic fibrosis).

**Nutritional imbalances**
Both deficiencies (vitamin deficiency, protein-calorie malnutrition) and excesses (obesity, hypervitaminosis) stress cellular function.

The key insight: regardless of the cause, cellular injury follows predictable patterns. The cell's response depends on the severity, duration, and type of stress.`,
      isDeepDive: false,
    },
    {
      id: 4,
      title: "Adaptation: How Cells Fight Back",
      content: `When faced with non-lethal stress, cells don't just passively accept their fate. They adapt. Here are the major adaptive mechanisms:

**Hypertrophy: Getting bigger**
When cells need more power, they grow larger. Your heart muscle cells (which can't divide) enlarge when you have high blood pressure, trying to generate more force. Skeletal muscles hypertrophy when you lift weights.

**Hyperplasia: Making more cells**
When tissues need more capacity and their cells can divide, they multiply. This is why your liver can regenerate after partial removal, why your bone marrow increases red blood cell production at high altitude, and why hormones can cause endometrial thickening.

**Atrophy: Shrinking down**
When cells aren't needed or lack stimulation, they shrink to save energy. Your muscles atrophy when immobilized in a cast. Your brain can atrophy with age or disuse.

**Metaplasia: Changing cell type**
Sometimes tissues replace one cell type with another better suited to handle stress. Chronic acid reflux can cause your esophagus to replace its normal squamous cells with stomach-like columnar cells (Barrett's esophagus). Smoking causes your respiratory tract to replace its normal columnar cells with tougher squamous cells.

**Dysplasia: Disordered growth**
This is where adaptation becomes dangerous. Cells start growing abnormally, losing their organization and proper differentiation. This is often a precancerous state.

These adaptations buy time. But if the stress continues or intensifies, adaptation fails and injury becomes irreversible.`,
      isDeepDive: false,
    },
    {
      id: 5,
      title: "Tipping Point: When Adaptation Fails",
      content: `There's a critical threshold where cellular stress transitions from reversible to irreversible. Understanding this tipping point is crucial.

**Reversible injury: The cell can recover**
Early in injury, cells show classic signs of distress but remain viable:
- Cellular swelling (water floods in as ATP-dependent pumps fail)
- Fatty change (metabolic disturbances cause lipid accumulation)
- Membrane blebbing (the cell membrane forms bubble-like protrusions)
- Chromatin clumping (DNA starts condensing abnormally)

If you remove the stressor at this point—restore blood flow, remove the toxin, provide oxygen—the cell recovers completely within hours to days.

**Irreversible injury: The point of no return**
Several events mark the transition to cell death:
- Severe mitochondrial damage (cristae disappear, dense calcium deposits form)
- Massive calcium influx (calcium floods into the cytoplasm, activating destructive enzymes)
- Plasma membrane rupture (the cell can no longer maintain its barrier function)
- Lysosomal enzyme release (the cell's digestive enzymes leak out and start consuming the cell from within)

The exact timing varies by cell type and injury. Neurons die within 3-5 minutes without oxygen. Kidney cells might survive 1-2 hours. Fibroblasts can last several hours.

The key clinical point: if you can intervene before this threshold, you can save the tissue. This is why rapid treatment of heart attacks and strokes is so critical—you're racing against irreversible injury.`,
      isDeepDive: false,
    },
    {
      id: 6,
      title: "Injury: Damage Occurs",
      content: `Once cells cross the threshold into irreversible injury, specific types of damage occur. Let's look at the mechanisms:

**Free radical damage**
Free radicals are molecules with unpaired electrons. They're highly reactive and damage everything they touch—lipids in membranes, proteins, and DNA. Your cells produce free radicals normally during metabolism, but also generate them in huge quantities during reperfusion injury (when blood flow returns after ischemia) and radiation exposure.

**Your cells have antioxidant defenses** (vitamin E, vitamin C, glutathione, superoxide dismutase) but these can be overwhelmed.

**Calcium overload**
Normally, calcium concentration inside cells is kept extremely low (10,000 times lower than outside). When cells are injured, calcium floods in, activating:
- Enzymes that digest proteins and membranes
- Enzymes that break down DNA
- Mitochondrial pathways that trigger cell death

**Mitochondrial damage**
Damaged mitochondria can't produce ATP, but worse, they leak cytochrome c and other pro-death signals into the cytoplasm. This triggers organized cell death (apoptosis) even in parts of the cell that aren't directly injured.

**DNA damage**
Injury can cause single-strand breaks, double-strand breaks, or chemical modifications to DNA. Cells have repair mechanisms, but extensive damage either kills the cell or, if it survives, may lead to mutations and cancer later.

**Membrane damage**
Both plasma membrane and intracellular membranes can be damaged by:
- Direct physical disruption
- Free radical attack on membrane lipids
- Enzymatic digestion by phospholipases (activated by calcium)

Once membranes fail catastrophically, cell death is inevitable.`,
      isDeepDive: false,
    },
    {
      id: 7,
      title: "Cell Death: Two Different Endings",
      content: `Cells can die in two fundamentally different ways, with very different consequences for surrounding tissue:

**Necrosis: Messy death**
This is cellular murder—death by injury. The cell swells, bursts, and spills its contents everywhere.

Characteristics:
- Always pathological (never normal)
- Affects groups of cells (regional death)
- Triggers inflammation (the immune system responds to the spilled contents)
- Different patterns based on tissue type:
  * Coagulative necrosis (most organs): tissue architecture preserved initially
  * Liquefactive necrosis (brain, abscesses): tissue turns to liquid
  * Fat necrosis (pancreas, breast): fat cells are dissolved by enzymes
  * Caseous necrosis (tuberculosis): cheese-like appearance
  * Gangrenous necrosis (limbs): coagulative necrosis plus bacterial overgrowth

Clinical example: A heart attack kills heart muscle cells by necrosis. Their spilled contents trigger inflammation, which is why heart attack patients have elevated inflammatory markers.

**Apoptosis: Clean death**
This is cellular suicide—programmed cell death. The cell systematically dismantles itself without spilling contents.

Characteristics:
- Can be physiological (normal) or pathological
- Affects individual cells (not patches)
- Does NOT trigger inflammation (clean removal)
- Organized process:
  * Cell shrinks and fragments
  * DNA is cut into neat fragments
  * Cell breaks into membrane-bound apoptotic bodies
  * Neighboring cells or macrophages quickly eat the bodies

Physiological apoptosis examples:
- Embryonic development (removing webbing between fingers)
- Removing immune cells that recognize self-antigens
- Eliminating cells with DNA damage before they become cancerous

Pathological apoptosis examples:
- Viral infections (viruses often trigger apoptosis)
- DNA damage from chemotherapy or radiation
- Atrophy (unused cells are removed by apoptosis)

The key difference: necrosis is loud (triggers inflammation, leaves scars), while apoptosis is silent (no inflammation, clean removal).`,
      isDeepDive: false,
    },
    {
      id: 8,
      title: "Clinical Translation: Real Patient Scenarios",
      content: `Let's see how this knowledge applies to actual clinical situations:

**Case 1: Myocardial Infarction (Heart Attack)**
A 55-year-old man with crushing chest pain arrives at the ER. His coronary artery is blocked by a thrombus.

What's happening at the cellular level:
- Minutes 0-3: Reversible injury. Heart muscle cells are hypoxic but viable. Immediate reperfusion would save them.
- Minutes 3-20: Tipping point. Some cells cross into irreversible injury. Cell swelling, membrane damage, calcium overload.
- Minutes 20-40: Necrosis begins. Cells burst, release troponin (which we measure in blood tests).
- Hours-Days: Inflammation. Neutrophils arrive to clean up dead cells, causing more damage (reperfusion injury).
- Weeks-Months: Scar formation. Dead muscle is replaced by non-contractile fibrous tissue.

Clinical correlate: This is why we rush to open blocked arteries. Every minute matters. "Time is muscle."

**Case 2: Cirrhosis from Alcohol**
A 45-year-old with 20 years of heavy drinking develops liver failure.

What happened:
- Early years: Reversible fatty change (alcohol metabolism produces excess fat). Stop drinking → liver recovers.
- Middle years: Repeated injury → inflammation → fibrosis. Scar tissue starts forming but liver still compensates.
- Late years: Cirrhosis. Massive scarring, regenerative nodules, architectural distortion. Irreversible.

The liver's remarkable regenerative capacity (hyperplasia) delays the end stage, but eventually adaptation fails.

**Case 3: Stroke**
A 70-year-old woman with atrial fibrillation throws a clot to her brain.

Cellular events:
- Core infarct zone: Neurons die within 3-5 minutes. Liquefactive necrosis (brain tissue turns to liquid).
- Penumbra zone: Surrounding area with reduced blood flow. Cells are stressed but might be savable.
- Treatment window: We have about 3-4.5 hours to restore flow and save the penumbra before irreversible damage spreads.

Why liquefactive necrosis in the brain? Brain has lots of lipid and limited structural proteins. When cells die, lipid-rich tissue turns to mush.

**Case 4: Pressure Ulcer (Bedsore)**
An immobilized ICU patient develops a sacral pressure ulcer.

Mechanism:
- Prolonged pressure → compressed blood vessels → ischemia
- Skin and subcutaneous tissue undergo coagulative necrosis
- Bacterial colonization → additional tissue damage
- Inflammatory response attempts healing but often fails if pressure continues

Prevention is key: turn the patient every 2 hours to relieve pressure before irreversible injury occurs.`,
      isDeepDive: false,
    },
    {
      id: 9,
      title: "Big Picture Rules: Memorable Principles",
      content: `Here are the key principles to remember about cellular injury and adaptation:

**Rule 1: Cells adapt before they die**
Hypertrophy, hyperplasia, atrophy, and metaplasia are all attempts to survive. Recognize adaptation as a warning sign that stress exists.

**Rule 2: There's always a tipping point**
Reversible injury can become irreversible. The exact timing depends on the cell type and injury, but the principle is universal. Clinical interventions work best before this threshold.

**Rule 3: The same injury causes different damage in different tissues**
Ischemia causes coagulative necrosis in the heart and kidneys, but liquefactive necrosis in the brain. Know your tissue-specific responses.

**Rule 4: Necrosis triggers inflammation; apoptosis doesn't**
This is why necrotic tissue forms scars (inflammation → fibrosis) while apoptotic tissue is cleanly removed. It's also why massive necrosis causes systemic inflammatory symptoms (fever, elevated white count, elevated inflammatory markers).

**Rule 5: Mitochondria are the executioners**
Most forms of cellular injury ultimately damage mitochondria. They can't make ATP (energy failure), and they release signals that trigger cell death. Protect the mitochondria, save the cell.

**Rule 6: Calcium is the death signal**
When calcium floods into cells, death pathways activate. This is why we see calcium deposits in dead tissue and why calcium channel blockers sometimes offer protection.

**Rule 7: Free radicals amplify injury**
Initial injury generates free radicals, which cause more injury, which generates more free radicals. This vicious cycle is why reperfusion injury (restoring blood flow) sometimes causes additional damage—oxygen returns, free radicals explode.

**Rule 8: Adaptation can go wrong**
Metaplasia may protect tissue initially, but it's often a step toward dysplasia and cancer. Hypertrophy may help initially, but pathological hypertrophy (like in heart failure) eventually fails.

**Clinical synthesis:**
When you see a patient, ask:
- What's stressing their cells? (hypoxia, toxin, infection, etc.)
- Are the cells adapted, injured, or dead?
- Is the injury reversible or irreversible?
- What interventions can remove the stressor or prevent progression?

Master these principles, and you'll understand not just cellular injury, but the pathophysiology of most diseases you'll encounter in medicine.`,
      isDeepDive: false,
    },
    {
      id: 10,
      title: "Deep Dive: Molecular Mechanisms",
      content: `For those who want to understand the molecular details, let's explore the key pathways:

**ATP Depletion Cascade**
When oxygen is cut off (ischemia), oxidative phosphorylation stops. ATP levels plummet. This triggers:
1. Na+/K+-ATPase pumps fail → sodium floods in, potassium leaks out → cellular swelling
2. Ca2+-ATPase pumps fail → calcium floods in from extracellular space and ER stores
3. Protein synthesis stops (requires ATP) → ribosome detachment from ER
4. Cells switch to anaerobic glycolysis → lactic acid accumulates → pH drops → enzyme dysfunction
5. Chromatin clumping (low pH causes DNA to condense)

**Free Radical Generation**
Free radicals (reactive oxygen species, ROS) are produced by:
- Incomplete reduction of oxygen during oxidative phosphorylation
- Reperfusion after ischemia (oxygen returns, mitochondria damaged, ROS burst)
- Inflammation (neutrophils generate ROS to kill bacteria but damage tissue)
- Radiation (directly produces ROS by ionizing water)
- Chemical metabolism (cytochrome P450 enzymes sometimes produce ROS)

Key free radicals:
- Superoxide (O2•−): relatively weak but converts to more dangerous species
- Hydrogen peroxide (H2O2): not technically a radical but converts to OH•
- Hydroxyl radical (OH•): extremely reactive, damages everything it touches
- Peroxynitrite (ONOO−): formed when NO• reacts with O2•−, very damaging

Antioxidant defenses:
- Superoxide dismutase (SOD): converts O2•− → H2O2
- Catalase: converts H2O2 → H2O + O2
- Glutathione peroxidase: converts H2O2 → H2O (uses glutathione)
- Vitamin E: protects membranes from lipid peroxidation
- Vitamin C: water-soluble antioxidant
- Vitamin A: antioxidant, particularly in eyes

When ROS production exceeds antioxidant capacity, oxidative stress occurs.

**Calcium Signaling in Cell Death**
Calcium activates multiple death pathways:

1. **Phospholipases**: Break down membrane phospholipids → membrane damage
2. **Proteases (calpains and cathepsins)**: Digest cytoskeletal proteins and enzymes → cellular architecture collapses
3. **Endonucleases**: Fragment DNA (this is why dying cells show DNA laddering)
4. **ATPases**: Deplete remaining ATP stores
5. **Mitochondrial permeability transition**: Opens pores in mitochondrial membranes → loss of membrane potential → ATP production stops, cytochrome c released

**Apoptosis: The Molecular Program**
Apoptosis proceeds via two main pathways:

**Intrinsic (mitochondrial) pathway:**
1. Cell stress (DNA damage, growth factor withdrawal, oxidative stress) → pro-apoptotic proteins (BAX, BAK) activated
2. BAX/BAK insert into mitochondrial outer membrane → form pores
3. Cytochrome c leaks into cytoplasm
4. Cytochrome c + APAF-1 + caspase-9 → apoptosome forms
5. Apoptosome activates caspase-3 → execution phase

**Extrinsic (death receptor) pathway:**
1. Death ligand (TNF, FasL) binds death receptor (TNFR, Fas)
2. Receptor trimerizes → recruits adaptor proteins → death-inducing signaling complex (DISC) forms
3. DISC activates caspase-8
4. Caspase-8 directly activates caspase-3 → execution phase

**Execution phase (common to both pathways):**
- Caspase-3 (executioner caspase) activates:
  * CAD (caspase-activated DNase) → cleaves DNA into 180bp fragments (DNA laddering)
  * ROCK kinase → blebs plasma membrane
  * Proteins that reorganize cytoskeleton
- Cell shrinks, fragments into apoptotic bodies
- "Eat me" signals appear on membrane surface (phosphatidylserine)
- Phagocytes recognize and engulf apoptotic bodies

**Regulation of apoptosis:**
- Anti-apoptotic proteins (BCL-2, BCL-XL): block BAX/BAK, prevent mitochondrial permeabilization
- Pro-apoptotic proteins (BAD, BID, BIM): promote BAX/BAK activation
- p53 (tumor suppressor): responds to DNA damage by activating pro-apoptotic genes or cell cycle arrest
- IAPs (inhibitor of apoptosis proteins): directly inhibit caspases

Clinical relevance:
- Cancer cells often overexpress BCL-2 (resist apoptosis)
- Some chemotherapy drugs work by triggering apoptosis
- Neurodegenerative diseases involve excessive apoptosis
- Autoimmune diseases involve failure of apoptosis (immune cells aren't deleted)

**Autophagy: Self-Eating**
Autophagy is a survival mechanism where cells digest their own components:
1. Phagophore (membrane) forms around damaged organelles or proteins
2. Phagophore closes → autophagosome (double membrane vesicle)
3. Autophagosome fuses with lysosome → autolysosome
4. Lysosomal enzymes digest contents
5. Amino acids, fatty acids released → recycled for new synthesis

Autophagy is activated by:
- Starvation (generates nutrients)
- Damaged organelles (quality control)
- Protein aggregates (clearance)
- Infection (destroys intracellular bacteria)

Autophagy is cytoprotective but can also promote cell death if excessive.

**Necroptosis: Programmed Necrosis**
Recently discovered: a form of necrosis that's actually programmed.
- Triggered by death receptors (like apoptosis) but when caspase-8 is inhibited
- RIPK1 and RIPK3 kinases form necrosome
- MLKL (mixed lineage kinase domain-like protein) activated → forms pores in plasma membrane → cell swells and bursts
- Results in necrotic morphology but with some features of programmed death

Clinical relevance: Occurs in ischemia-reperfusion injury, some infections, inflammatory diseases.

**Pyroptosis: Inflammatory Cell Death**
Form of programmed cell death linked to inflammation:
- Triggered by inflammasome activation (response to PAMPs or DAMPs)
- Caspase-1 (or caspase-11) activated
- Gasdermin D cleaved → forms membrane pores
- Cell lyses → releases inflammatory cytokines (IL-1β, IL-18)

Important in host defense but also contributes to sepsis and inflammatory diseases.

This molecular understanding explains why:
- Interventions targeting specific pathways can modify outcomes (e.g., caspase inhibitors, free radical scavengers)
- The same stressor can kill cells via different mechanisms depending on context
- Therapeutic windows exist based on when irreversible molecular changes occur

Understanding these mechanisms is essential for developing new therapies and understanding why current therapies work (or don't work).`,
      isDeepDive: true,
    },
  ],
  teachingReceipt: {
    mastered: [
      "The difference between reversible and irreversible cellular injury",
      "How cells adapt to stress (hypertrophy, hyperplasia, atrophy, metaplasia)",
      "The two types of cell death (necrosis vs. apoptosis) and their clinical significance",
      "Why timing matters in treating ischemic injury (heart attacks, strokes)",
      "The role of mitochondria, calcium, and free radicals in cell death",
      "How to recognize patterns of cellular injury in clinical scenarios",
    ],
    selfCheckQuestions: [
      "Can you explain the city-under-siege Marable™ and map each element to actual cellular structures?",
      "Given a patient with chest pain, can you describe the cellular events happening in their heart muscle over time?",
      "Can you explain why a stroke patient must be treated within hours, but a cirrhosis patient's liver damage is irreversible?",
    ],
  },
};