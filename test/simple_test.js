import * as d from '../src/index'

describe('main', () => {
  it('roll', () => {
    console.log('a', d.roll(6))

    d.overrideRandomizer(() => console.log('hit') || 0)
    expect(d.roll(6)).toBe(1)

    d.overrideRandomizer(() => console.log('hit2') || 1)
    expect(d.roll(6)).toBe(7)
  })
})
