import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Mountain, Sunset, Flower2, Sun, Sunrise, Leaf, Wine, UtensilsCrossed, Moon } from 'lucide-react'

import terrazzaTavolo from '../assets/foto/terrazza-tavolo-vista-adamello.webp'
import terrazzaFiori from '../assets/foto/terrazza-fiori-montagne.webp'
import vistaAdamello from '../assets/foto/vista-adamello-estate.webp'
import vistaMontagne from '../assets/foto/vista-montagne-terrazza.webp'
import fioriGerani from '../assets/foto/fiori-gerani-vista-adamello.webp'
import montagneCielo from '../assets/foto/montagne-cielo-nuvole.webp'

gsap.registerPlugin(ScrollTrigger)

export default function Terrazza() {
  const heroRef = useRef(null)
  const galleriaRef = useRef(null)

  const immagini = [
    { src: terrazzaTavolo, alt: 'Tavolo in terrazza' },
    { src: vistaAdamello, alt: 'Vista Adamello' },
    { src: terrazzaFiori, alt: 'Terrazza con fiori' },
    { src: vistaMontagne, alt: 'Vista montagne' },
    { src: fioriGerani, alt: 'Gerani' },
    { src: montagneCielo, alt: 'Cielo e montagne' },
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to('.terrazza-hero-img', {
        yPercent: 30,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1
        }
      })

      gsap.fromTo('.gallery-item',
        { y: 100, opacity: 0, rotation: gsap.utils.random(-5, 5) },
        {
          y: 0,
          opacity: 1,
          rotation: 0,
          stagger: {
            each: 0.1,
            from: 'random'
          },
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: galleriaRef.current,
            start: 'top 80%',
          }
        }
      )

      gsap.to('.parallax-slow', {
        y: -80,
        ease: 'none',
        scrollTrigger: {
          trigger: '.parallax-section',
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1
        }
      })

      gsap.to('.parallax-fast', {
        y: 60,
        ease: 'none',
        scrollTrigger: {
          trigger: '.parallax-section',
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1
        }
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section ref={heroRef} className="relative h-screen overflow-hidden">
        <div className="terrazza-hero-img absolute inset-0 scale-110">
          <img
            src={terrazzaTavolo}
            alt="Terrazza Il Cavallino"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/70" />
        </div>

        <div className="relative h-full flex items-end pb-16 md:pb-24">
          <div className="container-broken">
            <span className="text-amber-400 text-xs uppercase tracking-[0.3em] mb-4 block">Un'esperienza unica</span>
            <h1 className="font-serif text-white leading-[0.85]" style={{ fontSize: 'var(--text-4xl)' }}>
              La<br />Terrazza
            </h1>
          </div>
        </div>

        <div className="absolute bottom-24 right-8 md:right-16 text-right hidden md:block">
          <p className="font-serif text-white text-6xl font-bold">1100m</p>
          <p className="text-white/60 text-sm">s.l.m.</p>
        </div>
      </section>

      {/* Quote */}
      <section className="py-16 bg-stone-800">
        <div className="container-narrow">
          <blockquote className="font-serif text-white italic leading-[1.4] text-center" style={{ fontSize: 'var(--text-xl)' }}>
            "C'è un momento, verso sera, in cui il sole tinge l'Adamello di rosa.
            È il momento perfetto per un bicchiere di vino e un piatto di casoncelli."
          </blockquote>
          <p className="text-amber-400 text-center mt-6">— I nostri ospiti</p>
        </div>
      </section>

      {/* Parallax Images */}
      <section className="parallax-section py-20 bg-crema relative overflow-hidden">
        <div className="grid grid-cols-12 gap-4 min-h-[80vh]">
          <div className="col-span-10 col-start-2 md:col-span-5 md:col-start-2 relative z-10">
            <span className="text-amber-600 text-xs uppercase tracking-[0.3em] mb-4 block">Vista</span>
            <h2 className="font-serif text-stone-900 leading-[1.1] mb-6" style={{ fontSize: 'var(--text-2xl)' }}>
              Panorama<br />sull'Adamello
            </h2>
            <p className="text-stone-700 leading-relaxed mb-8 max-w-md">
              La nostra terrazza offre una vista che spazia dal maestoso Adamello
              fino alle vette del Monte Baitone. Un luogo dove il tempo si ferma.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-12">
              {[
                { icon: Mountain, label: 'Vista Adamello' },
                { icon: Sunset, label: 'Tramonti magici' },
                { icon: Flower2, label: 'Fiori alpini' },
                { icon: Sun, label: 'Aperto in estate' },
              ].map((item, i) => {
                const Icon = item.icon
                return (
                  <div key={i} className="flex items-center gap-3">
                    <Icon className="w-6 h-6 text-amber-600" />
                    <span className="text-stone-700 text-sm">{item.label}</span>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="col-span-12 md:col-span-6 md:col-start-7 relative h-[60vh] md:h-auto">
            <div className="parallax-slow absolute top-0 right-0 md:right-[5%] w-[65%] md:w-[70%]">
              <img
                src={vistaAdamello}
                alt="Vista Adamello"
                className="w-full aspect-[3/4] object-cover rounded-2xl shadow-2xl"
              />
            </div>
            <div className="parallax-fast absolute bottom-0 left-[5%] md:left-0 w-[55%] md:w-[50%]">
              <img
                src={terrazzaFiori}
                alt="Terrazza con fiori"
                className="w-full aspect-square object-cover rounded-2xl md:rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section ref={galleriaRef} className="py-16 bg-white">
        <div className="container-broken mb-12">
          <span className="text-amber-600 text-xs uppercase tracking-[0.3em] mb-4 block">Galleria</span>
          <h2 className="font-serif text-stone-900" style={{ fontSize: 'var(--text-2xl)' }}>
            Scorci dalla terrazza
          </h2>
        </div>

        <div className="grid grid-cols-12 gap-3 md:gap-4 px-4 md:px-0">
          {immagini.map((img, i) => (
            <div
              key={i}
              className={`gallery-item overflow-hidden rounded-xl md:rounded-2xl ${
                i === 0 ? 'col-span-8 md:col-span-6 md:col-start-2 row-span-2' :
                i === 1 ? 'col-span-4 md:col-span-4' :
                i === 2 ? 'col-span-6 md:col-span-4' :
                i === 3 ? 'col-span-6 md:col-span-3 md:col-start-2' :
                i === 4 ? 'col-span-6 md:col-span-4' :
                'col-span-6 md:col-span-4'
              }`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className={`w-full object-cover transition-transform duration-700 hover:scale-105 ${
                  i === 0 ? 'aspect-[3/4]' : 'aspect-square'
                }`}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Info */}
      <section className="py-16 bg-crema">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-5 md:col-start-2 px-6 md:px-0">
            <h3 className="font-serif text-stone-900 text-2xl mb-6">Quando venire</h3>
            <div className="space-y-6">
              {[
                { icon: Sun, title: 'Pranzo Estivo', desc: 'Sole e brezza di montagna' },
                { icon: Sunrise, title: 'Aperitivo al Tramonto', desc: 'Il momento magico delle Alpi' },
                { icon: Leaf, title: 'Autunno Dorato', desc: 'I larici si tingono d\'oro' },
              ].map((item, i) => {
                const Icon = item.icon
                return (
                  <div key={i} className="flex gap-4">
                    <Icon className="w-8 h-8 text-amber-600 flex-shrink-0" />
                    <div>
                      <h4 className="font-serif text-stone-900 font-bold">{item.title}</h4>
                      <p className="text-stone-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="col-span-12 md:col-span-4 md:col-start-8 px-6 md:px-0">
            <div className="bg-stone-800 rounded-2xl p-8">
              <h3 className="font-serif text-white text-xl mb-6">Informazioni</h3>
              <div className="space-y-4 text-sm">
                <div className="flex justify-between">
                  <span className="text-white/60">Posti</span>
                  <span className="text-white">~30 coperti</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/60">Periodo</span>
                  <span className="text-white">Aprile - Ottobre</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/60">Prenotazione</span>
                  <span className="text-white">Consigliata</span>
                </div>
              </div>
              <p className="text-white/50 text-xs mt-6 italic">
                In caso di maltempo, vi accogliamo nelle nostre sale interne.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Esperienze */}
      <section className="py-16 bg-stone-700 relative noise">
        <div className="container-broken relative z-10">
          <div className="text-center mb-12">
            <span className="text-amber-400/60 text-xs uppercase tracking-[0.3em] mb-4 block">Momenti speciali</span>
            <h2 className="font-serif text-white" style={{ fontSize: 'var(--text-2xl)' }}>
              Esperienze in terrazza
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Wine, title: 'Aperitivo al tramonto', desc: 'Un calice di Franciacorta mentre il sole tinge l\'Adamello di rosa.' },
              { icon: UtensilsCrossed, title: 'Pranzo con vista', desc: 'I sapori della tradizione con lo spettacolo delle montagne.' },
              { icon: Moon, title: 'Cena romantica', desc: 'Sotto le stelle, con le luci delle vette illuminate dalla luna.' },
            ].map((item, i) => {
              const Icon = item.icon
              return (
                <div key={i} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
                  <Icon className="w-12 h-12 text-amber-400 mx-auto mb-4" />
                  <h3 className="font-serif text-white text-xl mb-3">{item.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">{item.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-16">
        <img
          src={montagneCielo}
          alt="Montagne e cielo"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative container-broken text-center">
          <h2 className="font-serif text-white mb-6" style={{ fontSize: 'var(--text-2xl)' }}>
            Prenota il tuo<br />posto con vista
          </h2>
          <p className="text-white/70 mb-8 max-w-md mx-auto">
            I tavoli in terrazza sono molto richiesti nei weekend.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+393391513234"
              className="inline-flex items-center gap-3 bg-amber-500 text-stone-900 px-8 py-4 rounded-2xl font-semibold hover:bg-crema transition-colors"
            >
              339 151 3234
            </a>
            <Link
              to="/contatti"
              className="inline-flex items-center gap-2 border border-white/50 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white/10 transition-colors"
            >
              Come arrivare
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
