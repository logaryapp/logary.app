"use client"

import { useState, useEffect } from 'react'
import PhoneMockup from './PhoneMockup'

const STATS = [
  { val: '240K+', label: 'Active users' },
  { val: '4.8★',  label: 'App Store' },
  { val: 'Free',  label: 'To start' },
]

function useBreakpoint() {
  const [width, setWidth] = useState(1200)
  useEffect(() => {
    const fn = () => setWidth(window.innerWidth)
    fn(); window.addEventListener('resize', fn)
    return () => window.removeEventListener('resize', fn)
  }, [])
  return { isMobile: width < 768, isTablet: width < 1024 }
}

export default function Hero() {
  const { isMobile, isTablet } = useBreakpoint()

  return (
    <section style={{
      minHeight: isMobile ? 'auto' : '100vh',
      display: 'flex',
      flexDirection: isTablet ? 'column' : 'row',
      alignItems: 'center',
      justifyContent: 'center',
      padding: isMobile ? '56px 24px 64px' : isTablet ? '80px 40px' : '100px 40px 80px',
      maxWidth: 1160,
      margin: '0 auto',
      gap: isTablet ? 48 : 80,
    }}>
      <div style={{ flex: 1, minWidth: 0, textAlign: isTablet ? 'center' : 'left' }}>
        <h1 style={{
          fontFamily: 'Syne, sans-serif',
          fontSize: isMobile ? '2.2rem' : 'clamp(2.6rem, 4.5vw, 4.2rem)',
          fontWeight: 800, lineHeight: 1.08,
          letterSpacing: '-.03em', color: 'var(--text)',
          marginBottom: 20,
        }}>
          Track every game<br />
          you&apos;ve ever{' '}
          <em style={{ fontStyle: 'normal', color: 'var(--cyan)' }}>played.</em>
        </h1>
        <p style={{ fontSize: isMobile ? 15 : 17, color: 'var(--text2)', lineHeight: 1.65, maxWidth: isTablet ? '100%' : 460, marginBottom: 36 }}>
          Log your library, discover your Gaming DNA, and get personalized recommendations.
          The game tracker built for people who take gaming seriously.
        </p>
        <div style={{ display: 'flex', gap: 12, marginBottom: 48, flexWrap: 'wrap', justifyContent: isTablet ? 'center' : 'flex-start' }}>
          <a href="#download" style={{
            display: 'inline-flex', alignItems: 'center',
            padding: '13px 26px', borderRadius: 12, fontSize: 14, fontWeight: 800,
            background: 'linear-gradient(135deg,#00D4FF,#A259FF)', color: '#fff',
            textDecoration: 'none', boxShadow: '0 8px 28px rgba(0,212,255,.25)',
            transition: 'transform .2s, box-shadow .2s',
          }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(0,212,255,.35)' }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 28px rgba(0,212,255,.25)' }}
          >
            Download Logary
          </a>
          <a href="#features" style={{
            display: 'inline-flex', alignItems: 'center',
            padding: '13px 24px', borderRadius: 12, fontSize: 14, fontWeight: 600,
            background: 'rgba(255,255,255,.05)', border: '1px solid rgba(255,255,255,.09)',
            color: 'var(--text2)', textDecoration: 'none', transition: 'all .18s',
          }}>
            See features →
          </a>
        </div>

        <div style={{ display: 'flex', gap: isMobile ? 20 : 36, flexWrap: 'wrap', justifyContent: isTablet ? 'center' : 'flex-start' }}>
          {STATS.map((s, i) => (
            <div key={s.label} style={{ paddingLeft: 14, borderLeft: '2px solid var(--card)' }}>
              <span style={{ fontFamily: 'Syne, sans-serif', fontSize: isMobile ? 20 : 26, fontWeight: 700, color: 'var(--text)', display: 'block', marginBottom: 2 }}>{s.val}</span>
              <span style={{ fontSize: 12, color: 'var(--text3)', fontWeight: 500 }}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Phone mockup — hidden on mobile to save space */}
      {!isMobile && (
        <div style={{ flexShrink: 0, position: 'relative' }}>
          <div style={{
            position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)',
            width: 350, height: 350, borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0,212,255,0.18) 0%, transparent 65%)',
            filter: 'blur(40px)', zIndex: 0, pointerEvents: 'none',
          }} />
          <div style={{ position: 'relative', zIndex: 1 }}>
            <PhoneMockup />
          </div>
        </div>
      )}
    </section>
  )
}