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

export const acidBaseChapter: CrashChapter = {
  chapterTitle: "Acid-Base & Fluid/Electrolyte Disorders",
  moduleSlug: "acid-base",
  sections: [
    {
      id: 0,
      title: "Marable™: The Swimming Pool",
      content: `Picture a community swimming pool. To keep the water safe and comfortable, the pool manager must maintain perfect pH balance—not too acidic, not too alkaline.

The pool has three main systems working together:

**System 1: The Chemical Buffer (Instant Response - Seconds)**
When someone dumps acid into the pool (like adding too much chlorine), chemicals already dissolved in the water immediately neutralize some of it. This happens instantly but has limited capacity.

**System 2: The Ventilation System (Fast Response - Minutes)**
If acid levels rise, the pool's aeration system kicks in, bubbling out acidic gas. If the water becomes too alkaline, the system reduces bubbling to retain acid. This adjusts pH within minutes.

**System 3: The Filtration/Drainage System (Slow Response - Hours to Days)**
The sophisticated filtration system can selectively remove excess acid or base over time. It's powerful but slow. If you dump a barrel of acid in the pool, this system might take days to fully restore balance.

Here's the critical insight: **all three systems must work together**. If the chemical buffers are depleted, the ventilation system becomes crucial. If ventilation fails, filtration must compensate. If any system completely fails, pH spirals out of control.

Your body is exactly like this pool. Your blood pH must stay incredibly stable (7.35-7.45) or you die. You have the same three systems: chemical buffers (seconds), lungs (minutes), and kidneys (hours-days).

Understanding acid-base disorders means understanding how these systems compensate for each other—and what happens when compensation fails.`,
      isDeepDive: false,
    },
    {
      id: 1,
      title: "Translation: From Pool to Physiology",
      content: `Now let's map the swimming pool directly to your body's acid-base system.

**The pool water = Your blood**
Normal pH: 7.35-7.45 (slightly alkaline). This narrow range is non-negotiable. pH below 6.8 or above 7.8 is usually fatal.

**Chemical buffers = Bicarbonate buffer system (and others)**
The primary buffer in your blood: HCO3− (bicarbonate) + H+ ↔ H2CO3 (carbonic acid) ↔ CO2 + H2O

This equation is reversible and immediate. When acid (H+) increases, bicarbonate mops it up. When base increases, carbonic acid releases H+. This happens in milliseconds.

Secondary buffers: proteins (hemoglobin in blood, albumin in plasma), phosphate (especially in kidneys), bone (can release or absorb H+ but takes hours).

**Ventilation system = Your lungs**
Your lungs control CO2 levels by adjusting breathing rate and depth:
- Too much acid (H+) in blood? → Breathe faster/deeper → blow off CO2 → pH rises
- Too much base (not enough H+)? → Breathe slower/shallower → retain CO2 → pH falls

Response time: 1-3 minutes. Maximal compensation: 12-24 hours.

**Filtration/drainage = Your kidneys**
Your kidneys are the ultimate pH regulators. They can:
- Excrete H+ (acid) in urine
- Reabsorb HCO3− (base) from filtrate
- Generate new HCO3− through ammonia and phosphate systems
- Adjust electrolytes (K+, Cl−) that affect pH

Response time: hours to days. But they're powerful—kidneys can fully compensate for chronic respiratory problems.

**The key clinical insight:**
Acid-base disorders have two components:
1. **Primary problem:** The initial disturbance (too much/little CO2 or HCO3−)
2. **Compensation:** How other systems try to restore pH

Your job: identify the primary problem, verify appropriate compensation, and treat the underlying cause.`,
      isDeepDive: false,
    },
    {
      id: 2,
      title: "Normal Baseline: The Golden Range",
      content: `Before diving into disorders, let's establish normal values. These numbers are crucial for interpreting arterial blood gases (ABGs).

**Normal ABG values:**
- pH: 7.35-7.45 (7.40 is ideal)
- PaCO2: 35-45 mmHg (40 mmHg is ideal)
- HCO3−: 22-26 mEq/L (24 mEq/L is ideal)
- PaO2: 80-100 mmHg (oxygen, not directly part of acid-base but always reported)

**Understanding the Henderson-Hasselbalch equation:**
pH = 6.1 + log([HCO3−] / [0.03 × PaCO2])

You don't need to calculate this, but understand the relationship:
- pH ∝ HCO3− (metabolic component)
- pH ∝ 1/PaCO2 (respiratory component)

Translation:
- If HCO3− goes up → pH goes up (more alkaline)
- If PaCO2 goes up → pH goes down (more acidic)

**The normal physiology:**
Your cells constantly produce acid (CO2 from aerobic metabolism, H+ from various processes). About 15,000 mmol of CO2 is produced daily—your lungs blow this off. About 50-100 mEq of nonvolatile acid is produced daily—your kidneys excrete this.

**Buffering capacity:**
Your body can handle temporary acid loads, but chronic production must be matched by excretion. If production exceeds excretion (or vice versa), pH changes, and compensation kicks in.

**The anion gap (important concept):**
Anion gap = Na+ − (Cl− + HCO3−)
Normal: 8-12 mEq/L (depends on lab)

This represents unmeasured anions (proteins, phosphate, sulfate, organic acids). An elevated anion gap means extra acid is present (lactic acid, ketoacids, toxins, etc.).

**Why this matters clinically:**
Every ABG you interpret starts with these normal values. You'll ask:
1. Is pH abnormal? (If yes, there's an acid-base disorder)
2. Is the problem respiratory (PaCO2 abnormal) or metabolic (HCO3− abnormal)?
3. Is compensation appropriate?
4. Is there an anion gap? (If yes, what's the cause?)

Master these normals, and interpreting ABGs becomes systematic and straightforward.`,
      isDeepDive: false,
    },
    {
      id: 3,
      title: "Stress Enters: Primary Disorders",
      content: `Acid-base disorders fall into four primary categories. Let's understand each:

**1. Respiratory Acidosis (too much CO2)**
Primary problem: Lungs can't blow off CO2 → PaCO2 rises → pH falls

Causes:
- Airway obstruction (asthma, COPD, foreign body)
- Respiratory muscle weakness (myasthenia gravis, Guillain-Barré)
- Central drive suppression (opioids, brain injury, severe obesity/sleep apnea)
- Lung disease (severe pneumonia, ARDS, pulmonary edema)

Clinical clue: Patient is hypoventilating or has lung disease.

**2. Respiratory Alkalosis (too little CO2)**
Primary problem: Lungs blow off too much CO2 → PaCO2 falls → pH rises

Causes:
- Hyperventilation (anxiety, pain, fever, pregnancy)
- Hypoxemia (causes hyperventilation as compensation)
- Direct stimulation of respiratory center (salicylate toxicity, CNS lesions)
- Mechanical ventilation (settings too aggressive)

Clinical clue: Patient is breathing fast and/or deep.

**3. Metabolic Acidosis (too little HCO3− or too much H+)**
Primary problem: Acid accumulates or base is lost → HCO3− falls → pH falls

High anion gap causes (MUDPILES mnemonic):
- Methanol
- Uremia (kidney failure)
- Diabetic ketoacidosis (DKA)
- Propylene glycol / Paraldehyde
- Iron, Isoniazid
- Lactic acidosis (shock, sepsis, hypoxia)
- Ethylene glycol
- Salicylates

Normal anion gap causes (losing HCO3−):
- Diarrhea (losing HCO3− in stool)
- Renal tubular acidosis (kidneys can't retain HCO3− or excrete H+)
- Ureteral diversions (urine contacts bowel, which absorbs Cl− and loses HCO3−)
- Carbonic anhydrase inhibitors (acetazolamide)

Clinical clue: Look for underlying cause (DKA, diarrhea, kidney failure, toxin).

**4. Metabolic Alkalosis (too much HCO3− or too little H+)**
Primary problem: Base accumulates or acid is lost → HCO3− rises → pH rises

Causes:
- Vomiting or NG suction (losing H+ from stomach)
- Diuretics (losing Cl− and K+, kidneys retain HCO3− to maintain electroneutrality)
- Hyperaldosteronism (kidneys retain Na+ and excrete H+)
- Excessive bicarbonate intake (antacids, IV fluids)
- Hypokalemia (as K+ leaves cells, H+ enters cells to maintain charge balance)

Clinical clue: Often involves vomiting, diuretics, or mineralocorticoid excess.

**The key pattern:**
- Respiratory disorders: primary change in PaCO2
- Metabolic disorders: primary change in HCO3−

In every case, the body will try to compensate using the other system. But compensation is never perfect—it moves pH toward normal but doesn't fully correct it.`,
      isDeepDive: false,
    },
    {
      id: 4,
      title: "Adaptation: Compensation Kicks In",
      content: `When a primary acid-base disorder occurs, the body's other systems immediately try to compensate. Understanding expected compensation is crucial for diagnosis.

**The compensation rules (memorize these):**

**For Respiratory Acidosis:**
Acute (minutes-hours): HCO3− increases by 1 for every 10↑ in PaCO2
Chronic (days): HCO3− increases by 3-4 for every 10↑ in PaCO2

Example: PaCO2 = 60 (up 20 from normal 40)
- Acute: HCO3− should be 26 (24 + 2)
- Chronic: HCO3− should be 30-32 (24 + 6-8)

**For Respiratory Alkalosis:**
Acute: HCO3− decreases by 2 for every 10↓ in PaCO2
Chronic: HCO3− decreases by 4-5 for every 10↓ in PaCO2

Example: PaCO2 = 20 (down 20 from normal 40)
- Acute: HCO3− should be 20 (24 − 4)
- Chronic: HCO3− should be 16-18 (24 − 6-8)

**For Metabolic Acidosis:**
Expected PaCO2 = 1.5 × HCO3− + 8 (±2)
Or use Winters' formula: Expected PaCO2 = last 2 digits of pH

Example: HCO3− = 12
- Expected PaCO2 = (1.5 × 12) + 8 = 26 mmHg
- If pH = 7.28, expected PaCO2 = 28 mmHg

**For Metabolic Alkalosis:**
PaCO2 increases by 0.7 for every 1↑ in HCO3−

Example: HCO3− = 40 (up 16 from normal 24)
- Expected PaCO2 = 40 + (0.7 × 16) ≈ 51 mmHg

**Why these rules matter:**
If compensation is **appropriate**, it's a simple disorder (one primary problem).
If compensation is **inadequate or excessive**, it's a mixed disorder (two primary problems).

**Example of appropriate compensation:**
Patient with COPD:
- pH = 7.35 (low-normal)
- PaCO2 = 60 (high)
- HCO3− = 32 (high)

Interpretation: Chronic respiratory acidosis with appropriate renal compensation. The kidneys have retained HCO3− to bring pH back toward normal.

**Example of mixed disorder:**
Patient with vomiting and pneumonia:
- pH = 7.48 (high)
- PaCO2 = 50 (high)
- HCO3− = 40 (high)

Interpretation: Metabolic alkalosis (from vomiting) + respiratory acidosis (from pneumonia). Both PaCO2 and HCO3− are high, which shouldn't happen in a simple disorder with compensation.

**Limits of compensation:**
- Respiratory compensation for metabolic disorders maxes out at PaCO2 ~10-12 mmHg (can't hyperventilate more) or ~55-60 mmHg (CO2 narcosis risk)
- Kidneys can't fully compensate for acute respiratory changes (takes days)
- Compensation never overcorrects (if it does, suspect mixed disorder)

**Clinical pearl:**
The body compensates to minimize pH change, but **it never fully corrects pH to exactly 7.40**. If pH is completely normal despite abnormal CO2 or HCO3−, you're looking at a chronic, fully compensated disorder OR a mixed disorder where two problems cancel out.`,
      isDeepDive: false,
    },
    {
      id: 5,
      title: "Tipping Point: Critical Thresholds",
      content: `Not all acid-base disturbances are equal. Some thresholds mark transitions from manageable to life-threatening.

**pH thresholds:**
- pH < 7.20: Severe acidosis. Risk of cardiac arrhythmias, decreased cardiac contractility, insulin resistance, hyperkalemia.
- pH < 7.00: Extreme acidosis. Often incompatible with life. Cardiac arrest risk very high.
- pH > 7.60: Severe alkalosis. Risk of seizures, arrhythmias, hypokalemia, decreased cerebral blood flow.
- pH > 7.70: Extreme alkalosis. High mortality risk.

**Bicarbonate thresholds:**
- HCO3− < 10 mEq/L: Severe metabolic acidosis. Minimal buffer capacity remains.
- HCO3− > 45 mEq/L: Severe metabolic alkalosis. Usually indicates mineralocorticoid excess or massive bicarbonate load.

**CO2 thresholds:**
- PaCO2 > 70-80 mmHg: Risk of CO2 narcosis (confusion, somnolence, coma). Brain becomes less responsive to CO2 as stimulus to breathe.
- PaCO2 < 15 mmHg: Extreme hyperventilation. Risk of cerebral vasoconstriction → decreased brain perfusion.

**The lactate threshold:**
In high anion gap metabolic acidosis, lactate level matters:
- Lactate 2-4 mmol/L: Mild elevation, often compensated
- Lactate 4-10 mmol/L: Significant lactic acidosis, requires treatment
- Lactate > 10 mmol/L: Severe lactic acidosis, often indicates shock, high mortality

**When compensation fails:**
Compensation is limited. If the primary problem is too severe or too rapid, compensation can't keep up.

Example: Diabetic ketoacidosis
- Patient presents with pH 6.95, HCO3− 5, PaCO2 15
- The lungs are compensating maximally (Kussmaul breathing—deep, rapid)
- But they can't hyperventilate enough to normalize pH
- If PaCO2 can't go lower (respiratory muscles fatigue), pH will continue falling unless you treat the primary problem (ketoacidosis)

**Mixed disorders at the tipping point:**
Sometimes two primary problems push in the same direction, creating extreme pH:
- Respiratory acidosis + metabolic acidosis → severe acidemia
- Respiratory alkalosis + metabolic alkalosis → severe alkalemia

Example: Patient with COPD (chronic respiratory acidosis, compensated) develops septic shock (lactic acidosis)
- Both are acidifying processes
- pH can drop precipitously because neither system can compensate for the other

**Critical decision points:**

**When to intubate:**
- Respiratory acidosis with pH < 7.25 and rising PaCO2 (despite increased respiratory effort)
- Patient tiring out (respiratory rate slowing despite persistent acidosis)
- Mental status changes (CO2 narcosis)

**When to give bicarbonate:**
Controversial. Generally considered when:
- pH < 7.10-7.15 in metabolic acidosis
- Life-threatening hyperkalemia
- Certain toxicities (tricyclic antidepressants, aspirin)

NOT recommended in:
- Lactic acidosis (treat underlying shock, not the pH)
- Diabetic ketoacidosis (can worsen hypokalemia and cause cerebral edema)
- Chronic respiratory acidosis (bicarbonate can blunt respiratory drive)

**When to correct slowly vs. rapidly:**
- Acute changes (hours): can correct quickly
- Chronic changes (days-weeks): must correct slowly to avoid rebound alkalosis or acidosis

Example: COPD patient with chronic hypercapnia (PaCO2 = 60, compensated)
- If you put them on a ventilator and rapidly lower PaCO2 to 40, their HCO3− (chronically elevated at ~32) will make them severely alkalotic
- Kidneys need days to excrete the excess bicarbonate

The tipping point isn't just about absolute values—it's about rate of change, compensation capacity, and coexisting problems.`,
      isDeepDive: false,
    },
    {
      id: 6,
      title: "Injury: Physiological Consequences",
      content: `Acid-base disorders aren't just numbers on a blood gas. They have profound effects on every organ system.

**Cardiovascular effects:**

**Acidosis (pH < 7.35):**
- Decreased myocardial contractility (heart pumps weaker)
- Decreased response to catecholamines (pressors work less well)
- Arterial vasodilation (blood pressure drops)
- Increased risk of arrhythmias (especially ventricular)
- Pulmonary vasoconstriction (can worsen right heart strain)

Clinical impact: In septic shock with lactic acidosis, the acidemia itself worsens shock. Treating acidosis can improve cardiovascular function, but only if you also treat the underlying cause.

**Alkalosis (pH > 7.45):**
- Coronary vasoconstriction (can precipitate angina)
- Decreased cerebral blood flow
- Increased myocardial irritability (atrial and ventricular arrhythmias)
- Left shift of oxygen-hemoglobin curve (hemoglobin holds onto O2 more tightly, delivers less to tissues)

**Electrolyte effects:**

**Acidosis:**
- Hyperkalemia: H+ moves into cells, K+ moves out (to maintain electroneutrality). For every 0.1 drop in pH, K+ rises by ~0.6 mEq/L.
- Hypercalcemia: Acidosis reduces protein binding of Ca2+, increasing free (ionized) calcium.

**Alkalosis:**
- Hypokalemia: K+ moves into cells as H+ exits. Severe alkalosis can drop K+ to dangerous levels.
- Hypocalcemia: Increased protein binding of Ca2+. Can cause tetany, paresthesias, seizures.
- Hypomagnesemia: Similar to K+, Mg2+ shifts intracellularly.

Clinical pearl: Always check and correct K+ when treating acid-base disorders. Correcting acidosis can precipitate severe hypokalemia if K+ isn't repleted.

**Neurological effects:**

**Acidosis:**
- Mild: Confusion, lethargy
- Severe: Coma (especially with hypercapnia—CO2 crosses blood-brain barrier easily)
- Chronic respiratory acidosis: Brain adapts by increasing HCO3− in CSF, which is why rapid correction can be dangerous

**Alkalosis:**
- Decreased cerebral blood flow
- Paresthesias (tingling in fingers, toes, around mouth)
- Carpopedal spasm (hand/foot cramping)
- Tetany
- Seizures (severe cases)

**Respiratory effects:**

**Metabolic acidosis:**
- Kussmaul breathing: Deep, rapid respirations trying to blow off CO2
- Respiratory muscle fatigue if sustained
- Eventually respiratory failure if compensation inadequate

**Metabolic alkalosis:**
- Hypoventilation (trying to retain CO2)
- Can worsen hypoxemia in patients with lung disease
- Blunted response to hypoxia (dangerous in COPD patients)

**Renal effects:**

**Acidosis:**
- Increased ammonia production (kidneys trying to excrete H+)
- Potential for kidney stones (uric acid, cystine stones form in acidic urine)
- Bone demineralization in chronic metabolic acidosis (bone buffers release calcium)

**Alkalosis:**
- Decreased ammonia excretion
- Hypokalemia worsens alkalosis (and vice versa—vicious cycle)
- Chloride-responsive vs. chloride-resistant forms affect treatment

**Metabolic effects:**

**Acidosis:**
- Insulin resistance (DKA harder to treat)
- Increased protein catabolism
- Impaired enzyme function (many enzymes work optimally at pH 7.4)

**Alkalosis:**
- Hypokalemia can cause glucose intolerance
- Decreased ionized calcium can affect coagulation

**Oxygen delivery:**

The oxygen-hemoglobin dissociation curve is pH-sensitive:
- Acidosis: Right shift (Bohr effect) → hemoglobin releases O2 more easily → better tissue oxygenation
- Alkalosis: Left shift → hemoglobin holds O2 more tightly → worse tissue oxygenation

This is why severe alkalosis is dangerous even when PaO2 is normal—tissues aren't getting the oxygen.

**Drug metabolism:**

pH affects drug ionization and distribution:
- Weak acids (aspirin, phenobarbital) are more ionized and trapped in alkaline urine (useful for overdose treatment)
- Weak bases (amphetamines, tricyclics) are more ionized and trapped in acidic urine
- Many drugs have altered kinetics in extreme pH

Understanding these consequences helps you prioritize treatment. For example, in a patient with severe acidosis and hyperkalemia, you need to address both emergently—the hyperkalemia can cause cardiac arrest, but treating it alone won't fix the underlying acid-base problem.`,
      isDeepDive: false,
    },
    {
      id: 7,
      title: "Fluid & Electrolyte Integration",
      content: `Acid-base disorders rarely exist in isolation. They're intimately connected to fluid status and electrolyte abnormalities. Let's integrate these concepts.

**The sodium-water connection:**

**Hyponatremia (Na+ < 135 mEq/L):**
Causes:
- Hypervolemic: CHF, cirrhosis, nephrotic syndrome (too much water, relatively less sodium)
- Euvolemic: SIADH, hypothyroidism, psychogenic polydipsia
- Hypovolemic: Diuretics, vomiting, diarrhea, adrenal insufficiency (losing both, but proportionally more sodium)

Clinical effects:
- Mild (130-135): Often asymptomatic
- Moderate (120-130): Nausea, confusion, headache
- Severe (<120): Seizures, coma, brain herniation

Acid-base link: Many causes of hyponatremia also cause acid-base disorders (vomiting → metabolic alkalosis + hyponatremia; diuretics → metabolic alkalosis + hyponatremia).

**Hypernatremia (Na+ > 145 mEq/L):**
Always indicates free water deficit or excess sodium.

Causes:
- Inadequate water intake (elderly, impaired thirst, restricted access)
- Water losses: Diabetes insipidus, osmotic diuresis, insensible losses (fever, burns)
- Excess sodium: Hypertonic saline, salt tablets, mineralocorticoid excess

Clinical effects:
- Lethargy, irritability, confusion
- Severe: Seizures, coma
- Rapid correction can cause cerebral edema

**The potassium-pH relationship:**

This is bidirectional and crucial:

**Acidosis → Hyperkalemia:**
- H+ moves into cells → K+ moves out (electroneutrality)
- Every 0.1 decrease in pH → K+ increases by ~0.6 mEq/L
- Exception: Organic acidoses (DKA, lactic acidosis) have less K+ shift than inorganic acidoses (HCl infusion, RTA)

**Hypokalemia → Alkalosis:**
- K+ depletion → H+ moves into cells (to replace K+)
- Kidneys retain K+ and excrete H+ (worsening alkalosis)
- Creates a vicious cycle: alkalosis worsens hypokalemia, hypokalemia worsens alkalosis

Clinical pearl: You often can't fully correct metabolic alkalosis until you correct hypokalemia. The kidneys will keep excreting H+ to retain K+.

**Hyperkalemia (K+ > 5.5 mEq/L):**
Dangerous because of cardiac effects (peaked T waves, wide QRS, sine wave, VF/asystole).

Causes:
- Decreased excretion: Kidney failure, aldosterone deficiency, ACE inhibitors, NSAIDs
- Increased release: Acidosis, cell lysis (tumor lysis, rhabdomyolysis, hemolysis), succinylcholine
- Increased intake: Rarely sole cause unless renal failure

Treatment priority:
1. Stabilize cardiac membrane: Calcium gluconate (doesn't lower K+, but protects heart)
2. Shift K+ into cells: Insulin + glucose, albuterol, bicarbonate (if acidotic)
3. Increase excretion: Diuretics, kayexalate, dialysis

Acid-base link: Treating acidosis shifts K+ intracellularly, temporarily lowering serum K+. But be careful—correcting acidosis in a patient with pre-existing hypokalemia can cause profound, dangerous hypokalemia.

**Hypokalemia (K+ < 3.5 mEq/L):**
Effects:
- Cardiac: U waves, flattened T waves, arrhythmias
- Muscular: Weakness, cramps, rhabdomyolysis (if severe)
- Renal: Nephrogenic diabetes insipidus (can't concentrate urine)
- Metabolic: Glucose intolerance, metabolic alkalosis

Causes:
- GI losses: Vomiting, diarrhea, laxatives
- Renal losses: Diuretics, hyperaldosteronism, RTA, hypomagnesemia
- Transcellular shift: Alkalosis, insulin, beta-agonists

**The chloride-bicarbonate relationship:**

Chloride and bicarbonate are inversely related in many situations.

**Metabolic alkalosis classification:**
- Chloride-responsive (urine Cl− < 20 mEq/L): Vomiting, NG suction, diuretics (remote). Treat with saline.
- Chloride-resistant (urine Cl− > 20 mEq/L): Hyperaldosteronism, Cushing's, current diuretics. Treat underlying cause.

Why this matters: Giving saline to a vomiting patient corrects both volume depletion and hypochloremia, allowing kidneys to excrete the excess bicarbonate.

**The calcium-pH-albumin connection:**

Total calcium is ~50% ionized (active), ~40% protein-bound, ~10% complexed with anions.

**Acidosis:** Decreases protein binding → increases ionized Ca2+ → patient may be hypercalcemic by ionized Ca2+ despite normal total Ca2+

**Alkalosis:** Increases protein binding → decreases ionized Ca2+ → symptoms of hypocalcemia (tetany, paresthesias) despite normal total Ca2+

**Hypoalbuminemia:** Decreases total Ca2+ but ionized Ca2+ may be normal. Correct measured Ca2+ by adding 0.8 mg/dL for every 1 g/dL decrease in albumin below 4 g/dL.

Clinical pearl: If a patient has tetany with alkalosis but normal total calcium, check ionized calcium—it's likely low.

**Integrated clinical scenarios:**

**Scenario 1: Vomiting patient**
- Loses HCl → metabolic alkalosis
- Loses volume → kidneys retain Na+ (and HCO3− comes along)
- Loses K+ → hypokalemia worsens alkalosis
- Loses Cl− → chloride-responsive alkalosis

Treatment: Saline (repletes volume and Cl−) + KCl (repletes K+). Both are necessary.

**Scenario 2: Diarrhea patient**
- Loses HCO3− in stool → metabolic acidosis (normal anion gap)
- Loses volume → hypovolemia
- Loses K+ → hypokalemia

Treatment: Saline + KCl. The acidosis will correct as kidneys regenerate HCO3−.

**Scenario 3: DKA patient**
- High anion gap metabolic acidosis (ketoacids)
- Osmotic diuresis → volume depletion, hyponatremia (hyperglycemia causes dilutional hyponatremia initially)
- Total body K+ depleted (osmotic diuresis) but serum K+ may be normal or high (acidosis shifts K+ out of cells)

Treatment pearl: As you correct acidosis and give insulin, K+ will drop precipitously. Must give K+ even if initial K+ is elevated (unless >5.5).

Understanding these connections prevents dangerous treatment errors. Treating only the pH without addressing electrolytes and fluid status often fails—or causes new problems.`,
      isDeepDive: false,
    },
    {
      id: 8,
      title: "Clinical Translation: Systematic ABG Interpretation",
      content: `Let's put everything together with a systematic approach to interpreting arterial blood gases and managing acid-base disorders.

**The 5-Step ABG Interpretation Method:**

**Step 1: Is there an acidemia or alkalemia?**
Look at pH:
- pH < 7.35 → Acidemia
- pH > 7.45 → Alkalemia
- pH 7.35-7.45 → Normal (but could be compensated or mixed disorder)

**Step 2: Is the primary problem respiratory or metabolic?**
Look at PaCO2 and HCO3−:
- If pH and PaCO2 move in opposite directions → Respiratory problem (CO2 is causing the pH change)
- If pH and HCO3− move in same direction → Metabolic problem (HCO3− is causing the pH change)

Examples:
- pH 7.30, PaCO2 60 → Respiratory acidosis (pH down, CO2 up)
- pH 7.30, HCO3− 15 → Metabolic acidosis (pH down, HCO3− down)
- pH 7.50, PaCO2 25 → Respiratory alkalosis (pH up, CO2 down)
- pH 7.50, HCO3− 35 → Metabolic alkalosis (pH up, HCO3− up)

**Step 3: Is compensation appropriate?**
Use the formulas from Section 4:
- If compensation matches expected → Simple disorder
- If compensation is inadequate or excessive → Mixed disorder

Example:
- pH 7.30, PaCO2 40, HCO3− 12 → Metabolic acidosis
- Expected PaCO2 = (1.5 × 12) + 8 = 26 mmHg
- Actual PaCO2 = 40 → Inadequate respiratory compensation
- Conclusion: Metabolic acidosis + respiratory acidosis (mixed disorder)

**Step 4: Calculate anion gap (if metabolic acidosis)**
AG = Na+ − (Cl− + HCO3−)
Normal: 8-12 mEq/L

If elevated → High anion gap metabolic acidosis (think MUDPILES)
If normal → Normal anion gap metabolic acidosis (think GI or renal HCO3− loss)

**Step 5: Consider delta-delta (if high AG metabolic acidosis)**
Delta-delta = (Δ anion gap) / (Δ HCO3−)
Where Δ = change from normal

This detects hidden mixed disorders:
- Ratio ~1.0 → Pure high AG metabolic acidosis
- Ratio < 1.0 → High AG metabolic acidosis + normal AG metabolic acidosis
- Ratio > 2.0 → High AG metabolic acidosis + metabolic alkalosis

Example: DKA patient who's been vomiting
- AG = 28 (elevated by 16 from normal 12)
- HCO3− = 18 (decreased by 6 from normal 24)
- Delta-delta = 16/6 = 2.7 → Suggests concurrent metabolic alkalosis (from vomiting)

**Common clinical scenarios:**

**Case 1: COPD exacerbation**
ABG: pH 7.32, PaCO2 65, HCO3− 32, PaO2 55

Step 1: Acidemia (pH 7.32)
Step 2: PaCO2 elevated → Respiratory acidosis
Step 3: HCO3− elevated → Compensation. For chronic respiratory acidosis, expected HCO3− = 24 + (3.5 × 2.5) ≈ 33. Close enough → Chronic respiratory acidosis with appropriate compensation
Clinical action: Optimize bronchodilators, consider NIPPV, don't over-oxygenate (risk of worsening hypercapnia in chronic CO2 retainers)

**Case 2: Diabetic ketoacidosis**
ABG: pH 7.15, PaCO2 18, HCO3− 6, Glucose 450
AG = 140 − (105 + 6) = 29

Step 1: Severe acidemia
Step 2: HCO3− very low → Metabolic acidosis
Step 3: PaCO2 very low → Respiratory compensation. Expected PaCO2 = (1.5 × 6) + 8 = 17. Appropriate.
Step 4: High anion gap (29). Check for ketones (beta-hydroxybutyrate).
Clinical action: Insulin, fluids, K+ replacement. Do NOT give bicarbonate unless pH < 7.0 and cardiovascular instability.

**Case 3: Vomiting**
ABG: pH 7.52, PaCO2 48, HCO3− 38, K+ 2.8, Cl− 88

Step 1: Alkalemia
Step 2: HCO3− elevated → Metabolic alkalosis
Step 3: PaCO2 mildly elevated → Respiratory compensation. Expected PaCO2 = 40 + (0.7 × 14) ≈ 50. Appropriate.
Additional: Low K+, low Cl− → Chloride-responsive metabolic alkalosis
Clinical action: Normal saline + KCl. Must correct both volume and K+ to allow kidneys to excrete HCO3−.

**Case 4: Salicylate toxicity (aspirin overdose)**
ABG: pH 7.48, PaCO2 22, HCO3− 16, AG 20

Step 1: Alkalemia
Step 2: PaCO2 low → Respiratory alkalosis
Step 3: HCO3− also low → Mixed disorder
Step 4: Elevated AG → Also has high AG metabolic acidosis
Diagnosis: Respiratory alkalosis (salicylates stimulate respiratory center) + high AG metabolic acidosis (salicylic acid)
Clinical action: Alkalinize urine (traps ionized salicylate in urine), hydrate, consider dialysis if severe.

**Case 5: Septic shock**
ABG: pH 7.25, PaCO2 28, HCO3− 12, Lactate 8, AG 24

Step 1: Acidemia
Step 2: HCO3− low → Metabolic acidosis
Step 3: PaCO2 low → Compensation. Expected PaCO2 = (1.5 × 12) + 8 = 26. Appropriate.
Step 4: High AG, elevated lactate → Lactic acidosis from shock
Clinical action: Treat shock (fluids, pressors, source control). The lactic acidosis will resolve when tissue perfusion improves. Do NOT give bicarbonate (can worsen intracellular acidosis).

**Treatment principles:**

**For metabolic acidosis:**
1. Treat underlying cause (DKA → insulin; lactic acidosis → improve perfusion; toxins → antidote/dialysis)
2. Bicarbonate rarely indicated (only if pH < 7.1 and severe cardiovascular instability)
3. Correct K+ as acidosis corrects (will drop precipitously)

**For metabolic alkalosis:**
1. Saline if chloride-responsive (vomiting, diuretics)
2. Treat underlying cause if chloride-resistant (hyperaldosteronism)
3. Correct K+ (essential for kidneys to excrete HCO3−)
4. Rarely: acetazolamide (forces kidneys to waste HCO3−) or dilute HCl in severe cases

**For respiratory acidosis:**
1. Improve ventilation (bronchodilators, treat pneumonia, NIPPV, intubation if severe)
2. DO NOT give bicarbonate (worsens CO2 retention and can cause alkalosis when CO2 is corrected)
3. In chronic cases, correct slowly to avoid post-hypercapnic alkalosis

**For respiratory alkalosis:**
1. Treat underlying cause (anxiety → reassurance; pain → analgesia; hypoxia → O2)
2. Rarely needs treatment itself (pH usually not dangerously high)
3. Rebreathing into bag for acute hyperventilation

The key to mastering acid-base: practice, practice, practice. Work through ABGs systematically every time, and the patterns will become second nature.`,
      isDeepDive: false,
    },
    {
      id: 9,
      title: "Big Picture Rules: Memorable Principles",
      content: `Let's distill everything into memorable principles you can apply clinically.

**Rule 1: The three-system approach (buffers, lungs, kidneys)**
Your body regulates pH through three systems with different time scales:
- Buffers (seconds): Immediate but limited capacity
- Lungs (minutes): Fast but can't generate new HCO3−
- Kidneys (hours-days): Slow but powerful and can regenerate HCO3−

Clinical application: In acute problems, think about respiratory compensation first. In chronic problems, kidneys will have adapted.

**Rule 2: Compensation never overcorrects**
If pH is completely normal (7.40) with abnormal CO2 or HCO3−, you're looking at:
- A fully compensated chronic disorder, OR
- A mixed disorder where two problems cancel out

Example: pH 7.40, PaCO2 60, HCO3− 35 → Chronic respiratory acidosis with full renal compensation (COPD patient at baseline)

**Rule 3: The anion gap tells you WHY**
In metabolic acidosis:
- High AG → New acid added (MUDPILES)
- Normal AG → HCO3− lost (GI losses, RTA)

This changes management completely. You can't treat DKA the same way you treat diarrhea-induced acidosis.

**Rule 4: K+ and pH move together**
- Acidosis → K+ rises (H+ moves into cells, K+ moves out)
- Alkalosis → K+ falls (K+ moves into cells, H+ moves out)

Clinical pearl: Always check K+ before correcting acid-base disorders. Correcting acidosis can cause life-threatening hypokalemia if K+ not repleted. In DKA, even if initial K+ is elevated, total body K+ is depleted.

**Rule 5: Treat the cause, not the pH**
With few exceptions (severe acidosis pH < 7.1 with cardiovascular instability), you should treat the underlying disorder, not give bicarbonate or hyperventilate the patient.

Examples:
- DKA → Insulin (stops ketone production)
- Lactic acidosis → Improve perfusion
- Respiratory acidosis → Improve ventilation
- Vomiting-induced alkalosis → Saline + KCl

**Rule 6: Time matters for compensation**
Acute vs. chronic changes have different compensation:
- Acute respiratory acidosis: Kidneys haven't had time to retain HCO3− → less compensation
- Chronic respiratory acidosis: Kidneys have retained HCO3− → better compensation

Clinical implication: Don't rapidly correct chronic acid-base disorders. If you quickly lower PaCO2 in a chronic CO2 retainer, their elevated HCO3− will cause severe alkalosis.

**Rule 7: Mixed disorders are common**
In sick patients, assume mixed disorder until proven otherwise. Look for:
- Compensation that doesn't match expected values
- pH that's too normal given PaCO2 and HCO3− abnormalities
- Delta-delta ratio ≠ 1 in high AG metabolic acidosis

**Rule 8: The swimming pool analogy holds**
Just like a pool needs all three systems working (chemical buffers, ventilation, filtration), your body needs buffers, lungs, and kidneys. If one system fails, others compensate—but compensation has limits.

**Rule 9: Watch for the extremes**
- pH < 7.20 or > 7.60 → High risk of arrhythmias, seizures, death
- HCO3− < 10 or > 45 → Minimal buffer capacity or severe alkalosis
- PaCO2 > 70 → Risk of CO2 narcosis
- Lactate > 10 → High mortality, usually indicates shock

**Rule 10: Some combinations are red flags**
- High AG metabolic acidosis + elevated lactate → Shock/hypoperfusion (treat aggressively)
- Metabolic acidosis + hyperkalemia → Risk of cardiac arrest (urgent treatment)
- Severe alkalosis + hypokalemia → Risk of arrhythmias (correct K+ before correcting pH)
- Respiratory acidosis + altered mental status → Impending respiratory failure (may need intubation)

**Clinical synthesis—the systematic approach:**
Every time you see an ABG:
1. Look at pH (acidemia, alkalemia, or normal)
2. Determine primary disorder (respiratory or metabolic)
3. Check if compensation is appropriate
4. If metabolic acidosis, calculate anion gap
5. Consider clinical context and treat underlying cause

**Common pitfalls to avoid:**
- Giving bicarbonate for lactic acidosis (worsens intracellular acidosis, produces more CO2)
- Correcting chronic CO2 retention too quickly (causes alkalosis)
- Ignoring K+ when correcting acidosis (can cause life-threatening hypokalemia)
- Treating metabolic alkalosis without correcting hypokalemia (kidneys will keep excreting H+ to retain K+)
- Over-oxygenating chronic CO2 retainers (removes hypoxic drive to breathe, worsens hypercapnia)

**The ultimate goal:**
Master the patterns so you can recognize them instantly. When you see pH 7.25, PaCO2 28, HCO3− 12, you should immediately think: "Metabolic acidosis with appropriate respiratory compensation. Check anion gap and lactate. Likely shock or DKA."

This systematic approach will serve you through every rotation and throughout your career. Acid-base is one of those topics that seems impossibly complex at first but becomes intuitive with practice.`,
      isDeepDive: false,
    },
    {
      id: 10,
      title: "Deep Dive: Advanced Concepts & Formulas",
      content: `For those who want a deeper understanding, let's explore advanced concepts, precise formulas, and nuanced clinical scenarios.

**The Henderson-Hasselbalch equation (complete derivation):**

Start with the bicarbonate buffer system:
CO2 + H2O ↔ H2CO3 ↔ H+ + HCO3−

At equilibrium, the Henderson-Hasselbalch equation describes the relationship:
pH = pKa + log([HCO3−] / [H2CO3])

Since [H2CO3] is proportional to PaCO2:
pH = pKa + log([HCO3−] / [0.03 × PaCO2])

Where:
- pKa of carbonic acid = 6.1
- 0.03 is the solubility coefficient of CO2 in blood (mmol/L per mmHg)

Rearranging:
[H+] = 24 × (PaCO2 / [HCO3−])

This explains why doubling PaCO2 doubles [H+] (if HCO3− stays constant), and why halving HCO3− doubles [H+] (if PaCO2 stays constant).

**Precise compensation formulas:**

**Metabolic acidosis:**
Winters' formula: Expected PaCO2 = (1.5 × HCO3−) + 8 (±2)

If measured PaCO2 is:
- Higher than expected → Concurrent respiratory acidosis
- Lower than expected → Concurrent respiratory alkalosis

**Metabolic alkalosis:**
Expected PaCO2 = 0.7 × (HCO3− − 24) + 40 (±5)

Or simpler: PaCO2 increases by 0.7 for every 1 mEq/L increase in HCO3−

**Respiratory acidosis:**
Acute: Expected HCO3− = 24 + [(PaCO2 − 40) / 10]
Chronic: Expected HCO3− = 24 + [3.5 × (PaCO2 − 40) / 10]

**Respiratory alkalosis:**
Acute: Expected HCO3− = 24 − [2 × (40 − PaCO2) / 10]
Chronic: Expected HCO3− = 24 − [5 × (40 − PaCO2) / 10]

**The delta-delta ratio (detailed):**

Used to detect mixed metabolic disorders in high AG metabolic acidosis:

Δ AG = Measured AG − Normal AG (usually 12)
Δ HCO3− = Normal HCO3− (24) − Measured HCO3−

Delta-delta ratio = Δ AG / Δ HCO3−

Interpretation:
- Ratio 1.0-2.0 → Pure high AG metabolic acidosis
- Ratio < 1.0 → High AG metabolic acidosis + normal AG metabolic acidosis (or pre-existing low HCO3−)
- Ratio > 2.0 → High AG metabolic acidosis + metabolic alkalosis (or pre-existing high HCO3−)

Example: DKA patient with concurrent diarrhea
- AG = 30 (Δ AG = 18)
- HCO3− = 10 (Δ HCO3− = 14)
- Delta-delta = 18/14 = 1.3 (normal range)

But if same patient with AG 30 and HCO3− 6:
- Δ HCO3− = 18
- Delta-delta = 18/18 = 1.0

Actually, the Δ AG and Δ HCO3− should be equal in pure high AG metabolic acidosis. If Δ HCO3− is larger than Δ AG, there's additional normal AG metabolic acidosis.

**Osmolar gap:**

Calculated osmolality = 2(Na+) + (Glucose/18) + (BUN/2.8)
Measured osmolality = directly measured by freezing point depression

Osmolar gap = Measured − Calculated (normal < 10)

Elevated osmolar gap suggests unmeasured osmoles:
- Methanol
- Ethylene glycol
- Ethanol (not toxic, but elevates gap)
- Isopropanol
- Propylene glycol

Clinical use: In high AG metabolic acidosis with elevated osmolar gap, think toxic alcohol ingestion.

**Urine anion gap:**

Used to evaluate normal AG metabolic acidosis:
Urine AG = (Urine Na+ + Urine K+) − Urine Cl−

Normal: Negative (−20 to −50 mEq/L)
- Negative → Appropriate urinary acidification → GI losses (diarrhea)
- Positive → Impaired urinary acidification → Renal tubular acidosis

**Renal tubular acidosis (RTA) types:**

**Type 1 (Distal) RTA:**
- Defect: Can't secrete H+ in distal tubule
- Urine pH: > 5.5 (can't acidify urine)
- K+: Low (losing K+ in urine)
- Complications: Kidney stones (calcium phosphate), nephrocalcinosis, bone disease
- Causes: Autoimmune (Sjögren's), drugs (amphotericin, lithium), genetic

**Type 2 (Proximal) RTA:**
- Defect: Can't reabsorb HCO3− in proximal tubule
- Urine pH: Variable (can eventually acidify if HCO3− low enough)
- K+: Low (losing K+ in urine)
- Complications: Fanconi syndrome (also lose glucose, amino acids, phosphate)
- Causes: Genetic, drugs (acetazolamide, ifosfamide), multiple myeloma

**Type 4 (Hyperkalemic) RTA:**
- Defect: Aldosterone deficiency or resistance
- Urine pH: < 5.5 (can acidify)
- K+: High (aldosterone normally promotes K+ excretion)
- Causes: Diabetes (hyporeninemic hypoaldosteronism), ACE inhibitors, NSAIDs, adrenal insufficiency

**Saline-responsive vs. saline-resistant metabolic alkalosis:**

**Saline-responsive (Urine Cl− < 20 mEq/L):**
Volume-depleted states where kidneys are avidly retaining Na+ (and HCO3− comes along):
- Vomiting or NG suction
- Diuretics (remote use)
- Post-hypercapnic state

Treatment: Normal saline (provides volume and Cl−)

**Saline-resistant (Urine Cl− > 20 mEq/L):**
Normal or expanded volume states with mineralocorticoid excess:
- Hyperaldosteronism (primary or secondary)
- Cushing's syndrome
- Licorice ingestion (contains glycyrrhizinic acid, mimics mineralocorticoids)
- Current diuretic use

Treatment: Treat underlying cause (aldosterone antagonists, K+ repletion)

**Triple acid-base disorders:**

Yes, patients can have three simultaneous primary disorders:

Example: Cirrhotic patient with ascites (chronic respiratory alkalosis from hyperventilation) + diuretics (metabolic alkalosis) + spontaneous bacterial peritonitis causing shock (lactic acidosis).

ABG might show pH 7.40, PaCO2 30, HCO3− 20, AG 22
- pH normal but AG elevated → Triple disorder present
- Chronic respiratory alkalosis (low PaCO2)
- Metabolic alkalosis (HCO3− should be ~17 for chronic respiratory alkalosis with PaCO2 30, but it's 20)
- High AG metabolic acidosis (AG 22)

**Base excess/deficit:**

Base excess (BE) is the amount of acid or base needed to titrate blood to pH 7.40 at PaCO2 40 mmHg.

Normal: −2 to +2 mEq/L

- Negative BE (base deficit) → Metabolic acidosis
- Positive BE → Metabolic alkalosis

Advantage: BE is independent of respiratory changes (corrects for CO2 effects).

Clinical use: Helpful in trauma (quantifies metabolic acidosis severity) and in ventilated patients (helps separate metabolic from respiratory components).

**Stewart's strong ion difference (SID) approach:**

An alternative framework for acid-base physiology:

pH is determined by three independent variables:
1. PaCO2 (respiratory component)
2. SID = ([Na+] + [K+] + [Ca2+] + [Mg2+]) − ([Cl−] + [Lactate−])
3. Total weak acids (primarily albumin and phosphate)

↑ SID → ↑ pH (alkalosis)
↓ SID → ↓ pH (acidosis)

Example: In diarrhea, you lose HCO3− but also lose Na+. The loss of Na+ (positive ion) decreases SID → acidosis.

This approach is more physiologically accurate than traditional Henderson-Hasselbalch but more complex. Used mostly in ICU research and complex cases.

**Clinical scenarios with advanced management:**

**Scenario 1: Severe DKA with cerebral edema risk**
ABG: pH 6.95, PaCO2 15, HCO3− 3, Glucose 750, AG 40

Management considerations:
- Avoid rapid correction (cerebral edema risk in children)
- Avoid bicarbonate (increases CO2, can worsen intracellular acidosis, increases risk of cerebral edema)
- Careful fluid management (not too aggressive)
- Monitor glucose decline (should not drop > 50-75 mg/dL/hr)
- Add dextrose when glucose < 250 (continue insulin to clear ketones)
- Watch for hypokalemia (will plummet as acidosis corrects)

**Scenario 2: Chronic COPD with acute on chronic respiratory failure**
Baseline ABG: pH 7.38, PaCO2 60, HCO3− 35 (compensated)
Acute illness ABG: pH 7.25, PaCO2 75, HCO3− 35

Management:
- This is acute-on-chronic respiratory acidosis (HCO3− hasn't risen further because kidneys are already maximally compensating)
- NIPPV (BiPAP) often helpful
- Cautious O2 (target SpO2 88-92%, don't over-oxygenate)
- If you intubate and rapidly lower PaCO2 to 40, the patient will become severely alkalotic (HCO3− 35 with PaCO2 40 → pH ~7.60)
- Permissive hypercapnia: Ventilate to maintain pH > 7.25, not to normalize PaCO2

**Scenario 3: Salicylate toxicity**
Early: Respiratory alkalosis (salicylates stimulate respiratory center)
Later: Mixed respiratory alkalosis + high AG metabolic acidosis (salicylic acid accumulates)
Severe: Respiratory acidosis (respiratory center depression) + metabolic acidosis → severe acidemia

Management:
- Alkalinize urine to pH 7.5-8.0 (traps ionized salicylate in urine)
- Give bicarbonate IV (both to alkalinize urine and counteract metabolic acidosis)
- Avoid intubation if possible (losing respiratory alkalosis can precipitate severe acidemia)
- If must intubate, hyperventilate to maintain respiratory alkalosis
- Hemodialysis for severe cases

**Scenario 4: Tumor lysis syndrome**
High AG metabolic acidosis (uric acid, phosphate) + hyperkalemia + hyperphosphatemia + hypocalcemia

Management:
- Aggressive hydration
- Allopurinol or rasburicase (prevent uric acid formation)
- Bicarbonate is controversial (can worsen calcium phosphate precipitation)
- May need dialysis for refractory hyperkalemia or acidosis

**Advanced treatment: Renal replacement therapy (RRT)**

Indications for dialysis in acid-base/electrolyte emergencies:
- Severe metabolic acidosis (pH < 7.1) refractory to medical management
- Hyperkalemia with EKG changes refractory to medical management
- Toxic ingestions (salicylates, methanol, ethylene glycol, lithium)
- Severe uremia causing metabolic derangements

RRT modalities:
- Intermittent hemodialysis (IHD): Fast, efficient, but can cause hemodynamic instability
- Continuous renal replacement therapy (CRRT): Slower, gentler, better for unstable patients
- Sustained low-efficiency dialysis (SLED): Hybrid approach

The deep dive shows that acid-base physiology is even more nuanced than the main chapter suggests. But master the fundamentals first—these advanced concepts build on that foundation and help you handle complex ICU cases and rare presentations.`,
      isDeepDive: true,
    },
  ],
  teachingReceipt: {
    mastered: [
      "The three-system approach to pH regulation: buffers (seconds), lungs (minutes), kidneys (hours-days)",
      "How to systematically interpret ABGs and identify primary disorders with compensation",
      "How to spot mixed acid-base disorders using anion gap and compensation formulas",
      "The critical thresholds where electrolyte disorders become life-threatening",
      "Why timing and speed of correction matters more than the absolute values",
      "How to apply acid-base principles to real clinical scenarios (DKA, COPD, septic shock, etc.)",
    ],
    selfCheckQuestions: [
      "Can you explain the swimming pool Marable™ and map each component to body physiology?",
      "Given an ABG (pH, PaCO2, HCO3−), can you identify the primary disorder and verify if compensation is appropriate?",
      "Can you explain why you correct chronic hyponatremia slowly but treat acute hyperkalemia immediately?",
    ],
  },
};