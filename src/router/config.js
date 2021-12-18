import React from "react";
import { Route, Redirect } from "react-router-dom";
import Report from "../pages/report";
import { checkJWT } from "../helpers/checkJWT";
import Categories from "../pages/categories/Categories";
import Home from "../pages/home/Home";
import NewUser from "../pages/newUser/NewUser";
import Product from "../pages/product/Product";
import ProductList from "../pages/productList/ProductList";
import User from "../pages/user/User";
import UserList from "../pages/userList/UserList";

export const routeConfig = [
  {
    path: `/`,
    isPrivate: true,
    exact: true,
    component: Home,
  },
  {
    path: `/users`,
    isPrivate: true,
    exact: true,
    component: UserList,
  },
  {
    path: `/user/:userId`,
    isPrivate: true,
    exact: true,
    component: User,
  },
  {
    path: `/newUser`,
    isPrivate: true,
    exact: true,
    component: NewUser,
  },
  {
    path: `/products`,
    isPrivate: true,
    exact: true,
    component: ProductList,
  },
  {
    path: `/product/:productId`,
    isPrivate: true,
    exact: true,
    component: Product,
  },
  {
    path: `/reports`,
    isPrivate: true,
    exact: true,
    component: Report,
  },
  {
    path: `/categories`,
    isPrivate: true,
    exact: true,
    component: Categories,
  },
];

export const RouteWithSubRoutes = (route) => {
  return (
    <Route
      path={route.path}
      exact={route.exact}
      isPrivate={route.isPrivate}
      render={(props) =>
        checkJWT() === false ? (
          <Redirect to="/login" />
        ) : (
          <route.component {...props} />
        )
      }
    />
  );
};
