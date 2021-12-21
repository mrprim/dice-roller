import getRand from './getRand'

const roll = input => {
  const instructions = parseInput(input)

  const results = instructions.map(({ d, n, mod }) => {
    const r = { d, n, mod }
    d = parseInt(d)
    n = parseInt(n)

    if (d || d === 0) {
      r.v = rollADie(d)
    } else {
      r.v = parseInt(n)
    }

    r.v = r.v * mod

    return r
  })

  const total = results.reduce((total, r) => total + r.v, 0)

  return total
}

const parseInput = input => {
  const instructions = []
  input = ('' + input).replace(/\s/g, '')

  const steps = input.split(/(?=[+-])/g)
  console.log('steps', steps)

  steps.forEach(step => {
    const stepMatch = /^((?<mod>[+-]){0,1}(?<input>.*)$)/.exec(step)

    const mod = stepMatch?.groups?.mod === '-' ? -1 : 1

    const match = /^(?<n>\d+)(?:d(?<d>\d+)){0,1}$/.exec(stepMatch?.groups?.input)

    if (!match) {
      throw new Error('invalid syntax')
    }

    instructions.push({ ...match.groups, mod })
  })

  return instructions
}

const rollADie = sides => Math.floor(getRand()() * sides) + 1

export default roll
