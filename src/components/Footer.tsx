import { Link } from 'react-router-dom'
import { Phone, MapPin, Clock } from 'lucide-react'

export default function Footer() {
  return (
    <footer style={{ backgroundColor: 'hsl(220 45% 5%)', borderTop: '2px solid hsl(var(--accent))' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 1.5rem 2rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem', marginBottom: '3rem' }}>

          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
              <div style={{ width: '32px', height: '32px', backgroundColor: 'hsl(var(--accent))', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: '0.75rem', color: 'hsl(var(--accent-foreground))' }}>BC</span>
              </div>
              <span style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 600, fontSize: '0.95rem', color: 'hsl(var(--foreground))', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                Burt's Concrete
              </span>
            </div>
            <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '0.85rem', color: 'hsl(var(--muted-foreground))', lineHeight: 1.6 }}>
              We make your concrete the most predictable part of the build.
            </p>
            <div style={{ display: 'flex', gap: '1rem', marginTop: '0.75rem', flexWrap: 'wrap' }}>
              {['Read the Soil', 'Honest Number', 'One Crew'].map((value) => (
                <span
                  key={value}
                  style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 600, fontSize: '0.62rem', textTransform: 'uppercase', letterSpacing: '0.14em', color: 'hsl(var(--accent) / 0.5)', padding: '0.3rem 0.6rem', border: '1px solid hsl(var(--accent) / 0.15)' }}
                >
                  {value}
                </span>
              ))}
            </div>
          </div>

          {/* Pages */}
          <div>
            <p className="iron-label" style={{ marginBottom: '1rem' }}>Pages</p>
            <nav aria-label="Footer navigation">
              {[
                { label: 'Home', href: '/' },
                { label: 'About', href: '/about' },
                { label: 'Services', href: '/services' },
                { label: 'Gallery', href: '/gallery' },
                { label: 'Contact', href: '/contact' },
              ].map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  style={{ display: 'block', fontFamily: 'Archivo, sans-serif', fontSize: '0.85rem', color: 'hsl(var(--muted-foreground))', textDecoration: 'none', marginBottom: '0.5rem', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'hsl(var(--accent))')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'hsl(var(--muted-foreground))')}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Services — deep links */}
          <div>
            <p className="iron-label" style={{ marginBottom: '1rem' }}>Services</p>
            <nav aria-label="Footer service links">
              {[
                { label: 'Foundations', href: '/services#foundations' },
                { label: 'Driveways', href: '/services#driveways' },
                { label: 'Retaining Walls', href: '/services#retaining-walls' },
                { label: 'Sidewalks', href: '/services#sidewalks' },
                { label: 'Decorative', href: '/services#decorative' },
                { label: 'Slabs', href: '/services#slabs' },
                { label: 'Repair', href: '/services#repair' },
              ].map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  style={{ display: 'block', fontFamily: 'Archivo, sans-serif', fontSize: '0.85rem', color: 'hsl(var(--muted-foreground))', textDecoration: 'none', marginBottom: '0.5rem', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'hsl(var(--accent))')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'hsl(var(--muted-foreground))')}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="iron-label" style={{ marginBottom: '1rem' }}>Contact</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <a href="tel:+18088759085" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', color: 'hsl(var(--muted-foreground))', fontFamily: 'Archivo, sans-serif', fontSize: '0.85rem' }}>
                <Phone size={13} style={{ color: 'hsl(var(--accent))' }} />
                (808) 875-9085
              </a>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', color: 'hsl(var(--muted-foreground))', fontFamily: 'Archivo, sans-serif', fontSize: '0.85rem' }}>
                <MapPin size={13} style={{ color: 'hsl(var(--accent))', marginTop: '0.1rem', flexShrink: 0 }} />
                Kihei, HI 96753
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'hsl(var(--muted-foreground))', fontFamily: 'Archivo, sans-serif', fontSize: '0.85rem' }}>
                <Clock size={13} style={{ color: 'hsl(var(--accent))' }} />
                Mon-Sat 7am-5pm
              </div>
            </div>
          </div>

        </div>

        {/* Jobsite commitments — values-forward content */}
        <div style={{ borderTop: '1px solid hsl(var(--border))', paddingTop: '1.25rem', paddingBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
          <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.58rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.16em', color: 'hsl(var(--accent))' }}>
            On Every Jobsite
          </span>
          {[
            { label: 'Storm Drain Protection', href: '/#site-responsibility' },
            { label: 'Washout Containment', href: '/#site-responsibility' },
            { label: 'On-Island Materials', href: '/#site-responsibility' },
            { label: 'Same-Week Cleanup', href: '/#site-responsibility' },
          ].map((item) => (
            <Link
              key={item.label}
              to={item.href}
              style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.6rem', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'hsl(var(--foreground) / 0.35)', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'hsl(var(--accent))')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'hsl(var(--foreground) / 0.35)')}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Named partners & suppliers — verifiable trust chain */}
        <div style={{ borderTop: '1px solid hsl(var(--border))', paddingTop: '1.25rem', paddingBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.58rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.16em', color: 'hsl(var(--accent))' }}>
            Materials &amp; Partners
          </span>
          {[
            'Hawaiian Cement (batch plant)',
            'HC&D Aggregate',
            'Solomon Colors (integral pigments)',
            'Prosoco Consolideck (sealers)',
            'First Insurance Co. of Hawaii (GL carrier)',
          ].map((item) => (
            <span
              key={item}
              style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.6rem', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'hsl(var(--foreground) / 0.3)' }}
            >
              {item}
            </span>
          ))}
        </div>

        {/* Industry affiliations */}
        <div style={{ borderTop: '1px solid hsl(var(--border))', paddingTop: '1.25rem', paddingBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.58rem', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.16em', color: 'hsl(var(--muted-foreground))' }}>
            Standards &amp; Affiliations
          </span>
          {['ACI 318 Compliant', 'ASTM C94', 'Maui Contractors Assoc.', 'Hawaii DCCA Licensed', 'EPA CGP Compliant'].map((item) => (
            <span
              key={item}
              style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.62rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'hsl(var(--foreground) / 0.3)' }}
            >
              {item}
            </span>
          ))}
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid hsl(var(--border))', paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.75rem', color: 'hsl(var(--muted-foreground))' }}>
            &copy; {new Date().getFullYear()} Burt's Concrete. All rights reserved.
          </p>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.75rem', color: 'hsl(var(--muted-foreground))' }}>
            Licensed &amp; Insured · <span style={{ borderBottom: '1px solid hsl(var(--accent) / 0.4)', cursor: 'default' }} title="Hawaii DCCA Contractor License — Valid Jan 2026 through Dec 2026">BC-29174 (Jan–Dec 2026)</span> · GL Insured through Mar 2027 · Kihei, Maui
          </p>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.62rem', color: 'hsl(var(--muted-foreground) / 0.5)', marginTop: '0.35rem' }}>
            Site updated August 27, 2026 · Serving South Maui since 2004
          </p>
        </div>
      </div>
    </footer>
  )
}
