const galleryItems = [
  {
    photo: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80',
    caption: 'Residential driveway, Kihei',
    alt: 'Finished residential concrete driveway in Kihei South Maui',
    wide: true,
  },
  {
    photo: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=700&q=80',
    caption: 'Foundation rebar and forms, pre-pour',
    alt: 'Concrete foundation with rebar placement before pour',
    wide: false,
  },
  {
    photo: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=700&q=80',
    caption: 'Retaining wall, hillside property',
    alt: 'Concrete retaining wall on a South Maui hillside property',
    wide: false,
  },
  {
    photo: 'https://images.unsplash.com/photo-1503387837-b154d5074bd2?auto=format&fit=crop&w=900&q=80',
    caption: 'Stamped patio, Wailea residence',
    alt: 'Stamped decorative concrete patio at a Wailea residence',
    wide: true,
  },
  {
    photo: 'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?auto=format&fit=crop&w=700&q=80',
    caption: 'Flatwork sidewalk, commercial property',
    alt: 'Concrete flatwork sidewalk at a commercial property',
    wide: false,
  },
  {
    photo: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=700&q=80',
    caption: 'Commercial slab, Kihei',
    alt: 'Large commercial concrete slab in Kihei',
    wide: false,
  },
  {
    photo: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=80',
    caption: 'Active pour, South Maui project',
    alt: 'Concrete pour in progress at a South Maui job site',
    wide: true,
  },
]

export default function Gallery() {
  return (
    <>
      {/* Page header */}
      <section style={{ backgroundColor: 'hsl(var(--card))', borderBottom: '1px solid hsl(var(--border))', padding: '4rem 1.5rem 3rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p className="iron-label" style={{ marginBottom: '0.75rem' }}>§ Our Work</p>
          <h1 className="iron-display" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', color: 'hsl(var(--foreground))' }}>
            Project Gallery
          </h1>
          <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '1rem', color: 'hsl(var(--muted-foreground))', marginTop: '1rem', maxWidth: '550px', lineHeight: 1.65 }}>
            Residential driveways, foundations, retaining walls, decorative patios, commercial slabs. All poured by Burt in South Maui.
          </p>
        </div>
      </section>

      {/* Gallery grid */}
      <section style={{ backgroundColor: 'hsl(var(--background))', padding: 'clamp(3rem, 6vw, 5rem) 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', gridAutoRows: '280px' }}>
            {galleryItems.map((item) => (
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
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.72rem',
                  fontWeight: 500,
                  textTransform: 'uppercase',
                  letterSpacing: '0.15em',
                  color: 'hsl(var(--foreground) / 0.85)',
                }}>
                  {item.caption}
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
