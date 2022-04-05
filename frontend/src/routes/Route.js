import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";
import AuthLayout from "~/pages/_layouts/auth";
import DefaultLayout from "~/pages/_layouts/default";
import { store } from "~/store";

export default function RouteWrapper({
  component: Component,
  isPrivate,
  ...rest
}) {
  console.tron.log('routes/Route')
  const signed = store.getState().auth.signed;
  //console.tron.log("Signed: " + Boolean(signed));
  //console.tron.log("isPrivate: " + Boolean(isPrivate));

  if (!signed && isPrivate) {
    console.tron.log('Redirect to="/"');
    return <Redirect to="/" />; 
  }

  if (signed && !isPrivate) {
    //console.tron.log('Redirect to="/dashboard"');
    return <Redirect to="/dashboard" />;
  }

  const Layout = signed ? DefaultLayout : AuthLayout;

  console.tron.log("Layout");

  return (
        <Route
          {...rest}
          render={(props) => (
            <Layout>
              <Component {...props} />
            </Layout>
          )}
        />
  );
}

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
};
