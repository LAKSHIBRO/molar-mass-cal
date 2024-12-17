import MolarMassPlunderer from './components/MolarMassPlunderer'
import { Skull } from 'lucide-react'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-slate-900">
      <div className="w-full max-w-md p-6 bg-slate-800 rounded-lg shadow-xl border border-amber-600">
        <h1 className="text-3xl font-bold mb-6 text-amber-500 text-center flex items-center justify-center gap-2">
          <Skull className="w-8 h-8" />
          Molar Mass Plunderer
        </h1>
        <MolarMassPlunderer />
      </div>
    </main>
  )
}

