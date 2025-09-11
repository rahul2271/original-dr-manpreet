'use client'
import { useState } from 'react'

export default function Consultation() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', condition: 'Acne', date: '' })
  const [loading, setLoading] = useState(false)

  async function submit(e) {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await fetch('/api/consultation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      const data = await res.json()
      alert(data.message || 'Request received')
    } catch (err) {
      alert('Error: ' + err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container py-16">
      <div className="max-w-2xl mx-auto glass">
        <h1 className="text-2xl font-bold">Book a 30-min Consultation</h1>
        <p className="text-muted mt-2">Fill details and proceed. Payment integration can be added next.</p>
        <form onSubmit={submit} className="mt-6 space-y-4">
          <div>
            <label className="block text-sm">Full name</label>
            <input required value={form.name} onChange={e=>setForm({...form,name:e.target.value})} className="mt-1 w-full rounded-lg border px-4 py-2 bg-black/30" />
          </div>
          <div>
            <label className="block text-sm">Email</label>
            <input required type="email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} className="mt-1 w-full rounded-lg border px-4 py-2 bg-black/30" />
          </div>
          <div>
            <label className="block text-sm">Phone</label>
            <input required value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} className="mt-1 w-full rounded-lg border px-4 py-2 bg-black/30" />
          </div>
          <div>
            <label className="block text-sm">Primary concern</label>
            <select value={form.condition} onChange={e=>setForm({...form,condition:e.target.value})} className="mt-1 w-full rounded-lg border px-4 py-2 bg-black/30">
              <option>Acne</option><option>Eczema</option><option>Psoriasis</option><option>Pigmentation</option><option>Hair Loss</option>
            </select>
          </div>
          <div>
            <label className="block text-sm">Preferred date/time (optional)</label>
            <input value={form.date} onChange={(e)=>setForm({...form,date:e.target.value})} className="mt-1 w-full rounded-lg border px-4 py-2 bg-black/30" placeholder="2025-09-12 4:00 PM" />
          </div>
          <div className="flex gap-4">
            <button className="btn-primary" type="submit" disabled={loading}>{loading ? 'Sending...' : 'Submit Request'}</button>
            <button type="button" className="px-4 py-2 rounded-xl border" onClick={()=>alert('Payment integration next')}>Pay Now</button>
          </div>
        </form>
      </div>
    </div>
  )
}
