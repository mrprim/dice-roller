import convert from '../utils/convertDistributionToSet'
import scrabble from '../data/distribution.scrabble.json'
import Bag from './Bag'

export default () => new Bag(...convert(scrabble))
