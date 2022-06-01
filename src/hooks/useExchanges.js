import { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AppActions } from '../store/actions';

const useExchanges = () => {
  const dispatch = useDispatch();
  const exchangePlatforms = useSelector(state => state.appState.exchangePlatforms);

  useEffect(() => {
    dispatch(AppActions.exchangePlatformsFetchAction())
    // eslint-disable-next-line
  }, [])

  const exhchagesList = useMemo(() => {
    return exchangePlatforms.map(item => ({key: item, text: item, value: item}))
  }, [exchangePlatforms])

  return { exchangePlatforms, exhchagesList }
}

export default useExchanges