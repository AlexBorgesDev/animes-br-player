import { BrowserRouter, Switch, Route } from "react-router-dom";

/* Pages */
import Home from "./pages/Home";
import Anime from "./pages/Anime";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/anime" component={Anime} />
      </Switch>
    </BrowserRouter>
  );
}
