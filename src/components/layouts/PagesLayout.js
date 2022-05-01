import { useEffect } from 'react';
import { useAlert } from 'react-alert';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks';
import { AppActions } from '../../store/actions';
import { Header } from '../Header';
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
  const successMessage = useSelector(state => state.appState.successMessage)
  const failMessage = useSelector(state => state.appState.failMessage)
  const navigate = useNavigate();

  useEffect(() => {
    if (successMessage) {
      alert.success(successMessage);
      dispatch(AppActions.messageConsumedAction())
    } 
  }, [successMessage])

  useEffect(() => {
    if (failMessage) {
      alert.error(failMessage);
      dispatch(AppActions.messageConsumedAction())
    } 
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
