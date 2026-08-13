"use client";

import React, { useState, useEffect } from "react";

/**
 * COMPOSANT : COMPTE À REBOURS (SANS LUXON)
 */
const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    jours: "00",
    heures: "00",
    minutes: "00",
    secondes: "00",
  });

  useEffect(() => {
    const targetDate = new Date("2026-09-02T18:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        return;
      }

      const d = Math.floor(distance / (1000 * 60 * 60 * 24));
      const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({
        jours: d.toString().padStart(2, "0"),
        heures: h.toString().padStart(2, "0"),
        minutes: m.toString().padStart(2, "0"),
        secondes: s.toString().padStart(2, "0"),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const Cell = ({ value, label }: { value: string; label: string }) => (
    <div className="flex flex-col items-center">
      <span className="text-4xl md:text-6xl font-light text-[#c5a059]">{value}</span>
      <span className="text-[10px] uppercase tracking-widest opacity-60 mt-2">{label}</span>
    </div>
  );

  return (
    <div className="flex justify-center gap-6 md:gap-10 py-8 border-y border-white/20">
      <Cell value={timeLeft.jours} label="Jours" />
      <Cell value={timeLeft.heures} label="Heures" />
      <Cell value={timeLeft.minutes} label="Minutes" />
      <Cell value={timeLeft.secondes} label="Secondes" />
    </div>
  );
};

/**
 * PAGE PRINCIPALE
 */
export default function WeddingPage() {
  return (
    <main className="min-h-screen bg-white text-stone-800">
      {/* SECTION HERO */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="relative z-10 text-center text-white px-4">
          <span className="block text-[#decba4] tracking-[0.4em] uppercase text-xs mb-6">
            Nous allons nous marier
          </span>
          <h1 className="text-6xl md:text-9xl font-serif italic mb-8 drop-shadow-lg">
            Thouria & Salim
          </h1>
          <p className="text-lg md:text-2xl tracking-[0.2em] mb-12 uppercase font-light">
            02 Septembre 2026
          </p>
          <div className="bg-black/30 backdrop-blur-md p-8 rounded-lg border border-white/10 max-w-xl mx-auto">
            <Countdown />
          </div>
        </div>

        {/* IMAGE DE FOND */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070"
            className="w-full h-full object-cover"
            alt="Mariage"
          />
          <div className="absolute inset-0 bg-stone-900/60" />
        </div>
      </section>

      {/* SECTION LIEU (PALAIS AL ANDALOUS) */}
      <section className="py-24 px-6 bg-[#fdfbf7]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-serif mb-4">Le Palais Al Andalous</h2>
            <div className="h-px w-24 bg-[#c5a059] mx-auto mb-6" />
            <p className="text-stone-500 italic text-lg">Blida, Algérie</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Détails */}
            <div className="space-y-10">
              <div className="flex gap-6">
                <span className="text-2xl">📍</span>
                <div>
                  <h3 className="text-xl font-bold uppercase tracking-widest mb-2">Adresse</h3>
                  <p className="text-stone-600 leading-relaxed">
                    قاعة الحفلات قصر الأندلس<br />
                    Rue Oudjir Amar, Ouled Yaïch<br />
                    Blida, Algérie
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <span className="text-2xl">⏰</span>
                <div>
                  <h3 className="text-xl font-bold uppercase tracking-widest mb-2">Horaires</h3>
                  <p className="text-stone-600 leading-relaxed">
                    Début de la cérémonie à 18h30.<br />
                    Dîner et célébration en soirée.
                  </p>
                </div>
              </div>

              <div className="pt-6">
                <a
                  href="https://maps.app.goo.gl/jXmCF83zXxgz4yBw9"
                  target="_blank"
                  className="inline-block bg-[#c5a059] text-white px-8 py-4 rounded-full hover:bg-[#a6864a] transition-all shadow-lg uppercase tracking-widest text-sm font-bold"
                >
                  Ouvrir l'itinéraire
                </a>
              </div>
            </div>

            {/* Carte Maps (Iframe standard) */}
            <div className="h-[450px] rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
              <iframe
                title="Carte Palais Al Andalous"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3211.728956903206!2d2.8596637!3d36.4882193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128f0907a34e00b3%3A0x600f6b49048a6096!2sSalle%20des%20f%C3%AAtes%20Palais%20Al%20Andalous!5e0!3m2!1sfr!2sdz!4v1715870000000!5m2!1sfr!2sdz"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-20 bg-stone-900 text-center text-white/40">
        <p className="font-serif italic text-3xl mb-4 text-[#decba4]">Thouria & Salim</p>
        <p className="text-[10px] tracking-[0.4em] uppercase">02 • 09 • 2026 — Blida</p>
      </footer>

      {/* CSS POUR LES POLICES (Playfair Display est standard pour les mariages) */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;1,400&family=Inter:wght@300;400;600&display=swap');
        
        h1, h2, .font-serif {
          font-family: 'Playfair Display', serif;
        }
        
        body {
          font-family: 'Inter', sans-serif;
        }
      `}</style>
    </main>
  );
}