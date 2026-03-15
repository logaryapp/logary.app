"use client"

import { useState, useEffect } from 'react'

const SECTIONS = [
  { id: 'about',     label: 'About Us' },
  { id: 'roadmap',   label: 'Roadmap' },
  { id: 'changelog', label: 'Changelog' },
  { id: 'faq',       label: 'FAQ' },
  { id: 'contact',   label: 'Contact' },
  { id: 'privacy',   label: 'Privacy & Terms' },
]

const ROADMAP = [
  { status: 'done',    label: 'Game Library & Deep Logging', q: 'Done' },
  { status: 'done',    label: 'Community & Social Interactions', q: 'Done' },
  { status: 'done',    label: 'Steam Library Integration', q: 'Done' },
  { status: 'done',    label: 'Logary PRO & Patreon Auto-Sync', q: 'Done' },
  { status: 'done',    label: 'Logy AI — Discord Bot Connected to DB', q: 'Done' },
  { status: 'active',  label: 'Interactive Social Feed — Clickable profiles & @tags', q: 'This Week' },
  { status: 'active',  label: 'Quick-Access Lists — Tap home stats to open libraries', q: 'This Week' },
  { status: 'active',  label: 'Logary V1.0.0 Global Launch', q: 'Q2 2026' },
  { status: 'active',  label: 'Console sync — Full PSN & Xbox import', q: 'Q3 2026' },
  { status: 'soon',    label: 'Logary Web — Browser companion', q: 'Q4 2026' },
  { status: 'planned', label: 'Gaming Clubs & Sub-communities', q: 'Late 2026' },
  { status: 'planned', label: 'In-App Logy AI Assistant', q: '2027' },
  { status: 'planned', label: 'API for developers', q: '2027' },
]

const CHANGELOG = [
  {
    version: 'v0.9.9', date: 'March 2026', tag: 'Bug Hunter Edition',
    items: ['Logary PRO & Patreon Integration: Automatic PRO verification via email linking.', 'Discord Account Linking System: Secure your community access with /verify.', 'Library Banners: PRO members can now upload custom covers for their logged games.', 'Complete All-Time Stats: Fully synchronized deep statistics and true playtimes.', 'UI/UX Polishes: Bottom navigation bar stabilized, top header refined.'],
  },
  {
    version: 'v0.9.8', date: 'March 2026', tag: 'Community & AI',
    items: ['Community Tab Launched: Post updates, share screenshots, and like individual comments.', 'Meet Logy AI: Custom-coded local LLM Discord bot directly synced with the app database.', 'Storage Upgrade: Migrated to dedicated Firebase Storage for lightning-fast image uploads.', 'Total UI/UX Overhaul: Home, Search, Profile, and Game Detail pages rebuilt.'],
  },
  {
    version: 'v0.9.5', date: 'February 2026',
    items: ['Gaming DNA: Live analytics of your gaming tastes displayed like RPG skill bars.', 'Gaming Identity Hub: Add your Steam, PSN, Xbox, and Switch IDs for easy sharing.', 'Zero Loading Screens: Destroyed the infinite loading bug; databases now load instantly.'],
  },
  {
    version: 'v0.9.0', date: 'Early 2026',
    items: ['The "Top Shelf" Showcase: Display your all-time favorite masterpieces.', 'Deep Logging & Reviews: Track exact hours played, detailed play statuses, and write full reviews.', 'Social Interactions: Follow friends, create custom lists, and get instantly pinged by notifications.'],
  },
]

const FAQ = [
  { q: 'What is Logary?', a: 'Logary is a combination of "Log" and "Diary" — your personal digital gaming diary where you can track games you\'ve played, finished, or plan to play.' },
  { q: 'Why is the app free and ad-free?', a: 'Logary is my passion project. I have a day job that pays the bills. Providing a clean, ad-free space for gamers is my way of giving back to the community.' },
  { q: 'What is Logary PRO?', a: 'Core features will always remain free. PRO is for those who want to stand out on their profile and support ongoing development. Revenue goes directly toward server and API costs.' },
  { q: 'Can I sync my Steam or console accounts?', a: 'Steam integration is already live! PlayStation and Xbox are trickier due to closed ecosystems, but we\'re actively researching ways to connect them.' },
  { q: 'Who is Logy (the Discord Bot)?', a: 'Logy is our official AI-powered gaming assistant, fully connected to our app\'s database. Use "logy profile" to generate a gamer card or "logy suggest" for recommendations.' },
  { q: 'When is the next update?', a: 'Solo dev life is unpredictable! We aim to push minor tweaks frequently and add a major feature every month. Join our Discord to stay updated.' },
]

const STATUS_STYLE: Record<string, { color: string; bg: string; label: string }> = {
  done:    { color: '#00E676', bg: 'rgba(0,230,118,.1)',  label: 'Done' },
  active:  { color: '#00D4FF', bg: 'rgba(0,212,255,.1)',  label: 'In progress' },
  soon:    { color: '#A259FF', bg: 'rgba(162,89,255,.1)', label: 'Soon' },
  planned: { color: 'rgba(255,255,255,.3)', bg: 'rgba(255,255,255,.05)', label: 'Planned' },
}

function useBreakpoint() {
  const [width, setWidth] = useState(1200)
  useEffect(() => {
    const fn = () => setWidth(window.innerWidth)
    fn(); window.addEventListener('resize', fn)
    return () => window.removeEventListener('resize', fn)
  }, [])
  return { isMobile: width < 768, isTablet: width < 1024 }
}

export default function AboutPage() {
  const [active, setActive] = useState('about')
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const { isMobile } = useBreakpoint()

  useEffect(() => {
    const hash = window.location.hash.replace('#', '')
    if (hash) setActive(hash)
  }, [])

  const scrollTo = (id: string) => {
    setActive(id); setDrawerOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    window.history.replaceState(null, '', `#${id}`)
  }

  const SectionBadge = ({ label, color, bg, border }: { label: string; color: string; bg: string; border: string }) => (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 16, padding: '5px 12px', borderRadius: 100, background: bg, border }}>
      <span style={{ fontSize: 11, fontWeight: 700, color, letterSpacing: '.08em' }}>{label}</span>
    </div>
  )

  const SectionTitle = ({ children }: { children: React.ReactNode }) => (
    <h2 style={{ fontSize: isMobile ? '1.5rem' : 'clamp(1.6rem,3vw,2.2rem)', fontWeight: 800, letterSpacing: '-.03em', color: '#fff', marginBottom: 8, lineHeight: 1.1 }}>{children}</h2>
  )

  const SectionSub = ({ children }: { children: React.ReactNode }) => (
    <p style={{ fontSize: 14, color: 'var(--text3)', marginBottom: 28, lineHeight: 1.7 }}>{children}</p>
  )

  const Nav = () => (
    <>
      <div style={{ fontSize: 10, fontWeight: 700, color: 'rgba(255,255,255,.25)', textTransform: 'uppercase', letterSpacing: '.14em', marginBottom: 14 }}>Navigation</div>
      <nav style={{ display: 'flex', flexDirection: 'column', gap: 2, marginBottom: 24 }}>
        {SECTIONS.map(s => (
          <button key={s.id} onClick={() => scrollTo(s.id)} style={{
            display: 'flex', alignItems: 'center', padding: '9px 12px', borderRadius: 8,
            border: 'none', borderLeft: active === s.id ? '2px solid #00D4FF' : '2px solid transparent',
            background: active === s.id ? 'rgba(0,212,255,.08)' : 'transparent',
            cursor: 'pointer', textAlign: 'left', transition: 'all .15s',
          }}>
            <span style={{ fontSize: 13, fontWeight: active === s.id ? 600 : 400, color: active === s.id ? '#fff' : 'rgba(255,255,255,.4)' }}>{s.label}</span>
          </button>
        ))}
      </nav>
      <div style={{ padding: '14px', borderRadius: 12, background: 'rgba(0,212,255,.05)', border: '1px solid rgba(0,212,255,.12)' }}>
        <div style={{ fontSize: 11, fontWeight: 700, color: '#00D4FF', marginBottom: 6 }}>Need help?</div>
        <p style={{ fontSize: 12, color: 'var(--text3)', lineHeight: 1.6, marginBottom: 8 }}>Join our Discord or send us a message.</p>
        <a href="https://discord.gg/SJNqjdqMd3" style={{ fontSize: 12, fontWeight: 600, color: '#00D4FF' }}>Open Discord →</a>
      </div>
    </>
  )

  return (
    <main style={{ paddingTop: 68, minHeight: '100vh' }}>

      {/* Mobile section picker */}
      {isMobile && (
        <div style={{ position: 'sticky', top: 68, zIndex: 100, background: 'rgba(8,8,15,.96)', backdropFilter: 'blur(16px)', borderBottom: '1px solid rgba(255,255,255,.06)', padding: '10px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ fontSize: 13, fontWeight: 600, color: '#fff' }}>{SECTIONS.find(s => s.id === active)?.label}</span>
          <button onClick={() => setDrawerOpen(o => !o)} style={{ padding: '6px 12px', borderRadius: 8, background: 'rgba(0,212,255,.08)', border: '1px solid rgba(0,212,255,.18)', color: '#00D4FF', fontSize: 12, fontWeight: 700, cursor: 'pointer' }}>
            {drawerOpen ? '✕ Close' : '☰ Jump to'}
          </button>
        </div>
      )}

      {/* Mobile drawer overlay */}
      {isMobile && drawerOpen && (
        <div style={{ position: 'fixed', top: 113, left: 0, right: 0, bottom: 0, background: 'rgba(8,8,15,.97)', backdropFilter: 'blur(20px)', zIndex: 99, padding: '24px 20px', overflowY: 'auto' }}>
          <Nav />
        </div>
      )}

      <div style={{ maxWidth: 1160, margin: '0 auto', padding: isMobile ? '28px 20px' : '48px 48px', display: 'flex', gap: 56, alignItems: 'flex-start' }}>

        {/* Desktop sidebar */}
        {!isMobile && (
          <aside style={{ width: 200, flexShrink: 0, position: 'sticky', top: 88 }}><Nav /></aside>
        )}

        {/* Main content */}
        <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: isMobile ? 52 : 80 }}>

          {/* ABOUT */}
          <section id="about" style={{ scrollMarginTop: isMobile ? 130 : 88 }}>
            <SectionBadge label="ABOUT US" color="#00D4FF" bg="rgba(0,212,255,.08)" border="1px solid rgba(0,212,255,.15)" />
            <SectionTitle>We built the app we always wanted.</SectionTitle>
            <SectionSub>Logary started as a personal diary. Now it's evolving into a community-driven gaming network.</SectionSub>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 20 }}>
              {[{ val: '847K+', label: 'Games in database', color: '#00D4FF' }, { val: 'v0.9.9', label: 'Current Beta Build', color: '#A259FF' }, { val: 'Synced', label: 'Logy AI Integration', color: '#00E676' }, { val: 'Live', label: 'Steam Sync', color: '#FFD600' }].map(s => (
                <div key={s.label} style={{ background: 'var(--card)', border: '1px solid rgba(255,255,255,.07)', borderRadius: 12, padding: isMobile ? '14px' : '20px 22px' }}>
                  <div style={{ fontSize: isMobile ? 20 : 26, fontWeight: 800, color: s.color, marginBottom: 4 }}>{s.val}</div>
                  <div style={{ fontSize: 11, color: 'var(--text3)' }}>{s.label}</div>
                </div>
              ))}
            </div>
            <div style={{ background: 'var(--card)', border: '1px solid rgba(255,255,255,.07)', borderRadius: 16, padding: isMobile ? '18px' : '24px 28px' }}>
              <p style={{ fontSize: 14, color: 'var(--text2)', lineHeight: 1.8, marginBottom: 12 }}>Logary was born out of frustration. We kept losing track of games we'd played, wanted to play, or had forgotten about. Spreadsheets were messy. Other apps were either too simple or aimed at a completely different audience.</p>
              <p style={{ fontSize: 14, color: 'var(--text2)', lineHeight: 1.8 }}>We built Logary for people who take gaming seriously — built alongside our active Discord community, meaning every feature comes straight from real gamers' feedback.</p>
            </div>
          </section>

          {/* ROADMAP */}
          <section id="roadmap" style={{ scrollMarginTop: isMobile ? 130 : 88 }}>
            <SectionBadge label="ROADMAP" color="#A259FF" bg="rgba(162,89,255,.08)" border="1px solid rgba(162,89,255,.15)" />
            <SectionTitle>What we're building.</SectionTitle>
            <SectionSub>Our public roadmap — built alongside our community.</SectionSub>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              {ROADMAP.map((item, i) => {
                const s = STATUS_STYLE[item.status]
                return (
                  <div key={i} style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', alignItems: isMobile ? 'flex-start' : 'center', justifyContent: 'space-between', gap: isMobile ? 6 : 0, padding: '11px 14px', borderRadius: 10, background: 'var(--card)', border: '1px solid rgba(255,255,255,.07)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                      <div style={{ width: 7, height: 7, borderRadius: '50%', background: s.color, flexShrink: 0 }} />
                      <span style={{ fontSize: 13, color: item.status === 'planned' ? 'var(--text3)' : 'var(--text2)' }}>{item.label}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, paddingLeft: isMobile ? 17 : 16, flexShrink: 0 }}>
                      <span style={{ fontSize: 11, color: 'var(--text3)' }}>{item.q}</span>
                      <span style={{ fontSize: 10, fontWeight: 700, color: s.color, background: s.bg, padding: '2px 8px', borderRadius: 100 }}>{s.label}</span>
                    </div>
                  </div>
                )
              })}
            </div>
          </section>

          {/* CHANGELOG */}
          <section id="changelog" style={{ scrollMarginTop: isMobile ? 130 : 88 }}>
            <SectionBadge label="CHANGELOG" color="#00E676" bg="rgba(0,230,118,.08)" border="1px solid rgba(0,230,118,.15)" />
            <SectionTitle>What's new.</SectionTitle>
            <SectionSub>Every major feature update, leading up to V1.</SectionSub>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {CHANGELOG.map((c, i) => (
                <div key={i} style={{ background: 'var(--card)', border: '1px solid rgba(255,255,255,.07)', borderRadius: 16, padding: isMobile ? '16px' : '22px 24px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12, flexWrap: 'wrap' }}>
                    <span style={{ fontSize: 14, fontWeight: 800, color: '#fff' }}>{c.version}</span>
                    {c.tag && <span style={{ fontSize: 10, fontWeight: 700, color: '#00D4FF', background: 'rgba(0,212,255,.1)', padding: '2px 8px', borderRadius: 100 }}>{c.tag}</span>}
                    <span style={{ fontSize: 11, color: 'var(--text3)', marginLeft: 'auto' }}>{c.date}</span>
                  </div>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 7 }}>
                    {c.items.map((item, j) => (
                      <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: 13, color: 'var(--text2)', lineHeight: 1.6 }}>
                        <span style={{ color: '#00E676', flexShrink: 0 }}>✦</span>{item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section id="faq" style={{ scrollMarginTop: isMobile ? 130 : 88 }}>
            <SectionBadge label="FAQ" color="#FFD600" bg="rgba(255,214,0,.08)" border="1px solid rgba(255,214,0,.15)" />
            <SectionTitle>Common questions.</SectionTitle>
            <SectionSub>Everything you need to know about Logary.</SectionSub>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              {FAQ.map((item, i) => (
                <div key={i} style={{ background: 'var(--card)', border: '1px solid rgba(255,255,255,.07)', borderRadius: 12, overflow: 'hidden' }}>
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)} style={{ width: '100%', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', padding: '14px 16px', background: 'transparent', border: 'none', cursor: 'pointer', textAlign: 'left', gap: 10 }}>
                    <span style={{ fontSize: 13, fontWeight: 600, color: '#fff', lineHeight: 1.5 }}>{item.q}</span>
                    <svg width="13" height="13" viewBox="0 0 12 12" fill="none" style={{ flexShrink: 0, marginTop: 2, transition: 'transform .2s', transform: openFaq === i ? 'rotate(180deg)' : 'rotate(0)' }}>
                      <path d="M2 4l4 4 4-4" stroke="rgba(255,255,255,.4)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  {openFaq === i && (
                    <div style={{ padding: '0 16px 14px', fontSize: 13, color: 'var(--text2)', lineHeight: 1.75, borderTop: '1px solid rgba(255,255,255,.05)' }}>
                      <div style={{ paddingTop: 10 }}>{item.a}</div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* CONTACT */}
          <section id="contact" style={{ scrollMarginTop: isMobile ? 130 : 88 }}>
            <SectionBadge label="CONTACT" color="#00D4FF" bg="rgba(0,212,255,.08)" border="1px solid rgba(0,212,255,.15)" />
            <SectionTitle>Get in touch.</SectionTitle>
            <SectionSub>We read every message. Seriously.</SectionSub>
            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 10 }}>
              {[{ label: 'Discord', desc: 'Fastest response.', color: '#5865F2', href: 'https://discord.gg/SJNqjdqMd3' }, { label: 'Email', desc: 'hello@logary.app', color: '#00D4FF', href: 'mailto:hello@logary.app' }].map(c => (
                <a key={c.label} href={c.href} style={{ display: 'block', padding: '16px 18px', borderRadius: 12, background: 'var(--card)', border: '1px solid rgba(255,255,255,.07)', transition: 'border-color .18s' }}
                  onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,.18)')}
                  onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,.07)')}>
                  <div style={{ fontSize: 14, fontWeight: 700, color: c.color, marginBottom: 4 }}>{c.label}</div>
                  <div style={{ fontSize: 12, color: 'var(--text3)' }}>{c.desc}</div>
                </a>
              ))}
            </div>
          </section>

          {/* PRIVACY */}
          <section id="privacy" style={{ scrollMarginTop: isMobile ? 130 : 88 }}>
            <SectionBadge label="PRIVACY & TERMS" color="rgba(255,255,255,.5)" bg="rgba(255,255,255,.05)" border="1px solid rgba(255,255,255,.1)" />
            <SectionTitle>Privacy Policy.</SectionTitle>
            <div style={{ background: 'var(--card)', border: '1px solid rgba(255,255,255,.07)', borderRadius: 16, padding: isMobile ? '18px' : '28px' }}>
              {[
                { title: '1. Information We Collect', body: 'We collect your email, username, and linked gaming identities (Steam, PSN, Xbox Live). We also store your gaming activity such as logged games, playtimes, ratings, reviews, custom lists, and community posts.' },
                { title: '2. How We Use Your Data', body: 'Your data is used strictly to provide and enhance Logary — calculating your Gaming DNA, powering Logy AI recommendations, facilitating social interactions, and authenticating your PRO status via Patreon.' },
                { title: '3. Data Sharing & Third Parties', body: 'We do NOT sell your personal data. We only share essential data with trusted service providers like Firebase, Patreon, and game databases via secure API calls.' },
                { title: '4. Your Rights & Data Deletion', body: 'You retain full ownership of your data. Use the in-app "Burn Account" feature in the Danger Zone to instantly and irreversibly erase all your data from our servers.' },
                { title: '5. Security', body: 'We implement industry-standard security protocols. All data transmissions between your device and our servers are securely encrypted.' },
              ].map((item, i) => (
                <div key={i} style={{ marginBottom: i < 4 ? 18 : 0, paddingBottom: i < 4 ? 18 : 0, borderBottom: i < 4 ? '1px solid rgba(255,255,255,.06)' : 'none' }}>
                  <div style={{ fontSize: 13, fontWeight: 700, color: '#fff', marginBottom: 6 }}>{item.title}</div>
                  <p style={{ fontSize: 13, color: 'var(--text2)', lineHeight: 1.75 }}>{item.body}</p>
                </div>
              ))}
            </div>
          </section>

        </div>
      </div>
    </main>
  )
}