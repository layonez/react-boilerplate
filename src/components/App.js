import React, { Component } from "react";
import { hot } from "react-hot-loader";
import { Provider } from "react-redux";
import { Switch, Route } from "react-router-dom";
import { ConnectedRouter } from "react-router-redux";
import { I18nextProvider } from "react-i18next";
import store from "../store";
import history from "../history";
import "styles/main.css";
import i18n from "../i18n";

import LoginPage from "components/pages/LoginPage";
import Administering from "components/pages/Administering";
import Backup from "components/pages/Backup";
import Console from "components/pages/Console";
import Dashboard from "components/pages/Dashboard";
import Monitoring from "components/pages/Monitoring";
import Storage from "components/pages/Storage";
import {
  ADMINISTERING_PAGE_ROUTE,
  BACKUP_PAGE_ROUTE,
  CONSOLE_PAGE_ROUTE,
  DASHBOARD_PAGE_ROUTE,
  MONITORING_PAGE_ROUTE,
  STORAGE_PAGE_ROUTE
} from "constants";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <I18nextProvider i18n={i18n}>
          <ConnectedRouter history={history}>
            <Switch>
              <Route exact path="/" component={LoginPage} />
              <Route
                path={ADMINISTERING_PAGE_ROUTE}
                component={Administering}
              />
              <Route path={BACKUP_PAGE_ROUTE} component={Backup} />
              <Route path={CONSOLE_PAGE_ROUTE} component={Console} />
              <Route path={DASHBOARD_PAGE_ROUTE} component={Dashboard} />
              <Route path={MONITORING_PAGE_ROUTE} component={Monitoring} />
              <Route path={STORAGE_PAGE_ROUTE} component={Storage} />
            </Switch>
          </ConnectedRouter>
        </I18nextProvider>
      </Provider>
    );
  }
}

export default hot(module)(App);
