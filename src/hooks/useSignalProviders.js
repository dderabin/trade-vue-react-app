import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AppActions } from '../store/actions';

const useSignalProviders = () => {
  const dispatch = useDispatch();
  const { signalProviders } = useSelector(state => state.appState);

  useEffect(() => {
    dispatch(AppActions.signalProvidersFetchAction())
    // eslint-disable-next-line
  }, [])

  return { signalProviders }
}

export default useSignalProviders