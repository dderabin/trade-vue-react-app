import { useEffect } from 'react'
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

  return { traderSubscription, signalSubscription }
}

export default useSubscriptions