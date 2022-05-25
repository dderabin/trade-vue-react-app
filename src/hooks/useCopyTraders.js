import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AppActions } from '../store/actions';

const useCopyTraders = () => {
  const dispatch = useDispatch();
  const copyTraders = useSelector(state => state.appState.copyTraders);

  useEffect(() => {
    dispatch(AppActions.copyTradersFetchAction())
    
  // eslint-disable-next-line
  }, [])

  return { copyTraders }
}

export default useCopyTraders