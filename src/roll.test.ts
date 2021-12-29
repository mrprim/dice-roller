import * as d from './index'

const testableRandomizer = () => 0.5

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
    expect(d.roll('1d6', true)).toEqual({ total: 4, results: [{ d: 6, mod: 1, n: 1, v: 4 }] })
    expect(() => d.roll('')).toThrow('invalid syntax')
    expect(() => d.roll('DOG')).toThrow('invalid syntax')
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
