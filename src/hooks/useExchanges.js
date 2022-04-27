import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AppActions } from '../store/actions';

const useExchanges = () => {
  const dispatch = useDispatch();
  const exchanges = useSelector(state => state.appState.exchanges);

  useEffect(() => {
    if (exchanges.length === 0) {
      dispatch(AppActions.exchangeFetchAction())
    }
  }, [exchanges])

  return { exchanges }
}

export default useExchanges