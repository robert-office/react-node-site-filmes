import ProtectedRoute from "components/ProtectedRoute";
import { UserContextComponent } from "components/UserContext";
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
import { BrowserRouter, Route, Switch } from "react-router-dom";

function Routes() {
    return (
        <UserContextComponent>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact>
                        <Home />
                    </Route>

                    { /* DASHBOARD */}
                    <ProtectedRoute path="/dashboard" exact>
                        <DashboardHomePage />
                    </ProtectedRoute>


                    <ProtectedRoute path="/dashboard/settings" exact>
                        <DashboardSettingsPage />
                    </ProtectedRoute>

                    <ProtectedRoute path="/dashboard/favorites" exact>
                        <DashboardFavoritesPage />
                    </ProtectedRoute>

                    <ProtectedRoute path="/dashboard/watchlist" exact>
                        <DashboardWatchlistPage />
                    </ProtectedRoute>

                    { /* CADASTRO E LOGIN */}
                    <Route path="/cadastro" exact>
                        <Cadastro />
                    </Route>
                    <Route path="/login" exact>
                        <Login />
                    </Route>

                    { /* PAGINA DE DETALHAMENTO DO FILME/SERIE */}
                    <Route path="/detalhes/:search/:id" exact>
                        <Detalhes />
                    </Route>

                    { /* PAGINA COM PAGINAMENTO DE CONTEUDO DE SERIES OU FILMES */}
                    <Route path="/todos/:content" exact>
                        <Todos />
                    </Route>

                    {/* ROTA PADRÃO 404 */}
                    <Route path='*' exact={true} component={My404} />
                </Switch>
            </BrowserRouter>
        </UserContextComponent>
    );
}

export default Routes;