import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AppActions } from '../store/actions';

const useCoinList = () => {
  const dispatch = useDispatch();
  const coinList = useSelector(state => state.appState.coinList);

  useEffect(() => {
    dispatch(AppActions.exchangeComparisonFetchAction())
  }, [])

  return { coinList }
}

export default useCoinList