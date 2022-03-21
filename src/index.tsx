import {render} from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import Router from './routes';

import './index.css';

const rootElement = document.getElementById('root');
render(
  <BrowserRouter>
    <Router />
  </BrowserRouter>,
  rootElement
);
