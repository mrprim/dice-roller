type Randomizer = () => number

interface RollInstruction {
  id: number,
  modifier: number,
  numberOfDiceToRoll: number,
  diceType: DiceTypeInput,
  timesToReroll: number
}

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
  numberOfDiceToRoll: number,
  value: number
}

type DiceTypeInput = number | 'F'
