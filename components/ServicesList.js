"use client";

import { Droplet, Flower2, Leaf, Sun, Sparkles, HeartPulse } from "lucide-react";
import { motion } from "framer-motion";

export default function ServicesList() {
  const services = [
    { 
      title: "Acne & Pimples", 
      desc: "Root-cause Ayurvedic care to calm inflammation & prevent breakouts.", 
      icon: <Droplet className="w-7 h-7 text-emerald-600" />
    },
    { 
      title: "Pigmentation & Dark Spots", 
      desc: "Herbal therapies to restore natural tone & even skin texture.", 
      icon: <Sparkles className="w-7 h-7 text-emerald-600" />
    },
    { 
      title: "Eczema & Psoriasis", 
      desc: "Barrier repair + detox plans for long-lasting skin comfort.", 
      icon: <Leaf className="w-7 h-7 text-emerald-600" />
    },
    { 
      title: "Hair Fall & Dandruff", 
      desc: "Scalp healing with Rasayana herbs & gut balancing protocols.", 
      icon: <Flower2 className="w-7 h-7 text-emerald-600" />
    },
    { 
      title: "Anti-Ageing & Wrinkles", 
      desc: "Rejuvenating Ayurveda rituals for youthful, glowing skin.", 
      icon: <Sun className="w-7 h-7 text-emerald-600" />
    },
    { 
      title: "Holistic Glow & Detox", 
      desc: "Full-body cleansing & inner balance for radiant beauty.", 
      icon: <HeartPulse className="w-7 h-7 text-emerald-600" />
    },
  ];

  return (
    <section className="rounded-3xl relative py-20 bg-gradient-to-b from-white via-[#f6fdf9] to-[#eefaf4]">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        
        {/* Section Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ayurveda Solutions for Skin & Hair
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We combine time-tested Ayurvedic wisdom with holistic healing 
            to address skin problems at the root level and restore natural balance.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group p-6 rounded-2xl bg-white shadow-md border border-emerald-100 
                         hover:shadow-lg hover:border-emerald-300 hover:scale-[1.02] 
                         transition-all duration-300"
            >
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-emerald-50 mb-5 group-hover:bg-emerald-100 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-emerald-700 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
