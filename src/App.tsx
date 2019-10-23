import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";
import "./App.scss";
import { store } from "./store";
import { Home } from "./components/Home/Home";
import { AdminPanel } from "./components/AdminPanel/AdminPanel";
import { AppHeader, iAppHeaderProps } from "./components/AppHeader/AppHeader";

const mainMenuLinks = [
  { href: "/", title: "Home" },
  { href: "/admin", title: "Sign in" }
];

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <section className="app">
          <AppHeader links={mainMenuLinks} />

          <main className="app__main">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/admin">
                <AdminPanel />
              </Route>
            </Switch>
          </main>
        </section>
      </Router>
    </Provider>
  );
};

export default App;
