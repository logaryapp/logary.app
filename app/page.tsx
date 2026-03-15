"use client";

import { useState, useEffect } from 'react'
import Link from 'next/link'
import PhoneMockup from '@/components/PhoneMockup'
import { FEATURES } from '@/lib/features'

const DNA_BARS = [
  { label: 'Action', pct: 34, grad: 'linear-gradient(90deg,#FF3B7A,#FF6B2B)', color: '#FF3B7A' },
  { label: 'Adventure', pct: 19, grad: 'linear-gradient(90deg,#A259FF,#7C3AED)', color: '#A259FF' },
  { label: 'RPG', pct: 13, grad: 'linear-gradient(90deg,#00D4FF,#0099CC)', color: '#00D4FF' },
  { label: 'Platformer', pct: 13, grad: 'linear-gradient(90deg,#00FF87,#00CC6A)', color: '#00E676' },
  { label: 'Arcade', pct: 9, grad: 'linear-gradient(90deg,#FFD600,#FFA000)', color: '#FFD600' },
  { label: 'Strategy', pct: 7, grad: 'linear-gradient(90deg,#FF6B2B,#E55000)', color: '#FF6B2B' },
]

const STATS = [
  { val: '847K+', label: 'Games' },
  { val: '240K+', label: 'Gamers' },
  { val: '18M+', label: 'Logged' },
  { val: '4.8★', label: 'Rating' },
]

function useBreakpoint() {
  const [width, setWidth] = useState(1200)
  useEffect(() => {
    const update = () => setWidth(window.innerWidth)
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])
  return { isMobile: width < 768, isTablet: width < 1024 }
}

export default function Home() {
  const { isMobile, isTablet } = useBreakpoint()

  return (
    <main style={{ paddingTop: 68, fontFamily: "'DM Sans', system-ui, sans-serif", backgroundColor: '#08080F', minHeight: '100vh' }}>

      {/* ── HERO ── */}
      <section style={{
        minHeight: isMobile ? 'auto' : '88vh',
        display: 'flex',
        flexDirection: isTablet ? 'column' : 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: isMobile ? '48px 24px 56px' : '80px 48px',
        maxWidth: 1160,
        margin: '0 auto',
        gap: isTablet ? 48 : 80,
      }}>
        <div style={{ flex: 1, minWidth: 0, textAlign: isTablet ? 'center' : 'left' }}>
          <h1 style={{
            fontSize: isMobile ? '2.2rem' : 'clamp(2.8rem, 5vw, 4.6rem)',
            fontWeight: 900, lineHeight: 1.05, letterSpacing: '-.03em',
            color: '#fff', marginBottom: 20,
          }}>
            Your entire gaming life,{' '}
            <span style={{ background: 'linear-gradient(90deg, #00D4FF, #A259FF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              tracked.
            </span>
          </h1>

          <p style={{
            fontSize: isMobile ? 15 : 17, color: 'rgba(255,255,255,0.65)',
            lineHeight: 1.75, maxWidth: isTablet ? '100%' : 460,
            marginBottom: 40, fontWeight: 500,
          }}>
            Log every game you play, discover your Gaming DNA,
            and get AI picks built around your unique taste.
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 52, justifyContent: isTablet ? 'center' : 'flex-start' }}>
            <a href="#download" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '14px 28px', borderRadius: 12, fontSize: 15, fontWeight: 800,
              background: 'linear-gradient(135deg,#00D4FF,#A259FF)', color: '#fff',
              boxShadow: '0 8px 28px rgba(0,212,255,.25)', transition: 'transform .2s, box-shadow .2s', textDecoration: 'none',
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(0,212,255,.35)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 28px rgba(0,212,255,.25)' }}
            >
              Download Logary
            </a>
          </div>

          <div style={{ display: 'flex', gap: isMobile ? 16 : 32, justifyContent: isTablet ? 'center' : 'flex-start', flexWrap: 'wrap' }}>
            {STATS.map((s, i) => (
              <div key={s.label} style={{
                paddingRight: i < STATS.length - 1 ? (isMobile ? 16 : 32) : 0,
                borderRight: i < STATS.length - 1 ? '1px solid rgba(255,255,255,.07)' : 'none',
              }}>
                <div style={{ fontSize: isMobile ? 18 : 22, fontWeight: 900, color: '#fff', letterSpacing: '-.02em' }}>{s.val}</div>
                <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)', marginTop: 4, letterSpacing: '.04em', fontWeight: 600 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {!isMobile && (
          <div style={{ flexShrink: 0, position: 'relative' }}>
            <div style={{
              position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
              width: 350, height: 350, borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(0,212,255,0.2) 0%, transparent 65%)',
              filter: 'blur(40px)', zIndex: 0, pointerEvents: 'none',
            }} />
            <div style={{ position: 'relative', zIndex: 1 }}>
              <PhoneMockup />
            </div>
          </div>
        )}
      </section>

      {/* ── FEATURES ── */}
      <section style={{ background: '#0E0E18', padding: isMobile ? '64px 24px' : '96px 48px', borderTop: '1px solid rgba(255,255,255,0.03)' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto' }}>
          <div style={{ marginBottom: 48, textAlign: isMobile ? 'center' : 'left' }}>
            <p style={{ fontSize: 12, fontWeight: 800, color: '#00D4FF', textTransform: 'uppercase', letterSpacing: '.15em', marginBottom: 12 }}>Features</p>
            <h2 style={{ fontSize: isMobile ? '1.8rem' : 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 900, letterSpacing: '-.03em', color: '#fff', marginBottom: 12, lineHeight: 1.12 }}>
              Built for serious gamers
            </h2>
            <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.6)', maxWidth: 440, fontWeight: 500, margin: isMobile ? '0 auto' : '0' }}>
              Six powerful features, all free to start.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2,1fr)' : 'repeat(3,1fr)',
            gap: 12,
          }}>
            {FEATURES.map(f => (
              <Link key={f.slug} href={`/features/${f.slug}`} style={{
                background: '#151520', border: '1px solid rgba(255,255,255,0.05)',
                borderRadius: 20, padding: '28px 24px', display: 'block',
                transition: 'border-color .2s, transform .2s, background .2s', textDecoration: 'none',
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = f.color + '50'; e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.background = '#1A1A28' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,.05)'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.background = '#151520' }}
              >
                <h3 style={{ fontSize: 16, fontWeight: 800, color: '#fff', marginBottom: 8, letterSpacing: '-0.01em' }}>{f.name}</h3>
                <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', lineHeight: 1.65, marginBottom: 24, fontWeight: 500 }}>{f.description}</p>
                <span style={{ fontSize: 13, fontWeight: 800, color: f.color, letterSpacing: '.02em' }}>Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── GAMING DNA ── */}
      <section style={{ padding: isMobile ? '64px 24px' : '120px 48px', maxWidth: 1160, margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: isTablet ? '1fr' : '1fr 1fr',
          gap: isTablet ? 40 : 80,
          alignItems: 'center',
        }}>
          {/* DNA Card */}
          <div style={{
            background: '#0E0E18', border: '1px solid rgba(0,212,255,.15)',
            borderRadius: 24, padding: isMobile ? '24px 20px' : '32px 28px',
            boxShadow: '0 24px 60px rgba(0,0,0,0.4)',
            order: isTablet ? 2 : 1,
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 28 }}>
              <div style={{ width: 36, height: 36, borderRadius: 10, background: 'linear-gradient(135deg,#00D4FF,#A259FF)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18 }}>🧬</div>
              <div>
                <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '.12em', fontWeight: 700, marginBottom: 2 }}>Gaming DNA</div>
                <div style={{ fontSize: 15, fontWeight: 800, color: '#fff' }}>ademcertel</div>
              </div>
              <div style={{ marginLeft: 'auto' }}>
                <span style={{ fontSize: 10, fontWeight: 800, color: '#00D4FF', background: 'rgba(0,212,255,.1)', border: '1px solid rgba(0,212,255,.25)', padding: '4px 12px', borderRadius: 100, letterSpacing: '.06em' }}>Live</span>
              </div>
            </div>
            {DNA_BARS.map((row, i) => (
              <div key={row.label} style={{ marginBottom: i < DNA_BARS.length - 1 ? 14 : 0 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                  <span style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase', letterSpacing: '.08em' }}>{row.label}</span>
                  <span style={{ fontSize: 12, fontWeight: 800, color: row.color }}>{row.pct}%</span>
                </div>
                <div style={{ height: 8, background: 'rgba(255,255,255,.05)', borderRadius: 4, overflow: 'hidden' }}>
                  <div style={{ height: '100%', width: `${row.pct}%`, background: row.grad, borderRadius: 4 }} />
                </div>
              </div>
            ))}
            <div style={{ display: 'flex', marginTop: 28, paddingTop: 22, borderTop: '1px solid rgba(255,255,255,.06)' }}>
              {[{ val: '98', label: 'Played', color: '#FF3B7A' }, { val: '7.4', label: 'Avg rating', color: '#00D4FF' }, { val: '20', label: 'Backlog', color: '#A259FF' }].map((s, i, arr) => (
                <div key={s.label} style={{ flex: 1, textAlign: 'center', borderRight: i < arr.length - 1 ? '1px solid rgba(255,255,255,.06)' : 'none' }}>
                  <div style={{ fontSize: isMobile ? 20 : 24, fontWeight: 900, color: s.color }}>{s.val}</div>
                  <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.5)', marginTop: 4, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Copy */}
          <div style={{ order: isTablet ? 1 : 2, textAlign: isTablet ? 'center' : 'left' }}>
            <p style={{ fontSize: 12, fontWeight: 800, color: '#00D4FF', textTransform: 'uppercase', letterSpacing: '.15em', marginBottom: 16 }}>Gaming DNA</p>
            <h2 style={{ fontSize: isMobile ? '1.8rem' : 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 900, letterSpacing: '-.03em', color: '#fff', lineHeight: 1.1, marginBottom: 20 }}>
              Discover the gamer<br />you actually are.
            </h2>
            <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, marginBottom: 28, fontWeight: 500 }}>
              You think you&apos;re an RPG fan, but are you really? Gaming DNA analyzes every game you&apos;ve ever logged and gives you a live breakdown of your true genre identity.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, alignItems: isTablet ? 'center' : 'flex-start' }}>
              {['Updates automatically with every game logged', 'Covers 20+ genre categories', 'Compare your DNA with friends', 'Powers your personalized AI recommendations'].map(item => (
                <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div style={{ width: 18, height: 18, borderRadius: '50%', background: 'rgba(0,212,255,.1)', border: '1px solid rgba(0,212,255,.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <svg width="9" height="9" viewBox="0 0 10 10" fill="none"><path d="M2 5l2.5 2.5L8 2" stroke="#00D4FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </div>
                  <span style={{ fontSize: 14, color: '#ccc', fontWeight: 500 }}>{item}</span>
                </div>
              ))}
            </div>
            <Link href="/features/gaming-dna" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8, marginTop: 28,
              padding: '12px 24px', borderRadius: 12, fontSize: 14, fontWeight: 800,
              background: 'rgba(0,212,255,.08)', border: '1px solid rgba(0,212,255,.2)',
              color: '#00D4FF', transition: 'all .2s', textDecoration: 'none',
            }}
              onMouseEnter={e => (e.currentTarget.style.background = 'rgba(0,212,255,.15)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'rgba(0,212,255,.08)')}
            >
              Learn about Gaming DNA →
            </Link>
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section id="pricing" style={{ background: '#0E0E18', padding: isMobile ? '64px 24px' : '120px 48px', borderTop: '1px solid rgba(255,255,255,0.03)' }}>
        <div style={{ maxWidth: 480, margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: 12, fontWeight: 800, color: '#00D4FF', textTransform: 'uppercase', letterSpacing: '.15em', marginBottom: 16 }}>Pricing</p>
          <h2 style={{ fontSize: isMobile ? '1.8rem' : 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 900, letterSpacing: '-.03em', color: '#fff', marginBottom: 12, lineHeight: 1.1 }}>
            Start free. Upgrade anytime.
          </h2>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.6)', marginBottom: 48, fontWeight: 500 }}>
            No credit card required. All core tracking features are free forever.
          </p>
          <div style={{ background: '#151520', border: '1px solid rgba(0,212,255,.3)', borderRadius: 24, padding: isMobile ? '32px 20px' : '40px 32px', position: 'relative', boxShadow: '0 24px 80px rgba(0,212,255,.08)' }}>
            <div style={{ position: 'absolute', top: -14, left: '50%', transform: 'translateX(-50%)', background: 'linear-gradient(135deg,#00D4FF,#A259FF)', color: '#fff', fontSize: 11, fontWeight: 800, padding: '6px 16px', borderRadius: 100, letterSpacing: '.08em', whiteSpace: 'nowrap', boxShadow: '0 4px 12px rgba(162,89,255,0.3)' }}>
              FOR POWER GAMERS
            </div>
            <div style={{ fontSize: 12, fontWeight: 800, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '.15em', marginBottom: 12 }}>Logary PRO</div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginBottom: 8, justifyContent: 'center' }}>
              <span style={{ fontSize: isMobile ? 40 : 48, fontWeight: 900, color: '#fff', letterSpacing: '-.04em' }}>$2.99</span>
              <span style={{ fontSize: 15, color: 'rgba(255,255,255,0.4)', fontWeight: 600 }}>/month</span>
            </div>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', marginBottom: 32, fontWeight: 500 }}>The ultimate toolkit for serious gamers tracking everything. Supported via Patreon.</p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 40, textAlign: 'left', padding: 0 }}>
              {['Custom Library Covers', 'Deep All-Time Stats', 'Expanded 10-Game Showcase', 'Colored Username & PRO Badge'].map(f => (
                <li key={f} style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 14, color: '#ccc', fontWeight: 500 }}>
                  <div style={{ width: 20, height: 20, borderRadius: '50%', background: 'rgba(0,212,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <svg width="10" height="10" viewBox="0 0 14 14" fill="none"><path d="M2 7l3.5 3.5L12 3" stroke="#00D4FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </div>
                  {f}
                </li>
              ))}
            </ul>
            <a href="https://www.patreon.com/cw/logary" target="_blank" rel="noreferrer" style={{ display: 'block', textAlign: 'center', padding: '16px', borderRadius: 14, fontSize: 15, fontWeight: 800, background: 'linear-gradient(135deg,#00D4FF,#A259FF)', color: '#fff', transition: 'transform .2s, box-shadow .2s', textDecoration: 'none' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(162,89,255,0.3)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none' }}
            >
              Unlock PRO
            </a>
          </div>
        </div>
      </section>

      {/* ── DOWNLOAD ── */}
      <section id="download" style={{ padding: isMobile ? '64px 24px' : '120px 48px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 800, height: 400, borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(0,212,255,0.08) 0%, transparent 60%)', filter: 'blur(50px)', pointerEvents: 'none', zIndex: 0 }} />
        <div style={{ maxWidth: 640, margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <h2 style={{ fontSize: isMobile ? '2rem' : 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900, letterSpacing: '-.04em', color: '#fff', lineHeight: 1.05, marginBottom: 20 }}>
            Your backlog{' '}
            <span style={{ background: 'linear-gradient(90deg,#00D4FF,#A259FF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              won&apos;t track itself.
            </span>
          </h2>
          <p style={{ fontSize: isMobile ? 15 : 18, color: 'rgba(255,255,255,0.6)', lineHeight: 1.6, marginBottom: 48, fontWeight: 500 }}>
            Join 240,000+ gamers who know exactly what they&apos;ve played, what&apos;s next, and who they are as a gamer.
          </p>

          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#" style={{
              display: 'flex', alignItems: 'center', gap: isMobile ? 12 : 16,
              padding: isMobile ? '14px 24px' : '16px 32px', borderRadius: 16,
              background: '#0E0E18', border: '1px solid rgba(255,255,255,.1)',
              transition: 'border-color .2s, background .2s', textDecoration: 'none',
              flex: isMobile ? '1 1 140px' : 'none',
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,.3)'; e.currentTarget.style.background = '#151520' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,.1)'; e.currentTarget.style.background = '#0E0E18' }}
            >
              <svg width={isMobile ? 22 : 28} height={isMobile ? 22 : 28} viewBox="0 0 24 24" fill="white">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.5)', marginBottom: 2, fontWeight: 600 }}>Download on the</div>
                <div style={{ fontSize: isMobile ? 14 : 16, fontWeight: 800, color: '#fff', letterSpacing: '-0.02em' }}>App Store</div>
              </div>
            </a>

            <a href="#" style={{
              display: 'flex', alignItems: 'center', gap: isMobile ? 12 : 16,
              padding: isMobile ? '14px 24px' : '16px 32px', borderRadius: 16,
              background: '#0E0E18', border: '1px solid rgba(255,255,255,.1)',
              transition: 'border-color .2s, background .2s', textDecoration: 'none',
              flex: isMobile ? '1 1 140px' : 'none',
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,.3)'; e.currentTarget.style.background = '#151520' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,.1)'; e.currentTarget.style.background = '#0E0E18' }}
            >
              <img src="/google-play-store-icon.svg" width={isMobile ? 22 : 26} height={isMobile ? 22 : 26} alt="Google Play" style={{ flexShrink: 0 }} />
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.5)', marginBottom: 2, fontWeight: 600 }}>Get it on</div>
                <div style={{ fontSize: isMobile ? 14 : 16, fontWeight: 800, color: '#fff', letterSpacing: '-0.02em' }}>Google Play</div>
              </div>
            </a>
          </div>

          <p style={{ fontSize: 12, color: 'rgba(255,255,255,.2)', marginTop: 20 }}>Free · iOS & Android · Works offline</p>
        </div>
      </section>

    </main>
  )
}