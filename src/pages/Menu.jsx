import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion, AnimatePresence } from 'framer-motion'
import { ChefHat, Leaf, Wine, Phone, Sparkles } from 'lucide-react'

import casoncelli from '../assets/foto/casoncelli-fatti-mano.webp'
import cervo from '../assets/foto/cervo-polenta-piatto.webp'
import gulasch from '../assets/foto/gulasch-cervo-polenta.webp'
import gnocchetti from '../assets/foto/gnocchetti-saraceno-formaggio.webp'
import pizzoccheri from '../assets/foto/pizzoccheri-valtellinesi.webp'
import vino from '../assets/foto/vino-rosso-barbera.webp'
import zuppa from '../assets/foto/zuppa-formaggio-terracotta.webp'
import carneSalada from '../assets/foto/carne-salada-piatto.webp'

gsap.registerPlugin(ScrollTrigger)

export default function Menu() {
  const heroRef = useRef(null)
  const [activeCategory, setActiveCategory] = useState('primi')

  const categories = [
    { id: 'antipasti', label: 'Antipasti' },
    { id: 'primi', label: 'Primi' },
    { id: 'secondi', label: 'Secondi' },
    { id: 'dolci', label: 'Dolci' },
  ]

  const menuData = {
    antipasti: [
      { nome: 'Tagliere della Valle', desc: 'Selezione di salumi e formaggi d\'alpeggio con miele e mostarda', highlight: true },
      { nome: 'Carne Salada di Matteo', desc: 'Preparazione artigianale con rucola e grana', badge: 'Fatto in Casa', img: carneSalada },
      { nome: 'Funghi Porcini Trifolati', desc: 'Con aglio, prezzemolo e crostini di polenta' },
      { nome: 'Bresaola della Valtellina', desc: 'Con rucola, grana e olio extravergine' },
    ],
    primi: [
      { nome: 'Casoncelli della Valle Camonica', desc: 'Pasta ripiena fatta a mano ogni giorno, burro fuso e salvia', badge: 'Specialità', highlight: true, img: casoncelli },
      { nome: 'Gnocchetti di Grano Saraceno', desc: 'Conditi con burro di malga, salvia e formaggio Silter DOP', img: gnocchetti },
      { nome: 'Pizzoccheri Valtellinesi', desc: 'Con verze, patate, Casera DOP e burro croccante', img: pizzoccheri },
      { nome: 'Cappelletti in Brodo', desc: 'Pasta ripiena in brodo di cappone', badge: 'Fatto in Casa' },
      { nome: 'Risotto ai Funghi Porcini', desc: 'Carnaroli mantecato con porcini freschi del Parco Adamello' },
      { nome: 'Zuppa d\'Orzo e Speck', desc: 'Ricetta tradizionale servita in terracotta', img: zuppa },
    ],
    secondi: [
      { nome: 'Cervo con Polenta', desc: 'Spezzatino di cervo in umido servito con polenta taragna', badge: 'Specialità', highlight: true, img: cervo },
      { nome: 'Gulasch di Cervo', desc: 'Ricetta tradizionale con spezie e polenta fumante', img: gulasch },
      { nome: 'Brasato al Barolo', desc: 'Manzo brasato lentamente nel vino Barolo DOCG', badge: 'Specialità' },
      { nome: 'Costine di Maiale', desc: 'Cotte lentamente con birra artigianale e miele locale' },
      { nome: 'Filetto di Trota', desc: 'Trota di torrente con burro alle mandorle tostate' },
      { nome: 'Tagliata di Manzo', desc: 'Con rucola, grana e riduzione al balsamico' },
    ],
    dolci: [
      { nome: 'Tiramisù della Casa', desc: 'Con mascarpone fresco e caffè della moka', badge: 'Fatto in Casa', highlight: true },
      { nome: 'Torta di Mele', desc: 'Mele della valle con cannella, servita tiepida con gelato' },
      { nome: 'Panna Cotta', desc: 'Con coulis di frutti di bosco del Parco Adamello' },
      { nome: 'Strudel di Mele', desc: 'Ricetta tradizionale con uvetta e pinoli' },
      { nome: 'Semifreddo al Torrone', desc: 'Con croccante di nocciole piemontesi' },
    ],
  }

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to('.menu-hero-img', {
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

  return (
    <div className="overflow-hidden">
      {/* Hero Elegante */}
      <section ref={heroRef} className="relative h-[80vh] md:h-screen overflow-hidden">
        <div className="menu-hero-img absolute inset-0 scale-110">
          <img
            src={casoncelli}
            alt="Casoncelli fatti a mano"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/80" />
        </div>

        <div className="relative h-full flex flex-col justify-end pb-16 md:pb-24">
          <div className="container-broken">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-amber-400 text-xs uppercase tracking-[0.3em] mb-4 block">
                Cucina di montagna
              </span>
              <h1 className="font-serif text-white leading-[0.85] mb-6" style={{ fontSize: 'var(--text-4xl)' }}>
                Il Menu
              </h1>
              <p className="text-white/80 max-w-lg text-lg leading-relaxed">
                Piatti della tradizione camuna, preparati ogni giorno con ingredienti del territorio
              </p>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-white/60 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Info Strip */}
      <section className="py-6 bg-stone-800">
        <div className="container-broken">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 text-white/70 text-sm">
            <div className="flex items-center gap-2">
              <Leaf className="w-4 h-4 text-amber-400" />
              <span>Ingredienti locali</span>
            </div>
            <div className="flex items-center gap-2">
              <ChefHat className="w-4 h-4 text-amber-400" />
              <span>Pasta fatta in casa</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Menu stagionale</span>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Navigation */}
      <section className="sticky top-20 z-40 bg-crema border-b border-stone-200">
        <div className="container-broken py-4">
          <div className="flex justify-center gap-2 md:gap-4">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-300 ${
                  activeCategory === cat.id
                    ? 'bg-stone-800 text-white'
                    : 'text-stone-600 hover:bg-stone-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Content */}
      <section className="py-16 md:py-24 bg-crema">
        <div className="container-broken">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              {/* Category Title */}
              <div className="text-center mb-12">
                <h2 className="font-serif text-stone-900 text-4xl md:text-5xl capitalize">
                  {categories.find(c => c.id === activeCategory)?.label}
                </h2>
                <div className="w-16 h-1 bg-amber-500 mx-auto mt-4 rounded-full" />
              </div>

              {/* Menu Items Grid */}
              <div className="max-w-4xl mx-auto">
                {menuData[activeCategory].map((item, i) => (
                  <motion.div
                    key={item.nome}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className={`group ${item.img ? 'mb-8' : 'mb-6'}`}
                  >
                    {item.img ? (
                      // Card con immagine
                      <div className={`bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 ${item.highlight ? 'ring-2 ring-amber-400' : ''}`}>
                        <div className="grid md:grid-cols-2 gap-0">
                          <div className="relative h-48 md:h-auto">
                            <img
                              src={item.img}
                              alt={item.nome}
                              className="absolute inset-0 w-full h-full object-cover"
                            />
                            {item.badge && (
                              <span className="absolute top-4 left-4 bg-amber-500 text-stone-900 text-xs font-bold px-3 py-1 rounded-full">
                                {item.badge}
                              </span>
                            )}
                          </div>
                          <div className="p-6 md:p-8 flex flex-col justify-center">
                            <h3 className="font-serif text-stone-900 text-xl md:text-2xl mb-2">
                              {item.nome}
                            </h3>
                            <p className="text-stone-600 leading-relaxed">
                              {item.desc}
                            </p>
                          </div>
                        </div>
                      </div>
                    ) : (
                      // Lista semplice
                      <div className={`py-5 border-b border-stone-200 group-hover:border-amber-400 transition-colors ${item.highlight ? 'bg-amber-50 -mx-4 px-4 rounded-xl border-0' : ''}`}>
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <div className="flex items-center gap-3 flex-wrap">
                              <h3 className="font-serif text-stone-900 text-lg md:text-xl">
                                {item.nome}
                              </h3>
                              {item.badge && (
                                <span className="text-[10px] bg-amber-100 text-amber-700 font-bold uppercase tracking-wider px-2 py-1 rounded">
                                  {item.badge}
                                </span>
                              )}
                            </div>
                            <p className="text-stone-500 text-sm mt-1">{item.desc}</p>
                          </div>
                          {item.highlight && (
                            <div className="w-2 h-2 bg-amber-500 rounded-full flex-shrink-0 mt-2" />
                          )}
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Sezione Vini */}
      <section className="py-20 bg-stone-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_rgba(217,119,6,0.3),_transparent_50%)]" />
        </div>

        <div className="container-broken relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Wine className="w-8 h-8 text-amber-400" />
                <span className="text-amber-400 text-xs uppercase tracking-[0.3em]">La Cantina</span>
              </div>
              <h2 className="font-serif text-white text-4xl md:text-5xl mb-6">
                I nostri vini
              </h2>
              <p className="text-white/70 leading-relaxed mb-8 text-lg">
                Una selezione curata di vini locali e nazionali. Chiedete a Matteo per l'abbinamento perfetto con i vostri piatti.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  'Valtellina Superiore',
                  'Franciacorta DOCG',
                  'Sforzato di Valtellina',
                  'Grappe artigianali'
                ].map((wine, i) => (
                  <div key={i} className="flex items-center gap-3 text-white/80">
                    <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
                    <span className="text-sm">{wine}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-amber-500/20 rounded-3xl blur-2xl" />
              <img
                src={vino}
                alt="Selezione di vini"
                className="relative w-full aspect-[3/4] object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quote Antonietta */}
      <section className="py-20 bg-crema relative">
        <div className="container-narrow text-center">
          <ChefHat className="w-12 h-12 text-amber-600 mx-auto mb-8" />
          <blockquote className="font-serif text-stone-800 text-2xl md:text-3xl leading-relaxed italic mb-8">
            "Ogni piatto racconta una storia. I casoncelli li preparo come mi ha insegnato mia madre, con la stessa pazienza e lo stesso amore."
          </blockquote>
          <p className="text-amber-600 font-semibold">— Antonietta</p>
        </div>
      </section>

      {/* Info Box */}
      <section className="py-12 bg-white">
        <div className="container-broken">
          <div className="bg-stone-100 rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center md:text-left">
                <h4 className="font-serif text-stone-900 text-lg mb-2">Menu Stagionale</h4>
                <p className="text-stone-600 text-sm">I piatti cambiano con le stagioni per garantire ingredienti sempre freschi</p>
              </div>
              <div className="text-center md:text-left">
                <h4 className="font-serif text-stone-900 text-lg mb-2">Opzioni Speciali</h4>
                <p className="text-stone-600 text-sm">Piatti vegetariani e senza glutine sempre disponibili su richiesta</p>
              </div>
              <div className="text-center md:text-left">
                <h4 className="font-serif text-stone-900 text-lg mb-2">Gruppi e Eventi</h4>
                <p className="text-stone-600 text-sm">Menu dedicati per gruppi, compleanni e occasioni speciali</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-stone-800">
        <div className="container-broken">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="font-serif text-white text-3xl md:text-4xl mb-2">Prenota il tuo tavolo</h3>
              <p className="text-white/60">Per gruppi o richieste speciali, chiamaci</p>
            </div>
            <a
              href="tel:+393391513234"
              className="inline-flex items-center gap-3 bg-amber-500 text-stone-900 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-amber-400 transition-colors"
            >
              <Phone className="w-6 h-6" />
              339 151 3234
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
