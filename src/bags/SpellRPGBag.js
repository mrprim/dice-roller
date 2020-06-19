import convert from '../utils/convertDistributionToSet'
import spellrpg from '../data/distribution.spellrpg.json'
import Bag from './Bag'

export default () => new Bag(...convert(spellrpg))
