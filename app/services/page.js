import ServicesList from '@/components/ServicesList'

export default function Services() {
  return (
    <div className="container py-16">
      <h1 className="text-4xl font-bold mb-6">Services & Programs</h1>
      <ServicesList detailed />
    </div>
  )
}
