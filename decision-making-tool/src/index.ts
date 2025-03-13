import './style.css';
import './components/first-page-style.css';
import './components/second-page-style.css';
import './components/header/header-styles.css';
import './components/buttons/buttons-style.css';
import './components/options/options-style.css';
import './components/modal/modal-window-style.css';

import { setPages, navigateToPage, updatePageView } from './components/routes';
import { FirstPage } from './components/first-page';
import { SecondPage } from './components/second-page';
import { AddOptionButton } from './components/buttons/add-option-btn';
import { ClearListButton } from './components/buttons/clear-list-btn';
import { StartButton } from './components/buttons/start-btn';
import { Wheel } from './components/second-page-options/wheel';

const firstPage = new FirstPage();
const secondPage = new SecondPage();
document.body.appendChild(secondPage.getContainer());
setPages(firstPage.getContainer(), secondPage.getContainer());
const wheel = new Wheel();

firstPage.addTitle('Decision Making Tool');
secondPage.addTitle('Decision Making Tool');
firstPage.addOption(wheel);
const addOption = firstPage.addButton('Add option', 'add-option-btn');
firstPage.addButton('Paste list', 'btn2');
const clearListButton = firstPage.addButton('Clear list', 'clear-list');
firstPage.addButton('Save list', 'btn4');
firstPage.addButton('Load list', 'btn5');
const startButton = firstPage.addButton('Start', 'start-btn');

const addOptionHandler = new AddOptionButton(
  firstPage,
  firstPage.getOptionsContainer(),
  wheel
);

addOptionHandler.addEventListenerToButton(addOption);

const clearListHandler = new ClearListButton(
  firstPage.getOptionsContainer(),
  firstPage
);
clearListHandler.addEventListenerToButton(clearListButton);

const startButtonHandler = new StartButton(firstPage, secondPage);
startButtonHandler.addEventListenerToButton(startButton);

document.body.appendChild(firstPage['container']);
document.body.appendChild(secondPage['container']);

navigateToPage('first');
updatePageView();
window.addEventListener('hashchange', updatePageView);
