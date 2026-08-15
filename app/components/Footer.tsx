export default function Footer() {
  return (
    <footer style={{ background: '#0D0F14', color: '#fff', marginTop: '80px' }}>
      <div style={{ maxWidth: '1120px', margin: '0 auto', padding: '48px 24px 36px' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '32px', marginBottom: '40px' }}>
          <div>
            <p style={{ fontFamily: "var(--font-sora), sans-serif", fontWeight: 800, fontSize: '1.25rem', marginBottom: '6px' }}>
              Pupil<span style={{ color: '#0A84FF' }}>MD</span>
            </p>
            <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.82rem', maxWidth: '220px', lineHeight: 1.6 }}>
              Learning Medicine By First Understanding
            </p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 18px', background: 'rgba(255,255,255,0.05)', borderRadius: '99px', border: '1px solid rgba(255,255,255,0.08)' }}>
            <span style={{ fontSize: '1rem' }}>✨</span>
            <span style={{ fontFamily: "var(--font-sora), sans-serif", fontWeight: 600, fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)' }}>
              Powered by <span style={{ color: '#fff' }}>Marable™</span>
            </span>
          </div>
        </div>
        <div style={{ height: '1px', background: 'rgba(255,255,255,0.07)', marginBottom: '28px' }} />
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '12px' }}>
          <p style={{ color: 'rgba(255,255,255,0.28)', fontSize: '0.78rem' }}>
            © {new Date().getFullYear()} PupilMD. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}