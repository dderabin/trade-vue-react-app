import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AppActions } from '../store/actions';

const useSubscribersForSignalProviders = () => {
  const dispatch = useDispatch();
  const { subscribersForSignalProviders } = useSelector(state => state.appState);

  useEffect(() => {
    dispatch(AppActions.subscribersFetchAction({type: 'signalProvider'}))
    // eslint-disable-next-line
  }, [])

  return { subscribersForSignalProviders }
}

export default useSubscribersForSignalProviders