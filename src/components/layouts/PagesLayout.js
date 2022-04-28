import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks';
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
  const navigate = useNavigate();

  useEffect(() => {
    // console.log("pagelayout");
  }, [])

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
