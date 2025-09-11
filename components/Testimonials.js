"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rashmi",
    role: "Patient – Psoriasis Care",
    review:
      "I was struggling with psoriasis for years. Dr. Amnpreet’s Ayurvedic care gave me real relief – my skin feels calmer, and flare-ups are far less frequent.",
    rating: 5,
  },
  {
    name: "Manish",
    role: "Patient – Acne & Gut Health",
    review:
      "Acne was affecting my confidence badly. With the holistic plan focusing on gut health and skin, my face cleared and I feel healthy inside out.",
    rating: 5,
  },
  {
    name: "Aarti",
    role: "Patient – Anti-Ageing",
    review:
      "The Ayurvedic rituals made my skin firmer and restored my natural glow. I feel confident without makeup – it’s genuine inside-out healing.",
    rating: 5,
  },
  {
    name: "Karan",
    role: "Patient – Eczema Relief",
    review:
      "Eczema patches made me so self-conscious. The personalized herbal care really soothed my skin and even improved my sleep and energy.",
    rating: 4,
  },
  {
    name: "Simran",
    role: "Patient – Pigmentation",
    review:
      "I had stubborn pigmentation that I thought was permanent. With Dr. Amnpreet’s treatment, my skin tone is so much more even and radiant now.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="rounded-3xl relative py-16 px-6 md:px-16 bg-gradient-to-b from-white via-emerald-50/40 to-white">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-emerald-900 mb-4">
        What Our Patients Say
      </h2>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
        Real stories of healing and confidence — patients who found lasting
        solutions for skin & hair through Ayurveda.
      </p>

      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        loop={true}
      >
        {testimonials.map((t, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col justify-between h-full border border-emerald-100 hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
              <div>
                {/* Stars */}
                <div className="flex items-center mb-3">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className="text-yellow-500 fill-yellow-500 drop-shadow-sm"
                    />
                  ))}
                  {t.rating < 5 &&
                    Array.from({ length: 5 - t.rating }).map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        className="text-gray-300"
                      />
                    ))}
                </div>
                {/* Review */}
                <p className="text-gray-700 text-sm italic leading-relaxed">
                  “{t.review}”
                </p>
              </div>
              <div className="mt-6">
                <h4 className="font-semibold text-emerald-800">{t.name}</h4>
                <p className="text-gray-500 text-xs">{t.role}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
