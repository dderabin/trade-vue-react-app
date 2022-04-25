import { useEffect } from 'react';
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
  useEffect(() => {
    console.log("pagelayout");
  }, [])
  
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
