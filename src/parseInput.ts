export type D = number | 'F'

interface Instruction {
  mod: number,
  n: number,
  d: D
}

const parseInput = (input: string): Instruction[] => {
  const instructions = []
  input = input.replace(/\s/g, '')

  const steps = input.split(/(?=[+-])/g)

  steps.forEach(step => {
    const stepMatch = /^((?<mod>[+-]){0,1}(?<input>.*)$)/.exec(step)

    const mod = stepMatch?.groups?.mod === '-' ? -1 : 1

    const match = /^(?<n>\d+)(?:d(?<d>[\d%F]+)){0,1}$/.exec(stepMatch?.groups?.input)

    if (!match) {
      throw new Error('invalid syntax')
    }

    const n: number = parseInt(match?.groups?.n) || 1
    const d: D = parseD(match?.groups?.d)

    instructions.push({ n, d, mod })
  })

  return instructions
}

const parseD = (d: string): D => {
  if (d === '%') {
    return 100
  }

  if (d === 'F') {
    return d
  }

  return parseInt(d) || 1
}

export default parseInput