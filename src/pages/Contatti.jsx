import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from 'framer-motion'
import { Phone, MapPin, Clock, Sparkles, ParkingCircle, Mountain, Wifi, Package, CreditCard, DoorOpen, Car, PersonStanding, Trophy } from 'lucide-react'

import esterno from '../assets/foto/esterno-ristorante-fiori.webp'
import terrazzaTavolo from '../assets/foto/terrazza-tavolo-vista-adamello.webp'

gsap.registerPlugin(ScrollTrigger)

export default function Contatti() {
  const heroRef = useRef(null)
  const infoRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to('.contatti-hero-img', {
        yPercent: 25,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1
        }
      })

      gsap.fromTo('.info-card',
        { x: -60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: infoRef.current,
            start: 'top 75%',
          }
        }
      )

      gsap.fromTo('.direction-card',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.2,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.directions-section',
            start: 'top 80%',
          }
        }
      )
    })

    return () => ctx.revert()
  }, [])

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section ref={heroRef} className="relative h-[70vh] md:h-[80vh] overflow-hidden">
        <div className="contatti-hero-img absolute inset-0 scale-110">
          <img
            src={esterno}
            alt="Esterno del ristorante Il Cavallino"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        </div>

        <div className="relative h-full flex items-end pb-16 md:pb-24">
          <div className="container-broken">
            <span className="text-amber-400 text-xs uppercase tracking-[0.3em] mb-4 block">Vieni a trovarci</span>
            <h1 className="font-serif text-white leading-[0.85]" style={{ fontSize: 'var(--text-4xl)' }}>
              Contatti &<br />
              <span className="text-amber-400">Dove Siamo</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Info Cards */}
      <section ref={infoRef} className="py-16 bg-crema">
        <div className="grid grid-cols-12 gap-4 md:gap-6">
          {/* Telefono - Prominente */}
          <div className="info-card col-span-12 md:col-span-6 md:col-start-2 px-6 md:px-0">
            <motion.a
              href="tel:+393391513234"
              className="block bg-stone-700 rounded-2xl p-8 md:p-12 group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Phone className="w-12 h-12 text-amber-400 mb-6" />
              <p className="text-white/60 text-sm uppercase tracking-wider mb-2">Chiama per prenotare</p>
              <p className="font-serif text-white text-4xl md:text-5xl font-bold group-hover:text-amber-400 transition-colors">
                339 151 3234
              </p>
              <p className="text-white/50 text-sm mt-4">Tocca per chiamare</p>
            </motion.a>
          </div>

          {/* Indirizzo */}
          <div className="info-card col-span-12 md:col-span-4 px-6 md:px-0">
            <div className="bg-stone-800 rounded-2xl p-8 h-full">
              <MapPin className="w-10 h-10 text-amber-400 mb-6" />
              <p className="text-white/60 text-sm uppercase tracking-wider mb-2">Indirizzo</p>
              <p className="font-serif text-white text-xl mb-1">Via Tù 24</p>
              <p className="text-white/70">Frazione Tù</p>
              <p className="text-white/70">25059 Vezza d'Oglio (BS)</p>
              <p className="text-amber-400 text-sm mt-4">Alta Valle Camonica</p>
            </div>
          </div>

          {/* Orari */}
          <div className="info-card col-span-12 md:col-span-5 md:col-start-2 px-6 md:px-0">
            <div className="bg-white rounded-2xl p-8">
              <Clock className="w-10 h-10 text-amber-600 mb-6" />
              <p className="text-stone-600 text-sm uppercase tracking-wider mb-4">Orari di apertura</p>

              <div className="space-y-4">
                <div className="flex justify-between items-center pb-4 border-b border-stone-200">
                  <span className="text-stone-700">Lunedì - Venerdì</span>
                  <span className="font-serif text-stone-900 font-bold text-lg">08:00 - 00:00</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-stone-200">
                  <span className="text-stone-700">Sabato - Domenica</span>
                  <span className="font-serif text-stone-900 font-bold text-lg">07:45 - 00:15</span>
                </div>
              </div>

              <p className="text-stone-500 text-sm mt-6 italic">
                Aperto tutto il giorno: colazione, pranzo, merenda e cena.
              </p>
            </div>
          </div>

          {/* Servizi */}
          <div className="info-card col-span-12 md:col-span-5 px-6 md:px-0">
            <div className="bg-white rounded-2xl p-8 h-full">
              <Sparkles className="w-10 h-10 text-amber-600 mb-6" />
              <p className="text-stone-600 text-sm uppercase tracking-wider mb-4">Servizi</p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: ParkingCircle, label: 'Parcheggio gratuito' },
                  { icon: Mountain, label: 'Terrazza panoramica' },
                  { icon: Wifi, label: 'Wi-Fi gratuito' },
                  { icon: Package, label: 'Servizio asporto' },
                  { icon: CreditCard, label: 'Carte di credito' },
                  { icon: DoorOpen, label: 'Sala privata' },
                ].map((item, i) => {
                  const Icon = item.icon
                  return (
                    <div key={i} className="flex items-center gap-3">
                      <Icon className="w-5 h-5 text-amber-600" />
                      <span className="text-stone-700 text-sm">{item.label}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mappa */}
      <section className="relative">
        <div className="grid grid-cols-12">
          <div className="col-span-12 md:col-span-8 md:col-start-1 h-[50vh] md:h-[70vh]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2768.9!2d10.4!3d46.25!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zVmV6emEgZCdPZ2xpbw!5e0!3m2!1sit!2sit!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(30%)' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mappa Il Cavallino"
            />
          </div>

          <div className="col-span-12 md:col-span-4 bg-stone-800 flex items-center justify-center p-8 md:p-12">
            <div className="text-center">
              <p className="font-serif text-white text-2xl md:text-3xl mb-6">Aprici su Maps</p>
              <motion.a
                href="https://www.google.com/maps/dir//Via+T%C3%B9+24,+25059+Vezza+d'Oglio+BS"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-amber-500 text-stone-900 px-8 py-4 rounded-full font-semibold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Indicazioni
              </motion.a>
            </div>
          </div>
        </div>
      </section>

      {/* Indicazioni Stradali */}
      <section className="directions-section py-16 bg-stone-700 relative noise">
        <div className="container-broken mb-12 relative z-10">
          <span className="text-amber-400/60 text-xs uppercase tracking-[0.3em] mb-4 block">Come raggiungerci</span>
          <h2 className="font-serif text-white" style={{ fontSize: 'var(--text-2xl)' }}>
            Indicazioni
          </h2>
        </div>

        <div className="grid grid-cols-12 gap-4 md:gap-6 px-6 md:px-0 relative z-10">
          <div className="direction-card col-span-12 md:col-span-4 md:col-start-2">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 h-full">
              <div className="flex items-center gap-4 mb-6">
                <Car className="w-10 h-10 text-amber-400" />
                <div>
                  <h3 className="font-serif text-white text-xl font-bold">Da Brescia</h3>
                  <p className="text-amber-400 font-semibold">~90 km • 1h 30min</p>
                </div>
              </div>
              <p className="text-white/70 text-sm leading-relaxed">
                Seguire la SS42 della Val Camonica in direzione Edolo.
                Superato Edolo, proseguire verso Ponte di Legno.
                Dopo circa 7 km, svoltare a sinistra per la frazione Tù.
              </p>
            </div>
          </div>

          <div className="direction-card col-span-12 md:col-span-3">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 h-full">
              <div className="flex items-center gap-4 mb-6">
                <PersonStanding className="w-10 h-10 text-amber-400" />
                <div>
                  <h3 className="font-serif text-white text-xl font-bold">Da Ponte di Legno</h3>
                  <p className="text-amber-400 font-semibold">~9 km • 15 min</p>
                </div>
              </div>
              <p className="text-white/70 text-sm leading-relaxed">
                Scendere verso Edolo lungo la SS42. Dopo circa 2 km,
                svoltare a destra per la frazione Tù.
              </p>
            </div>
          </div>

          <div className="direction-card col-span-12 md:col-span-3">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 h-full">
              <div className="flex items-center gap-4 mb-6">
                <Mountain className="w-10 h-10 text-amber-400" />
                <div>
                  <h3 className="font-serif text-white text-xl font-bold">Da Edolo</h3>
                  <p className="text-amber-400 font-semibold">~9 km • 15 min</p>
                </div>
              </div>
              <p className="text-white/70 text-sm leading-relaxed">
                Prendere la SS42 in direzione Ponte di Legno.
                Dopo circa 7 km, svoltare a sinistra per Tù.
              </p>
            </div>
          </div>
        </div>

        <div className="container-broken mt-12 relative z-10">
          <div className="bg-amber-500/20 rounded-2xl p-6 flex items-center gap-6">
            <ParkingCircle className="w-10 h-10 text-amber-400 flex-shrink-0" />
            <p className="text-white">
              <span className="font-bold">Parcheggio gratuito</span> — Ampio spazio disponibile
              direttamente accanto al ristorante.
            </p>
          </div>
        </div>
      </section>

      {/* TripAdvisor */}
      <section className="py-12 bg-amber-500">
        <div className="container-broken">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="flex items-center gap-6">
              <Trophy className="w-16 h-16 md:w-20 md:h-20 text-stone-900" />
              <div>
                <p className="font-serif text-stone-900 text-3xl md:text-4xl font-bold">N.1 su TripAdvisor</p>
                <p className="text-stone-800">Vezza d'Oglio • 4.6/5 • 291 recensioni</p>
              </div>
            </div>
            <a
              href="https://www.tripadvisor.it/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-stone-900 font-semibold hover:text-stone-700 transition-colors"
            >
              Leggi le recensioni
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Finale */}
      <section className="relative py-16">
        <img
          src={terrazzaTavolo}
          alt="Terrazza Il Cavallino"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative container-broken text-center">
          <h2 className="font-serif text-white mb-6" style={{ fontSize: 'var(--text-2xl)' }}>
            Prenota il tuo<br />tavolo con vista
          </h2>
          <p className="text-white/70 mb-8 max-w-md mx-auto">
            Ti aspettiamo al Cavallino. Per gruppi o occasioni speciali, chiamaci.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.a
              href="tel:+393391513234"
              className="inline-flex items-center gap-3 bg-amber-500 text-stone-900 px-10 py-5 rounded-2xl font-bold text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              339 151 3234
            </motion.a>
            <Link
              to="/menu"
              className="inline-flex items-center gap-2 border border-white/50 text-white px-8 py-5 rounded-2xl font-semibold hover:bg-white/10 transition-colors"
            >
              Scopri il Menu
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
