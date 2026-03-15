"use client"

import Link from 'next/link'

const LAST_UPDATED = "March 15, 2026"

const TOS_SECTIONS = [
  { title: "1. Acceptance of Terms", content: "By downloading, accessing, or using the Logary mobile application, website, Logy AI Discord bot, and all associated services (collectively the 'Service'), you agree to be bound by these Terms of Service. If you do not agree, you may not use the Service. Logary reserves the right to update these Terms at any time. Your continued use after changes constitutes acceptance." },
  { title: "2. Eligibility and Account Security", content: "You must be at least 13 years of age to create an account. By creating an account, you represent that you meet this requirement. You are solely responsible for safeguarding your account credentials and all activities under your account. Notify us immediately of any unauthorized use." },
  { title: "3. User-Generated Content and Conduct", content: "Logary allows users to post reviews, create custom lists, upload images, share updates in the Community tab, and interact with other users.\n\nBy posting content, you retain all ownership rights but grant Logary a worldwide, non-exclusive, royalty-free license to use, reproduce, distribute, and display that content in connection with the Service.\n\nYou strictly agree NOT to post content that:\n• Is illegal, defamatory, abusive, harassing, racist, or hateful.\n• Contains explicitly adult content or extreme graphic violence.\n• Infringes on any third party's intellectual property rights.\n• Constitutes spam, unauthorized advertising, or malicious links.\n\nWe reserve the right to monitor, review, and remove any content or accounts that violate these guidelines." },
  { title: "4. Logary PRO and Patreon Subscriptions", content: "Logary offers an optional premium tier known as 'Logary PRO', which provides access to exclusive features such as Animated GIF support, Custom Library Banners, Colored Usernames, and Expanded Showcase Slots.\n\nBilling and payment processing are handled entirely by Patreon. Logary does not store or process your credit card information.\n\nYour PRO status is automatically granted by linking your Patreon email. If your subscription is canceled or payment fails, PRO features will be paused until renewed. Refunds are subject to Patreon's official refund policies." },
  { title: "5. Third-Party Integrations and API Data", content: "Logary relies on third-party integrations to function. Game metadata is sourced from external APIs (RAWG or IGDB). Game library imports are facilitated through integrations like the Steam API, PlayStation Network, and Xbox Live.\n\nLogary makes no guarantees regarding the uptime or permanent availability of these third-party services. If a provider changes their API policies or experiences downtime, certain Logary features may be degraded. Logary shall not be held liable for any loss of functionality resulting from third-party API changes." },
  { title: "6. Logy AI and Discord Ecosystem", content: "Logary provides AI features ('Logy AI') within our official Discord server, synchronized with the Logary application database.\n\nBy interacting with Logy AI, you agree not to attempt to reverse-engineer the bot, bypass its rate limits, or use prompt-injection techniques to generate harmful content. Abuse of the AI bot or violations of our Discord server rules will result in an immediate ban from the server and may result in termination of your Logary account." },
  { title: "7. Privacy and Data Ownership", content: "Your privacy is governed by our Privacy Policy. You have the absolute right to your data. You may permanently delete your account and all associated data using the 'Burn Account' feature in the 'Danger Zone' within the app's settings. Once deleted, data cannot be recovered." },
  { title: "8. Intellectual Property", content: "All rights, title, and interest in and to the Logary application, its original code, UI/UX design, logos, algorithms, and brand identity are and will remain the exclusive property of Logary and its developers. You may not copy, modify, distribute, sell, or lease any part of our Service without explicit written consent." },
  { title: "9. Disclaimer of Warranties", content: "LOGARY IS PROVIDED ON AN 'AS IS' AND 'AS AVAILABLE' BASIS. WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE.\n\nWe do not warrant that the Service will always be secure, uninterrupted, or error-free. As Logary is actively in development (Beta), occasional issues may occur." },
  { title: "10. Limitation of Liability", content: "TO THE MAXIMUM EXTENT PERMITTED BY LAW, LOGARY, ITS CREATORS, AND AFFILIATES SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES." },
]

export default function TermsOfServicePage() {
  return (
    <main style={{ backgroundColor: '#08080F', minHeight: '100vh', color: '#fff', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      <div style={{ maxWidth: 840, margin: '0 auto', padding: 'clamp(48px, 8vw, 80px) clamp(20px, 5vw, 24px) 120px' }}>

        {/* Header */}
        <div style={{ marginBottom: 56, borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: 36 }}>
          <Link href="/about" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13, color: 'rgba(255,255,255,.4)', marginBottom: 24, textDecoration: 'none', transition: 'color .15s' }}
            onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,.7)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,.4)')}
          >
            ← Back to About
          </Link>
          <h1 style={{ fontSize: 'clamp(2rem, 6vw, 3.5rem)', fontWeight: 900, letterSpacing: '-0.04em', marginBottom: 16, color: '#fff', lineHeight: 1.1 }}>
            Terms of Service
          </h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ width: 7, height: 7, borderRadius: '50%', backgroundColor: '#00D4FF', flexShrink: 0 }} />
            <p style={{ fontSize: 13, fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase', color: 'rgba(255,255,255,.5)' }}>
              Effective Date: {LAST_UPDATED}
            </p>
          </div>
        </div>

        {/* Sections */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
          {TOS_SECTIONS.map((section, index) => (
            <section key={index}>
              <h2 style={{ fontSize: 'clamp(16px, 3vw, 20px)', fontWeight: 800, color: '#fff', marginBottom: 14, letterSpacing: '-0.02em', lineHeight: 1.3 }}>
                {section.title}
              </h2>
              <p style={{ fontSize: 'clamp(13px, 2vw, 15px)', color: 'rgba(255,255,255,0.65)', lineHeight: 1.85, whiteSpace: 'pre-wrap' }}>
                {section.content}
              </p>
            </section>
          ))}

          {/* Contact block */}
          <section style={{ padding: 'clamp(24px, 5vw, 40px)', borderRadius: 20, backgroundColor: '#0E0E18', border: '1px solid rgba(0,212,255,0.15)' }}>
            <h2 style={{ fontSize: 'clamp(15px, 3vw, 18px)', fontWeight: 800, color: '#00D4FF', marginBottom: 14 }}>
              11. Contact Information
            </h2>
            <p style={{ fontSize: 'clamp(13px, 2vw, 15px)', color: 'rgba(255,255,255,0.65)', lineHeight: 1.8, marginBottom: 20 }}>
              If you have questions, concerns, or legal inquiries regarding these Terms, please contact us:
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                { label: 'Email', value: 'hello@logary.app', href: 'mailto:hello@logary.app' },
                { label: 'Discord', value: 'Official Logary Server', href: 'https://discord.gg/SJNqjdqMd3' },
              ].map(c => (
                <div key={c.label} style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
                  <span style={{ fontWeight: 700, color: '#fff', minWidth: 60, fontSize: 14 }}>{c.label}:</span>
                  <a href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} style={{ color: '#00D4FF', textDecoration: 'none', fontWeight: 600, fontSize: 14 }}>{c.value}</a>
                </div>
              ))}
            </div>
          </section>
        </div>

      </div>
    </main>
  )
}