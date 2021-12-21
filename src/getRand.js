let rand = Math.random

export const overrideRandomizer = newRandom => {
  rand = newRandom
}

export const getRand = () => rand

export default getRand
