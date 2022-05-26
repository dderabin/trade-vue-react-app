import { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AppActions } from '../store/actions';

const useCopyTraders = () => {
  const dispatch = useDispatch();
  const { copyTraders, copyTrader: { subscriptedTo = [] }  } = useSelector(state => state.appState);

  useEffect(() => {
    dispatch(AppActions.copyTradersFetchAction())
    
  // eslint-disable-next-line
  }, [])

  const appliedCopyTraders = useMemo(() => {
    let applied = [...copyTraders]
    if (subscriptedTo.length > 0) {
      const subscriptedToIds = subscriptedTo.map(item => item.userId)
      applied = copyTraders.map(item => ({...item, subscribed: subscriptedToIds.includes(item._id)}))
    }
    return applied
  }, [subscriptedTo, copyTraders])

  return { copyTraders, appliedCopyTraders }
}

export default useCopyTraders