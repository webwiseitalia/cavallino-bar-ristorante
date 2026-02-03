import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitType from 'split-type'
import { Trophy, ChefHat, Leaf, UtensilsCrossed, BookOpen, Mountain, Users, ScrollText } from 'lucide-react'

import salaInterna from '../assets/foto/sala-interna-camino.webp'
import esterno from '../assets/foto/esterno-ristorante-fiori.webp'
import salaAffresco from '../assets/foto/sala-affresco-montano.webp'
import casoncelli from '../assets/foto/casoncelli-fatti-mano.webp'

gsap.registerPlugin(ScrollTrigger)

export default function ChiSiamo() {
  const heroRef = useRef(null)
  const storyRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to('.hero-img-chi', {
        yPercent: 20,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1
        }
      })

      const storyText = new SplitType('.story-text', { types: 'lines' })
      gsap.fromTo(storyText.lines,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.08,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: storyRef.current,
            start: 'top 75%',
          }
        }
      )

      gsap.fromTo('.person-card',
        { y: 80, opacity: 0, rotateY: -15 },
        {
          y: 0,
          opacity: 1,
          rotateY: 0,
          stagger: 0.3,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.people-section',
            start: 'top 70%',
          }
        }
      )

      gsap.fromTo('.ambiente-img',
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          stagger: 0.15,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.ambienti-section',
            start: 'top 70%',
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
        <div className="hero-img-chi absolute inset-0 scale-110">
          <img
            src={salaInterna}
            alt="Sala interna Il Cavallino"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
        </div>

        <div className="relative h-full flex items-end pb-16 md:pb-24">
          <div className="container-broken">
            <span className="text-amber-400 text-xs uppercase tracking-[0.3em] mb-4 block">La nostra storia</span>
            <h1 className="font-serif text-white leading-[0.9]" style={{ fontSize: 'var(--text-4xl)' }}>
              Chi<br />
              <span className="text-amber-400">siamo</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Story */}
      <section ref={storyRef} className="py-16 md:py-20 bg-crema">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-7 md:col-start-2 lg:col-span-5 lg:col-start-2 px-6 md:px-0">
            <p className="story-text font-serif text-stone-900 leading-[1.5]" style={{ fontSize: 'var(--text-lg)' }}>
              Il Cavallino nasce dal sogno di creare un luogo dove la tradizione culinaria
              della Valle Camonica potesse incontrare l'ospitalità genuina di una volta.
            </p>
            <p className="story-text font-serif text-stone-700 leading-[1.5] mt-6" style={{ fontSize: 'var(--text-lg)' }}>
              Situato nella pittoresca frazione di Tù, a Vezza d'Oglio, quello che era
              iniziato come un piccolo bar di paese si è trasformato nel ristorante
              <span className="text-amber-600 font-bold"> N.1 su TripAdvisor</span> della zona.
            </p>
          </div>

          <div className="col-span-10 col-start-2 md:col-span-4 md:col-start-9 lg:col-span-4 lg:col-start-8 mt-12 md:mt-0">
            <div className="relative">
              <img
                src={esterno}
                alt="Esterno ristorante"
                className="w-full aspect-[4/5] object-cover rounded-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-stone-800 text-white p-6 rounded-2xl hidden md:block">
                <Trophy className="w-10 h-10 text-amber-400" />
                <p className="text-sm mt-2">N.1 TripAdvisor</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Matteo e Antonietta */}
      <section className="people-section py-16 bg-stone-800 relative noise">
        <div className="container-broken mb-16 relative z-10">
          <span className="text-amber-400/60 text-xs uppercase tracking-[0.3em] mb-4 block">I protagonisti</span>
          <h2 className="font-serif text-white leading-none" style={{ fontSize: 'var(--text-3xl)' }}>
            Matteo &<br />Antonietta
          </h2>
        </div>

        <div className="relative z-10 grid grid-cols-12 gap-6 md:gap-8 px-6 md:px-0">
          <div className="person-card col-span-12 md:col-span-5 md:col-start-2">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 h-full">
              <div className="w-20 h-20 bg-amber-500/30 rounded-2xl flex items-center justify-center mb-8">
                <ChefHat className="w-10 h-10 text-amber-400" />
              </div>
              <h3 className="font-serif text-white text-3xl md:text-4xl mb-6">Matteo</h3>
              <p className="text-white/80 leading-relaxed mb-4">
                L'anima dell'accoglienza al Cavallino. Con il suo sorriso contagioso
                e la profonda conoscenza dei vini, accompagna ogni ospite in un viaggio
                attraverso i sapori della Valle Camonica.
              </p>
              <p className="text-white/80 leading-relaxed">
                Prepara la <span className="text-amber-400 font-semibold">carne salada</span> con le proprie mani,
                secondo la ricetta di famiglia tramandata da generazioni.
              </p>
            </div>
          </div>

          <div className="person-card col-span-12 md:col-span-5 md:col-start-7 md:mt-24">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 h-full">
              <div className="w-20 h-20 bg-amber-500/30 rounded-2xl flex items-center justify-center mb-8">
                <ChefHat className="w-10 h-10 text-amber-400" />
              </div>
              <h3 className="font-serif text-white text-3xl md:text-4xl mb-6">Antonietta</h3>
              <p className="text-white/80 leading-relaxed mb-4">
                In cucina regna Antonietta, custode delle ricette tramandate e artefice
                dei piatti che hanno reso celebre Il Cavallino.
              </p>
              <p className="text-white/80 leading-relaxed">
                I suoi <span className="text-amber-400 font-semibold">casoncelli fatti a mano</span>, preparati ogni giorno
                con pazienza e dedizione, sono diventati leggendari in tutta la valle.
              </p>
            </div>
          </div>
        </div>

        <div className="container-narrow mt-20 relative z-10">
          <img
            src={casoncelli}
            alt="Casoncelli fatti a mano"
            className="w-full aspect-[21/9] object-cover rounded-2xl"
          />
        </div>
      </section>

      {/* Filosofia */}
      <section className="py-16 md:py-20 bg-crema">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-6 md:col-start-2 px-6 md:px-0">
            <span className="text-amber-600 text-xs uppercase tracking-[0.3em] mb-4 block">Filosofia</span>
            <h2 className="font-serif text-stone-900 leading-[1.1] mb-8" style={{ fontSize: 'var(--text-2xl)' }}>
              Semplicità e<br />autenticità
            </h2>
          </div>

          <div className="col-span-12 md:col-span-5 md:col-start-2 lg:col-span-4 px-6 md:px-0">
            <div className="space-y-8">
              {[
                { icon: Leaf, title: 'Ingredienti Locali', desc: 'Miele, ricotta, formaggi e carni dal nostro territorio' },
                { icon: UtensilsCrossed, title: 'Pasta Fatta in Casa', desc: 'Casoncelli, cappelletti e gnocchi preparati ogni giorno' },
                { icon: BookOpen, title: 'Ricette di Famiglia', desc: 'Tradizioni tramandate di generazione in generazione' },
              ].map((item, i) => {
                const Icon = item.icon
                return (
                  <div key={i} className="flex gap-5">
                    <div className="w-14 h-14 bg-stone-700/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-amber-600" />
                    </div>
                    <div>
                      <h4 className="font-serif text-stone-900 font-bold text-lg">{item.title}</h4>
                      <p className="text-stone-600 text-sm mt-1">{item.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="col-span-10 col-start-2 md:col-span-5 md:col-start-7 mt-8 md:mt-0">
            <blockquote className="font-serif text-stone-700 italic leading-relaxed" style={{ fontSize: 'var(--text-lg)' }}>
              "Non cerchiamo di stupire con elaborazioni complesse, ma di emozionare
              con i sapori autentici che questa terra sa offrire."
            </blockquote>
            <p className="text-amber-600 font-semibold mt-6">— Matteo e Antonietta</p>
          </div>
        </div>
      </section>

      {/* Ambienti */}
      <section className="ambienti-section py-16 bg-white">
        <div className="container-broken mb-12">
          <span className="text-amber-600 text-xs uppercase tracking-[0.3em] mb-4 block">Gli spazi</span>
          <h2 className="font-serif text-stone-900 leading-none" style={{ fontSize: 'var(--text-2xl)' }}>
            I nostri ambienti
          </h2>
        </div>

        <div className="grid grid-cols-12 gap-4 px-4 md:px-0">
          <div className="ambiente-img col-span-12 md:col-span-6 md:col-start-2">
            <div className="relative group overflow-hidden rounded-2xl">
              <img
                src={salaInterna}
                alt="Sala con camino"
                className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
                <h3 className="font-serif text-white text-xl">Sala con Camino</h3>
                <p className="text-white/70 text-sm">Perfetta per le sere d'inverno</p>
              </div>
            </div>
          </div>

          <div className="ambiente-img col-span-12 md:col-span-4 md:col-start-8 md:mt-16">
            <div className="relative group overflow-hidden rounded-2xl">
              <img
                src={salaAffresco}
                alt="Sala affresco"
                className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
                <h3 className="font-serif text-white text-xl">Sala Affresco</h3>
                <p className="text-white/70 text-sm">Ambiente intimo e raccolto</p>
              </div>
            </div>
          </div>

          <div className="ambiente-img col-span-10 col-start-2 md:col-span-5 md:col-start-4 md:-mt-12">
            <div className="relative group overflow-hidden rounded-2xl">
              <img
                src={esterno}
                alt="Terrazza esterna"
                className="w-full aspect-[16/9] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
                <h3 className="font-serif text-white text-xl">Terrazza Panoramica</h3>
                <p className="text-white/70 text-sm">Vista mozzafiato sull'Adamello</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Valori */}
      <section className="py-16 bg-stone-700 relative noise">
        <div className="container-broken relative z-10">
          <div className="text-center mb-12">
            <span className="text-amber-400/60 text-xs uppercase tracking-[0.3em] mb-4 block">I nostri valori</span>
            <h2 className="font-serif text-white" style={{ fontSize: 'var(--text-2xl)' }}>
              Cosa ci rende speciali
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Mountain, title: 'Territorio', desc: 'Ingredienti a km zero dalla Valle Camonica, formaggi d\'alpeggio, carni selezionate dai migliori allevatori locali.' },
              { icon: Users, title: 'Famiglia', desc: 'Una gestione familiare che da sempre mette al centro l\'ospite, facendolo sentire come a casa propria.' },
              { icon: ScrollText, title: 'Tradizione', desc: 'Ricette tramandate di generazione in generazione, preparate con tecniche e ingredienti autentici.' },
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
      <section className="py-12 bg-amber-500">
        <div className="container-broken">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="flex items-center gap-6">
              <Trophy className="w-16 h-16 text-stone-900" />
              <div>
                <p className="font-serif text-stone-900 text-2xl md:text-3xl font-bold">N.1 su TripAdvisor</p>
                <p className="text-stone-800">Vezza d'Oglio • 4.6/5 • 291 recensioni</p>
              </div>
            </div>
            <a
              href="tel:+393391513234"
              className="inline-flex items-center justify-center gap-3 bg-stone-800 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-stone-700 transition-colors"
            >
              Prenota ora
              <span>→</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
