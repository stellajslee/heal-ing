import React from 'react';
import Navbar from "./components/navbar/Navbar";
import { HashRouter as Switch, Route } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import './App.css';
import Home from './components/pages/Home';
import Learn2 from './components/pages/Learn2';
import Contact2 from "./components/pages/Contact2";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import LetOut from "./components/pages/LetOut";
import createHistory from "history/createBrowserHistory";

function App() {
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }

  return (
      <>
        <HashRouter history={createHistory({basename: process.env.PUBLIC_URL})}>
          <Navbar />
          <ScrollToTop />
          <Switch>
            <Route path='/' exact component = { Home } />
            <Route path='/learn' component= { Learn2 } />
            <Route path='/about' component= { Contact2 } />
            <Route path='/letout' component= { LetOut } />
          </Switch>
          <Footer></Footer>
        </HashRouter>
      </>
  );
}

export default App;
