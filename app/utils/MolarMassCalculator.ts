const elementMasses: { [key: string]: number } = {
  H: 1.008, He: 4.003, Li: 6.941, Be: 9.012, B: 10.811, C: 12.011, N: 14.007, O: 15.999, F: 18.998, Ne: 20.180,
  Na: 22.990, Mg: 24.305, Al: 26.982, Si: 28.086, P: 30.974, S: 32.065, Cl: 35.453, Ar: 39.948, K: 39.098, Ca: 40.078,
  // More elements can be added here
}

export function calculateMolarMass(formula: string): number {
  let molarMass = 0
  let currentElement = ''
  let currentCount = ''

  for (let i = 0; i < formula.length; i++) {
    const char = formula[i]

    if (char >= 'A' && char <= 'Z') {
      if (currentElement) {
        molarMass += elementMasses[currentElement] * (currentCount ? parseInt(currentCount) : 1)
      }
      currentElement = char
      currentCount = ''
    } else if (char >= 'a' && char <= 'z') {
      currentElement += char
    } else if (char >= '0' && char <= '9') {
      currentCount += char
    } else {
      throw new Error("Arrr! Invalid character in the formula!")
    }
  }

  if (currentElement) {
    molarMass += elementMasses[currentElement] * (currentCount ? parseInt(currentCount) : 1)
  }

  if (!molarMass) {
    throw new Error("Shiver me timbers! Empty or invalid formula!")
  }

  return molarMass
}

