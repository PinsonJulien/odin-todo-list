// CSS styles.
import '../src/css/main.scss';
import Layout from './layout/layout';
import Router from './utils/router/router';
import MainView from './views/mainView';
import TodayView from './views/todayView';
import WeekView from './views/weekView';

const layout = new Layout();
document.body.appendChild(layout.getRoot());

const router = new Router();
layout.getMain().appendChild(router.getRoot());

const menuLinks = router.insert(
  {
    name: 'inbox',
    path: '/',
    component: new MainView()
  },
  {
    name: 'today',
    path: '/today',
    component: new TodayView()
  },
  {
    name: 'this week',
    path: '/week',
    component: new WeekView()
  }
);

menuLinks.forEach((link) => {
  layout.getMenu().insert(link);
});

// On start look if the url contains a hash path, or default to '/'.
const hash = router.getHashPath();
if (hash) router.switchRouteByPath(hash);
else router.switchRouteByPath('/');

// notes: 
// Every reload, static routes will be used with the dynamic ones to generate the router.
// New projects should be find using ".filter", and the one deleted should be found when they reach 0.

// So : 
// -> create / update : check if don't exist, add in project category
// -> delete : check if 0, remove from project category.

// projectView will accept a tag as parameter for the fetch