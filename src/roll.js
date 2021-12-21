import getRand from './getRand'

const roll = sides => Math.floor(getRand()() * sides) + 1

export default roll
