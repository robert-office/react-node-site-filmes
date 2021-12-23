import Cadastro from "pages/cadastro";
import { DashboardFavoritesPage } from "pages/dashboardFavoritesPage";
import { DashboardHomePage } from "pages/dashboardHomePage";
import { DashboardSettingsPage } from "pages/dashboardSettingsPage";
import { DashboardWatchlistPage } from "pages/dashboardWatchlistPage";
import { Detalhes } from "pages/detalhes";
import Home from "pages/Home";
import Login from "pages/login";
import { My404 } from "pages/My40/My404";
import Todos from "pages/todos";
import {  BrowserRouter, Route, Switch } from "react-router-dom";

function Routes() {
    return (
      <BrowserRouter>
        <Switch>
            <Route path="/" exact>
                <Home />
            </Route>

            <Route path="/dashboard" exact>
                <DashboardHomePage />
            </Route>

            <Route path="/dashboard/settings" exact>
                <DashboardSettingsPage />
            </Route>

            <Route path="/dashboard/favorites" exact>
                <DashboardFavoritesPage />
            </Route>

            <Route path="/dashboard/watchlist" exact>
                <DashboardWatchlistPage />
            </Route>


            <Route path="/cadastro" exact>
                <Cadastro />
            </Route>
            <Route path="/login" exact>
                <Login />
            </Route>

            <Route path="/detalhes/:search/:id" exact>
                <Detalhes />
            </Route>
                
            
            <Route path="/todos/:content" exact>
                <Todos/>
            </Route>

            {/* ROTA PADRÃO 404 */}
            <Route path='*' exact={true} component={My404} />
        </Switch>
      </BrowserRouter>
    );
  }
  
  export default Routes;