import getRand from './rand'
import parseInput, { DiceTypeInput, RollInstruction } from './parseInput'

interface RollResultDetail {
  total: number,
  instructions: RollInstruction[],
  details: RollDetail[]
}

interface RollDetail {
  id: number,
  instructionId: number,
  modifier: number,
  diceType: DiceTypeInput,
  value: number,
  discard: boolean
}


const roll = (input: string | number, verbose?: boolean): number | RollResultDetail => {
  const instructions = parseInput('' + input)

  let id = 0
  const details = instructions.reduce((final, { id: instructionId, diceType, numberOfDiceToRoll, modifier, timesToReroll, numberOfHighestToKeep }) => {

    for (let i = 0; i < timesToReroll; i++) {
      let groupResults = []
      for (let k = 0; k < (diceType === 1 ? 1 : numberOfDiceToRoll); k++) {
        const r: RollDetail = { id: id++, instructionId, diceType, modifier, value: 0, discard: false }
        r.value = (diceType === 1) ? numberOfDiceToRoll : rollADie(diceType)
        r.value = r.value * modifier
        groupResults.push(r)
      }

      if (numberOfHighestToKeep) {
        groupResults = groupResults.sort((a, b) => a.value > b.value ? 1 : -1)
          .map((r, index) => ({ ...r, discard: index < numberOfHighestToKeep }))
          .sort((a, b) => a.id > b.id ? 1 : -1)
      }

      final = final.concat(groupResults)
    }

    return final
  }, [])

  const total = details.reduce((total, r) => r.discard ? total : (total + r.value), 0)

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
