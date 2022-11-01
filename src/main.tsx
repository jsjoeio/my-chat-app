import React from 'react';
import ReactDOM from 'react-dom/client';
// @ts-ignore -- no types available
import PullToRefresh from 'pulltorefreshjs';
import App from './App';
import './index.css';

PullToRefresh.init({
  mainElement: 'body',
  onRefresh() {
    window.location.reload();
  },
});

const resizeOps = () => {
  // document.documentElement.style.setProperty(
  //   '--vh',
  //   window.innerHeight * 0.01 + 'px'
  // );
  console.log("resize happened")
};

resizeOps();
window.addEventListener('resize', resizeOps);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
