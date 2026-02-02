import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Import tutte le immagini
import chiesetta from '../assets/foto/chiesetta-san-clemente-tramonto.webp'
import vistaAdamelloNeve from '../assets/foto/vista-adamello-neve.webp'
import panoramaValle from '../assets/foto/panorama-valle-camonica-estate.webp'
import vistaMontagne from '../assets/foto/vista-montagne-terrazza.webp'
import terrazzaTavolo from '../assets/foto/terrazza-tavolo-vista-adamello.webp'
import montagneCielo from '../assets/foto/montagne-cielo-nuvole.webp'
import cervo from '../assets/foto/cervo-polenta-piatto.webp'
import vino from '../assets/foto/vino-rosso-barbera.webp'
import zuppa from '../assets/foto/zuppa-formaggio-terracotta.webp'
import carneSalada from '../assets/foto/carne-salada-piatto.webp'
import gnocchetti from '../assets/foto/gnocchetti-saraceno-formaggio.webp'
import panoramaVezza from '../assets/foto/panorama-vezza-oglio.webp'
import casoncelli from '../assets/foto/casoncelli-fatti-mano.webp'
import terrazzaFiori from '../assets/foto/terrazza-fiori-montagne.webp'
import vistaAdamello from '../assets/foto/vista-adamello-estate.webp'
import pizzoccheri from '../assets/foto/pizzoccheri-valtellinesi.webp'
import gulasch from '../assets/foto/gulasch-cervo-polenta.webp'
import salaInterna from '../assets/foto/sala-interna-camino.webp'
import esterno from '../assets/foto/esterno-ristorante-fiori.webp'
import salaElegante from '../assets/foto/sala-elegante-lampadario.webp'
import salaAffresco from '../assets/foto/sala-affresco-montano.webp'
import fioriGerani from '../assets/foto/fiori-gerani-vista-adamello.webp'

gsap.registerPlugin(ScrollTrigger)

export default function Galleria() {
  const [filter, setFilter] = useState('tutti')
  const [selectedImage, setSelectedImage] = useState(null)
  const heroRef = useRef(null)
  const gridRef = useRef(null)

  const immagini = [
    // Territorio e Paesaggi
    { src: chiesetta, alt: 'Chiesetta San Clemente al tramonto', categoria: 'territorio' },
    { src: vistaAdamelloNeve, alt: 'Vista Adamello innevato', categoria: 'territorio' },
    { src: panoramaValle, alt: 'Panorama Valle Camonica in estate', categoria: 'territorio' },
    { src: vistaMontagne, alt: 'Vista montagne dalla terrazza', categoria: 'territorio' },
    { src: montagneCielo, alt: 'Montagne con cielo drammatico', categoria: 'territorio' },
    { src: panoramaVezza, alt: 'Panorama di Vezza d\'Oglio', categoria: 'territorio' },
    { src: vistaAdamello, alt: 'Vista Adamello in estate', categoria: 'territorio' },
    { src: fioriGerani, alt: 'Gerani con vista Adamello', categoria: 'territorio' },

    // Terrazza e Locale
    { src: terrazzaTavolo, alt: 'Tavolo in terrazza con vista', categoria: 'locale' },
    { src: terrazzaFiori, alt: 'Terrazza con fiori', categoria: 'locale' },
    { src: salaInterna, alt: 'Sala interna con camino', categoria: 'locale' },
    { src: esterno, alt: 'Esterno del ristorante', categoria: 'locale' },
    { src: salaElegante, alt: 'Sala con lampadario', categoria: 'locale' },
    { src: salaAffresco, alt: 'Sala con affresco montano', categoria: 'locale' },

    // Piatti
    { src: casoncelli, alt: 'Casoncelli fatti a mano', categoria: 'piatti' },
    { src: cervo, alt: 'Cervo con polenta', categoria: 'piatti' },
    { src: gulasch, alt: 'Gulasch di cervo con polenta', categoria: 'piatti' },
    { src: gnocchetti, alt: 'Gnocchetti di grano saraceno', categoria: 'piatti' },
    { src: pizzoccheri, alt: 'Pizzoccheri valtellinesi', categoria: 'piatti' },
    { src: carneSalada, alt: 'Carne salada', categoria: 'piatti' },
    { src: zuppa, alt: 'Zuppa in terracotta', categoria: 'piatti' },
    { src: vino, alt: 'Vino rosso Barbera', categoria: 'piatti' },
  ]

  const filteredImages = filter === 'tutti'
    ? immagini
    : immagini.filter(img => img.categoria === filter)

  const categorie = [
    { id: 'tutti', label: 'Tutti' },
    { id: 'piatti', label: 'I Piatti' },
    { id: 'locale', label: 'Il Locale' },
    { id: 'territorio', label: 'Il Territorio' },
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to('.gallery-hero-img', {
        yPercent: 30,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1
        }
      })
    })

    return () => ctx.revert()
  }, [])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.gallery-item',
        { y: 80, opacity: 0, rotation: gsap.utils.random(-3, 3) },
        {
          y: 0,
          opacity: 1,
          rotation: 0,
          stagger: {
            each: 0.05,
            from: 'random'
          },
          duration: 0.7,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: gridRef.current,
            start: 'top 85%',
          }
        }
      )
    })

    return () => ctx.revert()
  }, [filter])

  // Grid layout patterns - creating visual asymmetry
  const getGridClass = (index) => {
    const patterns = [
      'col-span-6 md:col-span-4 row-span-1',
      'col-span-6 md:col-span-5 row-span-2',
      'col-span-6 md:col-span-3 row-span-1',
      'col-span-6 md:col-span-4 row-span-1',
      'col-span-12 md:col-span-6 row-span-1',
      'col-span-6 md:col-span-3 row-span-1',
      'col-span-6 md:col-span-5 row-span-2',
      'col-span-6 md:col-span-4 row-span-1',
    ]
    return patterns[index % patterns.length]
  }

  const getAspectClass = (index) => {
    const aspects = [
      'aspect-square',
      'aspect-[3/4]',
      'aspect-[4/3]',
      'aspect-square',
      'aspect-[16/9]',
      'aspect-[4/5]',
      'aspect-[3/4]',
      'aspect-square',
    ]
    return aspects[index % aspects.length]
  }

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section ref={heroRef} className="relative h-[70vh] md:h-[80vh] overflow-hidden">
        <div className="gallery-hero-img absolute inset-0 scale-110">
          <img
            src={terrazzaTavolo}
            alt="Galleria fotografica Il Cavallino"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80" />
        </div>

        <div className="relative h-full flex items-end pb-16 md:pb-24">
          <div className="container-broken">
            <span className="text-amber-400 text-xs uppercase tracking-[0.3em] mb-4 block">Momenti catturati</span>
            <h1 className="font-serif text-white leading-[0.85]" style={{ fontSize: 'var(--text-4xl)' }}>
              La<br />Galleria
            </h1>
          </div>
        </div>

        <div className="absolute bottom-16 right-8 md:right-16 hidden md:block">
          <p className="font-serif text-white text-6xl font-bold">{immagini.length}</p>
          <p className="text-white/60 text-sm text-right">foto</p>
        </div>
      </section>

      {/* Filtri */}
      <section className="py-8 md:py-12 bg-crema sticky top-20 z-40">
        <div className="container-broken">
          <div className="flex flex-wrap gap-3 md:gap-4">
            {categorie.map((cat) => (
              <motion.button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  filter === cat.id
                    ? 'bg-stone-800 text-white'
                    : 'bg-transparent text-stone-900 border border-stone-400 hover:border-stone-900'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {cat.label}
                <span className="ml-2 text-sm opacity-60">
                  ({cat.id === 'tutti' ? immagini.length : immagini.filter(i => i.categoria === cat.id).length})
                </span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Griglia Asimmetrica */}
      <section ref={gridRef} className="py-12 bg-crema">
        <div className="grid grid-cols-12 gap-3 md:gap-4 px-4 md:px-8">
          <AnimatePresence mode="popLayout">
            {filteredImages.map((img, index) => (
              <motion.div
                key={img.src}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className={`gallery-item ${getGridClass(index)} overflow-hidden rounded-xl md:rounded-2xl cursor-pointer group`}
                onClick={() => setSelectedImage(img)}
              >
                <div className={`relative w-full h-full ${getAspectClass(index)}`}>
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-white text-sm md:text-base font-medium">{img.alt}</p>
                    <span className="text-white/60 text-xs uppercase tracking-wider mt-1 block">
                      {img.categoria}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredImages.length === 0 && (
          <div className="text-center py-24">
            <p className="text-stone-400 font-serif text-2xl">Nessuna immagine trovata.</p>
          </div>
        )}
      </section>

      {/* Quote */}
      <section className="py-16 bg-stone-800 relative noise">
        <div className="container-narrow text-center relative z-10">
          <blockquote className="font-serif text-white italic leading-[1.4]" style={{ fontSize: 'var(--text-xl)' }}>
            "Le foto non rendono giustizia.<br />
            Bisogna venire qui, sentire il profumo dei casoncelli,<br />
            vedere l'Adamello al tramonto."
          </blockquote>
          <p className="text-amber-400 mt-8">— I nostri ospiti</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-crema">
        <div className="container-broken">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div>
              <h3 className="font-serif text-stone-900 text-2xl md:text-3xl">Vivi l'esperienza dal vivo</h3>
              <p className="text-stone-600 mt-2">Prenota il tuo tavolo con vista</p>
            </div>
            <a
              href="tel:+393391513234"
              className="inline-flex items-center justify-center gap-3 bg-stone-700 text-white px-10 py-5 rounded-2xl font-semibold text-lg hover:bg-stone-800 transition-colors"
            >
              339 151 3234
            </a>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 md:p-8"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-10"
              onClick={() => setSelectedImage(null)}
              whileHover={{ scale: 1.1, rotate: 90 }}
              transition={{ duration: 0.2 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </motion.button>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="relative max-w-6xl max-h-[85vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="absolute -bottom-16 left-0 right-0 text-center"
              >
                <p className="text-white font-serif text-xl">{selectedImage.alt}</p>
                <span className="text-white/50 text-sm uppercase tracking-wider">
                  {selectedImage.categoria}
                </span>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
