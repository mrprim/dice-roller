import Bag from '../../src/bags/Bag'

describe('SpellRPGBag', () => {
  it('the big test', () => {
    const a = new Bag('A', 'B', 'C', 'D', 'E', 'F')

    expect(a.count()).toBe(6)
    a.draw(3)
    expect(a.count()).toBe(3)
    a.draw()
    expect(a.count()).toBe(2)
    a.reset()
    expect(a.count()).toBe(6)
    a.discard('poop')
    expect(a.count()).toBe(7)
  })
})
