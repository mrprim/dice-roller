import * as d from './index'

const testableRandomizer = () => 0.5

const baseInstruction = { id: 0, diceType: 1, modifier: 1, numberOfDiceToRoll: 1, timesToReroll: 1, numberOfHighestToKeep: 0, numberOfLowestToKeep: 0, rerollMinValue: 0 }
const baseDetail = { id: 0, instructionId: 0, diceType: 1, modifier: 1, value: 0, discard: false }

describe('main', () => {

  it('roll', () => {
    d.overrideRandomizer(testableRandomizer)
    expect(d.roll(6)).toBe(6)
    expect(d.roll('6')).toBe(6)
    expect(d.roll('15')).toBe(15)
    expect(d.roll('1d6')).toBe(4)
    expect(d.roll('1d6   ')).toBe(4)
    expect(d.roll('   1d6   ')).toBe(4)
    expect(d.roll('1d6+1')).toBe(5)
    expect(d.roll('1+1d6')).toBe(5)
    expect(d.roll('1-1d6')).toBe(-3)
    expect(d.roll('1d6 + 1d6')).toBe(8)
    expect(d.roll('1d6-1d6')).toBe(0)
    expect(d.roll('-1d6+1d6')).toBe(0)
    expect(d.roll('1dF')).toBe(0)
    expect(d.roll('1d6', true)).toEqual({ total: 4, instructions: [{ ...baseInstruction, diceType: 6 }], details: [{ ...baseDetail, diceType: 6, value: 4 }] })
    expect(d.roll('2x1d6', true)).toEqual({ total: 8, instructions: [{ ...baseInstruction, diceType: 6, timesToReroll: 2 }], details: [{ ...baseDetail, diceType: 6, value: 4 }, { ...baseDetail, id: 1, diceType: 6, value: 4 }] })
    expect(d.roll('2d6', true)).toEqual({ total: 8, instructions: [{ ...baseInstruction, diceType: 6, numberOfDiceToRoll: 2 }], details: [{ ...baseDetail, diceType: 6, value: 4 }, { ...baseDetail, id: 1, diceType: 6, value: 4 }] })
    expect(d.roll('2d6k1')).toBe(4)
    expect(d.roll('2d6kh1')).toBe(4)
    expect(d.roll('2d6kl1')).toBe(4)
    expect(d.roll('4d6kh1kl1')).toBe(8)

    expect(() => d.roll('')).toThrow('invalid syntax')
    expect(() => d.roll('DOG')).toThrow('invalid syntax')
  })

  it('test k ordering', () => {
    d.resetRandomizer()

    const result = d.roll('4d10k2', true)
    if (typeof result !== 'number') {
      const details = result.details.sort((a, b) => a.value > b.value ? -1 : 1)
      expect(details[0].value + details[1].value).toEqual(result.total)
    }
  })

  it('test kh ordering', () => {
    d.resetRandomizer()

    const result = d.roll('4d10kh2', true)
    if (typeof result !== 'number') {
      const details = result.details.sort((a, b) => a.value > b.value ? -1 : 1)
      expect(details[0].value + details[1].value).toEqual(result.total)
    }
  })

  it('test kl ordering', () => {
    d.resetRandomizer()

    const result = d.roll('4d10kl2', true)
    if (typeof result !== 'number') {
      const details = result.details.sort((a, b) => a.value > b.value ? 1 : -1)
      expect(details[0].value + details[1].value).toEqual(result.total)
    }
  })

  it('overrideRandomizer', () => {
    d.overrideRandomizer(() => 0)
    expect(d.roll('1d6')).toBe(1)
    expect(d.roll('1dF')).toBe(-1)

    d.overrideRandomizer(() => 1)
    expect(d.roll('1d6')).toBe(7)
    expect(d.roll('1dF')).toBe(2)
  })

  afterEach(() => {
    d.overrideRandomizer(d.DEFAULT_RANDOMIZER)
  })
})
