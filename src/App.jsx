import Hero from './components/Hero'
import Benefits from './components/Benefits'
import Testimonials from './components/Testimonials'
import LeadForm from './components/LeadForm'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="fixed top-0 inset-x-0 z-30 backdrop-blur bg-white/70 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="font-extrabold text-xl tracking-tight">Magic Milk</a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#details" className="hover:text-gray-600">Vorteile</a>
            <a href="#cta" className="hover:text-gray-600">Beratung</a>
            <a href="/test" className="hover:text-gray-600">Systemcheck</a>
          </nav>
        </div>
      </header>
      <main className="pt-16">
        <Hero />
        <Benefits />
        <Testimonials />
        <LeadForm />
      </main>
      <footer className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-10 text-sm text-gray-600 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>© {new Date().getFullYear()} Magic Milk. Alle Rechte vorbehalten.</div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-gray-800">Datenschutz</a>
            <a href="#" className="hover:text-gray-800">Impressum</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
