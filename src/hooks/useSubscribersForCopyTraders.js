import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AppActions } from '../store/actions';

const useSubscribersForCopyTraders = () => {
  const dispatch = useDispatch();
  const { subscribersForCopyTraders } = useSelector(state => state.appState);

  useEffect(() => {
    dispatch(AppActions.subscribersFetchAction({type: 'copyTrader'}))
    // eslint-disable-next-line
  }, [])

  return { subscribersForCopyTraders }
}

export default useSubscribersForCopyTraders