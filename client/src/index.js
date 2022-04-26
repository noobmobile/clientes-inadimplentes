import { ColorModeScript } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './store';
import { Provider } from 'react-redux';
import { ConfigProvider } from 'antd';
import ptBR from 'antd/lib/locale/pt_BR';

ReactDOM.render(
  <StrictMode>
    <ConfigProvider>
      <Provider store={store}>
        <ColorModeScript />
        <App />
      </Provider>
    </ConfigProvider>
  </StrictMode>,
  document.getElementById('root')
);
