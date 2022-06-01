import { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AppActions } from '../store/actions';

const useSubscriptions = () => {
  const dispatch = useDispatch();
  const { traderSubscription, signalSubscription } = useSelector(state => state.appState);

  useEffect(() => {
    dispatch(AppActions.traderSubscriptionFetchAction())
    dispatch(AppActions.signalSubscriptionFetchAction())
    // eslint-disable-next-line
  }, [])

  const { copyData, signalData } = useMemo(() => {
    const monthlyArray = Array(12).fill(0);
    let { subscribersHistory: copyData = [...monthlyArray] } = traderSubscription;
    let { subscribersHistory: signalData = [...monthlyArray] } = signalSubscription;
    copyData = copyData.reduce((previousValue, currentValue) => {
      const { month, count } = currentValue;
      previousValue[month] = count;
      return [...previousValue]
    }, [...monthlyArray])    
    signalData = signalData.reduce((previousValue, currentValue) => {
      const { month, count } = currentValue;
      previousValue[month] = count;
      return [...previousValue]
    }, [...monthlyArray])
    return {copyData, signalData}
  }, [traderSubscription, signalSubscription])

  return { traderSubscription, signalSubscription, copyData, signalData }
}

export default useSubscriptions