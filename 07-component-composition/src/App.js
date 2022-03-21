import { render } from "react-dom";
import SearchParams from "./SearchParams";
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Details from './Details'
const App = () => {
  return (
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
  );
};

render(<App />, document.getElementById("root"));
