import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AppActions } from '../store/actions';

const usePortfolioValues = () => {
  const dispatch = useDispatch();
  const {
    totalTrades,
    totalInvestment,
    profit,
    portfolioValue,
    avgProfit,
    avgLoss,
  } = useSelector(state => state.appState);

  useEffect(() => {
    dispatch(AppActions.portfolioValueFetchAction())
  }, [])

  return { 
    totalTrades,
    totalInvestment,
    profit,
    portfolioValue,
    avgProfit,
    avgLoss 
  }
}

export default usePortfolioValues