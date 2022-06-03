import { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AppActions } from '../store/actions';
import { EXCHANGE_MAP } from '../store/consts';

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

  const csvData = useMemo(() => {
    return historyList.reduce((prev, current) => {
      const {
        _id, 
        state, 
        profitPercent, 
        signalTime, 
        targets, 
        createdBy: { userName: source }, 
        symbol: {from, to},
        signalType,
        exchange,
        stopLoss,
        leverage = null,
        entryPrice = null,
        amount
      } = current;
      let item = [signalTime.split('T')[0]];
      item.push(source);
      item.push(_id)
      item.push(EXCHANGE_MAP[exchange])
      item.push(from + to)
      item.push(signalType.toLowerCase() !== "spot" ? "Futures" : "Spot")
      item.push((signalType.toLowerCase() === "long" || signalType.toLowerCase() === "short") && signalType)
      item.push(leverage ? leverage : '')
      item.push(entryPrice ? 'Limit' : 'Market')
      item.push(entryPrice ? entryPrice : 'Market Price')
      item.push(parseFloat(amount).toFixed(2))
      item.push(stopLoss)
      item.push('100%')
      item.push(state)
      item.push(targets[0].price)
      item.push(targets[0].amount)
      item.push(targets[1]?.price || '')
      item.push(targets[1]?.amount || '')
      item.push(targets[2]?.price || '')
      item.push(targets[2]?.amount || '')
      item.push(targets[3]?.price || '')
      item.push(targets[3]?.amount || '')
      item.push(profitPercent)
      return [...prev, item]
    }, [["Date", "Source", "Order Id", "Exchange", "Pair", "Type", "Position", "Leverage", "Order Type", "Buy Price", "Quantity", "SL Price", "SL Quantity", "State", "TP1 Price", "TP1 Quantity", "TP2 Price", "TP2 Quantity", "TP3 Price", "TP3 Quantity", "TP4 Price", "TP4 Quantity"]])
  }, [historyList])

  return { historyList, historyById, editableHistory, csvData }
}

export default useTraderHistory