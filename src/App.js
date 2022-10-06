import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Details from "./Details";
import Feed from "./Feed";
import { auth } from "./firebase";
import Footer from "./Footer";
import Login from "./Login";
import Nav from "./Nav";

function App() {
  const [user] = useAuthState(auth);
  const [isUser, SetIsUser] = useState(false);

  return (
    <div>
      {!user ? (
        <Login />
      ) : (
        <Router>
          <Switch>
            <Route exact path="/">
              <div className="app">
                <Nav />
                <Feed />
                <Footer />
              </div>
            </Route>
            <Route path="/detail/:id">
              <Nav />
              <Details />
            </Route>
          </Switch>
        </Router>
      )}
    </div>
  );
}

export default App;
