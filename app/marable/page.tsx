'use client';

import { useState } from 'react';
import Link from 'next/link';

interface Course {
  name: string;
  slug: string; // Used to target the correct .docx file
}

interface Category {
  id: string;
  title: string;
  icon: string;
  courses: Course[];
}

export default function MarableDirectory() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({
    foundations: true,
    core: true,
    clinical: true,
  });

  // Track the active selected course object
  const [activeCourse, setActiveCourse] = useState<Course | null>(null);
  // Store parsed HTML from the DOCX file
  const [storyHtml, setStoryHtml] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const toggleCategory = (id: string) => {
    setExpandedCategories((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // Dynamically load and parse the DOCX file from public/stories/
  const handleCourseClick = async (course: Course) => {
    setActiveCourse(course);
    setLoading(true);
    setError(null);
    setStoryHtml('');

    try {
      // 1. Fetch the DOCX file as an ArrayBuffer
      const response = await fetch(`/stories/${course.slug}.docx`);
      if (!response.ok) {
        throw new Error(`Could not find the document "public/stories/${course.slug}.docx"`);
      }
      const arrayBuffer = await response.arrayBuffer();

      // 2. Import mammoth dynamically (client-side only)
      const mammoth = await import('mammoth');

      // 3. Convert to clean HTML
      const result = await mammoth.convertToHtml({ arrayBuffer });
      setStoryHtml(result.value);
    } catch (err: any) {
      console.error(err);
      setError(err.message || 'Failed to load this story. Please ensure the DOCX file exists in public/stories/');
    } finally {
      setLoading(false);
    }
  };

  const categories: Category[] = [
    {
      id: 'foundations',
      title: 'Marable™ The Foundations',
      icon: '🏛️',
      courses: [
        { name: 'Biochemistry & Medical Genetics', slug: 'biochem' },
        { name: 'Cell Biology & Histology', slug: 'cell-bio' },
        { name: 'Microbiology & Basic Immunology', slug: 'microbiology' },
        { name: 'General Pathology & General Pharmacology', slug: 'gen-path' },
        { name: 'Embryology', slug: 'embryology' },
      ],
    },
    {
      id: 'core',
      title: 'Marable™ The Core',
      icon: '🪵',
      courses: [
        { name: 'Gross Anatomy & Neuroanatomy', slug: 'anatomy' },
        { name: 'Systemic Physiology', slug: 'physiology' },
        { name: 'Systemic Pathology & Pharmacology', slug: 'sys-path' },
        { name: 'Diagnostics, Infectious Diseases & Epidemiology', slug: 'diagnostics' },
      ],
    },
    {
      id: 'clinical',
      title: 'Marable™ The Clinical...',
      icon: '🍃',
      courses: [
        { name: 'Internal Medicine', slug: 'internal-medicine' },
        { name: 'General Surgery & Anesthesia', slug: 'surgery' },
        { name: 'Pediatrics & Neonatology', slug: 'pediatrics' },
        { name: 'Obstetrics & Gynecology', slug: 'obgyn' },
        { name: 'Psychiatry & Behavioral Science', slug: 'psychiatry' },
        { name: 'Emergency Medicine, Family Medicine & Ethics', slug: 'emergency-medicine' },
      ],
    },
  ];

  return (
    <div style={{ display: 'flex', height: '100vh', width: '100vw', overflow: 'hidden', background: '#F7F8FA', fontFamily: "'DM Sans', sans-serif" }}>
      
      {/* ── LEFT SIDEBAR ──────────────── */}
      <aside
        style={{
          width: sidebarOpen ? '340px' : '0px',
          minWidth: sidebarOpen ? '340px' : '0px',
          borderRight: sidebarOpen ? '1px solid rgba(0,0,0,0.08)' : 'none',
          background: '#FFFFFF',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        <div style={{ padding: '24px', borderBottom: '1px solid rgba(0,0,0,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '1.2rem' }}>💖</span>
            <span style={{ fontFamily: "'Sora', sans-serif", fontWeight: 800, fontSize: '1.1rem', color: '#0D0F14' }}>
              Marable<span style={{ color: '#FF2D55' }}>.</span>
            </span>
          </div>
          <Link href="/" style={{ fontSize: '0.8rem', color: '#7A818F', textDecoration: 'none', fontWeight: 600 }}>
            ← Back Home
          </Link>
        </div>

        <div style={{ flex: 1, overflowY: 'auto', padding: '20px 16px' }}>
          {categories.map((category) => {
            const isExpanded = expandedCategories[category.id];
            return (
              <div key={category.id} style={{ marginBottom: '16px' }}>
                <div
                  onClick={() => toggleCategory(category.id)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '8px 6px',
                    cursor: 'pointer',
                    borderRadius: '8px',
                    userSelect: 'none',
                    transition: 'background 0.2s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.03)')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                >
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#7A818F"
                    strokeWidth="3"
                    style={{
                      transform: isExpanded ? 'rotate(0deg)' : 'rotate(-90deg)',
                      transition: 'transform 0.2s ease',
                      flexShrink: 0,
                    }}
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>

                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7A818F" strokeWidth="2" style={{ flexShrink: 0 }}>
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                  </svg>

                  <span style={{ fontSize: '0.9rem', fontWeight: 700, color: '#3A3F4B', display: 'flex', alignItems: 'center', gap: '6px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    <span>{category.icon}</span> {category.title}
                  </span>
                </div>

                <div
                  style={{
                    height: isExpanded ? 'auto' : '0px',
                    overflow: 'hidden',
                    transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
                    paddingLeft: '16px',
                  }}
                >
                  {category.courses.map((course) => {
                    const isActive = activeCourse?.slug === course.slug;
                    return (
                      <div
                        key={course.slug}
                        onClick={() => handleCourseClick(course)}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '10px',
                          padding: '10px 12px',
                          margin: '4px 0',
                          borderRadius: '8px',
                          cursor: 'pointer',
                          background: isActive ? 'rgba(255, 45, 85, 0.06)' : 'transparent',
                          transition: 'all 0.2s ease',
                        }}
                        onMouseEnter={(e) => {
                          if (!isActive) e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.02)';
                        }}
                        onMouseLeave={(e) => {
                          if (!isActive) e.currentTarget.style.backgroundColor = 'transparent';
                        }}
                      >
                        <svg 
                          width="14" 
                          height="14" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          stroke={isActive ? '#FF2D55' : '#7A818F'} 
                          strokeWidth="2" 
                          style={{ flexShrink: 0 }}
                        >
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                        </svg>

                        <span style={{
                          fontSize: '0.85rem',
                          fontWeight: isActive ? 600 : 500,
                          color: isActive ? '#FF2D55' : '#4E5460',
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                        }}>
                          {course.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </aside>

      {/* ── MAIN CONTENT AREA ─────────────────── */}
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column', background: '#0D0F14', height: '100%', position: 'relative', overflowY: 'auto' }}>
        
        {/* Toggle Sidebar Button */}
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          style={{
            position: 'absolute',
            top: '20px',
            left: '20px',
            zIndex: 10,
            background: 'rgba(13, 15, 20, 0.85)',
            border: '1px solid rgba(255,255,255,0.15)',
            borderRadius: '10px',
            color: '#fff',
            width: '40px',
            height: '40px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backdropFilter: 'blur(8px)',
          }}
        >
          {sidebarOpen ? (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>

        {/* Dynamic Display Area */}
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '80px 40px 40px', boxSizing: 'border-box' }}>
          
          {activeCourse ? (
            /* ACTIVE STATE: Rendering the DOCX File Content dynamically */
            <div style={{ width: '100%', maxWidth: '740px', color: '#fff', alignSelf: 'flex-start' }}>
              <div style={{ marginBottom: '24px' }}>
                <span style={{ fontSize: '0.8rem', color: '#FF2D55', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Marable Core Curriculum</span>
                <h1 style={{ fontFamily: "'Sora', sans-serif", fontWeight: 800, fontSize: '2.4rem', marginTop: '6px', marginBottom: '12px', letterSpacing: '-0.02em', color: '#fff' }}>
                  {activeCourse.name}
                </h1>
                <hr style={{ border: 'none', borderTop: '1px solid rgba(255,255,255,0.1)' }} />
              </div>

              {loading && (
                <div style={{ textAlign: 'center', padding: '60px 0', color: 'rgba(255,255,255,0.4)' }}>
                  <div style={{ fontSize: '1.8rem', animation: 'spin 1.5s infinite linear', marginBottom: '12px' }}>🌀</div>
                  <p style={{ fontFamily: "'Sora', sans-serif", fontSize: '0.95rem' }}>Translating story documents to script...</p>
                </div>
              )}

              {error && (
                <div style={{ background: 'rgba(255,59,48,0.1)', border: '1px solid rgba(255,59,48,0.3)', borderRadius: '16px', padding: '24px', color: '#FF453A', textAlign: 'center' }}>
                  <span style={{ fontSize: '1.5rem', display: 'block', marginBottom: '8px' }}>⚠️</span>
                  <p style={{ fontWeight: 600, margin: '0 0 4px' }}>Document Loading Error</p>
                  <p style={{ fontSize: '0.85rem', color: 'rgba(255,69,58,0.8)', margin: 0 }}>{error}</p>
                </div>
              )}

              {/* RENDERED DOCX HTML CONTENT WITH PREMIUM READING STYLES */}
              {!loading && !error && storyHtml && (
                <article 
                  className="docx-story-content"
                  dangerouslySetInnerHTML={{ __html: storyHtml }} 
                  style={{
                    lineHeight: '1.85',
                    fontSize: '1.05rem',
                    color: '#E2E8F0',
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                />
              )}
            </div>
          ) : (
            /* DEFAULT WELCOME STATE: Displaying the Main Community Banner Image */
            <div style={{
              width: '100%',
              maxWidth: '1000px',
              height: '100%',
              maxHeight: '620px',
              borderRadius: '28px',
              overflow: 'hidden',
              boxShadow: '0 24px 64px rgba(0, 0, 0, 0.7)',
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <div style={{
                position: 'absolute',
                top: 0, left: 0, right: 0, bottom: 0,
                backgroundImage: 'url("/images/marable-community.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                filter: 'brightness(0.95)',
              }} />

              <div style={{
                position: 'absolute',
                top: 0, left: 0, right: 0, bottom: 0,
                background: 'linear-gradient(to top, rgba(13,15,20,0.85) 0%, rgba(13,15,20,0.15) 60%, rgba(13,15,20,0.5) 100%)',
              }} />

              <div style={{ position: 'absolute', bottom: '40px', textAlign: 'center', zIndex: 2, padding: '0 24px' }}>
                <p style={{ fontFamily: "'Sora', sans-serif", fontWeight: 800, fontSize: 'clamp(1.5rem, 3.5vw, 2.5rem)', color: '#FFFFFF', margin: '0 0 12px', textShadow: '0 4px 16px rgba(0,0,0,0.5)', letterSpacing: '-0.03em' }}>
                  Feel the concept. Master the science.
                </p>
                <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 'clamp(0.85rem, 1.5vw, 1rem)', maxWidth: '600px', margin: '0 auto', textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}>
                  Select any course from the left directory sidebar to instantly load its story.
                </p>
              </div>
            </div>
          )}

        </div>
      </main>

      {/* Basic styles to cleanly render your converted docx typographic tags (Headings, Paragraphs, Bolded Text, etc.) */}
      <style jsx global>{`
        .docx-story-content h1, .docx-story-content h2, .docx-story-content h3 {
          font-family: 'Sora', sans-serif !important;
          color: #ffffff !important;
          margin-top: 2rem !important;
          margin-bottom: 1rem !important;
          font-weight: 800 !important;
          letter-spacing: -0.02em;
        }
        .docx-story-content h1 { font-size: 1.8rem !important; }
        .docx-story-content h2 { font-size: 1.5rem !important; }
        .docx-story-content h3 { font-size: 1.25rem !important; }
        .docx-story-content p {
          margin-bottom: 1.5rem !important;
          color: rgba(255, 255, 255, 0.8) !important;
        }
        .docx-story-content strong {
          color: #FF2D55 !important; /* Emphasized words get a soft brand pink glow */
          font-weight: 700;
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}