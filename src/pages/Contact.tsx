import { useState } from 'react'
import { Phone, MapPin, Clock, Send } from 'lucide-react'

interface FormState {
  name: string
  phone: string
  email: string
  service: string
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

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
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
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1600&q=80"
          alt="Concrete foundation work, South Maui"
          fetchPriority="high"
          loading="eager"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'hsl(220 45% 7% / 0.82)' }} />
        <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 clamp(1.5rem, 5vw, 4rem)', zIndex: 10 }}>
          <p className="iron-label" style={{ marginBottom: '0.75rem' }}>§ Get in Touch</p>
          <h1 className="iron-display" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', color: 'hsl(var(--foreground))' }}>
            Contact Burt's Concrete
          </h1>
        </div>
      </section>

      {/* 2-col: info + form */}
      <section style={{ backgroundColor: 'hsl(var(--background))', padding: 'clamp(3rem, 8vw, 6rem) 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem', display: 'grid', gridTemplateColumns: '1fr', gap: '4rem' }} className="md:grid-cols-2">

          {/* Left — contact info */}
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

          {/* Right — form */}
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
                <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '0.85rem', color: 'hsl(var(--muted-foreground))', marginBottom: '1.75rem', lineHeight: 1.5 }}>
                  Burt will call to schedule a site walk. No commitment required.
                </p>

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
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

                  <button type="submit" className="iron-btn" style={{ justifyContent: 'center', width: '100%' }}>
                    Send Estimate Request
                    <Send size={14} />
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
