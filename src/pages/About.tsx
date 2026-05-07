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
            The Contractor Who Picks Up the Phone
          </h1>
          <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '1rem', color: 'hsl(var(--muted-foreground))', marginTop: '1rem', maxWidth: '550px', lineHeight: 1.65 }}>
            Most homeowners have called a contractor who never called back. Burt answers his own phone, walks your site himself, and gives you a number that doesn't change.
          </p>
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

      {/* Seasonal booking awareness */}
      <section style={{ padding: 'clamp(3rem, 6vw, 5rem) 0', backgroundColor: 'hsl(var(--background))', borderTop: '1px solid hsl(var(--border))' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
          <p className="iron-label" style={{ marginBottom: '0.75rem', textAlign: 'center' }}>Booking Calendar</p>
          <h2 className="iron-display" style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.6rem)', color: 'hsl(var(--foreground))', marginBottom: '3rem', textAlign: 'center' }}>
            When to Book Your Pour
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1px', backgroundColor: 'hsl(var(--border))' }}>
            {[
              {
                season: 'Winter',
                months: 'Dec - Feb',
                demand: 'Moderate',
                leadTime: '2-3 weeks',
                note: 'Cooler mornings mean slower early cure. Best for foundations and covered slabs. Rain delays possible on exposed pours.',
              },
              {
                season: 'Spring',
                months: 'Mar - May',
                demand: 'High',
                leadTime: '3-4 weeks',
                note: 'Peak booking season. Vacation rental owners schedule between guest stays. Book early for driveway and patio work.',
              },
              {
                season: 'Summer',
                months: 'Jun - Aug',
                demand: 'Highest',
                leadTime: '4-6 weeks',
                note: 'Maui heat accelerates curing. Pours start at dawn to avoid midday set. Schedule fills fast. Book by mid-May.',
              },
              {
                season: 'Fall',
                months: 'Sep - Nov',
                demand: 'Moderate',
                leadTime: '2-3 weeks',
                note: 'Ideal pour weather. Consistent temps, lower humidity. Best window for decorative finishes and stamped work.',
              },
            ].map((q) => (
              <div key={q.season} style={{ backgroundColor: 'hsl(var(--card))', padding: '1.75rem' }}>
                <div style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: '1.2rem', textTransform: 'uppercase', letterSpacing: '0.04em', color: 'hsl(var(--foreground))', marginBottom: '0.25rem' }}>
                  {q.season}
                </div>
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.68rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'hsl(var(--muted-foreground))', marginBottom: '1rem' }}>
                  {q.months}
                </div>
                <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '1rem' }}>
                  <div>
                    <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'hsl(var(--muted-foreground))' }}>Demand</div>
                    <div style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 600, fontSize: '0.85rem', color: 'hsl(var(--accent))' }}>{q.demand}</div>
                  </div>
                  <div>
                    <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'hsl(var(--muted-foreground))' }}>Lead Time</div>
                    <div style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 600, fontSize: '0.85rem', color: 'hsl(var(--foreground))' }}>{q.leadTime}</div>
                  </div>
                </div>
                <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '0.82rem', color: 'hsl(var(--muted-foreground))', lineHeight: 1.6 }}>
                  {q.note}
                </p>
              </div>
            ))}
          </div>

          <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '0.78rem', color: 'hsl(var(--muted-foreground))', textAlign: 'center', marginTop: '1.5rem', fontStyle: 'italic' }}>
            Grade the soil. Set the forms. Pour it right.
          </p>
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

      {/* Prefooter CTA */}
      <section style={{ backgroundColor: 'hsl(var(--accent))', padding: 'clamp(2.5rem, 5vw, 3.5rem) 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.5rem' }}>
          <div>
            <div style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', textTransform: 'uppercase', letterSpacing: '-0.01em', lineHeight: 0.95, color: 'hsl(var(--accent-foreground))' }}>
              Ready to Talk Concrete?
            </div>
            <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '0.9rem', color: 'hsl(var(--accent-foreground) / 0.75)', marginTop: '0.5rem', lineHeight: 1.5, maxWidth: '420px' }}>
              Free site walk. Firm number. Burt handles it personally from estimate to cleanup.
            </p>
          </div>
          <Link to="/contact" className="iron-btn" style={{ backgroundColor: 'hsl(var(--background))', color: 'hsl(var(--foreground))' }}>
            Get a Free Estimate
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </>
  )
}
