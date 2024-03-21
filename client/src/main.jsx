import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './Redux/Store.jsx';
import CargadorInicial from './Components/CargadorInicial/CargadorInicial.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <CargadorInicial />
      <App />
    </BrowserRouter>
  </Provider>
);
