'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { FEATURES } from '@/lib/features'

interface Props { slug: string }

function useBreakpoint() {
  const [width, setWidth] = useState(1200)
  useEffect(() => {
    const fn = () => setWidth(window.innerWidth)
    fn(); window.addEventListener('resize', fn)
    return () => window.removeEventListener('resize', fn)
  }, [])
  return { isMobile: width < 768, isTablet: width < 1024 }
}

function SectionVisual({ sectionIndex, feature }: { sectionIndex: number; feature: typeof FEATURES[0] }) {
  const { color, sections } = feature
  const section = sections[sectionIndex]

  return (
    <div style={{ background: '#0E0E18', border: '1px solid rgba(255,255,255,0.05)', borderRadius: 24, padding: '28px', minHeight: 180, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 18, paddingBottom: 14, borderBottom: '1px solid rgba(255,255,255,.05)' }}>
        <div>
          <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '.12em', fontWeight: 700, marginBottom: 2 }}>Logary Features</div>
          <div style={{ fontSize: 15, fontWeight: 800, color: '#fff', letterSpacing: '-0.01em' }}>{section.title}</div>
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
        {section.items.map((item, idx) => (
          <div key={item} style={{ background: 'rgba(255,255,255,.02)', border: `1px solid rgba(255,255,255,.04)`, borderLeft: `3px solid ${color}`, borderRadius: 10, padding: '12px 14px' }}>
            <div style={{ fontSize: 11, fontWeight: 800, color, marginBottom: 5 }}>0{idx + 1}</div>
            <div style={{ fontSize: 12, color: '#ccc', lineHeight: 1.6, fontWeight: 500 }}>{item}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function FeaturePage({ slug }: Props) {
  const { isMobile, isTablet } = useBreakpoint()
  const feature = FEATURES.find(f => f.slug === slug)!
  const others = FEATURES.filter(f => f.slug !== slug)

  return (
    <main style={{ paddingTop: 68, backgroundColor: '#08080F', minHeight: '100vh' }}>

      {/* HERO */}
      <section style={{ position: 'relative', overflow: 'hidden', padding: isMobile ? '72px 24px 64px' : '120px 32px 100px', background: '#08080F' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,.025) 1px, transparent 1px)', backgroundSize: '32px 32px', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', top: '-20%', left: '50%', transform: 'translateX(-50%)', width: isMobile ? 400 : 800, height: isMobile ? 400 : 800, borderRadius: '50%', background: `radial-gradient(circle, ${feature.color}09 0%, transparent 65%)`, pointerEvents: 'none' }} />

        <div style={{ maxWidth: 800, margin: '0 auto', position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <h1 style={{
            fontSize: isMobile ? '2.4rem' : 'clamp(3rem, 5vw, 4.5rem)',
            fontWeight: 900, lineHeight: 1.1, letterSpacing: '-0.03em', marginBottom: 20,
            background: 'linear-gradient(180deg, #FFFFFF 0%, rgba(255,255,255,0.7) 100%)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          }}>
            {feature.name}
          </h1>
          <p style={{ fontSize: isMobile ? 16 : 18, color: '#fff', lineHeight: 1.6, maxWidth: 600, margin: '0 auto 12px', fontWeight: 600 }}>{feature.tagline}</p>
          <p style={{ fontSize: isMobile ? 14 : 16, color: '#888', lineHeight: 1.75, maxWidth: 640, margin: '0 auto', fontWeight: 400 }}>{feature.hero}</p>
        </div>
      </section>

      {/* DETAIL SECTIONS */}
      {feature.sections.map((section, i) => (
        <section key={section.title} style={{
          background: i % 2 === 0 ? 'transparent' : '#0B0C10',
          padding: isMobile ? '64px 24px' : '100px 32px',
          borderTop: i % 2 !== 0 ? '1px solid rgba(255,255,255,0.02)' : 'none',
          borderBottom: i % 2 !== 0 ? '1px solid rgba(255,255,255,0.02)' : 'none',
        }}>
          <div style={{
            maxWidth: 1160, margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: isTablet ? '1fr' : '1fr 1fr',
            gap: isTablet ? 40 : 100,
            alignItems: 'center',
          }}>
            {/* Text */}
            <div style={{ order: isTablet ? 1 : (i % 2 === 0 ? 0 : 1) }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 18 }}>
                <div style={{ width: 28, height: 4, background: feature.gradient, borderRadius: 2 }} />
                <span style={{ fontSize: 11, fontWeight: 800, color: feature.color, textTransform: 'uppercase', letterSpacing: '.15em' }}>{feature.name}</span>
              </div>
              <h2 style={{ fontSize: isMobile ? '1.6rem' : 'clamp(2rem, 3.5vw, 2.5rem)', fontWeight: 900, letterSpacing: '-.03em', color: '#fff', marginBottom: 20, lineHeight: 1.15 }}>{section.title}</h2>
              <p style={{ fontSize: isMobile ? 14 : 16, color: '#aaa', lineHeight: 1.8, marginBottom: 28, fontWeight: 400 }}>{section.body}</p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 14, padding: 0 }}>
                {section.items.map(item => (
                  <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                    <div style={{ width: 22, height: 22, borderRadius: '50%', flexShrink: 0, marginTop: 2, background: feature.color + '15', border: `1px solid ${feature.color}40`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 5l2.5 2.5L8 2" stroke={feature.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </div>
                    <span style={{ fontSize: isMobile ? 13 : 15, color: '#ccc', lineHeight: 1.6, fontWeight: 500 }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Visual */}
            <div style={{ order: isTablet ? 2 : (i % 2 === 0 ? 1 : 0) }}>
              <SectionVisual sectionIndex={i} feature={feature} />
            </div>
          </div>
        </section>
      ))}

      {/* OTHER FEATURES */}
      <section style={{ background: '#0E0E18', padding: isMobile ? '64px 24px' : '100px 32px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto' }}>
          <h2 style={{ fontSize: isMobile ? '1.6rem' : '2rem', fontWeight: 900, color: '#fff', letterSpacing: '-.03em', marginBottom: 32 }}>Explore more features</h2>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(auto-fit, minmax(200px, 1fr))', gap: 12 }}>
            {others.map(f => (
              <Link key={f.slug} href={`/features/${f.slug}`} style={{ background: '#151520', border: '1px solid rgba(255,255,255,0.05)', borderRadius: 18, padding: isMobile ? '18px 14px' : '24px 20px', transition: 'all .2s ease', display: 'flex', flexDirection: 'column', textDecoration: 'none' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = f.color + '60'; e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.background = '#1A1A28' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.background = '#151520' }}
              >
                <div style={{ fontSize: isMobile ? 14 : 16, fontWeight: 800, color: '#fff', marginBottom: 6 }}>{f.name}</div>
                <div style={{ fontSize: isMobile ? 12 : 13, color: '#888', lineHeight: 1.55, fontWeight: 500 }}>{f.tagline}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: isMobile ? '64px 24px' : '100px 32px', textAlign: 'center', position: 'relative', overflow: 'hidden', background: '#08080F' }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 800, height: 400, borderRadius: '50%', background: `radial-gradient(ellipse, ${feature.color}10 0%, transparent 60%)`, filter: 'blur(50px)', pointerEvents: 'none' }} />
        <h2 style={{ fontSize: isMobile ? '1.8rem' : 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 900, letterSpacing: '-.04em', color: '#fff', marginBottom: 14, position: 'relative' }}>
          Ready to try{' '}
          <span style={{ background: feature.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{feature.name}</span>?
        </h2>
        <p style={{ fontSize: isMobile ? 15 : 18, color: '#aaa', marginBottom: 36, position: 'relative', fontWeight: 500 }}>Free to download. No credit card required.</p>
        <Link href="/#download" style={{
          display: 'inline-flex', alignItems: 'center', gap: 10,
          padding: isMobile ? '14px 28px' : '18px 42px', borderRadius: 16,
          fontSize: isMobile ? 14 : 16, fontWeight: 800,
          background: feature.gradient,
          color: feature.color === '#00E676' ? '#0A0A0F' : '#fff',
          boxShadow: `0 12px 40px ${feature.color}35`, position: 'relative', textDecoration: 'none',
          transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px) scale(1.02)'; e.currentTarget.style.boxShadow = `0 16px 50px ${feature.color}50` }}
          onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0) scale(1)'; e.currentTarget.style.boxShadow = `0 12px 40px ${feature.color}35` }}
        >
          Download Logary Free →
        </Link>
      </section>

    </main>
  )
}