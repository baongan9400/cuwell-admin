import React from "react";
import Sidebar from "../components/sidebar/Sidebar";
import Topbar from "../components/topbar/Topbar";

const MainLayout = (props) => {
  return (
    <>
      <Topbar />
      <div className="container">
        <Sidebar />
        {props.children}
      </div>
    </>
  );
};

export default MainLayout;
