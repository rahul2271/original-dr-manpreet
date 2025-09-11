import Image from 'next/image'

export default function About() {
  return (
    <div className="container py-16">
      <div className="glass grid md:grid-cols-3 gap-8 items-center">
        <div className="relative h-64 md:h-80">
          <img src="/doctor.jpg" alt="Doctor" className="rounded-2xl object-cover w-full h-full" />
        </div>
        <div className="md:col-span-2">
          <h1 className="text-4xl font-bold">Meet Dr. [Name], BAMS, MD</h1>
          <p className="text-muted mt-4">An experienced Ayurvedic dermatologist and trichologist combining classical principles with evidence-informed protocols to treat acne, eczema, pigmentation and hair loss.</p>
          <ul className="mt-6 text-muted list-disc list-inside space-y-2">
            <li>10+ years clinical experience</li>
            <li>Telemedicine-first approach</li>
            <li>Personalized treatment plans with structured follow-ups</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
