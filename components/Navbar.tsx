'use client'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { FEATURES } from '@/lib/features'

function useWidth() {
  const [w, setW] = useState(1200)
  useEffect(() => {
    const fn = () => setW(window.innerWidth)
    fn(); window.addEventListener('resize', fn)
    return () => window.removeEventListener('resize', fn)
  }, [])
  return w
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [featOpen, setFeatOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const featRef = useRef<HTMLDivElement>(null)
  const width = useWidth()
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

  useEffect(() => { if (!isMobile) setMenuOpen(false) }, [isMobile])

  const triangle = (
    <div style={{
      position: 'absolute', top: -6, left: '50%', transform: 'translateX(-50%)',
      borderLeft: '6px solid transparent', borderRight: '6px solid transparent',
      borderBottom: '6px solid #11131A',
    }} />
  )

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 200, height: 68,
        background: scrolled || menuOpen ? 'rgba(12,13,17,.94)' : 'transparent',
        backdropFilter: scrolled || menuOpen ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,.05)' : '1px solid transparent',
        transition: 'background .3s ease, border-color .3s ease',
      }}>
        <div style={{
          maxWidth: 1160, margin: '0 auto', height: '100%',
          padding: isMobile ? '0 20px' : '0 48px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16,
        }}>

          {/* LOGO */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center', flexShrink: 0, textDecoration: 'none' }}>
            <span style={{ fontSize: 19, fontWeight: 900, color: '#fff', letterSpacing: '-.02em' }}>
              Logary
            </span>
          </Link>

          {/* DESKTOP CENTER */}
          {!isMobile && (
            <div style={{ display: 'flex', alignItems: 'center', gap: 32, flex: 1, justifyContent: 'center' }}>
              <Link href="/about" style={{ color: 'var(--text2)', fontSize: 14, fontWeight: 500, textDecoration: 'none', transition: 'color .2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--text2)')}
              >
                About
              </Link>

              <div ref={featRef} style={{ position: 'relative' }}>
                <button onClick={() => setFeatOpen(o => !o)} style={{
                  display: 'flex', alignItems: 'center', gap: 6, padding: '6px 0', border: 'none',
                  background: 'transparent', color: featOpen ? '#fff' : 'var(--text2)',
                  fontSize: 14, fontWeight: 500, cursor: 'pointer', transition: 'color .2s',
                }}>
                  Features
                  <svg width="10" height="10" viewBox="0 0 12 12" fill="none"
                    style={{ opacity: featOpen ? 1 : 0.6, transition: 'transform .2s', transform: featOpen ? 'rotate(180deg)' : 'rotate(0)' }}>
                    <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>

                {featOpen && (
                  <div style={{
                    position: 'absolute', top: 'calc(100% + 18px)', left: '50%',
                    transform: 'translateX(-50%)', width: 420,
                    background: '#11131A', border: '1px solid rgba(255,255,255,.08)',
                    borderRadius: 16, boxShadow: '0 24px 50px rgba(0,0,0,.5)',
                    padding: '20px 24px', display: 'flex', flexDirection: 'column', gap: 4, zIndex: 300,
                  }}>
                    {triangle}
                    <div style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,.3)', letterSpacing: '.08em', marginBottom: 8, textTransform: 'uppercase' }}>
                      Explore Logary
                    </div>
                    {FEATURES.map(f => (
                      <Link key={f.slug} href={`/features/${f.slug}`} onClick={() => setFeatOpen(false)} style={{
                        display: 'flex', flexDirection: 'column', padding: '10px 14px',
                        borderRadius: 10, transition: 'all .18s ease',
                        textDecoration: 'none', borderLeft: '2px solid transparent',
                      }}
                        onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,.03)'; e.currentTarget.style.borderLeft = '2px solid #00D4FF' }}
                        onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderLeft = '2px solid transparent' }}
                      >
                        <div style={{ fontSize: 14, fontWeight: 600, color: '#fff', marginBottom: 3 }}>{f.name}</div>
                        <div style={{ fontSize: 12, color: 'var(--text3)', lineHeight: 1.4 }}>{f.tagline}</div>
                      </Link>
                    ))}
                    <div style={{ borderTop: '1px solid rgba(255,255,255,.06)', marginTop: 10, paddingTop: 14, paddingBottom: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <span style={{ fontSize: 12, color: 'var(--text3)' }}>Everything you need, in one place.</span>
                      <Link href="/#download" onClick={() => setFeatOpen(false)} style={{ fontSize: 12, fontWeight: 600, color: '#00D4FF', textDecoration: 'none' }}>
                        Download the app
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* RIGHT */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0 }}>
            {!isMobile && (
              <Link href="/#download" style={{
                display: 'inline-flex', alignItems: 'center', gap: 7,
                padding: '9px 20px', fontSize: 14, fontWeight: 700,
                background: 'linear-gradient(135deg,#00D4FF,#A259FF)',
                color: '#fff', borderRadius: 10, textDecoration: 'none',
                boxShadow: '0 4px 16px rgba(0,212,255,.25)', transition: 'all .2s',
              }}
                onMouseEnter={e => { e.currentTarget.style.opacity = '.9'; e.currentTarget.style.transform = 'translateY(-1px)' }}
                onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'translateY(0)' }}
              >
                Download Free
              </Link>
            )}

            {isMobile && (
              <button onClick={() => setMenuOpen(o => !o)} style={{
                width: 38, height: 38, borderRadius: 10,
                background: 'rgba(255,255,255,.07)', border: '1px solid rgba(255,255,255,.1)',
                display: 'flex', flexDirection: 'column', alignItems: 'center',
                justifyContent: 'center', gap: 5, cursor: 'pointer', transition: 'all .2s',
              }}>
                {menuOpen ? (
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M2 2l12 12M14 2L2 14" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" />
                  </svg>
                ) : (
                  <>
                    <div style={{ width: 16, height: 1.5, background: '#fff', borderRadius: 1 }} />
                    <div style={{ width: 11, height: 1.5, background: 'rgba(255,255,255,.5)', borderRadius: 1 }} />
                    <div style={{ width: 16, height: 1.5, background: '#fff', borderRadius: 1 }} />
                  </>
                )}
              </button>
            )}
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {isMobile && menuOpen && (
        <div style={{
          position: 'fixed', top: 68, left: 0, right: 0,
          background: 'rgba(10,11,16,.97)', backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(255,255,255,.07)',
          zIndex: 199, padding: '16px 20px 28px',
          overflowY: 'auto', maxHeight: 'calc(100vh - 68px)',
        }}>

          {/* Links */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2, marginBottom: 14 }}>
            <Link href="/about" onClick={() => setMenuOpen(false)} style={{
              padding: '12px 14px', fontSize: 15, fontWeight: 600,
              color: '#fff', textDecoration: 'none', borderRadius: 10, transition: 'background .15s',
            }}
              onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,.05)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
            >
              About
            </Link>
          </div>

          {/* Features */}
          <div style={{ borderTop: '1px solid rgba(255,255,255,.06)', paddingTop: 14, marginBottom: 20 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,.3)', textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 8, paddingLeft: 14 }}>
              Features
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {FEATURES.map(f => (
                <Link key={f.slug} href={`/features/${f.slug}`} onClick={() => setMenuOpen(false)} style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  padding: '11px 14px', borderRadius: 10, textDecoration: 'none', transition: 'background .15s',
                }}
                  onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,.05)')}
                  onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
                >
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 600, color: '#fff', marginBottom: 2 }}>{f.name}</div>
                    <div style={{ fontSize: 12, color: 'rgba(255,255,255,.4)' }}>{f.tagline}</div>
                  </div>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ flexShrink: 0, marginLeft: 8 }}>
                    <path d="M3 7h8M7 3l4 4-4 4" stroke="rgba(255,255,255,.25)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              ))}
            </div>
          </div>

          {/* Download CTA */}
          <div style={{ borderTop: '1px solid rgba(255,255,255,.06)', paddingTop: 18 }}>
            <Link href="/#download" onClick={() => setMenuOpen(false)} style={{
              display: 'block', textAlign: 'center', padding: '15px', borderRadius: 14,
              fontSize: 15, fontWeight: 800, background: 'linear-gradient(135deg,#00D4FF,#A259FF)',
              color: '#fff', textDecoration: 'none', boxShadow: '0 6px 20px rgba(0,212,255,.2)',
            }}>
              Download Free
            </Link>
            <p style={{ textAlign: 'center', fontSize: 12, color: 'rgba(255,255,255,.25)', marginTop: 10 }}>
              Free · iOS & Android
            </p>
          </div>
        </div>
      )}
    </>
  )
}