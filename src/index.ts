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
    hash: 'home',
    component: home,
  },
  {
    name: 'menu',
    hash: 'menu',
    component: menu,
  },
  {
    name: 'contact',
    hash: 'contact',
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

// Default page is first in router if no hash is in the URL.
// If present, removes the # from it and search for the specific page.
router.changeRoute(
  (window.location.hash)
  ? router.getRouterLinkByHash(window.location.hash.slice(1))
  : router.getRouterLinks()[0]
);