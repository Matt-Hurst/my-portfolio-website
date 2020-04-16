import React, { Children } from 'react';
import Header from "./components/header"
import Home from "./components/home"
import Portfolio from "./components/portfolio"
import Interests from "./components/interests"
import Certificates from "./components/certificates"
import Error from "./components/error"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
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
          <Route path="/certificates" component={Certificates} />
          <Route component={Error} />
        </Switch>
      </main>
    </Router>
  )
}

export default App;