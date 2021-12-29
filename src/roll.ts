import getRand from './rand'
import parseInput, { D } from './parseInput'

interface Result {
  mod: number,
  d: D,
  n: number,
  v: number
}

const roll = (input: string | number): number => {
  const instructions = parseInput('' + input)

  const results = instructions.map(({ d, n, mod }) => {
    const r: Result = { d, n, mod, v: 0 }

    r.v = (d === 1) ? n : rollADie(d)
    r.v = r.v * mod

    return r
  })

  const total = results.reduce((total, r) => total + r.v, 0)

  return total
}

const rollADie = (sides: D): number => {
  if (sides === 'F') {
    return Math.floor(getRand()() * 3) - 1
  }
  if (typeof sides === 'number') {
    return Math.floor(getRand()() * sides) + 1
  }
}

export default roll
