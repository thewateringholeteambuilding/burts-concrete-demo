import { useState } from 'react'

const galleryItems = [
  {
    photo: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80',
    tag: 'Driveway',
    caption: '1,800 sq ft repour, Kihei · Removed failed 2012 slab that had settled 3 inches',
    alt: 'Finished residential concrete driveway in Kihei South Maui',
    wide: true,
  },
  {
    photo: 'https://images.unsplash.com/photo-1641698680673-edab78703c0b?auto=format&fit=crop&w=700&q=80',
    tag: 'Foundation',
    caption: 'Stem wall + grade beam, Wailea ADU · Clay pocket required 18-inch over-excavation',
    alt: 'Concrete foundation with rebar placement before pour',
    wide: false,
  },
  {
    photo: 'https://images.unsplash.com/photo-1685464197603-787dabbdecbd?auto=format&fit=crop&w=700&q=80',
    tag: 'Retaining Wall',
    caption: '6-ft cantilever wall, Kihei hillside · Drainage added behind wall after neighbor runoff issue',
    alt: 'Concrete retaining wall on a South Maui hillside property',
    wide: false,
  },
  {
    photo: 'https://images.unsplash.com/photo-1640101086894-7d70c3e70179?auto=format&fit=crop&w=900&q=80',
    tag: 'Decorative',
    caption: 'Stamped patio + pool deck, Wailea · Poured between guest bookings, 4-day window',
    alt: 'Stamped decorative concrete patio at a Wailea residence',
    wide: true,
  },
  {
    photo: 'https://images.unsplash.com/photo-1673865641469-34498379d8af?auto=format&fit=crop&w=700&q=80',
    tag: 'Flatwork',
    caption: 'ADA sidewalk, commercial Kihei · Tight access between two buildings, hand-wheeled mix',
    alt: 'Concrete flatwork sidewalk at a commercial property',
    wide: false,
  },
  {
    photo: 'https://images.unsplash.com/photo-1673978483230-b116c3969ffb?auto=format&fit=crop&w=700&q=80',
    tag: 'Slab',
    caption: '3,200 sq ft equipment slab, Kahului · Weekend pour to avoid disrupting warehouse ops',
    alt: 'Large commercial concrete slab in Kahului',
    wide: false,
  },
  {
    photo: 'https://images.unsplash.com/photo-1685464196339-46a985b2049b?auto=format&fit=crop&w=900&q=80',
    tag: 'In Progress',
    caption: 'Continuous pour, South Maui · Dawn start to beat midday heat on exposed coastal lot',
    alt: 'Concrete pour in progress at a South Maui job site',
    wide: true,
  },
]

const filterTags = ['All', ...Array.from(new Set(galleryItems.map((item) => item.tag)))]

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filteredItems = activeFilter === 'All'
    ? galleryItems
    : galleryItems.filter((item) => item.tag === activeFilter)

  return (
    <>
      {/* Page header */}
      <section style={{ backgroundColor: 'hsl(var(--card))', borderBottom: '1px solid hsl(var(--border))', padding: '4rem 1.5rem 3rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p className="iron-label" style={{ marginBottom: '0.75rem' }}>Our Work</p>
          <h1 className="iron-display" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', color: 'hsl(var(--foreground))' }}>
            Before the Forms. After the Cure.
          </h1>
          <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '1rem', color: 'hsl(var(--muted-foreground))', marginTop: '1rem', maxWidth: '550px', lineHeight: 1.65 }}>
            347 projects across South Maui. Driveways, foundations, retaining walls, decorative patios, commercial slabs. All poured by Burt.
          </p>
        </div>
      </section>

      {/* Portfolio metrics strip */}
      <section style={{ borderBottom: '1px solid hsl(var(--border))', backgroundColor: 'hsl(var(--background))' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '1.5rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '1.5rem' }}>
          {[
            { value: '347', label: 'Projects' },
            { value: '7', label: 'Maui Towns' },
            { value: '5.0', label: 'Google Rating' },
            { value: '20+', label: 'Years' },
          ].map((stat) => (
            <div key={stat.label} className="iron-stat">
              <div style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: '1.6rem', color: 'hsl(var(--foreground))', lineHeight: 1 }}>{stat.value}</div>
              <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.18em', color: 'hsl(var(--muted-foreground))', marginTop: '0.2rem' }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Filter pills */}
      <section style={{ backgroundColor: 'hsl(var(--background))', borderBottom: '1px solid hsl(var(--border))', padding: '1rem 1.5rem', overflowX: 'auto' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', gap: '0.5rem', flexWrap: 'nowrap' }}>
          {filterTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveFilter(tag)}
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.68rem',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                color: activeFilter === tag ? 'hsl(var(--accent-foreground))' : 'hsl(var(--foreground))',
                backgroundColor: activeFilter === tag ? 'hsl(var(--accent))' : 'transparent',
                border: `1px solid ${activeFilter === tag ? 'hsl(var(--accent))' : 'hsl(var(--border))'}`,
                padding: '0.4rem 0.85rem',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                transition: 'background-color 0.2s, border-color 0.2s, color 0.2s',
              }}
            >
              {tag}
            </button>
          ))}
        </div>
      </section>

      {/* Gallery grid */}
      <section style={{ backgroundColor: 'hsl(var(--background))', padding: 'clamp(3rem, 6vw, 5rem) 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', gridAutoRows: '280px' }}>
            {filteredItems.map((item) => (
              <figure
                key={item.caption}
                style={{
                  margin: 0,
                  gridColumn: item.wide ? 'span 2' : 'span 1',
                  position: 'relative',
                  overflow: 'hidden',
                  border: '1px solid hsl(var(--border))',
                }}
              >
                <img
                  src={item.photo}
                  alt={item.alt}
                  loading="lazy"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.4s ease' }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.04)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                />
                {/* Caption overlay */}
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, hsl(220 45% 7% / 0.85) 0%, transparent 50%)', pointerEvents: 'none' }} />
                <figcaption style={{
                  position: 'absolute',
                  bottom: '1rem',
                  left: '1rem',
                  right: '1rem',
                  display: 'flex',
                  alignItems: 'baseline',
                  gap: '0.6rem',
                }}>
                  <span style={{
                    fontFamily: 'Oswald, sans-serif',
                    fontSize: '0.62rem',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.12em',
                    color: 'hsl(var(--accent))',
                    backgroundColor: 'hsl(var(--background) / 0.85)',
                    padding: '0.2rem 0.5rem',
                    flexShrink: 0,
                  }}>
                    {item.tag}
                  </span>
                  <span style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '0.72rem',
                    fontWeight: 500,
                    textTransform: 'uppercase',
                    letterSpacing: '0.12em',
                    color: 'hsl(var(--foreground) / 0.85)',
                  }}>
                    {item.caption}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: 'hsl(var(--card))', borderTop: '2px solid hsl(var(--accent))', padding: 'clamp(3rem, 6vw, 5rem) 1.5rem', textAlign: 'center' }}>
        <h2 className="iron-display" style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.6rem)', color: 'hsl(var(--foreground))', marginBottom: '1rem' }}>
          Your Project Could Be Next
        </h2>
        <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '0.97rem', color: 'hsl(var(--muted-foreground))', lineHeight: 1.7, maxWidth: '480px', margin: '0 auto 2rem' }}>
          Free estimate. Site walk included. Burt gives you a firm number before work starts.
        </p>
        <a href="/contact" className="iron-btn">
          Get a Free Quote
        </a>
      </section>
    </>
  )
}
