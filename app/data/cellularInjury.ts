import { cellularInjuryReceipt } from './teachingReceipts'; 

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
  chapterTitle: 'Cellular Injury & Adaptation',
  moduleSlug: 'cellular-injury',
  sections: [
    {
      id: 0,
      title: 'The Marable™ — The City Under Siege',
      isDeepDive: false,
      content: `Imagine a prosperous city — let's call it Cellville.

Cellville has everything a city needs. It has power stations that run day and night, generating the energy that keeps every street light on and every factory running. It has a city hall where the master blueprints for every building are stored, carefully guarded. It has a waste management service that collects rubbish every morning before anyone wakes up. It has a water supply system that regulates pressure, ensuring every pipe gets what it needs. And it has a police force maintaining order — keeping the right substances in the right places and the wrong ones out.

Life in Cellville is good. Every department does its job. Energy is generated, waste is cleared, blueprints are followed, and order is maintained.

But then — the city faces stress.

One day, the main water supply is cut off. Within minutes, the power stations start struggling. The police force can no longer maintain pressure — things that should stay outside start getting in. Sodium floods the streets. Calcium, normally held at the gates, surges through. The factories swell with water they cannot use. City hall starts to flood.

If someone restores the water supply quickly enough — within minutes — the city recovers. Streets drain. Power comes back. Order is restored. This is **reversible injury**.

But if the water stays off too long, something shifts. The power stations take catastrophic damage. The city hall catches fire. The police dissolve completely. At this point, no amount of water restoration saves the city. It collapses — messily, loudly, triggering every alarm in the region. This is **irreversible injury and necrosis**.

Yet sometimes — when damage is detected early, when the city itself decides the situation is beyond repair — Cellville demolishes one condemned building carefully, quietly, without disturbing the neighbours. It seals off the structure, dismantles it piece by piece, and recycles the materials. The neighbouring buildings continue functioning normally, completely undisturbed. This is **apoptosis** — programmed, orderly, silent cell death.

This is the story of cellular injury. Your cells are cities under various sieges. How they respond — whether they adapt, survive, or die, and how they die — determines whether you develop disease, whether organs fail, and whether tissues heal or scar.

Understanding this story is the foundation of all pathology.`,
    },
    {
      id: 1,
      title: 'Introduction — The Language of Cellular Pathology',
      isDeepDive: false,
      content: `Cellular pathology is the study of what goes wrong inside cells — the earliest, most fundamental level at which disease begins. Before a tissue fails, before an organ shows dysfunction, before a patient feels a symptom, something has gone wrong at the cellular level.

**What is cellular injury?**

Cellular injury occurs when a cell is subjected to a stress or stimulus that exceeds its adaptive capacity. The cell can no longer maintain its normal physiological state — homeostasis — and begins to malfunction.

Injury exists on a spectrum:
- **Mild stress** → adaptation (the cell changes to cope)
- **Moderate, prolonged, or severe stress** → reversible injury (the cell struggles but can recover)
- **Overwhelming or sustained injury** → irreversible injury and cell death

**The sources of cellular injury**

Cells can be injured by many different stimuli, but they fall into recognisable categories:

**Hypoxia** — the most common and clinically important cause. Insufficient oxygen delivery. Caused by ischaemia (reduced blood flow), anaemia (insufficient haemoglobin), carbon monoxide poisoning (haemoglobin blocked), or respiratory failure. The heart, brain, and kidneys are most vulnerable.

**Physical agents** — mechanical trauma, extreme heat (burns), extreme cold (frostbite), radiation (UV, X-rays, gamma rays), and electrical injury.

**Chemical agents and drugs** — toxins (carbon tetrachloride, cyanide), medications in toxic doses (paracetamol, aminoglycosides), heavy metals (lead, mercury, arsenic), and substances of abuse (alcohol, cocaine).

**Infectious agents** — bacteria (direct toxins, immune-mediated), viruses (direct cytopathic effect, immune-mediated), fungi, parasites, prions.

**Immunological injury** — autoimmune disease (type II and III hypersensitivity), transplant rejection, hypersensitivity reactions.

**Genetic defects** — enzyme deficiencies (lysosomal storage diseases), structural protein mutations (Marfan syndrome, sickle cell disease), DNA repair defects (xeroderma pigmentosum).

**Nutritional imbalances** — protein-calorie malnutrition, specific vitamin deficiencies (scurvy, rickets, pellagra), excess nutrition (obesity, hypervitaminosis A or D).

**The fundamental principle of cellular pathology (Pathoma):**

All cellular injury, regardless of cause, involves damage to one or more of four critical targets:
1. **Mitochondria** — energy production
2. **Cell membranes** — structural integrity and barrier function
3. **DNA** — genetic instructions and cell cycle control
4. **Proteins** — structural and enzymatic function

Understanding the cause and the target allows you to predict the consequences.

**Grasp Tonic 🧃**

Think of a car. It can break down in many ways — flat tyre, engine failure, electrical fault, fuel leak. But regardless of what causes the breakdown, the car stops working. And whether the driver can get it repaired depends on how long it has been broken down and how severe the damage is. A flat tyre fixed quickly — no permanent damage. An engine that seizes after running without oil for an hour — likely irreparable. The same principle governs cellular injury: severity, duration, and the specific system damaged all determine whether recovery is possible.`,
    },
    {
      id: 2,
      title: 'Normal Cellular Homeostasis — What "Healthy" Looks Like',
      isDeepDive: false,
      content: `Before we can understand injury, we must understand what normal cellular function looks like. Disease is a deviation from normal — you cannot recognise deviation without first knowing the baseline.

**Energy production — the mitochondrial engine**

The cell's primary energy currency is **ATP** (adenosine triphosphate). ATP is produced in mitochondria through oxidative phosphorylation — a process that requires oxygen and generates approximately 36 ATP per molecule of glucose. Without ATP, virtually nothing in the cell works.

ATP powers:
- The **Na⁺/K⁺-ATPase pump** — which keeps sodium OUT of the cell and potassium IN (critical for membrane potential, nerve conduction, and preventing cellular swelling)
- The **Ca²⁺-ATPase pump** — which keeps calcium concentration inside the cell 10,000 times lower than outside (calcium is a powerful signalling molecule — if uncontrolled, it activates death pathways)
- **Protein synthesis** on ribosomes
- **Active transport** of nutrients and waste products
- **Cell division** and DNA replication

**The membrane barrier**

The plasma membrane is a phospholipid bilayer studded with proteins. It is selectively permeable — it decides what crosses and what doesn't. Cholesterol in the membrane maintains fluidity across temperature ranges. Integral membrane proteins serve as receptors, channels, pumps, and structural anchors.

Maintaining membrane integrity is essential. When it fails, the cell cannot separate its contents from the extracellular environment — the result is catastrophic loss of ion gradients and cell death.

**DNA integrity and gene expression**

The nucleus contains ~3 billion base pairs of DNA encoding approximately 20,000 genes. Only a fraction are expressed in any given cell type at any time — a liver cell and a neuron contain identical DNA but express completely different genes.

Cells have elaborate DNA surveillance and repair mechanisms:
- **Base excision repair** — fixes single-base damage from reactive oxygen species
- **Nucleotide excision repair** — fixes bulky lesions from UV radiation
- **Mismatch repair** — corrects errors introduced during DNA replication
- **Double-strand break repair** — fixes the most dangerous type of DNA damage

When damage exceeds repair capacity, p53 (the "guardian of the genome") halts the cell cycle to allow repair, or triggers apoptosis if damage is irreparable.

**Protein turnover**

Proteins are synthesised by ribosomes following mRNA instructions and are degraded by two main systems:
- **The ubiquitin-proteasome system** — tags damaged or misfolded proteins with ubiquitin for degradation in the proteasome
- **Lysosomes** — membrane-bound organelles containing hydrolytic enzymes that digest old organelles (autophagy) and engulfed material

Proper protein turnover prevents accumulation of toxic misfolded proteins — a feature of neurodegenerative diseases (Alzheimer's, Parkinson's, Huntington's).

**Calcium regulation**

Cytoplasmic Ca²⁺ is kept at approximately 100 nM — roughly 10,000 times lower than the 1–2 mM in extracellular fluid. This gradient is maintained by:
- Plasma membrane Ca²⁺-ATPase (pumps calcium out)
- Sarco/endoplasmic reticulum Ca²⁺-ATPase (SERCA, sequesters calcium in the ER)
- Mitochondrial calcium uptake

When calcium rises inappropriately, it activates phospholipases (damage membranes), proteases (digest structural proteins), endonucleases (fragment DNA), and triggers mitochondrial permeability transition — each contributing to cell death.

**Grasp Tonic 🧃**

Think of normal cellular homeostasis like a well-maintained house. The electricity is running (ATP), the plumbing works (ion pumps), the locks are on the doors (membrane integrity), the filing system is organised (DNA), and the rubbish is taken out regularly (protein turnover). When the house is maintained, it is a comfortable, functioning home. Disease begins when one of these systems starts to fail — and the longer the failure goes unaddressed, the more other systems are compromised.`,
    },
    {
      id: 3,
      title: 'Cellular Adaptations — Hypertrophy & Hyperplasia',
      isDeepDive: false,
      content: `When cells face increased demand or stress, they do not immediately die. They adapt. Cellular adaptation is a reversible change in the size, number, phenotype, or activity of cells in response to altered physiological or pathological conditions.

There are four major adaptive responses: hypertrophy, hyperplasia, atrophy, and metaplasia. We cover the first two here.

**Hypertrophy — bigger cells**

Hypertrophy is an increase in the **size** of cells — not the number. It occurs in tissues where cells have limited capacity to divide (called post-mitotic cells), such as cardiac myocytes, skeletal muscle, and neurons.

The mechanism involves:
- Increased protein synthesis
- Increased organelle number (especially mitochondria and rough ER)
- Upregulation of genes encoding structural proteins

**Physiological hypertrophy:**
- **Skeletal muscle hypertrophy** with resistance exercise — mechanical stress triggers signalling pathways (mTOR, IGF-1) → increased protein synthesis → muscle enlargement
- **Uterine hypertrophy** during pregnancy — oestrogen and mechanical stretch → myocyte growth
- **Cardiac hypertrophy** in athletes (concentric hypertrophy with maintained function — the "athlete's heart")

**Pathological hypertrophy:**
- **Left ventricular hypertrophy (LVH)** in systemic hypertension — the left ventricle faces increased afterload (resistance to ejection) → myocytes hypertrophy to generate more force
- **Right ventricular hypertrophy (RVH)** in pulmonary hypertension or chronic lung disease
- **Renal hypertrophy** after unilateral nephrectomy — the remaining kidney enlarges to compensate

The critical distinction: physiological hypertrophy is adaptive and reversible (athletes' hearts normalise with deconditioning). Pathological hypertrophy, if the stimulus continues, can lead to heart failure — the hypertrophied ventricle eventually cannot maintain output despite its enlarged size. This transition from compensated hypertrophy to decompensated heart failure is one of the most important clinical concepts in cardiology.

**Hyperplasia — more cells**

Hyperplasia is an increase in the **number** of cells in a tissue. It occurs in tissues where cells retain the ability to divide (labile and stable cell types). It is driven by growth factors, hormones, or chronic irritation.

**Physiological hyperplasia:**
- **Hormonal hyperplasia** — the endometrium thickens under oestrogen stimulation during the menstrual cycle; breast glandular tissue proliferates during pregnancy
- **Compensatory hyperplasia** — the liver regenerates after partial hepatectomy through hepatocyte proliferation. This is one of the most remarkable regenerative capacities in the body.
- **Bone marrow hyperplasia** at altitude — hypoxia stimulates erythropoietin (EPO) → red cell precursor proliferation → more red cells to carry oxygen

**Pathological hyperplasia:**
- **Benign prostatic hyperplasia (BPH)** — DHT (a testosterone metabolite) stimulates stromal and glandular hyperplasia of the prostate → urinary obstruction. Not a precursor to cancer but increases cancer risk indirectly.
- **Endometrial hyperplasia** — excess oestrogen stimulation → increased risk of endometrial carcinoma. The degree of cellular atypia determines cancer risk.
- **Psoriasis** — accelerated epidermal hyperplasia driven by immune-mediated inflammation

**The cancer connection:**

Hyperplasia is not cancer — the cells are still regulated and the proliferation will stop if the stimulus is removed. However, pathological hyperplasia with cellular atypia represents a precancerous state, because the increased cell division increases the chance of acquiring additional mutations.

**Hypertrophy vs. Hyperplasia:**
Some tissues respond with both — the uterus enlarges during pregnancy through both myocyte hypertrophy AND connective tissue hyperplasia. The prostate enlarges through both glandular hyperplasia AND stromal hypertrophy.

**Grasp Tonic 🧃**

Imagine a small restaurant that suddenly gets many more customers. They can respond in two ways: train their existing staff to work faster and harder (hypertrophy — same number, more output per unit), or hire more staff (hyperplasia — more units). Tissues that cannot divide (like the heart) can only train existing staff. Tissues that can divide hire more. Both responses help cope with demand — but if the restaurant stays overwhelmed indefinitely, eventually even the most efficient staff or the largest team burns out.`,
    },
    {
      id: 4,
      title: 'Cellular Adaptations — Atrophy, Metaplasia & Dysplasia',
      isDeepDive: false,
      content: `The remaining two major adaptations — atrophy and metaplasia — represent responses to reduced demand, altered environment, or chronic irritation.

**Atrophy — shrinking cells**

Atrophy is a decrease in cell size due to reduced protein synthesis and increased protein degradation. It can affect individual cells, organs, or entire body regions.

**Mechanisms of atrophy:**
- Decreased protein synthesis (less demand or nutrient supply)
- Increased protein degradation via:
  * Ubiquitin-proteasome pathway (acute atrophy)
  * Autophagy — lysosomes digest cellular components including organelles (chronic atrophy)
  * Both occur together in severe atrophy

**Physiological atrophy:**
- **Developmental** — the uterus involutes (shrinks) after childbirth; the ductus arteriosus closes and becomes the ligamentum arteriosum
- **Ageing** — most organs undergo some degree of senile atrophy (brain, testis, ovary)

**Pathological atrophy — causes:**
- **Disuse atrophy** — a limb immobilised in a cast loses muscle mass rapidly; muscles of chronic bedridden patients waste. Neural input is required to maintain muscle bulk.
- **Denervation atrophy** — loss of nerve supply causes profound muscle wasting (e.g. poliomyelitis, motor neurone disease)
- **Loss of endocrine stimulation** — after menopause, the endometrium, vaginal epithelium, and breast tissue atrophy due to loss of oestrogen
- **Reduced blood supply** — renal artery stenosis → ischaemic nephropathy → kidney atrophy
- **Pressure atrophy** — an expanding tumour or cyst compresses adjacent tissue → atrophy from compression
- **Inadequate nutrition** — marasmus (protein-calorie malnutrition) causes generalised atrophy

**Metaplasia — changing cell type**

Metaplasia is the reversible replacement of one differentiated cell type by another better suited to handle chronic stress. It occurs when adult stem cells in a tissue differentiate along an alternative pathway.

This is an important concept: metaplasia is not transformation of one mature cell directly into another. It occurs through reprogramming of the stem cell pool.

**Squamous metaplasia:**
- **Bronchial epithelium** — normally pseudostratified ciliated columnar. Chronic smoking → stratified squamous epithelium. Squamous cells tolerate smoke irritation better than columnar cells but lose cilia (impaired mucociliary clearance). Reversible if smoking stops.
- **Cervical ectropion** — columnar epithelium of the endocervix migrates into the vaginal pH environment → squamous metaplasia at the transformation zone. This squamocolumnar junction is where cervical carcinoma arises.
- **Bladder metaplasia** — bladder transitional epithelium can undergo squamous metaplasia in response to chronic irritation (stones, schistosomiasis)

**Columnar (glandular) metaplasia:**
- **Barrett's oesophagus** — normal squamous epithelium of the lower oesophagus is replaced by intestinal-type columnar epithelium in response to chronic gastric acid reflux. This is the most clinically important metaplasia — Barrett's carries a 30-40× increased risk of oesophageal adenocarcinoma.
- **Gastric intestinal metaplasia** — H. pylori gastritis can cause intestinal metaplasia → increased gastric cancer risk

**Osseous metaplasia:**
- **Myositis ossificans** — bone forms within muscle after trauma
- **Calcification** in areas of chronic inflammation (dystrophic calcification progressing to ossification)

**Dysplasia — disordered growth**

Dysplasia is not technically an adaptation — it represents disordered cellular proliferation with loss of normal architectural organisation. Dysplastic cells show:
- Variation in cell size and shape (pleomorphism)
- Enlarged, hyperchromatic nuclei with irregular outlines
- Increased mitotic figures, sometimes abnormal
- Loss of normal cellular organisation and polarity

Dysplasia is a precancerous change — not yet cancer (cells have not invaded the basement membrane) but significantly increased cancer risk.

**Cervical intraepithelial neoplasia (CIN):** dysplasia of cervical squamous epithelium, graded CIN 1 (mild), CIN 2 (moderate), CIN 3 (severe/carcinoma in situ). HPV (especially types 16 and 18) is the causative agent.

**The spectrum: Metaplasia → Dysplasia → Carcinoma in situ → Invasive carcinoma**

This progression is not inevitable — metaplasia alone is not premalignant. But with continued irritation or additional oncogenic stimuli, the risk of progressing to dysplasia and cancer increases substantially.

**Grasp Tonic 🧃**

Metaplasia is like a business changing its product line to suit market conditions. A restaurant that cannot survive in its current neighbourhood converts to a café — it is still a food business, still regulated, still operating within normal rules, just using a different model better suited to the environment. This conversion (metaplasia) might be perfectly sustainable indefinitely. But if pressures continue and the management becomes increasingly chaotic and rule-breaking (dysplasia), there is real risk of the business becoming something completely unregulated and destructive — cancer.`,
    },
    {
      id: 5,
      title: 'Reversible Injury — The Cell in Distress',
      isDeepDive: false,
      content: `When cellular stress exceeds the capacity of adaptive responses, the cell enters a state of injury. Initially, this injury is reversible — if the stressor is removed, the cell recovers completely. Understanding reversible injury means understanding the earliest cellular responses to stress.

**The central event: ATP depletion**

Most forms of reversible injury converge on ATP depletion. Without ATP:

**1. Na⁺/K⁺-ATPase fails**
- Na⁺ accumulates inside the cell
- K⁺ leaks out
- Chloride follows Na⁺ (down the electrical gradient)
- Water follows osmotically — the cell swells
- This is **cellular swelling** (also called hydropic change or cloudy swelling) — the first and most common morphological change in cellular injury

**2. Anaerobic glycolysis activates**
- Cells switch from oxidative phosphorylation to anaerobic glycolysis
- Generates only 2 ATP per glucose (vs 36 from aerobic)
- Produces lactic acid → intracellular pH falls
- Acidic pH clumps chromatin (visible under microscopy)
- Acid pH inactivates many enzymes → compounding dysfunction

**3. Calcium influx begins**
- Ca²⁺-ATPase fails → calcium leaks into cytoplasm
- Activates phospholipases → membrane damage begins
- Activates proteases → protein degradation begins
- This is still reversible at early stages

**4. Ribosomal detachment**
- Reduced pH and energy → ribosomes detach from rough ER
- Protein synthesis falls dramatically
- The ER cannot maintain its normal architecture

**Morphological features of reversible injury:**

**Grossly (what you see with naked eye):**
- Organ is swollen (oedematous)
- Pale (blood squeezed out by swollen cells)
- Increased weight

**Microscopically:**
- **Cellular swelling** — cells appear larger, cytoplasm pale and granular (from swollen, dysfunctional organelles)
- **Fatty change (steatosis)** — especially in liver, heart, kidney. Lipid metabolism disrupted → fat accumulates in vacuoles in the cytoplasm. Occurs in toxin injury (alcohol, carbon tetrachloride), hypoxia, and protein malnutrition.
- **Myelin figures** — whorled phospholipid masses from damaged membranes
- **Chromatin clumping** — nuclear change from acidic pH
- **Plasma membrane blebbing** — irregular protrusions of the membrane

**Clinical correlation — fatty liver (hepatic steatosis):**

Fatty change in hepatocytes is the earliest and most reversible form of alcoholic liver injury. Patients who stop drinking at this stage — even after years of heavy use — can have complete hepatic recovery. The fat simply disappears.

But fatty change signals that the hepatocytes are under significant stress. If drinking continues, the injury progresses from reversible fatty change to alcoholic hepatitis (inflammation) to fibrosis to cirrhosis — an irreversible architectural distortion.

**The principle of reversibility:**

All the above changes — swelling, fat accumulation, chromatin clumping, membrane blebbing — reverse completely when the stressor is removed. The cell is injured but not dead. This is why early intervention in heart attacks, strokes, and kidney injury is so important: you are trying to intervene before the cell passes the point of no return.

**Grasp Tonic 🧃**

A reversibly injured cell is like a person with severe jet lag. Their body's normal rhythms are disrupted — sleep is disordered, concentration is impaired, digestion is sluggish. They function poorly. But given time and rest (removal of the stressor), all of this resolves completely. There is no permanent damage — just temporary disruption of normal homeostasis. The critical question in cellular injury is always: have we crossed from jet lag into permanent neurological damage?`,
    },
    {
      id: 6,
      title: 'Irreversible Injury — The Point of No Return',
      isDeepDive: false,
      content: `Irreversible injury marks the transition from a cell that can recover to one that cannot. Identifying this threshold — and understanding what drives cells past it — is one of the most important concepts in pathology.

**What defines irreversible injury?**

Three morphological hallmarks define irreversible cell injury under electron microscopy:

**1. Severe mitochondrial damage**
- The inner mitochondrial membrane loses its electrochemical gradient
- Large, amorphous calcium-phosphate deposits appear within mitochondria (flocculent densities)
- Cristae (the inner membrane folds) disappear
- Mitochondria cannot produce ATP at all — not even inefficiently

**2. Plasma membrane disruption**
- The plasma membrane can no longer maintain any barrier function
- Loss of selective permeability
- Cellular contents begin leaking — this is the basis of clinical biomarkers (troponin, AST, LDH)

**3. Nuclear chromatin clumping and dissolution**
Three types of nuclear changes occur (collectively called karyorrhexis, pyknosis, and karyolysis):
- **Pyknosis** — nucleus shrinks and becomes intensely basophilic (dark-staining) as chromatin condenses
- **Karyorrhexis** — the pyknotic nucleus fragments
- **Karyolysis** — the nucleus fades and disappears (DNases digest the chromatin)

**The key molecular events that push cells past the point of no return:**

**Massive calcium influx**
When mitochondria are severely damaged, they can no longer sequester calcium. Calcium floods the cytoplasm. It activates:
- **Phospholipase A2** — destroys membrane phospholipids → plasma membrane rupture
- **Calpains** (calcium-activated proteases) — digest cytoskeletal proteins → cell loses shape
- **Endonucleases** — fragment nuclear DNA
- **Mitochondrial permeability transition pore (MPTP)** — opens, causing rapid loss of mitochondrial membrane potential → complete cessation of ATP production

**Loss of membrane phospholipid repair**
Cell membranes are constantly damaged and repaired. This repair requires ATP and substrates. When ATP is completely depleted, membrane damage accumulates faster than it can be repaired → membrane rupture.

**Accumulation of reactive oxygen species (ROS)**
In ischaemia-reperfusion injury, when blood flow is restored to ischaemic tissue, a burst of superoxide and hydroxyl radicals is generated. These attack membranes (lipid peroxidation), proteins (oxidative modification), and DNA (strand breaks) — accelerating cell death even as the primary stressor (ischaemia) is being corrected.

**Free fatty acid accumulation**
Damaged membranes release free fatty acids. These are directly toxic to membranes and inhibit mitochondrial function, creating a vicious cycle.

**Clinical biomarkers of irreversible injury:**

When cells die irreversibly, their contents leak into the blood. We measure these as markers of tissue necrosis:
- **Troponin I and T** — cardiac myocyte necrosis (myocardial infarction)
- **CK-MB** — cardiac muscle necrosis
- **AST, ALT** — hepatocyte necrosis (hepatitis, liver injury)
- **LDH** — multiple tissue necrosis (widespread injury)
- **Amylase, lipase** — pancreatic acinar cell necrosis (pancreatitis)
- **Myoglobin, CK** — skeletal muscle necrosis (rhabdomyolysis)

**The ischaemia timeline — when does irreversibility begin?**

Different cells have very different tolerances for hypoxia:
- **Neurons** — irreversible injury after 3–5 minutes of ischaemia (most sensitive)
- **Cardiac myocytes** — irreversible injury after 20–40 minutes
- **Hepatocytes** — irreversible injury after 1–2 hours
- **Skeletal muscle** — irreversible injury after several hours
- **Fibroblasts** — can survive hours of ischaemia

This hierarchy explains why the brain is the organ most vulnerable to cardiac arrest, and why cardiac surgeons have a limited window for coronary reperfusion.

**Grasp Tonic 🧃**

The point of no return in cellular injury is like an avalanche. Before it begins, snow accumulates on a slope — potentially dangerous but stable. A small disturbance might start a slide, but it can stop. But past a critical threshold, the entire slope moves, and no force can stop it. The avalanche determines its own path. Similarly, once calcium floods the mitochondria, once membrane phospholipases are fully activated, once nuclear DNA is fragmented — no intervention reverses these cascades. This is why treatment windows in heart attacks and strokes are measured in minutes to hours, not days.`,
    },
    {
      id: 7,
      title: 'Necrosis — Patterns and Consequences',
      isDeepDive: false,
      content: `Necrosis is the disorganised, uncontrolled death of cells or tissues resulting from overwhelming injury. It is always pathological — it never occurs normally. Its defining feature is cell membrane rupture with release of cellular contents, triggering inflammation in surrounding tissue.

**Morphological features of necrosis (what you see under the microscope):**

**Nuclear changes** — the dead cell's nucleus shows pyknosis (shrinkage and darkening), karyorrhexis (fragmentation), or karyolysis (dissolution) — these are the most reliable signs of cell death.

**Cytoplasmic changes** — the cytoplasm becomes more eosinophilic (pink on H&E stain) due to:
- Loss of cytoplasmic RNA (normally binds basophilic stains)
- Denaturation of proteins (which stain more pink)
- Entry of eosin-staining plasma proteins from leaking membranes

**Inflammatory response** — necrotic cells release DAMPs (damage-associated molecular patterns) that attract neutrophils and macrophages, initiating inflammation and eventual repair (often with scarring).

**The six patterns of necrosis — know these precisely:**

**1. Coagulative necrosis**
The most common type. Occurs in most solid organs following ischaemia (except the brain). The architectural outline of the tissue is preserved — the "ghostly" framework of dead cells remains visible — but the cellular detail is lost (nuclei disappear, cytoplasm becomes homogeneous and eosinophilic).

Why preserved architecture? Hypoxia denatures both structural proteins AND the enzymes that would digest them. The structural scaffold remains even as the cellular machinery dies.

Classic example: **myocardial infarction** — dead heart muscle retains its fibrous architecture (ghost fibres visible for days before macrophages clear it).
Other examples: kidney infarct, spleen infarct, liver infarct.

**2. Liquefactive necrosis**
Occurs in the **brain** and in **abscesses** (purulent infections). Dead tissue is rapidly digested by enzymes — either from lysosomes of dying cells (brain) or from neutrophil proteases (abscesses) — converting the area to a liquid, creamy or yellow fluid.

Why the brain? Brain tissue is rich in lipids and relatively poor in structural proteins. Lysosomal enzymes rapidly liquefy it.

Classic example: **ischaemic stroke** — the infarcted area becomes a fluid-filled cavity (cystic encephalopathy).
Also: brain abscess (pus = liquefactive necrosis), lung abscess.

**3. Caseous necrosis**
Specific to **tuberculosis** (and some other granulomatous infections — fungi like histoplasma). The necrotic area has a pale, soft, cheese-like appearance (caseous = cheese-like in Latin).

Microscopically: granular, eosinophilic, structureless debris surrounded by granulomatous inflammation (epithelioid macrophages, Langhans giant cells, lymphocytes).

The architecture is completely destroyed — unlike coagulative necrosis. This reflects the immune-mediated component of TB pathology.

**4. Fat necrosis**
Two distinct types:

**Enzymatic fat necrosis** — in the **pancreas** and surrounding peripancreatic fat during acute pancreatitis. Activated pancreatic lipases digest fat cells → release of fatty acids → combination with calcium → **saponification** (chalky white calcium soap deposits). Grossly: chalky white deposits in the omentum and mesentery.

**Traumatic fat necrosis** — in the **breast** or subcutaneous tissue after trauma. Fat cells rupture → fatty acids released → local inflammatory reaction → firm, palpable mass that can mimic breast cancer. Important clinical distinction.

**5. Gangrenous necrosis**
A descriptive clinical term combining coagulative necrosis with bacterial superinfection:
- **Dry gangrene** — ischaemic limb without infection (coagulative necrosis, mummification)
- **Wet gangrene** — ischaemic limb with bacterial infection adding liquefactive component (putrefactive, foul-smelling)
- **Gas gangrene** — Clostridium perfringens infection → gas production within tissue (crepitus on palpation), rapidly fatal

**6. Fibrinoid necrosis**
Occurs in **blood vessel walls** in specific conditions. Plasma proteins (especially fibrin) leak into the vessel wall and are deposited there. The wall takes on a homogeneous, bright pink (eosinophilic) appearance.

Seen in: **malignant hypertension** (small arterioles), **immune vasculitis** (polyarteritis nodosa), pre-eclampsia.

**Grasp Tonic 🧃**

The different patterns of necrosis are like different ways buildings collapse after a disaster. Coagulative necrosis is like a building whose facade stays standing after an earthquake — the outline remains but the interior is destroyed. Liquefactive necrosis is like a building dissolved by a flood — everything becomes liquid mush. Caseous necrosis is like a building reduced to soft rubble — unrecognisable but solid. Fat necrosis is like a candle that melts — the structure softens and runs. Each pattern tells you something specific about what happened and where.`,
    },
    {
      id: 8,
      title: 'Apoptosis — Programmed Cell Death',
      isDeepDive: false,
      content: `Apoptosis is programmed cell death — an active, energy-dependent, genetically controlled process by which individual cells eliminate themselves without triggering inflammation. It is fundamentally different from necrosis in mechanism, morphology, and consequence.

**When does apoptosis occur normally?**

Apoptosis is essential for normal physiology:

- **Embryonic development** — sculpts organs by eliminating unwanted cells. Apoptosis removes the webbing between developing fingers. The neural tube forms by selective apoptosis. The gut lumen is created by central cell apoptosis.
- **Thymic education** — more than 95% of developing T-lymphocytes are eliminated by apoptosis in the thymus (those that fail to recognise MHC, and those that react to self-antigens — preventing autoimmunity)
- **Endometrial shedding** — the endometrium sheds during menstruation partly through apoptosis
- **Maintaining cell numbers** — tissues in steady state (intestinal epithelium, skin) maintain constant cell numbers through balanced proliferation and apoptosis
- **Eliminating damaged cells** — cells with irreparable DNA damage (potential cancer cells) are eliminated by p53-triggered apoptosis

**Pathological apoptosis:**

- **Viral infections** — viruses often trigger apoptosis in infected cells (cytopathic effect)
- **Graft-versus-host disease** — donor T cells kill host epithelial cells
- **Neurodegenerative diseases** — Alzheimer's, Parkinson's: neurons undergo pathological apoptosis
- **Chemotherapy and radiation** — designed to trigger apoptosis in cancer cells (by damaging DNA, activating p53)

**Morphological features of apoptosis (distinctive — opposite of necrosis in many ways):**

- **Cell shrinkage** (opposite of necrotic swelling)
- **Chromatin condensation** — densely eosinophilic, peripherally marginated
- **Nuclear fragmentation** (karyorrhexis)
- **Cytoplasmic blebs** → cell fragments into **apoptotic bodies** (membrane-bound fragments)
- **Phagocytosis** of apoptotic bodies by macrophages or neighbouring cells — NO inflammation
- Cells do NOT lyse — membranes remain intact throughout

**The two pathways to apoptosis:**

**Intrinsic (mitochondrial) pathway — triggered from within:**

Stimuli: DNA damage, oxidative stress, growth factor withdrawal, oncogene activation.

Key players:
- **BCL-2 family proteins** regulate this pathway:
  - Pro-apoptotic: BAX, BAK (form pores in mitochondrial outer membrane)
  - Anti-apoptotic: BCL-2, BCL-XL (prevent pore formation)
  - BH3-only sensors: BID, BIM, BAD (activated by stress, tip balance toward death)

When pro-apoptotic signals dominate:
BAX/BAK form pores → **cytochrome c** leaks from mitochondria → binds **APAF-1** → forms **apoptosome** → activates **caspase-9** → activates **caspase-3** (executioner) → cell dismantles itself

**Extrinsic (death receptor) pathway — triggered from outside:**

Stimuli: binding of death ligands (FasL, TNF-α, TRAIL) to death receptors (Fas/CD95, TNFR1) on the cell surface.

DISC (death-inducing signalling complex) forms → activates **caspase-8** → activates **caspase-3** → execution

**Caspases — the executioners:**

Caspases are cysteine proteases that form the molecular machinery of apoptosis. They exist as inactive procaspases and are activated by cleavage.

Initiator caspases: 8, 9 (activated by pathways above)
Executioner caspases: 3, 6, 7 (cleave hundreds of cellular substrates)

Caspase-3 activates:
- **CAD** (caspase-activated DNase) → cleaves DNA into 180bp fragments (DNA laddering — pathognomonic of apoptosis)
- **Cytoskeletal proteins** → cell morphology changes
- Proteins that expose "eat-me" signals (phosphatidylserine) on the outer membrane leaflet

**Apoptosis vs. Necrosis — key comparison:**

| Feature | Apoptosis | Necrosis |
|---|---|---|
| Cell size | Shrinks | Swells |
| Membrane | Intact | Ruptured |
| Inflammation | None | Yes |
| Energy required | Yes (ATP) | No |
| Pattern | Individual cells | Groups of cells |
| Triggers | Physiological or pathological | Always pathological |
| Chromatin | Compact, fragmented | Karyolysis/pyknosis |

**Grasp Tonic 🧃**

The difference between apoptosis and necrosis is like the difference between a controlled demolition and a building fire. In a controlled demolition, engineers plan every step — the building implodes neatly, debris stays contained, neighbouring buildings are unaffected, and the materials are cleanly recycled. In a building fire, there is no control — the fire spreads unpredictably, toxic smoke affects the neighbourhood, firefighters arrive (inflammation), and what remains is a mess requiring extensive cleanup. Apoptosis is the controlled demolition. Necrosis is the building fire.`,
    },
    {
      id: 9,
      title: 'Free Radicals and Oxidative Stress',
      isDeepDive: false,
      content: `Free radical-mediated injury is one of the most important mechanisms of cellular damage — relevant to ischaemia-reperfusion injury, radiation injury, chemical toxicity, inflammation, ageing, and carcinogenesis.

**What is a free radical?**

A free radical is an atom or molecule with an unpaired electron in its outer orbital. Unpaired electrons are chemically unstable — they react with adjacent molecules to steal electrons, converting those molecules into new free radicals. This creates chain reactions that amplify damage dramatically.

**Reactive oxygen species (ROS) — the main players:**

**Superoxide (O₂•⁻)**
Produced by: mitochondrial electron transport (normal metabolism), NADPH oxidase (activated in phagocytes), xanthine oxidase (especially during reperfusion).
Relatively unstable — converted by superoxide dismutase (SOD) to H₂O₂.

**Hydrogen peroxide (H₂O₂)**
Not technically a radical but a precursor to the most damaging ROS. Converted by catalase to H₂O + O₂ (harmless). But in the presence of Fe²⁺...

**Hydroxyl radical (OH•) — the most dangerous**
The Fenton reaction: H₂O₂ + Fe²⁺ → OH• + OH⁻ + Fe³⁺
OH• is extraordinarily reactive — it attacks any biological molecule within nanometres of its formation:
- **Lipid peroxidation** — attacks polyunsaturated fatty acids in membranes → chain reaction destroying membrane integrity
- **Protein oxidation** — modifies amino acids, cross-links proteins, inactivates enzymes
- **DNA strand breaks** — causes single and double-strand breaks, base modifications → mutations

**Peroxynitrite (ONOO⁻)**
Formed when superoxide reacts with nitric oxide (NO•). Nitrosylates proteins and lipids, damages DNA. Important in inflammatory injury.

**When are ROS produced in excess?**

1. **Ischaemia-reperfusion injury** — the most clinically important source. During ischaemia, xanthine dehydrogenase is converted to xanthine oxidase. When oxygen is restored (reperfusion), xanthine oxidase uses the oxygen to generate massive superoxide. Simultaneously, neutrophils recruited to the area generate their own ROS. This "oxidative burst" upon reperfusion paradoxically worsens injury — explaining why reperfusion injury accounts for a significant portion of the damage in myocardial infarction and stroke.

2. **Phagocytic cells** — neutrophils and macrophages generate ROS deliberately as part of the respiratory burst to kill bacteria (via NADPH oxidase). In inflammation, this ROS escapes into surrounding tissue.

3. **Radiation** — ionising radiation directly generates OH• by radiolysis of water (H₂O → OH• + H•). UV radiation generates ROS in skin cells.

4. **Chemical toxins** — carbon tetrachloride (CCl₄) → CCl₃• free radical; paraquat herbicide → superoxide generation; adriamycin (doxorubicin) → quinone radical cycling.

5. **Normal metabolism** — approximately 1–5% of electron transport chain electrons leak to form superoxide under normal conditions. Antioxidant defences handle this physiologically.

**Antioxidant defences:**

Cells maintain multiple antioxidant systems:
- **Superoxide dismutase (SOD)** — converts O₂•⁻ → H₂O₂. Three isoforms: cytoplasmic CuZn-SOD, mitochondrial Mn-SOD, extracellular EC-SOD.
- **Catalase** — converts H₂O₂ → H₂O + O₂. Present in peroxisomes.
- **Glutathione peroxidase** — reduces H₂O₂ and lipid peroxides using glutathione (GSH). Most important cellular H₂O₂ scavenger.
- **Glutathione (GSH)** — a tripeptide antioxidant that donates electrons to glutathione peroxidase. Paracetamol toxicity occurs when GSH stores are depleted and the toxic metabolite NAPQI accumulates unchecked.
- **Vitamin E (tocopherol)** — lipid-soluble, intercalated in membranes. Breaks lipid peroxidation chain reactions.
- **Vitamin C (ascorbic acid)** — water-soluble antioxidant. Regenerates vitamin E.
- **Thioredoxin system** — reduces oxidised proteins.

**The pathological consequences of oxidative stress:**

- Ageing — the "free radical theory of ageing" proposes cumulative oxidative damage over time as a major mechanism
- Atherosclerosis — LDL oxidation is a critical early step
- Neurodegenerative diseases — Parkinson's, Alzheimer's, ALS all show evidence of oxidative damage
- Cancer — DNA oxidative damage causes mutations
- Radiation sickness — direct OH• generation

**Grasp Tonic 🧃**

Free radicals are like sparks in a fireworks factory. One spark ignites one firework — that firework produces sparks that ignite others — a chain reaction that is almost impossible to stop once started. The antioxidant systems in your cells are like fire extinguishers stationed throughout the factory. As long as sparks are generated slowly, the extinguishers handle them. But in ischaemia-reperfusion — when oxygen suddenly returns to oxygen-starved mitochondria — it is like throwing a lit match into the entire factory at once. The extinguishers are overwhelmed. This is why reperfusion injury, paradoxically, causes additional cellular damage even as it restores oxygen supply.`,
    },
    {
      id: 10,
      title: 'Intracellular Accumulations',
      isDeepDive: false,
      content: `When cells are injured or overwhelmed, abnormal substances can accumulate within them. These intracellular accumulations are the morphological signatures of specific diseases — recognisable under the microscope and clinically important.

**The mechanisms of intracellular accumulation:**

Substances accumulate when:
1. A normal endogenous substance is produced faster than it can be metabolised or exported
2. A normal substance cannot be metabolised due to enzyme deficiency
3. An abnormal exogenous substance is ingested and cannot be degraded
4. A normal substance is degraded but a metabolite accumulates

**1. Lipids — fatty change (steatosis)**

Fat accumulates in cells when lipid metabolism is disrupted. The liver is the most common and most important site.

**Hepatic steatosis** occurs in:
- **Alcoholic liver disease** — alcohol alters redox state (↑NADH:NAD⁺) → impairs fatty acid oxidation, stimulates lipid synthesis, impairs lipoprotein export
- **Non-alcoholic fatty liver disease (NAFLD)** — insulin resistance → increased free fatty acid delivery to the liver, increased de novo lipogenesis
- **Obesity, diabetes mellitus type 2**
- **Protein malnutrition** — impairs apolipoprotein synthesis → fat cannot be exported from liver
- **Drugs** — corticosteroids, tetracycline, amiodarone, methotrexate
- **Hypoxia** — impairs fatty acid oxidation (requires mitochondrial function)

Morphology: hepatocytes contain large clear vacuoles (fat is dissolved during tissue processing). Macrovesicular (large single vacuole displacing nucleus) or microvesicular (multiple small vacuoles) patterns. The macronodular or micronodular pattern affects prognosis in alcoholic liver disease.

**2. Proteins — various accumulations**

**Russell bodies** — accumulations of immunoglobulin in plasma cells that are producing excess antibody. The rough ER becomes distended with immunoglobulin → homogeneous, eosinophilic inclusions. Seen in plasma cell myeloma and chronic inflammatory states.

**Mallory-Denk bodies (Mallory's hyaline)** — clumped intermediate filaments (cytokeratins) in hepatocytes. Eosinophilic, rope-like inclusions. Classic in **alcoholic hepatitis** but also seen in non-alcoholic steatohepatitis (NASH), Wilson's disease, primary biliary cirrhosis.

**Alpha-1 antitrypsin deficiency** — misfolded alpha-1 antitrypsin accumulates in hepatocyte ER → PAS-positive, diastase-resistant globules in periportal hepatocytes. Causes both liver disease (from intracellular accumulation) and lung disease (from lack of antiprotease activity in lungs → emphysema).

**Hyaline change** — a non-specific term for any homogeneous, glassy eosinophilic material seen in cells or extracellularly. Not always pathological.

**3. Glycogen**

Abnormal glycogen accumulation occurs in:
- **Glycogen storage diseases** (von Gierke's, Pompe's, Cori's etc.) — enzyme deficiencies in glycogen metabolism → massive accumulation in liver, heart, or muscle
- **Diabetes mellitus** — hyperglycaemia leads to glycogen accumulation in proximal tubule cells (glycogen nephropathy) and hepatocytes
- **Well-oxygenated cancer cells** — rapidly dividing cells preferentially use aerobic glycolysis (Warburg effect) and can accumulate glycogen

**4. Pigments — endogenous and exogenous**

**Lipofuscin** — "wear and tear" pigment. Brown-yellow granules in the cytoplasm of ageing cells (liver, heart, neurons). Indigestible oxidised lipid-protein complexes from membrane peroxidation. Not harmful but a marker of cellular ageing. Livers with extensive lipofuscin appear "brown atrophy."

**Melanin** — brown-black pigment in melanocytes. Disorders of accumulation: freckles, lentigines, melanocytic naevi, melanoma. Disorders of deficiency: vitiligo, albinism.

**Haemosiderin** — golden-brown iron-containing pigment. Haemoglobin breakdown product. Accumulates in:
- Sites of haemorrhage (macrophages phagocytose RBCs → haem → haemosiderin — the yellow-green colour of a bruise resolving)
- Haemochromatosis — systemic iron overload → haemosiderin accumulation in liver, pancreas, heart, joints, skin → cirrhosis, diabetes, cardiomyopathy, arthropathy, bronze skin
- Pulmonary haemosiderosis — chronic heart failure → pulmonary congestion → RBC extravasation → haemosiderin in alveolar macrophages ("heart failure cells")

**Bilirubin** — breakdown product of haem. Normal serum bilirubin <17 μmol/L. Elevated → jaundice (scleral icterus, jaundiced skin). Accumulates in liver disease (impaired conjugation/excretion), haemolysis (excess production), or bile duct obstruction (conjugated bilirubin cannot be excreted).

**Exogenous pigments:**
- **Carbon (anthracosis)** — most common. Inhaled → phagocytosed by alveolar macrophages → transported to hilar lymph nodes → permanently deposited (nodes turn black). Pneumoconiosis (coal workers): massive accumulation → pulmonary fibrosis.
- **Tattooing** — inert pigments deposited in dermis → phagocytosed by macrophages, never eliminated

**5. Calcium**

**Dystrophic calcification** — calcium deposits in dead or dying tissue (despite normal serum calcium). The dead tissue acts as a nidus for calcium phosphate deposition. Seen in:
- Atherosclerotic plaques
- Areas of caseous necrosis (TB)
- Fat necrosis
- Old thrombi ("phleboliths")
- Tumours (especially papillary thyroid carcinoma — psammoma bodies)

**Metastatic calcification** — calcium deposits in normal tissue due to hypercalcaemia (elevated serum calcium). Occurs in hyperparathyroidism, vitamin D toxicity, malignancy with bone destruction. Affects lungs (interstitial), kidneys (nephrocalcinosis), gastric mucosa.

**Grasp Tonic 🧃**

Intracellular accumulations are like the mess a city creates when its waste management system breaks down. Normal rubbish (fat, protein, pigment) accumulates when the collection trucks (metabolic enzymes, export systems) stop working. In haemochromatosis, iron — which is normally strictly regulated — floods every tissue because the iron sensor is broken. In lysosomal storage diseases, the garbage compactor (lysosome) is defective, so partially digested material piles up until the cell can no longer function. Every accumulation tells you which part of the waste management system has failed.`,
    },
    {
      id: 11,
      title: 'Cellular Ageing',
      isDeepDive: false,
      content: `Ageing is the progressive decline in the functional capacity of cells, tissues, and organisms over time. It is not merely the passive accumulation of damage — it involves specific molecular programmes that limit cellular lifespan. Understanding ageing is understanding the biology of why organisms have finite lives and why age is the single greatest risk factor for most diseases.

**Replicative senescence — the Hayflick limit**

In 1961, Leonard Hayflick observed that normal human cells could only divide approximately 50–70 times before permanently stopping. This is the **Hayflick limit**. Beyond this, cells enter **replicative senescence** — a state of permanent cell cycle arrest.

The molecular basis is **telomere shortening**.

**Telomeres** are repetitive DNA sequences (TTAGGG)n at chromosome ends, bound by shelterin proteins. They protect chromosome ends from being recognised as double-strand breaks. With each cell division, telomeres shorten slightly (~50–200 bp) because DNA polymerase cannot fully replicate the very end of linear chromosomes (**the end-replication problem**).

When telomeres become critically short:
- Shelterin dissociates
- The exposed chromosome end triggers a DNA damage response
- p53 is activated → cell cycle arrest (senescence)
- OR, if p53 is non-functional: continued division with chromosomal instability → crisis → cell death or cancer

**Telomerase** — the enzyme that adds telomeric repeats — is active in germ cells, stem cells, and ~90% of cancers. This is why cancer cells are "immortal" — they maintain or restore telomere length, bypassing the Hayflick limit.

**Mechanisms of cellular ageing:**

**1. Telomere erosion** — as above. Each division brings cells closer to senescence.

**2. Accumulated DNA damage** — despite repair mechanisms, DNA damage accumulates over a lifetime:
- Oxidative damage from ROS
- Spontaneous deamination, depurination
- Environmental mutagens (UV, radiation, chemicals)
- Replication errors

Ageing cells have reduced DNA repair capacity — DNA damage accumulates faster than it is fixed.

**3. Mitochondrial dysfunction** — ageing mitochondria accumulate mutations in mitochondrial DNA (which has limited repair capacity and is close to the electron transport chain — the main ROS source). Dysfunctional mitochondria produce more ROS but less ATP → accelerating damage.

**4. Protein homeostasis failure (proteostasis)** — the ubiquitin-proteasome system and autophagy both decline with age. Misfolded proteins accumulate → formation of toxic aggregates:
- Amyloid-β plaques (Alzheimer's)
- Alpha-synuclein (Parkinson's)
- Tau tangles (Alzheimer's, frontotemporal dementia)

**5. Epigenetic changes** — methylation patterns of DNA change with age, altering gene expression. The "epigenetic clock" (Horvath clock) measures biological age through DNA methylation patterns.

**6. Deregulated nutrient sensing** — pathways that sense nutrient availability (mTOR, insulin/IGF-1 signalling, sirtuins) affect ageing rate. Caloric restriction, which reduces mTOR and insulin signalling, consistently extends lifespan in model organisms.

**7. Altered intercellular communication** — senescent cells secrete pro-inflammatory mediators (**SASP — senescence-associated secretory phenotype**). This chronic, low-grade inflammation associated with ageing is called **inflammaging** and contributes to age-related diseases (cardiovascular disease, type 2 diabetes, neurodegenerative diseases, cancer).

**Morphological features of ageing cells:**

- Reduced size (atrophy)
- Accumulation of lipofuscin (wear-and-tear pigment)
- Irregular nuclei with deeply indented membranes
- Reduced mitochondria; those present have abnormal morphology
- Reduced rough ER
- Cytoplasmic vacuoles

**Werner syndrome and progeria — accelerated ageing models:**

**Werner syndrome** — autosomal recessive loss of WRN helicase (involved in DNA repair and telomere maintenance). Premature ageing after puberty: cataracts, atherosclerosis, diabetes, osteoporosis, sarcomas. Death in 40s–50s.

**Hutchinson-Gilford progeria** — dominant negative mutation in lamin A (LMNA gene). Progerin — the truncated lamin A — disrupts nuclear architecture → premature ageing. Children appear elderly; die of cardiovascular disease in teens.

These syndromes confirm that DNA repair and genome stability are central to normal ageing.

**Grasp Tonic 🧃**

Cellular ageing is like a photocopier running low on toner. The first few thousand copies are perfect. After many thousands of copies, the copies begin to deteriorate — smudged, faded, slightly misaligned. The machine does not suddenly fail; it gradually degrades. Each generation of cells (each copy) has slightly more accumulated errors. The telomere shortening is like the toner indicator counting down — a molecular clock that measures how many more divisions are possible. And just as you can extend a photocopier's life with maintenance (DNA repair, antioxidants), you cannot extend it indefinitely. Eventually, the machine simply cannot produce an acceptable copy anymore.`,
    },
    {
      id: 12,
      title: 'Calcification, Hyalinisation & Amyloid',
      isDeepDive: false,
      content: `Beyond intracellular accumulations, several important extracellular or mixed processes can damage tissues. Three deserve dedicated attention: pathological calcification, hyalinisation, and amyloidosis.

**Pathological calcification — revisited and expanded**

We introduced calcification in Section 10. Here we expand on its clinical consequences.

**Dystrophic calcification:**

Calcium phosphate deposits in dead or injured tissue. Serum calcium is normal.

Mechanisms:
- Dead tissue releases phospholipids → act as nucleation sites for calcium phosphate crystal growth
- Mitochondria in dying cells accumulate calcium (as discussed in Section 6)
- pH changes in necrotic tissue favour precipitation

**Clinical consequences of dystrophic calcification:**
- **Atherosclerotic plaques** — calcification hardens plaques → loss of vascular compliance, contributes to hypertension. Coronary artery calcification (CAC score on CT) predicts cardiovascular risk.
- **Heart valves** — calcification of aortic valve → calcific aortic stenosis (most common cause of aortic stenosis in developed countries, especially in elderly). Mitral annular calcification → mitral regurgitation or stenosis.
- **Chronic pancreatitis** — calcification of pancreatic parenchyma and ducts, visible on plain radiograph
- **Psammoma bodies** — concentric laminated calcifications in papillary thyroid carcinoma, meningioma, papillary serous ovarian carcinoma, mesothelioma
- **TB foci** — calcified Ghon complex (primary TB focus + hilar lymph node) → visible on CXR as Ranke complex

**Metastatic calcification:**

Hypercalcaemia drives calcium into normal tissues.

Common sites: interstitial lung (causes restrictive pattern), renal tubules and collecting ducts (nephrocalcinosis, renal calculi), gastric mucosa, blood vessel walls.

**Hyalinisation (hyaline change)**

"Hyaline" derives from Greek for "glass" — any homogeneous, pink, glassy-appearing material on H&E stain. Not a specific pathological entity but a morphological description. Important examples:

**Intracellular hyaline:**
- **Alcoholic hyaline (Mallory-Denk bodies)** — cytokeratin aggregates in hepatocytes
- **Russell bodies** — immunoglobulin in plasma cells
- **Viral inclusions** — e.g., Cowdry type A inclusions in HSV/CMV infected cells; owl-eye inclusions in CMV

**Extracellular hyaline:**
- **Hyaline arteriolosclerosis** — thickening of small arteriole walls with homogeneous, eosinophilic material. Occurs in hypertension and diabetes mellitus. Narrows arteriolar lumen → downstream ischaemia (retinopathy, nephropathy).
- **Hyaline membrane disease** — hyaline membranes in alveoli of premature neonates (respiratory distress syndrome, from surfactant deficiency)
- **Hyalinised stroma** — common in ageing tissues and many tumours

**Amyloidosis**

Amyloidosis is a group of diseases characterised by extracellular deposition of abnormal protein fibrils with a specific beta-pleated sheet configuration — this secondary structure gives amyloid its characteristic staining properties and resistance to degradation.

**Congo red stain** — amyloid stains brick-red; under polarised light shows **apple-green birefringence** — the pathognomonic feature.

**The amyloid fibril proteins — classified by precursor:**

**AL amyloid (Amyloid Light chain):**
- Precursor: immunoglobulin light chains (usually lambda)
- Source: plasma cells in multiple myeloma or plasma cell dyscrasia
- Most common cause of systemic amyloidosis in developed countries
- Deposits in: kidney (nephrotic syndrome), heart (restrictive cardiomyopathy), liver (hepatomegaly), tongue (macroglossia — classic), peripheral nerves

**AA amyloid (Amyloid A):**
- Precursor: serum amyloid A protein (SAA) — an acute phase reactant
- Source: chronic inflammatory conditions (reactive/secondary amyloidosis)
- Causes: rheumatoid arthritis, IBD, chronic osteomyelitis, familial Mediterranean fever, bronchiectasis
- Deposits primarily in: kidney (most common organ affected), liver, spleen

**ATTR amyloid (Transthyretin amyloid):**
- Precursor: transthyretin (TTR, formerly "prealbumin") — made in the liver
- Two forms:
  * **Hereditary/familial ATTR** — missense mutations in TTR gene → unstable TTR → fibril formation. Val122Ile mutation: 4% of African Americans → cardiac amyloidosis.
  * **Wild-type ATTR (senile amyloidosis)** — normal TTR misfolds with age → deposits in heart of elderly men. Increasingly recognised as a significant cause of heart failure in the elderly.
- Deposits in: heart (most clinically significant), peripheral nerves (carpal tunnel syndrome — often the first manifestation of hereditary ATTR)

**Aβ amyloid:**
- Precursor: amyloid precursor protein (APP) → cleaved by β- and γ-secretase → Aβ42 peptide
- Deposits in: brain parenchyma (senile plaques) and cerebral vessel walls (amyloid angiopathy) in **Alzheimer's disease**
- Aβ42 is more amyloidogenic than Aβ40

**Clinical consequences of amyloidosis:**
- **Kidney** → deposits in mesangium and glomerular capillary walls → proteinuria → nephrotic syndrome → renal failure. Kidney appears enlarged, pale, waxy.
- **Heart** → deposits in interstitium between cardiomyocytes → restrictive cardiomyopathy → heart failure. Low voltage on ECG despite thick walls on echo. Amyloid sparkle on echocardiography.
- **Liver** → hepatomegaly. Spleen → splenomegaly (sago spleen in early AA amyloid; lardaceous spleen in advanced disease).
- **Nerves** → peripheral neuropathy, autonomic neuropathy (orthostatic hypotension, diarrhoea)

**Diagnosis:** Tissue biopsy (abdominal fat pad, rectal mucosa, kidney, heart). Congo red staining with polarised light microscopy.

**Treatment:** AL amyloid → treat underlying plasma cell dyscrasia (chemotherapy, stem cell transplant). AA amyloid → suppress underlying inflammation. ATTR amyloid → tafamidis (stabilises TTR tetramer); patisiran/inotersen (siRNA/antisense oligonucleotide to reduce TTR production).

**Grasp Tonic 🧃**

Amyloid is like a city whose buildings are made from defective bricks — bricks that, once stacked, cannot be taken apart. Normal bricks (proteins) are made, used, and recycled. Amyloid proteins are made but misfolded into a configuration that resists all the city's demolition tools (proteases cannot break the beta-pleated sheet). The defective bricks accumulate inexorably — stiffening the walls of the heart, clogging the filters of the kidneys, jamming the wiring of the nervous system. The city cannot function efficiently when its infrastructure is increasingly replaced by indestructible, useless material.`,
    },
    {
      id: 13,
      title: 'Teaching Receipt™ — Cellular Injury & Adaptation',
      isDeepDive: false,
      content: `You have completed the core sections of Cellular Injury & Adaptation. This is the foundation of all pathology — every disease you will study builds on these principles.

**The Big Picture**

Cells exist in a state of homeostasis — a dynamic equilibrium maintained by energy production, membrane integrity, protein turnover, calcium regulation, and DNA surveillance. When this equilibrium is disturbed by hypoxia, toxins, infection, immune attack, or genetic defects, cells respond in characteristic ways.

**The Adaptation Spectrum**

Cells adapt to survive stress. Hypertrophy (bigger cells) and hyperplasia (more cells) increase capacity. Atrophy (smaller cells) reduces energy demands. Metaplasia (different cell type) provides more durable tissue for the environment. These adaptations are reversible — remove the stress, the cell normalises. But when adaptation is overwhelmed, injury begins.

**Reversible vs Irreversible Injury**

The critical threshold between reversible and irreversible injury is defined by:
- Severity of mitochondrial damage (flocculent densities, loss of cristae)
- Plasma membrane rupture (release of intracellular enzymes — clinical biomarkers)
- Massive calcium influx activating phospholipases, proteases, and endonucleases

Before this threshold — intervene and save the tissue. After — the damage is done.

**The Two Deaths**

Necrosis: uncontrolled, inflammatory, affects groups of cells. Six patterns — coagulative (most organs), liquefactive (brain, abscesses), caseous (TB), fat necrosis (pancreas, breast), gangrenous (limbs), fibrinoid (blood vessels).

Apoptosis: controlled, non-inflammatory, affects individual cells. Two pathways — intrinsic (mitochondria/BCL-2/cytochrome c/caspase-9) and extrinsic (death receptors/caspase-8). Both converge on executioner caspase-3.

**The Other Mechanisms**

Free radical injury underlies ischaemia-reperfusion, radiation, chemical toxicity, and ageing. Antioxidant systems (SOD, catalase, glutathione) provide protection.

Intracellular accumulations (fat, proteins, pigments, calcium, glycogen) are morphological signatures of specific diseases — each tells you which metabolic system has failed.

Cellular ageing involves telomere shortening, accumulated DNA damage, mitochondrial dysfunction, and proteostasis failure — resulting in senescence and inflammaging.

Amyloidosis represents extracellular accumulation of beta-pleated sheet proteins that resist degradation — diagnosed by Congo red staining with apple-green birefringence under polarised light.

You are now ready for the Deep Dive — where we explore the molecular mechanics of apoptosis, the BCL-2 family in cancer therapy, necroptosis, pyroptosis, and the cutting edge of cell death biology.`,
    },
    {
      id: 14,
      title: 'Deep Dive — Molecular Cell Death Pathways & Clinical Therapeutics',
      isDeepDive: true,
      content: `This Deep Dive explores the molecular mechanisms of cell death in greater depth — covering the BCL-2 family in detail, novel cell death modalities, and how these pathways are being exploited therapeutically.

**The BCL-2 Family — Master Regulators of Apoptosis**

The BCL-2 family of proteins controls the intrinsic (mitochondrial) pathway of apoptosis. They are defined by the presence of BCL-2 homology (BH) domains.

**Anti-apoptotic members (BH1, BH2, BH3, BH4 domains):**
- BCL-2, BCL-XL, BCL-W, MCL-1, A1/BFL-1
- Reside on the mitochondrial outer membrane
- Sequester BAX and BAK, preventing pore formation
- Each has slightly different binding preferences for BH3-only proteins

**Pro-apoptotic effectors (BH1, BH2, BH3 domains — lack BH4):**
- BAX, BAK, BOK
- BAX is cytosolic in healthy cells; upon activation, translocates to mitochondria and oligomerises
- BAK is constitutively mitochondria-associated
- Oligomerised BAX/BAK form **proteolipid pores** in the outer mitochondrial membrane → MOMP (mitochondrial outer membrane permeabilisation) → cytochrome c release

**BH3-only proteins (only BH3 domain):**
- Sensors and activators: BIM, BID (tBID after caspase-8 cleavage), PUMA, NOXA
- Direct activators: BIM, BID — directly bind and activate BAX/BAK
- Derepressors/sensitisers: BAD, BIK, HRK, NOXA — bind and inhibit BCL-2/BCL-XL/MCL-1, releasing BAX/BAK from inhibition

The balance between pro- and anti-apoptotic BCL-2 family members determines whether a cell lives or dies in response to stress.

**BCL-2 in cancer:**

BCL-2 was discovered at the t(14;18) chromosomal translocation breakpoint in follicular lymphoma. The translocation places BCL-2 under the control of immunoglobulin heavy chain enhancers → BCL-2 overexpression → inhibited apoptosis → lymphocyte accumulation → lymphoma.

**BCL-2 inhibitors in cancer therapy:**

**Venetoclax (ABT-199)** — selective BCL-2 inhibitor. Displaces BAX from BCL-2 → direct apoptosis induction in BCL-2-dependent cancer cells.
- FDA approved: Chronic lymphocytic leukaemia (CLL) with del(17p) or TP53 mutation; AML in combination with azacitidine; multiple myeloma combinations.
- Tumour lysis syndrome (TLS) is a major toxicity risk (massive cancer cell death releasing uric acid, potassium, phosphate) — requires ramp-up dosing and prophylaxis.

**Navitoclax (ABT-263)** — inhibits BCL-2, BCL-XL, and BCL-W. Effective in lymphomas and small cell lung cancer but causes significant thrombocytopenia (platelets are BCL-XL-dependent for survival).

**MCL-1 inhibitors** — in development. MCL-1 is a common resistance mechanism to venetoclax.

**MOMP and the "point of commitment":**

MOMP (mitochondrial outer membrane permeabilisation) is considered the point of no return in apoptosis — once cytochrome c is released, caspase activation proceeds to completion even if the initiating signal is removed. Interestingly, incomplete MOMP (affecting only some mitochondria) can lead to incomplete caspase activation and "minority MOMP" — cells survive apoptotic signalling but with accumulated damage, potentially contributing to genomic instability and cancer evolution.

**Novel Cell Death Modalities**

Beyond classical apoptosis and necrosis, multiple programmed cell death pathways have been characterised:

**Necroptosis:**

A form of programmed necrosis — it has the morphological appearance of necrosis (cell swelling, membrane rupture, inflammation) but is executed by a specific molecular programme.

Trigger: death receptor activation (TNF-TNFR1) or TLR signalling, in conditions where caspase-8 activity is inhibited.

Pathway:
TNFR1 → RIPK1 → RIPK3 → MLKL phosphorylation → MLKL oligomerises → inserts into plasma membrane → pore formation → cell lysis

MLKL (mixed lineage kinase domain-like protein) is the executioner of necroptosis.

Clinical relevance:
- Ischaemia-reperfusion injury — significant component of necroptotic death
- Inflammatory bowel disease — intestinal epithelial necroptosis
- Some viral infections (viruses that inhibit caspase-8 to block apoptosis, inadvertently triggering necroptosis as backup)
- RIPK1/RIPK3 inhibitors are in clinical development for inflammatory disease

**Pyroptosis:**

Inflammatory programmed cell death via gasdermin pore formation.

Pathway:
Inflammasome activation (NLRP3, NLRC4, AIM2, Pyrin) → caspase-1 cleavage → gasdermin D (GSDMD) cleavage → N-terminal GSDMD forms pores in plasma membrane → IL-1β, IL-18 maturation and release → cell swelling and lysis

Also: caspase-4/5 (humans), caspase-11 (mice) → directly cleave GSDMD in response to cytosolic LPS (gram-negative bacteria).

NLRP3 inflammasome is of major clinical interest — activated by:
- Monosodium urate crystals (gout)
- Cholesterol crystals (atherosclerosis)
- ATP (danger signal)
- Silica crystals (silicosis)
- Islet amyloid polypeptide (IAPP in type 2 diabetes → islet inflammation)

NLRP3 inhibitors (MCC950/canakinumab) are being studied in gout, atherosclerosis, and COVID-19-associated cytokine storm.

**Ferroptosis:**

Iron-dependent non-apoptotic cell death characterised by:
- Accumulation of lipid peroxides (especially phosphatidylethanolamine-containing arachidonic acid)
- Dependency on iron (for Fenton reaction generating OH•)
- GPX4 (glutathione peroxidase 4) as the key protective enzyme — reduces phospholipid hydroperoxides to non-toxic alcohols

Ferroptosis is triggered by:
- GPX4 inhibition (RSL3, ML162)
- Glutathione depletion (erastin, system Xc⁻ inhibitor → blocks cystine import → GSH synthesis impaired)
- Iron overload

Clinical relevance:
- Renal ischaemia-reperfusion injury — ferroptosis is a major component
- Neurodegeneration — brain neurons are particularly susceptible (high polyunsaturated fatty acid content, high iron)
- Cancer — some cancer cells (with high mesenchymal phenotype) are ferroptosis-sensitive — therapeutic opportunity
- Haemochromatosis — iron overload → ferroptotic liver injury

**Immunogenic cell death (ICD):**

A form of apoptosis that triggers an immune response against the dying cell's antigens.

Required DAMPs for ICD:
- **Calreticulin exposure** on cell surface (eat-me signal for dendritic cells)
- **HMGB1 release** (danger signal)
- **ATP secretion** (find-me signal, recruits dendritic cells)

Inducers of ICD:
- Anthracyclines (doxorubicin, daunorubicin)
- Oxaliplatin
- Cyclophosphamide at certain doses
- Radiation (immunogenic doses)
- Photodynamic therapy

ICD transforms dying cancer cells into vaccines — the released DAMPs activate dendritic cells that present tumour antigens to T cells, generating antitumour immunity. This is why chemotherapy + immune checkpoint inhibitors can be synergistic.

**The ER Stress Response and Cell Death**

The unfolded protein response (UPR) is activated when misfolded proteins accumulate in the ER. Three ER stress sensors (IRE1α, PERK, ATF6) activate adaptive responses (increased chaperone production, reduced translation, enhanced ER-associated degradation (ERAD)). If ER stress is unresolvable, the UPR switches from pro-survival to pro-apoptotic.

Diseases with prominent ER stress:
- Multiple myeloma (secreting large amounts of immunoglobulin → ER overwhelmed)
- Type 2 diabetes (β-cell ER stress from excessive insulin demand)
- Neurodegenerative diseases (protein aggregation)
- Alpha-1 antitrypsin deficiency (misfolded protein trapped in ER)

**Therapeutic exploitation:**
- Bortezomib (proteasome inhibitor) in myeloma → amplifies ER stress → triggers apoptosis
- HSP90 inhibitors → destabilise client oncoproteins → proteotoxic stress → death

**p53 — Integrator of Cellular Stress Responses**

p53 (encoded by TP53, the most frequently mutated gene in human cancer) is activated by:
- DNA double-strand breaks (via ATM → CHK2 → p53 stabilisation)
- Single-strand breaks (via ATR → CHK1 → p53 stabilisation)
- Oncogene activation (ARF pathway)
- Hypoxia, ribonucleotide depletion, mitotic spindle stress

p53 transcriptional targets determine cell fate:
- **Cell cycle arrest**: p21 (CDKN1A) → inhibits CDK4/6 and CDK2 → G1 and S phase arrest
- **DNA repair**: GADD45, DDB2
- **Apoptosis**: PUMA, NOXA (BH3-only proteins), BAX, FAS/CD95
- **Senescence**: p21, PAI-1
- **Metabolism**: TIGAR (reduces ROS), GLS2 (glutaminolysis)
- **Ferroptosis**: p53 activates SAT1 and GLS2 → promotes ferroptosis

The decision between arrest, repair, senescence, and death depends on stress magnitude, cell type, and MDM2 levels (MDM2 is a p53 E3 ubiquitin ligase — induced by p53 itself as a negative feedback).

**Why TP53 mutation drives cancer:**
- Loss of G1 checkpoint → DNA damage not repaired before replication
- Loss of apoptosis → damaged cells survive
- Gain-of-function p53 mutants actively promote oncogenic transcription programs

Therapeutic strategies targeting p53:
- **MDM2 inhibitors** (nutlin-3, AMG232) — prevent MDM2-mediated p53 degradation → restore p53 activity in WT p53 cancers (many haematological malignancies)
- **APR-246 (Eprenetapopt)** — converts mutant p53 to wild-type conformation → restores tumour suppression. In trials for TP53-mutant AML and myelodysplastic syndrome.`,
    },
  ],
  teachingReceipt: {
    mastered: [
      'The four major cellular adaptations — hypertrophy, hyperplasia, atrophy, and metaplasia — with physiological and pathological examples of each',
      'The progression from reversible to irreversible injury, and the three hallmarks of irreversible injury under EM',
      'The six patterns of necrosis and the tissue and disease context of each',
      'The intrinsic and extrinsic pathways of apoptosis, the role of caspases, and the morphological contrast with necrosis',
      'The mechanisms of free radical generation, antioxidant defences, and the clinical importance of ischaemia-reperfusion injury',
      'The major categories of intracellular accumulations — lipids, proteins, pigments, calcium, glycogen — and their disease associations',
      'The molecular mechanisms of cellular ageing — telomere shortening, DNA damage, mitochondrial dysfunction, and proteostasis failure',
      'Dystrophic vs metastatic calcification, hyalinisation, and the classification and clinical consequences of amyloidosis',
      'Clinical biomarkers of cellular necrosis and how to use them to identify which tissue is injured',
    ],
    selfCheckQuestions: [
      'A 55-year-old has a myocardial infarction. Walk through the cellular events from the moment of coronary occlusion to scar formation, naming the stage and mechanisms at each step.',
      'Why does the brain undergo liquefactive necrosis while the heart undergoes coagulative necrosis after ischaemia?',
      'Explain the Hayflick limit. Why do cancer cells not have one?',
      'A patient with COPD and alpha-1 antitrypsin deficiency has liver disease. What is accumulating in the hepatocytes and why does this cause liver injury?',
      'Compare and contrast apoptosis and necrosis across five features: cell size, membrane integrity, inflammation, energy requirement, and pattern of involvement.',
      'What is ischaemia-reperfusion injury and why can restoring blood flow sometimes cause additional damage?',
      'A patient with chronic rheumatoid arthritis develops nephrotic syndrome. Biopsy shows Congo red-positive deposits with apple-green birefringence under polarised light. What type of amyloid is this, what is the precursor protein, and what is the treatment?',
      'Explain why correcting metabolic acidosis in a DKA patient can cause dangerous hypokalaemia.',
      'What is the significance of the BCL-2 translocation in follicular lymphoma, and how does venetoclax exploit this mechanism therapeutically?',
      'A patient is found to have dystrophic calcification on a chest X-ray. What does this tell you about the underlying pathological process?',
    ],
  },
};