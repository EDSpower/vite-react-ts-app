import React from 'react';
import { Button } from 'antd';
import { observer } from 'mobx-react';
import { BrowserRouter } from 'react-router-dom';
import Nav from './component/Nav';
import RouterContainer from './router/index';
import globStore from './store/glob';
import './App.scss';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Nav />
        <div className='content'>
          <Button onClick={globStore.add}>+</Button>
          <h3>
            当前值：
            {globStore.count}
          </h3>
          <h3>
            计算属性：
            {globStore.compGet}
          </h3>
          <Button onClick={globStore.los}>-</Button>
        </div>
        <RouterContainer />
      </BrowserRouter>
    </div>
  );
}

export default observer(App);
