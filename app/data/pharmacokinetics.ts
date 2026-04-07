import { pharmacokineticsReceipt } from './teachingReceipts'; 

export const pharmacokineticsChapter = {
  moduleSlug: 'pharmacokinetics',
  chapterTitle: 'Pharmacokinetics — Absorption, Distribution, Metabolism & Excretion',
  sections: [
    {
      id: 0,
      title: 'The Marable™ — The Journey of a Letter',
      isDeepDive: false,
      content: `Imagine you write a letter to your friend in another city.

You fold it, put it in an envelope, and drop it in a mailbox. From that moment, the letter begins a journey — one you cannot fully control.

First, the postal service picks it up. Depending on where you dropped it, how far it needs to travel, and what route the postal van takes, the letter may arrive quickly or slowly. Some letters get lost before they even leave your city. Others are delayed at sorting centres. A few arrive damaged. This is **absorption** — the process of getting the drug from where you put it into the bloodstream, and how much actually makes it there.

Once the letter arrives in your friend's city, it is sorted and distributed to their specific street, their building, their door. Some letters go to many different addresses. Others are only delivered to one. This is **distribution** — how the drug spreads from the blood to the tissues and organs where it needs to act.

Your friend receives the letter, reads it, and eventually — because they cannot keep every letter forever — they deal with it. Maybe they shred it. Maybe they file it away temporarily. This is **metabolism** — the body chemically transforming the drug, usually in the liver, into something that can be removed.

Finally, the remnants of that letter — the shredded paper, the envelope — are thrown in the bin and taken away by the rubbish collectors. This is **excretion** — the body eliminating the drug or its breakdown products, usually through the kidneys in urine.

Pharmacokinetics is simply the study of this entire postal journey. Not what the letter says — that is pharmacodynamics. But where it goes, how fast it travels, how much gets through, and when it disappears.

In medicine, we study pharmacokinetics because a drug that never reaches its target cannot heal. A drug that accumulates dangerously can kill. Understanding the journey is how we prescribe safely.`,
    },
    {
      id: 1,
      title: 'Introduction to Pharmacokinetics — The Four Processes',
      isDeepDive: false,
      content: `Pharmacokinetics (PK) is the study of what the body does to a drug. It is described by four fundamental processes — **Absorption, Distribution, Metabolism, and Excretion** — collectively known as ADME.

**Why Pharmacokinetics Matters**

A drug's effect depends not just on its chemistry but on how much of it reaches the target tissue, for how long, and in what form. Two drugs with identical mechanisms of action can have dramatically different clinical profiles because of differences in their pharmacokinetics.

Consider paracetamol (acetaminophen) and aspirin. Both are analgesics. Both are taken orally. Yet they have different onset times, different durations, and different toxicity profiles — all due to differences in their pharmacokinetic behaviour.

**The Four Processes at a Glance**

**Absorption** is the movement of drug from its site of administration into the systemic circulation. A drug given intravenously bypasses absorption entirely — it enters the bloodstream directly. A drug given orally must survive the gastrointestinal tract, cross the intestinal wall, and survive first-pass metabolism in the liver before reaching the circulation.

**Distribution** is the movement of drug from the bloodstream into the body's tissues and fluids. A highly lipid-soluble drug distributes widely into fat, brain, and muscle. A drug that is heavily protein-bound stays largely confined to the blood.

**Metabolism** — also called biotransformation — is the chemical modification of the drug, primarily in the liver. Metabolism generally converts active drugs into inactive metabolites, although some drugs (called prodrugs) are actually inactive until metabolised into their active form.

**Excretion** is the removal of the drug or its metabolites from the body. The kidneys are the primary organ of excretion, eliminating water-soluble compounds in the urine. The liver excretes some drugs into bile, which then passes into the gut.

**The Concept of Plasma Concentration**

The plasma concentration of a drug — how much drug is dissolved in the blood at any given time — is the central variable of pharmacokinetics. It rises as the drug is absorbed, peaks, and then falls as the drug is distributed, metabolised, and excreted.

The **therapeutic window** is the range of plasma concentrations at which a drug is effective without being toxic. Too little and the drug has no effect. Too much and it causes harm. Pharmacokinetics is the science of keeping drugs within this window.`,
    },
    {
      id: 2,
      title: 'Absorption — Routes of Administration',
      isDeepDive: false,
      content: `Absorption begins the moment a drug is administered. But before absorption can happen, we must consider the route of administration — because the route determines everything about how the drug enters the body.

**Enteral Routes — Through the GI Tract**

The **oral route** is the most common. Drugs are swallowed, dissolved in gastric acid, and absorbed — primarily from the small intestine — into the portal circulation. The oral route is convenient, non-invasive, and cheap. However, it is subject to first-pass metabolism, and absorption can be affected by food, gastric pH, gut motility, and drug formulation.

**Sublingual** administration places the drug under the tongue. The rich vascular supply of the oral mucosa allows rapid absorption directly into the systemic circulation, bypassing the portal system entirely. Glyceryl trinitrate (GTN) for angina works this way — onset in minutes.

**Rectal** administration is used when oral administration is impossible — in vomiting, seizures, or unconscious patients. Absorption is variable and incomplete. About 50% of rectal absorption bypasses the portal circulation, reducing but not eliminating first-pass metabolism.

**Parenteral Routes — Bypassing the GI Tract**

**Intravenous (IV)** injection delivers drug directly into the bloodstream. There is no absorption step — bioavailability is 100% by definition. Onset of action is immediate. This is the route of choice in emergencies, and for drugs that are poorly absorbed orally or extensively metabolised before reaching circulation.

**Intramuscular (IM)** injection deposits drug into muscle. Absorption occurs as drug diffuses from the muscle into capillaries. Onset is faster than oral but slower than IV. Blood flow to the muscle influences absorption rate — which is why IM injections are unreliable in shock (reduced perfusion).

**Subcutaneous (SC)** injection places drug in the tissue beneath the skin. Absorption is slower than IM. Insulin is the classic example of SC administration.

**Inhalation** allows drugs to reach the lungs and bloodstream rapidly. The huge surface area and rich vascularity of the alveoli make inhalation one of the fastest routes for systemic absorption. It is also used for local pulmonary effects (bronchodilators, corticosteroids).

**Transdermal** patches deliver drugs through the skin at a controlled, sustained rate — avoiding first-pass metabolism and maintaining steady plasma concentrations. Used for nicotine, opioids, hormones, and antihypertensives.

**Grasp Tonic 🧃**

Think of the route of administration like different ways of getting medicine into a building. The oral route is like walking through the front door — you have to pass reception (the liver) before you get to your office. The IV route is like having a direct key to the office — no waiting, no reception. The sublingual and transdermal routes are like side doors that bypass reception but still get you in. Each entrance has different delays, different checkpoints, and different reliability.`,
    },
    {
      id: 3,
      title: 'Absorption — Bioavailability & First-Pass Metabolism',
      isDeepDive: false,
      content: `Not all of a drug that you administer actually reaches the systemic circulation. The fraction that does is called **bioavailability**.

**Defining Bioavailability**

Bioavailability (F) is the fraction of an administered dose that reaches the systemic circulation in an unchanged, active form. For an IV drug, F = 1.0 (100%) by definition. For an oral drug, F is almost always less than 1.0.

Bioavailability = (AUC oral / AUC IV) × 100%

Where AUC is the Area Under the Curve — the total drug exposure over time, calculated from a plasma concentration-time graph.

**Factors Affecting Oral Bioavailability**

Several barriers reduce oral bioavailability:

**Dissolution** — A drug must dissolve before it can be absorbed. Poorly soluble drugs have low and variable bioavailability. Formulation matters enormously here — particle size, crystal form, and excipients all affect dissolution.

**Gastrointestinal factors** — Gastric acid can degrade acid-labile drugs (e.g. benzylpenicillin). Gut motility affects transit time — faster motility reduces absorption time. Food can either help or hinder, depending on the drug.

**Intestinal transporters** — The intestinal wall expresses efflux transporters (especially P-glycoprotein, P-gp) that actively pump absorbed drugs back into the gut lumen. Many drugs are substrates for P-gp, which significantly reduces their absorption.

**First-Pass Metabolism**

The most clinically important determinant of oral bioavailability is first-pass metabolism. After absorption from the gut, blood flows via the portal vein directly to the liver before entering the systemic circulation. The liver is the body's primary metabolic organ. If it extensively metabolises a drug on this first pass, very little active drug survives to reach the circulation.

**Lidocaine** is a classic example. It is a highly effective antiarrhythmic when given IV. But given orally, the liver extracts nearly 100% of the drug on first pass — making oral lidocaine clinically useless.

**Morphine** has oral bioavailability of about 25–30% — meaning that to achieve the same plasma concentration as 10mg IV morphine, you need approximately 30mg orally.

**Glyceryl trinitrate** has oral bioavailability of less than 1% — essentially zero — which is why it is given sublingually.

Drugs with high first-pass metabolism can still be given orally if the dose is adjusted accordingly — but the dosing interval and amount must account for the fraction lost.

**Bioequivalence**

Two formulations of the same drug are bioequivalent if they produce the same bioavailability and the same time-course of drug concentration in the blood. Generic drugs must demonstrate bioequivalence to the branded original — they do not need to show identical clinical efficacy in trials, because equivalent plasma concentrations are assumed to produce equivalent effects.

**Grasp Tonic 🧃**

Think of first-pass metabolism like a toll gate that takes a percentage of your money every time you pass through. If the toll gate keeps 70% of what you bring, you need to start with far more money to end up with enough at your destination. IV administration bypasses the toll gate entirely — everything you carry arrives intact. Sublingual and rectal routes use smaller side roads that partly avoid the toll.`,
    },
    {
      id: 4,
      title: 'Distribution — Volume of Distribution & Protein Binding',
      isDeepDive: false,
      content: `Once a drug reaches the systemic circulation, it distributes throughout the body. Not all tissues receive equal amounts. The pattern of distribution depends on the drug's physical and chemical properties — and understanding distribution explains why some drugs act quickly, why some accumulate in unexpected places, and why some are dangerous in overdose.

**Volume of Distribution (Vd)**

The volume of distribution is a theoretical concept — not a real anatomical volume — that describes how extensively a drug distributes throughout the body relative to the plasma.

Vd = Amount of drug in body / Plasma concentration

If a drug has a Vd of 5 litres, it is confined almost entirely to the plasma (total plasma volume ≈ 3–5L). This means it is heavily protein-bound or highly ionised — unable to leave the vascular compartment.

If a drug has a Vd of 15 litres, it has distributed into the interstitial fluid and some tissues (total body water ≈ 42L, interstitial fluid ≈ 11L).

If a drug has a Vd of 200–500 litres — far greater than total body water — it means the drug has extensively concentrated in tissues, leaving very little in the plasma. Chloroquine has a Vd of over 200–800 L/kg. This means that measuring plasma chloroquine levels gives little information about total body drug load.

**Clinical Importance of Vd**

A large Vd means:
- The drug is difficult to remove by dialysis (most of it is in tissues, not plasma)
- Loading doses must be large to achieve therapeutic plasma concentrations
- The drug may accumulate in fat or other tissues over time

A small Vd means:
- The drug stays in plasma — dialysis can help in overdose
- Smaller loading doses achieve therapeutic concentrations

**Factors Determining Distribution**

**Lipid solubility** — Lipophilic drugs cross cell membranes easily and distribute widely into fatty tissues and the brain. Hydrophilic drugs stay in aqueous compartments (plasma and interstitial fluid).

**Ionisation (pKa)** — Only un-ionised drug crosses membranes. The degree of ionisation depends on the drug's pKa and the pH of the environment. This is the basis of ion trapping — a concept relevant to drug overdose management.

**Plasma protein binding** — Drugs bind reversibly to plasma proteins, predominantly albumin (for acidic drugs) and α1-acid glycoprotein (for basic drugs). Only the free (unbound) drug is pharmacologically active, can distribute into tissues, can be metabolised, and can be excreted.

Plasma protein binding is a reservoir — it limits distribution and slows onset of action, but also slows elimination and prolongs duration. Warfarin is 99% protein-bound. Only 1% is free and active. If another drug displaces warfarin from albumin — even slightly — the free fraction jumps dramatically, causing unexpected anticoagulation and bleeding. This is the mechanism of the warfarin-aspirin drug interaction.

**Blood-Brain Barrier**

The blood-brain barrier (BBB) is formed by tight junctions between cerebral endothelial cells, supported by astrocytic foot processes. It is highly selective — only lipophilic, un-ionised, low-molecular-weight drugs cross readily. P-glycoprotein actively pumps many drugs out of the CNS.

This is why most drugs do not cause CNS effects — and why designing CNS-active drugs is so challenging. It is also why meningitis (which disrupts the BBB) changes the pharmacokinetics of antibiotics in the CNS.

**Placental Transfer**

The placenta does not effectively exclude most drugs. Lipophilic, low-molecular-weight, un-ionised drugs cross freely. This is why prescribing in pregnancy requires careful consideration — thalidomide, sodium valproate, and warfarin all cross the placenta with devastating consequences.

**Grasp Tonic 🧃**

Think of drug distribution like water flooding a building during heavy rain. Some rooms (the plasma, the blood) fill up first. Then water seeps under doors into hallways (interstitial fluid). Eventually, if enough water is present and the material is absorbent, it soaks into the walls, carpets, and furniture (tissues). A drug with a massive volume of distribution has soaked into every surface. You could drain all the visible water from the corridors and barely reduce the total amount — because most is hidden in the fabric of the building.`,
    },
    {
      id: 5,
      title: 'Drug Metabolism — Phase I & Phase II Reactions',
      isDeepDive: false,
      content: `Metabolism is the body's way of chemically modifying drugs to facilitate their elimination. The liver is the primary site of drug metabolism, though the gut wall, kidneys, lungs, and plasma also contribute.

The goals of metabolism are generally to make drugs more **polar (water-soluble)** so they can be excreted by the kidneys. Most drugs are lipophilic — which is why they are absorbed and distributed well — but this same property makes renal excretion difficult, since lipophilic compounds are reabsorbed in the renal tubules.

**Phase I Reactions — Functionalisation**

Phase I reactions introduce or unmask a functional group (−OH, −NH₂, −SH, −COOH) on the drug molecule. This usually makes the drug slightly more polar and often reduces its pharmacological activity — though some metabolites are still active or even more active than the parent drug.

The most important Phase I reactions are **oxidation, reduction, and hydrolysis**.

**Oxidation** is by far the most common. It is carried out predominantly by the **cytochrome P450 (CYP) enzyme family** in the liver endoplasmic reticulum. The most important CYP enzymes in drug metabolism are:

- **CYP3A4** — metabolises approximately 50% of all drugs
- **CYP2D6** — metabolises many antidepressants, antipsychotics, opioids
- **CYP2C9** — metabolises warfarin, NSAIDs, phenytoin
- **CYP2C19** — metabolises omeprazole, clopidogrel (activation), diazepam
- **CYP1A2** — metabolises theophylline, caffeine, clozapine

**Reduction** occurs less commonly — nitroreduction and azoreduction of nitro and azo groups.

**Hydrolysis** cleaves ester and amide bonds. Aspirin is hydrolysed to salicylate. Local anaesthetics (esters) are hydrolysed by plasma esterases.

**Phase II Reactions — Conjugation**

Phase II reactions attach a large, polar molecule to the drug or its Phase I metabolite. This greatly increases water solubility and almost always renders the compound pharmacologically inactive. Common conjugation reactions include:

**Glucuronidation** — the most common Phase II reaction. UDP-glucuronosyltransferases (UGTs) attach glucuronic acid. Morphine-6-glucuronide is an active metabolite that retains opioid activity.

**Sulfation** — sulfotransferases attach a sulfate group. Paracetamol is sulfated at low doses.

**Acetylation** — N-acetyltransferases (NATs) acetylate drugs like isoniazid, hydralazine, and procainamide. There is genetic variation — fast and slow acetylators — with clinical consequences. Slow acetylators of isoniazid have higher drug levels and more toxicity; slow acetylators of hydralazine are more prone to drug-induced lupus.

**Glutathione conjugation** — protects against reactive intermediates. Paracetamol overdose saturates glucuronidation and sulfation, shunting metabolism through CYP2E1 to produce the toxic metabolite NAPQI. When glutathione stores are depleted, NAPQI accumulates and causes hepatocellular necrosis. N-acetylcysteine (NAC) works by replenishing glutathione.

**Prodrugs**

Some drugs are administered in an inactive form and converted by metabolism to active compounds:

- **Codeine** → morphine (via CYP2D6)
- **Clopidogrel** → active thienopyridine (via CYP2C19)
- **Enalapril** → enalaprilat
- **Levodopa** → dopamine

Ultra-rapid CYP2D6 metabolisers can convert codeine to morphine so rapidly that standard doses cause opioid toxicity — including deaths in children following tonsillectomy. Poor CYP2D6 metabolisers get no analgesic benefit from codeine at all.

**Grasp Tonic 🧃**

Think of Phase I metabolism like a factory receiving raw materials and cutting them into pieces — making them easier to handle. Phase II is then the packaging department — wrapping those pieces in large boxes (glucuronate, sulfate, acetyl) that are too big to be reabsorbed and can now be shipped out (excreted). The problem is that sometimes the cutting in Phase I creates a dangerous sharp edge (toxic intermediate) before it can be packaged. Paracetamol overdose is exactly this — the packaging department (glucuronidation) gets overwhelmed, and the sharp edges (NAPQI) pile up and cut the liver.`,
    },
    {
      id: 6,
      title: 'Drug Metabolism — Enzyme Induction, Inhibition & Genetic Variation',
      isDeepDive: false,
      content: `The activity of metabolic enzymes — particularly the CYP450 family — is not fixed. It varies between individuals and can be dramatically altered by other drugs, diet, and genetic factors. This is the basis of many important drug interactions and inter-individual differences in drug response.

**Enzyme Induction**

Enzyme inducers increase the synthesis of metabolic enzymes, primarily CYP450 enzymes and Phase II enzymes. This leads to faster metabolism of substrate drugs — lower plasma concentrations and reduced efficacy.

Induction takes days to weeks to develop (because it requires new protein synthesis) and similarly takes days to weeks to reverse when the inducer is stopped.

**Key enzyme inducers (mnemonic: PC BRASS)**
- **P**henytoin
- **C**arbamazepine
- **B**arbiturates (phenobarbitone)
- **R**ifampicin (most potent clinical inducer)
- **A**lcohol (chronic use)
- **S**t John's Wort
- **S**ulphonylureas (some)

**Clinical consequences of induction:**
- Rifampicin dramatically reduces oral contraceptive efficacy (induces CYP3A4 → faster oestrogen metabolism)
- Rifampicin reduces warfarin levels → loss of anticoagulation
- Carbamazepine induces its own metabolism (autoinduction) → plasma levels fall over the first weeks of treatment
- St John's Wort reduces plasma concentrations of many drugs including antiretrovirals, ciclosporin, and digoxin

**Enzyme Inhibition**

Enzyme inhibitors reduce the activity of CYP enzymes — leading to slower metabolism of substrate drugs, higher plasma concentrations, and increased toxicity.

Inhibition is typically rapid — it occurs as soon as the inhibitor achieves sufficient concentration, and reverses as it is eliminated.

**Key enzyme inhibitors:**
- **Macrolide antibiotics** (erythromycin, clarithromycin) — CYP3A4 inhibitors
- **Azole antifungals** (fluconazole, ketoconazole, itraconazole) — potent CYP3A4 inhibitors
- **Ciprofloxacin** — CYP1A2 inhibitor (increases theophylline levels → toxicity)
- **Amiodarone** — inhibits multiple CYPs including CYP2C9 (increases warfarin levels)
- **Grapefruit juice** — contains furanocoumarins that irreversibly inhibit intestinal CYP3A4 → significantly increases bioavailability of many drugs (statins, calcium channel blockers, immunosuppressants)

**Competitive vs Mechanism-Based Inhibition**

Competitive inhibition is reversible — the inhibitor competes with substrate for the enzyme active site. Mechanism-based (irreversible) inhibition involves the inhibitor being converted to a reactive intermediate that permanently inactivates the enzyme. Grapefruit juice acts via mechanism-based inhibition of intestinal CYP3A4 — even a single glass can affect drug levels for 24–72 hours.

**Genetic Polymorphisms — Pharmacogenomics**

CYP enzymes are encoded by genes with multiple variants. Different alleles produce enzymes with different activities. The population can be classified into:

- **Poor metabolisers (PM)** — have two non-functional alleles. Drug accumulates → toxicity.
- **Intermediate metabolisers (IM)** — one functional, one non-functional allele.
- **Extensive metabolisers (EM)** — two functional alleles. Normal metabolism.
- **Ultra-rapid metabolisers (UM)** — gene duplication → excess enzyme. Drug rapidly eliminated → reduced efficacy (or, for prodrugs, excess active metabolite).

**CYP2D6** shows the most clinically relevant polymorphism:
- ~7% of Northern Europeans are poor metabolisers
- ~1–2% are ultra-rapid metabolisers

**CYP2C19** polymorphism affects clopidogrel activation — poor metabolisers cannot convert clopidogrel to its active form and have inadequate platelet inhibition, increasing cardiovascular risk.

**Grasp Tonic 🧃**

Think of enzyme induction and inhibition like changing the speed of a factory conveyor belt. Induction speeds up the belt — products (drugs) get processed and shipped out faster, so they spend less time in the warehouse (the body). Inhibition slows the belt — products pile up, the warehouse fills, and things start to overflow (toxicity). Genetic polymorphisms are like some factories being built with a fast belt, a slow belt, or no belt at all — determined at birth, not by what you add to the factory.`,
    },
    {
      id: 7,
      title: 'Excretion — Renal Excretion & Other Routes',
      isDeepDive: false,
      content: `Excretion is the irreversible elimination of drug or its metabolites from the body. The kidney is the primary organ of excretion. Other routes — biliary, pulmonary, salivary, and mammary — are clinically important in specific contexts.

**Renal Excretion — Three Processes**

Renal drug excretion involves three simultaneous processes at the nephron:

**1. Glomerular Filtration**

Blood flowing through the glomerulus is filtered under hydrostatic pressure. Water, ions, and small molecules (including free drug) pass into the filtrate. Protein-bound drug does NOT filter — only the free fraction is filtered. Drugs with a large molecular weight (>66,000 Da) also do not filter.

The glomerular filtration rate (GFR) — normally about 125 mL/min — determines the rate of filtration. In renal impairment, GFR falls, filtration decreases, and drugs that depend on glomerular filtration accumulate. This is why dose reduction is required for many drugs in renal failure — gentamicin, metformin, digoxin, lithium.

**2. Tubular Secretion**

Renal tubular cells actively secrete drugs from the peritubular capillaries into the tubular lumen — even protein-bound drug can be secreted, since the transporter extracts drug as it dissociates from protein. Two major secretion systems exist:

- **Organic anion transporters (OAT)** — secrete acidic drugs (penicillin, methotrexate, uric acid, thiazide diuretics)
- **Organic cation transporters (OCT)** — secrete basic drugs (morphine, creatinine, metformin)

Competition between drugs for the same transporter causes interactions. Probenecid competes with penicillin for OAT — historically used to prolong penicillin action by reducing its secretion. Probenecid also reduces methotrexate secretion — a dangerous interaction causing methotrexate toxicity.

**3. Tubular Reabsorption**

As filtrate flows through the tubule, lipophilic, un-ionised drug is passively reabsorbed back into the capillaries. This is the reverse of what we want for elimination. Lipophilic drugs are poorly excreted unchanged — which is why metabolism (converting them to polar metabolites) is so important.

**Urine pH and Ion Trapping**

The degree of ionisation depends on urine pH. Un-ionised drug is reabsorbed; ionised drug is trapped in the urine and excreted.

- **Acidic drugs** (aspirin, phenobarbitone) are more ionised in alkaline urine → excreted faster in alkaline urine
- **Basic drugs** (amphetamine) are more ionised in acidic urine → excreted faster in acidic urine

**Clinical application:** In aspirin overdose, alkalinising the urine with sodium bicarbonate increases aspirin ionisation in the tubule, trapping it and accelerating excretion. In amphetamine toxicity, acidifying the urine was historically used — though this practice has fallen out of favour due to risks.

**Biliary Excretion and Enterohepatic Circulation**

Some drugs are secreted by the liver into bile and enter the intestine. In the gut, conjugated metabolites may be hydrolysed by bacteria (β-glucuronidase), releasing the active parent drug, which is reabsorbed. This **enterohepatic circulation** prolongs drug action significantly.

Examples: morphine, ethinylestradiol (oral contraceptives), chloramphenicol.

This is why broad-spectrum antibiotics that alter gut flora can reduce oral contraceptive efficacy — by reducing the bacterial hydrolysis needed for enterohepatic recirculation of oestrogen.

**Other Routes of Excretion**

- **Lungs** — volatile anaesthetics are exhaled. Alcohol is partially excreted in breath (basis of breathalyser tests).
- **Breast milk** — lipophilic drugs concentrate in milk. Important in breastfeeding (opioids, benzodiazepines, lithium).
- **Saliva** — some drugs measurable in saliva; used in therapeutic drug monitoring.
- **Sweat and skin** — minor route; relevant for some heavy metals.

**Grasp Tonic 🧃**

Think of the kidney as a sophisticated water recycling plant. It filters everything, then carefully reclaims what the body needs and flushes out the rest. Drug molecules are like foreign contaminants — the plant was not designed to remove them, but does so anyway through three mechanisms: passive filtration (the mesh catches what it can), active pumping (workers pull more out), and whether the contaminant sticks to the pipes on the way out (reabsorption). Oily contaminants (lipophilic drugs) tend to stick to the pipes and get recycled back — which is why the liver needs to make them water-soluble first.`,
    },
    {
      id: 8,
      title: 'Pharmacokinetic Parameters — Half-Life, Clearance & Steady State',
      isDeepDive: false,
      content: `Understanding pharmacokinetic parameters allows us to design dosing regimens rationally — choosing the right dose, the right interval, and predicting when a drug will reach effective concentrations and when it will be eliminated.

**Clearance (CL)**

Clearance is the volume of plasma completely cleared of drug per unit time. It is the most fundamental pharmacokinetic parameter.

Total clearance = Hepatic clearance + Renal clearance + Other clearances

CL = Rate of elimination / Plasma concentration

Units: mL/min or L/hr

Clearance determines the **average steady-state plasma concentration** for a given dose rate:

Css = Dose rate / CL

If clearance falls (e.g. renal failure), plasma concentrations rise for the same dose rate — requiring dose reduction.

**Half-Life (t½)**

The elimination half-life is the time taken for plasma concentration to fall by 50%.

t½ = 0.693 × Vd / CL

This simple equation reveals something important: half-life depends on BOTH volume of distribution AND clearance. A drug with a large Vd has a long half-life not because it is slowly eliminated, but because there is so much drug in the tissues that the plasma concentration falls slowly even if clearance is rapid.

**Clinical importance of half-life:**
- Determines dosing interval — ideally dose every 1–2 half-lives
- Determines time to steady state — approximately 4–5 half-lives
- Determines time for elimination — approximately 4–5 half-lives after stopping

**Steady State**

When a drug is given repeatedly, plasma concentrations rise with each dose. After approximately **4–5 half-lives**, the rate of drug input equals the rate of elimination — plasma concentrations reach a plateau called steady state (Css).

At steady state, plasma concentrations fluctuate between a peak (Cmax) and a trough (Cmin) with each dose, but the average concentration remains constant.

**Loading Doses**

For drugs with a long half-life, reaching steady state takes a clinically unacceptable time. A **loading dose** is a larger initial dose that rapidly achieves therapeutic concentrations, after which a maintenance dose sustains them.

Loading dose = Target Css × Vd / F

Example: Digoxin has a half-life of 36–48 hours. Without a loading dose, it would take 7–10 days to reach steady state. A loading dose achieves therapeutic concentrations immediately.

Example: Amiodarone has a half-life of 40–55 days. Without loading, it would take months to reach steady state.

**Zero-Order vs First-Order Kinetics**

**First-order kinetics** (most drugs): A constant fraction of drug is eliminated per unit time. The rate of elimination is proportional to concentration. Half-life is constant regardless of concentration.

**Zero-order kinetics** (saturation kinetics): A constant amount of drug is eliminated per unit time. Occurs when elimination pathways are saturated. Half-life is NOT constant — it increases as concentration increases.

Clinically critical drugs exhibiting zero-order kinetics at therapeutic doses:
- **Phenytoin** — small dose increases cause disproportionately large increases in plasma concentration → narrow therapeutic window, toxicity
- **Alcohol** — eliminated at ~10mL/hr regardless of blood level
- **Aspirin** (at high doses) — saturation of metabolism

**Grasp Tonic 🧃**

Think of clearance as the drain in a bath, and volume of distribution as the size of the bath. Half-life depends on both. A huge bath (large Vd) takes longer to empty even with the same drain speed. A tiny bath (small Vd) empties quickly even with a slow drain. Steady state is when you are adding water (dosing) at exactly the rate the bath is draining — the water level stabilises. The loading dose is like filling the bath very quickly at the start so you do not have to wait ages for it to reach the right level.`,
    },
    {
      id: 9,
      title: 'Drug Interactions — Pharmacokinetic Mechanisms',
      isDeepDive: false,
      content: `Drug interactions occur when the pharmacokinetic or pharmacodynamic properties of one drug are altered by the presence of another. Pharmacokinetic interactions are those that alter ADME — absorption, distribution, metabolism, or excretion — of one drug by another.

**Absorption Interactions**

**Chelation and adsorption** — Divalent cations (Ca²⁺, Mg²⁺, Al³⁺, Fe²⁺) form insoluble complexes with certain drugs, preventing absorption. Tetracyclines and fluoroquinolones chelate with dairy products and antacids — take 2 hours apart. Cholestyramine adsorbs many drugs in the gut — take other drugs 1 hour before or 4–6 hours after cholestyramine.

**Altered gut motility** — Metoclopramide increases gastric emptying, increasing absorption rate (not necessarily amount) of co-administered drugs. Opioids reduce gut motility and delay absorption.

**Gut pH changes** — Antacids and proton pump inhibitors raise gastric pH. Drugs requiring acidic conditions for dissolution (ketoconazole, itraconazole) have reduced absorption.

**P-glycoprotein interactions** — P-gp inhibitors (cyclosporin, verapamil, amiodarone) increase absorption of P-gp substrates (digoxin). P-gp inducers (rifampicin) decrease absorption.

**Distribution Interactions**

**Protein binding displacement** — One drug displaces another from plasma proteins, transiently increasing free drug concentration. However, the clinical significance of this mechanism alone is usually minor, because the increased free drug is also more available for metabolism and excretion, so plasma concentrations return towards baseline quickly. The main concern arises when the displaced drug also has impaired elimination (as with warfarin in hepatic disease).

**Metabolism Interactions**

These are the most clinically important pharmacokinetic interactions. CYP enzyme induction and inhibition (discussed in Section 6) alter the metabolism of co-administered drugs.

Key examples:
- **Rifampicin + oral contraceptive** → contraceptive failure
- **Erythromycin + terfenadine** (historical) → QT prolongation and fatal arrhythmia (terfenadine levels increased by CYP3A4 inhibition)
- **Fluconazole + warfarin** → increased INR, bleeding risk
- **Amiodarone + warfarin** → increased INR (amiodarone inhibits CYP2C9)
- **Grapefruit + statins** → increased statin levels → myopathy

**Excretion Interactions**

**Renal tubular competition** — As previously discussed, probenecid competes with penicillin and methotrexate for OAT secretion.

**Urinary pH changes** — Sodium bicarbonate alkalinises urine, increasing excretion of acidic drugs (aspirin, methotrexate).

**NSAIDs and renal blood flow** — NSAIDs reduce prostaglandin-mediated renal afferent arteriole dilation, reducing GFR. This reduces excretion of renally cleared drugs — most importantly lithium and methotrexate, causing toxicity.

**The P-glycoprotein System as a General Drug Interaction Mechanism**

P-gp is an ATP-dependent efflux transporter expressed throughout the body — intestinal epithelium, blood-brain barrier, renal tubules, biliary canaliculi, placenta. It pumps drugs out of cells and is a major determinant of drug distribution and elimination.

Digoxin is predominantly eliminated by P-gp in the renal tubules. Quinidine, amiodarone, and verapamil all inhibit P-gp, reducing digoxin elimination and causing digoxin toxicity — a classic and important interaction.

**Grasp Tonic 🧃**

Think of drug interactions like two people competing for the same resource. If two drugs want to use the same enzyme (CYP3A4), one will get processed while the other waits — building up to dangerous levels. If one drug blocks the factory's doors (enzyme inhibition), every other drug that needs that factory accumulates. If one drug actually builds more factories (enzyme induction), other drugs get metabolised so fast they never reach their target concentration. Knowing these interactions is not memorising facts — it is understanding who competes with whom for limited resources in the body.`,
    },
    {
      id: 10,
      title: 'Special Populations — Renal Failure, Hepatic Failure, Elderly & Pregnancy',
      isDeepDive: false,
      content: `Pharmacokinetics changes substantially in certain patient populations. Applying standard doses to these patients can lead to toxicity or therapeutic failure. Understanding how ADME is altered in each population is essential for safe prescribing.

**Renal Failure**

The kidney eliminates drugs by filtration and secretion. In renal failure (reduced GFR), renally excreted drugs accumulate. The key principle is: **dose reduction is required for drugs with significant renal elimination AND a narrow therapeutic window.**

Drugs requiring dose adjustment in renal failure (DAMN GP mnemonic):
- **D**igoxin
- **A**minoglycosides (gentamicin, amikacin)
- **M**etformin (risk of lactic acidosis)
- **N**SAIDs (further reduce GFR)
- **G**abapentin/pregabalin
- **P**enicillins (high doses accumulate → seizures)

Renal failure also affects distribution — reduced albumin synthesis and accumulation of uraemic acids that displace drugs from albumin binding sites, increasing free drug fraction.

Dialysis removes drugs with small Vd, low protein binding, and low molecular weight. Drugs with large Vd (amiodarone, digoxin, chloroquine) are poorly dialysed.

**Hepatic Failure**

The liver performs Phase I and Phase II metabolism and synthesises plasma proteins (albumin, clotting factors). In hepatic failure:

- Reduced first-pass metabolism → increased bioavailability of oral drugs with high first-pass extraction (morphine, propranolol, labetalol)
- Reduced Phase I and II metabolism → slower elimination → accumulation
- Reduced albumin → increased free fraction of protein-bound drugs (phenytoin, warfarin)
- Reduced production of clotting factors → enhanced warfarin effect even without pharmacokinetic change

Drugs particularly dangerous in hepatic failure: opioids (hepatic encephalopathy), benzodiazepines, NSAIDs, paracetamol (at normal doses if chronic liver disease), statins.

**The Elderly**

Ageing affects every aspect of pharmacokinetics:

- **Absorption** — relatively preserved, though delayed gastric emptying and reduced gut motility may slow absorption rate
- **Distribution** — reduced total body water → higher concentrations of water-soluble drugs (digoxin); increased fat mass → greater Vd and prolonged half-life of lipophilic drugs; reduced albumin → higher free fraction of bound drugs
- **Metabolism** — reduced hepatic mass and blood flow → slower Phase I metabolism; Phase II generally preserved
- **Excretion** — reduced GFR (creatinine clearance falls ~1% per year after age 40); serum creatinine may appear normal despite significant GFR reduction because muscle mass also falls

The result: many drugs have longer half-lives, higher steady-state concentrations, and narrower therapeutic windows in the elderly. "Start low, go slow" is the prescribing principle.

**Pregnancy**

Pregnancy alters pharmacokinetics at every step:

- **Absorption** — delayed gastric emptying and increased gut transit time
- **Distribution** — increased plasma volume (40–50%), total body water, and fat → larger Vd; reduced albumin → higher free fractions
- **Metabolism** — increased CYP3A4 activity → faster metabolism of some drugs (phenytoin — dose may need increasing); reduced CYP1A2 activity
- **Excretion** — increased GFR (by ~50%) → faster renal elimination → lower plasma levels of renally cleared drugs

Additionally, drugs cross the placenta and may affect the fetus — teratogenicity (first trimester), fetal toxicity (throughout), and neonatal effects (near term).

**Paediatrics**

Children are not small adults. Neonates particularly have immature hepatic and renal function, different body composition, and different protein binding. The chloramphenicol "grey baby syndrome" is a classic consequence — neonates cannot glucuronidate chloramphenicol, leading to accumulation and cardiovascular collapse.

**Grasp Tonic 🧃**

Think of pharmacokinetics in special populations like a delivery service operating in different cities. In a city with blocked roads (renal failure), deliveries pile up — you need fewer packages (lower doses) or longer intervals. In a city where the sorting depot is damaged (hepatic failure), packages are processed slowly and pile up regardless of the route. In an elderly city, the roads are narrower, the workers are fewer, and the buildings have thinner walls — everything moves slower and concentrates faster. In a pregnant city, there are two addresses now — you must consider both occupants.`,
    },
    {
      id: 11,
      title: 'Therapeutic Drug Monitoring & Non-Linear Pharmacokinetics',
      isDeepDive: false,
      content: `Therapeutic drug monitoring (TDM) is the clinical practice of measuring drug concentrations in patient samples to optimise drug dosing — ensuring that plasma concentrations remain within the therapeutic window.

**When is TDM Useful?**

TDM is most valuable when:
1. There is a well-defined and clinically validated therapeutic range
2. The drug has a narrow therapeutic index
3. There is significant inter-patient pharmacokinetic variability
4. The pharmacological effect is difficult to measure directly
5. The drug exhibits non-linear pharmacokinetics

**Drugs Commonly Monitored by TDM**

- **Digoxin** — therapeutic range 0.8–2.0 ng/mL; toxicity causes arrhythmias
- **Phenytoin** — therapeutic range 10–20 mg/L; non-linear kinetics make dose adjustment complex
- **Lithium** — therapeutic range 0.6–1.0 mmol/L; narrow margin between efficacy and toxicity
- **Aminoglycosides** (gentamicin, amikacin) — nephrotoxic and ototoxic; peak and trough levels monitored
- **Vancomycin** — area-under-the-curve (AUC) monitoring increasingly preferred over trough
- **Ciclosporin and tacrolimus** — immunosuppressants with narrow TW; rejection vs toxicity
- **Methotrexate** (high-dose) — monitoring guides rescue therapy with folinic acid
- **Valproate, carbamazepine, theophylline, amiodarone**

**Timing of Samples**

For most drugs, trough concentrations (just before the next dose) are most meaningful for dose adjustment — they reflect the minimum concentration achieved during the dosing interval. Peak concentrations (1–2 hours post-dose for oral drugs; end of infusion for IV) are relevant for aminoglycosides.

Steady state must be reached before TDM is meaningful — samples taken before steady state underestimate true steady-state concentrations.

**Non-Linear (Saturable) Pharmacokinetics**

Most drugs obey first-order kinetics — elimination rate is proportional to concentration, and half-life is constant. However, when elimination pathways become saturated, kinetics become zero-order — and the consequences are clinically significant.

**Phenytoin** is the most important clinical example. Its metabolism by CYP2C9 becomes saturated within the therapeutic range. Small dose increases cause disproportionately large increases in plasma concentration. A patient stable on 300mg/day phenytoin may have plasma levels of 15 mg/L. Increasing the dose to 350mg/day might raise levels to 25–30 mg/L — causing toxicity (nystagmus, ataxia, drowsiness). This makes phenytoin dose titration treacherous.

The Michaelis-Menten equation describes saturable kinetics:

Rate of elimination = (Vmax × C) / (Km + C)

Where Vmax is the maximum elimination rate and Km is the concentration at which rate is half-maximal. When C >> Km, the denominator is dominated by C, and elimination rate ≈ Vmax (constant) — zero order.

**Alcohol** is metabolised by alcohol dehydrogenase at a constant rate of approximately 10mL pure alcohol per hour (about one standard drink per hour) regardless of blood alcohol level — classic zero-order kinetics within the physiological range.

**Grasp Tonic 🧃**

Non-linear pharmacokinetics is like a single checkout lane in a supermarket. When only a few customers arrive (low drug concentration), each customer is served immediately — the queue clears quickly (first-order behaviour). As more customers arrive, the queue builds in proportion — manageable. But once the checkout is overwhelmed (saturation), it does not matter how many customers arrive — the rate of processing is fixed at one customer at a time (zero-order). Adding more customers (increasing dose) just lengthens the queue (dramatically raises plasma concentration), not the throughput. This is why small phenytoin dose increases can be catastrophic.`,
    },
    {
      id: 12,
      title: 'Pharmacokinetics in Clinical Practice — Designing a Dosing Regimen',
      isDeepDive: false,
      content: `The ultimate goal of pharmacokinetics is practical: to design dosing regimens that achieve and maintain therapeutic drug concentrations safely and effectively. This section integrates all preceding concepts into clinical decision-making.

**The Maintenance Dose**

The maintenance dose is calculated to replace drug eliminated during each dosing interval, maintaining steady-state concentrations within the therapeutic window.

Maintenance dose = Target Css × CL × τ / F

Where τ is the dosing interval and F is bioavailability.

**Example: Gentamicin Dosing**

Gentamicin is an aminoglycoside antibiotic that is renally cleared, nephrotoxic, and ototoxic. Its therapeutic effect depends on achieving high peak concentrations (concentration-dependent killing). Its toxicity relates to sustained trough concentrations (trough-dependent toxicity).

For a patient with normal renal function: standard dosing achieves peaks well above the MIC and troughs that fall low enough to minimise toxicity.

For a patient with renal impairment: GFR is reduced, clearance falls, the drug accumulates. Two options:
1. Reduce the dose — lower peaks, same interval
2. Extend the interval — same dose (same peak), but longer gap for elimination

Extended-interval dosing (once daily gentamicin) is the modern preferred approach — achieves high peaks for efficacy while allowing time for renal tubular regeneration between doses.

**The Therapeutic Window in Practice**

The therapeutic window is not a fixed property — it may shift depending on patient factors:
- A patient with hypokalaemia is more sensitive to digoxin toxicity — the effective toxic concentration is lower
- An elderly patient may experience toxicity from plasma concentrations considered therapeutic in young adults

**Applying Pharmacokinetics to Drug Interactions**

When a patient on warfarin starts fluconazole (a CYP2C9 inhibitor):
- Warfarin metabolism slows
- Plasma warfarin concentration rises
- INR increases
- Dose reduction or enhanced monitoring required

Knowing the pharmacokinetic mechanism allows the prescriber to predict the interaction before it causes harm.

**Route Selection in Clinical Practice**

The choice of administration route is a clinical decision based on:
- Speed of action required (emergency → IV; chronic → oral)
- Patient's ability to swallow or absorb
- Drug's oral bioavailability and first-pass effect
- Duration of action needed (short → IV; sustained → transdermal)
- Setting (outpatient → oral; ICU → IV)

**Reviewing and Reconciling Medications**

Every patient admission should include medication reconciliation — reviewing all current medications for:
- Drugs requiring renal dose adjustment (creatinine clearance)
- Drugs requiring hepatic dose adjustment (Child-Pugh score)
- Significant drug-drug interactions (CYP, P-gp, protein binding)
- Drugs requiring TDM

This is pharmacokinetics applied to every patient, every day.

**Grasp Tonic 🧃**

Designing a dosing regimen is like planning a road trip. You need to know how fast your car goes (clearance), how big the fuel tank is (volume of distribution), how long the journey takes (half-life), and how much fuel you need at any given time (plasma concentration). Some journeys need you to start with a full tank immediately (loading dose). Some cars burn fuel at a constant rate regardless of speed (zero-order kinetics) — these need special attention. And if the road conditions change (renal failure, drug interactions), your original plan may need revision mid-journey.`,
    },
    {
      id: 13,
      title: 'Teaching Receipt™ — Pharmacokinetics',
      isDeepDive: false,
      content: `You have now completed the core sections of Pharmacokinetics. Before moving to the Deep Dive, take a moment to consolidate what you have learned.

**The Journey Summarised**

Pharmacokinetics follows the drug from administration to elimination. You have learned:

The **four routes of the journey** — Absorption, Distribution, Metabolism, Excretion (ADME). Each has its own determinants, its own barriers, and its own clinical significance.

**Absorption** depends on the route, the drug's formulation, the gastrointestinal environment, and first-pass metabolism. Bioavailability quantifies how much drug survives to reach the systemic circulation.

**Distribution** is governed by lipid solubility, ionisation, protein binding, and tissue affinity. The volume of distribution tells us whether a drug stays in the blood or spreads into tissues.

**Metabolism** primarily occurs in the liver via CYP450 enzymes (Phase I) and conjugation reactions (Phase II). Genetic polymorphisms, enzyme inducers, and inhibitors all dramatically alter metabolism. Prodrugs are inactive until metabolised.

**Excretion** occurs mainly via the kidneys — through filtration, secretion, and passive reabsorption. Urine pH manipulation can accelerate excretion of ionised drugs.

**Key parameters** — Clearance, half-life, and volume of distribution are mathematically related and determine steady-state concentrations, dosing intervals, and time to achieve or clear drug levels.

**Special populations** — Renal failure, hepatic failure, elderly patients, and pregnant women all require pharmacokinetic consideration and dose adjustment.

**Therapeutic drug monitoring** — For drugs with narrow therapeutic indices and non-linear kinetics, measuring plasma concentrations directly guides dosing.

You are now ready for the Deep Dive — where we explore the molecular mechanics of CYP enzymes, transporter pharmacology, and pharmacogenomic testing in clinical practice.`,
    },
    {
      id: 14,
      title: 'Deep Dive — CYP Enzymes, Transporters & Pharmacogenomics in Practice',
      isDeepDive: true,
      content: `This Deep Dive explores the molecular biology of drug metabolism and transport at a level relevant to clinical pharmacology, academic examinations, and research.

**The CYP450 Enzyme Family — Molecular Biology**

Cytochrome P450 enzymes are haem-containing monooxygenases located primarily in the endoplasmic reticulum of hepatocytes. The reaction they catalyse:

Drug (RH) + O₂ + NADPH + H⁺ → Drug-OH (ROH) + H₂O + NADP⁺

The CYP reaction cycle involves:
1. Substrate binding to the ferric (Fe³⁺) enzyme
2. Reduction of Fe³⁺ to Fe²⁺ by NADPH-CYP reductase
3. Binding of molecular oxygen
4. A second electron transfer
5. Insertion of one oxygen atom into the substrate; the other forms water

Each CYP is named by a family number (1, 2, 3), a subfamily letter (A, B, C, D), and an individual enzyme number (e.g. CYP3A4).

**CYP3A4** is the most abundant hepatic CYP and metabolises the largest number of drugs. It is also highly expressed in the intestinal epithelium — contributing significantly to first-pass metabolism of oral drugs. CYP3A4 and CYP3A5 together handle ~50% of all marketed drugs.

**CYP2D6** handles ~25% of marketed drugs despite being one of the lower-abundance CYP enzymes, because many CNS-active drugs (antidepressants, antipsychotics, opioids) are CYP2D6 substrates. The CYP2D6 gene has over 100 known allelic variants — CYP2D6*4 is the most common loss-of-function allele in Europeans.

**CYP2C9** has two major polymorphic variants:
- CYP2C9*2 — reduced activity
- CYP2C9*3 — severely reduced activity (common in South Asian populations)

Warfarin and phenytoin are primarily metabolised by CYP2C9*1. Patients with *2 or *3 alleles require significantly lower warfarin doses — the CPIC (Clinical Pharmacogenomics Implementation Consortium) provides genotype-guided dosing guidelines.

**CYP2C19** polymorphism has major consequences for clopidogrel. Clopidogrel is a prodrug — CYP2C19 converts it to its active thiol metabolite that inhibits platelet P2Y₁₂ receptors. Poor metabolisers (CYP2C19*2 homozygotes) cannot activate clopidogrel, have inadequate platelet inhibition, and have worse outcomes after coronary stent insertion. The FDA issued a black box warning for clopidogrel in poor metabolisers. Alternative antiplatelet drugs (prasugrel, ticagrelor — not CYP2C19 substrates) are recommended in known poor metabolisers.

**Drug Transport Proteins**

Beyond CYP enzymes, membrane transporters critically determine drug ADME.

**P-glycoprotein (P-gp / ABCB1)** is an ATP-binding cassette (ABC) efflux transporter. It functions as a molecular pump — using ATP hydrolysis to transport substrates out of cells against a concentration gradient. Expression sites:
- Intestinal epithelium (apical surface) — reduces absorption
- Blood-brain barrier (abluminal) — excludes drugs from CNS
- Hepatocyte (canalicular membrane) — mediates biliary excretion
- Renal proximal tubule — mediates tubular secretion
- Placenta — protects fetus

P-gp has broad substrate specificity (digoxin, anticancer drugs, HIV protease inhibitors, opioids). P-gp inhibitors (cyclosporin, verapamil, quinidine, amiodarone) increase drug absorption and tissue penetration by reducing efflux.

**OATP (Organic Anion-Transporting Polypeptide)** transporters, particularly OATP1B1, mediate hepatic uptake of many drugs from portal blood. Statins are OATP1B1 substrates. The SLCO1B1 gene (encoding OATP1B1) has a functional variant (*5) associated with reduced transport activity — patients carrying this allele have higher statin plasma concentrations and significantly increased risk of statin-induced myopathy. This is now the best-validated pharmacogenomic association in clinical practice — CPIC recommends SLCO1B1 testing before prescribing simvastatin at doses >40mg.

**MATE (Multidrug and Toxin Extrusion)** transporters mediate renal tubular secretion of organic cations including metformin. MATE inhibition by trimethoprim or cimetidine reduces metformin excretion.

**Pharmacogenomics in Clinical Practice**

Pharmacogenomic testing is moving from research into clinical routine:

**Pre-emptive genotyping panels** — Several health systems now offer panels that test for variants in CYP2D6, CYP2C9, CYP2C19, SLCO1B1, TPMT (thiopurine methyltransferase), and DPYD (dihydropyrimidine dehydrogenase) before drug therapy begins.

**TPMT and thiopurines** — Thiopurine drugs (azathioprine, 6-mercaptopurine, thioguanine) are metabolised by TPMT. TPMT-deficient patients (homozygous for non-functional alleles, ~0.3% of population) cannot metabolise these drugs and develop severe life-threatening myelosuppression at standard doses. TPMT testing before prescribing thiopurines is now standard of care in many countries.

**DPYD and fluorouracil** — Dihydropyrimidine dehydrogenase (DPD) is the primary metabolic enzyme for 5-fluorouracil (5-FU) and capecitabine. DPD-deficient patients (DPYD variants) develop severe and potentially fatal fluorouracil toxicity (mucositis, myelosuppression, neurotoxicity). DPYD genotyping before fluorouracil therapy is recommended by European guidelines (EMA) and increasingly implemented across oncology.

**HLA pharmacogenomics** — Some drug hypersensitivity reactions are determined by HLA alleles rather than metabolising enzymes:
- **HLA-B*57:01** — abacavir hypersensitivity (HIV therapy). Screening mandatory before prescribing abacavir in most countries.
- **HLA-B*15:02** — carbamazepine-induced Stevens-Johnson syndrome in Han Chinese populations. Screening recommended before carbamazepine in South-East Asian patients.
- **HLA-B*58:01** — allopurinol-induced severe cutaneous reactions in Asian populations.

**The Future: Precision Pharmacology**

Pharmacogenomics represents the convergence of pharmacokinetics, molecular biology, and personalised medicine. As genotyping becomes cheaper and more accessible, pre-emptive genotype-guided prescribing may become routine — the right drug, the right dose, for the right patient, at the right time.`,
    },
  ],
  teachingReceipt: {
    mastered: [
      'The four processes of pharmacokinetics (ADME) and what each involves',
      'The difference between enteral and parenteral routes, and why route determines bioavailability',
      'First-pass metabolism and why it dramatically reduces oral bioavailability of some drugs',
      'Volume of distribution and what a large or small Vd tells you about a drug',
      'Plasma protein binding — why only free drug is active, and the clinical implications',
      'Phase I (CYP450) and Phase II (conjugation) metabolism reactions',
      'Enzyme induction and inhibition — key drugs, mechanisms, and clinical consequences',
      'Renal excretion — filtration, secretion, and reabsorption — and the role of urine pH',
      'Half-life, clearance, and steady state — and how they govern dosing regimen design',
      'Pharmacokinetic changes in special populations — renal failure, hepatic failure, elderly, pregnancy',
      'Therapeutic drug monitoring — when it is needed and which drugs require it',
      'Non-linear (zero-order) kinetics and why phenytoin dosing is particularly complex',
    ],
    selfCheckQuestions: [
      'A patient on warfarin is started on rifampicin. What happens to warfarin plasma levels and why?',
      'Why does glyceryl trinitrate have to be given sublingually rather than orally?',
      'A drug has a volume of distribution of 400 litres. What does this tell you about where the drug is in the body?',
      'Explain why paracetamol overdose causes liver damage using Phase I and Phase II metabolism.',
      'A 70-year-old patient is prescribed gentamicin. Their serum creatinine is normal. Is dose adjustment needed? Why?',
      'What is the therapeutic window and why does it matter clinically?',
      'A drug has a half-life of 24 hours. How long until steady state is achieved with regular dosing?',
      'Why does grapefruit juice increase plasma concentrations of some drugs?',
      'Codeine provides no analgesia in a particular patient. What pharmacogenomic explanation is most likely?',
      'Explain ion trapping and how it is used clinically in aspirin overdose.',
    ],
  },
};