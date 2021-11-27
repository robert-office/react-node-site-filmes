import Cadastro from "pages/cadastro";
import Home from "pages/Home";
import Login from "pages/login";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function Routes() {
    return (
      <BrowserRouter>
        <Switch>
            <Route path="/" exact>
                <Home />
            </Route>
            <Route path="/cadastro" exact>
                <Cadastro />
            </Route>
            <Route path="/login" exact>
                <Login />
            </Route>
        </Switch>
      </BrowserRouter>
    );
  }
  
  export default Routes;