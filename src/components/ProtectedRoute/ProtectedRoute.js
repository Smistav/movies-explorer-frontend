import React from 'react';
import { Route, Redirect } from "react-router-dom";
import { MAIN_PAGE } from '../../utils/constants';

const ProtectedRoute = ({ component: Component, ...props }) => {
  const logged = localStorage.getItem("logged");
  return (
    <Route >
      {() =>
        logged ? <Component {...props} /> : <Redirect to={MAIN_PAGE} />
      }
    </Route>
  );
};
export default ProtectedRoute;