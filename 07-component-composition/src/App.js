import {useState} from 'react';
import { render } from "react-dom";
import SearchParams from "./SearchParams";
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Details from './Details'
import ThemeContext from './ThemeContext';

const App = () => {
  const theme = useState("darkblue");

  return (
    <ThemeContext.Provider value={theme}>
      <div>
        <Router>
          <header>
            <Link to ="/">
              <h1>Adopt Me!</h1>
            </Link>
          </header>
          <Switch>
            <Route path="/details/:id">
              <Details></Details>
            </Route>
            <Route path="/">
              <SearchParams></SearchParams>
            </Route>
          </Switch>
        </Router>
      </div>
    </ThemeContext.Provider>
  );
};

render(<App />, document.getElementById("root"));
