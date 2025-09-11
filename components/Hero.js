"use client";

import { motion, useReducedMotion } from "framer-motion";

function AyurvedaOrnaments() {
  const prefersReduced = useReducedMotion();

  // Reusable float animation
  const float = (delay = 0, y = 12, duration = 6) =>
    prefersReduced
      ? {}
      : {
          animate: { y: [0, -y, 0] },
          transition: {
            repeat: Infinity,
            duration,
            ease: "easeInOut",
            delay,
          },
        };

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 z-[1] select-none"
    >
      {/* Soft vignette to blend items */}
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_80%_20%,rgba(16,185,129,0.10),transparent_60%)]" />

      {/* Lotus (top-right) */}
      <motion.svg
        viewBox="0 0 100 60"
        className="absolute -right-4 -top-4 md:right-6 md:-top-2 w-40 md:w-56 opacity-30"
        {...float(0.2, 10, 7)}
      >
        <g fill="none" stroke="#059669" strokeWidth="1.2">
          <path d="M50 12 C40 22, 38 34, 50 42 C62 34, 60 22, 50 12Z" />
          <path d="M35 18 C27 28, 28 38, 42 43" />
          <path d="M65 18 C73 28, 72 38, 58 43" />
          <path d="M22 36 C36 48, 64 48, 78 36" />
        </g>
      </motion.svg>

      {/* Ayurvedic Neem/Tulsi leaf cluster (left-top) */}
      <motion.svg
        viewBox="0 0 120 60"
        className="absolute left-6 top-12 w-32 md:w-44 opacity-25"
        {...float(0.4, 14, 9)}
      >
        <g fill="none" stroke="#047857" strokeWidth="1.1">
          <path d="M20 40 C 40 10, 80 10, 100 40 C 80 70, 40 70, 20 40 Z" />
          <path d="M60 20 L60 60" />
        </g>
      </motion.svg>

      {/* Jasmine Petal (floating bottom-left) */}
      <motion.svg
        viewBox="0 0 80 80"
        className="absolute left-10 bottom-16 w-16 md:w-24 opacity-20"
        {...float(0.6, 12, 10)}
      >
        <path
          d="M40 10 C28 18, 28 42, 40 50 C52 42, 52 18, 40 10Z"
          fill="none"
          stroke="#10B981"
          strokeWidth="1.2"
        />
      </motion.svg>

      {/* Mortar & Pestle (bottom-right) */}
      <motion.svg
        viewBox="0 0 120 100"
        className="absolute right-2 bottom-2 md:right-8 md:bottom-6 w-36 md:w-48 opacity-20"
        {...float(0.4, 10, 6.5)}
      >
        <g fill="none" stroke="#065F46" strokeWidth="1.4" strokeLinecap="round">
          <path d="M18 60 h84 a22 16 0 0 1 -22 16 H40 A22 16 0 0 1 18 60 Z" />
          <path d="M24 48 h72 v6 a4 4 0 0 1 -4 4 H28 a4 4 0 0 1 -4 -4 Z" />
          <path d="M74 26 l22 -14" />
          <circle cx="96" cy="12" r="6" />
        </g>
      </motion.svg>

      {/* Golden aura behind doctor image */}
      <div className="absolute right-12 md:right-24 top-1/4 md:top-1/3 w-64 h-64 rounded-full bg-gradient-to-tr from-yellow-300/20 via-yellow-200/10 to-transparent blur-3xl" />

      {/* Tiny drifting sparkles */}
      {!prefersReduced && (
        <>
          <motion.div
            className="absolute left-10 top-14 h-2 w-2 rounded-full bg-emerald-400/40 blur-[1px]"
            animate={{ y: [0, -10, 0], opacity: [0.2, 0.5, 0.2] }}
            transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute right-14 top-1/2 h-1.5 w-1.5 rounded-full bg-yellow-300/40 blur-[1px]"
            animate={{ y: [0, -8, 0], opacity: [0.2, 0.45, 0.2] }}
            transition={{
              repeat: Infinity,
              duration: 6,
              ease: "easeInOut",
              delay: 0.5,
            }}
          />
        </>
      )}
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-gray-50 to-emerald-50 py-20 px-6 md:px-12 lg:px-24 rounded-3xl">
      {/* Animated Ayurveda background */}
      <AyurvedaOrnaments />

      {/* Paper-like subtle texture */}
      <div className="absolute inset-0 bg-[url('/pattern.png')] bg-cover opacity-5" />

      <div className="relative z-10 grid md:grid-cols-2 gap-20 items-center">
        {/* Left Content */}
        <div>
          <p className="text-lg italic text-emerald-700 mb-3 text-center md:text-left">
            “शरीरेन्द्रियसत्त्वात्मा संयोगो धर्म इत्युच्यते ॥”
          </p>
          <p className="text-sm text-emerald-600/80 mb-10 text-center md:text-left">
            (Health is the harmony of body, senses, mind & soul — Ayurveda Sutra)
          </p>

          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-[50px]">
            Struggling With{" "}
            <span className="text-emerald-700 font-normal">
              Persistent Skin Problems?
            </span>
          </h1>

          <p className="mt-8 text-lg text-gray-700 max-w-xl leading-relaxed">
            Most treatments only target the surface. At{" "}
            <span className="font-semibold text-emerald-700">
              Dr. Manpreet Ayurveda
            </span>
            , we go deeper — addressing the{" "}
            <span className="font-semibold text-gray-900">
              root cause of acne, pigmentation, eczema & psoriasis
            </span>
            . Combining{" "}
            <span className="text-emerald-700 font-medium">
              classical Ayurvedic wisdom
            </span>{" "}
            with{" "}
            <span className="text-gray-900 font-medium">
              modern dermatology
            </span>{" "}
            for safe, lasting results.
          </p>

          <div className="mt-12 flex gap-4 flex-wrap">
            <a
              href="/consultation"
              className="px-8 py-3.5 rounded-full bg-emerald-600 text-white font-medium shadow-lg hover:shadow-xl hover:scale-105 transition-transform"
            >
              Book Consultation
            </a>
            <a
              href="/success-stories"
              className="px-8 py-3.5 rounded-full border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition"
            >
              Patient Success Stories
            </a>
          </div>
        </div>

        {/* Right Doctor Image */}
        <div className="relative">
          <img
            src="/doc.png"
            alt="Dr. Manpreet"
            className="relative z-10 w-full max-w-md rounded-[28px] object-cover shadow-2xl"
          />
          {/* Feather gradient blend */}
          <div className="pointer-events-none absolute -inset-x-6 -bottom-8 h-40 bg-gradient-to-t from-emerald-50 via-white/0 to-transparent rounded-b-[32px]" />
        </div>
      </div>
    </section>
  );
}
