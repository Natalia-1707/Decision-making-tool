import './style.css';
import './components/first-page-style.css';
import './components/header/header-styles.css';

import { FirstPage } from './components/first-page';
const firstPage  = new FirstPage();
firstPage.addTitle('Decision Making Tool');
document.body.appendChild(firstPage['container']);