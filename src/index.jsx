import React from 'react';
import ReactDOM from 'react-dom';
import { QueryCache, ReactQueryCacheProvider } from 'react-query'
import GlobalStyle from "./GlobalStyle";
import Routers from './routes';

const queryCache = new QueryCache()

ReactDOM.render(
  <React.StrictMode>
      <GlobalStyle />
      <ReactQueryCacheProvider queryCache={queryCache}>
          <Routers />
      </ReactQueryCacheProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
