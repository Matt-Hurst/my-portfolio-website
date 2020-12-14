import React from 'react';
import Header from "./components/header"
import Home from "./components/home"
import Portfolio from "./components/portfolio"
import Interests from "./components/interests"
import Error from "./components/error"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  return (
    <Router>    
      <main>
        <Header />  
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/interests" component={Interests} />
          <Route component={Error} />
        </Switch>
      </main>
    </Router>
  )
}

export default App;
