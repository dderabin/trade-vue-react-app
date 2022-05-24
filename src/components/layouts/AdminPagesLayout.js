import React from 'react'
import { AdminSidebar } from "../AdminSidebar";
import { Header } from "../Header";
import "./../../assets/css/defaults.scss";
import "./../../assets/css/logged-user-styles.scss";

export const AdminPagesLayout = ({
  children,
  collapseSidebar,
  handleHamburguerClick,
}) => {
  return (
    <div>
      <div className="wrapper">
        <AdminSidebar collapseSidebar={collapseSidebar} />
        <div className="main">
          <Header 
            handleHamburguerClick={handleHamburguerClick}
          />
          <main className="content">{children}</main>
        </div>
      </div>
    </div>
  );
};
