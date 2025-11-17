export default function Testimonials() {
  const reviews = [
    { name: 'Lukas', text: 'In 8 Wochen +5 kg geschafft – ohne Völlegefühl. Geschmack top!' },
    { name: 'Mara', text: 'Ideal nach dem Training. Fühle mich energiegeladen und stark.' },
    { name: 'Yusuf', text: 'Endlich ein Shake, der satt macht und gut verträglich ist.' },
  ]

  return (
    <section className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">Erfahrungen</h2>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div key={r.name} className="p-6 bg-white rounded-2xl border border-gray-200 shadow-sm">
              <p className="text-gray-700">“{r.text}”</p>
              <div className="mt-4 text-sm text-gray-500">— {r.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
