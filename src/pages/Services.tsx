import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const SERVICES_HEADER_PHOTO = 'https://images.unsplash.com/photo-1503387837-b154d5074bd2?auto=format&fit=crop&w=1600&q=80'

const services = [
  {
    name: 'Concrete Foundations',
    desc: 'Stem walls, grade beams, and slab-on-grade construction for South Maui residential and commercial properties. Burt reads the soil before the forms go up. Kihei clay profiles are not the same as Central Maui. Seismic rebar placement per Hawaii code. Every foundation includes drainage engineered before the pour.',
    specs: ['Slab-on-grade', 'Stem wall foundations', 'Grade beams', 'Post-tension prep', 'HRS seismic compliance'],
    photo: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80',
    alt: 'Concrete foundation with rebar before pour',
  },
  {
    name: 'Driveways & Parking Areas',
    desc: 'Residential driveways and commercial parking pads poured to last. Salt air from the Kihei coastline accelerates surface damage on under-mixed concrete. Burt specs 3,500 PSI minimum with proper water-cement ratio for coastal conditions. Joints cut at 24 hours to control cracking, not guessed at.',
    specs: ['Residential driveways', 'Commercial parking', 'Apron and approach work', 'Coastal mix spec', '3,500 PSI minimum'],
    photo: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    alt: 'Finished residential concrete driveway',
  },
  {
    name: 'Retaining Walls',
    desc: 'Hillside properties in Kihei and Wailea deal with erosion and grade change year after year. A concrete retaining wall done right solves the problem permanently. Burt designs for the load: soil type, slope angle, and drainage behind the wall are spec\'d before concrete is ordered. No guessing.',
    specs: ['Gravity walls', 'Cantilever walls', 'Drainage behind-wall', 'Hillside erosion control', 'Grade separation'],
    photo: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80',
    alt: 'Concrete retaining wall on a hillside property',
  },
  {
    name: 'Sidewalks & Walkways',
    desc: 'Flatwork is where the details show. Burt hand-tools the edges, checks level every 8 feet, and cuts control joints on schedule. Sidewalks that look clean and stay flat for years, not seasons.',
    specs: ['Residential walkways', 'Commercial sidewalks', 'Hand-tooled edges', 'ADA-compliant grades', 'Broom or smooth finish'],
    photo: 'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?auto=format&fit=crop&w=800&q=80',
    alt: 'Clean concrete sidewalk with tooled edges',
  },
  {
    name: 'Decorative Concrete',
    desc: 'Stamped patterns, acid stains, and polished finishes for patios, pool decks, and interior floors. Burt has done decorative work in Wailea resort properties and Kihei private residences. Pattern and color consultation included with the estimate.',
    specs: ['Stamped concrete', 'Acid stain', 'Polished floors', 'Pool deck finishes', 'Color integral and overlay'],
    photo: 'https://images.unsplash.com/photo-1503387837-b154d5074bd2?auto=format&fit=crop&w=800&q=80',
    alt: 'Stamped decorative concrete patio',
  },
  {
    name: 'Concrete Slabs',
    desc: 'General-purpose slabs for garages, sheds, equipment pads, lanai floors, and utility areas. Gravel base compacted and leveled before forms go in. Vapor barrier included where moisture is a concern.',
    specs: ['Garage slabs', 'Shed and equipment pads', 'Lanai floors', 'Utility pads', 'Vapor barrier option'],
    photo: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=800&q=80',
    alt: 'Freshly poured commercial concrete slab',
  },
  {
    name: 'Concrete Repair & Resurfacing',
    desc: 'Spalling, scaling, and surface cracking from Maui\'s UV and salt exposure. Burt evaluates whether repair or replacement is the honest answer, then gives you both prices. Most surface repairs are done in a single visit.',
    specs: ['Spall and crack repair', 'Overlay resurfacing', 'Surface sealing', 'Joint repair', 'Single-visit turnaround'],
    photo: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=800&q=80',
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
          <p className="iron-label" style={{ marginBottom: '0.75rem' }}>§ What We Do</p>
          <h1 className="iron-display" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', color: 'hsl(var(--foreground))', maxWidth: '700px' }}>
            Concrete Services
          </h1>
        </div>
      </section>

      {/* Services — alternating article layout */}
      <section style={{ backgroundColor: 'hsl(var(--background))' }}>
        {services.map((svc, i) => (
          <article
            key={svc.name}
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              borderBottom: '1px solid hsl(var(--border))',
            }}
            className="md:grid-cols-2"
          >
            {/* Photo — alternates left/right */}
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

              <h2 className="iron-display" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', color: 'hsl(var(--foreground))', marginBottom: '1.25rem' }}>
                {svc.name}
              </h2>

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
          Have a Project in Mind?
        </h2>
        <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '0.97rem', color: 'hsl(var(--muted-foreground))', lineHeight: 1.7, maxWidth: '500px', margin: '0 auto 2rem' }}>
          Free site walk and estimate. Burt gives you a real number before work starts.
        </p>
        <Link to="/contact" className="iron-btn">
          Request a Free Estimate
          <ArrowRight size={14} />
        </Link>
      </section>
    </>
  )
}
