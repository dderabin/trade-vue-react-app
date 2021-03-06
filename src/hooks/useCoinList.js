import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AppActions } from '../store/actions';

const useCoinList = () => {
  const dispatch = useDispatch();
  const coinList = useSelector(state => state.appState.coinList);

  useEffect(() => {
    dispatch(AppActions.exchangeComparisonFetchAction())
    // eslint-disable-next-line
  }, [])

  return { coinList }
}

export default useCoinList