import { useState } from 'react'

export default function LeadForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState({ loading: false, success: null, error: null })

  const backend = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus({ loading: true, success: null, error: null })

    try {
      const res = await fetch(`${backend}/api/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, source: 'landing' }),
      })

      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Fehler bei der Anfrage')

      setStatus({ loading: false, success: data.message || 'Danke! Wir melden uns.', error: null })
      setForm({ name: '', email: '', message: '' })
    } catch (err) {
      setStatus({ loading: false, success: null, error: err.message })
    }
  }

  return (
    <section id="cta" className="relative">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-rose-50 to-amber-50" />
      <div className="relative max-w-3xl mx-auto px-6 py-16">
        <div className="bg-white/80 backdrop-blur-xl border border-gray-200 shadow-xl rounded-2xl p-8">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Kostenlose Beratung sichern</h3>
          <p className="mt-2 text-gray-600">Hinterlasse deine Kontaktdaten – wir melden uns mit Infos zu Preis, Geschmack und Lieferung.</p>
          <form onSubmit={handleSubmit} className="mt-6 grid gap-4">
            <div className="grid md:grid-cols-2 gap-4">
              <input name="name" value={form.name} onChange={handleChange} placeholder="Name" className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black" required />
              <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="E-Mail" className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black" required />
            </div>
            <textarea name="message" value={form.message} onChange={handleChange} placeholder="Deine Nachricht (optional)" rows={4} className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black" />
            <button disabled={status.loading} className="inline-flex items-center justify-center rounded-lg bg-black text-white px-6 py-3 font-semibold shadow-lg hover:shadow-xl transition disabled:opacity-50">
              {status.loading ? 'Senden…' : 'Jetzt anfragen'}
            </button>
            {status.success && <div className="text-emerald-600 font-medium">{status.success}</div>}
            {status.error && <div className="text-red-600 font-medium">{status.error}</div>}
          </form>
        </div>
      </div>
    </section>
  )
}
