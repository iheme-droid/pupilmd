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

export const acidBaseChapter: CrashChapter = {
  chapterTitle: 'Acid-Base & Fluid/Electrolyte Disorders',
  moduleSlug: 'acid-base',
  sections: [
    {
      id: 0,
      title: 'The Marable™ — The Swimming Pool',
      isDeepDive: false,
      content: `Imagine you manage a large community swimming pool.

Your job is simple but non-negotiable: the water's pH must stay between 7.35 and 7.45 at all times. Too acidic and the swimmers' eyes burn, the equipment corrodes, and the chlorine stops working. Too alkaline and scale builds up, bacteria thrive, and swimmers develop skin irritation. The margins are narrow. The consequences of failure are real.

Every day, the pool faces challenges. Swimmers bring in acidic sweat and carbon dioxide from their breath. Rain dilutes the chemicals. Chemicals degrade. Debris accumulates. Yet somehow the pool stays balanced — because you have three systems working around the clock.

**System One: The Chemical Buffer (immediate — seconds)**

Dissolved in the water at all times are chemical buffers — substances that immediately neutralise any acid or base that enters. Someone dumps a bucket of acid in? The buffers react instantly, absorbing the H⁺ ions before the pH can shift significantly. This system is always on, always fast. But it has a limit — the buffers get used up.

**System Two: The Ventilation System (fast — minutes)**

If acid levels start rising despite the buffers, a ventilation pump kicks in — bubbling through the water, driving off acidic gas. The more acidic the water, the harder the pump works. Conversely, if the water becomes too alkaline, the pump slows down, retaining a little acid gas to restore balance. This system responds within minutes and can adjust significantly. But it cannot generate new buffers — it only adjusts the dissolved gas.

**System Three: The Filtration and Regeneration System (slow — hours to days)**

Deep in the pump room is a sophisticated filtration system. Given enough time, it can do something the other two systems cannot — it can regenerate depleted buffers, selectively remove excess acid or base, and fine-tune the water chemistry to a precision the other systems cannot match. It is slow. It takes hours to days to make meaningful changes. But it is powerful.

Here is the key insight: **all three systems work together, compensating for each other's limitations**. A pool whose ventilation system has broken down will lean heavily on its buffers and filtration. A pool with depleted chemical buffers will need the ventilation to work overtime. And when the filtration system fails completely — the pool can only manage short-term. Eventually, without slow, powerful regeneration of buffers, the chemistry spirals out of control.

Your body's acid-base system is this pool. Your blood pH must stay within the same narrow window — 7.35 to 7.45. You have the same three systems:

- **Chemical buffers** (bicarbonate, haemoglobin, phosphate, proteins) — seconds
- **Lungs** — minutes
- **Kidneys** — hours to days

Understanding acid-base disorders is understanding what happens when one or more of these systems fails — and how the others try to compensate.`,
    },
    {
      id: 1,
      title: 'Introduction — Acids, Bases & the Body\'s pH System',
      isDeepDive: false,
      content: `Acid-base physiology sits at the intersection of chemistry and clinical medicine. Before we can understand disorders, we need a firm grasp of the underlying chemistry and why it matters so profoundly.

**What is an acid? What is a base?**

By the Brønsted-Lowry definition:
- An **acid** is a proton donor — it donates H⁺ ions
- A **base** is a proton acceptor — it accepts H⁺ ions

**pH** is a measure of hydrogen ion [H⁺] concentration:
pH = −log₁₀[H⁺]

Normal blood pH: **7.35–7.45** (slightly alkaline, since pure water is 7.0)

At pH 7.4: [H⁺] = 40 nmol/L

This seems trivially small — but this concentration is incredibly tightly regulated. A change from 40 to 80 nmol/L (doubling of H⁺) represents a fall in pH from 7.4 to 7.1 — already clinically severe acidaemia.

**Why is pH regulation so critical?**

Enzymes, transport proteins, receptors, and structural proteins all have optimal pH ranges. Even small deviations:
- Alter enzyme kinetics — metabolic reactions slow or accelerate inappropriately
- Change protein charge and shape — haemoglobin's oxygen affinity shifts, contractile proteins stiffen
- Affect ion channel function — cardiac and neural membrane stability depends on pH
- Impact drug binding — ionisation state of drugs changes with pH

**pH < 6.8 or > 7.8** is generally incompatible with life.

**The body's acid production — the daily challenge**

Cells constantly produce acid through normal metabolism:

**Volatile acid — CO₂:**
Aerobic metabolism produces approximately **15,000 mmol of CO₂ per day**. CO₂ dissolves in water:
CO₂ + H₂O ↔ H₂CO₃ ↔ H⁺ + HCO₃⁻

This is not stored — it is continuously blown off by the lungs. Any change in ventilation immediately changes [CO₂] in blood and therefore pH.

**Fixed (non-volatile) acids:**
Approximately **50–100 mEq of non-volatile acid per day** from:
- Protein catabolism → sulphuric acid (from methionine, cysteine)
- Phospholipid metabolism → phosphoric acid
- Incomplete carbohydrate metabolism → lactic acid
- Ketone body formation (in fasting or diabetes) → acetoacetic and beta-hydroxybutyric acids

These cannot be blown off — they must be excreted by the kidneys.

**The bicarbonate buffer system — the master equation**

The primary extracellular buffer:
CO₂ + H₂O ↔ H₂CO₃ ↔ H⁺ + HCO₃⁻

Catalysed by carbonic anhydrase (in red blood cells, renal tubular cells, gastric parietal cells, pulmonary capillaries).

**Henderson-Hasselbalch equation:**
pH = 6.1 + log([HCO₃⁻] / [0.03 × PaCO₂])

This is the master equation. It tells us:
- pH depends on the **ratio** of HCO₃⁻ to CO₂ — not their absolute values
- Normal ratio: 24 / (0.03 × 40) = 24/1.2 = 20:1
- As long as this ratio is maintained (~20:1), pH stays at 7.4

**Simplified Henderson equation:**
[H⁺] (nmol/L) = 24 × PaCO₂ / [HCO₃⁻]

This is clinically useful — if [H⁺] ≈ 40 (normal), then PaCO₂/HCO₃⁻ ≈ 40/24. If this ratio shifts, pH shifts.

**Grasp Tonic 🧃**

pH and H⁺ concentration move in opposite directions — which trips up many students. The higher the H⁺ concentration, the lower the pH. Think of it like this: pH is like altitude — the higher the number, the "higher" (more alkaline) you are. If acid pours in (H⁺ rises), you fall to a lower altitude (lower pH). The body's entire acid-base regulatory apparatus is designed to maintain altitude — to keep pH at 7.4 despite the constant rain of acid that normal metabolism produces every day.`,
    },
    {
      id: 2,
      title: 'The Buffer Systems — First Line of Defence',
      isDeepDive: false,
      content: `Buffers are the body's first — and fastest — response to pH change. They do not eliminate acid or base from the body, but they immediately minimise pH changes by chemically binding or releasing H⁺.

**The bicarbonate buffer system (primary extracellular buffer)**

HCO₃⁻ + H⁺ ↔ H₂CO₃ ↔ H₂O + CO₂

When acid is added: H⁺ is absorbed by HCO₃⁻, forming CO₂ which is exhaled
When base is added: CO₂ is retained, dissociates to provide H⁺

The bicarbonate system is the most important clinical buffer because:
1. It is the most abundant extracellular buffer
2. Its two components (CO₂ and HCO₃⁻) are independently regulated by lungs and kidneys respectively
3. It can be measured clinically on an ABG

**However**, the bicarbonate system is a poor buffer for bicarbonate itself — it cannot buffer changes in HCO₃⁻ directly (you cannot use bicarbonate to buffer changes in bicarbonate). This is why the other buffer systems matter.

**Haemoglobin — the dominant intracellular blood buffer**

Haemoglobin (Hb) is an excellent buffer, particularly for CO₂ transport:

In tissues: CO₂ enters red blood cells → carbonic anhydrase converts to H₂CO₃ → H⁺ + HCO₃⁻. The H⁺ is buffered by deoxygenated Hb (which accepts H⁺ better than oxygenated Hb — the Haldane effect). HCO₃⁻ exchanges with Cl⁻ and leaves the red cell (chloride shift).

In the lungs: the process reverses. Oxygenated Hb releases H⁺ → combines with HCO₃⁻ → CO₂ → exhaled.

In anaemia, haemoglobin buffering capacity is reduced — explaining why severely anaemic patients are more susceptible to acid-base disruption.

**Phosphate buffer system (primarily intracellular and urinary)**

H₂PO₄⁻ ↔ H⁺ + HPO₄²⁻

pKa = 6.8 — closer to physiological pH than bicarbonate (pKa 6.1), making it a more efficient buffer at normal pH. However, it is present in low concentrations in extracellular fluid.

In the **renal tubules**, phosphate is a major urinary buffer — it accepts secreted H⁺, forming titratable acid (H₂PO₄⁻) that is excreted in urine. This is why phosphate depletion impairs renal acid excretion.

**Protein buffers (intracellular)**

Intracellular proteins — particularly histidine residues (imidazole group, pKa ~6.0) — are major intracellular buffers. The intracellular compartment has much greater buffering capacity than extracellular fluid, but ion exchange between compartments takes 2–4 hours.

**Bone as a buffer**

In chronic metabolic acidosis, bone acts as a buffer — releasing calcium carbonate (CaCO₃) and calcium phosphate to neutralise acid. This is effective but costly: it results in bone demineralisation → osteoporosis, osteomalacia, and hypercalciuria (kidney stones). Patients with chronic kidney disease commonly develop renal osteodystrophy partly through this mechanism.

**The ammonia buffer system (renal)**

The kidney generates ammonia (NH₃) from glutamine in tubular cells:
NH₃ + H⁺ → NH₄⁺ (ammonium)

NH₄⁺ is excreted in urine, taking H⁺ with it. This is the kidney's most important mechanism for generating new bicarbonate. In chronic acidosis, renal ammonia production can increase 10-fold. In liver disease, impaired glutamine metabolism reduces ammonia buffering capacity.

**The concept of buffer capacity and pH range:**

Buffers are most effective when the pH is within 1 unit of the pKa:
- Bicarbonate (pKa 6.1) — less ideal buffer at pH 7.4, but compensated by its high concentration and independent regulation
- Phosphate (pKa 6.8) — more effective near physiological pH
- Haemoglobin (pKa ~7.0–7.4) — very effective in blood
- Albumin and other proteins (pKa ~7.0–7.5) — effective near physiological pH

**Grasp Tonic 🧃**

Buffers are like shock absorbers on a car. When you drive over a bump (acid load), the shock absorbers compress (H⁺ absorbed by HCO₃⁻, Hb, phosphate) — the car (pH) barely moves. But shock absorbers have a limit — compress them far enough and you feel every bump. In the body, once buffers are depleted (HCO₃⁻ falls from 24 to, say, 5 mEq/L), each additional H⁺ causes a much larger pH change. This is why patients with severe metabolic acidosis become haemodynamically unstable so quickly when their condition deteriorates further — there are almost no shock absorbers left.`,
    },
    {
      id: 3,
      title: 'The Lungs — Respiratory Regulation of pH',
      isDeepDive: false,
      content: `The lungs are the rapid responders of pH regulation. Through adjustments in respiratory rate and depth, they alter alveolar ventilation and therefore the partial pressure of CO₂ in arterial blood (PaCO₂) — achieving meaningful pH correction within minutes.

**The relationship between ventilation and PaCO₂:**

PaCO₂ is determined by the balance between CO₂ production (VCO₂) and alveolar ventilation (VA):
PaCO₂ ∝ VCO₂ / VA

Doubling alveolar ventilation halves PaCO₂. Halving alveolar ventilation doubles PaCO₂.

Normal PaCO₂: **35–45 mmHg** (40 mmHg ideal)

**How the lungs respond to acidaemia:**

When pH falls (acidaemia), peripheral and central chemoreceptors stimulate the respiratory centre in the medulla:
- Peripheral chemoreceptors (carotid and aortic bodies) — respond to both ↓pH and ↑CO₂ rapidly
- Central chemoreceptors (medullary surface) — respond primarily to CO₂/H⁺ in CSF. These are slower to respond to metabolic acid-base changes (CSF pH normalises more slowly than blood pH).

Stimulation → increased respiratory rate and tidal volume (hyperventilation) → more CO₂ exhaled → PaCO₂ falls → pH rises

The maximum hyperventilatory response can lower PaCO₂ to approximately **10–12 mmHg** (breathing is extremely laboured at this point).

**The Kussmaul breathing pattern:**

In severe metabolic acidosis (especially DKA), patients develop Kussmaul respirations — deep, rapid, regular breathing driven by metabolic acidaemia stimulating the respiratory centre. A classic clinical sign: patients are often found breathing deeply even though they do not feel short of breath (because their lungs are normal — the drive is metabolic, not pulmonary).

**How the lungs respond to alkalaemia:**

When pH rises (alkalaemia):
- Respiratory centre drive reduced
- Rate and depth of breathing decrease (hypoventilation)
- CO₂ retained → PaCO₂ rises → pH falls

However, respiratory compensation for metabolic alkalosis is limited — hypoventilation reduces O₂ delivery, and hypoxia itself becomes a powerful stimulus to breathe. PaCO₂ can usually only rise to approximately **50–55 mmHg** in compensation for metabolic alkalosis (at this point hypoxia overrides the alkalosis-driven hypoventilation).

**Primary respiratory disorders:**

**Respiratory acidosis (hypoventilation → ↑PaCO₂):**
Any condition that impairs the ability to blow off CO₂:
- Central drive depression: opioids, benzodiazepines, barbiturates, brainstem lesions (stroke, tumour), obesity hypoventilation syndrome (Pickwickian syndrome)
- Neuromuscular disease: myasthenia gravis, Guillain-Barré, amyotrophic lateral sclerosis, botulism, phrenic nerve palsy
- Chest wall disease: severe kyphoscoliosis, flail chest
- Airway obstruction: COPD exacerbation, severe asthma, upper airway obstruction, foreign body
- Severe parenchymal disease: ARDS, severe pneumonia, pulmonary oedema

**Respiratory alkalosis (hyperventilation → ↓PaCO₂):**
- Anxiety and panic attacks — the most common cause
- Pain, fever, pregnancy (progesterone stimulates breathing)
- Hypoxaemia (hypoxia stimulates hyperventilation as a reflex)
- Liver failure (cirrhosis causes respiratory alkalosis from elevated ammonia stimulating the respiratory centre)
- CNS disease stimulating the respiratory centre: meningitis, salicylate toxicity (early), encephalitis
- Mechanical ventilation with excessive minute volume

**The concept of acute vs chronic respiratory disorders:**

This is crucial for understanding compensation:

**Acute** = onset within hours. Kidneys have not yet compensated (compensation takes 3–5 days). pH deviates significantly from normal.

**Chronic** = ongoing for days to weeks. Kidneys have fully compensated. pH is near-normal (7.35–7.45) despite abnormal PaCO₂.

Example: A COPD patient with a baseline PaCO₂ of 60 mmHg and HCO₃⁻ of 35 mEq/L has chronic respiratory acidosis with full renal compensation. They live at pH 7.37. This is their normal. If you see this patient acutely and "correct" their CO₂ to 40 mmHg with mechanical ventilation, you will cause severe metabolic alkalosis (HCO₃⁻ 35, PaCO₂ 40 → pH 7.60) — dangerous.

**Grasp Tonic 🧃**

The lungs are like a pressure release valve on a boiler. When pressure (H⁺/CO₂) builds up, the valve opens wider — more CO₂ escapes — pressure falls. When pressure is too low, the valve narrows — CO₂ accumulates — pressure rises. The valve can open and close within seconds to minutes, making the lungs the fastest pH regulator with meaningful capacity. But the valve has limits — it can only release so much gas (minimum PaCO₂ ~10 mmHg) or retain so much gas (maximum PaCO₂ ~55 mmHg before hypoxia overrides). Beyond these limits, only the kidney can compensate.`,
    },
    {
      id: 4,
      title: 'The Kidneys — Metabolic Regulation of pH',
      isDeepDive: false,
      content: `The kidneys are the slow but powerful regulators of acid-base balance. Unlike the lungs (which only adjust CO₂), the kidneys can generate new bicarbonate, excrete acid, and fine-tune plasma HCO₃⁻ concentration with extraordinary precision.

**The three renal mechanisms of acid-base regulation:**

**1. HCO₃⁻ reabsorption (proximal tubule — 85%)**

The proximal tubule reabsorbs ~4,500 mEq of bicarbonate daily. This is not "generating" new bicarbonate — it is recovering filtered bicarbonate from the tubular lumen.

Mechanism: H⁺ secreted into lumen by the Na⁺/H⁺ exchanger (NHE3) → H⁺ + HCO₃⁻ (in lumen) → H₂CO₃ → CO₂ + H₂O (carbonic anhydrase IV on luminal surface) → CO₂ diffuses into tubular cell → carbonic anhydrase II converts back to H₂CO₃ → H⁺ + HCO₃⁻ → H⁺ recycled to lumen, HCO₃⁻ exits to blood.

**Factors that increase proximal HCO₃⁻ reabsorption:**
- Volume depletion (activates NHE3 via angiotensin II)
- Hypokalaemia (K⁺ deficiency causes intracellular acidosis)
- Elevated PaCO₂ (chronic respiratory acidosis)
- Hyperaldosteronism

**Factors that decrease proximal HCO₃⁻ reabsorption:**
- Volume expansion
- Carbonic anhydrase inhibitors (acetazolamide) — used to treat altitude sickness and some cases of metabolic alkalosis

**2. Titratable acid excretion (distal tubule/collecting duct)**

H⁺ secreted by H⁺-ATPase in intercalated cells combines with urinary buffers:
- Phosphate: HPO₄²⁻ + H⁺ → H₂PO₄⁻ (excreted as titratable acid)
- Uric acid, creatinine (minor contributions)

This excretes H⁺ but does not increase it beyond what was secreted — the buffering capacity is limited by the amount of phosphate in the filtrate.

**3. Ammoniagenesis — the kidney's most powerful acid-excretion mechanism**

Proximal tubular cells metabolise glutamine (from blood) → NH₄⁺ (ammonium) + HCO₃⁻

The NH₄⁺ is excreted in urine (taking H⁺ with it), and the HCO₃⁻ is returned to blood — this is the only way the kidney generates **new** bicarbonate.

In chronic metabolic acidosis, ammoniagenesis increases up to 10-fold, dramatically increasing net acid excretion and new HCO₃⁻ generation. This is why chronic acidosis can eventually be fully compensated — the kidneys produce enough new HCO₃⁻ to restore buffer stores.

**Primary metabolic disorders:**

**Metabolic acidosis (↓ HCO₃⁻):**
Two mechanisms: loss of HCO₃⁻ from the body OR addition of H⁺ (which consumes HCO₃⁻).

**High anion gap metabolic acidosis** — new acid added to the body:

Anion gap = Na⁺ − (Cl⁻ + HCO₃⁻) = normally **8–12 mEq/L**

Represents unmeasured anions (albumin, phosphate, sulphate, organic acids). When organic acids (lactate, ketoacids, toxins) accumulate, AG rises.

**MUDPILES mnemonic:**
- **M**ethanol (→ formic acid)
- **U**raemia (phosphate, sulphate, urate accumulation)
- **D**iabetic ketoacidosis (acetoacetate, β-hydroxybutyrate)
- **P**ropylene glycol / **P**araldehyde
- **I**soniazid / **I**ron
- **L**actic acidosis (shock, sepsis, metformin, cyanide, ischaemia)
- **E**thylene glycol (→ oxalic acid)
- **S**alicylates (metabolic component; also causes respiratory alkalosis)

**Normal anion gap (hyperchloraemic) metabolic acidosis** — loss of HCO₃⁻:
As HCO₃⁻ falls, Cl⁻ rises to maintain electroneutrality → anion gap preserved.

**USED CARP mnemonic:**
- **U**reteral diversion (ileal conduit — gut absorbs Cl⁻, loses HCO₃⁻)
- **S**aline infusion (large volumes of isotonic saline → dilutional acidosis + ↑Cl⁻)
- **E**xtra alimentation (total parenteral nutrition — amino acid solutions are acidogenic)
- **D**iarrhoea (HCO₃⁻-rich intestinal fluid lost in stool — most common cause globally)
- **C**arbonic anhydrase inhibitors (acetazolamide — blocks proximal HCO₃⁻ reabsorption)
- **A**drenal insufficiency (aldosterone deficiency → Type 4 RTA)
- **R**enal tubular acidosis
- **P**ancreatic fistula (pancreatic juice is HCO₃⁻-rich)

**Metabolic alkalosis (↑ HCO₃⁻):**
Either gain of HCO₃⁻ or loss of H⁺. For alkalosis to be **sustained**, the kidneys must fail to excrete the excess HCO₃⁻ — they can normally excrete large HCO₃⁻ loads rapidly. There is always a reason the kidney is retaining HCO₃⁻.

Causes divided by urine Cl⁻:
- **Chloride-responsive (urine Cl⁻ < 25 mEq/L):** Vomiting, NG suction, diuretics (remote), post-hypercapnic alkalosis. The kidneys retain HCO₃⁻ because of volume depletion (activates RAAS, AngII retains HCO₃⁻) and Cl⁻ deficiency. **Treat with saline + KCl.**
- **Chloride-resistant (urine Cl⁻ > 40 mEq/L):** Hyperaldosteronism (primary — Conn's; secondary), Cushing's, exogenous corticosteroids, Liddle's syndrome, Bartter syndrome, Gitelman syndrome, current loop diuretic use. **Treat underlying cause.**

**Grasp Tonic 🧃**

The kidneys are the master accountants of acid-base. The lungs handle the daily cash flow (CO₂ blown off rapidly), but the kidneys manage the long-term balance sheet. Every day, the body generates ~50–100 mEq of fixed acid. The kidneys must excrete exactly this amount in urine to keep the balance neutral. They do this through a combination of titratable acid excretion (spending what was filtered) and ammoniagenesis (creating new currency — new HCO₃⁻ — by exporting ammonium). When the kidneys fail, the body runs an ever-increasing acid debt that no amount of faster breathing can fully repay.`,
    },
    {
      id: 5,
      title: 'Normal ABG Values & The Systematic Approach',
      isDeepDive: false,
      content: `The arterial blood gas (ABG) is the clinical test that directly measures acid-base status. Mastering its systematic interpretation is one of the most practically valuable skills in clinical medicine.

**Normal ABG values — memorise these:**

| Parameter | Normal Value | Clinical Range |
|---|---|---|
| pH | 7.40 | 7.35–7.45 |
| PaCO₂ | 40 mmHg | 35–45 mmHg |
| HCO₃⁻ | 24 mEq/L | 22–26 mEq/L |
| PaO₂ | 95 mmHg | 80–100 mmHg |
| SaO₂ | 98% | >95% |
| Base excess | 0 | −2 to +2 mEq/L |

**pH < 7.35 = acidaemia (too much acid)**
**pH > 7.45 = alkalaemia (too much base)**

Note the language: acidaemia/alkalaemia refers to the blood pH. Acidosis/alkalosis refers to the process causing it. A patient can have metabolic acidosis and metabolic alkalosis simultaneously (mixed disorder) — and depending on which is dominant, the blood may be acidaemic, alkalaemic, or normal pH.

**The 5-step systematic approach to ABG interpretation:**

**Step 1: Is the pH normal, acidaemic, or alkalaemic?**

pH < 7.35 → acidaemia
pH > 7.45 → alkalaemia
pH 7.35–7.45 → normal (may still have a compensated or mixed disorder)

**Step 2: Identify the primary disorder**

Look at CO₂ and HCO₃⁻ and ask which is responsible for the pH change:

If pH ↓ (acidaemia):
- PaCO₂ ↑ → Respiratory acidosis (CO₂ accumulation)
- HCO₃⁻ ↓ → Metabolic acidosis (base depletion)

If pH ↑ (alkalaemia):
- PaCO₂ ↓ → Respiratory alkalosis (CO₂ depletion)
- HCO₃⁻ ↑ → Metabolic alkalosis (base excess)

**Step 3: Check for appropriate compensation**

The body attempts to restore pH toward normal but compensation is never complete — it never normalises pH.

**Compensation formulas (memorise):**

Respiratory acidosis:
- Acute: HCO₃⁻ increases by **1** for every 10 mmHg ↑ in PaCO₂ above 40
- Chronic: HCO₃⁻ increases by **3.5** for every 10 mmHg ↑ in PaCO₂ above 40

Respiratory alkalosis:
- Acute: HCO₃⁻ decreases by **2** for every 10 mmHg ↓ in PaCO₂ below 40
- Chronic: HCO₃⁻ decreases by **5** for every 10 mmHg ↓ in PaCO₂ below 40

Metabolic acidosis (Winters' formula):
- Expected PaCO₂ = (1.5 × HCO₃⁻) + 8 ± 2

Metabolic alkalosis:
- Expected PaCO₂ = (0.7 × HCO₃⁻) + 21 ± 2 (or: PaCO₂ rises 0.7 mmHg per 1 mEq/L ↑ HCO₃⁻)

**If compensation is MORE than expected** → second primary disorder pushing in the same direction
**If compensation is LESS than expected** → second primary disorder pushing in the opposite direction

**Step 4: If metabolic acidosis — calculate anion gap**

AG = Na⁺ − (Cl⁻ + HCO₃⁻)
Normal = 8–12 mEq/L (some labs use 12 ± 4)

High AG → unmeasured anion accumulation (MUDPILES)
Normal AG → bicarbonate lost or chloride gained (USED CARP)

**Step 5: If high AG — calculate delta-delta ratio**

Delta-delta = (AG − 12) / (24 − HCO₃⁻)

- 1–2: pure high AG metabolic acidosis
- < 1: concurrent normal AG metabolic acidosis
- > 2: concurrent metabolic alkalosis (HCO₃⁻ has not fallen as much as expected)

**Worked example:**

A 45-year-old with type 1 diabetes who has been vomiting for 3 days:
pH 7.28, PaCO₂ 20, HCO₃⁻ 9, Na 138, Cl 96, glucose 520.

Step 1: pH 7.28 → acidaemia
Step 2: HCO₃⁻ low → metabolic acidosis
Step 3: Expected PaCO₂ (Winters') = (1.5 × 9) + 8 = 21.5. Actual = 20. Appropriate compensation (simple disorder).
Step 4: AG = 138 − (96 + 9) = 33. High AG metabolic acidosis.
Step 5: Delta-delta = (33−12)/(24−9) = 21/15 = 1.4 → pure high AG metabolic acidosis.

Diagnosis: DKA with appropriate respiratory compensation.

But wait — if this patient has been vomiting for 3 days, should we check for concurrent metabolic alkalosis? Delta-delta is 1.4 — borderline. With clinical context of prolonged vomiting, consider that the true HCO₃⁻ deficiency may be partially masked by metabolic alkalosis from vomiting.

**Grasp Tonic 🧃**

Interpreting an ABG systematically is like solving a detective mystery. The pH tells you the crime (acidaemia or alkalaemia). The CO₂ and HCO₃⁻ are your two main suspects — one is the culprit, the other is trying to compensate. The anion gap tells you the motive in metabolic acidosis (what acid accumulated). The delta-delta is your final check — is there a hidden accomplice? Follow this method every time, without shortcuts, and you will rarely be wrong.`,
    },
    {
      id: 6,
      title: 'Metabolic Acidosis — Causes, Consequences & Management',
      isDeepDive: false,
      content: `Metabolic acidosis is one of the most common and clinically important acid-base disorders. It is defined by a primary fall in plasma HCO₃⁻ with a compensatory fall in PaCO₂.

**High Anion Gap Metabolic Acidosis — Deep Dive**

**Diabetic Ketoacidosis (DKA):**
Insulin deficiency → uncontrolled lipolysis → fatty acids → hepatic ketogenesis → acetoacetate and β-hydroxybutyrate (both ketoacids, both strong acids). As they accumulate, they consume HCO₃⁻.

Key features: high AG metabolic acidosis, hyperglycaemia, ketonaemia/ketonuria, osmotic diuresis causing dehydration and electrolyte losses.

Critical management pearls:
- Give insulin ONLY after K⁺ is ≥ 3.3 mEq/L (insulin drives K⁺ into cells; if K⁺ already low, giving insulin can cause fatal hypokalaemia)
- Do NOT give bicarbonate in DKA (worsens hypokalaemia, causes paradoxical CNS acidosis, no outcome benefit unless pH < 6.9 with haemodynamic instability)
- Replace K⁺ aggressively — total body K⁺ is depleted even if initial serum K⁺ appears normal or high (acidosis shifts K⁺ extracellularly; when corrected, K⁺ falls)
- Add dextrose to IV fluids when glucose < 200 mg/dL (to allow continued insulin infusion to clear ketones)

**Lactic Acidosis:**
The most common cause of high AG metabolic acidosis in hospitalised patients. Lactate > 2 mmol/L is abnormal; > 4 mmol/L is clinically significant.

**Type A (tissue hypoxia):**
- Septic shock, cardiogenic shock, hypovolaemic shock
- Severe anaemia, CO poisoning, cyanide toxicity
- Limb ischaemia, mesenteric ischaemia
- Mechanism: inadequate oxygen delivery → anaerobic glycolysis → pyruvate → lactate

**Type B (no tissue hypoxia):**
- Metformin (inhibits mitochondrial complex I → impaired pyruvate oxidation → lactate accumulation; especially in renal failure)
- Thiamine deficiency (pyruvate dehydrogenase requires thiamine; deficiency → pyruvate cannot enter TCA cycle → lactate)
- Liver failure (impaired lactate clearance)
- Malignancy (Warburg effect — tumour cells generate lactate even in aerobic conditions)
- Linezolid, NRTIs (HIV antiretrovirals) — mitochondrial toxicity
- Propofol infusion syndrome

Management: Treat the underlying cause. Do NOT give bicarbonate for lactic acidosis — bicarbonate generates CO₂ that worsens intracellular acidosis and does not improve outcomes. Exception: consider if pH < 7.1 with haemodynamic instability.

**Uraemic acidosis:**
In chronic kidney disease, reduced GFR → accumulation of phosphate, sulphate, urate (fixed acids). Additionally, reduced ammoniagenesis → impaired H⁺ excretion. In end-stage renal disease: mixed high AG (accumulation) and normal AG (impaired H⁺ excretion) metabolic acidosis.

**Toxic alcohol ingestions:**
- **Methanol** (antifreeze, wood alcohol) → formate (formic acid) → high AG acidosis + elevated osmolar gap + severe ocular toxicity (retinal damage → blindness). Treatment: fomepizole (ADH inhibitor), bicarbonate, dialysis.
- **Ethylene glycol** (antifreeze) → oxalate → high AG acidosis + elevated osmolar gap + calcium oxalate crystalluria → acute renal failure. Treatment: fomepizole, bicarbonate, dialysis.

Early (before metabolism): osmolar gap elevated, AG not yet elevated.
Later: both osmolar gap and AG elevated.
Very late: osmolar gap may normalise (alcohol fully metabolised), high AG persists.

**Salicylate toxicity (aspirin overdose):**
Creates a mixed picture:
- Salicylate directly stimulates the respiratory centre → primary respiratory alkalosis (early)
- Salicylic acid accumulates → high AG metabolic acidosis (later)
- Result: mixed respiratory alkalosis + high AG metabolic acidosis

Treatment: alkalinise urine to pH 7.5–8.0 (sodium bicarbonate IV) — ionised salicylate trapped in alkaline tubular fluid → cannot be reabsorbed → increased excretion. Haemodialysis for severe cases.

**Normal Anion Gap (Hyperchloraemic) Metabolic Acidosis:**

**Diarrhoea** — most common cause worldwide. Stool contains HCO₃⁻. Massive diarrhoea loses enormous amounts of bicarbonate → normal AG metabolic acidosis + volume depletion + hypokalaemia.

**Renal Tubular Acidosis (RTA)** — covered in detail in Section 10.

**Clinical consequences of metabolic acidosis:**

- **Cardiovascular**: reduced cardiac contractility, vasodilatation, arrhythmias, reduced response to catecholamines (shock harder to treat)
- **Respiratory**: Kussmaul breathing (compensatory hyperventilation), fatigue of respiratory muscles if severe
- **Electrolytes**: hyperkalaemia (K⁺ shifts out of cells as H⁺ shifts in)
- **Metabolic**: insulin resistance (hyperglycaemia harder to control in DKA), increased protein catabolism, bone resorption in chronic acidosis
- **Haematological**: rightward shift of oxygen-haemoglobin dissociation curve (Bohr effect) — haemoglobin releases O₂ more readily — initially adaptive, but severe acidosis impairs haemoglobin function

**Grasp Tonic 🧃**

Metabolic acidosis from different causes is like a bucket with a hole in different places. DKA creates a hole by pouring acid in from the top (ketoacids fill the bucket faster than bicarbonate can be topped up). Diarrhoea creates a hole in the side — bicarbonate pours straight out. RTA creates a hole in the bottom — the kidney fails to regenerate the bicarbonate that is continuously consumed. Each hole needs a different plug. Giving bicarbonate to patch a DKA hole does not stop the acid pouring in — you must stop ketone production with insulin. Giving saline to patch a diarrhoeal hole does not work — you need bicarbonate replacement and treatment of the underlying diarrhoea.`,
    },
    {
      id: 7,
      title: 'Metabolic Alkalosis — Causes, Consequences & Management',
      isDeepDive: false,
      content: `Metabolic alkalosis is defined by a primary rise in plasma HCO₃⁻ with a compensatory rise in PaCO₂. It is the most common acid-base disorder in hospitalised patients (driven largely by diuretics and vomiting).

**The two requirements for metabolic alkalosis:**

**1. Generation** — something must create the alkalosis:
- Loss of H⁺ (gastric acid loss, renal H⁺ excretion)
- Gain of HCO₃⁻ (bicarbonate infusion, blood transfusion — citrate → HCO₃⁻)
- Contraction alkalosis — loss of HCO₃⁻-poor fluid (e.g., diuretics lose Cl⁻/Na⁺/water) → same amount of HCO₃⁻ concentrated in smaller volume → [HCO₃⁻] rises

**2. Maintenance** — the kidney must fail to excrete the excess HCO₃⁻. Normally, the kidney can excrete large bicarbonate loads. For alkalosis to persist, there must be a reason the kidney retains HCO₃⁻:
- Volume depletion (activates RAAS → aldosterone → Na⁺ reabsorption with H⁺/K⁺ excretion → retain HCO₃⁻)
- Hypochloraemia (Cl⁻ is needed for HCO₃⁻ excretion in the collecting duct)
- Hypokalaemia (K⁺ depletion → intracellular acidosis → kidney perceives acidosis → retains HCO₃⁻)
- Hyperaldosteronism (aldosterone drives H⁺ excretion and Na⁺ reabsorption → continuous HCO₃⁻ generation)

**Causes of metabolic alkalosis:**

**Vomiting and nasogastric suction:**
- Loss of HCl (H⁺ + Cl⁻) from the stomach → generation of alkalosis
- Volume depletion → RAAS activation → Na⁺ and HCO₃⁻ retained
- K⁺ loss (in vomit and via aldosterone-stimulated renal K⁺ excretion) → hypokalaemia maintains alkalosis
- Paradoxical aciduria: despite systemic alkalosis, urine is acidic because hypokalaemia causes intracellular acidosis in tubular cells → H⁺ excreted, HCO₃⁻ reabsorbed

**Diuretics (loop and thiazide):**
**Generation**: loop diuretics (frusemide) block Na⁺-K⁺-2Cl⁻ cotransporter → Na⁺, K⁺, Cl⁻ loss → contraction of ECF volume + Cl⁻ depletion
**Maintenance**: volume depletion → RAAS → aldosterone → K⁺/H⁺ excretion → HCO₃⁻ retained + worsening hypokalaemia

**Primary hyperaldosteronism (Conn's syndrome):**
- Adrenal adenoma (most common) or bilateral adrenal hyperplasia secreting aldosterone autonomously
- Aldosterone → collecting duct Na⁺ retention + H⁺ and K⁺ excretion → metabolic alkalosis + hypokalaemia + hypertension
- Urine Cl⁻ > 40 mEq/L (saline-resistant) — treating with saline does not fix the alkalosis; need aldosterone antagonist (spironolactone) or surgery

**Cushing's syndrome:**
Excess cortisol has mineralocorticoid activity → similar to hyperaldosteronism. Also directly promotes H⁺ excretion.

**Milk-alkali syndrome:**
Excessive calcium and alkali intake (historically from antacids; now from calcium supplements) → hypercalcaemia → suppressed PTH → reduced renal calcium excretion → renal dysfunction → impaired HCO₃⁻ excretion → alkalosis.

**Post-hypercapnic alkalosis:**
After chronic respiratory acidosis (e.g., COPD), kidneys retain HCO₃⁻ as compensation. If the respiratory acidosis is rapidly corrected (e.g., mechanical ventilation), PaCO₂ falls rapidly but HCO₃⁻ remains elevated (kidneys take days to excrete it) → metabolic alkalosis. Prevent by correcting CO₂ gradually.

**Consequences of metabolic alkalosis:**

- **Hypokalaemia** — K⁺ moves into cells as H⁺ moves out to buffer alkalosis; aldosterone drives further K⁺ excretion
- **Hypocalcaemia (ionised)** — alkalosis increases albumin binding of Ca²⁺ → less free calcium → tetany, carpopedal spasm, perioral paraesthesias, seizures (Trousseau's sign and Chvostek's sign)
- **Hypomagnesaemia** — often coexists, especially with diuretics; hypomagnesaemia perpetuates hypokalaemia (essential to replace Mg²⁺ to correct K⁺)
- **Cardiac arrhythmias** — from hypokalaemia (U waves, QTc prolongation, risk of torsades de pointes)
- **Cerebral vasoconstriction** — reduced cerebral blood flow → confusion in severe alkalosis
- **Left shift of O₂-Hb curve** — haemoglobin holds oxygen more tightly → impaired tissue oxygen delivery

**Management of metabolic alkalosis:**

**Chloride-responsive (urine Cl⁻ < 25):**
- IV normal saline (0.9% NaCl) — restores volume, provides Cl⁻
- Potassium chloride — corrects hypokalaemia (essential; without K⁺ correction, alkalosis cannot be corrected because kidney will keep excreting H⁺ to retain K⁺)
- Both volume and K⁺ correction must occur simultaneously

**Chloride-resistant (urine Cl⁻ > 40):**
- Treat underlying cause (surgery/adrenalectomy for Conn's, treat Cushing's)
- Aldosterone antagonist (spironolactone, eplerenone) for hyperaldosteronism
- Acetazolamide (carbonic anhydrase inhibitor) — forces HCO₃⁻ excretion in urine
- Severe refractory cases: dilute hydrochloric acid (0.1–0.2 mol/L) via central venous catheter — only in ICU setting

**Grasp Tonic 🧃**

Metabolic alkalosis is like a city water supply that has become too alkaline because all the acid-cleaning chemicals (H⁺ as HCl from gastric acid) have been flushed down the drain (vomiting). The filtration system (kidney) would normally excrete the excess base quickly, but the city is also running low on water (volume depletion) — so the filtration system switches to conservation mode and holds onto everything, including the excess base. And because the potassium pipes are leaking (hypokalaemia), the filtration system keeps thinking there is an acid problem and actively excretes more H⁺, making the alkalosis worse. You cannot fix the alkalosis without simultaneously fixing the volume and the potassium.`,
    },
    {
      id: 8,
      title: 'Fluid Physiology — Compartments & Movement',
      isDeepDive: false,
      content: `Fluid management is inseparable from acid-base and electrolyte management. Understanding how fluid is distributed in the body and what drives its movement is foundational to understanding oedema, dehydration, shock, and the rationale for intravenous fluids.

**Body fluid compartments:**

Total body water (TBW) ≈ **60% of body weight** in lean adults (55% in women, 50% in elderly, 75% in neonates — varies with fat content, which contains little water).

For a 70 kg man: TBW ≈ 42 litres.

**Intracellular fluid (ICF): 40% of body weight = ~28 litres (two-thirds of TBW)**
- Inside all cells
- Rich in K⁺, Mg²⁺, phosphate, proteins
- Separated from ECF by cell membranes

**Extracellular fluid (ECF): 20% of body weight = ~14 litres (one-third of TBW)**
- **Interstitial fluid**: ~11 litres (between cells, in lymphatics)
- **Intravascular (plasma)**: ~3 litres
- **Transcellular**: ~1 litre (CSF, synovial fluid, pleural fluid, pericardial fluid, peritoneal fluid, GI secretions)

**What drives fluid movement?**

**Between plasma and interstitium — Starling forces:**

Fluid moves across capillary walls according to the balance of four forces (Starling equation):

Net filtration = Kf × [(Pc − Pi) − σ(πc − πi)]

Where:
- **Pc** = capillary hydrostatic pressure (pushes fluid OUT of capillary into interstitium)
- **Pi** = interstitial hydrostatic pressure (pushes fluid BACK into capillary; usually negative = suction)
- **πc** = plasma oncotic pressure (pulls fluid INTO capillary) — primarily albumin (80% of oncotic pressure)
- **πi** = interstitial oncotic pressure (pulls fluid OUT into interstitium; normally low)
- **Kf** = filtration coefficient
- **σ** = reflection coefficient (how impermeable the capillary is to proteins)

Net movement is usually slightly outward at arteriolar end (Pc dominates) and slightly inward at venous end (πc dominates) — with lymphatics draining the small excess.

**Oedema formation — when Starling forces are disrupted:**

| Mechanism | Examples |
|---|---|
| ↑ Capillary hydrostatic pressure | Heart failure, venous obstruction, portal hypertension |
| ↓ Plasma oncotic pressure (↓ albumin) | Nephrotic syndrome, cirrhosis, malnutrition, protein-losing enteropathy |
| ↑ Capillary permeability | Inflammation, burns, ARDS, anaphylaxis, sepsis |
| Lymphatic obstruction | Filariasis (elephantiasis), lymph node removal/irradiation |

**Between ICF and ECF — osmolality:**

The cell membrane is freely permeable to water but not to most solutes. Water moves across cell membranes by osmosis — from lower to higher solute concentration.

**Plasma osmolality** = primary determinant of ICF/ECF water distribution:
Calculated osmolality = 2[Na⁺] + [Glucose/18] + [BUN/2.8]
Normal: **285–295 mOsm/kg**

- ↑ Plasma osmolality → water moves OUT of cells (cells shrink) → stimulates hypothalamic osmoreceptors → ADH secretion → water retention → osmolality normalises
- ↓ Plasma osmolality → water moves INTO cells (cells swell) → ADH suppressed → water excretion

**Tonicity** vs **osmolality**:
- Osmolality includes all solutes
- Tonicity only includes effective osmoles (cannot freely cross cell membranes)
- Urea is an osmole but not an effective osmole (freely crosses cells → no osmotic shift)
- Glucose is an effective osmole in insulin-deficient states (stays extracellular)
- In hypertonic states from urea: serum osmolality high, but no cellular dehydration (urea equilibrates)

**Sodium as the primary determinant of ECF volume and osmolality:**

Sodium is the main ECF cation. Total body sodium primarily determines ECF volume:
- ↑ total body Na⁺ → ↑ ECF volume → hypertension, oedema, heart failure
- ↓ total body Na⁺ → ↓ ECF volume → dehydration, hypotension, shock

Plasma [Na⁺] primarily reflects water balance (not sodium balance). Hyponatraemia means relative water excess (usually). Hypernatraemia means relative water deficit.

**Grasp Tonic 🧃**

Body fluid distribution is like a city's water infrastructure. The intravascular space is the mains pipe — under pressure, transporting water where it needs to go. The interstitial space is like the ground — absorbing some of what seeps out of the pipes. The intracellular space is like the water tanks inside each building. Albumin in the plasma is like the surface tension of the pipe walls — it keeps water in the pipe rather than letting it seep into the ground. When you lose albumin (nephrotic syndrome, liver failure), the pipe walls lose their tension, water floods the ground (oedema), and the tanks in each building run dry (cells dehydrated despite global oedema). This is why hypoalbuminaemic oedema is so hard to treat with fluid restriction alone.`,
    },
    {
      id: 9,
      title: 'Sodium Disorders — Hyponatraemia & Hypernatraemia',
      isDeepDive: false,
      content: `Sodium disorders are among the most common electrolyte abnormalities in hospitalised patients. They require careful clinical assessment to diagnose the underlying cause and manage safely — particularly since rapid correction can cause catastrophic neurological damage.

**Hyponatraemia — Na⁺ < 135 mEq/L**

The most common electrolyte disorder in hospitalised patients (15–30% incidence). It primarily reflects relative water excess (too much water relative to sodium), not necessarily sodium depletion.

**Step 1: Check plasma osmolality**

- **Hyperosmolar hyponatraemia** (Posm > 295): Measured Na⁺ is low but osmolality is high. Cause: high glucose (DKA, HHS) or mannitol. Corrective factor: add 1.6 mEq/L to Na⁺ for every 100 mg/dL increase in glucose above 100. This is **translocation hyponatraemia** — water shifts from cells into ECF diluting Na⁺.
- **Iso-osmolar hyponatraemia** (Posm 275–295): **Pseudohyponatraemia** — artefact from severe hyperlipidaemia or hyperproteinaemia (old flame photometry methods). Modern ion-selective electrodes do not have this issue.
- **Hypoosmolar hyponatraemia** (Posm < 275): True hyponatraemia — always caused by water excess or combined water excess + sodium loss.

**Step 2: Assess volume status in hypoosmolar hyponatraemia**

**Hypovolaemic hyponatraemia** (↓ ECF volume):
Both sodium and water are lost, but more sodium than water.
Urine Na⁺ < 20 → extrarenal loss: vomiting, diarrhoea, third-spacing, burns, sweating
Urine Na⁺ > 20 → renal loss: diuretics, Addison's (aldosterone deficiency), cerebral salt wasting, RTA

**Euvolaemic hyponatraemia** (normal ECF volume — no oedema, no dehydration):
Water excess without sodium retention.
Urine Na⁺ > 20 → **SIADH** (syndrome of inappropriate ADH secretion) — most common cause
Urine Na⁺ < 10, dilute urine → Primary polydipsia (psychogenic), beer potomania, hypothyroidism, glucocorticoid deficiency (relative ADH excess)

**SIADH** — ADH secreted inappropriately despite normal/↑ plasma volume and normal/↓ osmolality:
Causes: CNS disease (stroke, SAH, meningitis, head injury), pulmonary disease (pneumonia, SIADH from ectopic ADH in small cell lung cancer), drugs (SSRIs, TCAs, carbamazepine, cyclophosphamide, vincristine, MDMA/ecstasy), post-operative state, pain, nausea
Diagnosis: hypoosmolar hyponatraemia + urine osmolality > 100 + urine Na⁺ > 20 + euvolaemia + exclusion of thyroid/adrenal disease
Treatment: fluid restriction (first line), salt tablets, demeclocycline (reduces renal ADH sensitivity), tolvaptan (V2 receptor antagonist — vaptans)

**Hypervolaemic hyponatraemia** (↑ ECF volume — oedema):
Dilutional — total body Na⁺ increased but total body water increased even more.
Urine Na⁺ < 20: Heart failure, cirrhosis, nephrotic syndrome (decreased effective circulating volume → RAAS → ADH → water retention)
Urine Na⁺ > 20: Acute or chronic kidney disease (impaired water excretion)

**Clinical features and correction:**

Symptoms depend on severity and speed of onset:
- Mild (130–134): often asymptomatic
- Moderate (125–129): nausea, headache, lethargy
- Severe (< 120 or rapid onset): seizures, coma, herniation → life-threatening

**Correction rate — critical:**
- **Chronic hyponatraemia** (> 48 hours or unknown duration): brain has adapted (exported osmolytes) → rapid correction causes **osmotic demyelination syndrome (ODS)** — formerly "central pontine myelinolysis." Demyelination of the pons (and extrapontine areas) → locked-in syndrome, dysarthria, dysphagia, quadriplegia, death. Rule: **correct no faster than 6–8 mEq/L per day** (maximum 10–12 in high-risk patients).
- **Acute hyponatraemia** (< 48 hours with symptoms): can correct more rapidly (1–2 mEq/L/hour) as cerebral oedema is the acute risk, not demyelination. Use hypertonic saline (3% NaCl).

Desmopressin (DDAVP) can be given to slow correction if sodium is rising too fast.

**Hypernatraemia — Na⁺ > 145 mEq/L**

Always indicates a relative deficit of water — either insufficient water intake or excess water loss. Because hypernatraemia is a powerful thirst stimulus, it only develops in those who cannot access or drink water (infants, elderly, unconscious patients, cognitively impaired).

**Causes:**

**Reduced water intake:**
- Impaired thirst mechanism (hypothalamic lesion, elderly)
- Restricted access to water (hospitalised, institutionalised)

**Excessive water loss:**
- **Diabetes insipidus (DI)**:
  - Central DI: ADH deficiency (trauma, surgery, tumour, Sheehan's — pituitary infarction, sarcoidosis). Treat: desmopressin (DDAVP).
  - Nephrogenic DI: renal unresponsiveness to ADH (lithium toxicity most common, demeclocycline, hypercalcaemia, hypokalaemia, genetic). Treat: low-solute diet, thiazide diuretics (paradoxically reduce urine volume via volume contraction), amiloride (for lithium-induced).
- Osmotic diuresis: DKA (glucose), HHS (glucose), mannitol
- Insensible losses: fever, burns, hyperventilation in ventilated patients

**Excess sodium gain:**
Hypertonic saline infusion, salt tablets, mineralocorticoid excess (primary hyperaldosteronism)

**Consequences and correction:**

Hypernatraemia causes cell shrinkage → brain shrinkage → tearing of bridging veins → subdural haemorrhage (especially in elderly and infants). Neurons partially compensate by accumulating idiogenic osmoles (organic osmolytes).

**Correction:** Replace free water deficit. Correct no faster than **10–12 mEq/L per day** in chronic hypernatraemia — rapid correction causes cerebral oedema (brain retains osmolytes → if ECF osmolality falls rapidly, water rushes into brain).

Free water deficit = 0.6 × weight (kg) × ([Na⁺]/140 − 1)

Use D5W, 0.45% saline, or oral water. For DI: treat underlying cause.

**Grasp Tonic 🧃**

Sodium disorders are like a swimming pool losing the balance between chlorine (sodium) and water. Hyponatraemia is the pool that has been diluted — too much water added, not enough chlorine concentration. But just because the concentration is low does not mean there is not enough total chlorine — in hypervolaemic hyponatraemia, there is actually too much total sodium (and even more water). The treatment depends entirely on WHY the dilution happened — was it too much water in (SIADH, polydipsia), too little chlorine added relative to water (heart failure), or true sodium loss (diarrhoea)? The same pool chemistry (Na⁺ 125) has three completely different fixes depending on the cause. And correcting too fast in a chronic pool — dumping concentrated chlorine in — can cause the pool's chemistry to swing dangerously in the other direction.`,
    },
    {
      id: 10,
      title: 'Potassium, Calcium & Magnesium Disorders',
      isDeepDive: false,
      content: `Disorders of potassium, calcium, and magnesium are intimately linked with acid-base disturbances and are major causes of cardiac and neuromuscular complications. They must be actively managed alongside acid-base correction.

**Potassium (K⁺)**

Normal serum K⁺: 3.5–5.0 mEq/L
Total body K⁺: ~3,500 mEq — 98% intracellular (mainly muscle), only 2% extracellular.

**The pH-K⁺ relationship:**

Acidaemia → hyperkalaemia: H⁺ moves INTO cells (buffered) → K⁺ moves OUT (maintain electroneutrality)
Alkalaemia → hypokalaemia: K⁺ moves INTO cells → H⁺ moves OUT

For every 0.1 change in pH: K⁺ changes by ~0.6 mEq/L in the opposite direction (stronger with inorganic acidosis; weaker with organic acidosis like DKA or lactic acidosis).

**Hyperkalaemia (K⁺ > 5.5 mEq/L)**

Causes:
- Decreased excretion: CKD/AKF, hypoaldosteronism (Addison's, ACE inhibitors, ARBs, potassium-sparing diuretics, NSAIDs, heparin)
- Cellular shift: acidosis, insulin deficiency, beta-blockade, digoxin toxicity, succinylcholine (depolarising blockade → K⁺ release from muscle)
- Increased release: rhabdomyolysis, tumour lysis syndrome, haemolysis, massive transfusion
- Pseudohyperkalaemia: haemolysis in blood tube, delayed processing, thrombocytosis (K⁺ from platelets)

ECG changes (progressive with rising K⁺):
- Peaked T waves (earliest)
- Prolonged PR interval
- Wide QRS
- Loss of P waves
- Sine wave pattern
- Ventricular fibrillation/asystole (fatal)

Emergency management (memorise the 5 C's):
1. **C**alcium gluconate (membrane stabilisation — does NOT lower K⁺ but protects the heart for ~30–60 minutes) — give FIRST if ECG changes
2. **C**ell shift (insulin 10 units IV + 50mL 50% glucose; albuterol nebuliser; sodium bicarbonate if acidotic) — moves K⁺ intracellularly, buys time
3. **C**ation exchange resins (patiromer, sodium zirconium cyclosilicate [newer], sodium polystyrene sulfonate [older]) — binds K⁺ in gut → excretes in faeces
4. **C**reatinine/renal — diuretics (frusemide) if renal function adequate → renal K⁺ excretion
5. **C**ontinuous renal replacement (dialysis) — definitive for severe/refractory hyperkalaemia

**Hypokalaemia (K⁺ < 3.5 mEq/L)**

Causes:
- GI losses: vomiting, diarrhoea, laxative abuse, ileostomy
- Renal losses: diuretics (most common), hyperaldosteronism, RTA type 1/2, Bartter/Gitelman syndromes, hypomagnesaemia
- Cellular shift: alkalosis, insulin excess, beta-agonists (salbutamol)
- Inadequate intake: rarely alone, usually compounding factor

ECG changes: flattened/inverted T waves, U waves (prominent deflection after T wave), QTc prolongation, arrhythmias.

Treatment: oral KCl if mild-moderate; IV KCl (max 10–20 mEq/hour, never bolus) if severe or cannot take oral. Always check and replace magnesium first — hypomagnesaemia causes refractory hypokalaemia (Mg²⁺ is needed for K⁺ renal tubular reabsorption).

**Calcium (Ca²⁺)**

Normal total serum calcium: 2.1–2.6 mmol/L (8.5–10.5 mg/dL)
~50% ionised (free, active), ~40% albumin-bound, ~10% complexed.

**Albumin correction:** For every 10 g/L drop in albumin below 40 g/L, add 0.2 mmol/L to measured total calcium. Or measure ionised calcium directly.

**Hypercalcaemia**

Causes (80–90% are hyperparathyroidism or malignancy):
- Primary hyperparathyroidism (most common overall; usually asymptomatic, found on routine biochemistry)
- Malignancy:
  * Humoral: PTHrP secretion (squamous cell Ca lung, renal cell Ca, breast Ca)
  * Osteolytic: myeloma, bone metastases (breast, lung)
  * 1,25-OH-vitamin D production: lymphoma
- Vitamin D toxicity
- Thiazide diuretics (reduce renal Ca²⁺ excretion)
- Sarcoidosis and granulomatous diseases (macrophage 1α-hydroxylase → ↑ calcitriol)
- Milk-alkali syndrome
- Immobilisation (increased bone resorption)

Symptoms — "bones, stones, groans, thrones, psychic moans":
- Bones: bone pain, pathological fractures, subperiosteal resorption (osteitis fibrosa cystica in severe HPT)
- Stones: renal calculi (calcium oxalate, calcium phosphate), nephrocalcinosis
- Groans: abdominal pain, nausea, vomiting, constipation, pancreatitis, peptic ulcers (Ca²⁺ stimulates gastrin)
- Thrones: polyuria/polydipsia (nephrogenic DI from hypercalcaemia)
- Psychic moans: depression, confusion, psychosis, coma

Management: IV normal saline (volume expansion → increases renal Ca²⁺ excretion). Bisphosphonates (zoledronic acid — inhibit osteoclasts, onset 2–4 days). Calcitonin (rapid but temporary). Denosumab for malignancy-related. Dialysis for severe/refractory.

**Hypocalcaemia**

Causes:
- Hypoparathyroidism (post-thyroidectomy, autoimmune, DiGeorge)
- Vitamin D deficiency (rickets in children, osteomalacia in adults)
- Chronic kidney disease (reduced 1α-hydroxylation of vitamin D; phosphate retention)
- Pancreatitis (calcium saponification in fat necrosis)
- Hypomagnesaemia (required for PTH secretion and action)
- Alkalosis (increased albumin binding of Ca²⁺ → reduced ionised Ca²⁺)
- Drugs: bisphosphonates, denosumab, cinacalcet, phenytoin (increases vitamin D catabolism)

Clinical features:
- Neuromuscular excitability: paraesthesias (perioral, fingertips), muscle cramps, tetany, laryngospasm, seizures
- Trousseau's sign: carpopedal spasm induced by inflating BP cuff above systolic for 3 minutes
- Chvostek's sign: facial muscle twitching on tapping the facial nerve anterior to the ear
- Cardiac: prolonged QTc → arrhythmias

**Magnesium (Mg²⁺)**

Normal serum Mg²⁺: 0.7–1.1 mmol/L
Hypomagnesaemia is common (hospitalised patients, diuretics, alcoholism, DM, malabsorption, PPIs) and often unrecognised.

Critically, Mg²⁺ is required for:
- PTH secretion → hypomagnesaemia → hypocalcaemia
- K⁺ renal tubular reabsorption → hypomagnesaemia → refractory hypokalaemia
- Membrane stabilisation

Cannot correct K⁺ or Ca²⁺ without first correcting Mg²⁺.

Hypermagnesaemia (from Mg²⁺-containing antacids/laxatives in renal failure):
Loss of deep tendon reflexes → respiratory depression → cardiac arrest. Treat with calcium gluconate (membrane stabilisation) + dialysis.

**Grasp Tonic 🧃**

Potassium, calcium, and magnesium are like three interlocking cogs in a machine. When one fails, the others malfunction too. Hypomagnesaemia silently drains both potassium (by impairing renal reabsorption) and calcium (by impairing PTH release). You can replace potassium all day but it keeps leaking out because the magnesium cog is broken. This is why experienced clinicians always check magnesium first when facing refractory hypokalaemia — and replace it before anything else. The cogs only turn smoothly when all three are present in the right amounts.`,
    },
    {
      id: 11,
      title: 'Renal Tubular Acidosis & Special Electrolyte Syndromes',
      isDeepDive: false,
      content: `Renal tubular acidosis (RTA) represents a group of disorders where the kidney's acid-excretion or bicarbonate-reabsorption mechanisms are specifically defective — causing normal anion gap metabolic acidosis despite intact glomerular function.

**The urine anion gap — diagnostic tool for normal AG metabolic acidosis:**

Urine AG = Urine Na⁺ + Urine K⁺ − Urine Cl⁻

NH₄⁺ is the major unmeasured cation excreted with acid. In appropriate response to acidosis, NH₄⁺ excretion rises — dragging Cl⁻ with it. This means urine Cl⁻ rises → urine AG becomes negative.

- **Negative urine AG (< −20)**: GI HCO₃⁻ loss (diarrhoea) — kidneys appropriately increasing NH₄⁺ excretion
- **Positive urine AG (> +10)**: Impaired NH₄⁺ excretion → RTA (distal type 1 or type 4) or urea cycle disorder

**Type 1 — Distal RTA:**

Defect: H⁺-ATPase in intercalated cells of collecting duct fails to secrete H⁺ adequately.

Features:
- Normal AG metabolic acidosis
- Urine pH > 5.5 (cannot acidify urine despite systemic acidosis — pathognomonic)
- Hypokalaemia (H⁺ cannot be secreted → K⁺ excreted instead)
- Nephrocalcinosis and calcium phosphate kidney stones (alkaline urine promotes CaPO₄ precipitation)
- Osteomalacia/osteoporosis (bone buffering of chronic acidosis)

Causes: Sjögren's syndrome (most common secondary cause), other autoimmune disease (lupus, primary biliary cirrhosis), drugs (amphotericin B — directly damages distal tubule), genetic (mutations in H⁺-ATPase subunits, anion exchanger AE1)

Treatment: Oral sodium bicarbonate or potassium citrate (alkalinises urine, prevents stones, corrects acidosis)

**Type 2 — Proximal RTA:**

Defect: Failure of proximal tubule to reabsorb filtered HCO₃⁻ (threshold for HCO₃⁻ reabsorption lowered).

Features:
- Normal AG metabolic acidosis
- Urine pH variable (< 5.5 once plasma HCO₃⁻ falls to the lowered threshold; alkaline when HCO₃⁻ is supplemented)
- Hypokalaemia
- NO nephrocalcinosis (unlike Type 1 — distal tubule can acidify when plasma HCO₃⁻ falls enough)
- Often part of **Fanconi syndrome**: generalised proximal tubule dysfunction → also lose glucose, amino acids, uric acid, phosphate (→ rickets/osteomalacia), K⁺

Causes: Multiple myeloma (light chain toxicity to tubule), Wilson's disease, cystinosis, galactosaemia, hereditary fructose intolerance, drugs (ifosfamide, tenofovir, carbonic anhydrase inhibitors, expired tetracycline)

Treatment: Very large doses of HCO₃⁻ required (kidneys rapidly excrete supplemented HCO₃⁻ since threshold is low). Phosphate and vitamin D for rickets/osteomalacia.

**Type 4 — Hyperreninaemic/Hypoaldosterone RTA (most common RTA clinically):**

Defect: Aldosterone deficiency or resistance → collecting duct cannot normally secrete H⁺ and K⁺.

Features:
- Normal AG metabolic acidosis
- **Hyperkalaemia** (opposite of Types 1 and 2 — this is the key distinguishing feature)
- Urine pH < 5.5 (can acidify — defect is in NH₄⁺ excretion, not H⁺ secretion per se)
- Mild acidosis (buffering still adequate since H⁺ secretion is partially intact)

Causes:
- **Hyporeninemic hypoaldosteronism** (most common) — diabetic nephropathy damages juxtaglomerular apparatus → reduced renin → reduced angiotensin II → reduced aldosterone
- Addison's disease (primary adrenal insufficiency)
- ACE inhibitors, ARBs, NSAIDs, heparin (all reduce aldosterone effect)
- Potassium-sparing diuretics (spironolactone blocks aldosterone receptor; amiloride/triamterene block ENaC channel)
- Pseudohypoaldosteronism (resistance to aldosterone — genetic)

Treatment: Fludrocortisone (mineralocorticoid replacement) if true aldosterone deficiency. Loop diuretics + low-K⁺ diet if drug-induced. Remove offending drugs where possible.

**Bartter Syndrome:**

A hereditary disorder of the thick ascending limb of Henle causing salt wasting and a metabolic alkalosis that mimics chronic loop diuretic use.

Mutations in Na⁺-K⁺-2Cl⁻ cotransporter (Type I), K⁺ channel ROMK (Type II), Cl⁻ channel ClC-Kb (Type III), Barttin (Type IV — also causes sensorineural deafness), Ca²⁺-sensing receptor (Type V).

Features: hypokalaemia, metabolic alkalosis, hypomagnesaemia, hypercalciuria, normotensive or hypotensive (salt wasting without hypertension distinguishes from primary hyperaldosteronism), high renin, high aldosterone.

Treatment: K⁺ supplementation, NSAIDs (reduce prostaglandin-mediated renin release), potassium-sparing diuretics.

**Gitelman Syndrome:**

Mutations in Na⁺-Cl⁻ cotransporter (NCC) in distal convoluted tubule — milder salt-wasting disorder mimicking chronic thiazide diuretic use.

Features: hypokalaemia, metabolic alkalosis, **hypomagnesaemia** (prominent), **hypocalciuria** (opposite to Bartter — distinguishing feature), normotensive.

Generally benign. Treatment: K⁺ and Mg²⁺ supplementation, potassium-sparing diuretics.

**SIADH vs Cerebral Salt Wasting (CSW):**

Both cause hyponatraemia in the context of brain injury (SAH, TBI, meningitis). They require opposite treatments:

| Feature | SIADH | CSW |
|---|---|---|
| Volume status | Euvolaemic or slightly hypervolaemic | Hypovolaemic |
| Urine Na⁺ | > 20 mEq/L | > 20 mEq/L |
| Urine osmolality | Elevated | Elevated |
| Serum uric acid | Low (diluted) | Low (natriuresis) |
| Treatment | Fluid restriction | IV saline + fludrocortisone |

Giving fluid restriction to a CSW patient worsens the hypovolaemia and risks cerebral vasospasm. Giving saline to an SIADH patient worsens hyponatraemia (sodium rapidly excreted, water retained). The distinction is clinically critical.

**Grasp Tonic 🧃**

Renal tubular acidosis is like a postal sorting office with specific delivery departments broken. In Type 1 RTA, the final delivery department (distal tubule) cannot post H⁺ letters — so they pile up in the blood and the post office (kidney) cannot acidify the urine. In Type 2, the sorting office accepts letters (HCO₃⁻) at the front desk but keeps sending them back when the threshold drops — highly inefficient. In Type 4, the department manager (aldosterone) is absent — nothing gets sorted properly, K⁺ builds up in the sorting room, and both H⁺ and K⁺ letters pile up. Each broken department has a different fix — you cannot apply the same repair to all three.`,
    },
    {
      id: 12,
      title: 'IV Fluid Therapy & Clinical Decision-Making',
      isDeepDive: false,
      content: `Intravenous fluid therapy is one of the most commonly performed medical interventions — and one of the most commonly done poorly. Understanding the composition of available fluids and matching them to the patient's specific deficits prevents iatrogenic harm.

**The composition of common IV fluids:**

| Fluid | Na⁺ (mEq/L) | Cl⁻ (mEq/L) | K⁺ (mEq/L) | HCO₃⁻ equiv. | Other |
|---|---|---|---|---|---|
| 0.9% NaCl (normal saline) | 154 | 154 | 0 | 0 | Hyperchloraemic |
| Hartmann's/Ringer's Lactate | 130 | 109 | 4 | 28 (lactate) | Ca²⁺ 2 mEq/L |
| 5% Dextrose | 0 | 0 | 0 | 0 | 50g glucose/L |
| 0.45% NaCl (half-normal) | 77 | 77 | 0 | 0 | Hypotonic |
| 3% NaCl (hypertonic) | 513 | 513 | 0 | 0 | Hypertonic |
| Albumin 4–5% | ~140 | ~128 | — | — | Colloid |
| Gelofusine | ~154 | ~120 | — | — | Colloid |

**Normal saline (0.9% NaCl) — the most used, most misused:**

Contains 154 mEq/L of Na⁺ and Cl⁻ — both higher than plasma (Na⁺ 140, Cl⁻ 103). Large volumes → **hyperchloraemic metabolic acidosis** (dilutes HCO₃⁻, Cl⁻ rises → normal AG acidosis). This is "saline acidosis" — iatrogenic and avoidable.

Appropriate uses: volume resuscitation in metabolic alkalosis with Cl⁻ depletion (vomiting), hypovolaemia when Hartmann's is unavailable, hyponatraemia correction (3% NaCl).

**Hartmann's solution / Ringer's Lactate — balanced crystalloid:**

More physiological composition. Lactate is metabolised by the liver to bicarbonate. Preferred over normal saline for most crystalloid resuscitation scenarios (perioperative, trauma, sepsis) — avoids hyperchloraemic acidosis.

The SMART trial and SALT-ED trial (2018): balanced crystalloids (Hartmann's) associated with lower rates of major adverse kidney events compared to saline in critically ill patients.

**Colloids vs crystalloids:**

The SAFE study (2004): albumin vs saline resuscitation — no mortality difference overall. Albumin may be harmful in traumatic brain injury. Albumin beneficial in spontaneous bacterial peritonitis (prevents renal failure) and large-volume paracentesis (prevents circulatory dysfunction).

**The four Ds of fluid therapy (modern approach):**

**Drug** — indication for fluid (resuscitation, replacement, maintenance, nutrition)
**Dose** — how much
**Duration** — how long
**De-escalation** — when to stop or change

**Fluid choice by clinical scenario:**

**Hypovolaemic shock** (sepsis, haemorrhage):
- Immediate: 250–500 mL boluses of Hartmann's (preferred) or 0.9% NaCl
- Assess response after each bolus (passive leg raise test, pulse pressure variation)
- Avoid over-resuscitation (causes oedema, abdominal compartment syndrome, worse outcomes)

**Vomiting with metabolic alkalosis + hypokalaemia:**
- 0.9% NaCl (to replace Cl⁻ deficit and volume) + KCl
- Do NOT use Hartmann's (already alkaline from lactate)

**DKA:**
- Start: 0.9% NaCl 1L/hour for first 1–2 hours
- Then: 0.45% NaCl or Hartmann's at reduced rate
- Add dextrose when glucose < 200 mg/dL (to prevent hypoglycaemia while continuing insulin)
- Add KCl once K⁺ confirmed ≥ 3.3 and urine output established

**Hypernatraemia correction:**
- D5W (free water, no sodium) or 0.45% NaCl (half saline)
- Correct 10 mmol/L per day maximum

**Hyponatraemia correction (symptomatic):**
- 3% NaCl — raise Na⁺ by 1–2 mEq/L/hour until symptoms resolve, then slow to ≤ 0.5 mEq/L/hour
- NEVER exceed 10–12 mEq/L per 24 hours in chronic hyponatraemia

**Post-operative maintenance:**
- Avoid large-volume 0.9% NaCl (hyperchloraemic acidosis risk)
- Hartmann's preferred
- Restrict free water in post-operative hyponatraemia (SIADH from surgical stress, ADH release)

**Perioperative fluid management:**
- Goal-directed fluid therapy (GDT) — use cardiac output monitoring (oesophageal Doppler, arterial waveform analysis) to titrate fluid to optimise stroke volume
- Avoids under-resuscitation (organ ischaemia) and over-resuscitation (oedema, anastomotic leak, ileus)

**Clinical decision framework — when to give fluids and which:**

1. Does the patient need fluid? (Volume depleted? Poor perfusion? Resuscitation needed?)
2. What is the likely fluid deficit? (Blood — give blood; water — give hypotonic; salt and water — give isotonic)
3. Are there specific electrolyte deficits to correct? (K⁺, Mg²⁺, Ca²⁺, PO₄³⁻)
4. Are there contraindications? (Heart failure — cautious; cerebral oedema — restrict; pulmonary oedema — diurese)
5. What is the target and how will I measure it? (BP, HR, lactate clearance, urine output, CVP, stroke volume variation)

**Grasp Tonic 🧃**

Choosing an IV fluid is like choosing which chemical to add to a swimming pool. Adding normal saline to a patient with vomiting-induced metabolic alkalosis is like adding a chlorinated acid solution to an already too-acidic pool — you are partly correcting the problem (replacing Cl⁻ and volume) but not contributing any alkalinity buffer. Adding Hartmann's to a patient with hyperchloraemic acidosis is like adding a buffered, balanced solution that restores chemistry without overcorrecting. And adding free water (D5W) to a hypernatraemic patient is like diluting the concentrated pool with pure water — exactly what is needed, but done too fast and the walls crack (cerebral oedema). Every fluid is a chemical intervention. Know its composition, know the patient's chemistry, and match them precisely.`,
    },
    {
      id: 13,
      title: 'Teaching Receipt™ — Acid-Base & Fluid/Electrolyte Disorders',
      isDeepDive: false,
      content: `You have completed the core sections of Acid-Base and Fluid/Electrolyte Disorders. This topic underpins clinical management across every specialty — from the ICU to general practice.

**The Three-System Framework**

Acid-base regulation depends on three systems working in concert — buffers (seconds), lungs (minutes), kidneys (hours to days). Every clinical disorder involves disruption of one or more of these systems, with compensatory responses from the others. Compensation is never complete — it restores pH toward but never to normal.

**The Master Equation**

pH = 6.1 + log(HCO₃⁻ / 0.03 × PaCO₂). pH depends on the ratio of HCO₃⁻ to CO₂ — not their absolute values. The lungs regulate CO₂; the kidneys regulate HCO₃⁻.

**The Systematic ABG Approach**

Five steps: (1) Acidaemia or alkalaemia? (2) Respiratory or metabolic primary disorder? (3) Appropriate compensation? (4) Anion gap if metabolic acidosis? (5) Delta-delta if high AG? Follow this every time, without shortcuts.

**The Four Primary Disorders**

Respiratory acidosis (hypoventilation → ↑CO₂), respiratory alkalosis (hyperventilation → ↓CO₂), metabolic acidosis (↓HCO₃⁻), metabolic alkalosis (↑HCO₃⁻). Know the common causes of each and the first-line management.

**The Anion Gap**

Normal 8–12. High AG metabolic acidosis = MUDPILES. Normal AG metabolic acidosis = USED CARP. The anion gap tells you the mechanism.

**Fluid Compartments**

TBW = 60% of weight. Two-thirds is ICF (K⁺-rich). One-third is ECF — split between interstitial and intravascular. Starling forces govern plasma-to-interstitium movement. Osmolality governs ECF-to-ICF movement. Sodium determines ECF volume and osmolality.

**Electrolyte Interactions**

Hyperkalaemia and acidosis coexist (K⁺ out, H⁺ in). Hypokalaemia and alkalosis coexist (K⁺ in, H⁺ out). You cannot correct alkalosis without fixing K⁺. You cannot fix K⁺ without fixing Mg²⁺. These are not independent problems — they are interlocking.

**RTA**

Type 1 (distal) — urine pH > 5.5, hypokalaemia, nephrocalcinosis. Type 2 (proximal) — variable urine pH, Fanconi syndrome. Type 4 — hyperchloraemic acidosis + hyperkalaemia, often from hypoaldosteronism in diabetes.

**Sodium Safety**

Chronic hyponatraemia — correct < 10 mEq/L per day (risk: ODS). Chronic hypernatraemia — correct < 10–12 mEq/L per day (risk: cerebral oedema). The speed of correction is as important as the direction.

You are now ready for the Deep Dive — where we explore the Stewart strong ion approach, triple disorders, base excess, advanced RRT decision-making, and the molecular physiology of individual renal transporters.`,
    },
    {
      id: 14,
      title: 'Deep Dive — Advanced Acid-Base & Renal Physiology',
      isDeepDive: true,
      content: `This Deep Dive explores the quantitative framework of acid-base physiology, the Stewart approach, advanced clinical scenarios, and the molecular biology of renal transport.

**The Stewart Approach — An Alternative Framework**

The traditional Henderson-Hasselbalch approach views acid-base through the lens of CO₂ and HCO₃⁻. Peter Stewart (1981) proposed a fundamentally different framework based on the physicochemical determinants of plasma [H⁺].

In Stewart's model, pH is determined by three independent variables:

**1. PaCO₂** (respiratory component) — as in traditional approach

**2. Strong ion difference (SID):**
SID = [Na⁺] + [K⁺] + [Ca²⁺] + [Mg²⁺] − [Cl⁻] − [Lactate⁻] − [Other strong anions]
Effective SID ≈ Na⁺ − Cl⁻ (simplified approximation)
Normal SID ≈ 40–44 mEq/L

↑ SID → alkalosis
↓ SID → acidosis

This explains why:
- **Hyperchloraemic acidosis** (normal saline): Cl⁻ rises → SID falls → acidosis (even before HCO₃⁻ is affected in traditional model)
- **Hypochloraemic alkalosis** (vomiting): Cl⁻ falls → SID rises → alkalosis
- **Dilutional acidosis**: adding free water dilutes Na⁺ and Cl⁻ equally, but SID (Na⁺ − Cl⁻) falls → acidosis

**3. Total weak acid concentration (Atot):**
Primarily albumin and phosphate.
↑ Atot → acidosis
↓ Atot → alkalosis

This explains why **hypoalbuminaemia causes alkalosis** — a phenomenon invisible to the traditional approach. Low albumin → reduced Atot → alkalosis. This "occult metabolic alkalosis" can mask a coexisting metabolic acidosis (the anion gap should be corrected for albumin: adjusted AG = measured AG + 2.5 × [4 − albumin g/dL]).

**The apparent SID (SIDa) vs effective SID (SIDe):**

SIDa = sum of measured strong cations − strong anions
SIDe = plasma [HCO₃⁻] + plasma [albuminate⁻] + plasma [phosphate]
SIG (strong ion gap) = SIDa − SIDe (identifies unmeasured strong anions, analogous to anion gap)

SIG > 2 mEq/L → unmeasured strong anions present (lactate, ketoacids, toxins)

**The base excess — independent of respiratory changes:**

Base excess (BE) represents the amount of acid (if positive) or base (if negative) required to restore 1 litre of blood to pH 7.40 at PaCO₂ 40 mmHg, 37°C.

Normal BE: −2 to +2 mEq/L
Negative BE (base deficit) → metabolic acidosis
Positive BE → metabolic alkalosis

Advantage: BE is independent of PaCO₂ (corrects for respiratory component), allowing isolation of the metabolic contribution to pH disturbance. Useful in:
- Trauma (quantifying metabolic acidosis: BE < −6 → significant, < −10 → severe)
- Monitoring response to resuscitation (normalising BE suggests improving perfusion)
- Ventilated patients (BE separates metabolic from ventilator-induced changes)

Standardised base excess (SBE) — calculated assuming Hb is 5 g/dL (removes buffering contribution of red cells) — is the preferred clinical measure.

**Triple acid-base disorders**

Yes, three simultaneous primary disorders can exist:

Example: Cirrhotic patient with:
- Chronic respiratory alkalosis (hyperventilation from ammonia stimulating brainstem) — PaCO₂ low
- Metabolic alkalosis from diuretics — HCO₃⁻ high
- Lactic acidosis from spontaneous bacterial peritonitis — AG elevated

ABG might show: pH 7.44 (near normal), PaCO₂ 30, HCO₃⁻ 19, AG 22

Interpretation:
- pH near normal but elevated AG → something is wrong
- PaCO₂ 30: respiratory alkalosis OR compensation for metabolic acidosis
- HCO₃⁻ 19: lower than expected if this were pure respiratory alkalosis with chronic compensation (expected HCO₃⁻ ≈ 24 − 5×(10/10) = 19... actually consistent with chronic respiratory alkalosis alone)
- AG 22: elevated — MUDPILES → lactic acidosis
- But HCO₃⁻ should be even lower if both lactic acidosis and respiratory alkalosis were present → must also have metabolic alkalosis (from diuretics) raising HCO₃⁻

Triple disorder: respiratory alkalosis + metabolic alkalosis + high AG metabolic acidosis

**The Delta Ratio in depth:**

For every 1 mEq/L rise in AG above normal (12), HCO₃⁻ should fall by approximately 1 mEq/L (the acid consuming the bicarbonate).

If HCO₃⁻ falls less than the AG rises → bicarbonate is being added from somewhere → concurrent metabolic alkalosis
If HCO₃⁻ falls more than the AG rises → additional bicarbonate is being consumed → concurrent normal AG metabolic acidosis

**Molecular physiology of renal acid-base transport:**

**Proximal tubule — HCO₃⁻ reabsorption:**

The dominant transporter is **NHE3** (Na⁺/H⁺ exchanger 3) on the apical membrane, driven by the Na⁺ gradient maintained by basolateral Na⁺/K⁺-ATPase.

Luminal carbonic anhydrase IV: converts tubular H₂CO₃ → CO₂ + H₂O
Intracellular carbonic anhydrase II: converts CO₂ + H₂O → H₂CO₃ → H⁺ + HCO₃⁻
Basolateral NBCe1 (electrogenic Na⁺/HCO₃⁻ cotransporter): HCO₃⁻ exits to blood

Regulation of NHE3:
- Angiotensin II → activates NHE3 (↑ HCO₃⁻ reabsorption)
- Volume expansion → inhibits NHE3 (↓ HCO₃⁻ reabsorption)
- Hypercapnia → activates NHE3
- PTH → inhibits NHE3 (reducing phosphate reabsorption)
- Acetazolamide → inhibits carbonic anhydrase → disrupts whole process

**Collecting duct — H⁺ secretion:**

Type A intercalated cells: apical H⁺-ATPase and H⁺/K⁺-ATPase secrete H⁺; basolateral AE1 (anion exchanger 1, Band 3 protein) exchanges Cl⁻ for HCO₃⁻ → HCO₃⁻ to blood.

Mutations in AE1 (SLC4A1) → Distal Type 1 RTA (autosomal dominant in some families)
Mutations in H⁺-ATPase subunits (ATP6V1B1, ATP6V0A4) → Distal Type 1 RTA (often with sensorineural hearing loss — V-ATPase required for endocochlear potential)

Type B intercalated cells: opposite orientation — secrete HCO₃⁻ into lumen (pendrin on apical membrane), reabsorb H⁺ → urinary alkalinisation when challenged with alkali load.

**Pendrin (SLC26A4):** The anion exchanger on type B intercalated cells that secretes HCO₃⁻ in exchange for Cl⁻. Also expressed in inner ear. Mutations → **Pendred syndrome** (goitre, sensorineural deafness, incomplete bicarbonate secretion).

**ROMK (Kir1.1, KCNJ1):** K⁺ channel in thick ascending limb and cortical collecting duct. Mutations → Bartter Type II. ROMK is the target of... no drug targets it directly, but its expression is regulated by aldosterone and SGK1.

**SGK1 (serum and glucocorticoid-regulated kinase 1):**
Aldosterone → binds mineralocorticoid receptor → SGK1 transcription → SGK1 phosphorylates Nedd4-2 (prevents ENaC internalisation) → ENaC stays on cell surface → ↑ Na⁺ reabsorption.

This pathway is also the target of potassium-sparing diuretics:
- Spironolactone/eplerenone: block MR receptor → no SGK1 induction → ENaC internalised → ↓ Na⁺ reabsorption, ↓ K⁺/H⁺ excretion
- Amiloride/triamterene: directly block ENaC channel

**Advanced clinical scenarios:**

**Scenario 1: Severe salicylate toxicity with respiratory failure**

Initial: respiratory alkalosis + high AG metabolic acidosis (mixed).
Danger: If the patient becomes obtunded (from salicylate CNS toxicity) and respiratory rate slows, respiratory alkalosis is lost → remaining high AG metabolic acidosis → severe, rapid acidaemia.

Management: Avoid intubation if possible (losing respiratory alkalosis immediately worsens pH). If must intubate: hyperventilate to achieve PaCO₂ matching pre-intubation level. Bicarbonate infusion to alkalinise blood AND urine. Dialysis for severe toxicity (salicylate is efficiently dialysed).

**Scenario 2: Severe DKA — cerebral oedema prevention**

Risk factors for cerebral oedema in DKA (mainly children): young age, new-onset DM, high initial osmolality, rapid fall in osmolality with treatment, bicarbonate administration, excessive fluid administration.

Mechanism: Brain accumulates idiogenic osmoles (sorbitol, myo-inositol) during hyperglycaemia. Rapid fall in serum osmolality with treatment → water shifts into brain → cerebral oedema.

Prevention: Avoid rapid correction of hyperglycaemia (target 50–75 mg/dL/hour), avoid bicarbonate, cautious fluid administration (no longer front-load with 20 mL/kg boluses in children).

Treatment if oedema occurs: Mannitol 1g/kg IV, hypertonic saline (3%) as alternative.

**Scenario 3: Refractory metabolic alkalosis in ICU**

Patient post-cardiac surgery with HCO₃⁻ 42, pH 7.62, PaCO₂ 53 (appropriate compensation), urine Cl⁻ 45 (saline-resistant).

Causes: diuretics + nasogastric suctioning + post-hypercapnic alkalosis from ventilator weaning.

Management options:
- Reduce nasogastric suction
- Switch loop diuretic to acetazolamide (forces renal HCO₃⁻ wasting)
- Check and correct K⁺ and Mg²⁺
- Reduce/stop diuretics if haemodynamically tolerated
- Very severe: consider hydrochloric acid infusion (0.1–0.2 mol/L via CVC), CRRT with low-bicarbonate bath

**The osmolar gap — advanced use:**

Calculated osmolality = 2[Na⁺] + [glucose (mmol/L)] + [urea (mmol/L)]
Or in mg/dL: 2[Na⁺] + [glucose/18] + [BUN/2.8]

Osmolar gap = measured − calculated. Normal < 10 mOsm/kg.

Elevated osmolar gap suggests unmeasured osmoles:
- Ethanol (most common — not dangerous but elevates gap)
- Methanol, ethylene glycol — dangerous → antidote (fomepizole) + dialysis
- Isopropanol (rubbing alcohol — no acidosis, metabolised to acetone)
- Propylene glycol (solvent in many IV drugs including diazepam, lorazepam, phenobarbitone — accumulates with prolonged infusion)
- Lactate (high lactate also elevates osmolar gap)
- Glycine (TURP syndrome — glycine irrigation absorbed)

**Renal replacement therapy (RRT) for acid-base:**

Indications (AEIOU):
- **A**cidosis: pH < 7.1 refractory to medical management, or when compensation (hyperventilation) is failing
- **E**lectrolytes: refractory hyperkalaemia with ECG changes, refractory hyponatraemia
- **I**ntoxication: dialysable toxins (salicylates, methanol, ethylene glycol, lithium, valproate)
- **O**verload: fluid overload unresponsive to diuretics
- **U**raemia: symptomatic uraemia (encephalopathy, pericarditis, coagulopathy)

RRT modalities:
- **IHD** (intermittent haemodialysis): efficient, fast — for haemodynamically stable patients, acute poisoning
- **CRRT** (continuous renal replacement therapy): gentle, continuous — preferred for haemodynamically unstable ICU patients, cerebral oedema (slower osmolality changes)
- **PIRRT/SLED** (prolonged intermittent): hybrid, useful for moderate instability

Buffer in CRRT dialysate:
- Bicarbonate-based (most common): directly replaces HCO₃⁻, predictable
- Lactate-based: metabolised to HCO₃⁻ by liver — avoid in liver failure or lactic acidosis
- Citrate (regional anticoagulation): citrate chelates Ca²⁺ in the circuit → anticoagulation; metabolised to HCO₃⁻ by liver → can cause metabolic alkalosis if dose not adjusted; causes hypocalcaemia if citrate accumulates (monitor ionised Ca²⁺)`,
    },
  ],
  teachingReceipt: {
    mastered: [
      'The three-system framework of acid-base regulation — buffers (seconds), lungs (minutes), kidneys (hours to days) — and the limitations of each',
      'The bicarbonate buffer system and Henderson-Hasselbalch equation, and how pH depends on the HCO₃⁻:CO₂ ratio',
      'The systematic 5-step ABG interpretation approach, including compensation formulas for all four primary disorders',
      'The anion gap — calculation, normal range, MUDPILES (high AG) vs USED CARP (normal AG) causes',
      'The delta-delta ratio and its use in detecting mixed disorders',
      'The pathophysiology, clinical features, and management of metabolic acidosis — DKA, lactic acidosis, uraemic acidosis, and toxic alcohols',
      'The pathophysiology and management of metabolic alkalosis — chloride-responsive vs chloride-resistant distinction',
      'The Starling forces governing capillary fluid movement and the mechanisms of oedema',
      'Sodium disorders — hyponatraemia and hypernatraemia — with correct rates of correction to avoid ODS and cerebral oedema',
      'Potassium, calcium, and magnesium disorders — their ECG findings, interactions with pH, and emergency management',
      'The three types of renal tubular acidosis — distinguishing features, causes, and treatments',
      'IV fluid composition and selection in common clinical scenarios',
    ],
    selfCheckQuestions: [
      'A patient presents with pH 7.18, PaCO₂ 22, HCO₃⁻ 8, Na 138, Cl 98, lactate 12 mmol/L. Work through all 5 steps of ABG interpretation and state the diagnosis and management.',
      'Explain why you should not give bicarbonate in lactic acidosis from septic shock.',
      'A COPD patient has chronic respiratory acidosis with PaCO₂ 65 and HCO₃⁻ 38. You intubate them and ventilate to PaCO₂ 40. What happens to their pH? Why is this dangerous and how do you prevent it?',
      'A patient has vomiting for 5 days. Bloods show Na 132, K 2.8, Cl 78, HCO₃⁻ 42, pH 7.56. What is the primary disorder? What maintains it? What is your treatment?',
      'An elderly woman is found confused with Na⁺ 118 mEq/L. She is euvolaemic. What is the most likely diagnosis? How fast can you correct the sodium and why?',
      'Explain the paradoxical aciduria that occurs in vomiting with metabolic alkalosis.',
      'A patient with CKD and diabetes has Na 140, K 6.2, Cl 112, HCO₃⁻ 16, pH 7.28. What type of metabolic acidosis is this and what is the likely RTA type? What clue in the K⁺ helps you identify it?',
      'A patient develops tetany and perioral paraesthesias despite normal total serum calcium. What is the likely explanation?',
      'Why can you not correct hypokalaemia without first replacing magnesium?',
      'Compare the management of hyponatraemia in SIADH vs cerebral salt wasting — why do they require opposite treatments, and what clinical features help distinguish them?',
    ],
  },
};
