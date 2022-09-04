// CSS styles.
import '../src/css/main.scss';
import Layout from './layout/layout';
import { MenuItem } from './layout/menu';

const layout = new Layout();
document.body.appendChild(layout.getRoot());

const menuLinks: MenuItem[] = [
  {
    name: 'Inbox',
    path: '/',
    onClick: () => null
  },
  {
    name: 'Today',
    path: '/today',
    onClick: () => null
  },
  {
    name: 'This week',
    path: '/week',
    onClick: () => null
  },
];

layout.getMenu().insert(...menuLinks);


const staticRoutes = [];

// Every reload, static routes will be used with the dynamic ones to generate the router.
// New projects should be find using ".filter", and the one deleted should be found when they reach 0.

// So : 
// -> create / update : check if don't exist, add in project category
// -> delete : check if 0, remove from project category.

// projectView will accept a tag as parameter for the fetch