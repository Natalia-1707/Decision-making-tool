import './style.css';
import './components/first-page-style.css';
import './components/header/header-styles.css';
import './components/buttons/buttons-style.css';

import { FirstPage } from './components/first-page';
const firstPage = new FirstPage();
firstPage.addTitle('Decision Making Tool');
firstPage.addButton('Add option', 'btn1');
firstPage.addButton('Paste list', 'btn2');
firstPage.addButton('Clear list', 'btn3');
firstPage.addButton('Save list', 'btn4');
firstPage.addButton('Load list', 'btn5');
firstPage.addButton('Start', 'btn6');
document.body.appendChild(firstPage['container']);
