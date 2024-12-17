import { Button } from "@/components/ui/button"

interface PirateKeyboardProps {
  onKeyPress: (key: string) => void;
}

const elements = [
  'H', 'He', 'Li', 'Be', 'B', 'C', 'N', 'O', 'F', 'Ne',
  'Na', 'Mg', 'Al', 'Si', 'P', 'S', 'Cl', 'Ar', 'K', 'Ca'
];

const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

export function PirateKeyboard({ onKeyPress }: PirateKeyboardProps) {
  return (
    <div className="grid grid-cols-5 gap-2 mt-4">
      {elements.map((element) => (
        <Button
          key={element}
          onClick={() => onKeyPress(element)}
          className="bg-amber-600 hover:bg-amber-700 text-slate-900"
        >
          {element}
        </Button>
      ))}
      {numbers.map((number) => (
        <Button
          key={number}
          onClick={() => onKeyPress(number)}
          className="bg-slate-700 hover:bg-slate-600 text-amber-400"
        >
          {number}
        </Button>
      ))}
      <Button
        onClick={() => onKeyPress('backspace')}
        className="col-span-3 bg-red-600 hover:bg-red-700 text-slate-900"
      >
        Swab the Deck (Backspace)
      </Button>
      <Button
        onClick={() => onKeyPress('clear')}
        className="col-span-2 bg-slate-600 hover:bg-slate-500 text-amber-400"
      >
        Clear All
      </Button>
    </div>
  )
}

