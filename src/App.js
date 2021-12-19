import "./App.css";
import { Redirect, Switch, BrowserRouter, Route } from "react-router-dom";
import { routeConfig, RouteWithSubRoutes } from "./router/config";
import Login from "./pages/login/SignIn";
import Toast from "components/Toast";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" component={Login} />
          {routeConfig.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
          <Redirect from="*" to="/" />
        </Switch>
      </BrowserRouter>
      <Toast />
    </div>
  );
}

export default App;
