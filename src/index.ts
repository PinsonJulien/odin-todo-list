// CSS styles.
import '../src/css/main.scss';
import { Todo as TodoController } from './controllers/todo';
import Layout from './layout/layout';
import { All } from './pages/todo/all';
import { Today } from './pages/todo/today';
import { Week } from './pages/todo/week';
import Router from './utils/router/router';

// Init the structure
const layout = new Layout();
document.body.appendChild(layout.getRoot());

const router = new Router();
layout.getMain().appendChild(router.getRoot());

const todoController = new TodoController(
  layout.getMenuProjects(),
  router
);

// Set static routes
const menuLinks = router.insert(
  {
    name: 'inbox',
    path: '/',
    page: new All(todoController)
  },
  {
    name: 'today',
    path: '/today',
    page: new Today(todoController)
  },
  {
    name: 'this week',
    path: '/week',
    page: new Week(todoController)
  }
);

layout.getMenu().insert(...menuLinks);

// On start look if the url contains a hash path, or default to '/'.
const hash = router.getHashPath();
if (hash) router.switchRouteByPath(hash);
else router.switchRouteByPath('/');