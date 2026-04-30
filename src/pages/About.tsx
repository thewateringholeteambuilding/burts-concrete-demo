import { Link } from 'react-router-dom'
import { ArrowRight, Phone } from 'lucide-react'

const ABOUT_PHOTO = 'https://images.unsplash.com/photo-1685464197603-787dabbdecbd?auto=format&fit=crop&w=900&q=80'

export default function About() {
  return (
    <>
      {/* Page header */}
      <section style={{ backgroundColor: 'hsl(var(--card))', borderBottom: '1px solid hsl(var(--border))', padding: '4rem 1.5rem 3rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p className="iron-label" style={{ marginBottom: '0.75rem' }}>Our Story</p>
          <h1 className="iron-display" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', color: 'hsl(var(--foreground))' }}>
            About Burt's Concrete
          </h1>
        </div>
      </section>

      {/* Main story section */}
      <section style={{ padding: 'clamp(3rem, 8vw, 6rem) 0', backgroundColor: 'hsl(var(--background))' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem', display: 'grid', gridTemplateColumns: '1fr', gap: '4rem' }} className="md:grid-cols-2">

          {/* Copy */}
          <div>
            <h2 className="iron-display" style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.6rem)', color: 'hsl(var(--foreground))', marginBottom: '1.5rem' }}>
              More Than Two Decades in South Maui Soil
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '0.97rem', color: 'hsl(var(--muted-foreground))', lineHeight: 1.75 }}>
                I started pouring concrete on Maui in the early 2000s, working jobs from Kihei to Wailea to Makena. I learned the soil. Volcanic profiles, salt air, hillside drainage, the way the sun bakes an east-facing slab differently in Kihei than it does in Kahului.
              </p>
              <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '0.97rem', color: 'hsl(var(--muted-foreground))', lineHeight: 1.75 }}>
                Eventually I went out on my own. Burt's Concrete has been owner-operated since day one. I'm on site for every pour. Not a foreman. Not a crew that shows up with my company truck. Me.
              </p>
              <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '0.97rem', color: 'hsl(var(--muted-foreground))', lineHeight: 1.75 }}>
                I pick up the phone. I return texts same day. When I give you a number, that's the number. No line-item surprises when the invoice arrives.
              </p>
              <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '0.97rem', color: 'hsl(var(--muted-foreground))', lineHeight: 1.75 }}>
                347 projects completed across South Maui. Foundations, driveways, patios, retaining walls, sidewalks, decorative finishes. If it requires concrete, I've poured it on this island.
              </p>
            </div>

            <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link to="/contact" className="iron-btn">
                Talk to Burt
                <ArrowRight size={14} />
              </Link>
              <a href="tel:+18088759085" className="iron-btn iron-btn--ghost">
                <Phone size={14} />
                (808) 875-9085
              </a>
            </div>
          </div>

          {/* Photo */}
          <div style={{ position: 'relative', minHeight: '420px' }}>
            {/* Brass corner, top left */}
            <div style={{ position: 'absolute', top: '-12px', left: '-12px', width: '36px', height: '36px', borderTop: '3px solid hsl(var(--accent))', borderLeft: '3px solid hsl(var(--accent))', zIndex: 5 }} />

            <img
              src={ABOUT_PHOTO}
              alt="Concrete retaining wall construction on a Maui hillside"
              loading="lazy"
              style={{ width: '100%', height: '100%', objectFit: 'cover', minHeight: '420px' }}
            />
          </div>
        </div>
      </section>

      {/* Values / differentiators */}
      <section style={{ backgroundColor: 'hsl(var(--card))', borderTop: '1px solid hsl(var(--border))', borderBottom: '1px solid hsl(var(--border))', padding: 'clamp(3rem, 6vw, 5rem) 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
          <p className="iron-label" style={{ marginBottom: '0.75rem', textAlign: 'center' }}>Who Calls Burt</p>
          <h2 className="iron-display" style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.6rem)', color: 'hsl(var(--foreground))', marginBottom: '3rem', textAlign: 'center' }}>
            Every Project Starts With a Conversation
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1px', backgroundColor: 'hsl(var(--border))' }}>
            {[
              {
                type: 'Homeowners',
                scenario: 'Driveway cracking after 8 years. Need it torn out and repoured before listing the house. Want a firm price and a crew that shows up on the scheduled day.',
              },
              {
                type: 'Vacation Rental Owners',
                scenario: 'Lanai and pool deck need resurfacing between bookings. Tight timeline, clean handoff, and zero guest disruption. Burt has done 30+ rental properties in Wailea alone.',
              },
              {
                type: 'General Contractors',
                scenario: 'Foundation sub who answers the phone and delivers on the schedule. Burt coordinates with your framing timeline and pulls his own permits when needed.',
              },
              {
                type: 'Commercial Properties',
                scenario: 'Parking lot expansion, loading dock slab, or ADA sidewalk compliance. Permits, traffic management plan, and weekend pours to minimize business disruption.',
              },
            ].map((item) => (
              <div
                key={item.type}
                style={{ padding: '1.75rem', backgroundColor: 'hsl(var(--background))' }}
              >
                <h3 style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 600, fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'hsl(var(--accent))', marginBottom: '0.75rem' }}>
                  {item.type}
                </h3>
                <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '0.88rem', color: 'hsl(var(--muted-foreground))', lineHeight: 1.65 }}>
                  {item.scenario}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service area */}
      <section style={{ padding: 'clamp(3rem, 6vw, 5rem) 0', backgroundColor: 'hsl(var(--background))' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto', padding: '0 1.5rem', textAlign: 'center' }}>
          <h2 className="iron-display" style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.6rem)', color: 'hsl(var(--foreground))', marginBottom: '1.25rem' }}>
            Based in Kihei, Serving All of Maui
          </h2>
          <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '0.97rem', color: 'hsl(var(--muted-foreground))', lineHeight: 1.75, marginBottom: '1.5rem' }}>
            Kihei is home base. Most work is South Maui: Kihei, Wailea, Makena, Maalaea. We also take jobs in Central Maui (Kahului, Wailuku) and Upcountry when the project fits the schedule.
          </p>
          <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '0.97rem', color: 'hsl(var(--muted-foreground))', lineHeight: 1.75 }}>
            Call to confirm we can get to your site. Burt is direct about what he can and cannot take on.
          </p>
        </div>
      </section>
    </>
  )
}
