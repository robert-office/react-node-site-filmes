import Cadastro from "pages/cadastro";
import Home from "pages/Home";
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
        </Switch>
      </BrowserRouter>
    );
  }
  
  export default Routes;