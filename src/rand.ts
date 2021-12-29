export const DEFAULT_RANDOMIZER = Math.random

type RandFunc = () => number

let rand: RandFunc = DEFAULT_RANDOMIZER

export const overrideRandomizer = (newRandom: RandFunc): void => {
  rand = newRandom
}

export const getRand = (): RandFunc => rand

export default getRand
