import Cadastro from "pages/cadastro";
import Home from "pages/Home";
import Login from "pages/login";
import { My404 } from "pages/My40/My404";
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


            {/* ROTA PADRÃO 404 */}
            <Route path='*' exact={true} component={My404} />
        </Switch>
      </BrowserRouter>
    );
  }
  
  export default Routes;