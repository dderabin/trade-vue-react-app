import React, { useEffect } from 'react';
import { useAlert } from 'react-alert';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks';
import { AppActions } from '../../store/actions';
import localStorageHelper from '../../store/localstorageHelper';
import { Header } from '../Header';
import Loading from '../Loading';
import { Sidebar } from '../Sidebar';
import './../../assets/css/defaults.scss';
import './../../assets/css/logged-user-styles.scss';

export const PagesLayout = ({
  children,
  collapseSidebar,
  handleHamburguerClick,
  onOutsideSidebarClickHandler
}) => {
  const { isAuthenticated } = useAuth();
  const alert = useAlert();
  const dispatch = useDispatch();
  const { successMessage, failMessage, loading } = useSelector(state => state.appState)
  const navigate = useNavigate();

  useEffect(() => {
    if (successMessage) {
      alert.success(successMessage);
      dispatch(AppActions.messageConsumedAction())
    } 
    // eslint-disable-next-line
  }, [successMessage])
  
  useEffect(() => {
    if (failMessage) {
      if (failMessage.toLowerCase() === "Authorization failed: jwt expired".toLowerCase()) {
        dispatch(AppActions.refreshTokenAction({refreshToken: localStorageHelper.refreshToken}))
      } else {
        alert.error(failMessage);
      }
      dispatch(AppActions.messageConsumedAction())
    } 
    // eslint-disable-next-line
  }, [failMessage])

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/')
    }
  }, [isAuthenticated, navigate])
  
  const handleLeftPanel = () => {
      let width = window.innerWidth
      if(width < 780) {
        onOutsideSidebarClickHandler()
        console.log("resize console.log sdfewfewf!", width)
      }
      // console.log("resize console.log!", width)
  }

  return (
    <>
      <div className="wrapper">
        {loading && <Loading />}
        <Sidebar collapseSidebar={ collapseSidebar } onOutsideSidebarClickHandler={onOutsideSidebarClickHandler}/>
        <div className="main">
          <Header
            handleHamburguerClick={handleHamburguerClick}
            onOutsideSidebarClickHandler={onOutsideSidebarClickHandler}
          />
          <main className="content" onClick={() => {handleLeftPanel()}}>
            {/* <div onClick={onOutsideSidebarClickHandler}> */}
              {children}
            {/* </div> */}
            
          </main>
        </div>
      </div>
    </>
  );
};
