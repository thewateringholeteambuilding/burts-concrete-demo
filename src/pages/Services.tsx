import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const SERVICES_HEADER_PHOTO = 'https://images.unsplash.com/photo-1640101086894-7d70c3e70179?auto=format&fit=crop&w=1600&q=80'

const services = [
  {
    id: 'foundations',
    name: 'Concrete Foundations',
    hook: 'The soil determines the slab.',
    desc: 'Stem walls, grade beams, and slab-on-grade construction for South Maui residential and commercial properties. Burt reads the soil before the forms go up. Kihei clay profiles are not the same as Central Maui. Seismic rebar placement per Hawaii code. Every foundation includes drainage engineered before the pour.',
    specs: ['Slab-on-grade', 'Stem wall foundations', 'Grade beams', 'Post-tension prep', 'HRS seismic compliance'],
    photo: 'https://images.unsplash.com/photo-1641698680673-edab78703c0b?auto=format&fit=crop&w=800&q=80',
    alt: 'Concrete foundation with rebar before pour',
  },
  {
    id: 'driveways',
    name: 'Driveways & Parking Areas',
    hook: 'Salt air punishes weak concrete.',
    desc: 'Residential driveways and commercial parking pads poured to last. The Kihei coastline accelerates surface damage on under-mixed concrete. Burt specs 3,500 PSI minimum with proper water-cement ratio for coastal conditions. Joints cut at 24 hours to control cracking, not guessed at.',
    specs: ['Residential driveways', 'Commercial parking', 'Apron and approach work', 'Coastal mix spec', '3,500 PSI minimum'],
    photo: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    alt: 'Finished residential concrete driveway',
  },
  {
    id: 'retaining-walls',
    name: 'Retaining Walls',
    hook: 'Grade change is permanent. The fix should be too.',
    desc: 'Hillside properties in Kihei and Wailea deal with erosion year after year. A concrete retaining wall done right solves the problem permanently. Burt designs for the load: soil type, slope angle, and drainage behind the wall are spec\'d before concrete is ordered.',
    specs: ['Gravity walls', 'Cantilever walls', 'Drainage behind-wall', 'Hillside erosion control', 'Grade separation'],
    photo: 'https://images.unsplash.com/photo-1685464197603-787dabbdecbd?auto=format&fit=crop&w=800&q=80',
    alt: 'Concrete retaining wall on a hillside property',
  },
  {
    id: 'sidewalks',
    name: 'Sidewalks & Walkways',
    hook: 'Flatwork is where the details show.',
    desc: 'Burt hand-tools the edges, checks level every 8 feet, and cuts control joints on schedule. Sidewalks that look clean and stay flat for years, not seasons.',
    specs: ['Residential walkways', 'Commercial sidewalks', 'Hand-tooled edges', 'ADA-compliant grades', 'Broom or smooth finish'],
    photo: 'https://images.unsplash.com/photo-1673865641469-34498379d8af?auto=format&fit=crop&w=800&q=80',
    alt: 'Clean concrete sidewalk with tooled edges',
  },
  {
    id: 'decorative',
    name: 'Decorative Concrete',
    hook: 'Function first, then finish.',
    desc: 'Stamped patterns, acid stains, and polished finishes for patios, pool decks, and interior floors. Burt has done decorative work in Wailea resort properties and Kihei private residences. Pattern and color consultation included with the estimate.',
    specs: ['Stamped concrete', 'Acid stain', 'Polished floors', 'Pool deck finishes', 'Color integral and overlay'],
    photo: 'https://images.unsplash.com/photo-1640101086894-7d70c3e70179?auto=format&fit=crop&w=800&q=80',
    alt: 'Stamped decorative concrete patio',
  },
  {
    id: 'slabs',
    name: 'Concrete Slabs',
    hook: 'Compaction before concrete. Always.',
    desc: 'General-purpose slabs for garages, sheds, equipment pads, lanai floors, and utility areas. Gravel base compacted and leveled before forms go in. Vapor barrier included where moisture is a concern.',
    specs: ['Garage slabs', 'Shed and equipment pads', 'Lanai floors', 'Utility pads', 'Vapor barrier option'],
    photo: 'https://images.unsplash.com/photo-1673978483230-b116c3969ffb?auto=format&fit=crop&w=800&q=80',
    alt: 'Freshly poured commercial concrete slab',
  },
  {
    id: 'repair',
    name: 'Concrete Repair & Resurfacing',
    hook: 'Repair or replace. Burt gives you both prices.',
    desc: 'Spalling, scaling, and surface cracking from Maui\'s UV and salt exposure. Burt evaluates whether repair or replacement is the honest answer, then quotes both options. Most surface repairs are done in a single visit.',
    specs: ['Spall and crack repair', 'Overlay resurfacing', 'Surface sealing', 'Joint repair', 'Single-visit turnaround'],
    photo: 'https://images.unsplash.com/photo-1625337905408-7b6fe970e187?auto=format&fit=crop&w=800&q=80',
    alt: 'Concrete repair and resurfacing work',
  },
]

export default function Services() {
  return (
    <>
      {/* Page header with photo */}
      <section style={{ position: 'relative', height: '360px', overflow: 'hidden' }}>
        <img
          src={SERVICES_HEADER_PHOTO}
          alt="Decorative stamped concrete patio work"
          fetchPriority="high"
          loading="eager"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'hsl(220 45% 7% / 0.82)' }} />
        <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 clamp(1.5rem, 5vw, 4rem)', zIndex: 10 }}>
          <p className="iron-label" style={{ marginBottom: '0.75rem' }}>What We Do</p>
          <h1 className="iron-display" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', color: 'hsl(var(--foreground))', maxWidth: '700px' }}>
            Concrete Services
          </h1>
        </div>
      </section>

      {/* Sticky service quick-nav */}
      <nav
        aria-label="Jump to service"
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 20,
          backgroundColor: 'hsl(var(--card))',
          borderBottom: '1px solid hsl(var(--border))',
          padding: '0.75rem 1.5rem',
          overflowX: 'auto',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', gap: '0.5rem', flexWrap: 'nowrap' }}>
          {services.map((svc) => (
            <a
              key={svc.id}
              href={`#${svc.id}`}
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.68rem',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                color: 'hsl(var(--foreground))',
                textDecoration: 'none',
                padding: '0.4rem 0.85rem',
                border: '1px solid hsl(var(--accent) / 0.4)',
                whiteSpace: 'nowrap',
                transition: 'border-color 0.2s, color 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'hsl(42 54% 54%)'
                e.currentTarget.style.color = 'hsl(42 54% 54%)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'hsl(42 54% 54% / 0.4)'
                e.currentTarget.style.color = 'hsl(35 35% 93%)'
              }}
            >
              {svc.name.replace('Concrete ', '').replace(' & Resurfacing', '')}
            </a>
          ))}
        </div>
      </nav>

      {/* Services, alternating article layout */}
      <section style={{ backgroundColor: 'hsl(var(--background))' }}>
        {services.map((svc, i) => (
          <article
            key={svc.name}
            id={svc.id}
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              borderBottom: '1px solid hsl(var(--border))',
            }}
            className="md:grid-cols-2"
          >
            {/* Photo, alternates left/right */}
            <div
              style={{
                order: i % 2 === 0 ? 2 : 1,
                minHeight: '360px',
                position: 'relative',
                overflow: 'hidden',
              }}
              className={i % 2 === 0 ? 'md:order-2' : 'md:order-1'}
            >
              <img
                src={svc.photo}
                alt={svc.alt}
                loading="lazy"
                style={{ width: '100%', height: '100%', objectFit: 'cover', minHeight: '360px' }}
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 60%, hsl(220 45% 7% / 0.5) 100%)' }} />
            </div>

            {/* Copy */}
            <div
              style={{
                order: i % 2 === 0 ? 1 : 2,
                padding: 'clamp(2rem, 5vw, 3.5rem)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                borderRight: i % 2 === 0 ? '1px solid hsl(var(--border))' : 'none',
                borderLeft: i % 2 !== 0 ? '1px solid hsl(var(--border))' : 'none',
              }}
              className={i % 2 === 0 ? 'md:order-1' : 'md:order-2'}
            >
              {/* Brass accent bar */}
              <div style={{ width: '36px', height: '3px', backgroundColor: 'hsl(var(--accent))', marginBottom: '1.25rem' }} />

              <h2 className="iron-display" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', color: 'hsl(var(--foreground))', marginBottom: '0.75rem' }}>
                {svc.name}
              </h2>

              <p style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 500, fontSize: '0.88rem', color: 'hsl(var(--accent))', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '1rem', lineHeight: 1.4 }}>
                {svc.hook}
              </p>

              <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '0.93rem', color: 'hsl(var(--muted-foreground))', lineHeight: 1.75, marginBottom: '1.75rem' }}>
                {svc.desc}
              </p>

              {/* Spec tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.75rem' }}>
                {svc.specs.map((spec) => (
                  <span
                    key={spec}
                    style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.7rem', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'hsl(var(--accent))', border: '1px solid hsl(var(--accent) / 0.4)', padding: '0.3rem 0.7rem' }}
                  >
                    {spec}
                  </span>
                ))}
              </div>

              <Link
                to="/contact"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontFamily: 'Inter, sans-serif', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.15em', color: 'hsl(var(--accent))', textDecoration: 'none' }}
              >
                Get a Quote <ArrowRight size={13} />
              </Link>
            </div>
          </article>
        ))}
      </section>

      {/* Bottom CTA */}
      <section style={{ backgroundColor: 'hsl(var(--card))', borderTop: '2px solid hsl(var(--accent))', padding: 'clamp(3rem, 6vw, 5rem) 1.5rem', textAlign: 'center' }}>
        <h2 className="iron-display" style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.6rem)', color: 'hsl(var(--foreground))', marginBottom: '1rem' }}>
          Your Slab. Your Timeline. One Crew.
        </h2>
        <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '0.97rem', color: 'hsl(var(--muted-foreground))', lineHeight: 1.7, maxWidth: '500px', margin: '0 auto 2rem' }}>
          Driveway replacement, new foundation, retaining wall, or commercial slab. Free site walk and a firm number before work starts.
        </p>
        <Link to="/contact" className="iron-btn">
          Request a Free Estimate
          <ArrowRight size={14} />
        </Link>
      </section>
    </>
  )
}
