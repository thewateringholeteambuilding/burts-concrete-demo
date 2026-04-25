import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Menu, X, Phone } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
]

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  function handleNav(href: string) {
    setMenuOpen(false)
    navigate(href)
  }

  return (
    <header
      style={{ backgroundColor: 'hsl(220 45% 7% / 0.96)', backdropFilter: 'blur(8px)', borderBottom: '1px solid hsl(var(--border))', position: 'sticky', top: 0, zIndex: 50 }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px' }}>

        {/* Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>
          <div style={{ width: '36px', height: '36px', backgroundColor: 'hsl(var(--accent))', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: '0.85rem', color: 'hsl(var(--accent-foreground))', letterSpacing: '0.05em' }}>BC</span>
          </div>
          <span style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 600, fontSize: '1.05rem', color: 'hsl(var(--foreground))', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            Burt's Concrete
          </span>
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Main navigation" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }} className="hidden md:flex">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontFamily: 'Inter, sans-serif',
                fontWeight: 500,
                fontSize: '0.75rem',
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                color: location.pathname === link.href ? 'hsl(var(--accent))' : 'hsl(var(--muted-foreground))',
                transition: 'color 0.2s',
                padding: '0.25rem 0',
                borderBottom: location.pathname === link.href ? '2px solid hsl(var(--accent))' : '2px solid transparent',
              }}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* CTA phone */}
        <a
          href="tel:+18088759085"
          className="hidden md:flex"
          style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', textDecoration: 'none', backgroundColor: 'hsl(var(--accent))', color: 'hsl(var(--accent-foreground))', padding: '0.55rem 1rem', fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.12em' }}
        >
          <Phone size={13} />
          (808) 875-9085
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'hsl(var(--foreground))', padding: '0.25rem' }}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{ borderTop: '1px solid hsl(var(--border))', backgroundColor: 'hsl(var(--background))', padding: '1rem 1.5rem 1.5rem' }}>
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              style={{
                display: 'block',
                width: '100%',
                textAlign: 'left',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontFamily: 'Oswald, sans-serif',
                fontWeight: 600,
                fontSize: '1.1rem',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: location.pathname === link.href ? 'hsl(var(--accent))' : 'hsl(var(--foreground))',
                padding: '0.75rem 0',
                borderBottom: '1px solid hsl(var(--border))',
              }}
            >
              {link.label}
            </button>
          ))}
          <a
            href="tel:+18088759085"
            style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '1rem', textDecoration: 'none', color: 'hsl(var(--accent))', fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '0.85rem' }}
          >
            <Phone size={15} />
            (808) 875-9085
          </a>
        </div>
      )}
    </header>
  )
}
