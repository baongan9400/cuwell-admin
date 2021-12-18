import React from "react";
import "./topbar.css";
import { NotificationsNone, Language } from "@mui/icons-material";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import logo from "../../images/logo.png";
import { logoutUserAction } from "redux/actions/login/authAction";
import { useDispatch } from "react-redux";
export default function Topbar() {
  const dispatch = useDispatch();
  const handelLogout = () => {
    dispatch(logoutUserAction());
  };
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">admin</span>
          <img src={logo} alt="" className="logo-img" />
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            {/* <span className="topIconBadge">2</span> */}
          </div>
          <div className="topbarIconContainer">
            <Language />
            {/* <span className="topIconBadge">2</span> */}
          </div>
          <div className="topbarIconContainer" onClick={handelLogout}>
            <ExitToAppIcon />
          </div>
          <img
            src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="topAvatar"
          />
        </div>
      </div>
    </div>
  );
}
