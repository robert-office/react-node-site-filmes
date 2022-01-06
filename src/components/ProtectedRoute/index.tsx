import { ReactChild, ReactChildren, useContext } from "react";
import { Redirect, Route, RouterProps } from "react-router-dom";
import { UserContext } from "utils/userContext";

interface Props {
  isAuth?: boolean;
  path?: string;
  default?: boolean;
  uri?: string;
  exact?: boolean;
  children: ReactChild | ReactChildren;
}

const ProtectedRoute = ({ children, ...routeProps }: Props) => {
  /// user context
  const { value } = useContext(UserContext);
  /// validation
  const isAuthenticated = value.token == null || undefined ? false : true;

  if (isAuthenticated) {
    return <Route {...routeProps}>
      {children}
    </Route>
  }

  return <Redirect to={"/login"}/>;
}

export default ProtectedRoute;