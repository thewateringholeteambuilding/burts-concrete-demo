import { useState } from 'react'
import { Phone, MapPin, Clock, Send, ArrowRight } from 'lucide-react'

interface FormState {
  name: string
  phone: string
  email: string
  service: string
  customerType: string
  message: string
}

const serviceOptions = [
  'Concrete Foundation',
  'Driveway or Parking',
  'Retaining Wall',
  'Sidewalk or Walkway',
  'Decorative Concrete',
  'Concrete Slab',
  'Concrete Repair',
  'Other / Not Sure',
]

const serviceHints: Record<string, string> = {
  'Concrete Foundation': 'Helpful to mention: building type (house, ADU, addition), approximate footprint in sq ft, whether you have engineered plans.',
  'Driveway or Parking': 'Helpful to mention: approximate length and width, current surface (dirt, old concrete, asphalt), vehicle types using it daily.',
  'Retaining Wall': 'Helpful to mention: wall height needed, slope grade if known, whether water pools behind the area after rain.',
  'Sidewalk or Walkway': 'Helpful to mention: total linear feet, desired width, whether ADA compliance is needed.',
  'Decorative Concrete': 'Helpful to mention: finish type (stamped, stained, polished), area in sq ft, any color or pattern references.',
  'Concrete Slab': 'Helpful to mention: intended use (garage, workshop, lanai), approximate dimensions, whether plumbing runs underneath.',
  'Concrete Repair': 'Helpful to mention: type of damage (cracking, spalling, settling), approximate area affected, age of existing concrete.',
}

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    name: '',
    phone: '',
    email: '',
    service: '',
    customerType: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [step, setStep] = useState(1)

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const honeypot = (e.currentTarget as HTMLFormElement).elements.namedItem("company_website") as HTMLInputElement | null;
    if (honeypot && honeypot.value.trim() !== "") {
      setSubmitted(true); // silent success for bots
      return;
    }
    setSubmitted(true)
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '0.85rem 1rem',
    backgroundColor: 'hsl(var(--card))',
    border: '1px solid hsl(var(--border))',
    color: 'hsl(var(--foreground))',
    fontFamily: 'Archivo, sans-serif',
    fontSize: '0.92rem',
    outline: 'none',
    borderRadius: 0,
    boxSizing: 'border-box',
  }

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontFamily: 'Inter, sans-serif',
    fontWeight: 500,
    fontSize: '0.68rem',
    textTransform: 'uppercase',
    letterSpacing: '0.18em',
    color: 'hsl(var(--muted-foreground))',
    marginBottom: '0.4rem',
  }

  return (
    <>
      {/* Page header */}
      <section style={{ position: 'relative', height: '300px', overflow: 'hidden' }}>
        <img
          src="https://images.unsplash.com/photo-1641698680673-edab78703c0b?auto=format&fit=crop&w=1600&q=80"
          alt="Concrete foundation work, South Maui"
          fetchPriority="high"
          loading="eager"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'hsl(220 45% 7% / 0.82)' }} />
        <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 clamp(1.5rem, 5vw, 4rem)', zIndex: 10 }}>
          <p className="iron-label" style={{ marginBottom: '0.75rem' }}>Get in Touch</p>
          <h1 className="iron-display" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', color: 'hsl(var(--foreground))' }}>
            The Ground Under Everything
          </h1>
        </div>
      </section>

      {/* 2-col: info + form */}
      <section style={{ backgroundColor: 'hsl(var(--background))', padding: 'clamp(3rem, 8vw, 6rem) 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem', display: 'grid', gridTemplateColumns: '1fr', gap: '4rem' }} className="md:grid-cols-2">

          {/* Left, contact info */}
          <div>
            <h2 className="iron-display" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', color: 'hsl(var(--foreground))', marginBottom: '2rem' }}>
              Burt Picks Up the Phone
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2.5rem' }}>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ width: '36px', height: '36px', backgroundColor: 'hsl(var(--accent))', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Phone size={15} style={{ color: 'hsl(var(--accent-foreground))' }} />
                </div>
                <div>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.68rem', textTransform: 'uppercase', letterSpacing: '0.18em', color: 'hsl(var(--muted-foreground))', marginBottom: '0.25rem' }}>Phone / Text</p>
                  <a href="tel:+18088759085" style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 600, fontSize: '1.4rem', textTransform: 'uppercase', letterSpacing: '0.04em', color: 'hsl(var(--foreground))', textDecoration: 'none' }}>
                    (808) 875-9085
                  </a>
                  <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '0.83rem', color: 'hsl(var(--muted-foreground))', marginTop: '0.25rem' }}>
                    Calls and texts welcome. Usually responds same day.
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ width: '36px', height: '36px', backgroundColor: 'hsl(var(--steel-mid))', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, border: '1px solid hsl(var(--border))' }}>
                  <MapPin size={15} style={{ color: 'hsl(var(--accent))' }} />
                </div>
                <div>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.68rem', textTransform: 'uppercase', letterSpacing: '0.18em', color: 'hsl(var(--muted-foreground))', marginBottom: '0.25rem' }}>Location</p>
                  <p style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 600, fontSize: '1.05rem', textTransform: 'uppercase', letterSpacing: '0.04em', color: 'hsl(var(--foreground))' }}>
                    Kihei, HI 96753
                  </p>
                  <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '0.83rem', color: 'hsl(var(--muted-foreground))', marginTop: '0.25rem' }}>
                    South Maui. Serving Kihei, Wailea, Makena, and Central Maui.
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ width: '36px', height: '36px', backgroundColor: 'hsl(var(--steel-mid))', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, border: '1px solid hsl(var(--border))' }}>
                  <Clock size={15} style={{ color: 'hsl(var(--accent))' }} />
                </div>
                <div>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.68rem', textTransform: 'uppercase', letterSpacing: '0.18em', color: 'hsl(var(--muted-foreground))', marginBottom: '0.25rem' }}>Hours</p>
                  <p style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 600, fontSize: '1.05rem', textTransform: 'uppercase', letterSpacing: '0.04em', color: 'hsl(var(--foreground))' }}>
                    Mon-Fri, 7am-5pm
                  </p>
                  <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '0.83rem', color: 'hsl(var(--muted-foreground))', marginTop: '0.25rem' }}>
                    Estimates scheduled within the week for most projects.
                  </p>
                </div>
              </div>
            </div>

            {/* Keyless Google Maps embed */}
            <div style={{ border: '1px solid hsl(var(--border))', overflow: 'hidden' }}>
              <iframe
                title="Burt's Concrete location map - Kihei, Maui"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3758.2!2d-156.4450!3d20.7644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9e0f9bfa6beebf82!2sKihei%2C+HI+96753!5e0!3m2!1sen!2sus!4v1714000000000!5m2!1sen!2sus"
                width="100%"
                height="280"
                style={{ border: 0, display: 'block' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right, form */}
          <div style={{ backgroundColor: 'hsl(var(--card))', border: '1px solid hsl(var(--border))', padding: 'clamp(1.75rem, 4vw, 2.5rem)', borderTop: '3px solid hsl(var(--accent))' }}>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                <div style={{ width: '48px', height: '48px', backgroundColor: 'hsl(var(--accent))', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
                  <Send size={20} style={{ color: 'hsl(var(--accent-foreground))' }} />
                </div>
                <h3 className="iron-display" style={{ fontSize: '1.4rem', color: 'hsl(var(--foreground))', marginBottom: '0.75rem' }}>
                  Request Sent
                </h3>
                <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '0.9rem', color: 'hsl(var(--muted-foreground))', lineHeight: 1.65 }}>
                  Burt will follow up within one business day. For faster response, call or text (808) 875-9085.
                </p>
              </div>
            ) : (
              <>
                <h2 className="iron-display" style={{ fontSize: '1.4rem', color: 'hsl(var(--foreground))', marginBottom: '0.5rem' }}>
                  Request a Free Estimate
                </h2>
                <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '0.85rem', color: 'hsl(var(--muted-foreground))', marginBottom: '1rem', lineHeight: 1.5 }}>
                  Burt will call to schedule a site walk. No commitment required.
                </p>

                {/* Step indicator */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.75rem' }}>
                  {[1, 2].map((s) => (
                    <div key={s} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <div style={{
                        width: '24px', height: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: '0.72rem',
                        backgroundColor: step >= s ? 'hsl(var(--accent))' : 'hsl(var(--border))',
                        color: step >= s ? 'hsl(var(--accent-foreground))' : 'hsl(var(--muted-foreground))',
                        transition: 'background-color 0.25s, color 0.25s',
                      }}>
                        {s}
                      </div>
                      <span style={{
                        fontFamily: 'Inter, sans-serif', fontSize: '0.62rem', fontWeight: 600,
                        textTransform: 'uppercase', letterSpacing: '0.12em',
                        color: step >= s ? 'hsl(var(--foreground))' : 'hsl(var(--muted-foreground))',
                      }}>
                        {s === 1 ? 'You & the Job' : 'Project Details'}
                      </span>
                      {s === 1 && (
                        <div style={{ width: '24px', height: '1px', backgroundColor: 'hsl(var(--border))' }} />
                      )}
                    </div>
                  ))}
                </div>

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <div aria-hidden="true" style={{ position: 'absolute', left: '-9999px', width: 1, height: 1, overflow: 'hidden' }}>
                    <label htmlFor="company_website">Leave this field empty</label>
                    <input type="text" id="company_website" name="company_website" tabIndex={-1} autoComplete="off" defaultValue="" />
                  </div>

                  {/* Step 1: Contact info + service type */}
                  {step === 1 && (
                    <>
                      <div>
                        <label htmlFor="name" style={labelStyle}>Your Name</label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Full name"
                          style={inputStyle}
                        />
                      </div>

                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                        <div>
                          <label htmlFor="phone" style={labelStyle}>Phone</label>
                          <input
                            id="phone"
                            name="phone"
                            type="tel"
                            required
                            value={form.phone}
                            onChange={handleChange}
                            placeholder="(808) 000-0000"
                            style={inputStyle}
                          />
                        </div>
                        <div>
                          <label htmlFor="email" style={labelStyle}>Email</label>
                          <input
                            id="email"
                            name="email"
                            type="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="you@email.com"
                            style={inputStyle}
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="service" style={labelStyle}>Type of Work</label>
                        <select
                          id="service"
                          name="service"
                          value={form.service}
                          onChange={handleChange}
                          style={{ ...inputStyle, appearance: 'none', cursor: 'pointer' }}
                        >
                          <option value="">Select a service</option>
                          {serviceOptions.map((opt) => (
                            <option key={opt} value={opt}>{opt}</option>
                          ))}
                        </select>
                        {form.service && serviceHints[form.service] && (
                          <p style={{
                            fontFamily: 'Archivo, sans-serif',
                            fontSize: '0.75rem',
                            color: 'hsl(var(--accent))',
                            marginTop: '0.5rem',
                            lineHeight: 1.5,
                            padding: '0.5rem 0.75rem',
                            backgroundColor: 'hsl(var(--accent) / 0.08)',
                            border: '1px solid hsl(var(--accent) / 0.15)',
                          }}>
                            {serviceHints[form.service]}
                          </p>
                        )}
                      </div>

                      <button
                        type="button"
                        onClick={() => { if (form.name && form.phone) setStep(2) }}
                        className="iron-btn"
                        style={{ justifyContent: 'center', width: '100%', opacity: form.name && form.phone ? 1 : 0.5 }}
                      >
                        Next Step
                        <ArrowRight size={14} />
                      </button>
                    </>
                  )}

                  {/* Step 2: Relationship + project details */}
                  {step === 2 && (
                    <>
                      <div>
                        <p style={labelStyle}>Have we worked together before?</p>
                        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                          {['First time', 'Returning client', 'Referral'].map((opt) => (
                            <label
                              key={opt}
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.4rem',
                                cursor: 'pointer',
                                fontFamily: 'Archivo, sans-serif',
                                fontSize: '0.85rem',
                                color: form.customerType === opt ? 'hsl(var(--foreground))' : 'hsl(var(--muted-foreground))',
                                padding: '0.5rem 0.85rem',
                                border: `1px solid ${form.customerType === opt ? 'hsl(var(--accent))' : 'hsl(var(--border))'}`,
                                backgroundColor: form.customerType === opt ? 'hsl(var(--accent) / 0.08)' : 'transparent',
                                transition: 'border-color 0.2s, background-color 0.2s',
                              }}
                            >
                              <input
                                type="radio"
                                name="customerType"
                                value={opt}
                                checked={form.customerType === opt}
                                onChange={handleChange}
                                style={{ display: 'none' }}
                              />
                              <span style={{
                                width: '10px',
                                height: '10px',
                                border: `2px solid ${form.customerType === opt ? 'hsl(var(--accent))' : 'hsl(var(--border))'}`,
                                backgroundColor: form.customerType === opt ? 'hsl(var(--accent))' : 'transparent',
                                flexShrink: 0,
                                transition: 'border-color 0.2s, background-color 0.2s',
                              }} />
                              {opt}
                            </label>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label htmlFor="message" style={labelStyle}>Project Details</label>
                        <textarea
                          id="message"
                          name="message"
                          rows={4}
                          value={form.message}
                          onChange={handleChange}
                          placeholder="Location, approximate size, timeline, anything useful..."
                          style={{ ...inputStyle, resize: 'vertical', minHeight: '100px' }}
                        />
                      </div>

                      <div style={{ display: 'flex', gap: '0.75rem' }}>
                        <button
                          type="button"
                          onClick={() => setStep(1)}
                          className="iron-btn iron-btn--ghost"
                          style={{ flex: '0 0 auto' }}
                        >
                          Back
                        </button>
                        <button type="submit" className="iron-btn" style={{ justifyContent: 'center', flex: 1 }}>
                          Send Estimate Request
                          <Send size={14} />
                        </button>
                      </div>
                    </>
                  )}
                </form>

                {/* Element 5: Fallback CTA — prefer to call */}
                <div style={{ textAlign: 'center', marginTop: '1.5rem', paddingTop: '1.25rem', borderTop: '1px solid hsl(var(--border))' }}>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.68rem', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.15em', color: 'hsl(var(--muted-foreground))', marginBottom: '0.4rem' }}>
                    Prefer to call?
                  </p>
                  <a href="tel:+18088759085" style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 600, fontSize: '1.1rem', color: 'hsl(var(--accent))', textDecoration: 'none', letterSpacing: '0.04em' }}>
                    (808) 875-9085
                  </a>
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
