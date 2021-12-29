import parseInput from './parseInput'

const testableRandomizer = () => 0.5

describe('parseInput', () => {
  it('', () => {
    expect(parseInput('6')).toEqual([{ d: 1, mod: 1, n: 6 }])
    expect(parseInput('1d6')).toEqual([{ d: 6, mod: 1, n: 1 }])
    expect(parseInput('2d8')).toEqual([{ d: 8, mod: 1, n: 2 }])
    expect(parseInput('-2d8')).toEqual([{ d: 8, mod: -1, n: 2 }])
    expect(parseInput('12-2d8')).toEqual([{ d: 1, mod: 1, n: 12 }, { d: 8, mod: -1, n: 2 }])
    expect(parseInput('2d%')).toEqual([{ d: 100, mod: 1, n: 2 }])
    expect(parseInput('4dF')).toEqual([{ d: 'F', mod: 1, n: 4 }])
  })
})
