import React from "react";
import { Switch, Route } from "react-router-dom";
import { Home } from "../../components/Home/Home";
import AdminPanel from "../../components/AdminPanel/AdminPanel";
import LoginPage from "../../components/LoginPage/LoginPage";
import { ROUTES } from "../../registry/ROUTES";

export default class AppBody extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path={ROUTES.HOME}>
          <Home />
        </Route>
        <Route path={ROUTES.ADMIN_PANEL}>
          <AdminPanel />
        </Route>
        <Route path={ROUTES.LOGIN_PAGE}>
          <LoginPage />
        </Route>
      </Switch>
    );
  }
}
