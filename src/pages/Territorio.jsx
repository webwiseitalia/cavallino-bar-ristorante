import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitType from 'split-type'
import { Mountain, Church, Flower2, Sun, Snowflake, Leaf } from 'lucide-react'

import chiesetta from '../assets/foto/chiesetta-san-clemente-tramonto.webp'
import panoramaValle from '../assets/foto/panorama-valle-camonica-estate.webp'
import vistaAdamello from '../assets/foto/vista-adamello-neve.webp'
import panoramaVezza from '../assets/foto/panorama-vezza-oglio.webp'

gsap.registerPlugin(ScrollTrigger)

export default function Territorio() {
  const heroRef = useRef(null)
  const statsRef = useRef(null)

  const escursioni = [
    { nome: 'Val di Canè', diff: 'Facile/Media', tempo: '2-4h', color: 'bg-yellow-500' },
    { nome: 'Lago Aviolo', diff: 'Facile', tempo: '1.5h', color: 'bg-green-500' },
    { nome: 'Rifugio Garibaldi', diff: 'Media', tempo: '4-5h', color: 'bg-orange-500' },
    { nome: 'Passo Tonale', diff: 'Auto', tempo: '30min', color: 'bg-blue-500' },
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to('.terr-hero-img', {
        yPercent: 25,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1
        }
      })

      const statNumbers = document.querySelectorAll('.stat-number')
      statNumbers.forEach(el => {
        const target = parseInt(el.dataset.target)
        gsap.fromTo(el,
          { innerText: 0 },
          {
            innerText: target,
            duration: 2,
            ease: 'power2.out',
            snap: { innerText: 1 },
            scrollTrigger: {
              trigger: statsRef.current,
              start: 'top 80%',
            }
          }
        )
      })

      gsap.fromTo('.escursione-card',
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.escursioni-section',
            start: 'top 75%',
          }
        }
      )
    })

    return () => ctx.revert()
  }, [])

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section ref={heroRef} className="relative h-[80vh] md:h-screen overflow-hidden">
        <div className="terr-hero-img absolute inset-0 scale-110">
          <img
            src={chiesetta}
            alt="Chiesetta San Clemente"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        </div>

        <div className="relative h-full flex items-end pb-16 md:pb-24">
          <div className="container-broken">
            <span className="text-amber-400 text-xs uppercase tracking-[0.3em] mb-4 block">Alta Valle Camonica</span>
            <h1 className="font-serif text-white leading-[0.85]" style={{ fontSize: 'var(--text-4xl)' }}>
              Il<br />Territorio
            </h1>
          </div>
        </div>
      </section>

      {/* Vezza d'Oglio */}
      <section className="py-16 md:py-20 bg-crema">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-6 md:col-start-2 px-6 md:px-0">
            <span className="text-amber-600 text-xs uppercase tracking-[0.3em] mb-4 block">Il paese</span>
            <h2 className="font-serif text-stone-900 leading-[1.1] mb-6" style={{ fontSize: 'var(--text-2xl)' }}>
              Vezza<br />d'Oglio
            </h2>
            <p className="text-stone-700 leading-relaxed mb-6">
              Situato a circa 1080 metri di altitudine, Vezza d'Oglio è un pittoresco
              comune dell'Alta Valle Camonica, circondato dalle maestose vette dell'Adamello.
            </p>
            <p className="text-stone-700 leading-relaxed">
              La storia di questo territorio affonda le radici nell'epoca dei Camuni,
              l'antico popolo che ha lasciato tracce indelebili in tutta la valle.
            </p>
          </div>

          <div className="col-span-10 col-start-2 md:col-span-4 md:col-start-9 mt-8 md:mt-0">
            <img
              src={panoramaVezza}
              alt="Panorama Vezza"
              className="w-full aspect-[4/5] object-cover rounded-2xl"
            />
          </div>
        </div>
      </section>

      {/* Frazione Tù */}
      <section className="py-12 bg-stone-700">
        <div className="container-broken">
          <div className="text-center mb-10">
            <span className="text-amber-400/60 text-xs uppercase tracking-[0.3em] mb-4 block">La frazione</span>
            <h2 className="font-serif text-white" style={{ fontSize: 'var(--text-2xl)' }}>
              Tù - il nostro borgo
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 md:gap-16">
            <div className="bg-white/10 rounded-2xl p-8">
              <Mountain className="w-10 h-10 text-amber-400 mb-4" />
              <h3 className="font-serif text-white text-xl mb-4">Posizione Privilegiata</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                A circa 1100 metri, la frazione Tù domina la valle con viste
                spettacolari sull'Adamello e sul Monte Baitone.
              </p>
            </div>
            <div className="bg-white/10 rounded-2xl p-8">
              <Church className="w-10 h-10 text-amber-400 mb-4" />
              <h3 className="font-serif text-white text-xl mb-4">Chiesetta San Clemente</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                A pochi passi dal ristorante, la suggestiva chiesetta risalente
                al XII secolo è uno dei gioielli architettonici della valle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section ref={statsRef} className="py-16 bg-stone-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <img src={vistaAdamello} alt="" className="w-full h-full object-cover" />
        </div>

        <div className="container-broken relative z-10">
          <div className="text-center mb-16">
            <span className="text-amber-400/60 text-xs uppercase tracking-[0.3em] mb-4 block">Parco Adamello</span>
            <h2 className="font-serif text-white" style={{ fontSize: 'var(--text-2xl)' }}>
              Area protetta
            </h2>
          </div>

          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <p className="font-serif text-white text-5xl md:text-7xl font-bold">
                <span className="stat-number" data-target="3539">0</span>
                <span className="text-amber-400 text-2xl md:text-3xl">m</span>
              </p>
              <p className="text-white/50 text-sm mt-2">Monte Adamello</p>
            </div>
            <div>
              <p className="font-serif text-white text-5xl md:text-7xl font-bold">
                <span className="stat-number" data-target="51">0</span>
                <span className="text-amber-400 text-2xl md:text-3xl">k</span>
              </p>
              <p className="text-white/50 text-sm mt-2">Ettari di parco</p>
            </div>
            <div>
              <p className="font-serif text-white text-5xl md:text-7xl font-bold">
                <span className="stat-number" data-target="80">0</span>
                <span className="text-amber-400 text-2xl md:text-3xl">+</span>
              </p>
              <p className="text-white/50 text-sm mt-2">Laghi alpini</p>
            </div>
          </div>
        </div>
      </section>

      {/* Escursioni */}
      <section className="escursioni-section py-16 bg-crema">
        <div className="container-broken mb-12">
          <span className="text-amber-600 text-xs uppercase tracking-[0.3em] mb-4 block">Per gli amanti della natura</span>
          <h2 className="font-serif text-stone-900" style={{ fontSize: 'var(--text-2xl)' }}>
            Escursioni
          </h2>
        </div>

        <div className="grid grid-cols-12 gap-4 px-4 md:px-0">
          {escursioni.map((esc, i) => (
            <div
              key={i}
              className={`escursione-card col-span-12 md:col-span-5 ${i % 2 === 0 ? 'md:col-start-2' : ''}`}
            >
              <div className="bg-white rounded-2xl p-6 flex items-center gap-6">
                <div className={`w-3 h-16 ${esc.color} rounded-full`} />
                <div className="flex-grow">
                  <h3 className="font-serif text-stone-900 text-xl">{esc.nome}</h3>
                  <p className="text-stone-500 text-sm">{esc.diff}</p>
                </div>
                <div className="text-right">
                  <p className="text-stone-900 font-bold">{esc.tempo}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="container-narrow mt-12">
          <p className="text-center text-stone-600 text-sm italic">
            Fermatevi a pranzo da noi dopo l'escursione. I casoncelli di Antonietta
            sono la ricompensa perfetta dopo una camminata in montagna.
          </p>
        </div>
      </section>

      {/* Nelle Vicinanze */}
      <section className="py-16 bg-white">
        <div className="container-broken mb-12">
          <h2 className="font-serif text-stone-900" style={{ fontSize: 'var(--text-2xl)' }}>
            Nelle vicinanze
          </h2>
        </div>

        <div className="container-broken">
          <div className="space-y-3">
            {[
              { luogo: 'Ponte di Legno', km: '9', desc: 'Centro turistico' },
              { luogo: 'Edolo', km: '9', desc: 'Capoluogo valle' },
              { luogo: 'Passo Tonale', km: '20', desc: 'Comprensorio sci' },
              { luogo: 'Passo Gavia', km: '25', desc: 'Passo alpino' },
              { luogo: 'Passo Mortirolo', km: '30', desc: 'Giro d\'Italia' },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between py-4 border-b border-stone-200">
                <div>
                  <h4 className="font-serif text-stone-900 text-lg">{item.luogo}</h4>
                  <p className="text-stone-500 text-sm">{item.desc}</p>
                </div>
                <span className="text-amber-600 font-bold">{item.km} km</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stagioni */}
      <section className="py-16 bg-crema">
        <div className="container-broken mb-12">
          <h2 className="font-serif text-stone-900 text-center" style={{ fontSize: 'var(--text-2xl)' }}>
            In ogni stagione
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-4 md:px-8">
          {[
            { icon: Flower2, nome: 'Primavera', desc: 'Prati fioriti' },
            { icon: Sun, nome: 'Estate', desc: 'Escursioni' },
            { icon: Leaf, nome: 'Autunno', desc: 'Larici dorati' },
            { icon: Snowflake, nome: 'Inverno', desc: 'Sci e relax' },
          ].map((item, i) => {
            const Icon = item.icon
            return (
              <div key={i} className="bg-white rounded-2xl p-6 text-center">
                <Icon className="w-10 h-10 text-amber-600 mx-auto mb-3" />
                <h4 className="font-serif text-stone-900 font-bold">{item.nome}</h4>
                <p className="text-stone-500 text-sm mt-1">{item.desc}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-stone-800">
        <div className="container-broken">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h3 className="font-serif text-white text-2xl">Vieni a scoprire il territorio</h3>
              <p className="text-white/60 mt-1">Ti aspettiamo al Cavallino</p>
            </div>
            <div className="flex gap-4">
              <Link
                to="/contatti"
                className="bg-amber-500 text-stone-900 px-8 py-4 rounded-2xl font-semibold hover:bg-crema transition-colors"
              >
                Come arrivare
              </Link>
              <Link
                to="/menu"
                className="border border-white/40 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white/10 transition-colors"
              >
                Vedi menu
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
