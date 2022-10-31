import React from 'react';
import ReactDOM from 'react-dom/client';
// @ts-ignore
import PullToRefresh from 'pulltorefreshjs';
import App from './App';
import './index.css';

PullToRefresh.init({
  mainElement: 'body',
  onRefresh() {
    window.location.reload();
  },
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
