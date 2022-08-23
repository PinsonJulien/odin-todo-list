// CSS styles.
import '../src/css/reset.css';
import '../src/css/globals.css';
import '../src/css/main.css';
import Layout from './layout/layout';
import Home from './pages/home';
import Menu from './pages/menu';
import Contact from './pages/contact';
import Navbar from './layout/navbar';
import Router, { Route } from './router';

const home = new Home();
const menu = new Menu();
const contact =  new Contact();

const router = new Router([
  {
    name: 'home',
    path: '/',
    component: home,
  },
  {
    name: 'menu',
    path: '/menu',
    component: menu,
  },
  {
    name: 'contact',
    path: '/contact',
    component: contact,
  },
]);

const navbar = new Navbar(
  router
  .getRouterLinks()
  .map(
    (route) => route.getRoot() as HTMLAnchorElement
  )
);

const layout = new Layout(navbar);
document.body.append(layout.getRoot());

layout.getMain().appendChild(router.getRoot());

// By default first page is the first element in menuPages.
router.changeRoute(router.getRouterLinks()[0].getRoute().component);