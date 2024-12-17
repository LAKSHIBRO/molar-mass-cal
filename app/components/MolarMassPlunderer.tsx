// eslint-disable

'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { calculateMolarMass } from "../utils/MolarMassCalculator";
import { FlaskRoundIcon as Flask, Scale, AlertTriangle } from 'lucide-react'
import { PirateKeyboard } from './PirateKeyboard'

export default function MolarMassPlunderer() {
  const [formula, setFormula] = useState('')
  const [result, setResult] = useState<number | null>(null)
  const [error, setError] = useState<string | null>(null)

  const handleCalculate = () => {
    try {
      const molarMass = calculateMolarMass(formula)
      setResult(molarMass)
      setError(null)
    } catch {
      setError('Arrr! Invalid formula, ye scurvy dog!')
      setResult(null)
    }
  }
  

  const handleKeyPress = (key: string) => {
    if (key === 'backspace') {
      setFormula(formula.slice(0, -1))
    } else if (key === 'clear') {
      setFormula('')
    } else {
      setFormula(formula + key)
    }
  }

  return (
    <div className="space-y-4">
      <div className="relative">
        <Input
          type="text"
          value={formula}
          onChange={(e) => setFormula(e.target.value)}
          placeholder="Enter yer chemical formula"
          className="bg-slate-700 text-amber-400 placeholder-amber-300/50 border-amber-600 pl-10"
        />
        <Flask className="absolute left-3 top-1/2 transform -translate-y-1/2 text-amber-500 w-5 h-5" />
      </div>
      <PirateKeyboard onKeyPress={handleKeyPress} />
      <Button onClick={handleCalculate} className="w-full bg-amber-600 hover:bg-amber-700 text-slate-900 flex items-center justify-center gap-2">
        <Scale className="w-5 h-5" />
        Calculate Molar Booty
      </Button>
      {result !== null && (
        <div className="text-amber-400 text-center bg-slate-700 p-4 rounded-lg border border-amber-600 flex items-center justify-center gap-2">
          <Scale className="w-5 h-5" />
          Ye molar mass be {result.toFixed(2)} g/mol
        </div>
      )}
      {error && (
        <div className="text-red-400 text-center bg-slate-700 p-4 rounded-lg border border-red-600 flex items-center justify-center gap-2">
          <AlertTriangle className="w-5 h-5" />
          {error}
        </div>
      )}
    </div>
  )
}

