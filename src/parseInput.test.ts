import parseInput, { RollInstruction } from './parseInput'

const testableRandomizer = () => 0.5
const base = { id: 0, diceType: 1, modifier: 1, numberOfDiceToRoll: 1, timesToReroll: 1, numberOfHighestToKeep: 0 }

describe('parseInput', () => {
  it('', () => {
    expect(parseInput('6')).toEqual([{ ...base, numberOfDiceToRoll: 6 }])
    expect(parseInput('1d6')).toEqual([{ ...base, diceType: 6 }])
    expect(parseInput('2d8')).toEqual([{ ...base, diceType: 8, numberOfDiceToRoll: 2 }])
    expect(parseInput('-2d8')).toEqual([{ ...base, diceType: 8, modifier: -1, numberOfDiceToRoll: 2 }])
    expect(parseInput('12-2d8')).toEqual([{ ...base, numberOfDiceToRoll: 12 }, { ...base, id: 1, diceType: 8, modifier: -1, numberOfDiceToRoll: 2 }])
    expect(parseInput('2d%')).toEqual([{ ...base, diceType: 100, numberOfDiceToRoll: 2 }])
    expect(parseInput('4dF')).toEqual([{ ...base, diceType: 'F', numberOfDiceToRoll: 4 }])
    expect(parseInput('3x4dF')).toEqual([{ ...base, diceType: 'F', numberOfDiceToRoll: 4, timesToReroll: 3 }])
    expect(parseInput('2d6k1')).toEqual([{ ...base, diceType: 6, numberOfDiceToRoll: 2, numberOfHighestToKeep: 1 }])
    expect(parseInput('2d6k2')).toEqual([{ ...base, diceType: 6, numberOfDiceToRoll: 2, numberOfHighestToKeep: 2 }])
    // expect(parseInput('2d6k')).toEqual([{ ...base, diceType: '6', numberOfDiceToRoll: 2, numberOfHighestToKeep: 1 }])
  })
})
