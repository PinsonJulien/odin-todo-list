// CSS styles.
import '../src/css/main.scss';
import { Todo as TodoController } from './controllers/todo';
import Layout from './layout/layout';
import { All } from './pages/todo/all';
import { Today } from './pages/todo/today';
import { Week } from './pages/todo/week';
import HashPath from './utils/hashPath';
import Router from './utils/router/router';

// Init the structure
const layout = new Layout();
document.body.appendChild(layout.root);

const router = new Router();
layout.main.appendChild(router.root);

const todoController = new TodoController(
  layout.menuProjects,
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

layout.menu.insert(...menuLinks);

// On start look if the url contains a hash path, or default to '/'.
const hash = HashPath.get();
if (hash) router.switchRouteByPath(hash);
else router.switchRouteByPath('/');