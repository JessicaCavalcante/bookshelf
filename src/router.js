import { Home } from './pages/home/index.js';
import { Feed } from './pages/feed/index.js';
import { onNavigate } from './utils/history.js';

const root = document.querySelector('#root');

const routes = {
  '/': Home,
  '/feed': Feed,
};

const renderRoute = () => {
  root.innerHTML = '';
  root.appendChild(routes[window.location.pathname]());
};

document.querySelector('#feed').addEventListener('click', () => {
  onNavigate('/feed');
  renderRoute();
});

document.querySelector('#home').addEventListener('click', () => {
  onNavigate('/');
  renderRoute();
});

window.addEventListener('popstate', () => renderRoute());
window.addEventListener('load', () => renderRoute());
