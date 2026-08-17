"use client";

import React, { useState, useEffect } from "react";
import { twMerge } from "tailwind-merge";
import { DateTime, Duration } from "luxon";
import { BiMap } from "react-icons/bi";

/**
 * COMPOSANT : COMPTE À REBOURS
 */
const Countdown: React.FC<{ countdownIsoDate: string; className?: string }> = ({
  countdownIsoDate,
  className,
}) => {
  const [countdown, setCountdown] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const targetDate = DateTime.fromISO(countdownIsoDate);
    const updateCountdown = () => {
      const now = DateTime.now();
      const diff = targetDate.diff(now);
      if (diff.milliseconds <= 0) {
        setCountdown({ days: "00", hours: "00", minutes: "00", seconds: "00" });
        return;
      }
      const duration = Duration.fromObject(diff.toObject()).shiftTo(
        "days",
        "hours",
        "minutes",
        "seconds"
      );
      const padZero = (num: number): string => Math.floor(num).toString().padStart(2, "0");

      setCountdown({
        days: padZero(duration.days),
        hours: padZero(duration.hours),
        minutes: padZero(duration.minutes),
        seconds: padZero(duration.seconds),
      });
    };

    updateCountdown();
    const intervalId = setInterval(updateCountdown, 1000);
    return () => clearInterval(intervalId);
  }, [countdownIsoDate]);

  const renderCell = (value: string, label: string) => (
    <div className="flex min-w-16 flex-col items-center">
      <span className="text-4xl font-light md:text-6xl text-[#c5a059]">{value}</span>
      <span className="text-[10px] uppercase tracking-[0.2em] opacity-70 mt-2">{label}</span>
    </div>
  );

  return (
    <div className={twMerge("flex justify-center gap-4 md:gap-8 py-8 border-y border-white/20", className)}>
      {renderCell(countdown.days, "Jours")}
      {renderCell(countdown.hours, "Heures")}
      {renderCell(countdown.minutes, "Minutes")}
      {renderCell(countdown.seconds, "Secondes")}
    </div>
  );
};

/**
 * SECTION 1 : ACCUEIL
 */
const WeddingHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-[5%] py-20 overflow-hidden">
      <div className="relative z-10 mx-auto flex w-full max-w-3xl flex-col items-center text-center text-white">
        <h4 className="font-light tracking-[0.5em] uppercase mb-6 text-xs md:text-sm text-[#decba4]">
          L&apos;union de deux cœurs
        </h4>
        <h1 className="font-serif text-7xl md:text-9xl mb-8 italic drop-shadow-2xl">
          Salim & Thouria
        </h1>
        <p className="text-lg md:text-2xl font-light tracking-[0.2em] mb-12 uppercase">
          Mercredi 02 Septembre 2026
        </p>
        
        <div className="w-full max-w-xl bg-black/20 backdrop-blur-md p-10 rounded-sm border border-white/10 shadow-2xl">
          <p className="font-serif italic text-2xl mb-6 text-[#decba4]">Le grand jour approche...</p>
          <Countdown countdownIsoDate="2026-09-02T18:00:00" />
        </div>
      </div>

      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop" 
          className="size-full object-cover scale-105 animate-pulse-slow" 
          alt="Décoration de mariage" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/70 via-stone-900/40 to-stone-900/80" />
      </div>
    </section>
  );
};

/**
 * SECTION 2 : LE LIEU (BLIDA - PALAIS AL ANDALOUS)
 */
const WeddingLocation = () => {
  return (
    <section className="px-[5%] py-20 md:py-32 bg-[#fdfbf7]">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center mb-20">
          <span className="text-[#c5a059] text-sm tracking-[0.3em] uppercase mb-4 font-bold">Célébration</span>
       <div className="mx-auto max-w-3xl text-center">
  <p className="mb-6 font-serif text-3xl leading-relaxed text-stone-800 md:text-5xl">
    Monsieur <span className="italic">Salim</span> et Mademoiselle{" "}
    <span className="italic">Thouria</span>
  </p>

  <p className="font-serif text-xl leading-relaxed text-stone-700 md:text-2xl">
    ont le plaisir et l’honneur de vous inviter à partager avec eux la joie
    de la célébration de leur mariage,
  </p>

  <p className="mt-6 font-serif text-2xl leading-relaxed text-stone-800 md:text-4xl">
    le Mercredi 02 Septembre 2026
    <br />
    à quatre heures de l’après-midi.
  </p>
</div>
          <div className="h-px w-24 bg-[#c5a059] mb-8" />
          <p className="text-stone-600 text-lg max-w-2xl leading-relaxed italic">
            &quot;C&apos;est avec une immense joie que nous vous convions à partager notre bonheur dans le cadre somptueux du Palais Al Andalous à Blida.&quot;
          </p>
        </div>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 items-start">
          <div className="space-y-12">
            <div className="group flex items-start gap-8 p-6 transition-all hover:bg-white hover:shadow-xl rounded-xl">
              <BiMap className="size-10 text-[#c5a059] shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-stone-800 mb-2 uppercase tracking-tight">Localisation</h3>
                <p className="text-stone-600 leading-relaxed text-lg">
                  <strong>قاعة الحفلات قصر الأندلس</strong><br />
                  Rue Oudjir Amar, Ouled Yaïch<br />
                  Blida, Algérie
                </p>
                <a 
                  href="https://maps.app.goo.gl/jXmCF83zXxgz4yBw9" 
                  target="_blank" 
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center text-[#c5a059] font-bold border-b-2 border-[#c5a059] pb-1 hover:text-stone-800 hover:border-stone-800 transition-all"
                >
                  Ouvrir l&apos;itinéraire Google Maps
                </a>
              </div>
            </div>
          </div>

          <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl ring-8 ring-white">
            <iframe
              title="Plan Palais Al Andalous Blida"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3211.728956903206!2d2.8596637!3d36.4882193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128f0907a34e00b3%3A0x600f6b49048a6096!2sSalle%20des%20f%C3%AAtes%20Palais%20Al%20Andalous!5e0!3m2!1sfr!2sdz!4v1700000000000!5m2!1sfr!2sdz"
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
  );
};

/**
 * PAGE PRINCIPALE
 */
export default function Page() {
  return (
    <main className="min-h-screen bg-white selection:bg-[#c5a059] selection:text-white">
      <WeddingHero />
      
      <div className="flex flex-col items-center py-16 bg-[#fdfbf7]">
        <div className="h-px w-32 bg-stone-200" />
        <span className="my-8 text-stone-300 font-serif italic text-4xl">S & T</span>
        <div className="h-px w-32 bg-stone-200" />
      </div>

      <WeddingLocation />

      <footer className="py-20 text-center bg-stone-950 text-white">
        <h2 className="font-serif italic text-4xl mb-6 text-[#decba4]">Salim & Thouria</h2>
        <p className="text-white/30 text-[10px] tracking-[0.5em] uppercase">
          02 • 09 • 2026 — Blida, Algérie
        </p>
      </footer>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Montserrat:wght@200;300;400;600&display=swap');
        
        :root {
          --font-serif: 'Playfair Display', serif;
          --font-sans: 'Montserrat', sans-serif;
        }

        body {
          font-family: var(--font-sans);
          scroll-behavior: smooth;
        }

        .font-serif {
          font-family: var(--font-serif);
        }

        @keyframes pulse-slow {
          0%, 100% { transform: scale(1.05); }
          50% { transform: scale(1); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 20s ease-in-out infinite;
        }
      `}</style>
    </main>
  );
}