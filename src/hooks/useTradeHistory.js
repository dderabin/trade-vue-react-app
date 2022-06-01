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

  const {filtered: historyById, editable: editableHistory} = useMemo(() => {
    let filtered = {};
    if (historyList.length > 0) {
      filtered = historyList.reduce((previous, current) => {
        return {...previous, [current._id]: current}
      }, {})
    }
    const editable = historyList.filter(item => item.state.toLowerCase() === 'inposition' || item.state.toLowerCase() === 'ordered')
    return {filtered, editable};
  }, [historyList])

  return { historyList, historyById, editableHistory }
}

export default useTraderHistory