import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AppActions } from '../store/actions';

const useExchanges = () => {
  const dispatch = useDispatch();
  const exchangePlatforms = useSelector(state => state.appState.exchangePlatforms);

  useEffect(() => {
    dispatch(AppActions.exchangePlatformsFetchAction())
    // eslint-disable-next-line
  }, [])

  return { exchangePlatforms }
}

export default useExchanges