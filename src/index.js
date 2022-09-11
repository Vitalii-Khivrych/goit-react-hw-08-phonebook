import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import 'modern-normalize';
import { Global, ThemeProvider } from '@emotion/react';

import { store, persistor } from './redux/store';
import { App } from 'components/App';
import { GlobalStyles, theme } from 'styles';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/goit-react-hw-08-phonebook/">
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider theme={theme}>
            <Global styles={GlobalStyles} />
            <App />
          </ThemeProvider>
        </PersistGate>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
