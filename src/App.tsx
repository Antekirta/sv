import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import "./App.scss";
import { store } from "./store";
import { AppHeader } from "./components/AppHeader/AppHeader";
import AppBody from "./components/AppBody/AppBody";

const mainMenuLinks = [
  { href: "/", title: "Home" },
  { href: "/admin", title: "Sign in" }
];

const App: React.FC = () => {
  const [loginForm, renderLoginForm] = useState(null);

  return (
    <Provider store={store}>
      <div id="modal"></div>

      <Router>
        <section className="app">
          <AppHeader links={mainMenuLinks} />

          <main className="app__main">
            <AppBody />
          </main>
        </section>
      </Router>
    </Provider>
  );
};

export default App;
