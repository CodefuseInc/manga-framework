import FARE_UPDATES from '../constants/course_defaults'
import Fares from '../stores/fares'

const updateFareParameters = (remainingBalance, maxToSpend) => {
  Fares.dispatch({
    type : FARE_UPDATES.FARE_PARAMETER,
    remainingBalance,
    maxToSpend
  })
}

export default { updateFareParameters }
