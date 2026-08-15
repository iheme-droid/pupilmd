'use client';

import { useState } from 'react';
import Link from 'next/link';

// --- STUB DATA DECLARATIONS TO PREVENT EMPTY COMPRESSION IMPORTS ---
const introAnatomyChapter = { chapterTitle: 'Introduction to Anatomical Terminology & Planes', moduleSlug: 'intro-anatomical-terminology', sections: [] };
const cellularInjuryChapter = { chapterTitle: 'Cellular Injury & Adaptation', moduleSlug: 'cellular-injury', sections: [] };
const acidBaseChapter = { chapterTitle: 'Acid-Base & Fluid/Electrolyte Disorders', moduleSlug: 'acid-base', sections: [] };
const pharmacokineticsChapter = { chapterTitle: 'Pharmacokinetics — Absorption, Distribution, Metabolism & Excretion', moduleSlug: 'pharmacokinetics', sections: [] };
const pharmacodynamicsChapter = { chapterTitle: 'Pharmacodynamics', moduleSlug: 'pharmacodynamics', sections: [] };

interface ModuleConfig {
  title: string;
  available: boolean;
  slug?: string;
  chapterData?: any;
}

interface CourseConfig {
  title: string;
  icon: string;
  books: string[];
  modules: ModuleConfig[];
}

interface YearConfig {
  year: number;
  phase: string;
  focus: string;
  color: string;
  bg: string;
  courses: CourseConfig[];
}

const LIBRARY: YearConfig[] = [
  {
    year: 1, phase: 'Pre-Clinical',
    focus: 'The "Why" and "How" of human biology',
    color: '#0A84FF', bg: 'rgba(10,132,255,0.07)',
    courses: [
      {
        title: 'Human Anatomy', icon: '🦴',
        books: ["Gray's Anatomy for Students", "Netter's Atlas of Human Anatomy", "BRS Gross Anatomy"],
        modules: [
          { title: 'Introduction to Anatomical Terminology & Planes', available: true, slug: 'intro-anatomical-terminology', chapterData: introAnatomyChapter },          
          { title: 'Upper Limb — Bones, Joints & Muscles', available: false },
          { title: 'Upper Limb — Nerves & Vessels', available: false },
          { title: 'Lower Limb — Bones, Joints & Muscles', available: false },
          { title: 'Lower Limb — Nerves & Vessels', available: false },
          { title: 'Thorax — Heart & Great Vessels', available: false },
          { title: 'Thorax — Lungs & Pleura', available: false },
          { title: 'Abdomen — GI Tract', available: false },
          { title: 'Abdomen — Liver, Biliary System & Pancreas', available: false },
          { title: 'Pelvis & Perineum', available: false },
          { title: 'Head & Neck — Bones, Muscles & Cranial Nerves', available: false },
          { title: 'Back & Vertebral Column', available: false },
          { title: 'Overview of Neuroanatomy', available: false },
        ],
      },
      {
        title: 'Medical Physiology', icon: '❤️',
        books: ['Costanzo Physiology', 'Guyton & Hall Medical Physiology', 'BRS Physiology'],
        modules: [
          { title: 'Cell Physiology & Membrane Transport', available: false },
          { title: 'Nerve & Muscle Physiology', available: false },
          { title: 'Cardiovascular Physiology — The Heart', available: false },
          { title: 'Cardiovascular Physiology — Circulation & Pressure', available: false },
          { title: 'Respiratory Physiology — Ventilation & Perfusion', available: false },
          { title: 'Respiratory Physiology — Gas Exchange & Control', available: false },
          { title: 'Renal Physiology — Filtration & Reabsorption', available: false },
          { title: 'Renal Physiology — Concentration & Dilution', available: false },
          { title: 'Acid-Base Physiology', available: false },
          { title: 'Gastrointestinal Physiology', available: false },
          { title: 'Endocrine Physiology — Hypothalamus & Pituitary', available: false },
          { title: 'Endocrine Physiology — Thyroid, Adrenal & Pancreas', available: false },
          { title: 'Reproductive Physiology', available: false },
          { title: 'Neurophysiology — Sensory & Motor Systems', available: false },
        ],
      },
      {
        title: 'Biochemistry', icon: '🧬',
        books: ['Lippincott Illustrated Reviews: Biochemistry', "Harper's Illustrated Biochemistry", 'First Aid USMLE Step 1 — Biochem'],
        modules: [
          { title: 'Amino Acids & Protein Structure', available: false },
          { title: 'Enzymes & Enzyme Kinetics', available: false },
          { title: 'Glycolysis & Gluconeogenesis', available: false },
          { title: 'Citric Acid Cycle & Oxidative Phosphorylation', available: false },
          { title: 'Glycogen & Fatty Acid Metabolism', available: false },
          { title: 'Cholesterol & Lipoprotein Metabolism', available: false },
          { title: 'Amino Acid Catabolism & Urea Cycle', available: false },
          { title: 'Purine & Pyrimidine Metabolism', available: false },
          { title: 'DNA Replication, Transcription & Translation', available: false },
          { title: 'Vitamins — Fat & Water Soluble', available: false },
          { title: 'Inherited Metabolic Disorders', available: false },
        ],
      },
      {
        title: 'Histology & Embryology', icon: '🔬',
        books: ["Junqueira's Basic Histology", "Langman's Medical Embryology", 'High-Yield Embryology (Dudek)'],
        modules: [
          { title: 'The Cell — Ultrastructure & Organelles', available: false },
          { title: 'Epithelial & Connective Tissue', available: false },
          { title: 'Cartilage, Bone & Muscle Tissue', available: false },
          { title: 'Nervous Tissue', available: false },
          { title: 'Cardiovascular & Blood Histology', available: false },
          { title: 'Lymphoid, Respiratory & GI Histology', available: false },
          { title: 'Endocrine Gland Histology', available: false },
          { title: 'Early Embryology — Fertilisation to Gastrulation', available: false },
          { title: 'Organogenesis & Congenital Anomalies', available: false },
        ],
      },
      {
        title: 'Medical Genetics', icon: '🧫',
        books: ['Thompson & Thompson Genetics in Medicine', 'Emery & Rimoin Principles of Medical Genetics', 'High-Yield Genetics (Dudek)'],
        modules: [
          { title: 'DNA Structure, Replication & Mutation', available: false },
          { title: 'Autosomal Patterns of Inheritance', available: false },
          { title: 'X-linked & Mitochondrial Inheritance', available: false },
          { title: 'Chromosomal Disorders', available: false },
          { title: 'Genomic Imprinting & Population Genetics', available: false },
          { title: 'Cancer Genetics', available: false },
          { title: 'Molecular Diagnostics & Genetic Counselling', available: false },
        ],
      },
      {
        title: 'Introduction to Clinical Medicine', icon: '🩺',
        books: ["Bates' Guide to Physical Examination", "Macleod's Clinical Examination", 'Clinical Medicine — Kumar & Clark'],
        modules: [
          { title: 'The Doctor-Patient Relationship & Communication', available: false },
          { title: 'History Taking — Structure & Technique', available: false },
          { title: 'The General Examination & Vital Signs', available: false },
          { title: 'Introduction to Systems Examination', available: false },
          { title: 'Medical Documentation & Clinical Reasoning', available: false },
          { title: 'Introduction to Evidence-Based Medicine', available: false },
        ],
      },
    ],
  },
  {
    year: 2, phase: 'Pre-Clinical',
    focus: 'Disease mechanisms and pharmacology',
    color: '#5856D6', bg: 'rgba(88,86,214,0.07)',
    courses: [
      {
        title: 'General Pathology', icon: '🩻',
        books: ['Pathoma — Fundamentals of Pathology', 'Robbins & Cotran Pathologic Basis of Disease', "Goljan's Rapid Review Pathology"],
        modules: [
          { title: 'Cellular Injury & Adaptation', available: true, slug: 'cellular-injury', chapterData: cellularInjuryChapter },
          { title: 'Acid-Base & Fluid/Electrolyte Disorders', available: true, slug: 'acid-base', chapterData: acidBaseChapter },
          { title: 'Cell Death — Necrosis & Apoptosis', available: false },
          { title: 'Acute Inflammation', available: false },
          { title: 'Chronic Inflammation & Granulomas', available: false },
          { title: 'Tissue Repair & Wound Healing', available: false },
          { title: 'Haemodynamic Disorders — Oedema & Hyperaemia', available: false },
          { title: 'Thrombosis, Embolism & Infarction', available: false },
          { title: 'Shock', available: false },
          { title: 'Neoplasia — Carcinogenesis & Tumour Behaviour', available: false },
          { title: 'Hypersensitivity & Autoimmune Diseases', available: false },
          { title: 'Amyloidosis & Environmental Pathology', available: false },
        ],
      },
      {
        title: 'Pathophysiology', icon: '⚙️',
        books: ['Pathophysiology — Copstead & Banasik', 'Hammer & McPhee Pathophysiology of Disease', 'Robbins Pathologic Basis of Disease'],
        modules: [
          { title: 'Introduction — From Lesion to Symptom', available: false },
          { title: 'Cardiovascular Pathophysiology — Heart Failure & IHD', available: false },
          { title: 'Cardiovascular Pathophysiology — Hypertension', available: false },
          { title: 'Respiratory Pathophysiology', available: false },
          { title: 'Renal Pathophysiology', available: false },
          { title: 'GI & Hepatic Pathophysiology', available: false },
          { title: 'Endocrine Pathophysiology — Diabetes', available: false },
          { title: 'Haematological Pathophysiology', available: false },
        ],
      },
      {
        title: 'Microbiology & Immunology', icon: '🦠',
        books: ['Clinical Microbiology Made Ridiculously Simple', "Levinson's Review of Medical Microbiology & Immunology", "Murray's Medical Microbiology"],
        modules: [
          { title: 'Overview of Microbiology & Infection', available: false },
          { title: 'Innate Immunity', available: false },
          { title: 'Adaptive Immunity — T Cells & B Cells', available: false },
          { title: 'Hypersensitivity, Autoimmunity & Immunodeficiency', available: false },
          { title: 'Bacteriology — Gram-Positive Organisms', available: false },
          { title: 'Bacteriology — Gram-Negative & Atypical Organisms', available: false },
          { title: 'Mycobacteria — TB & Leprosy', available: false },
          { title: 'Virology — DNA & RNA Viruses', available: false },
          { title: 'HIV & AIDS', available: false },
          { title: 'Mycology & Parasitology', available: false },
        ],
      },
      {
        title: 'Pharmacology', icon: '💊',
        books: ["Katzung's Basic & Clinical Pharmacology", 'Lippincott Illustrated Reviews: Pharmacology', 'Rang & Dale Pharmacology'],
        modules: [
          { title: 'Pharmacokinetics — Absorption, Distribution, Metabolism & Excretion', available: true, slug: 'pharmacokinetics', chapterData: pharmacokineticsChapter },
          { title: 'Pharmacodynamics', available: true, slug: 'pharmacodynamics', chapterData: pharmacodynamicsChapter },
          { title: 'Autonomic Pharmacology — Cholinergics & Adrenergics', available: false },
          { title: 'Cardiovascular Drugs — Antihypertensives', available: false },
          { title: 'Cardiovascular Drugs — Heart Failure, Arrhythmias & Anticoagulants', available: false },
          { title: 'Respiratory Pharmacology', available: false },
          { title: 'CNS Pharmacology — Antidepressants, Antipsychotics & Anxiolytics', available: false },
          { title: 'Analgesics & Anaesthetic Agents', available: false },
          { title: 'Antimicrobials — Antibiotics', available: false },
          { title: 'Antimicrobials — Antivirals & Antifungals', available: false },
          { title: 'Endocrine Pharmacology', available: false },
        ],
      },
      {
        title: 'Biostatistics & Epidemiology', icon: '📊',
        books: ['High-Yield Biostatistics, Epidemiology & Public Health', 'Gordis Epidemiology', 'BRS Behavioural Science & Biostatistics'],
        modules: [
          { title: 'Types of Data & Descriptive Statistics', available: false },
          { title: 'Hypothesis Testing, p-Values & Confidence Intervals', available: false },
          { title: 'Study Designs — Observational Studies', available: false },
          { title: 'Study Designs — Experimental Studies', available: false },
          { title: 'Bias, Confounding & Validity', available: false },
          { title: 'Measures of Disease Frequency & Association', available: false },
          { title: 'Screening & Diagnostic Test Evaluation', available: false },
          { title: 'Evidence-Based Medicine & Critical Appraisal', available: false },
        ],
      },
    ],
  },
  {
    year: 3, phase: 'Clinical Bridge',
    focus: 'Transitioning to diagnosis and management',
    color: '#FF6B35', bg: 'rgba(255,107,53,0.07)',
    courses: [
      {
        title: 'Internal Med Propedeutics', icon: '🏥',
        books: ["Bates' Guide to Physical Examination", "Macleod's Clinical Examination", "Talley & O'Connor Clinical Examination"],
        modules: [
          { title: 'The Systematic Approach to History Taking', available: false },
          { title: 'General Inspection & Vital Signs', available: false },
          { title: 'Cardiovascular Examination', available: false },
          { title: 'Respiratory Examination', available: false },
          { title: 'Abdominal Examination', available: false },
          { title: 'Neurological Examination', available: false },
          { title: 'Musculoskeletal & Thyroid Examination', available: false },
          { title: 'Psychiatric Assessment', available: false },
          { title: 'Clinical Reasoning & Differential Diagnosis', available: false },
        ],
      },
      {
        title: 'Radiology & Imaging', icon: '🩻',
        books: ['Learning Radiology — Recognising the Basics (Herring)', "Squire's Fundamentals of Radiology", 'The Radiology Assistant'],
        modules: [
          { title: 'Principles of Radiological Imaging', available: false },
          { title: 'Chest X-Ray — Systematic Approach & Common Pathologies', available: false },
          { title: 'Abdominal X-Ray', available: false },
          { title: 'CT Basics — Head, Chest & Abdomen', available: false },
          { title: 'MRI Principles & Clinical Uses', available: false },
          { title: 'Ultrasound — Abdominal & Obstetric', available: false },
          { title: 'Bone & Musculoskeletal Radiology', available: false },
          { title: 'Nuclear Medicine & PET Scanning', available: false },
        ],
      },
      {
        title: 'Clinical Pharmacology', icon: '💉',
        books: ['Clinical Pharmacology — Bennett & Brown', 'British National Formulary (BNF)', 'Prescribing in Pregnancy — de Swiet'],
        modules: [
          { title: 'Principles of Safe Prescribing', available: false },
          { title: 'Adverse Drug Reactions & Drug Interactions', available: false },
          { title: 'Prescribing in Renal & Hepatic Impairment', available: false },
          { title: 'Prescribing in Pregnancy, Lactation & the Elderly', available: false },
          { title: 'Drug Overdose & Toxicology', available: false },
        ],
      },
    ],
  },
  {
    year: 4, phase: 'Core Rotations',
    focus: 'Clinical management of common conditions',
    color: '#34C759', bg: 'rgba(52,199,89,0.07)',
    courses: [
      {
        title: 'Internal Medicine', icon: '🫀',
        books: ['Step-Up to Medicine', "Davidson's Principles & Practice of Medicine", "Harrison's Principles of Internal Medicine"],
        modules: [
          { title: 'Ischaemic Heart Disease & ACS', available: false },
          { title: 'Heart Failure', available: false },
          { title: 'Arrhythmias', available: false },
          { title: 'Valvular Heart Disease & Hypertension', available: false },
          { title: 'Pneumonia & Respiratory Infections', available: false },
          { title: 'COPD & Asthma', available: false },
          { title: 'Pleural Disease & Lung Cancer', available: false },
          { title: 'Peptic Ulcer Disease & GERD', available: false },
          { title: 'Inflammatory Bowel Disease', available: false },
          { title: 'Liver Disease — Hepatitis & Cirrhosis', available: false },
          { title: 'Acute & Chronic Kidney Disease', available: false },
          { title: 'Glomerulonephritis & Nephrotic Syndrome', available: false },
          { title: 'Diabetes Mellitus', available: false },
          { title: 'Thyroid Disease', available: false },
          { title: 'Anaemias & Haematological Malignancies', available: false },
          { title: 'Infectious Diseases — HIV, TB & Sepsis', available: false },
        ],
      },
      {
        title: 'General Surgery', icon: '🔪',
        books: ["Dr Pestana's Surgery Notes", 'Bailey & Love Short Practice of Surgery', 'SRB Manual of Surgery'],
        modules: [
          { title: 'Surgical Assessment & Wound Healing', available: false },
          { title: 'Fluid & Electrolyte Management in Surgery', available: false },
          { title: 'Acute Abdomen', available: false },
          { title: 'Appendicitis & Colorectal Surgery', available: false },
          { title: 'Intestinal Obstruction & Hernia', available: false },
          { title: 'Upper GI Surgery — Oesophagus & Stomach', available: false },
          { title: 'Hepatobiliary Surgery', available: false },
          { title: 'Breast Disease', available: false },
          { title: 'Thyroid & Parathyroid Surgery', available: false },
          { title: 'Vascular Surgery', available: false },
        ],
      },
      {
        title: 'Pediatrics', icon: '👶',
        books: ['Nelson Essentials of Pediatrics', 'Blueprints Pediatrics', 'BRS Pediatrics'],
        modules: [
          { title: 'Growth, Development & Milestones', available: false },
          { title: 'Neonatology — Normal Newborn & Common Problems', available: false },
          { title: 'Pediatric Nutrition & Immunisation', available: false },
          { title: 'Fever & Pediatric Infections', available: false },
          { title: 'Respiratory & Cardiac Disease in Children', available: false },
          { title: 'GI & Neurological Disorders in Children', available: false },
          { title: 'Haematological & Genetic Disorders in Children', available: false },
          { title: 'Child Safeguarding & Abuse', available: false },
        ],
      },
      {
        title: 'Obstetrics & Gynecology', icon: '🤱',
        books: ['Blueprints Obstetrics & Gynecology', "Hacker & Moore's Essentials of OB/GYN", 'Case Files: Obstetrics & Gynecology'],
        modules: [
          { title: 'Normal Pregnancy & Antenatal Care', available: false },
          { title: 'Labour, Delivery & Postpartum Care', available: false },
          { title: 'Hypertensive Disorders of Pregnancy', available: false },
          { title: 'Antepartum Haemorrhage & Other Complications', available: false },
          { title: 'Menstrual Disorders & Amenorrhoea', available: false },
          { title: 'Pelvic Inflammatory Disease & STIs', available: false },
          { title: 'Gynaecological Tumours', available: false },
          { title: 'Contraception & Infertility', available: false },
        ],
      },
      {
        title: 'Neurology', icon: '🧠',
        books: ['Blueprints Neurology', 'Clinical Neuroanatomy Made Ridiculously Simple', "Brazis' Localisation in Clinical Neurology"],
        modules: [
          { title: 'Neurological History & Examination', available: false },
          { title: 'Stroke — Ischaemic & Haemorrhagic', available: false },
          { title: 'Epilepsy & Seizure Disorders', available: false },
          { title: 'Headache Disorders', available: false },
          { title: "Parkinson's Disease & Movement Disorders", available: false },
          { title: 'Dementia & Cognitive Disorders', available: false },
          { title: 'Multiple Sclerosis', available: false },
          { title: 'Peripheral Neuropathy & Myopathy', available: false },
          { title: 'CNS Infections & Spinal Cord Disorders', available: false },
        ],
      },
      {
        title: 'Dermatology', icon: '🫧',
        books: ["Fitzpatrick's Color Atlas of Clinical Dermatology", 'Clinical Dermatology — Habif', 'Dermatology Made Easy'],
        modules: [
          { title: 'Skin Structure & Lesion Morphology', available: false },
          { title: 'Eczema, Psoriasis & Papulosquamous Disorders', available: false },
          { title: 'Acne, Rosacea & Hair Disorders', available: false },
          { title: 'Bacterial, Viral & Fungal Skin Infections', available: false },
          { title: 'Benign & Malignant Skin Tumours', available: false },
          { title: 'Drug Reactions & Urticaria', available: false },
        ],
      },
      {
        title: 'Ophthalmology', icon: '👁️',
        books: ['Ophthalmology at a Glance', 'Clinical Ophthalmology — Kanski', 'The Wills Eye Manual'],
        modules: [
          { title: 'Eye Anatomy, Visual Pathway & Examination', available: false },
          { title: 'Red Eye — Conjunctivitis, Keratitis & Uveitis', available: false },
          { title: 'Glaucoma & Cataract', available: false },
          { title: 'Retinal Disorders', available: false },
          { title: 'Neuro-Ophthalmology', available: false },
        ],
      },
      {
        title: 'Ear, Nose & Throat (ENT)', icon: '👂',
        books: ['Oxford Handbook of ENT & Head and Neck Surgery', 'Dhingra Diseases of Ear Nose & Throat', 'Lecture Notes ENT — Ludman'],
        modules: [
          { title: 'ENT Examination & Audiometry', available: false },
          { title: 'Otitis Media, Hearing Loss & Vertigo', available: false },
          { title: 'Rhinitis, Sinusitis & Epistaxis', available: false },
          { title: 'Tonsillitis, Pharyngitis & Laryngeal Disorders', available: false },
          { title: 'Head & Neck Tumours', available: false },
        ],
      },
      {
        title: 'Orthopedics', icon: '🦴',
        books: ["Apley's System of Orthopaedics & Fractures", 'Miller Review of Orthopaedics', "Hoppenfeld's Physical Examination of the Spine & Extremities"],
        modules: [
          { title: 'Fracture Principles — Classification & Healing', available: false },
          { title: 'Fractures of the Upper & Lower Limb', available: false },
          { title: 'Spinal Fractures & Cord Injuries', available: false },
          { title: 'Bone Infections & Septic Arthritis', available: false },
          { title: 'Osteoarthritis & Rheumatoid Arthritis', available: false },
          { title: 'Bone Tumours & Paediatric Orthopaedics', available: false },
          { title: 'Sports Injuries & Soft Tissue Disorders', available: false },
        ],
      },
      {
        title: 'Urology', icon: '🫁',
        books: ["Campbell-Walsh Urology (Essentials)", 'Oxford Handbook of Urology', "Blandy's Lecture Notes in Urology"],
        modules: [
          { title: 'Urological Investigations & UTIs', available: false },
          { title: 'Renal Calculi', available: false },
          { title: 'Bladder Disorders & Urinary Incontinence', available: false },
          { title: 'Benign Prostatic Hyperplasia & Prostate Cancer', available: false },
          { title: 'Renal Cell Carcinoma & Bladder Cancer', available: false },
          { title: 'Testicular Disorders & Scrotal Emergencies', available: false },
        ],
      },
    ],
  },
  {
    year: 5, phase: 'Specialties',
    focus: 'Sub-specialties and advanced clinical care',
    color: '#FF2D55', bg: 'rgba(255,45,85,0.07)',
    courses: [
      {
        title: 'Neurology & Neurosurgery', icon: '🧠',
        books: ['Blueprints Neurology', 'Greenberg Handbook of Neurosurgery', 'Clinical Neuroanatomy Made Ridiculously Simple'],
        modules: [
          { title: 'Raised Intracranial Pressure', available: false },
          { title: 'Traumatic Brain Injury', available: false },
          { title: 'Intracranial Haemorrhage', available: false },
          { title: 'Brain Tumours', available: false },
          { title: 'Hydrocephalus', available: false },
          { title: 'Spinal Cord Compression & Surgery', available: false },
          { title: 'Neurocritical Care', available: false },
        ],
      },
      {
        title: 'Psychiatry', icon: '🧘',
        books: ["Kaplan & Sadock's Synopsis of Psychiatry", 'First Aid for the Psychiatry Clerkship', 'DSM-5-TR Desk Reference'],
        modules: [
          { title: 'Psychiatric History & Mental Status Examination', available: false },
          { title: 'Depression & Bipolar Disorder', available: false },
          { title: 'Schizophrenia & Psychotic Disorders', available: false },
          { title: 'Anxiety, OCD & PTSD', available: false },
          { title: 'Eating & Personality Disorders', available: false },
          { title: 'Substance Use Disorders', available: false },
          { title: 'Child, Adolescent & Old Age Psychiatry', available: false },
          { title: 'Psychopharmacology & Psychiatric Emergencies', available: false },
        ],
      },
      {
        title: 'Anesthesiology', icon: '😴',
        books: ['Clinical Anesthesiology — Morgan & Mikhail', 'Basics of Anaesthesia — Stoelting', 'Oxford Handbook of Anaesthesia'],
        modules: [
          { title: 'Pre-operative Assessment & Risk Stratification', available: false },
          { title: 'Pharmacology of Anaesthetic Agents', available: false },
          { title: 'Airway Management', available: false },
          { title: 'General & Regional Anaesthesia', available: false },
          { title: 'Anaesthesia Monitoring & Complications', available: false },
          { title: 'Acute & Chronic Pain Management', available: false },
        ],
      },
      {
        title: 'Radiology (Clinical)', icon: '🩻',
        books: ['Learning Radiology — Herring', 'Grainger & Allison Diagnostic Radiology', 'Chapman & Nakielny Aids to Radiological Differential Diagnosis'],
        modules: [
          { title: 'Advanced Chest & Cardiac Imaging', available: false },
          { title: 'Advanced Abdominal & Pelvic CT', available: false },
          { title: 'Hepatobiliary & Pancreatic Imaging', available: false },
          { title: 'Neuroradiology — Brain & Spine', available: false },
          { title: 'Musculoskeletal Radiology', available: false },
          { title: 'Interventional Radiology', available: false },
          { title: 'Paediatric Radiology', available: false },
        ],
      },
      {
        title: 'Rheumatology', icon: '🦾',
        books: ['Oxford Textbook of Rheumatology', 'Rheumatology Secrets — West', 'Clinical Rheumatology — Hochberg'],
        modules: [
          { title: 'Approach to Joint Disease & MSK Examination', available: false },
          { title: 'Rheumatoid Arthritis', available: false },
          { title: 'Systemic Lupus Erythematosus', available: false },
          { title: 'Spondyloarthropathies', available: false },
          { title: 'Crystal Arthropathies — Gout & Pseudogout', available: false },
          { title: 'Systemic Sclerosis & Myositis', available: false },
          { title: 'Vasculitides & Osteoporosis', available: false },
        ],
      },
      {
        title: 'Endocrinology & Metabolism', icon: '⚗️',
        books: ["Williams' Textbook of Endocrinology", 'Greenspan Endocrinology & Diabetes', "DeGroot's Endocrinology"],
        modules: [
          { title: 'Hypothalamic-Pituitary Axis & Pituitary Tumours', available: false },
          { title: 'Diabetes Mellitus — Diagnosis, Management & Complications', available: false },
          { title: 'Thyroid Disorders & Thyroid Cancer', available: false },
          { title: 'Adrenal Disorders', available: false },
          { title: 'Calcium, Parathyroid & Metabolic Bone Disease', available: false },
          { title: 'Lipid Disorders & Metabolic Syndrome', available: false },
        ],
      },
    ],
  },
  {
    year: 6, phase: 'Internship',
    focus: 'Emergency, acute management & primary care',
    color: '#FF9500', bg: 'rgba(255,149,0,0.07)',
    courses: [
      {
        title: 'Emergency & Critical Care', icon: '🚨',
        books: ["Tintinalli's Emergency Medicine", 'The ICU Book — Marino', 'Pocket Medicine (MGH Handbook)'],
        modules: [
          { title: 'Approach to the Emergency Patient — ABCDE', available: false },
          { title: 'Basic & Advanced Life Support', available: false },
          { title: 'Shock & Sepsis', available: false },
          { title: 'Respiratory Emergencies', available: false },
          { title: 'Cardiac Emergencies', available: false },
          { title: 'Neurological Emergencies', available: false },
          { title: 'Trauma — Primary & Secondary Survey', available: false },
          { title: 'Burns, Toxicology & Environmental Emergencies', available: false },
          { title: 'Critical Care Monitoring, Ventilation & Nutrition', available: false },
        ],
      },
      {
        title: 'Family & Forensic Medicine', icon: '👨‍⚕️',
        books: ["Swanson's Family Medicine Review", 'Oxford Handbook of General Practice', "Simpson's Forensic Medicine"],
        modules: [
          { title: 'Principles of Primary Care & Preventive Medicine', available: false },
          { title: 'Chronic Disease Management in the Community', available: false },
          { title: 'Screening, Health Promotion & Common Presentations', available: false },
          { title: 'Mental Health in Primary Care', available: false },
          { title: 'Introduction to Forensic Medicine', available: false },
          { title: 'Forensic Pathology — Cause & Manner of Death', available: false },
          { title: 'Medicolegal Issues & Forensic Toxicology', available: false },
        ],
      },
      {
        title: 'Geriatrics', icon: '👴',
        books: ['Brocklehurst Textbook of Geriatric Medicine', 'Oxford Handbook of Geriatric Medicine', 'Essentials of Clinical Geriatrics — Kane'],
        modules: [
          { title: 'Biology of Ageing & Comprehensive Geriatric Assessment', available: false },
          { title: 'Falls & Osteoporosis', available: false },
          { title: 'Dementia — Alzheimers & Other Types', available: false },
          { title: 'Delirium', available: false },
          { title: 'Polypharmacy & Prescribing in the Elderly', available: false },
          { title: 'Frailty, Urinary Incontinence & Rehabilitation', available: false },
        ],
      },
      {
        title: 'Palliative Care', icon: '🕊️',
        books: ['Oxford Textbook of Palliative Medicine', 'Palliative Care Formulary', 'Handbook of Palliative Care — Faull'],
        modules: [
          { title: 'Principles & Philosophy of Palliative Care', available: false },
          { title: 'Pain Assessment & the WHO Analgesic Ladder', available: false },
          { title: 'Opioid Prescribing in Palliative Care', available: false },
          { title: 'Managing Breathlessness, Nausea & Fatigue', available: false },
          { title: 'Communication Skills — Breaking Bad News', available: false },
          { title: 'End-of-Life Care & the Dying Patient', available: false },
          { title: 'Grief & Bereavement', available: false },
        ],
      },
    ],
  },
];

interface FlatModule extends ModuleConfig {
  course: string;
  courseIcon: string;
  year: number;
}

const ALL_MODULES: FlatModule[] = LIBRARY.flatMap(yr =>
  yr.courses.flatMap(course =>
    course.modules.map((mod) => ({
      ...mod,
      course: course.title,
      courseIcon: course.icon,
      year: yr.year
    }))
  )
);

function ModulePill({ mod, color }: { mod: FlatModule; color: string }) {
  const [hovered, setHovered] = useState(false);
  
  if (mod.available && mod.slug) {
    return (
      <Link href={`/module/${mod.slug}`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 14px', borderRadius: '10px', background: hovered ? color : `${color}12`, border: `1px solid ${color}30`, textDecoration: 'none', transition: 'all 0.2s ease' }}
      >
        <span style={{ fontSize: '0.65rem', color: hovered ? '#fff' : '#34C759' }}>●</span>
        <span style={{ fontFamily: "'Sora', sans-serif", fontWeight: 600, fontSize: '0.82rem', color: hovered ? '#fff' : '#0D0F14', flex: 1, lineHeight: 1.3 }}>{mod.title}</span>
        <svg width="13" height="13" fill="none" stroke={hovered ? '#fff' : color} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </Link>
    );
  }
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 14px', borderRadius: '10px', background: '#F7F8FA', border: '1px solid rgba(0,0,0,0.06)' }}>
      <span style={{ fontSize: '0.65rem', color: '#D1D5DB' }}>○</span>
      <span style={{ fontFamily: "'Sora', sans-serif", fontWeight: 500, fontSize: '0.82rem', color: '#C4C9D4', flex: 1, lineHeight: 1.3 }}>{mod.title}</span>
      <span style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: '0.6rem', letterSpacing: '0.06em', textTransform: 'uppercase', color: '#C4C9D4', background: '#ECEEF2', padding: '2px 7px', borderRadius: '99px' }}>Soon</span>
    </div>
  );
}

function CourseCard({ course, color }: { course: CourseConfig; color: string }) {
  const [expanded, setExpanded] = useState(false);
  const available = course.modules.filter((m) => m.available).length;
  const visibleModules = expanded ? course.modules : course.modules.slice(0, 5);

  return (
    <div style={{ background: '#fff', borderRadius: '14px', border: '1px solid rgba(0,0,0,0.07)', overflow: 'hidden' }}>
      <div style={{ padding: '14px 16px', borderBottom: '1px solid rgba(0,0,0,0.05)', display: 'flex', alignItems: 'center', gap: '10px' }}>
        <div style={{ width: '34px', height: '34px', borderRadius: '9px', background: `${color}12`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem', flexShrink: 0 }}>{course.icon}</div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <p style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: '0.88rem', color: '#0D0F14', margin: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'normal' }}>{course.title}</p>
          <p style={{ fontSize: '0.7rem', color: '#B0B6C1', margin: 0, fontWeight: 500 }}>{available > 0 ? `${available} available` : `${course.modules.length} modules · Coming soon`}</p>
        </div>
      </div>
      <div style={{ padding: '8px 12px', borderBottom: '1px solid rgba(0,0,0,0.04)', display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
        {course.books.map((book: string, i: number) => (
          <span key={i} style={{ fontFamily: "'Sora', sans-serif", fontSize: '0.6rem', fontWeight: 600, color: color, background: `${color}10`, padding: '2px 7px', borderRadius: '99px', border: `1px solid ${color}18` }}>
            📖 {book.split('—')[0].split('(')[0].trim().split(' ').slice(0, 5).join(' ')}
          </span>
        ))}
      </div>
      <div style={{ padding: '10px', display: 'flex', flexDirection: 'column', gap: '5px' }}>
        {visibleModules.map((mod, i) => (
          <ModulePill 
            key={i} 
            mod={{...mod, course: course.title, courseIcon: course.icon, year: 0}} 
            color={color} 
          />
        ))}
        {course.modules.length > 5 && (
          <button onClick={() => setExpanded(!expanded)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: "'Sora', sans-serif", fontWeight: 600, fontSize: '0.75rem', color: color, padding: '6px', textAlign: 'center' }}>
            {expanded ? '▲ Show less' : `▼ +${course.modules.length - 5} more modules`}
          </button>
        )}
      </div>
    </div>
  );
}

function YearSection({ yr }: { yr: YearConfig }) {
  const [open, setOpen] = useState(false);
  const totalAvailable = yr.courses.flatMap((c) => c.modules).filter((m) => m.available).length;
  const totalModules = yr.courses.flatMap((c) => c.modules).length;

  return (
    <div id={`year-${yr.year}`} style={{ background: '#fff', borderRadius: '20px', border: `1.5px solid ${open ? yr.color + '35' : 'rgba(0,0,0,0.07)'}`, boxShadow: open ? `0 4px 24px ${yr.color}12` : '0 1px 4px rgba(0,0,0,0.04)', transition: 'all 0.25s ease', overflow: 'hidden' }}>
      <button onClick={() => setOpen(!open)} style={{ width: '100%', padding: '22px 24px', background: 'transparent', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '14px', textAlign: 'left' }}>
        <div style={{ width: '48px', height: '48px', borderRadius: '13px', background: yr.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          <span style={{ fontFamily: "'Sora', sans-serif", fontWeight: 800, fontSize: '0.95rem', color: yr.color }}>Y{yr.year}</span>
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '3px' }}>
            <span style={{ fontFamily: "'Sora', sans-serif", fontWeight: 800, fontSize: '1.05rem', color: '#0D0F14', letterSpacing: '-0.02em' }}>Year {yr.year}</span>
            <span style={{ fontFamily: "'Sora', sans-serif", fontWeight: 600, fontSize: '0.65rem', letterSpacing: '0.06em', textTransform: 'uppercase', color: yr.color, background: yr.bg, padding: '2px 8px', borderRadius: '99px' }}>{yr.phase}</span>
            {totalAvailable > 0 && (
              <span style={{ fontFamily: "'Sora', sans-serif", fontWeight: 600, fontSize: '0.65rem', color: '#34C759', background: 'rgba(52,199,89,0.1)', padding: '2px 8px', borderRadius: '99px' }}>{totalAvailable} available</span>
            )}
          </div>
          <p style={{ color: '#7A818F', fontSize: '0.8rem', margin: 0 }}>{yr.focus} · {yr.courses.length} courses · {totalModules} modules</p>
        </div>
        <svg width="18" height="18" fill="none" stroke="#B0B6C1" viewBox="0 0 24 24"
          style={{ flexShrink: 0, transform: open ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.25s ease' }}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div style={{
        display: open ? 'grid' : 'none',
        gridTemplateColumns: 'repeat(auto-fill, minmax(min(272px, 100%), 1fr))',
        gap: '10px',
        padding: '0 20px 20px', 
        paddingTop: '16px',
        borderTop: '1px solid rgba(0,0,0,0.05)',
      }}>
        {yr.courses.map((course, i) => <CourseCard key={i} course={course} color={yr.color} />)}
      </div>
    </div>
  );
}

export default function LibraryPage() {
  const [query, setQuery] = useState('');
  const totalAvailable = ALL_MODULES.filter((m) => m.available).length;
  const totalCourses = LIBRARY.flatMap(yr => yr.courses).length;

  const searchResults = query.trim().length > 1
    ? ALL_MODULES.filter((m) =>
        m.title.toLowerCase().includes(query.toLowerCase()) ||
        m.course.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <div style={{ background: '#F7F8FA', minHeight: '100vh' }}>
      
      {/* --- FLOATING NAVBAR --- */}
      <nav style={{ 
        position: 'sticky', 
        top: 0, 
        zIndex: 1000, 
        background: 'rgba(13, 15, 20, 0.85)', 
        backdropFilter: 'blur(12px)', 
        borderBottom: '1px solid rgba(255,255,255,0.08)',
        padding: '14px 24px'
      }}>
        <div style={{ maxWidth: '1120px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ 
              width: '32px', height: '32px', 
              background: 'linear-gradient(135deg, #0A84FF 0%, #0056b3 100%)', 
              borderRadius: '8px', 
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 4px 12px rgba(10,132,255,0.3)' 
            }}>
              <span style={{ color: '#fff', fontWeight: 900, fontSize: '0.8rem', fontFamily: "'Sora', sans-serif" }}>P</span>
            </div>
            <h1 style={{ 
              fontFamily: "'Sora', sans-serif", 
              fontWeight: 800, 
              fontSize: '1.2rem', 
              letterSpacing: '-0.03em', 
              color: '#fff', 
              margin: 0,
              fontStyle: 'italic'
            }}>
              Pupil<span style={{ color: '#0A84FF' }}>MD</span>
            </h1>
          </Link>
          
          <div style={{ display: 'flex', gap: '20px' }}>
             <Link href="/library" style={{ 
               fontFamily: "'Sora', sans-serif", 
               fontWeight: 700, 
               fontSize: '0.75rem', 
               color: '#0A84FF', 
               textDecoration: 'none',
               textTransform: 'uppercase',
               letterSpacing: '0.05em'
             }}>Library</Link>
          </div>
        </div>
      </nav>

      <section style={{ background: '#0D0F14', padding: '60px 24px 68px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-100px', right: '-80px', width: '480px', height: '480px', background: 'radial-gradient(circle, rgba(10,132,255,0.18) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: '660px', margin: '0 auto', position: 'relative' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '5px 12px', background: 'rgba(10,132,255,0.15)', border: '1px solid rgba(10,132,255,0.3)', borderRadius: '99px', marginBottom: '18px' }}>
            <span>📚</span>
            <span style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: '0.68rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#60A5FA' }}>PupilMD Library</span>
          </div>
          <h1 style={{ fontFamily: "'Sora', sans-serif", fontWeight: 800, fontSize: 'clamp(1.75rem, 4vw, 2.6rem)', letterSpacing: '-0.04em', color: '#fff', lineHeight: 1.15, marginBottom: '12px' }}>
            Your Medical School<br />
            <span style={{ background: 'linear-gradient(135deg, #0A84FF 0%, #5856D6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Library, Reimagined</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.92rem', lineHeight: 1.7, marginBottom: '28px' }}>
            6 years · {totalCourses} courses · {ALL_MODULES.length}+ modules — all taught through Marable™ storytelling.
          </p>
          <div style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', left: '15px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }}>
              <svg width="17" height="17" fill="none" stroke="rgba(255,255,255,0.35)" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
              </svg>
            </div>
            <input type="text" placeholder="Search topics, courses, modules..." value={query}
              onChange={e => setQuery(e.target.value)}
              style={{ width: '100%', padding: '15px 15px 15px 46px', background: 'rgba(255,255,255,0.08)', border: '1.5px solid rgba(255,255,255,0.1)', borderRadius: '13px', color: '#fff', fontFamily: "'DM Sans', sans-serif", fontSize: '0.92rem', outline: 'none' }}
            />
          </div>
          {searchResults.length > 0 && (
            <div style={{ marginTop: '6px', background: '#1A1C24', borderRadius: '13px', border: '1px solid rgba(255,255,255,0.09)', overflow: 'hidden' }}>
              {searchResults.slice(0, 6).map((mod, i) => (
                <div key={i} onClick={() => mod.available && mod.slug && (window.location.href = `/module/${mod.slug}`)}
                  style={{ padding: '11px 15px', borderBottom: i < Math.min(searchResults.length, 6) - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none', display: 'flex', alignItems: 'center', gap: '11px', cursor: mod.available ? 'pointer' : 'default' }}>
                  <span>{mod.courseIcon}</span>
                  <div style={{ flex: 1 }}>
                    <p style={{ fontFamily: "'Sora', sans-serif", fontWeight: 600, fontSize: '0.83rem', color: '#fff', margin: 0 }}>{mod.title}</p>
                    <p style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.35)', margin: 0 }}>Year {mod.year} · {mod.course}</p>
                  </div>
                  {mod.available
                    ? <span style={{ fontSize: '0.65rem', color: '#34C759', fontWeight: 700, background: 'rgba(52,199,89,0.1)', padding: '2px 7px', borderRadius: '99px' }}>Available</span>
                    : <span style={{ fontSize: '0.65rem', color: '#7A818F', fontWeight: 700, background: 'rgba(255,255,255,0.05)', padding: '2px 7px', borderRadius: '99px' }}>Soon</span>
                  }
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section style={{ background: '#fff', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
        <div style={{ maxWidth: '1120px', margin: '0 auto', padding: '0 24px', display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          {[
            { value: '6', label: 'Years covered' },
            { value: `${totalCourses}`, label: 'Courses' },
            { value: `${totalAvailable}`, label: 'Available now' },
            { value: `${ALL_MODULES.length}+`, label: 'Total modules' },
          ].map((stat, i) => (
            <div key={i} style={{ padding: '20px 32px', textAlign: 'center', borderRight: i < 3 ? '1px solid rgba(0,0,0,0.06)' : 'none' }}>
              <p style={{ fontFamily: "'Sora', sans-serif", fontWeight: 800, fontSize: '1.35rem', letterSpacing: '-0.03em', color: '#0A84FF', margin: '0 0 2px' }}>{stat.value}</p>
              <p style={{ color: '#7A818F', fontSize: '0.73rem', margin: 0, fontWeight: 500 }}>{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ maxWidth: '1120px', margin: '0 auto', padding: '28px 24px 0' }}>
        <div style={{ display: 'flex', gap: '7px', flexWrap: 'wrap', alignItems: 'center' }}>
          <span style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: '0.7rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#7A818F', marginRight: '4px' }}>Browse:</span>
          {LIBRARY.map(yr => (
            <a key={yr.year} href={`#year-${yr.year}`}
              style={{ fontFamily: "'Sora', sans-serif", fontWeight: 600, fontSize: '0.8rem', color: yr.color, background: yr.bg, padding: '5px 13px', borderRadius: '99px', textDecoration: 'none', border: `1px solid ${yr.color}20`, transition: 'all 0.2s ease' }}
            >Year {yr.year}</a>
          ))}
        </div>
      </section>

      <section style={{ maxWidth: '1120px', margin: '0 auto', padding: '20px 24px 80px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {LIBRARY.map(yr => <YearSection key={yr.year} yr={yr} />)}
      </section>
    </div>
  );
}