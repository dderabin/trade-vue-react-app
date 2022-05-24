import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AppActions } from '../store/actions';

const useTraderHistory = () => {
  const dispatch = useDispatch();
  const traderHistory = useSelector(state => state.appState.traderHistory);

  useEffect(() => {
    dispatch(AppActions.signalHistoryFetchAction())
  }, [])

  return { traderHistory }
}

export default useTraderHistory