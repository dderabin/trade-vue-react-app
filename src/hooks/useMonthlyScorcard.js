import { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AppActions } from '../store/actions';

const useMonthlyScorecard = () => {
  const dispatch = useDispatch();
  const monthlyScorecard = useSelector(state => state.appState.monthlyScorecard);
  const currentYear = new Date().getFullYear();
  const monthlyArray = Array(12).fill(0);

  useEffect(() => {
    dispatch(AppActions.monthlyScorecardFetchAction())
    // eslint-disable-next-line
  }, [])

  const dataList = useMemo(() => {
    return monthlyScorecard.reduce((previousValue, currentValue) => {
        const { month, year, profit } = currentValue
        if (!Object.keys(previousValue).includes(year)) previousValue[year] = monthlyArray
        let profitArray = previousValue[year];
        profitArray[month] = profit;
        return {...previousValue, [year]: [...profitArray]}
      }, {})
      // eslint-disable-next-line
  }, [monthlyScorecard])

  return { monthlyScorecard, dataList, currentYear }
}

export default useMonthlyScorecard