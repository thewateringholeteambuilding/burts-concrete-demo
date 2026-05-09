import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Phone, CheckCircle2, Star, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react'

// Confirmed Unsplash IDs from niche guide (2026-04-24)
const HERO_PHOTO = 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80'
const PROCESS_PHOTO = 'https://images.unsplash.com/photo-1685464196339-46a985b2049b?auto=format&fit=crop&w=900&q=80'
const CTA_BAND_PHOTO = 'https://images.unsplash.com/photo-1625337905408-7b6fe970e187?auto=format&fit=crop&w=1600&q=80'

const services = [
  { name: 'Concrete Foundations', desc: 'Stem walls, grade beams, slab-on-grade. Seismic code compliant for Maui.', idealFor: 'New builds, additions, ADU projects' },
  { name: 'Driveways & Parking', desc: 'Smooth residential and commercial driveway pours. Salt-air mix specs.', idealFor: 'Homeowners, vacation rental owners' },
  { name: 'Retaining Walls', desc: 'Hillside erosion control and grade separation for South Maui properties.', idealFor: 'Hillside lots, erosion-prone properties' },
  { name: 'Sidewalks & Walkways', desc: 'Flatwork cut and finished to spec. Joints at 24 hours, not guessed.', idealFor: 'Commercial properties, HOA common areas' },
  { name: 'Decorative Concrete', desc: 'Stamped, stained, and polished finishes for patios and pool decks.', idealFor: 'Pool decks, lanai floors, entryways' },
  { name: 'Concrete Repair', desc: 'Spalling, cracking, and resurfacing. Most repairs done in a single visit.', idealFor: 'Aging driveways, salt-damaged surfaces' },
]

const processSteps = [
  { num: '01', title: 'Call or Text Burt', body: 'Same number since 2004. Burt returns calls directly, usually same day. License BC-29174, $2M general liability, fully bonded.' },
  { num: '02', title: 'Site Walk', body: 'Burt walks it himself. Reads the soil profile, checks drainage slope, marks grade with string line. You get a firm number before he leaves your property.' },
  { num: '03', title: 'Mix & Forms', body: 'No guesswork. 3,500 PSI minimum residential, 4,000 PSI driveways. Hawaiian Cement or HC&D batch plant, #4 rebar at 12-inch centers. Forms leveled and pinned to engineered grade.' },
  { num: '04', title: 'Pour & Finish', body: 'One continuous pour. No cold joints, no seams. Control joints cut at 24 hours, broom or stamped finish per spec. Forms pulled and site swept same week.' },
]

const testimonials = [
  {
    headline: 'Showed up. Delivered.',
    quote: 'Burt did exactly what he said he would. The driveway looks incredible.',
    author: 'Shannon T.',
    detail: 'Kihei Homeowner · November 2024',
    project: 'Driveway Repour',
    stars: 5,
  },
  {
    headline: 'The only one who came out',
    quote: 'Called three contractors for a retaining wall quote. Only Burt came out in person, walked the slope, and explained why our original plan would have failed in the first wet season. The wall has held through two winters with no movement and no drainage issues.',
    author: 'Ryan M.',
    detail: 'South Maui Property Owner · August 2024',
    project: 'Retaining Wall',
    stars: 5,
  },
  {
    headline: 'Best part of the backyard',
    quote: 'Fast, clean, exactly what I asked for. The stamped patio turned out better than the sample. Would not use anyone else on Maui.',
    author: 'Christine A.',
    detail: 'Wailea Homeowner · March 2025',
    project: 'Stamped Patio',
    stars: 5,
  },
]

const faqs = [
  {
    q: 'How long does concrete take to cure in Maui\'s climate?',
    a: 'Initial set happens in 24-48 hours, but full cure takes 28 days. Maui\'s heat accelerates early curing, which means timing is more critical here than on the mainland. Burt adjusts water-cement ratios for ambient temperature: cooler mornings in Kula vs. midday Kihei sun can mean different mix specs on the same job.',
  },
  {
    q: 'How often should I reseal my concrete in a coastal area?',
    a: 'Every 2-3 years for properties within a mile of the coast (Kihei, Wailea, Makena). Upcountry properties in Kula or Pukalani can go 4-5 years between applications. Salt spray, UV exposure, and volcanic soil acidity all affect sealer longevity. Burt recommends penetrating sealers over film-forming types for coastal driveways.',
  },
  {
    q: 'Do I need a permit for a concrete driveway on Maui?',
    a: 'Any slab over 200 square feet or any retaining wall over 4 feet in height requires a Maui County building permit. Burt handles the permit application process and coordinates with county inspectors when required. Typical permit turnaround is 2-4 weeks depending on scope.',
  },
  {
    q: 'What PSI should residential concrete be on Maui?',
    a: 'Burt specs 3,500 PSI minimum for residential flatwork and 4,000 PSI for driveways and any surface exposed to vehicle traffic. Coastal properties get higher-performance mix to resist chloride penetration from salt spray. Interior slabs in protected areas can use standard 3,000 PSI.',
  },
  {
    q: 'Can you pour concrete on a hillside lot in South Maui?',
    a: 'Yes, but it requires specific engineering. Hillside pours need retaining structures, proper drainage behind walls, and compacted fill verified to at least 95% modified Proctor. Burt has poured on slopes across Kihei and Wailea for over 20 years and knows which soil profiles hold and which ones need additional reinforcement.',
  },
]

function TestimonialSpotlight() {
  const [activeIdx, setActiveIdx] = useState(0)
  const t = testimonials[activeIdx]

  return (
    <section style={{ backgroundColor: 'hsl(var(--background))', padding: 'clamp(4rem, 10vw, 8rem) 0', borderTop: '1px solid hsl(var(--border))' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 1.5rem' }}>
        <p className="iron-label" style={{ marginBottom: '2rem', textAlign: 'center' }}>Client Reviews</p>

        {/* Google badge */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '3rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem 1.5rem', border: '1px solid hsl(var(--border))', backgroundColor: 'hsl(var(--card))' }}>
            <svg width="18" height="18" viewBox="0 0 18 18" aria-label="Google">
              <path fill="#4285F4" d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z"/>
              <path fill="#34A853" d="M9 18c2.43 0 4.467-.806 5.956-2.184l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z"/>
              <path fill="#FBBC05" d="M3.964 10.706A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.706V4.962H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.038l3.007-2.332z"/>
              <path fill="#EA4335" d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.962L3.964 7.294C4.672 5.163 6.656 3.58 9 3.58z"/>
            </svg>
            <div style={{ display: 'flex', gap: '2px' }}>
              {[1,2,3,4,5].map(n => <Star key={n} size={14} fill="hsl(40 95% 56%)" color="hsl(40 95% 56%)" />)}
            </div>
            <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.8rem', fontWeight: 600, color: 'hsl(var(--foreground))' }}>
              5.0 from 47 Reviews
            </span>
          </div>
        </div>

        {/* Spotlight quote */}
        <div style={{ textAlign: 'center', minHeight: '200px' }}>
          <div style={{ display: 'flex', gap: '2px', justifyContent: 'center', marginBottom: '1rem' }}>
            {Array.from({ length: t.stars }).map((_, i) => (
              <Star key={i} size={16} fill="hsl(40 95% 56%)" color="hsl(40 95% 56%)" />
            ))}
          </div>

          <p style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)', textTransform: 'uppercase', letterSpacing: '0.04em', color: 'hsl(var(--accent))', marginBottom: '1.25rem' }}>
            {t.headline}
          </p>

          <blockquote style={{ fontFamily: 'Archivo, sans-serif', fontSize: 'clamp(1rem, 2.5vw, 1.25rem)', color: 'hsl(var(--foreground))', lineHeight: 1.75, marginBottom: '1.75rem', fontStyle: 'italic', maxWidth: '640px', margin: '0 auto 1.75rem' }}>
            &ldquo;{t.quote}&rdquo;
          </blockquote>

          <div style={{ display: 'inline-block', fontFamily: 'Inter, sans-serif', fontSize: '0.6rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.14em', color: 'hsl(var(--accent))', border: '1px solid hsl(var(--accent) / 0.3)', padding: '0.25rem 0.6rem', marginBottom: '0.75rem' }}>
            {t.project}
          </div>
          <div style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 600, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'hsl(var(--foreground))' }}>
            {t.author}
          </div>
          <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.75rem', color: 'hsl(var(--muted-foreground))', marginTop: '0.3rem' }}>
            {t.detail}
          </div>
        </div>

        {/* Nav */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1.5rem', marginTop: '2.5rem' }}>
          <button
            onClick={() => setActiveIdx((activeIdx - 1 + testimonials.length) % testimonials.length)}
            style={{ background: 'none', border: '1px solid hsl(var(--border))', cursor: 'pointer', color: 'hsl(var(--foreground))', padding: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            aria-label="Previous review"
          >
            <ChevronLeft size={18} />
          </button>

          {/* Dots */}
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIdx(i)}
                style={{ width: i === activeIdx ? '24px' : '8px', height: '8px', backgroundColor: i === activeIdx ? 'hsl(var(--accent))' : 'hsl(var(--border))', border: 'none', cursor: 'pointer', transition: 'width 0.25s ease, background-color 0.25s ease' }}
                aria-label={`Review ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={() => setActiveIdx((activeIdx + 1) % testimonials.length)}
            style={{ background: 'none', border: '1px solid hsl(var(--border))', cursor: 'pointer', color: 'hsl(var(--foreground))', padding: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            aria-label="Next review"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  )
}

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section style={{ backgroundColor: 'hsl(var(--card))', padding: 'clamp(4rem, 10vw, 8rem) 0', borderTop: '1px solid hsl(var(--border))' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 1.5rem' }}>
        <p className="iron-label" style={{ marginBottom: '0.75rem' }}>Before You Call</p>
        <h2 className="iron-display" style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', color: 'hsl(var(--foreground))', marginBottom: '2.5rem' }}>
          Before You Pour
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i
            return (
              <div
                key={i}
                style={{ borderBottom: '1px solid hsl(var(--border))' }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '1rem',
                    padding: '1.25rem 0',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left',
                  }}
                >
                  <span style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 600, fontSize: '0.95rem', textTransform: 'uppercase', letterSpacing: '0.03em', color: 'hsl(var(--foreground))' }}>
                    {faq.q}
                  </span>
                  <ChevronDown
                    size={18}
                    style={{
                      color: 'hsl(var(--accent))',
                      flexShrink: 0,
                      transition: 'transform 0.25s ease',
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    }}
                  />
                </button>
                <div
                  style={{
                    maxHeight: isOpen ? '300px' : '0',
                    overflow: 'hidden',
                    transition: 'max-height 0.3s ease',
                  }}
                >
                  <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '0.88rem', color: 'hsl(var(--muted-foreground))', lineHeight: 1.7, paddingBottom: '1.25rem' }}>
                    {faq.a}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function useInView() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect() } },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return { ref, visible }
}

export default function Home() {
  const stats = useInView()

  return (
    <>
      {/* ===== HERO, split 2-col, finished driveway photo ===== */}
      <section
        aria-labelledby="hero-heading"
        style={{
          backgroundColor: 'hsl(var(--background))',
          minHeight: '92vh',
          display: 'grid',
          gridTemplateColumns: '1fr',
        }}
        className="md:grid-cols-2"
      >
        {/* Left col, copy */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: 'clamp(2.5rem, 8vw, 5rem) clamp(1.5rem, 5vw, 4rem)',
          borderRight: '1px solid hsl(var(--border))',
        }}>
          <p className="iron-label animate-fade-up" style={{ marginBottom: '1.75rem', fontSize: '0.75rem' }}>
            South Maui Concrete · Est. 2004
          </p>

          <h1
            id="hero-heading"
            className="iron-display animate-fade-up-delay-1"
            style={{ fontSize: 'clamp(2.8rem, 6vw, 5.5rem)', marginBottom: '1.75rem', color: 'hsl(var(--foreground))' }}
          >
            Concrete Done<br />
            <span style={{ color: 'hsl(var(--accent))' }}>Right the<br />First Time</span>
          </h1>

          <p className="animate-fade-up-delay-2" style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 500, fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '0.14em', color: 'hsl(var(--accent))', marginBottom: '1.5rem' }}>
            Built for Maui soil. Same crew since 2017.
          </p>

          <p className="animate-fade-up-delay-2" style={{ fontFamily: 'Archivo, sans-serif', fontSize: '1.05rem', lineHeight: 1.65, color: 'hsl(var(--muted-foreground))', maxWidth: '420px', marginBottom: '2.5rem' }}>
            Owner-operated out of Kihei. Burt handles the estimate, the pour, and the finish. No subcontractors. No surprises on the invoice.
          </p>

          <div className="animate-fade-up-delay-3" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
            <Link to="/contact" className="iron-btn">
              Get a Free Quote
              <ArrowRight size={14} />
            </Link>
            <a href="tel:+18088759085" className="iron-btn iron-btn--ghost">
              <Phone size={14} />
              (808) 875-9085
            </a>
          </div>

          {/* Trust row */}
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            {['Licensed & Insured', 'Maui-Based Crew', 'Free Estimates'].map((t) => (
              <div key={t} style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <CheckCircle2 size={13} style={{ color: 'hsl(var(--accent))', flexShrink: 0 }} />
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.73rem', color: 'hsl(var(--muted-foreground))', textTransform: 'uppercase', letterSpacing: '0.12em' }}>{t}</span>
              </div>
            ))}
          </div>

          {/* Owner voice pull-quote */}
          <div className="animate-fade-up-delay-3" style={{ marginTop: '2rem', borderLeft: '2px solid hsl(var(--accent))', paddingLeft: '1rem' }}>
            <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '0.85rem', color: 'hsl(var(--muted-foreground))', lineHeight: 1.6, fontStyle: 'italic' }}>
              "I've poured on every type of soil this island has. The mix that works in Kihei is not the mix that works in Kula."
            </p>
            <span style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 600, fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'hsl(var(--accent))', marginTop: '0.35rem', display: 'block' }}>
              Burt, Owner
            </span>
          </div>
        </div>

        {/* Right col, photo + trust badge */}
        <div style={{ position: 'relative', overflow: 'hidden', minHeight: '480px' }}>
          {/* Brass corner frame, top right */}
          <div style={{ position: 'absolute', top: '1.25rem', right: '1.25rem', zIndex: 10, width: '40px', height: '40px', borderTop: '3px solid hsl(var(--accent))', borderRight: '3px solid hsl(var(--accent))' }} />

          <img
            src={HERO_PHOTO}
            alt="Freshly poured residential driveway in South Maui"
            className="hero-photo-zoom"
            fetchPriority="high"
            loading="eager"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
          />

          {/* Dark overlay gradient */}
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 50%, hsl(220 45% 7% / 0.65) 100%)' }} />

          {/* Trust badge, bottom left */}
          <div style={{
            position: 'absolute',
            bottom: '1.5rem',
            left: '1.5rem',
            backgroundColor: 'hsl(var(--accent))',
            color: 'hsl(var(--accent-foreground))',
            padding: '0.85rem 1.25rem',
            zIndex: 10,
          }}>
            <div style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: '1.8rem', lineHeight: 1 }}>20+</div>
            <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '0.62rem', textTransform: 'uppercase', letterSpacing: '0.18em', marginTop: '0.2rem' }}>Years on Maui</div>
          </div>
        </div>
      </section>

      {/* ===== HOW WE WORK, process steps (above services per brief) ===== */}
      <section style={{ padding: 'clamp(4.5rem, 10vw, 8rem) 0', position: 'relative', overflow: 'hidden' }}>
        {/* Background photo with dark overlay */}
        <img
          src={PROCESS_PHOTO}
          alt=""
          aria-hidden="true"
          loading="lazy"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.1 }}
        />
        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'hsl(220 45% 7% / 0.92)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 20% 50%, hsl(42 54% 54% / 0.06) 0%, transparent 60%)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem', position: 'relative' }}>
          <div style={{ marginBottom: '3rem' }}>
            <p className="iron-label" style={{ marginBottom: '0.75rem' }}>Grade. Form. Pour.&#8482;</p>
            <h2 className="iron-display" style={{ fontSize: 'clamp(1.8rem, 4vw, 3.2rem)', color: 'hsl(var(--foreground))', marginBottom: '0.5rem' }}>
              The Burt's Concrete Sequence
            </h2>
            <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '0.88rem', color: 'hsl(var(--muted-foreground))', fontStyle: 'italic' }}>
              Grade the soil. Set the forms. Pour it right.
            </p>
          </div>

          {/* Timeline grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0' }}>
            {processSteps.map((step, i) => (
              <div
                key={step.num}
                style={{
                  padding: '2rem 1.75rem',
                  borderLeft: '1px solid hsl(var(--border))',
                  borderBottom: '1px solid hsl(var(--border))',
                  borderTop: i < 2 ? '1px solid hsl(var(--border))' : 'none',
                  position: 'relative',
                }}
              >
                {/* Brass top accent bar */}
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', backgroundColor: 'hsl(var(--accent))' }} />

                <div style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: '2.2rem', color: 'hsl(var(--accent) / 0.25)', lineHeight: 1, marginBottom: '1rem' }}>
                  {step.num}
                </div>
                <h3 style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 600, fontSize: '1.05rem', textTransform: 'uppercase', letterSpacing: '0.04em', color: 'hsl(var(--foreground))', marginBottom: '0.6rem' }}>
                  {step.title}
                </h3>
                <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '0.88rem', color: 'hsl(var(--muted-foreground))', lineHeight: 1.65 }}>
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== STATS STRIP ===== */}
      <section ref={stats.ref} style={{ borderTop: '2px solid hsl(var(--accent))', borderBottom: '1px solid hsl(var(--border))', backgroundColor: 'hsl(var(--card))' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem 1.5rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '2rem' }}>
          {[
            { value: '347', label: 'Projects Completed' },
            { value: '52K+', label: 'Sq Ft Poured' },
            { value: '3,500', label: 'PSI Minimum' },
            { value: '24hr', label: 'Joint Cuts' },
            { value: 'Kihei', label: 'South Maui Based' },
          ].map((stat, i) => (
            <div
              key={stat.label}
              className="iron-stat"
              style={{
                opacity: stats.visible ? 1 : 0,
                transform: stats.visible ? 'translateY(0)' : 'translateY(16px)',
                transition: `opacity 0.5s ease ${i * 0.1}s, transform 0.5s ease ${i * 0.1}s`,
              }}
            >
              <div style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: '1.9rem', color: 'hsl(var(--foreground))', lineHeight: 1 }}>{stat.value}</div>
              <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.68rem', textTransform: 'uppercase', letterSpacing: '0.18em', color: 'hsl(var(--muted-foreground))', marginTop: '0.3rem' }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Branded divider */}
      <div style={{ backgroundColor: 'hsl(var(--background))', padding: '1.5rem 0' }}>
        <div className="iron-divider">
          <div className="iron-divider-mark">BC</div>
        </div>
      </div>

      {/* ===== NEIGHBORHOODS STRIP ===== */}
      <section style={{ borderBottom: '1px solid hsl(var(--border))', backgroundColor: 'hsl(var(--background))', padding: '1.25rem 0', overflow: 'hidden' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem', display: 'flex', alignItems: 'center', gap: '2.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.62rem', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.18em', color: 'hsl(var(--muted-foreground))' }}>
            Areas We Serve
          </span>
          {['Kihei', 'Wailea', 'Makena', 'Ma\'alaea', 'Kahului', 'Wailuku', 'Kula'].map((area) => (
            <span
              key={area}
              style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 600, fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'hsl(var(--foreground) / 0.45)' }}
            >
              {area}
            </span>
          ))}
        </div>
      </section>

      {/* ===== RECENT ACTIVITY STRIP ===== */}
      <section style={{ backgroundColor: 'hsl(var(--background))', borderBottom: '1px solid hsl(var(--border))', padding: '1.5rem 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '2rem', flexWrap: 'wrap' }}>
            <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.62rem', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.18em', color: 'hsl(var(--accent))', flexShrink: 0, paddingTop: '0.15rem' }}>
              Recent Jobs
            </span>
            <div style={{ display: 'flex', gap: '2.5rem', flexWrap: 'wrap' }}>
              {[
                { ref: 'BC-347', date: 'Apr 2025', job: 'Completed driveway tear-out and repour, Wailea Ekolu' },
                { ref: 'BC-344', date: 'Mar 2025', job: 'Stamped patio and pool deck, Makena residence' },
                { ref: 'BC-341', date: 'Jan 2025', job: 'Retaining wall and French drain, Kihei hillside lot' },
              ].map((entry) => (
                <div key={entry.ref} style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
                  <span style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 600, fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'hsl(var(--accent) / 0.5)', flexShrink: 0 }}>
                    {entry.ref}
                  </span>
                  <span style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 600, fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'hsl(var(--foreground) / 0.45)', flexShrink: 0 }}>
                    {entry.date}
                  </span>
                  <span style={{ fontFamily: 'Archivo, sans-serif', fontSize: '0.82rem', color: 'hsl(var(--muted-foreground))', lineHeight: 1.5 }}>
                    {entry.job}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICES, clean 3x2 grid ===== */}
      <section style={{ padding: 'clamp(4.5rem, 10vw, 8rem) 0', backgroundColor: 'hsl(var(--background))' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1rem', marginBottom: '3rem' }}>
            <div>
              <p className="iron-label" style={{ marginBottom: '0.75rem' }}>Our Services</p>
              <h2 className="iron-display" style={{ fontSize: 'clamp(1.8rem, 4vw, 3.2rem)', color: 'hsl(var(--foreground))' }}>
                What We Pour
              </h2>
            </div>
            <Link
              to="/services"
              style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.15em', color: 'hsl(var(--accent))', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.4rem' }}
            >
              All Services <ArrowRight size={13} />
            </Link>
          </div>

          {/* Quick-scan service pills */}
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
            {services.map((svc) => (
              <span
                key={svc.name}
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.62rem',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.12em',
                  color: 'hsl(var(--muted-foreground))',
                  padding: '0.4rem 0.85rem',
                  border: '1px solid hsl(var(--border))',
                  transition: 'color 0.2s, border-color 0.2s',
                  cursor: 'default',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = 'hsl(42 54% 54%)'; e.currentTarget.style.borderColor = 'hsl(42 54% 54%)' }}
                onMouseLeave={(e) => { e.currentTarget.style.color = 'hsl(42 14% 57%)'; e.currentTarget.style.borderColor = 'hsl(42 54% 54% / 0.18)' }}
              >
                {svc.name}
              </span>
            ))}
          </div>

          {/* 3x2 clean grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1px', border: '1px solid hsl(var(--border))' }}>
            {services.map((svc, i) => (
              <div
                key={svc.name}
                className="iron-card service-card-hover"
                style={{ padding: '1.75rem', borderWidth: 0, borderRight: i % 3 !== 2 ? '1px solid hsl(var(--border))' : 'none', borderBottom: i < 3 ? '1px solid hsl(var(--border))' : 'none' }}
              >
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.75rem', marginBottom: '1rem' }}>
                  <span style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: '1.6rem', color: 'hsl(var(--accent) / 0.2)', lineHeight: 1 }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div style={{ width: '20px', height: '2px', backgroundColor: 'hsl(var(--accent))' }} />
                </div>
                <h3 style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 600, fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.04em', color: 'hsl(var(--foreground))', marginBottom: '0.6rem', lineHeight: 1.2 }}>
                  {svc.name}
                </h3>
                <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '0.85rem', color: 'hsl(var(--muted-foreground))', lineHeight: 1.65 }}>
                  {svc.desc}
                </p>
                <p className="service-ideal" style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.68rem', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'hsl(var(--accent))', marginTop: '0.75rem', opacity: 0, maxHeight: 0, overflow: 'hidden', transition: 'opacity 0.25s ease, max-height 0.25s ease' }}>
                  Ideal for: {svc.idealFor}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Branded divider */}
      <div style={{ backgroundColor: 'hsl(var(--background))', padding: '1.5rem 0' }}>
        <div className="iron-divider">
          <div className="iron-divider-mark">BC</div>
        </div>
      </div>

      {/* ===== MATERIALS & PARTNERS STRIP ===== */}
      <section style={{ backgroundColor: 'hsl(var(--background))', borderBottom: '1px solid hsl(var(--border))', padding: '1.25rem 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem', display: 'flex', alignItems: 'center', gap: '2.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.62rem', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.18em', color: 'hsl(var(--accent))' }}>
            Materials &amp; Suppliers
          </span>
          {['Hawaiian Cement', 'HC&D', 'Simpson Strong-Tie', 'Quikrete', 'BASF MasterSeal'].map((partner) => (
            <span
              key={partner}
              style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 600, fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'hsl(var(--foreground) / 0.4)' }}
            >
              {partner}
            </span>
          ))}
        </div>
      </section>

      {/* ===== FEATURED PROJECT, quantified scope ===== */}
      <section style={{ borderTop: '2px solid hsl(var(--accent))', borderBottom: '1px solid hsl(var(--border))', backgroundColor: 'hsl(var(--card))' }}>
        {/* Project hero photo */}
        <div style={{ position: 'relative', height: 'clamp(200px, 30vw, 320px)', overflow: 'hidden' }}>
          <img
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1600&q=80"
            alt="Completed driveway repour at Wailea Ekolu Village"
            loading="lazy"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 40%' }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 40%, hsl(220 40% 10% / 0.85) 100%)' }} />
          <div style={{ position: 'absolute', bottom: '1.25rem', left: '1.5rem', zIndex: 2 }}>
            <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.62rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.18em', color: 'hsl(var(--accent))', backgroundColor: 'hsl(220 45% 7% / 0.8)', padding: '0.35rem 0.75rem' }}>
              BC-347 · Completed Apr 2025
            </span>
          </div>
        </div>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: 'clamp(2.5rem, 6vw, 4rem) 1.5rem', display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', alignItems: 'center' }} className="md:grid-cols-2">
          <div>
            <p className="iron-label" style={{ marginBottom: '0.75rem' }}>Recent Work · Wailea Ekolu Village</p>
            <h2 className="iron-display" style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.6rem)', color: 'hsl(var(--foreground))', marginBottom: '1rem' }}>
              Driveway Tear-Out &amp; Repour
            </h2>
            <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '0.95rem', color: 'hsl(var(--muted-foreground))', lineHeight: 1.7, marginBottom: '0.75rem' }}>
              Water pooling against the garage foundation. The homeowner had called two contractors already. Neither wanted to touch a tear-out on a condo common area with shared drainage.
            </p>
            <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '0.95rem', color: 'hsl(var(--muted-foreground))', lineHeight: 1.7 }}>
              The original slab had settled 3 inches on the mauka side, poured over uncompacted fill in 2012. Burt tore it out, regraded with 6 inches of compacted base course, installed a French drain along the uphill edge, and repoured at 4,000 PSI with stamped border finish. Cars back on the slab by day eight.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', backgroundColor: 'hsl(var(--border))' }}>
            {[
              { value: '2,400', unit: 'sq ft', label: 'Total Pour' },
              { value: '6', unit: 'days', label: 'Start to Finish' },
              { value: '4,000', unit: 'PSI', label: 'Mix Spec' },
            ].map((metric) => (
              <div key={metric.label} style={{ backgroundColor: 'hsl(var(--background))', padding: '1.25rem 1rem', textAlign: 'center' }}>
                <div style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: '1.6rem', color: 'hsl(var(--foreground))', lineHeight: 1 }}>
                  {metric.value}
                </div>
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.65rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.15em', color: 'hsl(var(--accent))', marginTop: '0.15rem' }}>
                  {metric.unit}
                </div>
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'hsl(var(--muted-foreground))', marginTop: '0.35rem' }}>
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== OWNER CREDIBILITY STRIP ===== */}
      <section style={{ backgroundColor: 'hsl(var(--background))', borderTop: '1px solid hsl(var(--border))', borderBottom: '1px solid hsl(var(--border))', padding: 'clamp(2.5rem, 6vw, 4rem) 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem', display: 'flex', alignItems: 'center', gap: '2rem', flexWrap: 'wrap' }}>
          {/* Initials badge */}
          <div style={{ width: '72px', height: '72px', backgroundColor: 'hsl(var(--accent))', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <span style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: '1.6rem', color: 'hsl(var(--accent-foreground))', letterSpacing: '0.05em' }}>BC</span>
          </div>
          <div style={{ flex: 1, minWidth: '260px' }}>
            <h2 className="iron-display" style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)', color: 'hsl(var(--foreground))', marginBottom: '0.5rem' }}>
              Owner-Operated Since 2004
            </h2>
            <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '0.9rem', color: 'hsl(var(--muted-foreground))', lineHeight: 1.65, maxWidth: '520px' }}>
              I answer the phone, walk the site, and run the pour. No office staff, no dispatched crews. You talk to the person who does the work. Same phone number for 22 years.
            </p>
          </div>
          <a href="tel:+18088759085" className="iron-btn iron-btn--ghost" style={{ flexShrink: 0 }}>
            <Phone size={14} />
            Call Burt Direct
          </a>
        </div>
      </section>

      {/* ===== CREW RELIABILITY STRIP ===== */}
      <section style={{ backgroundColor: 'hsl(var(--card))', borderTop: '1px solid hsl(var(--border))', borderBottom: '1px solid hsl(var(--border))', padding: 'clamp(2rem, 5vw, 3rem) 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
          <p className="iron-label" style={{ marginBottom: '1.5rem', textAlign: 'center' }}>The Crew</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1px', backgroundColor: 'hsl(var(--border))' }}>
            {[
              { stat: '9 yrs', label: 'Average Tenure', detail: 'Same core crew since 2017. No revolving door of day-labor hires.' },
              { stat: '4', label: 'Crew Members', detail: 'Small team, every person on site knows the spec. No standing around.' },
              { stat: '6am', label: 'Typical Start', detail: 'Coastal pours start at dawn. Cooler temps mean better cure and fewer cracks.' },
              { stat: '0', label: 'Subcontractors', detail: 'Burt does not sub out concrete work. The crew on site is the crew that stays.' },
            ].map((item) => (
              <div key={item.label} style={{ backgroundColor: 'hsl(var(--card))', padding: '1.25rem 1.5rem' }}>
                <div style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: '1.4rem', color: 'hsl(var(--accent))', lineHeight: 1 }}>{item.stat}</div>
                <div style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 600, fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'hsl(var(--foreground))', marginTop: '0.35rem', marginBottom: '0.5rem' }}>
                  {item.label}
                </div>
                <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '0.8rem', color: 'hsl(var(--muted-foreground))', lineHeight: 1.55 }}>
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE, 2-col with checklist ===== */}
      <section style={{ backgroundColor: 'hsl(var(--card))', padding: 'clamp(4rem, 10vw, 8rem) 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem', display: 'grid', gridTemplateColumns: '1fr', gap: '3rem' }} className="md:grid-cols-2">
          {/* Left */}
          <div>
            <p className="iron-label" style={{ marginBottom: '0.75rem' }}>Our Approach</p>
            <h2 className="iron-display" style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', color: 'hsl(var(--foreground))', marginBottom: '1.25rem' }}>
              Know the Soil Before You Pour
            </h2>
            <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '1rem', color: 'hsl(var(--muted-foreground))', lineHeight: 1.7 }}>
              Volcanic soil shifts differently than mainland dirt. Salt air corrodes poorly mixed concrete. Hillside sites need drainage engineered before the forms go up.
            </p>
            <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '1rem', color: 'hsl(var(--muted-foreground))', lineHeight: 1.7, marginTop: '1rem' }}>
              Burt has worked Maui soil for over 20 years. He knows where the clay pockets sit in Kihei, which Wailea slopes hold water, and why a foundation in Ma'alaea needs different rebar spacing than one in Makena.
            </p>
          </div>

          {/* Right, branded pillars */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {[
              { phrase: '3,500 PSI Minimum', expansion: 'Every residential pour meets this specification. Salt-air conditions require it.' },
              { phrase: 'Drainage Before Forms', expansion: 'Grade is set before a single form goes up. Prevents settling and pooling.' },
              { phrase: 'Joints Cut at 24 Hours', expansion: 'Control joints are cut on schedule, not whenever the crew gets around to it.' },
              { phrase: 'Burt on Every Pour', expansion: 'The owner is on site for every pour. No crew chiefs, no handoffs.' },
              { phrase: 'Firm Pricing Upfront', expansion: 'Free estimate. The number you get is the number you pay.' },
              { phrase: 'Cleanup Included', expansion: 'Forms pulled, debris hauled, site swept. Part of the job, not an add-on.' },
            ].map((item, i) => (
              <div key={item.phrase} style={{ padding: '1.15rem 1.25rem', borderLeft: '3px solid hsl(var(--accent))', backgroundColor: 'hsl(var(--background))', borderBottom: i < 5 ? '1px solid hsl(var(--border))' : 'none' }}>
                <div style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 600, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'hsl(var(--foreground))', marginBottom: '0.3rem' }}>
                  {item.phrase}
                </div>
                <div style={{ fontFamily: 'Archivo, sans-serif', fontSize: '0.82rem', color: 'hsl(var(--muted-foreground))', lineHeight: 1.55 }}>
                  {item.expansion}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WARRANTY CALLOUT ===== */}
      <section style={{ backgroundColor: 'hsl(var(--accent))', padding: 'clamp(2.5rem, 5vw, 3.5rem) 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.5rem' }}>
          <div>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.62rem', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.18em', color: 'hsl(var(--accent-foreground) / 0.6)', marginBottom: '0.75rem' }}>
              Grade the soil. Set the forms. Pour it right.
            </p>
            <div style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', textTransform: 'uppercase', letterSpacing: '-0.01em', lineHeight: 0.95, color: 'hsl(var(--accent-foreground))' }}>
              Workmanship Warranty on Every Pour
            </div>
            <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '0.9rem', color: 'hsl(var(--accent-foreground) / 0.75)', marginTop: '0.5rem', lineHeight: 1.5, maxWidth: '520px' }}>
              If a crack appears within the warranty period that isn't from natural settling, Burt comes back and makes it right. No fine print.
            </p>
          </div>
          <Link to="/contact" className="iron-btn" style={{ backgroundColor: 'hsl(var(--background))', color: 'hsl(var(--foreground))' }}>
            Schedule a Site Walk
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* ===== JOBSITE RESPONSIBILITY STRIP ===== */}
      <section style={{ backgroundColor: 'hsl(var(--card))', borderBottom: '1px solid hsl(var(--border))', padding: 'clamp(2rem, 5vw, 3rem) 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
          <p className="iron-label" style={{ marginBottom: '1.5rem', textAlign: 'center' }}>On Every Jobsite</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1px', backgroundColor: 'hsl(var(--border))' }}>
            {[
              { title: 'Storm Drain Protection', desc: 'Inlet barriers placed before work starts. No runoff enters the county storm system.' },
              { title: 'Washout Containment', desc: 'Concrete washout stays on site in lined containment. Cleaned and hauled after every pour.' },
              { title: 'Local Materials', desc: 'Hawaiian Cement and HC&D batch plants. Aggregate sourced on-island when available.' },
              { title: 'Clean Handoff', desc: 'Forms pulled, site swept, debris hauled same week. Your property looks better than we found it.' },
            ].map((item) => (
              <div key={item.title} style={{ backgroundColor: 'hsl(var(--card))', padding: '1.25rem 1.5rem' }}>
                <h3 style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 600, fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'hsl(var(--foreground))', marginBottom: '0.4rem' }}>
                  {item.title}
                </h3>
                <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '0.8rem', color: 'hsl(var(--muted-foreground))', lineHeight: 1.55 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS — spotlight carousel ===== */}
      <TestimonialSpotlight />

      {/* ===== FAQ ===== */}
      <FAQSection />

      {/* ===== PRE-FOOTER CTA BAND ===== */}
      <section style={{ position: 'relative', height: '400px', overflow: 'hidden' }} aria-label="Contact call to action">
        <img
          src={CTA_BAND_PHOTO}
          alt=""
          aria-hidden="true"
          loading="lazy"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'hsl(220 45% 7% / 0.78)' }} />
        <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '0 1.5rem', zIndex: 10 }}>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.65rem', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.18em', color: 'hsl(var(--accent))', marginBottom: '1rem' }}>
            Salt air doesn't wait. Neither should you.
          </p>
          <h2 className="iron-display" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: 'hsl(var(--foreground))', marginBottom: '1rem', maxWidth: '680px' }}>
            One Call. One Crew. Done Right.
          </h2>
          <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '1rem', color: 'hsl(var(--foreground) / 0.7)', marginBottom: '2rem', maxWidth: '480px', lineHeight: 1.6 }}>
            Burt walks the site, reads the soil, and gives you a firm number. No office. No runaround.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Link to="/contact" className="iron-btn">
              Start Your Project
              <ArrowRight size={14} />
            </Link>
            <a href="tel:+18088759085" className="iron-btn iron-btn--ghost" style={{ borderColor: 'hsl(var(--foreground) / 0.4)' }}>
              <Phone size={14} />
              (808) 875-9085
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
