// eslint-disable
'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { calculateMolarMass } from "../utils/MolarMassCalculator";

export default function MolarMassCalculator() {
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


  return (
    <div className="space-y-4">
      <Input
        type="text"
        value={formula}
        onChange={(e) => setFormula(e.target.value)}
        placeholder="Enter ye chemical formula, matey!"
        className="bg-yellow-100 text-black placeholder-gray-500"
      />
      <Button onClick={handleCalculate} className="w-full bg-yellow-400 hover:bg-yellow-500 text-black">
        Calculate Ye Molar Booty!
      </Button>
      {result !== null && (
        <div className="text-yellow-400 text-center">
          Arrr! Ye molar mass be {result.toFixed(2)} g/mol, ye scallywag!
        </div>
      )}
      {error && <div className="text-red-500 text-center">{error}</div>}
    </div>
  )
}
1