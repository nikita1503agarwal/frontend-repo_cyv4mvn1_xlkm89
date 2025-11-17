import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-rose-100 via-amber-100 to-emerald-100" />
      <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-20 grid lg:grid-cols-2 gap-12">
        <div className="flex flex-col justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900"
          >
            Magic Milk
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mt-6 text-lg md:text-xl text-gray-700"
          >
            Das hochwertige Nahrungsergänzungsmittel zum gesunden Zunehmen. Kalorienreich, proteinreich, lecker – in Sekunden gemixt.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-8 flex flex-col sm:flex-row gap-4"
          >
            <a href="#cta" className="inline-flex items-center justify-center rounded-lg bg-black text-white px-6 py-3 font-semibold shadow-lg hover:shadow-xl transition">Jetzt anfragen</a>
            <a href="#details" className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-6 py-3 font-semibold hover:bg-gray-50">Mehr erfahren</a>
          </motion.div>
          <div className="mt-6 text-sm text-gray-600">Made in Germany • Ohne Zuckerzusatz • 30 Portionen</div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="aspect-square rounded-3xl bg-white/60 backdrop-blur-xl shadow-2xl border border-white/50 p-6 flex items-center justify-center">
            <img src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1600&auto=format&fit=crop" alt="Magic Milk" className="rounded-2xl object-cover h-full w-full" />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-md px-4 py-3 text-sm">
            500+ kcal pro Shake
          </div>
          <div className="absolute -top-6 -right-6 bg-black text-white rounded-2xl shadow-md px-4 py-3 text-sm">
            23g Protein
          </div>
        </motion.div>
      </div>
    </section>
  )
}
