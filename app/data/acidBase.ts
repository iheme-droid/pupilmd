export const acidBaseChapter = {
  chapterTitle: 'Acid-Base & Fluid/Electrolyte Disorders',
  moduleSlug: 'acid-base',
  sections: [
    {
      id: 0,
      title: 'The Marable™ — The Swimming Pool',
      isDeepDive: false,
      content: `Imagine you manage a large community swimming pool.

Your job is simple but non-negotiable: the water pH must stay between 7.35 and 7.45 at all times. Too acidic and the swimmers' eyes burn, the equipment corrodes. Too alkaline and scale builds up, bacteria thrive. The margins are narrow. The consequences of failure are real.

Every day, the pool faces challenges. Swimmers bring in acidic sweat and carbon dioxide. Rain dilutes the chemicals. Chemicals degrade. Yet somehow the pool stays balanced — because you have three systems working around the clock.

**System One: The Chemical Buffer (immediate — seconds)**

Dissolved in the water at all times are chemical buffers — substances that immediately neutralise any acid or base that enters. This system is always on, always fast. But it has a limit — the buffers get used up.

**System Two: The Ventilation System (fast — minutes)**

If acid levels start rising despite the buffers, a ventilation pump kicks in — bubbling through the water, driving off acidic gas. The more acidic the water, the harder the pump works. This system responds within minutes. But it cannot generate new buffers — it only adjusts dissolved gas.

**System Three: The Filtration and Regeneration System (slow — hours to days)**

Deep in the pump room is a sophisticated filtration system. Given enough time, it can regenerate depleted buffers, selectively remove excess acid or base, and fine-tune the water chemistry. It is slow — hours to days. But it is powerful.

The key insight: **all three systems work together, compensating for each other's limitations**. A pool whose ventilation system has broken down leans heavily on its buffers and filtration. When the filtration system fails completely, the chemistry eventually spirals out of control.

Your body is this pool. Your blood pH must stay within the same narrow window — 7.35 to 7.45. You have the same three systems:
- **Chemical buffers** (bicarbonate, haemoglobin, phosphate) — seconds
- **Lungs** — minutes
- **Kidneys** — hours to days

Understanding acid-base disorders is understanding what happens when one or more of these systems fails — and how the others try to compensate.`,
    },
    {
      id: 1,
      title: 'Introduction — Acids, Bases & the Body pH System',
      isDeepDive: false,
      content: `Acid-base physiology sits at the intersection of chemistry and clinical medicine. Before we can understand disorders, we need a firm grasp of the underlying chemistry.

**What is an acid? What is a base?**

By the Bronsted-Lowry definition:
- An **acid** is a proton donor — it donates H+ ions
- A **base** is a proton acceptor — it accepts H+ ions

**pH** = -log10[H+]

Normal blood pH: **7.35–7.45** (slightly alkaline)

At pH 7.4: [H+] = 40 nmol/L. This seems trivially small — but this concentration is incredibly tightly regulated. A change from 40 to 80 nmol/L represents a fall in pH from 7.4 to 7.1 — already clinically severe acidaemia.

**pH < 6.8 or > 7.8 is generally incompatible with life.**

**The body's acid production — the daily challenge**

Cells constantly produce acid through normal metabolism:

**Volatile acid — CO2:**
Aerobic metabolism produces approximately **15,000 mmol of CO2 per day**. CO2 + H2O → H2CO3 → H+ + HCO3-

This is continuously blown off by the lungs. Any change in ventilation immediately changes CO2 in blood and therefore pH.

**Fixed (non-volatile) acids:**
Approximately **50–100 mEq of non-volatile acid per day** from protein catabolism, phospholipid metabolism, ketone body formation. These must be excreted by the kidneys.

**The Henderson-Hasselbalch equation:**

pH = 6.1 + log([HCO3-] / [0.03 × PaCO2])

This tells us: pH depends on the **ratio** of HCO3- to CO2. Normal ratio = 20:1. As long as this ratio is maintained, pH stays at 7.4.

**Grasp Tonic 🧃**

pH and H+ concentration move in opposite directions — which trips up many students. The higher the H+ concentration, the lower the pH. Think of it like altitude — the higher the number, the more alkaline you are. If acid pours in (H+ rises), you fall to a lower altitude (lower pH). The body's entire acid-base regulatory apparatus is designed to maintain altitude — to keep pH at 7.4 despite the constant rain of acid that normal metabolism produces every day.`,
    },
    {
      id: 2,
      title: 'The Buffer Systems — First Line of Defence',
      isDeepDive: false,
      content: `Buffers are the body's first — and fastest — response to pH change. They do not eliminate acid or base from the body, but they immediately minimise pH changes by chemically binding or releasing H+.

**The bicarbonate buffer system (primary extracellular buffer)**

HCO3- + H+ → H2CO3 → H2O + CO2

When acid is added: H+ is absorbed by HCO3-, forming CO2 which is exhaled.
When base is added: CO2 is retained, dissociates to provide H+.

The bicarbonate system is the most important clinical buffer because its two components (CO2 and HCO3-) are independently regulated by lungs and kidneys respectively, and both can be measured clinically on an ABG.

**Haemoglobin — the dominant intracellular blood buffer**

Haemoglobin is an excellent buffer, particularly for CO2 transport. Deoxygenated Hb accepts H+ better than oxygenated Hb (the Haldane effect). In anaemia, haemoglobin buffering capacity is reduced.

**Phosphate buffer system**

H2PO4- → H+ + HPO42-

pKa = 6.8 — closer to physiological pH, making it a more efficient buffer. Important in renal tubules as titratable acid.

**The ammonia buffer system (renal)**

The kidney generates ammonia (NH3) from glutamine:
NH3 + H+ → NH4+ (ammonium, excreted in urine)

This is the kidney's most important mechanism for generating new bicarbonate. In chronic acidosis, renal ammonia production can increase 10-fold.

**Grasp Tonic 🧃**

Buffers are like shock absorbers on a car. When you drive over a bump (acid load), the shock absorbers compress (H+ absorbed by HCO3-, Hb, phosphate) — the car (pH) barely moves. But shock absorbers have a limit — compress them far enough and you feel every bump. In the body, once buffers are depleted (HCO3- falls from 24 to say 5 mEq/L), each additional H+ causes a much larger pH change. This is why patients with severe metabolic acidosis become haemodynamically unstable so quickly when their condition deteriorates further — there are almost no shock absorbers left.`,
    },
    {
      id: 3,
      title: 'The Lungs — Respiratory Regulation of pH',
      isDeepDive: false,
      content: `The lungs are the rapid responders of pH regulation. Through adjustments in respiratory rate and depth, they alter alveolar ventilation and therefore PaCO2, achieving meaningful pH correction within minutes.

Normal PaCO2: **35–45 mmHg** (40 mmHg ideal)

**How the lungs respond to acidaemia:**

When pH falls, peripheral and central chemoreceptors stimulate the respiratory centre → increased respiratory rate and tidal volume (hyperventilation) → more CO2 exhaled → PaCO2 falls → pH rises.

The maximum hyperventilatory response can lower PaCO2 to approximately **10–12 mmHg**.

**Kussmaul breathing:** In severe metabolic acidosis (especially DKA), patients develop deep, rapid, regular breathing — a classic clinical sign of metabolic acidaemia stimulating the respiratory centre.

**How the lungs respond to alkalaemia:**

When pH rises → respiratory centre drive reduced → rate and depth decrease (hypoventilation) → CO2 retained → pH falls. However, respiratory compensation for metabolic alkalosis is limited — PaCO2 can usually only rise to approximately **50–55 mmHg** (hypoxia overrides hypoventilation).

**Primary respiratory disorders:**

**Respiratory acidosis (hypoventilation → high PaCO2):**
- Central drive depression: opioids, benzodiazepines, brainstem lesions, obesity hypoventilation
- Neuromuscular disease: myasthenia gravis, Guillain-Barre
- Airway obstruction: COPD exacerbation, severe asthma
- Severe parenchymal disease: ARDS, severe pneumonia

**Respiratory alkalosis (hyperventilation → low PaCO2):**
- Anxiety and panic attacks — most common cause
- Pain, fever, pregnancy
- Hypoxaemia (hypoxia stimulates hyperventilation)
- Liver failure (ammonia stimulates brainstem)
- Salicylate toxicity (early), CNS disease

**Grasp Tonic 🧃**

The lungs are like a pressure release valve on a boiler. When pressure (H+/CO2) builds up, the valve opens wider — more CO2 escapes — pressure falls. When pressure is too low, the valve narrows — CO2 accumulates — pressure rises. The valve can open and close within seconds to minutes, making the lungs the fastest pH regulator with meaningful capacity. But the valve has limits — it can only release so much gas (minimum PaCO2 ~10 mmHg) or retain so much gas (maximum ~55 mmHg before hypoxia overrides).`,
    },
    {
      id: 4,
      title: 'The Kidneys — Metabolic Regulation of pH',
      isDeepDive: false,
      content: `The kidneys are the slow but powerful regulators of acid-base balance. Unlike the lungs (which only adjust CO2), the kidneys can generate new bicarbonate, excrete acid, and fine-tune plasma HCO3- concentration with extraordinary precision.

**The three renal mechanisms:**

**1. HCO3- reabsorption (proximal tubule — 85%)**
H+ secreted into lumen by NHE3 (Na+/H+ exchanger) → combines with filtered HCO3- → CO2 → enters tubular cell → regenerated as HCO3- → exits to blood.

**2. Titratable acid excretion (distal tubule)**
H+ combines with urinary phosphate (HPO42- + H+ → H2PO4-) → excreted as titratable acid.

**3. Ammoniagenesis — the most powerful mechanism**
Proximal tubular cells metabolise glutamine → NH4+ + HCO3-. NH4+ excreted in urine (taking H+ with it), HCO3- returned to blood — the only way the kidney generates **new** bicarbonate.

**Primary metabolic disorders:**

**Metabolic acidosis (↓ HCO3-):**

**High anion gap metabolic acidosis (MUDPILES):**
AG = Na+ - (Cl- + HCO3-) — normally 8–12 mEq/L

- **M**ethanol → formic acid
- **U**raemia
- **D**iabetic ketoacidosis
- **P**ropylene glycol
- **I**soniazid / Iron
- **L**actic acidosis
- **E**thylene glycol
- **S**alicylates

**Normal anion gap (USED CARP):**
- **D**iarrhoea (most common globally — loses HCO3- in stool)
- **R**enal tubular acidosis
- **S**aline infusion
- **A**drenal insufficiency
- And others

**Metabolic alkalosis (↑ HCO3-):**
Divided by urine Cl-:
- **Chloride-responsive** (urine Cl- < 25): Vomiting, NG suction, diuretics. **Treat with saline + KCl.**
- **Chloride-resistant** (urine Cl- > 40): Hyperaldosteronism, Cushing's. **Treat underlying cause.**

**Grasp Tonic 🧃**

The kidneys are the master accountants of acid-base. The lungs handle the daily cash flow (CO2 blown off rapidly), but the kidneys manage the long-term balance sheet. Every day, the body generates ~50–100 mEq of fixed acid. The kidneys must excrete exactly this amount in urine to keep the balance neutral. They do this through titratable acid excretion (spending what was filtered) and ammoniagenesis (creating new currency — new HCO3-). When the kidneys fail, the body runs an ever-increasing acid debt that no amount of faster breathing can fully repay.`,
    },
    {
      id: 5,
      title: 'Normal ABG Values & The Systematic Approach',
      isDeepDive: false,
      content: `The arterial blood gas (ABG) is the clinical test that directly measures acid-base status. Mastering its systematic interpretation is one of the most practically valuable skills in clinical medicine.

**Normal ABG values:**

- pH: 7.40 (range 7.35–7.45)
- PaCO2: 40 mmHg (range 35–45 mmHg)
- HCO3-: 24 mEq/L (range 22–26 mEq/L)
- PaO2: 95 mmHg (range 80–100 mmHg)
- Base excess: 0 (range -2 to +2 mEq/L)

**The 5-step systematic approach:**

**Step 1: Is the pH normal, acidaemic, or alkalaemic?**
pH < 7.35 → acidaemia
pH > 7.45 → alkalaemia

**Step 2: Identify the primary disorder**
If pH down: PaCO2 up → Respiratory acidosis; HCO3- down → Metabolic acidosis
If pH up: PaCO2 down → Respiratory alkalosis; HCO3- up → Metabolic alkalosis

**Step 3: Check for appropriate compensation**

Respiratory acidosis:
- Acute: HCO3- increases by 1 per 10 mmHg rise in PaCO2
- Chronic: HCO3- increases by 3.5 per 10 mmHg rise in PaCO2

Respiratory alkalosis:
- Acute: HCO3- decreases by 2 per 10 mmHg fall in PaCO2
- Chronic: HCO3- decreases by 5 per 10 mmHg fall in PaCO2

Metabolic acidosis (Winters' formula):
Expected PaCO2 = (1.5 × HCO3-) + 8 ± 2

Metabolic alkalosis:
PaCO2 rises 0.7 mmHg per 1 mEq/L rise in HCO3-

**Step 4: If metabolic acidosis — calculate anion gap**
AG = Na+ - (Cl- + HCO3-)
Normal = 8–12 mEq/L

**Step 5: If high AG — calculate delta-delta**
Delta-delta = (AG - 12) / (24 - HCO3-)
1–2: pure high AG metabolic acidosis
< 1: concurrent normal AG metabolic acidosis
> 2: concurrent metabolic alkalosis

**Grasp Tonic 🧃**

Interpreting an ABG systematically is like solving a detective mystery. The pH tells you the crime (acidaemia or alkalaemia). The CO2 and HCO3- are your two main suspects — one is the culprit, the other is trying to compensate. The anion gap tells you the motive in metabolic acidosis. The delta-delta is your final check — is there a hidden accomplice? Follow this method every time, without shortcuts, and you will rarely be wrong.`,
    },
    {
      id: 6,
      title: 'Metabolic Acidosis — Causes, Consequences & Management',
      isDeepDive: false,
      content: `Metabolic acidosis is defined by a primary fall in plasma HCO3- with a compensatory fall in PaCO2.

**Diabetic Ketoacidosis (DKA):**
Insulin deficiency → uncontrolled lipolysis → hepatic ketogenesis → acetoacetate and beta-hydroxybutyrate (both ketoacids) accumulate, consuming HCO3-.

Critical management pearls:
- Give insulin ONLY after K+ is ≥ 3.3 mEq/L (insulin drives K+ into cells — if K+ already low, giving insulin can cause fatal hypokalaemia)
- Do NOT give bicarbonate in DKA (worsens hypokalaemia, no outcome benefit unless pH < 6.9)
- Replace K+ aggressively — total body K+ is depleted even if initial serum K+ appears normal or high
- Add dextrose when glucose < 200 mg/dL (to allow continued insulin infusion to clear ketones)

**Lactic Acidosis:**
Most common cause of high AG metabolic acidosis in hospitalised patients.

Type A (tissue hypoxia): septic shock, cardiogenic shock, CO poisoning, mesenteric ischaemia
Type B (no tissue hypoxia): metformin (especially in renal failure), thiamine deficiency, liver failure, malignancy

Management: Treat the underlying cause. Do NOT give bicarbonate for lactic acidosis.

**Clinical consequences of metabolic acidosis:**
- **Cardiovascular**: reduced cardiac contractility, vasodilatation, arrhythmias
- **Respiratory**: Kussmaul breathing
- **Electrolytes**: hyperkalaemia (K+ shifts out of cells as H+ shifts in)
- **Metabolic**: insulin resistance, increased protein catabolism

**Grasp Tonic 🧃**

Metabolic acidosis from different causes is like a bucket with a hole in different places. DKA creates a hole by pouring acid in from the top (ketoacids fill the bucket faster than bicarbonate can be topped up). Diarrhoea creates a hole in the side — bicarbonate pours straight out. RTA creates a hole in the bottom — the kidney fails to regenerate the bicarbonate that is continuously consumed. Each hole needs a different plug. Giving bicarbonate to patch a DKA hole does not stop the acid pouring in — you must stop ketone production with insulin.`,
    },
    {
      id: 7,
      title: 'Metabolic Alkalosis — Causes, Consequences & Management',
      isDeepDive: false,
      content: `Metabolic alkalosis is defined by a primary rise in plasma HCO3- with a compensatory rise in PaCO2.

**The two requirements for metabolic alkalosis:**

**1. Generation** — loss of H+ (gastric acid loss, renal H+ excretion) OR gain of HCO3-
**2. Maintenance** — the kidney must fail to excrete the excess HCO3-. For alkalosis to persist, there must be volume depletion, hypochloraemia, hypokalaemia, or hyperaldosteronism.

**Causes:**

**Vomiting and nasogastric suction:**
- Loss of HCl → generation of alkalosis
- Volume depletion → RAAS activation → Na+ and HCO3- retained
- K+ loss → hypokalaemia maintains alkalosis
- Paradoxical aciduria: despite systemic alkalosis, urine is acidic (hypokalaemia causes intracellular acidosis in tubular cells → H+ excreted)

**Diuretics (loop and thiazide):**
Volume depletion → RAAS → aldosterone → K+/H+ excretion → HCO3- retained

**Primary hyperaldosteronism (Conn's syndrome):**
Adrenal adenoma → autonomous aldosterone → Na+ retention + H+ and K+ excretion → metabolic alkalosis + hypokalaemia + hypertension. Urine Cl- > 40 (saline-resistant).

**Consequences:**
- **Hypokalaemia** — K+ moves into cells
- **Hypocalcaemia (ionised)** — increased albumin binding → tetany, carpopedal spasm
- **Cardiac arrhythmias** — from hypokalaemia

**Management:**

Chloride-responsive (urine Cl- < 25): IV normal saline + KCl (must correct both volume and K+)
Chloride-resistant (urine Cl- > 40): Treat underlying cause; spironolactone for hyperaldosteronism

**Grasp Tonic 🧃**

Metabolic alkalosis is like a city water supply that has become too alkaline because all the acid-cleaning chemicals (HCl from gastric acid) have been flushed down the drain (vomiting). The filtration system (kidney) would normally excrete the excess base quickly, but the city is also running low on water (volume depletion) — so the filtration system switches to conservation mode and holds onto everything, including the excess base. And because the potassium pipes are leaking (hypokalaemia), the filtration system keeps thinking there is an acid problem and actively excretes more H+, making the alkalosis worse. You cannot fix the alkalosis without simultaneously fixing the volume and the potassium.`,
    },
    {
      id: 8,
      title: 'Fluid Physiology — Compartments & Movement',
      isDeepDive: false,
      content: `Fluid management is inseparable from acid-base and electrolyte management. Understanding how fluid is distributed in the body is foundational to understanding oedema, dehydration, shock, and IV fluid selection.

**Body fluid compartments:**

Total body water (TBW) = **60% of body weight** in lean adults.

For a 70 kg man: TBW = ~42 litres.

**Intracellular fluid (ICF): 40% of body weight = ~28 litres**
- Inside all cells, rich in K+, Mg2+, phosphate

**Extracellular fluid (ECF): 20% of body weight = ~14 litres**
- **Interstitial fluid**: ~11 litres (between cells)
- **Intravascular (plasma)**: ~3 litres

**Starling forces — what drives fluid movement between plasma and interstitium:**

Four forces determine net filtration across capillary walls:
- **Pc** = capillary hydrostatic pressure (pushes fluid OUT into interstitium)
- **Pi** = interstitial hydrostatic pressure (pushes fluid BACK)
- **πc** = plasma oncotic pressure (pulls fluid INTO capillary) — primarily albumin
- **πi** = interstitial oncotic pressure (pulls fluid OUT)

**Oedema formation — when Starling forces are disrupted:**

- **↑ Capillary hydrostatic pressure**: Heart failure, venous obstruction, portal hypertension
- **↓ Plasma oncotic pressure (↓ albumin)**: Nephrotic syndrome, cirrhosis, malnutrition
- **↑ Capillary permeability**: Inflammation, burns, ARDS, sepsis
- **Lymphatic obstruction**: Filariasis (elephantiasis)

**Sodium as the primary determinant of ECF volume:**

Total body sodium primarily determines ECF volume. Plasma [Na+] primarily reflects water balance (not sodium balance). Hyponatraemia means relative water excess. Hypernatraemia means relative water deficit.

**Grasp Tonic 🧃**

Body fluid distribution is like a city's water infrastructure. The intravascular space is the mains pipe — under pressure. The interstitial space is like the ground — absorbing what seeps out. Albumin in the plasma is like the surface tension of the pipe walls — it keeps water in the pipe. When you lose albumin (nephrotic syndrome, liver failure), the pipe walls lose their tension, water floods the ground (oedema), and the tanks in each building run dry (cells dehydrated despite global oedema). This is why hypoalbuminaemic oedema is so hard to treat with fluid restriction alone.`,
    },
    {
      id: 9,
      title: 'Sodium Disorders — Hyponatraemia & Hypernatraemia',
      isDeepDive: false,
      content: `Sodium disorders are among the most common electrolyte abnormalities in hospitalised patients. They require careful clinical assessment — particularly since rapid correction can cause catastrophic neurological damage.

**Hyponatraemia — Na+ < 135 mEq/L**

Step 1: Check plasma osmolality
- Hyperosmolar hyponatraemia: Hyperglycaemia (glucose draws water out of cells, diluting Na+). Add 1.6 mEq/L to Na+ for every 100 mg/dL glucose above 100.
- Hypoosmolar hyponatraemia (true hyponatraemia): Assess volume status.

Step 2: Assess volume status
- **Hypovolaemic**: Both Na+ and water lost, more Na+ than water. Urine Na+ < 20 → extrarenal loss. Urine Na+ > 20 → renal loss (diuretics, Addison's).
- **Euvolaemic**: **SIADH** most common. Causes: CNS disease, pulmonary disease, drugs (SSRIs, carbamazepine, MDMA), post-operative state.
- **Hypervolaemic**: Dilutional. Heart failure, cirrhosis, nephrotic syndrome.

**SIADH diagnosis:** Hypoosmolar hyponatraemia + urine osmolality > 100 + urine Na+ > 20 + euvolaemia.
Treatment: fluid restriction (first line), tolvaptan (V2 receptor antagonist).

**Correction rate — critical:**
- **Chronic hyponatraemia** (>48 hours): Correct no faster than **6–8 mEq/L per day** (maximum 10–12). Rapid correction causes **osmotic demyelination syndrome (ODS)** — locked-in syndrome, quadriplegia, death.
- **Acute symptomatic** (<48 hours with seizures): 1–2 mEq/L/hour with 3% NaCl until symptoms resolve.

**Hypernatraemia — Na+ > 145 mEq/L**

Always indicates relative water deficit. Only develops in those who cannot access or drink water (infants, elderly, unconscious).

Main causes:
- **Diabetes insipidus**: Central DI (ADH deficiency — treat with DDAVP) or Nephrogenic DI (renal resistance to ADH — lithium most common drug cause)
- Osmotic diuresis: DKA, hyperglycaemia
- Insensible losses: fever, burns

**Correction:** Replace free water deficit. Correct no faster than **10–12 mEq/L per day** in chronic hypernatraemia — rapid correction causes cerebral oedema.

Free water deficit = 0.6 × weight (kg) × ([Na+]/140 − 1)

**Grasp Tonic 🧃**

Sodium disorders are like a swimming pool losing the balance between chlorine (sodium) and water. Hyponatraemia is the pool that has been diluted — too much water, not enough chlorine concentration. But the treatment depends entirely on WHY the dilution happened. The same pool chemistry (Na+ 125) has completely different fixes depending on the cause. And correcting too fast in a chronic pool — dumping concentrated chlorine in — can cause the pool's chemistry to swing dangerously in the other direction (osmotic demyelination).`,
    },
    {
      id: 10,
      title: 'Potassium, Calcium & Magnesium Disorders',
      isDeepDive: false,
      content: `Disorders of potassium, calcium, and magnesium are intimately linked with acid-base disturbances and are major causes of cardiac and neuromuscular complications.

**Potassium (K+)**

Normal serum K+: 3.5–5.0 mEq/L

**The pH-K+ relationship:**
Acidaemia → hyperkalaemia: H+ moves INTO cells → K+ moves OUT (maintain electroneutrality)
Alkalaemia → hypokalaemia: K+ moves INTO cells → H+ moves OUT

For every 0.1 change in pH: K+ changes by ~0.6 mEq/L in the opposite direction.

**Hyperkalaemia (K+ > 5.5 mEq/L)**

ECG changes (progressive): Peaked T waves → prolonged PR → wide QRS → loss of P waves → sine wave → VF/asystole

Emergency management (5 C's):
1. **Calcium gluconate** — membrane stabilisation (does NOT lower K+, protects heart for 30–60 min)
2. **Cell shift** — insulin 10 units IV + 50mL 50% glucose; albuterol nebuliser; bicarbonate if acidotic
3. **Cation exchange resins** — patiromer, sodium zirconium cyclosilicate (bind K+ in gut)
4. **Creatinine/renal** — furosemide if adequate renal function
5. **Continuous renal replacement** — dialysis for severe/refractory cases

**Hypokalaemia (K+ < 3.5 mEq/L)**

ECG changes: Flattened T waves, prominent U waves, QTc prolongation
Causes: Diuretics (most common), vomiting, diarrhoea, hyperaldosteronism, alkalosis

Treatment: Oral or IV KCl. Always check and replace magnesium first — hypomagnesaemia causes refractory hypokalaemia.

**Calcium (Ca2+)**

Normal total serum calcium: 2.1–2.6 mmol/L
Correct for albumin: add 0.2 mmol/L for every 10 g/L drop in albumin below 40 g/L.

Hypercalcaemia symptoms — "bones, stones, groans, thrones, psychic moans"
80–90% caused by: hyperparathyroidism OR malignancy

Management: IV normal saline + bisphosphonates (zoledronic acid) + calcitonin

Hypocalcaemia: Trousseau's sign (carpopedal spasm on BP cuff inflation), Chvostek's sign (facial twitch on nerve tap)

**Magnesium (Mg2+)**

Cannot correct K+ or Ca2+ without first correcting Mg2+. Mg2+ is required for PTH secretion AND K+ renal tubular reabsorption.

**Grasp Tonic 🧃**

Potassium, calcium, and magnesium are like three interlocking cogs in a machine. When one fails, the others malfunction too. Hypomagnesaemia silently drains both potassium (by impairing renal reabsorption) and calcium (by impairing PTH release). You can replace potassium all day but it keeps leaking out because the magnesium cog is broken. This is why experienced clinicians always check magnesium first when facing refractory hypokalaemia — and replace it before anything else.`,
    },
    {
      id: 11,
      title: 'Renal Tubular Acidosis & Special Syndromes',
      isDeepDive: false,
      content: `Renal tubular acidosis (RTA) represents disorders where the kidney's acid-excretion or bicarbonate-reabsorption mechanisms are specifically defective — causing normal anion gap metabolic acidosis.

**Urine anion gap — diagnostic tool:**

Urine AG = Urine Na+ + Urine K+ - Urine Cl-

- **Negative urine AG**: Appropriate NH4+ excretion → GI HCO3- loss (diarrhoea) — kidneys working correctly
- **Positive urine AG**: Impaired NH4+ excretion → RTA

**Type 1 — Distal RTA:**
- Defect: H+-ATPase in intercalated cells fails to secrete H+
- Urine pH: **> 5.5** (cannot acidify urine — pathognomonic)
- K+: **Low** (K+ excreted instead of H+)
- Complications: Nephrocalcinosis, calcium phosphate kidney stones
- Causes: Sjogren's syndrome, amphotericin B, lithium

**Type 2 — Proximal RTA:**
- Defect: Proximal tubule cannot reabsorb filtered HCO3-
- Urine pH: Variable (< 5.5 once plasma HCO3- falls enough)
- K+: Low
- Often part of **Fanconi syndrome**: also lose glucose, amino acids, phosphate (→ rickets)
- Causes: Multiple myeloma, Wilson's disease, tenofovir, ifosfamide

**Type 4 — Hyperreninaemic/Hypoaldosterone RTA:**
- Defect: Aldosterone deficiency or resistance
- **K+: HIGH** — the key distinguishing feature from Types 1 and 2
- Urine pH: < 5.5 (can acidify)
- Causes: Diabetic nephropathy (most common), Addison's, ACE inhibitors, NSAIDs, heparin
- Treatment: Fludrocortisone if true aldosterone deficiency; remove offending drugs

**SIADH vs Cerebral Salt Wasting (CSW):**

Both cause hyponatraemia in brain injury. Require **opposite** treatments:

| Feature | SIADH | CSW |
|---|---|---|
| Volume status | Euvolaemic | Hypovolaemic |
| Treatment | Fluid restriction | IV saline + fludrocortisone |

Giving fluid restriction to a CSW patient worsens hypovolaemia and risks cerebral vasospasm. Giving saline to SIADH worsens hyponatraemia.

**Grasp Tonic 🧃**

Renal tubular acidosis is like a postal sorting office with specific delivery departments broken. In Type 1 RTA, the final delivery department (distal tubule) cannot post H+ letters — so they pile up in the blood and the kidney cannot acidify the urine. In Type 2, the sorting office accepts letters (HCO3-) at the front desk but keeps sending them back — highly inefficient. In Type 4, the department manager (aldosterone) is absent — nothing gets sorted properly, both H+ and K+ pile up. Each broken department has a different fix — you cannot apply the same repair to all three.`,
    },
    {
      id: 12,
      title: 'IV Fluid Therapy & Clinical Decision-Making',
      isDeepDive: false,
      content: `Intravenous fluid therapy is one of the most commonly performed medical interventions — and one of the most commonly done poorly. Understanding fluid composition and matching them to the patient's specific deficits prevents iatrogenic harm.

**Common IV fluids — composition:**

| Fluid | Na+ (mEq/L) | Cl- (mEq/L) | HCO3- equiv | Notes |
|---|---|---|---|---|
| 0.9% NaCl (normal saline) | 154 | 154 | 0 | Hyperchloraemic |
| Hartmann's/Ringer's Lactate | 130 | 109 | 28 (lactate) | Balanced crystalloid |
| 5% Dextrose | 0 | 0 | 0 | Free water |
| 0.45% NaCl (half-normal) | 77 | 77 | 0 | Hypotonic |
| 3% NaCl (hypertonic) | 513 | 513 | 0 | Hypertonic saline |

**Normal saline (0.9% NaCl) — the most used, most misused:**

Contains 154 mEq/L Na+ and Cl- — both higher than plasma. Large volumes → **hyperchloraemic metabolic acidosis** (dilutes HCO3-, Cl- rises → normal AG acidosis). This is avoidable.

**Hartmann's solution — balanced crystalloid:**

More physiological composition. Lactate metabolised by liver to bicarbonate. Preferred for most crystalloid resuscitation — avoids hyperchloraemic acidosis. (SMART and SALT-ED trials 2018 confirmed superior outcomes.)

**Fluid choice by clinical scenario:**

**Hypovolaemic shock:** 250–500 mL boluses of Hartmann's (preferred) or 0.9% NaCl. Assess response after each bolus.

**Vomiting with metabolic alkalosis:** 0.9% NaCl + KCl. Do NOT use Hartmann's (already alkaline from lactate).

**DKA:** 0.9% NaCl first 1–2 hours, then Hartmann's. Add dextrose when glucose < 200 mg/dL. Add KCl once K+ ≥ 3.3.

**Hypernatraemia correction:** D5W (free water) or 0.45% NaCl. Correct ≤ 10 mmol/L per day.

**Symptomatic hyponatraemia:** 3% NaCl — raise Na+ by 1–2 mEq/L/hour until symptoms resolve, then slow to ≤ 0.5 mEq/L/hour. Never exceed 10–12 mEq/L per 24 hours.

**Grasp Tonic 🧃**

Choosing an IV fluid is like choosing which chemical to add to a swimming pool. Adding normal saline to a patient with vomiting-induced metabolic alkalosis is like adding a slightly acidic solution to an already too-alkaline pool — you are partly correcting the problem (replacing Cl- and volume) without contributing alkalinity. Adding Hartmann's to a patient with hyperchloraemic acidosis is like adding a buffered, balanced solution that restores chemistry without overcorrecting. And adding free water (D5W) to a hypernatraemic patient is like diluting the concentrated pool with pure water — exactly what is needed, but done too fast and the walls crack (cerebral oedema).`,
    },
    {
      id: 13,
      title: 'Teaching Receipt™ — Acid-Base & Fluid/Electrolyte Disorders',
      isDeepDive: false,
      content: `You have completed the core sections of Acid-Base and Fluid/Electrolyte Disorders. This topic underpins clinical management across every specialty.

**The Three-System Framework**

Acid-base regulation depends on three systems — buffers (seconds), lungs (minutes), kidneys (hours to days). Every disorder involves disruption of one or more of these systems, with compensatory responses from the others. Compensation is never complete — it restores pH toward but never to normal.

**The Master Equation**

pH = 6.1 + log(HCO3- / 0.03 × PaCO2). pH depends on the ratio of HCO3- to CO2. The lungs regulate CO2; the kidneys regulate HCO3-.

**The Systematic ABG Approach**

Five steps: (1) Acidaemia or alkalaemia? (2) Respiratory or metabolic primary disorder? (3) Appropriate compensation? (4) Anion gap if metabolic acidosis? (5) Delta-delta if high AG?

**The Four Primary Disorders**

Respiratory acidosis (hypoventilation → high CO2), respiratory alkalosis (hyperventilation → low CO2), metabolic acidosis (low HCO3-), metabolic alkalosis (high HCO3-). Know the common causes and first-line management of each.

**The Anion Gap**

Normal 8–12. High AG = MUDPILES. Normal AG = USED CARP.

**Fluid Compartments**

TBW = 60% of weight. Two-thirds is ICF. One-third is ECF — split between interstitial and intravascular. Starling forces govern plasma-to-interstitium movement. Sodium determines ECF volume and osmolality.

**Electrolyte Interactions**

Hyperkalaemia and acidosis coexist. Hypokalaemia and alkalosis coexist. Cannot correct alkalosis without fixing K+. Cannot fix K+ without fixing Mg2+.

**RTA**

Type 1 (distal) — urine pH > 5.5, hypokalaemia, nephrocalcinosis.
Type 2 (proximal) — variable urine pH, Fanconi syndrome.
Type 4 — hyperchloraemic acidosis + hyperkalaemia, often from hypoaldosteronism in diabetes.

**Sodium Safety**

Chronic hyponatraemia: correct < 10 mEq/L per day (risk: ODS).
Chronic hypernatraemia: correct < 10–12 mEq/L per day (risk: cerebral oedema).

You are now ready for the Deep Dive.`,
    },
    {
      id: 14,
      title: 'Deep Dive — Advanced Acid-Base & Renal Physiology',
      isDeepDive: true,
      content: `This Deep Dive explores the quantitative framework of acid-base physiology, the Stewart approach, and advanced clinical scenarios.

**The Stewart Approach**

Peter Stewart (1981) proposed that pH is determined by three independent variables:

**1. PaCO2** — respiratory component (as in traditional approach)

**2. Strong ion difference (SID):**
SID = [Na+] + [K+] + [Ca2+] + [Mg2+] - [Cl-] - [Lactate-]
Simplified: SID ≈ Na+ - Cl-. Normal ≈ 40–44 mEq/L.

↑ SID → alkalosis. ↓ SID → acidosis.

This explains why:
- Hyperchloraemic acidosis (normal saline): Cl- rises → SID falls → acidosis
- Hypochloraemic alkalosis (vomiting): Cl- falls → SID rises → alkalosis

**3. Total weak acid concentration (Atot):**
Primarily albumin and phosphate. ↑ Atot → acidosis. ↓ Atot → alkalosis.

This explains why **hypoalbuminaemia causes alkalosis** — invisible to the traditional approach. The anion gap should be corrected for albumin: adjusted AG = measured AG + 2.5 × (4 − albumin g/dL).

**Base Excess**

Base excess (BE) = amount of acid or base needed to restore 1 litre of blood to pH 7.40 at PaCO2 40 mmHg.

Normal BE: -2 to +2 mEq/L
Negative BE (base deficit) → metabolic acidosis
Positive BE → metabolic alkalosis

BE is independent of PaCO2 — useful in trauma (BE < -6 significant, < -10 severe) and in ventilated patients.

**Triple Acid-Base Disorders**

Three simultaneous primary disorders can exist. Example: Cirrhotic patient with:
- Chronic respiratory alkalosis (ammonia stimulating brainstem)
- Metabolic alkalosis (diuretics)
- Lactic acidosis (spontaneous bacterial peritonitis)

ABG might show near-normal pH despite all three processes occurring simultaneously. The elevated anion gap reveals the hidden lactic acidosis.

**Renal Tubular Transport — Molecular Biology**

Proximal tubule HCO3- reabsorption: NHE3 (Na+/H+ exchanger 3) secretes H+ → luminal carbonic anhydrase IV converts H2CO3 → CO2 → enters tubular cell → carbonic anhydrase II regenerates HCO3- → exits via NBCe1 to blood.

Regulation of NHE3:
- Angiotensin II → activates (volume depletion increases HCO3- reabsorption)
- Volume expansion → inhibits
- Acetazolamide → inhibits carbonic anhydrase → disrupts whole process

Collecting duct: Type A intercalated cells — apical H+-ATPase secretes H+; basolateral AE1 exchanges Cl- for HCO3- → HCO3- to blood.

Mutations in AE1 → Distal Type 1 RTA
Mutations in H+-ATPase subunits → Distal Type 1 RTA (often with sensorineural hearing loss)

**Renal Replacement Therapy for Acid-Base (AEIOU indications):**

- **A**cidosis: pH < 7.1 refractory to medical management
- **E**lectrolytes: refractory hyperkalaemia with ECG changes
- **I**ntoxication: salicylates, methanol, ethylene glycol, lithium
- **O**verload: fluid overload unresponsive to diuretics
- **U**raemia: symptomatic (encephalopathy, pericarditis)

CRRT (continuous) preferred for haemodynamically unstable ICU patients. IHD (intermittent) for stable patients and acute poisoning.

**Advanced Clinical Scenario — Salicylate Toxicity:**

Early: respiratory alkalosis (salicylates stimulate respiratory centre)
Later: mixed respiratory alkalosis + high AG metabolic acidosis
Severe: respiratory acidosis + metabolic acidosis → severe acidaemia

Management: Alkalinise urine to pH 7.5–8.0 (sodium bicarbonate IV) — ionised salicylate trapped in alkaline tubular fluid → cannot be reabsorbed → increased excretion. Avoid intubation if possible (losing respiratory alkalosis immediately worsens pH). Haemodialysis for severe toxicity.`,
    },
  ],
  teachingReceipt: {
    mastered: [
      'The three-system framework of acid-base regulation — buffers (seconds), lungs (minutes), kidneys (hours to days) — and the limitations of each',
      'The bicarbonate buffer system and Henderson-Hasselbalch equation, and how pH depends on the HCO3- to CO2 ratio',
      'The systematic 5-step ABG interpretation approach, including compensation formulas for all four primary disorders',
      'The anion gap — calculation, normal range, MUDPILES (high AG) vs USED CARP (normal AG) causes',
      'The delta-delta ratio and its use in detecting mixed disorders',
      'The pathophysiology, clinical features, and management of metabolic acidosis — DKA, lactic acidosis, and toxic alcohols',
      'The pathophysiology and management of metabolic alkalosis — chloride-responsive vs chloride-resistant distinction',
      'The Starling forces governing capillary fluid movement and the mechanisms of oedema',
      'Sodium disorders — hyponatraemia and hypernatraemia — with correct rates of correction to avoid ODS and cerebral oedema',
      'Potassium, calcium, and magnesium disorders — ECG findings, interactions with pH, and emergency management',
      'The three types of renal tubular acidosis — distinguishing features, causes, and treatments',
      'IV fluid composition and selection in common clinical scenarios',
    ],
    selfCheckQuestions: [
      'A patient presents with pH 7.18, PaCO2 22, HCO3- 8, Na 138, Cl 98, lactate 12 mmol/L. Work through all 5 steps of ABG interpretation and state the diagnosis.',
      'Explain why you should not give bicarbonate in lactic acidosis from septic shock.',
      'A COPD patient has chronic respiratory acidosis with PaCO2 65 and HCO3- 38. You ventilate them to PaCO2 40. What happens to their pH? Why is this dangerous?',
      'A patient has vomiting for 5 days. Bloods show K 2.8, Cl 78, HCO3- 42, pH 7.56. What is the primary disorder? What maintains it? What is your treatment?',
      'An elderly woman is found confused with Na+ 118 mEq/L. She is euvolaemic. What is the most likely diagnosis? How fast can you correct the sodium and why?',
      'Explain the paradoxical aciduria that occurs in vomiting with metabolic alkalosis.',
      'A patient with CKD and diabetes has K 6.2, Cl 112, HCO3- 16, pH 7.28. What type of RTA is this and what is the clue in the K+?',
      'Why can you not correct hypokalaemia without first replacing magnesium?',
      'Compare the management of hyponatraemia in SIADH vs cerebral salt wasting — why do they require opposite treatments?',
      'What is the osmotic demyelination syndrome and how do you prevent it?',
    ],
  },
};