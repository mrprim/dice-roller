import convert from '../../src/utils/convertDistributionToSet'

describe('convertDistributionToSet', () => {
  it('the big test', () => {
    const a = {
      a: 3,
      b: 1,
      c: 4
    }

    const result = convert(a)

    expect(result.length).toBe(8)
    expect(result.filter(v => v === 'a').length).toBe(3)
    expect(result.filter(v => v === 'b').length).toBe(1)
    expect(result.filter(v => v === 'c').length).toBe(4)
  })
})
