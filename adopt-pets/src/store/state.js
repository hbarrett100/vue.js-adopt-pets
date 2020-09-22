import cats from '../data/cats'
import dogs from '../data/dogs'

export default {
  cats,
  dogs,
  // this makes the array flat rather than nested cat and dogs arrays
  pets: [...cats, ...dogs]
}
