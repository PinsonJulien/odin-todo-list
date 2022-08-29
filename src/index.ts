// CSS styles.
import '../src/css/main.scss';
import Layout from './layout/layout';

const layout = new Layout();

document.body.appendChild(layout.getRoot());