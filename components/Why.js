"use client";
import { motion } from "framer-motion";
import { CheckCircle, XCircle, Leaf, Sparkles } from "lucide-react";

export default function AyurvedaVsModern() {
  const points = [
    {
      ayurveda: "Heals from the root – focuses on Dosha balance & detox.",
      modern: "Temporary relief – only masks surface symptoms.",
    },
    {
      ayurveda: "100% natural, safe, no harmful side effects.",
      modern: "Harsh chemicals, steroids & side effects common.",
    },
    {
      ayurveda: "Long-term glow & healthy skin.",
      modern: "Quick fixes fade, often cause dependency.",
    },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-b from-[#0b0b12] to-[#1a1a22] text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text"
        >
          Why Choose Ayurveda for Skin?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-gray-300 max-w-3xl mx-auto mb-12"
        >
          Contrast between <span className="text-purple-400">Ayurveda</span> and{" "}
          <span className="text-pink-400">Modern Quick Fixes</span>. 
          Ayurveda is about <strong>root-cause healing</strong>, natural methods & 
          long-lasting results.
        </motion.p>

        {/* Infographic Style Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Ayurveda */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-purple-600/20 to-purple-900/30 border border-purple-600/40 rounded-2xl p-8 shadow-2xl backdrop-blur-lg"
          >
            <div className="flex items-center justify-center mb-4">
              <Leaf className="w-10 h-10 text-green-400" />
            </div>
            <h3 className="text-2xl font-semibold text-green-300 mb-6">
              Ayurveda Approach 🌿
            </h3>
            <ul className="space-y-4 text-left">
              {points.map((p, i) => (
                <li key={i} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400 mt-1" />
                  <span>{p.ayurveda}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Modern Fixes */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-red-600/20 to-red-900/30 border border-red-600/40 rounded-2xl p-8 shadow-2xl backdrop-blur-lg"
          >
            <div className="flex items-center justify-center mb-4">
              <Sparkles className="w-10 h-10 text-red-400" />
            </div>
            <h3 className="text-2xl font-semibold text-red-300 mb-6">
              Modern Quick Fixes ⚡
            </h3>
            <ul className="space-y-4 text-left">
              {points.map((p, i) => (
                <li key={i} className="flex items-start space-x-3">
                  <XCircle className="w-6 h-6 text-red-400 mt-1" />
                  <span>{p.modern}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
