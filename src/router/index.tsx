/*
 * @Author: EDSPower
 * @Email: 766782971@qq.com
 * @Date: 2021-08-25 16:33:47
 * @Description:
 * @LastEditors: EDSPower
 * @LastEditTime: 2022-02-10 14:40:23
 */
import React from 'react';
import { Route, Switch } from 'react-router-dom';

const LzPage1 = React.lazy(() => import('../pages/page1'));
const LzPage2 = React.lazy(() => import('../pages/page2'));
const LzPage3 = React.lazy(() => import('../pages/page3'));
const LzPage4 = React.lazy(() => import('../pages/page4'));
const LzPage5 = React.lazy(() => import('../pages/page5'));
const LzPage6 = React.lazy(() => import('../pages/page6'));
const LzPage7 = React.lazy(() => import('../pages/page7'));
const LzPage8 = React.lazy(() => import('../pages/page8'));
const LzPage9 = React.lazy(() => import('../pages/page9'));
const LzPage10 = React.lazy(() => import('../pages/page10'));
const LzPage11 = React.lazy(() => import('../pages/page11'));
const LzPage12 = React.lazy(() => import('../pages/page12'));

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
        <Route path="/page4">
          <LzPage4 />
        </Route>
        <Route path="/page5">
          <LzPage5 />
        </Route>
        <Route path="/page6">
          <LzPage6 />
        </Route>
        <Route path="/page7">
          <LzPage7 />
        </Route>
        <Route path="/page8">
          <LzPage8 />
        </Route>
        <Route path="/page9">
          <LzPage9 />
        </Route>
        <Route path="/page10">
          <LzPage10 />
        </Route>
        <Route path="/page11">
          <LzPage11 />
        </Route>
        <Route path="/page12">
          <LzPage12 />
        </Route>
        <Route path="/">
          <LzPage1 />
        </Route>
      </Switch>
    </React.Suspense>
  </div>
);

export default RouterContainer;
