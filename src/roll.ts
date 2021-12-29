import getRand from './rand'
import parseInput from './parseInput'

const roll = (input: string | number, verbose?: boolean): number | RollResultDetail => {
  const instructions = parseInput('' + input)

  let id = 0
  const details = instructions.reduce((final, { id: instructionId, diceType, numberOfDiceToRoll, modifier, timesToReroll }) => {

    for (let i = 0; i < timesToReroll; i++) {
      const r: RollDetail = { id: id++, instructionId, diceType, numberOfDiceToRoll, modifier, value: 0 }
      r.value = (diceType === 1) ? numberOfDiceToRoll : rollADie(diceType)
      r.value = r.value * modifier
      final.push(r)
    }

    return final
  }, [])

  const total = details.reduce((total, r) => total + r.value, 0)

  if (verbose) {
    return { total, instructions, details }
  } else {
    return total
  }
}

const rollADie = (sides: DiceTypeInput): number => {
  if (sides === 'F') {
    return Math.floor(getRand()() * 3) - 1
  }
  if (typeof sides === 'number') {
    return Math.floor(getRand()() * sides) + 1
  }
}

export default roll
