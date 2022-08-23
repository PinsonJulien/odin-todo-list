// CSS styles.
import '../src/css/reset.css';
import '../src/css/globals.css';
import '../src/css/main.css';
import Layout from './layout/layout';

const layout = new Layout();

document.body.append(layout.getRoot());