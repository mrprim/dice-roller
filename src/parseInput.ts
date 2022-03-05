export type DiceTypeInput = number | 'F'

export interface RollInstruction {
  id: number,
  modifier: number,
  numberOfDiceToRoll: number,
  diceType: DiceTypeInput,
  timesToReroll: number,
  numberOfHighestToKeep: number,
  numberOfLowestToKeep: number
}

const parseInput = (input: string): RollInstruction[] => {
  const instructions: RollInstruction[] = []
  input = input.replace(/\s/g, '')

  const steps = input.split(/(?=[+-])/g)

  steps.forEach((step, index) => {
    const stepMatch = /^((?<mod>[+-]){0,1}(?<input>.*)$)/.exec(step)

    const modifier = stepMatch?.groups?.mod === '-' ? -1 : 1

    const match = /^(?:(?<x>[\d]+x)){0,1}(?<n>\d+)(?:d(?<d>[\d%F]+)){0,1}(?:kh{0,1}(?<kh>\d+)){0,1}(?:kl(?<kl>\d+)){0,1}$/.exec(stepMatch?.groups?.input)

    if (!match) {
      throw new Error('invalid syntax')
    }

    const numberOfDiceToRoll = parseInt(match?.groups?.n) || 1
    const diceType = parseDiceType(match?.groups?.d)
    const timesToReroll = parseInt(match?.groups?.x) || 1
    const numberOfHighestToKeep = parseInt(match?.groups?.kh) || 0
    const numberOfLowestToKeep = parseInt(match?.groups?.kl) || 0

    instructions.push({ id: index, numberOfDiceToRoll, diceType, modifier, timesToReroll, numberOfHighestToKeep, numberOfLowestToKeep })
  })

  return instructions
}

const parseDiceType = (d: string): DiceTypeInput => {
  if (d === '%') {
    return 100
  }

  if (d === 'F') {
    return d
  }

  return parseInt(d) || 1
}

export default parseInput