export const DEFAULT_RANDOMIZER = Math.random

let rand = DEFAULT_RANDOMIZER

export const overrideRandomizer = newRandom => {
  rand = newRandom
}

export const getRand = () => rand

export default getRand
