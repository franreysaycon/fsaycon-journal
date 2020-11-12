import React from 'react';
import ReactDOM from 'react-dom';
import "typeface-cabin";
import { CSSReset, ThemeProvider } from '@chakra-ui/core';
import App from './components/App';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <CSSReset />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
