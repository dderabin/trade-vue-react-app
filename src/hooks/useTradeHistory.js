import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AppActions } from '../store/actions';

const useTraderHistory = () => {
  const dispatch = useDispatch();
  const { historyList } = useSelector(state => state.appState);

  useEffect(() => {
    dispatch(AppActions.signalHistoryFetchAction())
  }, [])

  return { historyList }
}

export default useTraderHistory