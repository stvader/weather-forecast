import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './index.scss';
import 'antd/dist/antd.css';

import Header from './components/header';
import CityWeatherSection from './components/CitiesWeatherSection';
import Footer from './components/PageFooter';
import CityAddPanel from './components/CityAddPanel';
import { bc } from './utils/bem-cn';

import store from './store';

const b = bc('app');

ReactDOM.render(
  <Provider store={store}>
    <div className={b('wrapper')}>
      <Header />
      <CityAddPanel />
      <CityWeatherSection />
      <Footer />
    </div>
  </Provider>,
  document.getElementById('root'),
);
