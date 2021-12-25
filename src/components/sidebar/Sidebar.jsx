import "./sidebar.css";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
  CategoryOutlined,
} from "@mui/icons-material";
import { Link, NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <li className="">
              <NavLink
                exact
                activeClassName="sidebarListItemActived"
                to="/"
                className="link sidebarListItem"
              >
                <LineStyle className="sidebarIcon" />
                Home
              </NavLink>
            </li>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <TrendingUp className="sidebarIcon" />
              Sales
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <li className="">
              <NavLink
                exact
                activeClassName="sidebarListItemActived"
                to="/users"
                className="link sidebarListItem"
              >
                <PermIdentity className="sidebarIcon" />
                Users
              </NavLink>
            </li>

            <li className="">
              <NavLink
                exact
                activeClassName="sidebarListItemActived"
                to="/products"
                className="link sidebarListItem"
              >
                <Storefront className="sidebarIcon" />
                Products
              </NavLink>
            </li>
            <li className="sidebarListItem">
              <AttachMoney className="sidebarIcon" />
              Transactions
            </li>

            {/* <li className="">
              <NavLink
                exact
                activeClassName="sidebarListItemActived"
                to="/reports"
                className="link sidebarListItem"
              >
                <BarChart className="sidebarIcon" />
                Reports
              </NavLink>
            </li> */}

            <li className="">
              <NavLink
                exact
                activeClassName="sidebarListItemActived"
                to="/categories"
                className="link sidebarListItem"
              >
                <CategoryOutlined className="sidebarIcon" />
                Categories
              </NavLink>
            </li>
          </ul>
        </div>
        {/* <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <MailOutline className="sidebarIcon" />
              Mail
            </li>
            <li className="sidebarListItem">
              <DynamicFeed className="sidebarIcon" />
              Feedback
            </li>
            <li className="sidebarListItem">
              <ChatBubbleOutline className="sidebarIcon" />
              Messages
            </li>
          </ul>
        </div> */}
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <WorkOutline className="sidebarIcon" />
              Manage
            </li>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <Report className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
