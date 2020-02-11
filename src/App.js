import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Comments from "../src/components/Comments/Comments";
import './App.css';

function App() {
  return (
    <div>
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Comments} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
