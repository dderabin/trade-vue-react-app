import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AppActions } from '../store/actions';

const useSignalProviders = () => {
  const dispatch = useDispatch();
  const signalProviders = useSelector(state => state.appState.signalProviders);

  useEffect(() => {
    dispatch(AppActions.signalProvidersFetchAction())
  }, [])

  return { signalProviders }
}

export default useSignalProviders