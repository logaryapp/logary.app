"use client"
// ─── Footer ───────────────────────────────────────────────────────────────────

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { FEATURES } from '@/lib/features'

const NAV_LINKS = [
  { label: 'About',     href: '/about' },
  { label: 'Roadmap',   href: '/about#roadmap' },
  { label: 'Changelog', href: '/about#changelog' },
  { label: 'FAQ',       href: '/about#faq' },
  { label: 'Contact',   href: '/about#contact' },
  { label: 'Privacy',   href: '/about#privacy' },
  { label: 'Terms',     href: '/terms' },
]

const SOCIALS = [
  { label: 'Discord', href: 'https://discord.gg/SJNqjdqMd3', icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057c.002.022.015.043.03.052a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/></svg> },
]

function useBreakpoint() {
  const [width, setWidth] = useState(1200)
  useEffect(() => {
    const fn = () => setWidth(window.innerWidth)
    fn(); window.addEventListener('resize', fn)
    return () => window.removeEventListener('resize', fn)
  }, [])
  return { isMobile: width < 640 }
}

export function Footer() {
  const { isMobile } = useBreakpoint()

  if (isMobile) {
    return (
      <footer style={{ background: '#080A0E', borderTop: '1px solid rgba(255,255,255,.06)', padding: '20px 20px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 6, textDecoration: 'none' }}>
              <span style={{ fontSize: 13, fontWeight: 700, color: 'rgba(255,255,255,.4)' }}>Logary</span>
              <span style={{ fontSize: 12, color: 'rgba(255,255,255,.15)' }}>·</span>
              <span style={{ fontSize: 12, color: 'rgba(255,255,255,.2)' }}>© 2026</span>
            </Link>
            <div style={{ display: 'flex', gap: 2 }}>
              {SOCIALS.map(s => (
                <a key={s.label} target="_blank" href={s.href} aria-label={s.label} style={{ width: 28, height: 28, borderRadius: 7, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,.3)' }}>{s.icon}</a>
              ))}
            </div>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 0 }}>
            {NAV_LINKS.map((l, i) => (
              <span key={l.label} style={{ display: 'flex', alignItems: 'center' }}>
                <Link href={l.href} style={{ fontSize: 11, color: 'rgba(255,255,255,.28)', padding: '3px 7px', borderRadius: 5 }}>{l.label}</Link>
                {i < NAV_LINKS.length - 1 && <span style={{ fontSize: 10, color: 'rgba(255,255,255,.1)' }}>·</span>}
              </span>
            ))}
          </div>
        </div>
      </footer>
    )
  }

  return (
    <footer style={{ background: '#080A0E', borderTop: '1px solid rgba(255,255,255,.06)', padding: '18px 48px' }}>
      <div style={{ maxWidth: 1160, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexShrink: 0 }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 7, textDecoration: 'none' }}>
            <span style={{ fontSize: 13, fontWeight: 700, color: 'rgba(255,255,255,.4)' }}>Logary</span>
          </Link>
          <span style={{ fontSize: 12, color: 'rgba(255,255,255,.15)' }}>·</span>
          <span style={{ fontSize: 12, color: 'rgba(255,255,255,.2)' }}>© 2026</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 2, flexWrap: 'wrap', justifyContent: 'center' }}>
          {NAV_LINKS.map((l, i) => (
            <span key={l.label} style={{ display: 'flex', alignItems: 'center' }}>
              <Link href={l.href} style={{ fontSize: 12, color: 'rgba(255,255,255,.28)', padding: '3px 8px', borderRadius: 5, transition: 'color .15s' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,.75)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,.28)')}
              >{l.label}</Link>
              {i < NAV_LINKS.length - 1 && <span style={{ fontSize: 11, color: 'rgba(255,255,255,.1)', userSelect: 'none' }}>·</span>}
            </span>
          ))}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 2, flexShrink: 0 }}>
          {SOCIALS.map(s => (
            <a key={s.label} target="_blank" href={s.href} aria-label={s.label} style={{ width: 30, height: 30, borderRadius: 7, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,.25)', transition: 'color .15s, background .15s' }}
              onMouseEnter={e => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.background = 'rgba(255,255,255,.07)' }}
              onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,.25)'; e.currentTarget.style.background = 'transparent' }}
            >{s.icon}</a>
          ))}
        </div>
      </div>
    </footer>
  )
}

// ─── Navbar ───────────────────────────────────────────────────────────────────

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [featOpen, setFeatOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const featRef = useRef<HTMLDivElement>(null)
  const [width, setWidth] = useState(1200)

  useEffect(() => {
    const fn = () => setWidth(window.innerWidth)
    fn(); window.addEventListener('resize', fn)
    return () => window.removeEventListener('resize', fn)
  }, [])

  const isMobile = width < 768

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => {
    const fn = (e: MouseEvent) => {
      if (featRef.current && !featRef.current.contains(e.target as Node)) setFeatOpen(false)
    }
    document.addEventListener('mousedown', fn)
    return () => document.removeEventListener('mousedown', fn)
  }, [])

  // Close menu on resize to desktop
  useEffect(() => { if (!isMobile) setMenuOpen(false) }, [isMobile])

  const triangle = (
    <div style={{ position: 'absolute', top: -6, left: '50%', transform: 'translateX(-50%)', borderLeft: '6px solid transparent', borderRight: '6px solid transparent', borderBottom: '6px solid #11131A' }} />
  )

  return (
    <>
      <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 200, height: 68, background: scrolled || menuOpen ? 'rgba(12,13,17,.94)' : 'transparent', backdropFilter: scrolled || menuOpen ? 'blur(20px)' : 'none', borderBottom: scrolled ? '1px solid rgba(255,255,255,.05)' : '1px solid transparent', transition: 'all .3s ease' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto', height: '100%', padding: isMobile ? '0 20px' : '0 48px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>

          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0, textDecoration: 'none' }}>
            <span style={{ fontSize: 19, fontWeight: 900, color: '#fff', letterSpacing: '-.02em' }}>Logary</span>
          </Link>

          {/* Desktop center */}
          {!isMobile && (
            <div style={{ display: 'flex', alignItems: 'center', gap: 32, flex: 1, justifyContent: 'center' }}>
              <Link href="/about" style={{ color: 'var(--text2)', fontSize: 14, fontWeight: 500, textDecoration: 'none', transition: 'color .2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--text2)')}
              >About</Link>

              <div ref={featRef} style={{ position: 'relative' }}>
                <button onClick={() => setFeatOpen(o => !o)} style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '6px 0', border: 'none', background: 'transparent', color: featOpen ? '#fff' : 'var(--text2)', fontSize: 14, fontWeight: 500, cursor: 'pointer', transition: 'all .2s' }}>
                  Features
                  <svg width="10" height="10" viewBox="0 0 12 12" fill="none" style={{ transition: 'transform .2s', transform: featOpen ? 'rotate(180deg)' : 'rotate(0)' }}>
                    <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>

                {featOpen && (
                  <div style={{ position: 'absolute', top: 'calc(100% + 18px)', left: '50%', transform: 'translateX(-50%)', width: 420, background: '#11131A', border: '1px solid rgba(255,255,255,.08)', borderRadius: 16, boxShadow: '0 24px 50px rgba(0,0,0,.5)', padding: '20px 24px', display: 'flex', flexDirection: 'column', gap: 4, zIndex: 300 }}>
                    {triangle}
                    <div style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,.3)', letterSpacing: '0.08em', marginBottom: 6, textTransform: 'uppercase' }}>Explore Logary</div>
                    {FEATURES.map(f => (
                      <Link key={f.slug} href={`/features/${f.slug}`} onClick={() => setFeatOpen(false)} style={{ display: 'flex', flexDirection: 'column', padding: '10px 14px', borderRadius: 10, transition: 'all .2s ease', textDecoration: 'none', borderLeft: '2px solid transparent' }}
                        onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,.03)'; e.currentTarget.style.borderLeft = '2px solid #00D4FF' }}
                        onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderLeft = '2px solid transparent' }}
                      >
                        <div style={{ fontSize: 14, fontWeight: 600, color: '#fff', marginBottom: 3 }}>{f.name}</div>
                        <div style={{ fontSize: 12, color: 'var(--text3)', lineHeight: 1.4 }}>{f.tagline}</div>
                      </Link>
                    ))}
                    <div style={{ borderTop: '1px solid rgba(255,255,255,.06)', marginTop: 10, paddingTop: 14, paddingBottom: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <span style={{ fontSize: 12, color: 'var(--text3)' }}>Everything you need, in one place.</span>
                      <Link href="/#download" onClick={() => setFeatOpen(false)} style={{ fontSize: 12, fontWeight: 600, color: '#00D4FF', textDecoration: 'none' }}>Download →</Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0 }}>
            {!isMobile && (
              <Link href="/#download" style={{ display: 'inline-flex', alignItems: 'center', gap: 7, padding: '9px 20px', fontSize: 14, fontWeight: 700, background: 'linear-gradient(135deg, #00D4FF, #A259FF)', color: '#fff', borderRadius: 10, textDecoration: 'none', boxShadow: '0 4px 16px rgba(0,212,255,.25)', transition: 'all .2s' }}
                onMouseEnter={e => { e.currentTarget.style.opacity = '.9'; e.currentTarget.style.transform = 'translateY(-1px)' }}
                onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'translateY(0)' }}
              >
                Download Free
              </Link>
            )}

            {/* Mobile hamburger */}
            {isMobile && (
              <button onClick={() => setMenuOpen(o => !o)} style={{ width: 36, height: 36, borderRadius: 9, background: 'rgba(255,255,255,.07)', border: '1px solid rgba(255,255,255,.1)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 5, cursor: 'pointer' }}>
                {menuOpen ? (
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 2l12 12M14 2L2 14" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" /></svg>
                ) : (
                  <>
                    <div style={{ width: 16, height: 1.5, background: '#fff', borderRadius: 1 }} />
                    <div style={{ width: 12, height: 1.5, background: 'rgba(255,255,255,.6)', borderRadius: 1 }} />
                    <div style={{ width: 16, height: 1.5, background: '#fff', borderRadius: 1 }} />
                  </>
                )}
              </button>
            )}
          </div>
        </div>
      </nav>

      {/* Mobile menu dropdown */}
      {isMobile && menuOpen && (
        <div style={{ position: 'fixed', top: 68, left: 0, right: 0, background: 'rgba(12,13,17,.97)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(255,255,255,.06)', zIndex: 199, padding: '20px 20px 28px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            <Link href="/about" onClick={() => setMenuOpen(false)} style={{ padding: '12px 14px', fontSize: 15, fontWeight: 600, color: '#fff', textDecoration: 'none', borderRadius: 10 }}>About</Link>
            <div style={{ borderTop: '1px solid rgba(255,255,255,.06)', paddingTop: 12, marginTop: 4 }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,.3)', textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 8, paddingLeft: 14 }}>Features</div>
              {FEATURES.map(f => (
                <Link key={f.slug} href={`/features/${f.slug}`} onClick={() => setMenuOpen(false)} style={{ display: 'flex', flexDirection: 'column', padding: '10px 14px', borderRadius: 10, textDecoration: 'none', marginBottom: 2 }}>
                  <span style={{ fontSize: 14, fontWeight: 600, color: '#fff', marginBottom: 2 }}>{f.name}</span>
                  <span style={{ fontSize: 12, color: 'rgba(255,255,255,.4)' }}>{f.tagline}</span>
                </Link>
              ))}
            </div>
            <div style={{ borderTop: '1px solid rgba(255,255,255,.06)', paddingTop: 16, marginTop: 4 }}>
              <Link href="/#download" onClick={() => setMenuOpen(false)} style={{ display: 'block', textAlign: 'center', padding: '14px', borderRadius: 12, fontSize: 15, fontWeight: 800, background: 'linear-gradient(135deg,#00D4FF,#A259FF)', color: '#fff', textDecoration: 'none' }}>
                Download Free
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  )
}