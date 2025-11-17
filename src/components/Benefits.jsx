export default function Benefits() {
  const benefits = [
    { title: 'Kalorienreich', desc: 'Energiegeladen mit komplexen Kohlenhydraten und gesunden Fetten.' },
    { title: 'Proteinpower', desc: 'Unterstützt Muskelaufbau mit hochwertigem Molken- und Caseinprotein.' },
    { title: 'Schnell & Einfach', desc: 'In Wasser oder Milch anrühren – fertig in 30 Sekunden.' },
    { title: 'Sanft für den Magen', desc: 'Leicht verdaulich, ohne künstliche Zusätze.' },
  ]

  return (
    <section id="details" className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">Warum Magic Milk?</h2>
        <p className="mt-4 text-gray-600 text-center max-w-2xl mx-auto">Perfekt für Hardgainer, Sportler:innen und alle, die gesund an Gewicht zulegen möchten.</p>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b) => (
            <div key={b.title} className="p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition bg-gradient-to-br from-gray-50 to-white">
              <h3 className="text-xl font-semibold text-gray-900">{b.title}</h3>
              <p className="mt-2 text-gray-600">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
