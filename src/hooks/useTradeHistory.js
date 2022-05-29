import { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AppActions } from '../store/actions';

const useTraderHistory = () => {
  const dispatch = useDispatch();
  const { historyList } = useSelector(state => state.appState);

  useEffect(() => {
    dispatch(AppActions.signalHistoryFetchAction())
    // eslint-disable-next-line
  }, [])

  const historyById = useMemo(() => {
    let filtered = {};
    if (historyList.length > 0) {
      filtered = historyList.reduce((previous, current) => {
        return {...previous, [current._id]: current}
      }, {})
    }
    return filtered;
  }, [historyList])

  return { historyList, historyById }
}

export default useTraderHistory