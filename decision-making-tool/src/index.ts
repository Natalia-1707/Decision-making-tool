import './style.css';
import './components/first-page-style.css';
import './components/header/header-styles.css';
import './components/buttons/buttons-style.css';
import './components/options/options-style.css';

import { FirstPage } from './components/first-page';
import { AddOptionButton } from './components/buttons/add-option-btn';
import { ClearListButton } from './components/buttons/clear-list-btn';

const firstPage = new FirstPage();
firstPage.addTitle('Decision Making Tool');
firstPage.addOption();
const addOption = firstPage.addButton('Add option', 'add-option-btn');
firstPage.addButton('Paste list', 'btn2');
const clearListButton = firstPage.addButton('Clear list', 'clear-list');
firstPage.addButton('Save list', 'btn4');
firstPage.addButton('Load list', 'btn5');
firstPage.addButton('Start', 'btn6');

const addOptionHandler = new AddOptionButton(
  firstPage,
  firstPage.getOptionsContainer()
);

addOptionHandler.addEventListenerToButton(addOption);

const clearListHandler = new ClearListButton(firstPage.getOptionsContainer());
clearListHandler.addEventListenerToButton(clearListButton);

document.body.appendChild(firstPage['container']);
