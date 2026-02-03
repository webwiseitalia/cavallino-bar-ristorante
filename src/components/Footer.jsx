import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Trophy, Phone } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function Footer() {
  const footerRef = useRef(null)
  const bigTextRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(bigTextRef.current,
        { xPercent: 10 },
        {
          xPercent: -10,
          ease: 'none',
          scrollTrigger: {
            trigger: footerRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1
          }
        }
      )
    }, footerRef)

    return () => ctx.revert()
  }, [])

  return (
    <footer ref={footerRef} className="bg-stone-800 text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/50 to-transparent" />

      <div
        ref={bigTextRef}
        className="py-12 md:py-20 border-b border-crema/10 whitespace-nowrap"
      >
        <span className="font-serif text-[15vw] md:text-[12vw] text-white/5 leading-none">
          Il Cavallino — Vezza d'Oglio — Il Cavallino
        </span>
      </div>

      <div className="py-16 md:py-20">
        <div className="container-broken">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-12">
            {/* Logo e descrizione */}
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 bg-stone-700 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-serif text-2xl font-bold">C</span>
                </div>
                <div>
                  <span className="font-serif text-xl font-bold block text-white">Il Cavallino</span>
                  <span className="text-amber-400 text-sm">Ristorante Bar</span>
                </div>
              </div>
              <p className="text-white/60 leading-relaxed text-sm mb-6">
                Cucina di montagna autentica nel cuore dell'Alta Valle Camonica.
              </p>
              <div className="flex items-center gap-3 bg-white/5 rounded-xl p-4">
                <Trophy className="w-8 h-8 text-amber-400" />
                <div>
                  <p className="font-semibold text-sm text-white">N.1 TripAdvisor</p>
                  <p className="text-white/50 text-xs">Vezza d'Oglio • 4.6/5</p>
                </div>
              </div>
            </div>

            {/* Esplora */}
            <div className="col-span-1">
              <h4 className="text-amber-400 text-xs uppercase tracking-widest mb-5 font-semibold">Esplora</h4>
              <ul className="space-y-3">
                {['Menu', 'Terrazza', 'Galleria'].map((item) => (
                  <li key={item}>
                    <Link
                      to={`/${item.toLowerCase()}`}
                      className="text-white/70 hover:text-white transition-colors text-sm link-hover"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Info */}
            <div className="col-span-1">
              <h4 className="text-amber-400 text-xs uppercase tracking-widest mb-5 font-semibold">Info</h4>
              <ul className="space-y-3">
                {['Chi Siamo', 'Territorio', 'Contatti'].map((item) => (
                  <li key={item}>
                    <Link
                      to={`/${item.toLowerCase().replace(' ', '-')}`}
                      className="text-white/70 hover:text-white transition-colors text-sm link-hover"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contatti */}
            <div className="col-span-2 md:col-span-1">
              <h4 className="text-amber-400 text-xs uppercase tracking-widest mb-5 font-semibold">Contatti</h4>
              <a
                href="tel:+393391513234"
                className="inline-flex items-center gap-3 bg-amber-500 text-stone-900 px-6 py-3 rounded-xl font-semibold hover:bg-amber-400 transition-colors mb-6"
              >
                <Phone className="w-5 h-5" />
                339 151 3234
              </a>

              <div className="space-y-4">
                <div>
                  <p className="text-white/40 text-xs uppercase tracking-wider mb-2">Indirizzo</p>
                  <p className="text-white/80 text-sm leading-relaxed">
                    Via Tù 24, Frazione Tù<br />
                    25059 Vezza d'Oglio (BS)
                  </p>
                </div>
                <div>
                  <p className="text-white/40 text-xs uppercase tracking-wider mb-2">Orari</p>
                  <p className="text-white/80 text-sm">Lun-Ven 08:00-00:00</p>
                  <p className="text-white/80 text-sm">Sab-Dom 07:45-00:15</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-6">
        <div className="container-broken flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-xs">
            © {new Date().getFullYear()} Il Cavallino. Tutti i diritti riservati.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-white/40 text-xs">1100m s.l.m.</span>
            <span className="w-1 h-1 bg-amber-500 rounded-full" />
            <span className="text-white/40 text-xs">Alta Valle Camonica</span>
            <span className="w-1 h-1 bg-amber-500 rounded-full" />
            <span className="text-white/40 text-xs">Brescia, Italia</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
