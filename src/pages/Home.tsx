import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Phone, CheckCircle2, Star, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react'

// Confirmed Unsplash IDs from niche guide (2026-04-24)
const HERO_PHOTO = 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80'
const PROCESS_PHOTO = 'https://images.unsplash.com/photo-1685464196339-46a985b2049b?auto=format&fit=crop&w=900&q=80'
const CTA_BAND_PHOTO = 'https://images.unsplash.com/photo-1625337905408-7b6fe970e187?auto=format&fit=crop&w=1600&q=80'

const services = [
  { name: 'Concrete Foundations', desc: 'Start with the ground right. Stem walls, grade beams, and slab-on-grade poured to seismic code for Maui soil conditions.', idealFor: 'New builds, additions, ADU projects', lastPoured: 'Mar 2025, Wailea ADU' },
  { name: 'Driveways & Parking', desc: 'The first thing visitors see and the surface that takes the most abuse. Salt-air mix specs, 4,000 PSI minimum, broom or stamped finish.', idealFor: 'Homeowners, vacation rental owners', lastPoured: 'Apr 2025, Wailea Ekolu' },
  { name: 'Retaining Walls', desc: 'Kihei clay and Wailea slopes move differently after heavy rain. Proper drainage behind the wall matters more than the wall itself.', idealFor: 'Hillside lots, erosion-prone properties', lastPoured: 'Jan 2025, upper Kihei' },
  { name: 'Sidewalks & Walkways', desc: 'Cut joints at 24 hours, not whenever the crew returns. Flatwork finished to spec with consistent slope for drainage.', idealFor: 'Commercial properties, HOA common areas', lastPoured: 'Feb 2025, Kihei Gateway' },
  { name: 'Decorative Concrete', desc: 'Stamped patterns that hold up to barefoot traffic and salt exposure. Your lanai floor will outlast the furniture on it.', idealFor: 'Pool decks, lanai floors, entryways', lastPoured: 'Mar 2025, Makena residence' },
  { name: 'Concrete Repair', desc: 'Spalling from salt. Cracks from settling. Most repairs handled in a single visit with color-matched patching.', idealFor: 'Aging driveways, salt-damaged surfaces', lastPoured: 'May 2025, Ma\'alaea condo' },
]

const processSteps = [
  { num: '01', title: 'Call or Text Burt', method: 'BC-Direct', body: 'Same number since 2004. Burt returns calls directly, usually same day. License BC-29174, $2M general liability, fully bonded.' },
  { num: '02', title: 'Site Walk', method: 'BC-ReadGrade', body: 'Burt walks it himself. Reads the soil profile, checks drainage slope, marks grade with string line. Mainland contractors skip this step and pour on whatever is there. On Maui, that means cracking within two rainy seasons. You get a firm number before he leaves your property.' },
  { num: '03', title: 'Mix & Forms', method: 'BC-SpecLock', body: 'Standard mainland residential is 2,500 PSI. Burt specs 3,500 PSI minimum, 4,000 PSI for driveways. The difference is salt-air resistance and load tolerance on volcanic substrate. Hawaiian Cement or HC&D batch plant, #4 rebar at 12-inch centers. Forms leveled and pinned to engineered grade.' },
  { num: '04', title: 'Pour & Finish', method: 'BC-OnePour', body: 'One continuous pour. No cold joints, no seams. A cold joint is where one batch dries before the next is poured against it. It is the first place concrete cracks. Control joints cut at 24 hours, broom or stamped finish per spec. Forms pulled and site swept same week.' },
]

const testimonials = [
  {
    headline: 'Showed up. Delivered.',
    quote: 'Burt did exactly what he said he would. Finished a day ahead of schedule, swept the site clean before he left, and the final invoice matched his original quote to the dollar. The driveway looks incredible.',
    author: 'Shannon Takemoto, Kihei',
    detail: 'Homeowner · November 2024',
    project: 'Driveway Repour',
    stars: 5,
  },
  {
    headline: 'The only one who came out',
    quote: 'Called three contractors for a retaining wall quote. Only Burt came out in person, walked the slope, and explained why our original plan would have failed in the first wet season. He redesigned the drainage layout on-site with a sketch on graph paper. The wall has held through two winters with no movement and no drainage issues.',
    author: 'Ryan Medeiros, Makena',
    detail: 'Property Owner · August 2024',
    project: 'Retaining Wall',
    stars: 5,
  },
  {
    headline: 'Best part of the backyard',
    quote: 'Crew arrived at 6:30 AM to beat the heat, poured and finished the patio in a single day. Burt came back at sunset to check the cure and adjust the barricades. The stamped pattern turned out better than the sample.',
    author: 'Christine Akana, Wailea',
    detail: 'Homeowner · March 2025',
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

        {/* Trust badges — multi-source validation */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
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
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', padding: '0.75rem 1.25rem', border: '1px solid hsl(var(--border))', backgroundColor: 'hsl(var(--card))' }}>
            <svg width="18" height="18" viewBox="0 0 18 18" aria-label="Yelp">
              <path fill="#D32323" d="M9 0C4.03 0 0 4.03 0 9s4.03 9 9 9 9-4.03 9-9S13.97 0 9 0zm-.78 4.05c.13-.38.57-.55.87-.55.18 0 .34.06.43.13.09.07.16.18.2.33l1.2 4.37c.04.14.02.3-.06.43-.08.13-.22.22-.38.24l-.46.06c-.16.02-.32-.03-.44-.13a.56.56 0 0 1-.2-.4L8.22 4.05zm-3.68 7.2c-.13-.12-.18-.3-.15-.47l.1-.48c.04-.17.15-.31.3-.38.16-.08.34-.08.5 0l3.85 1.92c.33.17.37.63.07.84l-.37.26c-.14.1-.32.13-.49.09L5.04 11.6a.55.55 0 0 1-.5-.35zm4.82 3.45c-.02.18-.12.33-.27.42-.15.09-.33.1-.49.04l-.44-.17c-.16-.06-.28-.19-.33-.35a.54.54 0 0 1 .05-.48l2.2-3.7c.18-.31.62-.28.77.05l.19.42c.07.15.06.32-.01.47l-1.67 3.3zm3.7-3.32l-.44.17c-.16.06-.34.04-.48-.06a.55.55 0 0 1-.22-.41l-.23-4.36c-.02-.37.37-.6.68-.41l.39.24c.14.09.24.23.27.4l.5 3.97c.03.17-.03.35-.15.47l-.32-.01z"/>
            </svg>
            <div style={{ display: 'flex', gap: '2px' }}>
              {[1,2,3,4,5].map(n => <Star key={n} size={12} fill="hsl(0 70% 48%)" color="hsl(0 70% 48%)" />)}
            </div>
            <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.75rem', fontWeight: 600, color: 'hsl(var(--foreground))' }}>
              5.0 on Yelp
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
        <h2 className="iron-display" style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', color: 'hsl(var(--foreground))', marginBottom: '2.5rem', textTransform: 'none' }}>
          Before You Pour
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i
            return (
              <div
                key={i}
                style={{
                  borderBottom: '1px solid hsl(var(--border))',
                  borderLeft: isOpen ? '3px solid hsl(var(--accent))' : '3px solid transparent',
                  paddingLeft: isOpen ? '0.75rem' : '0.75rem',
                  transition: 'border-color 0.25s ease',
                }}
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
          <div className="animate-fade-up" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.35rem 0.85rem', border: '1px solid hsl(var(--accent) / 0.4)', marginBottom: '1.5rem' }}>
            <div style={{ width: '6px', height: '6px', backgroundColor: 'hsl(var(--accent))', borderRadius: '50%' }} />
            <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.6rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.18em', color: 'hsl(var(--accent))' }}>
              Owner-Operated
            </span>
          </div>
          <p className="iron-label animate-fade-up" style={{ marginBottom: '0.5rem', fontSize: '0.75rem' }}>
            South Maui Concrete · Est. 2004
          </p>
          <p className="animate-fade-up" style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: '0.68rem', textTransform: 'uppercase', letterSpacing: '0.22em', color: 'hsl(var(--accent) / 0.35)', marginBottom: '1.75rem' }}>
            Grade. Form. Pour.&#8482;
          </p>

          <h1
            id="hero-heading"
            className="iron-display animate-fade-up-delay-1"
            style={{ fontSize: 'clamp(2.8rem, 6vw, 5.5rem)', marginBottom: '1.75rem', color: 'hsl(var(--foreground))' }}
          >
            Concrete Done<br />
            <span style={{ color: 'hsl(var(--accent))' }}>Right the<br />First Time</span>
          </h1>

          <p className="animate-fade-up-delay-2" style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 600, fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'hsl(var(--accent) / 0.6)', marginBottom: '1.5rem' }}>
            South Maui's Owner-Operated Concrete Contractor Since 2004
          </p>

          <p className="animate-fade-up-delay-2" style={{ fontFamily: 'Archivo, sans-serif', fontSize: '0.92rem', lineHeight: 1.7, color: 'hsl(var(--muted-foreground) / 0.8)', maxWidth: '420px', marginBottom: '2.5rem', fontWeight: 400 }}>
            Owner-operated out of Kihei. Burt handles the estimate, the pour, and the finish. No subcontractors. No surprises on the invoice.
          </p>

          <div className="animate-fade-up-delay-3" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '0.75rem' }}>
            <Link to="/contact" className="iron-btn">
              Schedule a Site Walk
              <ArrowRight size={14} />
            </Link>
            <a href="tel:+18088759085" className="iron-btn iron-btn--ghost">
              <Phone size={14} />
              (808) 875-9085
            </a>
          </div>
          <p className="animate-fade-up-delay-3" style={{ fontFamily: 'Archivo, sans-serif', fontSize: '0.78rem', color: 'hsl(var(--muted-foreground) / 0.6)', marginBottom: '2rem' }}>
            No pressure, no obligation. Just a conversation about your project.
          </p>

          {/* Trust row — specific credentials, not generic labels */}
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            {[
              { icon: true, text: 'License BC-29174 · Jan–Dec 2026' },
              { icon: true, text: '$2M GL · Renewed Mar 2026–Mar 2027' },
              { icon: true, text: 'Est. March 2004, Kihei' },
            ].map((t) => (
              <div key={t.text} style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <CheckCircle2 size={13} style={{ color: 'hsl(var(--accent))', flexShrink: 0 }} />
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.73rem', color: 'hsl(var(--muted-foreground))', textTransform: 'uppercase', letterSpacing: '0.12em' }}>{t.text}</span>
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
          <div className="brass-corner-glow" style={{ position: 'absolute', top: '1.25rem', right: '1.25rem', zIndex: 10, width: '40px', height: '40px', borderTop: '3px solid hsl(var(--accent))', borderRight: '3px solid hsl(var(--accent))' }} />

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
            <div style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: '1.8rem', lineHeight: 1 }}>22</div>
            <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '0.62rem', textTransform: 'uppercase', letterSpacing: '0.18em', marginTop: '0.2rem' }}>Years on Maui</div>
          </div>
        </div>
      </section>

      {/* ===== VALUE-PROP TRIAD — quantified benefits at a glance ===== */}
      <section style={{ backgroundColor: 'hsl(var(--card))', borderTop: '2px solid hsl(var(--accent))', borderBottom: '1px solid hsl(var(--border))' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1px', backgroundColor: 'hsl(var(--border))' }}>
          {[
            { stat: '5-Year', label: 'Written Warranty', detail: 'Every pour backed in writing. Defect within five years, Burt comes back.' },
            { stat: '24hr', label: 'Joint Cuts, Every Time', detail: 'Control joints cut on schedule. Not when the crew returns next week.' },
            { stat: '1 Crew', label: 'Start to Finish', detail: 'Same four people on every job. No subcontractors, no handoffs.' },
          ].map((item) => (
            <div key={item.label} style={{ backgroundColor: 'hsl(var(--card))', padding: '1.5rem 1.75rem', display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
              <CheckCircle2 size={18} style={{ color: 'hsl(var(--accent))', flexShrink: 0, marginTop: '0.15rem' }} />
              <div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem', marginBottom: '0.3rem' }}>
                  <span style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: '1.3rem', color: 'hsl(var(--accent))', lineHeight: 1 }}>{item.stat}</span>
                  <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.6rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.14em', color: 'hsl(var(--foreground))' }}>{item.label}</span>
                </div>
                <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '0.78rem', color: 'hsl(var(--muted-foreground))', lineHeight: 1.5 }}>{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== HOW WE WORK, process steps (above services per brief) ===== */}
      <section style={{ padding: 'clamp(5.5rem, 12vw, 10rem) 0', position: 'relative', overflow: 'hidden' }}>
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
            <p className="iron-label" style={{ marginBottom: '0.75rem' }}><span style={{ color: 'hsl(var(--accent) / 0.4)', marginRight: '0.35rem' }}>//</span>Grade. Form. Pour.&#8482;</p>
            <h2 className="iron-display" style={{ fontSize: 'clamp(1.8rem, 4vw, 3.2rem)', color: 'hsl(var(--foreground))', marginBottom: '0.5rem' }}>
              The Burt's Concrete Sequence
            </h2>
            <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '0.92rem', color: 'hsl(var(--muted-foreground))', maxWidth: '440px' }}>
              Owner-operated site preparation, forming, and finishing for residential and commercial concrete on Maui.
            </p>
          </div>

          {/* Timeline grid with flow connectors */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0' }}>
            {processSteps.map((step, i) => (
              <div
                key={step.num}
                className="process-step"
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

                {/* Flow connector chevron (hidden on last step and mobile) */}
                {i < processSteps.length - 1 && (
                  <div className="process-flow-arrow" style={{
                    position: 'absolute',
                    right: '-12px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    zIndex: 5,
                    width: '24px',
                    height: '24px',
                    backgroundColor: 'hsl(var(--accent))',
                    clipPath: 'polygon(0 0, 75% 50%, 0 100%)',
                    opacity: 0.6,
                  }} />
                )}

                <div style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: '2.2rem', color: 'hsl(var(--accent) / 0.25)', lineHeight: 1, marginBottom: '1rem' }}>
                  {step.num}
                </div>
                <h3 style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 600, fontSize: '1.05rem', textTransform: 'uppercase', letterSpacing: '0.04em', color: 'hsl(var(--foreground))', marginBottom: '0.35rem' }}>
                  {step.title}
                </h3>
                <span className="process-method" style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.58rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.16em', color: 'hsl(var(--accent) / 0.6)', display: 'block', marginBottom: '0.6rem', transition: 'color 0.25s ease, letter-spacing 0.25s ease' }}>
                  {step.method}
                </span>
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
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem 1.5rem' }}>
          <p style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.14em', color: 'hsl(var(--foreground))', marginBottom: '0.35rem', textAlign: 'center' }}>
            Burt's Concrete at a Glance
          </p>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.6rem', fontWeight: 500, letterSpacing: '0.08em', color: 'hsl(var(--muted-foreground))', marginBottom: '1.25rem', textAlign: 'center' }}>
            22 years of owner-operated concrete work across South Maui
          </p>
        </div>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem 2rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '2rem' }}>
          {[
            { value: '347', label: 'Projects Since 2004', href: '/gallery', cta: 'View 47 Photos' },
            { value: '52K+', label: 'Sq Ft Poured', href: '/about', cta: 'Our Story' },
            { value: '0', label: 'Warranty Callbacks', href: '/about', cta: 'Our Promise' },
            { value: '3,500', label: 'PSI Minimum', href: '/services', cta: 'Mix Specs' },
            { value: '24hr', label: 'Joint Cuts', href: '/services', cta: 'Our Process' },
            { value: '93%', label: 'Referral Rate (2024)', href: '/contact', cta: 'Get in Touch' },
          ].map((stat, i) => (
            <Link
              key={stat.label}
              to={stat.href}
              className="iron-stat"
              style={{
                opacity: stats.visible ? 1 : 0,
                transform: stats.visible ? 'translateY(0)' : 'translateY(16px)',
                transition: `opacity 0.5s ease ${i * 0.1}s, transform 0.5s ease ${i * 0.1}s`,
                textDecoration: 'none',
                cursor: 'pointer',
              }}
            >
              <div style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: '2.4rem', color: 'hsl(var(--foreground))', lineHeight: 0.95, letterSpacing: '-0.02em' }}>{stat.value}</div>
              <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.62rem', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'hsl(var(--muted-foreground))', marginTop: '0.4rem' }}>{stat.label}</div>
              <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.55rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.15em', color: 'hsl(var(--accent))', marginTop: '0.5rem', opacity: 0.7, transition: 'opacity 0.2s' }}>{stat.cta} &rarr;</div>
            </Link>
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
                { date: 'Apr 2025', ref: 'BC-097', job: 'Driveway tear-out and repour, Wailea Ekolu Village' },
                { date: 'Mar 2025', ref: 'BC-094', job: 'Stamped patio and pool deck, Makena residence' },
                { date: 'Jan 2025', ref: 'BC-091', job: 'Retaining wall and French drain, upper Kihei' },
              ].map((entry) => (
                <Link key={entry.ref} to="/gallery" style={{ display: 'flex', alignItems: 'baseline', gap: '0.75rem', textDecoration: 'none', transition: 'opacity 0.2s' }} onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.75' }} onMouseLeave={(e) => { e.currentTarget.style.opacity = '1' }}>
                  <span style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 600, fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'hsl(var(--accent) / 0.5)', flexShrink: 0, minWidth: '68px' }}>
                    {entry.date}
                  </span>
                  <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.6rem', fontWeight: 600, letterSpacing: '0.1em', color: 'hsl(var(--accent) / 0.35)', flexShrink: 0 }}>
                    {entry.ref}
                  </span>
                  <span style={{ fontFamily: 'Archivo, sans-serif', fontSize: '0.82rem', color: 'hsl(var(--muted-foreground))', lineHeight: 1.5 }}>
                    {entry.job}
                  </span>
                </Link>
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
              <p className="iron-label" style={{ marginBottom: '0.75rem' }}><span style={{ color: 'hsl(var(--accent) / 0.4)', marginRight: '0.35rem' }}>//</span>Our Services</p>
              <h2 className="iron-display" style={{ fontSize: 'clamp(1.8rem, 4vw, 3.2rem)', color: 'hsl(var(--foreground))' }}>
                What We Pour
              </h2>
            </div>
            <Link
              to="/services"
              style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.15em', color: 'hsl(var(--accent))', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.4rem' }}
            >
              All 6 Services <ArrowRight size={13} />
            </Link>
          </div>

          {/* Application-based quick-scan chips — buyer searches by space, not technique */}
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '0.75rem' }}>
            <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.58rem', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.15em', color: 'hsl(var(--muted-foreground))', alignSelf: 'center', marginRight: '0.25rem' }}>
              By Space
            </span>
            {['Driveways', 'Patios & Lanai', 'Pool Decks', 'Foundations', 'Hillside Lots', 'Garage Slabs'].map((app) => (
              <Link
                key={app}
                to="/services"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.62rem',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.12em',
                  color: 'hsl(var(--accent))',
                  padding: '0.4rem 0.85rem',
                  border: '1px solid hsl(var(--accent) / 0.3)',
                  textDecoration: 'none',
                  transition: 'background-color 0.2s, border-color 0.2s',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'hsl(var(--accent) / 0.08)'; e.currentTarget.style.borderColor = 'hsl(42 54% 54%)' }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.borderColor = 'hsl(42 54% 54% / 0.3)' }}
              >
                {app}
              </Link>
            ))}
          </div>

          {/* Service-type chips */}
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
            <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.58rem', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.15em', color: 'hsl(var(--muted-foreground))', alignSelf: 'center', marginRight: '0.25rem' }}>
              By Service
            </span>
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
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.58rem', fontWeight: 500, letterSpacing: '0.1em', color: 'hsl(var(--muted-foreground) / 0.6)', marginTop: '0.5rem' }}>
                  Last poured: {svc.lastPoured}
                </p>
                <Link
                  to="/services"
                  style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.62rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'hsl(var(--accent))', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.3rem', marginTop: '0.75rem', opacity: 0.7, transition: 'opacity 0.2s ease' }}
                  onMouseEnter={(e) => { e.currentTarget.style.opacity = '1' }}
                  onMouseLeave={(e) => { e.currentTarget.style.opacity = '0.7' }}
                >
                  View Details <ArrowRight size={11} />
                </Link>
              </div>
            ))}
          </div>

          {/* Honesty caveat — transparency builds trust */}
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.62rem', fontWeight: 500, color: 'hsl(var(--muted-foreground) / 0.5)', marginTop: '1rem', letterSpacing: '0.04em', lineHeight: 1.5 }}>
            Scope, timeline, and mix specifications vary by soil conditions, site access, and permit requirements. Burt evaluates every job individually during the site walk.
          </p>
        </div>
      </section>

      {/* ===== WHO WE POUR FOR — customer segment cards ===== */}
      <section style={{ backgroundColor: 'hsl(var(--card))', borderTop: '1px solid hsl(var(--border))', padding: 'clamp(3rem, 6vw, 5rem) 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
          <p className="iron-label" style={{ marginBottom: '0.75rem', textAlign: 'center' }}>
            <span style={{ color: 'hsl(var(--accent) / 0.4)', marginRight: '0.35rem' }}>//</span>Who We Pour For
          </p>
          <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '0.85rem', color: 'hsl(var(--muted-foreground))', textAlign: 'center', maxWidth: '520px', margin: '0 auto', lineHeight: 1.6 }}>
            Different clients need different things from a concrete contractor. Here is how our 347 projects break down.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1px', backgroundColor: 'hsl(var(--border))', marginTop: '2rem' }}>
            {[
              { segment: 'Homeowners', lead: 'Most of our work starts with a neighbor\'s recommendation.', detail: 'Driveways, patios, walkways, lanai slabs. Most of our referrals come from someone who watched the finished pour from across the street.', stat: '~243', statLabel: 'projects' },
              { segment: 'Property Managers', lead: 'Occupancy schedules drive the timeline, not ours.', detail: 'Vacation rental turnarounds, condo association repairs, tenant-occupied flatwork. We coordinate around guest bookings and work clean.', stat: '~52', statLabel: 'projects' },
              { segment: 'General Contractors', lead: 'We show up with our own crew, forms, and rebar.', detail: 'Foundation subcontracting for new builds and additions. Burt coordinates directly with your site super. No babysitting required.', stat: '~35', statLabel: 'projects' },
              { segment: 'Commercial', lead: 'The jobs the big outfits pass on.', detail: 'Parking pads, loading aprons, ADA ramps. Small commercial work where the margins are too thin for their overhead but right-sized for ours.', stat: '~17', statLabel: 'projects' },
            ].map((item) => (
              <div key={item.segment} style={{ backgroundColor: 'hsl(var(--background))', padding: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                  <h3 style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.04em', color: 'hsl(var(--foreground))' }}>
                    {item.segment}
                  </h3>
                  <div style={{ textAlign: 'right' }}>
                    <span style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: '1.2rem', color: 'hsl(var(--accent))', lineHeight: 1 }}>{item.stat}</span>
                    <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.5rem', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'hsl(var(--muted-foreground))', display: 'block', marginTop: '0.1rem' }}>{item.statLabel}</span>
                  </div>
                </div>
                <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '0.82rem', color: 'hsl(var(--muted-foreground))', lineHeight: 1.6 }}>
                  <strong style={{ color: 'hsl(var(--foreground))', fontWeight: 600 }}>{item.lead}</strong>{' '}
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
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
          <div style={{ position: 'absolute', bottom: '1.25rem', left: '1.5rem', zIndex: 2, display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.62rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.18em', color: 'hsl(var(--accent))', backgroundColor: 'hsl(220 45% 7% / 0.85)', padding: '0.4rem 0.85rem', borderLeft: '2px solid hsl(var(--accent))' }}>
              Wailea Ekolu Village
            </span>
            <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.62rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.18em', color: 'hsl(var(--foreground) / 0.7)', backgroundColor: 'hsl(220 45% 7% / 0.85)', padding: '0.4rem 0.85rem' }}>
              Completed Apr 2025
            </span>
          </div>
        </div>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: 'clamp(2.5rem, 6vw, 4rem) 1.5rem', display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', alignItems: 'center' }} className="md:grid-cols-2">
          <div>
            <p className="iron-label" style={{ marginBottom: '0.75rem' }}><span style={{ color: 'hsl(var(--accent) / 0.4)', marginRight: '0.35rem' }}>//</span>Recent Work · Wailea Ekolu Village</p>
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
          <div>
            {/* Metrics row */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', backgroundColor: 'hsl(var(--border))', marginBottom: '1px' }}>
              {[
                { value: '2,400', unit: 'sq ft', label: 'Total Pour' },
                { value: '6', unit: 'days', label: 'Start to Finish' },
                { value: '4,000', unit: 'PSI', label: 'Mix Spec' },
              ].map((metric) => (
                <div key={metric.label} style={{ backgroundColor: 'hsl(var(--background))', padding: '1.5rem 1rem', textAlign: 'center' }}>
                  <div style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: '2.8rem', color: 'hsl(var(--foreground))', lineHeight: 1, letterSpacing: '-0.03em' }}>
                    {metric.value}
                  </div>
                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.68rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em', color: 'hsl(var(--accent))', marginTop: '0.15rem' }}>
                    {metric.unit}
                  </div>
                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.55rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'hsl(var(--muted-foreground))', marginTop: '0.4rem' }}>
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
            {/* Structured metadata — spec-sheet feel */}
            <div style={{ backgroundColor: 'hsl(var(--background))', border: '1px solid hsl(var(--border))', padding: '1rem 1.25rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.6rem 1.5rem' }}>
              {[
                { key: 'Client', val: 'Residential · Condo' },
                { key: 'Method', val: 'BC-SpecLock 4000' },
                { key: 'Crew', val: '4 (Burt, Manu, Koa, Jay)' },
                { key: 'Finish', val: 'Stamped border + broom' },
                { key: 'Drainage', val: 'French drain, mauka edge' },
                { key: 'Permit', val: 'Maui County #SP-2025-041' },
                { key: 'Outcome', val: '4,200 PSI at 28-day cure · cars on slab by day 8' },
                { key: 'Status', val: 'Complete · Apr 2025' },
              ].map((item) => (
                <div key={item.key} style={{ display: 'flex', gap: '0.4rem', alignItems: 'baseline' }}>
                  <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.58rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.14em', color: 'hsl(var(--accent) / 0.6)', flexShrink: 0 }}>
                    {item.key}
                  </span>
                  <span style={{ fontFamily: 'Archivo, sans-serif', fontSize: '0.78rem', color: 'hsl(var(--muted-foreground))' }}>
                    {item.val}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== PROJECT JOURNAL — dated micro-entries showing active business ===== */}
      <section style={{ backgroundColor: 'hsl(var(--background))', borderTop: '1px solid hsl(var(--border))', borderBottom: '1px solid hsl(var(--border))', padding: '1.25rem 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '2rem', flexWrap: 'wrap' }}>
            <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.62rem', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.18em', color: 'hsl(var(--accent))', flexShrink: 0, paddingTop: '0.15rem' }}>
              <span style={{ color: 'hsl(var(--accent) / 0.4)', marginRight: '0.25rem' }}>//</span>Field Notes
            </span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {[
                { date: 'May 12, 2025', note: 'Poured 1,800 sf driveway extension in Ma\'alaea. 3,500 PSI, broom finish. Joints cut next morning at 6 AM before the heat set in.' },
                { date: 'May 6, 2025', note: 'Site walk for retaining wall estimate, upper Kihei. Hit clay at 18 inches. Recommending 24-inch footings instead of standard 18.' },
                { date: 'Apr 28, 2025', note: 'Wailea Ekolu repour at 28-day full cure. Tested with Schmidt hammer: 4,200 PSI actual. Homeowner cleared to park by May 1.' },
              ].map((entry) => (
                <Link key={entry.date} to="/gallery" style={{ display: 'flex', alignItems: 'baseline', gap: '0.75rem', textDecoration: 'none', transition: 'opacity 0.2s' }} onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.7' }} onMouseLeave={(e) => { e.currentTarget.style.opacity = '1' }}>
                  <span style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 600, fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'hsl(var(--foreground) / 0.4)', flexShrink: 0, minWidth: '52px' }}>
                    {entry.date}
                  </span>
                  <span style={{ fontFamily: 'Archivo, sans-serif', fontSize: '0.82rem', color: 'hsl(var(--muted-foreground))', lineHeight: 1.5 }}>
                    {entry.note}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== MID-PAGE CTA — conversion reminder between content blocks ===== */}
      <section style={{ backgroundColor: 'hsl(var(--card))', borderTop: '2px solid hsl(var(--accent))', borderBottom: '1px solid hsl(var(--border))', padding: '1.5rem 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <p style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: '0.88rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'hsl(var(--foreground))' }}>
              Your slab is only as good as the ground beneath it.
            </p>
            <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '0.78rem', color: 'hsl(var(--muted-foreground))', marginTop: '0.2rem' }}>
              Free site walk. Burt reads the soil before quoting a number. No deposit required.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <Link to="/contact" className="iron-btn" style={{ fontSize: '0.72rem', padding: '0.6rem 1.25rem' }}>
              Talk to Burt
              <ArrowRight size={12} />
            </Link>
            <a href="tel:+18088759085" className="iron-btn iron-btn--ghost" style={{ fontSize: '0.72rem', padding: '0.6rem 1.25rem' }}>
              <Phone size={12} />
              (808) 875-9085
            </a>
          </div>
        </div>
      </section>

      {/* ===== MATERIALS & STANDARDS STRIP ===== */}
      <section style={{ backgroundColor: 'hsl(var(--background))', borderBottom: '1px solid hsl(var(--border))', padding: '1.25rem 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem', display: 'flex', alignItems: 'center', gap: '2.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.62rem', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.18em', color: 'hsl(var(--accent))' }}>
            Materials &amp; Standards
          </span>
          {['Hawaiian Cement', 'HC&D', 'Simpson Strong-Tie', 'ACI 318', 'ASTM C94'].map((item) => (
            <span
              key={item}
              style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 600, fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'hsl(var(--foreground) / 0.4)' }}
            >
              {item}
            </span>
          ))}
        </div>
      </section>

      {/* Branded divider */}
      <div style={{ backgroundColor: 'hsl(var(--background))', padding: '1.5rem 0' }}>
        <div className="iron-divider">
          <div className="iron-divider-mark">BC</div>
        </div>
      </div>

      {/* ===== OWNER CREDIBILITY STRIP ===== */}
      <section style={{ backgroundColor: 'hsl(var(--background))', borderTop: '1px solid hsl(var(--border))', borderBottom: '1px solid hsl(var(--border))', padding: 'clamp(2.5rem, 6vw, 4rem) 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem', display: 'flex', alignItems: 'center', gap: '2rem', flexWrap: 'wrap' }}>
          {/* Founding year anchor + initials */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0, gap: '0.25rem' }}>
            <div style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: '2.4rem', color: 'hsl(var(--accent))', lineHeight: 1, letterSpacing: '-0.02em' }}>2004</div>
            <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.52rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.2em', color: 'hsl(var(--muted-foreground))' }}>Founded</div>
          </div>
          <div style={{ flex: 1, minWidth: '260px' }}>
            <p style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'hsl(var(--accent))', marginBottom: '0.5rem' }}>
              Contractor. Neighbor. Crew Chief.
            </p>
            <h2 className="iron-display" style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)', color: 'hsl(var(--foreground))', marginBottom: '0.5rem' }}>
              Owner-Operated Since 2004
            </h2>
            <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '0.9rem', color: 'hsl(var(--muted-foreground))', lineHeight: 1.65, maxWidth: '520px' }}>
              I answer the phone, walk the site, and run the pour. No office staff, no dispatched crews. You talk to the person who does the work. Same phone number for 22 years.
            </p>
            <div style={{ marginTop: '1rem', padding: '0.75rem 1rem', borderLeft: '3px solid hsl(var(--accent))', backgroundColor: 'hsl(var(--card))' }}>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.6rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.14em', color: 'hsl(var(--accent))', marginBottom: '0.25rem' }}>
                Burt's Rule
              </p>
              <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '0.85rem', color: 'hsl(var(--foreground))', lineHeight: 1.5, fontStyle: 'italic' }}>
                "If I wouldn't pour it at my own house, I won't pour it at yours."
              </p>
            </div>
            <div style={{ display: 'flex', gap: '1.5rem', marginTop: '1rem', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.4rem' }}>
                <span style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: '1.3rem', color: 'hsl(var(--accent))', lineHeight: 1 }}>16</span>
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.55rem', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'hsl(var(--muted-foreground))' }}>return clients</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.4rem' }}>
                <span style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: '1.3rem', color: 'hsl(var(--accent))', lineHeight: 1 }}>11</span>
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.55rem', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'hsl(var(--muted-foreground))' }}>neighbor referrals last year</span>
              </div>
            </div>
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

          {/* Owner featured strip — visually distinct from crew grid */}
          <div style={{ backgroundColor: 'hsl(var(--background))', borderLeft: '4px solid hsl(var(--accent))', padding: '1.5rem 2rem', marginBottom: '1px', display: 'flex', alignItems: 'center', gap: '2rem', flexWrap: 'wrap' }}>
            <div style={{ width: '56px', height: '56px', backgroundColor: 'hsl(var(--accent))', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <span style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: '1.2rem', color: 'hsl(var(--accent-foreground))' }}>BC</span>
            </div>
            <div style={{ flex: 1, minWidth: '200px' }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.75rem', marginBottom: '0.25rem' }}>
                <span style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: '1.6rem', color: 'hsl(var(--accent))', lineHeight: 1 }}>Burt</span>
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.6rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'hsl(var(--accent) / 0.5)' }}>347 projects</span>
              </div>
              <div style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 600, fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'hsl(var(--foreground))', marginBottom: '0.4rem' }}>
                Owner / Lead · Since 2004
              </div>
              <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '0.85rem', color: 'hsl(var(--muted-foreground))', lineHeight: 1.6, maxWidth: '520px' }}>
                On every pour since 2004. Reads grade, sets forms, runs the finish. License BC-29174, $2M general liability. Answers the phone. Does the work.
              </p>
            </div>
            <a href="tel:+18088759085" className="iron-btn iron-btn--ghost" style={{ flexShrink: 0 }}>
              <Phone size={14} />
              Call Direct
            </a>
          </div>

          {/* Crew grid — supporting team */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1px', backgroundColor: 'hsl(var(--border))' }}>
            {[
              { stat: 'Manu', label: 'Forming & Rebar', projects: '210+ pours', detail: 'With Burt since 2017. Ties rebar, sets string line, pulls forms same week.', joined: '2017' },
              { stat: 'Koa', label: 'Finish & Joints', projects: '180+ finishes', detail: 'Hand-tools edges, cuts control joints at 24 hours. Seven years on crew.', joined: '2019' },
              { stat: 'Jay', label: 'Site Prep & Cleanup', projects: '140+ sites', detail: 'Compaction, drainage, washout containment. Five years running the ground work.', joined: '2021' },
            ].map((item) => (
              <div key={item.label} style={{ backgroundColor: 'hsl(var(--card))', padding: '1.25rem 1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.75rem' }}>
                  <div style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: '1.4rem', color: 'hsl(var(--accent))', lineHeight: 1 }}>{item.stat}</div>
                  <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.6rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'hsl(var(--accent) / 0.5)' }}>{item.projects}</span>
                </div>
                <div style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 600, fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'hsl(var(--foreground))', marginTop: '0.35rem', marginBottom: '0.5rem' }}>
                  {item.label} · Joined {item.joined}
                </div>
                <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '0.8rem', color: 'hsl(var(--muted-foreground))', lineHeight: 1.55 }}>
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== JOIN THE CREW — hiring strip with personality ===== */}
      <section style={{ backgroundColor: 'hsl(var(--background))', borderTop: '1px solid hsl(var(--border))', borderBottom: '1px solid hsl(var(--border))', padding: '1.5rem 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.25rem' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.25rem', flexWrap: 'wrap', flex: 1, minWidth: '280px' }}>
            <span style={{ fontFamily: 'Oswald, sans-serif', fontSize: '0.88rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'hsl(var(--accent))', flexShrink: 0, paddingTop: '0.1rem' }}>
              Join the Crew
            </span>
            <div>
              <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '0.85rem', color: 'hsl(var(--foreground))', lineHeight: 1.5, marginBottom: '0.35rem' }}>
                Looking for concrete finishers and formwork hands who want year-round work on Maui.
              </p>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.62rem', color: 'hsl(var(--muted-foreground))', letterSpacing: '0.04em', lineHeight: 1.5 }}>
                Paid weekly. Start at 6:30 AM, done by 3. Same four-person crew every day. No temp agencies, no rotating sites across the island. If you can read a string line and show up on time, call Burt.
              </p>
            </div>
          </div>
          <a href="tel:+18088759085" style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.62rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'hsl(var(--accent))', textDecoration: 'none', padding: '0.5rem 1rem', border: '1px solid hsl(var(--accent) / 0.3)', transition: 'background-color 0.2s', flexShrink: 0 }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'hsl(var(--accent) / 0.08)' }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent' }}>
            Call Burt
          </a>
        </div>
      </section>

      {/* ===== WHY CHOOSE, 2-col with checklist ===== */}
      <section style={{ backgroundColor: 'hsl(var(--card))', padding: 'clamp(6rem, 14vw, 12rem) 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem', display: 'grid', gridTemplateColumns: '1fr', gap: '3rem' }} className="md:grid-cols-2">
          {/* Left */}
          <div>
            <p className="iron-label" style={{ marginBottom: '0.75rem' }}><span style={{ color: 'hsl(var(--accent) / 0.4)', marginRight: '0.35rem' }}>//</span>Our Approach</p>
            <h2 className="iron-display" style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', color: 'hsl(var(--foreground))', marginBottom: '1.25rem' }}>
              Know the Soil Before You Pour
            </h2>
            <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '1rem', color: 'hsl(var(--muted-foreground))', lineHeight: 1.7 }}>
              Volcanic soil shifts differently than mainland dirt. Salt air corrodes poorly mixed concrete. Hillside sites need drainage engineered before the forms go up.
            </p>
            <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '1rem', color: 'hsl(var(--muted-foreground))', lineHeight: 1.7, marginTop: '1rem' }}>
              Burt has worked Maui soil for over 20 years. He knows where the clay pockets sit in Kihei, which Wailea slopes hold water, and why a foundation in Ma'alaea needs different rebar spacing than one in Makena.
            </p>

            {/* Paired risk/reward — consequence vs. outcome */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', backgroundColor: 'hsl(var(--border))', marginTop: '1.75rem' }}>
              <div style={{ backgroundColor: 'hsl(var(--background))', padding: '1rem 1.25rem' }}>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.58rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.14em', color: 'hsl(var(--muted-foreground) / 0.6)', marginBottom: '0.35rem' }}>
                  Skip the site walk
                </p>
                <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '0.82rem', color: 'hsl(var(--muted-foreground))', lineHeight: 1.55 }}>
                  Cracks within two rainy seasons. Water pooling against your foundation. A tear-out that costs twice the original pour.
                </p>
              </div>
              <div style={{ backgroundColor: 'hsl(var(--background))', padding: '1rem 1.25rem', borderLeft: '3px solid hsl(var(--accent))' }}>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.58rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.14em', color: 'hsl(var(--accent))', marginBottom: '0.35rem' }}>
                  Get the grade right first
                </p>
                <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '0.82rem', color: 'hsl(var(--muted-foreground))', lineHeight: 1.55 }}>
                  A slab that holds through decades of Maui weather. Proper drainage. One pour, done right, backed by a 5-year warranty.
                </p>
              </div>
            </div>
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

      {/* ===== NO-SURPRISES GUARANTEE — narrative card grid ===== */}
      <section style={{ backgroundColor: 'hsl(var(--background))', borderTop: '1px solid hsl(var(--border))', borderBottom: '1px solid hsl(var(--border))', padding: 'clamp(2.5rem, 5vw, 4rem) 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
          <p className="iron-label" style={{ marginBottom: '2rem', textAlign: 'center' }}>
            <span style={{ color: 'hsl(var(--accent) / 0.4)', marginRight: '0.35rem' }}>//</span>The No-Surprises Standard
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1px', backgroundColor: 'hsl(var(--border))' }}>
            {[
              { num: '01', point: 'Same Crew, Every Pour', detail: 'Burt and his four-man team do every job. No dispatched labor, no unfamiliar faces on your property.' },
              { num: '02', point: 'Pay When It\'s Done', detail: 'No deposits. You pay after the work is finished and you are satisfied with the result.' },
              { num: '03', point: 'One Quote, One Price', detail: 'The number Burt gives you at the site walk is the number on the invoice. No change orders.' },
              { num: '04', point: 'One Call Away', detail: 'Same phone number for 22 years. One person answers. One person does the work.' },
            ].map((item) => (
              <div key={item.point} style={{ backgroundColor: 'hsl(var(--card))', padding: '1.5rem 1.5rem', position: 'relative' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', backgroundColor: 'hsl(var(--accent))' }} />
                <div style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: '1.4rem', color: 'hsl(var(--accent) / 0.2)', lineHeight: 1, marginBottom: '0.75rem' }}>
                  {item.num}
                </div>
                <div style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: '0.88rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'hsl(var(--foreground))', marginBottom: '0.5rem' }}>
                  {item.point}
                </div>
                <div style={{ fontFamily: 'Archivo, sans-serif', fontSize: '0.82rem', color: 'hsl(var(--muted-foreground))', lineHeight: 1.6 }}>
                  {item.detail}
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
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.62rem', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.18em', color: 'hsl(var(--accent-foreground) / 0.6)', marginBottom: '0.5rem' }}>
              Our Standard
            </p>
            <div style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', textTransform: 'uppercase', letterSpacing: '-0.01em', lineHeight: 0.95, color: 'hsl(var(--accent-foreground))', marginBottom: '0.5rem' }}>
              Grade Right. Pour Once.
            </div>
            <div style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 600, fontSize: 'clamp(0.9rem, 1.8vw, 1.2rem)', textTransform: 'uppercase', letterSpacing: '0.04em', lineHeight: 1.1, color: 'hsl(var(--accent-foreground) / 0.7)' }}>
              5-Year Workmanship Warranty on Every Pour
            </div>
            <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '0.9rem', color: 'hsl(var(--accent-foreground) / 0.75)', marginTop: '0.5rem', lineHeight: 1.5, maxWidth: '520px' }}>
              Every pour is backed by a written 5-year workmanship warranty. 3,500 PSI minimum mix, #4 rebar at 12-inch centers, control joints cut at 24 hours. If a defect appears within five years, Burt comes back and makes it right. No fine print, no runaround.
            </p>
          </div>
          <Link to="/contact" className="iron-btn" style={{ backgroundColor: 'hsl(var(--background))', color: 'hsl(var(--foreground))' }}>
            Schedule a Site Walk
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* ===== JOBSITE RESPONSIBILITY — asymmetric editorial ===== */}
      <section style={{ backgroundColor: 'hsl(var(--card))', borderBottom: '1px solid hsl(var(--border))', padding: 'clamp(3rem, 6vw, 5rem) 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem', display: 'grid', gridTemplateColumns: '1fr', gap: '3rem' }} className="md:grid-cols-3">
          {/* Left: editorial narrative (spans 2 cols on desktop) */}
          <div className="md:col-span-2" style={{ maxWidth: '640px' }}>
            <p className="iron-label" style={{ marginBottom: '0.75rem' }}><span style={{ color: 'hsl(var(--accent) / 0.4)', marginRight: '0.35rem' }}>//</span>Site Responsibility</p>
            <h2 className="iron-display" style={{ fontSize: 'clamp(1.4rem, 3vw, 2.2rem)', color: 'hsl(var(--foreground))', marginBottom: '1.5rem', textTransform: 'none' }}>
              What happens to a jobsite after the truck leaves?
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '0.92rem', color: 'hsl(var(--muted-foreground))', lineHeight: 1.75 }}>
                Storm drain inlets get barrier protection before the first mixer backs in. That's Maui County code, but it's also common sense when you live downstream of your own work.
              </p>
              <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '0.92rem', color: 'hsl(var(--muted-foreground))', lineHeight: 1.75 }}>
                Washout stays in lined containment. Cleaned and hauled after every pour. Materials come from Hawaiian Cement and HC&D batch plants, both on-island.
              </p>
              <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '0.92rem', color: 'hsl(var(--muted-foreground))', lineHeight: 1.75 }}>
                Forms get pulled, site gets swept, debris gets hauled. Same week. Not "when we get around to it." The crew lives in this community. Your neighbor's driveway is clean because ours was.
              </p>
            </div>
          </div>

          {/* Right: compliance callout sidebar */}
          <div style={{ borderLeft: '2px solid hsl(var(--accent))', paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '1.5rem', alignSelf: 'start', marginTop: '3rem' }}>
            <div>
              <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.58rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.16em', color: 'hsl(var(--accent))', marginBottom: '0.4rem' }}>
                Stormwater Compliance
              </div>
              <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '0.78rem', color: 'hsl(var(--muted-foreground))', lineHeight: 1.55 }}>
                Maui County Chapter 20.08 stormwater management. Inlet barriers installed before every pour.
              </p>
            </div>
            <div>
              <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.58rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.16em', color: 'hsl(var(--accent))', marginBottom: '0.4rem' }}>
                Washout Containment
              </div>
              <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '0.78rem', color: 'hsl(var(--muted-foreground))', lineHeight: 1.55 }}>
                EPA Construction General Permit compliant. Lined containment, hauled offsite after every pour.
              </p>
            </div>
            <div>
              <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.58rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.16em', color: 'hsl(var(--accent))', marginBottom: '0.4rem' }}>
                Materials Sourcing
              </div>
              <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '0.78rem', color: 'hsl(var(--muted-foreground))', lineHeight: 1.55 }}>
                Hawaiian Cement and HC&D batch plants. Both on-island, both audited.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS — spotlight carousel ===== */}
      <TestimonialSpotlight />

      {/* ===== REPEAT & REFERRAL — relationship proof strip ===== */}
      <section style={{ backgroundColor: 'hsl(var(--background))', borderTop: '1px solid hsl(var(--border))', borderBottom: '1px solid hsl(var(--border))', padding: '1.25rem 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '2rem', flexWrap: 'wrap' }}>
            <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.62rem', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.18em', color: 'hsl(var(--accent))', flexShrink: 0, paddingTop: '0.15rem' }}>
              <span style={{ color: 'hsl(var(--accent) / 0.4)', marginRight: '0.25rem' }}>//</span>They Came Back
            </span>
            <div style={{ display: 'flex', gap: '2.5rem', flexWrap: 'wrap' }}>
              {[
                { client: 'Shannon T.', action: 'Returned for a stamped patio after her driveway repour' },
                { client: 'Ryan M.', action: 'Referred his neighbor for a retaining wall estimate' },
                { client: 'Kimo & Lana H.', action: 'Third project — pool deck extension, Wailea' },
              ].map((entry) => (
                <div key={entry.client} style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
                  <span style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 600, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'hsl(var(--foreground))', flexShrink: 0 }}>
                    {entry.client}
                  </span>
                  <span style={{ fontFamily: 'Archivo, sans-serif', fontSize: '0.78rem', color: 'hsl(var(--muted-foreground))', lineHeight: 1.5 }}>
                    {entry.action}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== GALLERY PREVIEW — visual proof on homepage ===== */}
      <section style={{ backgroundColor: 'hsl(var(--background))', borderTop: '1px solid hsl(var(--border))', padding: 'clamp(3rem, 6vw, 5rem) 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem' }}>
            <div>
              <p className="iron-label" style={{ marginBottom: '0.75rem' }}><span style={{ color: 'hsl(var(--accent) / 0.4)', marginRight: '0.35rem' }}>//</span>Recent Work</p>
              <h2 className="iron-display" style={{ fontSize: 'clamp(1.4rem, 3vw, 2.2rem)', color: 'hsl(var(--foreground))' }}>
                From the Field
              </h2>
            </div>
            <Link
              to="/gallery"
              style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.15em', color: 'hsl(var(--accent))', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.4rem' }}
            >
              View Full Gallery <ArrowRight size={13} />
            </Link>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gridTemplateRows: 'auto auto', gap: '2px' }}>
            {/* Hero-width feature image spanning both rows on left */}
            <Link to="/gallery" style={{ position: 'relative', display: 'block', overflow: 'hidden', gridRow: '1 / 3' }}>
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=75"
                alt="Completed driveway repour, Wailea"
                loading="lazy"
                width={900}
                height={600}
                style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.04)' }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)' }}
              />
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(transparent, hsl(220 45% 7% / 0.75))', padding: '2rem 1rem 0.75rem' }}>
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.6rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.14em', color: 'hsl(var(--foreground) / 0.85)' }}>
                  Wailea Ekolu · Driveway Repour
                </span>
              </div>
            </Link>
            {/* Two stacked smaller images on right */}
            {[
              { src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=500&q=75', alt: 'Stamped patio finish, Makena', label: 'Makena · Stamped Patio' },
              { src: 'https://images.unsplash.com/photo-1625337905408-7b6fe970e187?auto=format&fit=crop&w=500&q=75', alt: 'Retaining wall, upper Kihei', label: 'Kihei · Retaining Wall' },
            ].map((photo) => (
              <Link key={photo.alt} to="/gallery" style={{ position: 'relative', display: 'block', overflow: 'hidden' }}>
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  width={500}
                  height={375}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.04)' }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)' }}
                />
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(transparent, hsl(220 45% 7% / 0.75))', padding: '2rem 1rem 0.75rem' }}>
                  <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.6rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.14em', color: 'hsl(var(--foreground) / 0.85)' }}>
                    {photo.label}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <FAQSection />

      {/* ===== FREE RESOURCE CARD ===== */}
      <section style={{ backgroundColor: 'hsl(var(--background))', borderTop: '1px solid hsl(var(--border))', borderBottom: '1px solid hsl(var(--border))', padding: 'clamp(2.5rem, 5vw, 4rem) 0' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ backgroundColor: 'hsl(var(--card))', border: '1px solid hsl(var(--border))', padding: 'clamp(1.5rem, 4vw, 2.5rem)', position: 'relative' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', backgroundColor: 'hsl(var(--accent))' }} />
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5rem', flexWrap: 'wrap' }}>
              <div style={{ flex: 1, minWidth: '240px' }}>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.58rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.16em', color: 'hsl(var(--accent))', marginBottom: '0.5rem' }}>
                  Free Resource
                </p>
                <h3 style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: '1.1rem', textTransform: 'uppercase', letterSpacing: '0.04em', color: 'hsl(var(--foreground))', marginBottom: '0.5rem', lineHeight: 1.2 }}>
                  Concrete Maintenance Guide for Maui Homeowners
                </h3>
                <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '0.85rem', color: 'hsl(var(--muted-foreground))', lineHeight: 1.6 }}>
                  Sealing schedules for coastal vs. upcountry. When to worry about cracks and when not to. Written by Burt from 22 years of callbacks and site visits.
                </p>
              </div>
              <Link
                to="/contact"
                style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.62rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'hsl(var(--accent))', textDecoration: 'none', padding: '0.6rem 1.25rem', border: '1px solid hsl(var(--accent) / 0.4)', alignSelf: 'center', flexShrink: 0, transition: 'background-color 0.2s' }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'hsl(var(--accent) / 0.08)' }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent' }}
              >
                Request Copy
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== COVERAGE CONFIDENCE STRIP ===== */}
      <section style={{ backgroundColor: 'hsl(var(--card))', borderTop: '1px solid hsl(var(--border))', borderBottom: '1px solid hsl(var(--border))', padding: '1.25rem 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.62rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.18em', color: 'hsl(var(--accent))' }}>
              Coverage Confirmed
            </span>
            {[
              { town: 'Kihei', time: 'Same-day estimate' },
              { town: 'Wailea', time: 'Same-day estimate' },
              { town: 'Makena', time: 'Same-day estimate' },
              { town: 'Kahului', time: 'Next-day estimate' },
              { town: 'Wailuku', time: 'Next-day estimate' },
              { town: 'Kula', time: '48-hour estimate' },
            ].map((area) => (
              <div key={area.town} style={{ display: 'flex', alignItems: 'baseline', gap: '0.35rem' }}>
                <span style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 600, fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'hsl(var(--foreground))' }}>
                  {area.town}
                </span>
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.55rem', fontWeight: 500, letterSpacing: '0.1em', color: 'hsl(var(--muted-foreground))' }}>
                  {area.time}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

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
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.65rem', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.18em', color: 'hsl(var(--accent))', marginBottom: '0.5rem' }}>
            Your driveway is how your kids get home. Your patio is where the family gathers.
          </p>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.58rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.14em', color: 'hsl(var(--foreground) / 0.35)', marginBottom: '0.5rem' }}>
            Currently Booking: June–July 2026
          </p>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.55rem', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'hsl(var(--accent) / 0.6)', marginBottom: '1rem' }}>
            Financing available for projects over $5,000
          </p>
          <h2 className="iron-display" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: 'hsl(var(--foreground))', marginBottom: '1rem', maxWidth: '680px' }}>
            Concrete Is the Ground You Live On
          </h2>
          <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '1rem', color: 'hsl(var(--foreground) / 0.7)', marginBottom: '2rem', maxWidth: '480px', lineHeight: 1.6 }}>
            Burt walks the site, reads the soil, and gives you a firm number. One crew. One call. No runaround.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '2rem' }}>
            <Link to="/contact" className="iron-btn">
              Get a Free Estimate
              <ArrowRight size={14} />
            </Link>
            <a href="tel:+18088759085" className="iron-btn iron-btn--ghost" style={{ borderColor: 'hsl(var(--foreground) / 0.4)' }}>
              <Phone size={14} />
              (808) 875-9085
            </a>
          </div>

          {/* Project-type quick-select */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem' }}>
            <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.58rem', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.18em', color: 'hsl(var(--foreground) / 0.4)' }}>
              What best describes your project?
            </span>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              {['Residential', 'Commercial', 'Repair / Repour'].map((type) => (
                <Link
                  key={type}
                  to="/contact"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '0.62rem',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.12em',
                    color: 'hsl(var(--foreground) / 0.7)',
                    padding: '0.5rem 1rem',
                    border: '1px solid hsl(var(--foreground) / 0.2)',
                    textDecoration: 'none',
                    transition: 'background-color 0.2s, border-color 0.2s, color 0.2s',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'hsl(var(--accent) / 0.15)'; e.currentTarget.style.borderColor = 'hsl(var(--accent))'; e.currentTarget.style.color = 'hsl(var(--accent))' }}
                  onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.borderColor = 'hsl(var(--foreground) / 0.2)'; e.currentTarget.style.color = 'hsl(var(--foreground) / 0.7)' }}
                >
                  {type}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
