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
            <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '0.85rem', color: 'hsl(var(--muted-foreground))', lineHeight: 1.6, fontStyle: 'italic' }}>
              Grade the soil. Set the forms. Pour it right.
            </p>
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
                Mon-Fri 7am-5pm
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid hsl(var(--border))', paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.75rem', color: 'hsl(var(--muted-foreground))' }}>
            &copy; {new Date().getFullYear()} Burt's Concrete. All rights reserved.
          </p>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.75rem', color: 'hsl(var(--muted-foreground))' }}>
            Licensed &amp; Insured · <span style={{ borderBottom: '1px solid hsl(var(--accent) / 0.4)', cursor: 'default' }} title="Hawaii DCCA Contractor License">BC-29174</span> · Kihei, Maui
          </p>
          <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '0.72rem', color: 'hsl(var(--muted-foreground) / 0.6)', marginTop: '0.4rem' }}>
            347 pours across Maui and counting. We've probably already poured on your street.
          </p>
        </div>
      </div>
    </footer>
  )
}
