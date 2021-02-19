import React from 'react';
import { Route, Switch } from 'react-router-dom';

const LzPage1 = React.lazy(() => import('../pages/page1'));
const LzPage2 = React.lazy(() => import('../pages/page2'));
const LzPage3 = React.lazy(() => import('../pages/page3'));

const RouterContainer: React.FC = () => (
  <div className="router-container">
    <React.Suspense fallback={<div>loading...</div>}>
      <Switch>
        <Route path="/page2">
          <LzPage2 />
        </Route>
        <Route path="/page3">
          <LzPage3 />
        </Route>
        <Route path="/">
          <LzPage1 />
        </Route>
      </Switch>
    </React.Suspense>
  </div>
);

export default RouterContainer;
