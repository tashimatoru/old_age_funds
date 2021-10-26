import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Wrap from 'wrap';

const Index    = lazy(() => import('contents/index'));
const Error404 = lazy(() => import('contents/error/error404'));

const Router = props => {
  return (
    <BrowserRouter>
      <Wrap>
        <Suspense
          fallback={
            <div>now loading</div>
          }
        >
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => <Index />}
            />

            <Route
              component={Error404}
            />
          </Switch>
        </Suspense>
      </Wrap>
    </BrowserRouter>
  );
};

// defaultProps
Router.defaultProps = {};

export default Router;
