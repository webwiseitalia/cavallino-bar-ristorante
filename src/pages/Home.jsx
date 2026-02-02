import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitType from 'split-type'
import { motion } from 'framer-motion'
import { Trophy, Mountain, Sunset, Flower2, Sun, Clock, MapPin, ParkingCircle, Phone } from 'lucide-react'

import heroImage from '../assets/foto/terrazza-tavolo-vista-adamello.webp'
import casoncelli from '../assets/foto/casoncelli-fatti-mano.webp'
import cervo from '../assets/foto/gulasch-cervo-polenta.webp'
import salaInterna from '../assets/foto/sala-interna-camino.webp'
import vistaAdamello from '../assets/foto/vista-adamello-estate.webp'
import chiesetta from '../assets/foto/chiesetta-san-clemente-tramonto.webp'
import terrazzaFiori from '../assets/foto/terrazza-fiori-montagne.webp'
import pizzoccheri from '../assets/foto/pizzoccheri-valtellinesi.webp'
import esterno from '../assets/foto/esterno-ristorante-fiori.webp'
import gnocchetti from '../assets/foto/gnocchetti-saraceno-formaggio.webp'

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  const heroRef = useRef(null)
  const introRef = useRef(null)
  const specialitaRef = useRef(null)
  const terrazzaRef = useRef(null)
  const marqueeRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to('.hero-image', {
        yPercent: 30,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1
        }
      })

      const heroText = new SplitType('.hero-title', { types: 'chars, words' })
      gsap.fromTo(heroText.chars,
        { y: 100, opacity: 0, rotateX: -90 },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          stagger: 0.02,
          duration: 1.2,
          ease: 'power4.out',
          delay: 0.3
        }
      )

      gsap.fromTo('.hero-subtitle',
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 1 }
      )

      gsap.fromTo('.hero-badge',
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.8, ease: 'back.out(1.7)', delay: 1.4 }
      )

      gsap.fromTo('.hero-cta',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.15, duration: 0.8, ease: 'power3.out', delay: 1.6 }
      )

      const introText = new SplitType('.intro-text', { types: 'lines' })
      gsap.fromTo(introText.lines,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: introRef.current,
            start: 'top 80%',
          }
        }
      )

      gsap.fromTo('.specialita-item',
        { y: 100, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          stagger: 0.2,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: specialitaRef.current,
            start: 'top 70%',
          }
        }
      )

      gsap.to('.terrazza-img-1', {
        y: -100,
        ease: 'none',
        scrollTrigger: {
          trigger: terrazzaRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1
        }
      })

      gsap.to('.terrazza-img-2', {
        y: 80,
        ease: 'none',
        scrollTrigger: {
          trigger: terrazzaRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1
        }
      })

      gsap.to(marqueeRef.current, {
        xPercent: -50,
        ease: 'none',
        scrollTrigger: {
          trigger: marqueeRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 0.5
        }
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section ref={heroRef} className="relative h-screen min-h-[700px] overflow-hidden">
        <div className="hero-image absolute inset-0 scale-110">
          <img
            src={heroImage}
            alt="Terrazza Il Cavallino"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/70" />
        </div>

        <div className="relative h-full flex flex-col justify-end pb-[10vh] md:pb-[15vh]">
          <div className="container-broken">
            <div className="hero-badge inline-flex items-center gap-3 bg-white/95 rounded-2xl px-4 py-2 md:px-6 md:py-3 mb-6 md:mb-10">
              <Trophy className="w-7 h-7 md:w-8 md:h-8 text-amber-600" />
              <div>
                <p className="font-bold text-stone-900 text-xs md:text-sm">N.1 TripAdvisor</p>
                <p className="text-[10px] md:text-xs text-stone-600">Vezza d'Oglio • 4.6/5</p>
              </div>
            </div>

            <h1 className="hero-title font-serif text-white leading-[0.9] mb-6 md:mb-10" style={{ fontSize: 'var(--text-4xl)' }}>
              Cucina<br />
              <span className="text-amber-400">di montagna</span>
            </h1>

            <p className="hero-subtitle text-white/90 max-w-md md:max-w-lg text-base md:text-lg mb-8 md:mb-12 leading-relaxed">
              Sapori autentici della Valle Camonica.<br className="hidden md:block" />
              Vista sull'Adamello. Tradizione familiare.
            </p>

            <div className="flex flex-wrap gap-4 md:gap-6">
              <Link
                to="/menu"
                className="hero-cta group relative overflow-hidden bg-amber-500 text-stone-900 px-6 md:px-10 py-3 md:py-4 rounded-2xl font-semibold"
              >
                <span className="relative z-10">Scopri il Menu</span>
                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
              </Link>
              <a
                href="tel:+393391513234"
                className="hero-cta flex items-center gap-2 bg-transparent text-white border border-white/40 px-6 md:px-10 py-3 md:py-4 rounded-2xl font-semibold hover:bg-white/10 transition-colors"
              >
                <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
                Prenota
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 right-8 md:right-16 hidden md:block">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="text-white/60 text-sm uppercase tracking-widest"
            style={{ writingMode: 'vertical-rl' }}
          >
            Scorri
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section ref={introRef} className="py-16 md:py-20 bg-crema">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-6 md:col-start-2 px-6 md:px-0">
            <span className="text-amber-400 text-xs uppercase tracking-[0.3em] mb-6 block">Benvenuti</span>
            <p className="intro-text font-serif text-stone-800 leading-[1.4]" style={{ fontSize: 'var(--text-xl)' }}>
              Nel cuore della frazione Tù, a 1100 metri d'altitudine,
              <span className="text-amber-700 font-semibold"> Matteo</span> vi accoglie in sala mentre
              <span className="text-amber-700 font-semibold"> Antonietta</span> prepara i casoncelli
              secondo la tradizione camuna.
            </p>
            <Link
              to="/chi-siamo"
              className="inline-flex items-center gap-3 text-stone-800 font-medium group mt-8"
            >
              <span className="link-hover">La nostra storia</span>
              <span className="w-8 h-8 rounded-full border border-gray-400 flex items-center justify-center group-hover:bg-stone-800 group-hover:text-white transition-all">
                →
              </span>
            </Link>
          </div>

          <div className="col-span-12 md:col-span-4 px-6 md:px-0">
            <img
              src={salaInterna}
              alt="Sala interna"
              className="w-full aspect-[4/5] object-cover rounded-2xl"
            />
          </div>
        </div>
      </section>

      {/* Specialità */}
      <section ref={specialitaRef} className="py-16 bg-stone-800">
        <div className="container-broken mb-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <span className="text-amber-400 text-xs uppercase tracking-[0.3em] mb-4 block">Il Menu</span>
              <h2 className="font-serif text-white leading-none" style={{ fontSize: 'var(--text-3xl)' }}>
                Le nostre<br />specialità
              </h2>
            </div>
            <Link
              to="/menu"
              className="text-white/70 hover:text-amber-400 transition-colors text-sm uppercase tracking-wider"
            >
              Vedi tutto →
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-4 px-4 md:px-0">
          <div className="specialita-item col-span-12 md:col-span-4 md:col-start-2">
            <div className="group relative overflow-hidden rounded-2xl">
              <img
                src={casoncelli}
                alt="Casoncelli"
                className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="text-amber-400 text-xs uppercase tracking-wider">Primo</span>
                <h3 className="font-serif text-white text-2xl mt-2">Casoncelli della Valle</h3>
                <p className="text-white/70 text-sm mt-2">Fatti a mano da Antonietta</p>
              </div>
            </div>
          </div>

          <div className="specialita-item col-span-6 md:col-span-4">
            <div className="group relative overflow-hidden rounded-2xl">
              <img
                src={cervo}
                alt="Gulasch di cervo"
                className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="text-amber-400 text-xs uppercase tracking-wider">Secondo</span>
                <h3 className="font-serif text-white text-xl mt-2">Cervo e Polenta</h3>
              </div>
            </div>
          </div>

          <div className="specialita-item col-span-6 md:col-span-2">
            <div className="group relative overflow-hidden rounded-2xl">
              <img
                src={pizzoccheri}
                alt="Pizzoccheri"
                className="w-full aspect-[3/4] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="font-serif text-white text-lg">Pizzoccheri</h3>
              </div>
            </div>
          </div>

          <div className="specialita-item col-span-6 md:col-span-3 md:col-start-2">
            <div className="group relative overflow-hidden rounded-2xl">
              <img
                src={gnocchetti}
                alt="Gnocchetti"
                className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="font-serif text-white text-lg">Gnocchetti Saraceno</h3>
              </div>
            </div>
          </div>

          <div className="specialita-item col-span-6 md:col-span-5">
            <div className="bg-stone-700 rounded-2xl p-8 h-full flex flex-col justify-center">
              <p className="text-white/60 text-xs uppercase tracking-wider mb-3">Info</p>
              <p className="text-white font-serif text-xl leading-relaxed">
                Il menu cambia con le stagioni. Opzioni vegetariane e senza glutine sempre disponibili.
              </p>
              <Link to="/menu" className="text-amber-400 mt-4 font-semibold hover:text-white transition-colors">
                Scopri il menu completo →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <section className="py-6 bg-amber-500 overflow-hidden">
        <div ref={marqueeRef} className="flex gap-8 md:gap-16 whitespace-nowrap">
          {[...Array(4)].map((_, i) => (
            <span key={i} className="font-serif text-stone-900 text-3xl md:text-5xl flex items-center gap-8 md:gap-16">
              <span>N.1 TripAdvisor</span>
              <span className="w-2 h-2 bg-stone-800/40 rounded-full" />
              <span>Vista Adamello</span>
              <span className="w-2 h-2 bg-stone-800/40 rounded-full" />
              <span>Dal 1100m</span>
              <span className="w-2 h-2 bg-stone-800/40 rounded-full" />
            </span>
          ))}
        </div>
      </section>

      {/* Terrazza */}
      <section ref={terrazzaRef} className="py-16 bg-crema">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-5 md:col-start-2 px-6 md:px-0 order-2 md:order-1">
            <span className="text-amber-400 text-xs uppercase tracking-[0.3em] mb-4 block">Esperienza</span>
            <h2 className="font-serif text-stone-800 leading-[1.1] mb-6" style={{ fontSize: 'var(--text-2xl)' }}>
              La Terrazza panoramica
            </h2>
            <p className="text-stone-600 leading-relaxed mb-6">
              C'è un momento, verso sera, in cui il sole tinge l'Adamello di rosa.
              È il momento perfetto per un bicchiere di vino e un piatto di casoncelli.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { icon: Mountain, label: 'Vista Adamello' },
                { icon: Sunset, label: 'Tramonti magici' },
                { icon: Flower2, label: 'Fiori alpini' },
                { icon: Sun, label: 'Aperto in estate' },
              ].map((item, i) => {
                const Icon = item.icon
                return (
                  <div key={i} className="flex items-center gap-2">
                    <Icon className="w-5 h-5 text-amber-600" />
                    <span className="text-stone-600 text-sm">{item.label}</span>
                  </div>
                )
              })}
            </div>
            <Link
              to="/terrazza"
              className="inline-flex items-center gap-3 bg-stone-700 text-white px-8 py-4 rounded-2xl font-medium hover:bg-stone-800 transition-colors"
            >
              Scopri la terrazza
              <span>→</span>
            </Link>
          </div>

          <div className="col-span-12 md:col-span-5 relative h-[50vh] md:h-[70vh] order-1 md:order-2 mb-8 md:mb-0 px-6 md:px-0">
            <div className="terrazza-img-1 absolute top-0 right-0 w-[65%]">
              <img
                src={vistaAdamello}
                alt="Vista Adamello"
                className="w-full aspect-[4/5] object-cover rounded-2xl shadow-2xl"
              />
            </div>
            <div className="terrazza-img-2 absolute bottom-0 left-0 w-[55%]">
              <img
                src={terrazzaFiori}
                alt="Terrazza con fiori"
                className="w-full aspect-square object-cover rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Territorio */}
      <section className="relative h-[70vh]">
        <img
          src={chiesetta}
          alt="Chiesetta San Clemente"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative h-full flex items-center">
          <div className="container-broken">
            <div className="max-w-2xl">
              <span className="text-amber-400 text-xs uppercase tracking-[0.3em] mb-4 block">Il Territorio</span>
              <h2 className="font-serif text-white leading-[1.1] mb-6" style={{ fontSize: 'var(--text-3xl)' }}>
                Alta Valle Camonica
              </h2>
              <p className="text-white/90 text-lg leading-relaxed mb-8 max-w-md">
                A pochi passi dalla Chiesetta di San Clemente e punto di partenza
                per la Val di Canè e il Lago Aviolo.
              </p>
              <Link
                to="/territorio"
                className="inline-flex items-center gap-3 bg-white text-stone-900 px-8 py-4 rounded-2xl font-medium hover:bg-amber-400 transition-colors"
              >
                Esplora
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Info Grid */}
      <section className="py-16 bg-crema">
        <div className="grid grid-cols-12 gap-4 px-4 md:px-0">
          <div className="col-span-12 md:col-span-4 md:col-start-2">
            <div className="bg-stone-800 rounded-2xl p-8 h-full">
              <Clock className="w-10 h-10 text-amber-400 mb-4" />
              <h3 className="font-serif text-white text-xl mb-4">Orari</h3>
              <div className="space-y-2 text-white/80 text-sm">
                <div className="flex justify-between">
                  <span>Lun-Ven</span>
                  <span>08:00-00:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Sab-Dom</span>
                  <span>07:45-00:15</span>
                </div>
              </div>
              <p className="text-white/60 text-xs mt-4">Colazione, pranzo, merenda e cena</p>
            </div>
          </div>

          <div className="col-span-6 md:col-span-4">
            <div className="bg-stone-700 rounded-2xl p-8 h-full">
              <MapPin className="w-10 h-10 text-amber-400 mb-4" />
              <h3 className="font-serif text-white text-xl mb-4">Dove siamo</h3>
              <p className="text-white/80 text-sm">Via Tù 24, Frazione Tù</p>
              <p className="text-white/80 text-sm">25059 Vezza d'Oglio (BS)</p>
              <p className="text-amber-400 text-sm mt-4">Alta Valle Camonica</p>
            </div>
          </div>

          <div className="col-span-6 md:col-span-2">
            <div className="bg-amber-500 rounded-2xl p-6 h-full flex flex-col justify-center items-center text-center">
              <ParkingCircle className="w-10 h-10 text-stone-900 mb-2" />
              <p className="text-stone-900 font-semibold text-sm">Parcheggio gratuito</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-stone-700">
        <div className="container-broken">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="lg:max-w-xl">
              <h2 className="font-serif text-white leading-[1.1] mb-4" style={{ fontSize: 'var(--text-2xl)' }}>
                Ti aspettiamo al Cavallino
              </h2>
              <p className="text-white/70 leading-relaxed">
                Per un pranzo con vista, una cena in sala o anche solo un caffè.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+393391513234"
                className="flex items-center justify-center gap-3 bg-amber-500 text-stone-900 px-10 py-5 rounded-2xl font-semibold text-lg hover:bg-white transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                339 151 3234
              </a>
              <Link
                to="/contatti"
                className="flex items-center justify-center gap-2 border border-white/40 text-white px-10 py-5 rounded-2xl font-semibold hover:bg-white/10 transition-colors"
              >
                Come arrivare
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
