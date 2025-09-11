import Hero from '@/components/Hero'
import ServicesList from '@/components/ServicesList'
import Testimonials from '@/components/Testimonials'
import CTA from '@/components/CTA'
import AyurvedaVsModern from '@/components/Why'

export default function Home() {
  return (
    <div className="container py-12 space-y-12">
      <Hero />
      <section>
        
        <ServicesList />
      </section>
      <section>
        <AyurvedaVsModern/>
        <Testimonials />
      </section>
      <CTA />
    </div>
  )
}
