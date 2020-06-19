import convert from '../utils/convertDistributionToSet'
import banana from '../data/distribution.bananagrams.json'
import Bag from './Bag'

export default () => new Bag(...convert(banana))
