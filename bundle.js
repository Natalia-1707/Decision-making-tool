/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/buttons/add-option-btn.ts":
/*!**************************************************!*\
  !*** ./src/components/buttons/add-option-btn.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddOptionButton: () => (/* binding */ AddOptionButton)
/* harmony export */ });
/* harmony import */ var _options_options__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../options/options */ "./src/components/options/options.ts");
/* harmony import */ var _options_delete_btn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../options/delete-btn */ "./src/components/options/delete-btn.ts");


class AddOptionButton {
    optionsContainer;
    idNumber = 1;
    firstPage;
    constructor(firstPage, optionsContainer) {
        this.firstPage = firstPage;
        this.optionsContainer = optionsContainer;
    }
    addEventListenerToButton(button, wheel) {
        button.addEventListener('click', () => {
            const deleteHandler = new _options_delete_btn__WEBPACK_IMPORTED_MODULE_1__.DeleteOptionButton(this.firstPage);
            const option = new _options_options__WEBPACK_IMPORTED_MODULE_0__.Options(this.firstPage.getNextId(), deleteHandler, this.firstPage, wheel);
            this.optionsContainer.appendChild(option.option);
            this.firstPage.getOptionsList().push(option);
        });
    }
}


/***/ }),

/***/ "./src/components/buttons/back-btn.ts":
/*!********************************************!*\
  !*** ./src/components/buttons/back-btn.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BackButton: () => (/* binding */ BackButton)
/* harmony export */ });
/* harmony import */ var _second_page_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../second-page-style.css */ "./src/components/second-page-style.css");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../routes */ "./src/components/routes.ts");


class BackButton {
    secondPage;
    firstPage;
    button;
    constructor(secondPage, firstPage) {
        this.secondPage = secondPage;
        this.firstPage = firstPage;
        this.button = document.createElement('button');
        this.button.classList.add('buttons-second-page');
        this.button.textContent = 'Back';
        this.addEventListeners();
    }
    addEventListeners() {
        this.button.addEventListener('click', this.navigateBack.bind(this));
    }
    navigateBack() {
        (0,_routes__WEBPACK_IMPORTED_MODULE_1__.navigateToPage)('first');
    }
    getButton() {
        return this.button;
    }
}


/***/ }),

/***/ "./src/components/buttons/buttons-create.ts":
/*!**************************************************!*\
  !*** ./src/components/buttons/buttons-create.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Button: () => (/* binding */ Button)
/* harmony export */ });
class Button {
    button;
    constructor(text, id) {
        this.button = document.createElement('button');
        this.button.textContent = text;
        this.button.id = id;
        this.button.classList.add('buttons');
    }
    getButton() {
        return this.button;
    }
}


/***/ }),

/***/ "./src/components/buttons/buttons-style.css":
/*!**************************************************!*\
  !*** ./src/components/buttons/buttons-style.css ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/buttons/clear-list-btn.ts":
/*!**************************************************!*\
  !*** ./src/components/buttons/clear-list-btn.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ClearListButton: () => (/* binding */ ClearListButton)
/* harmony export */ });
class ClearListButton {
    optionsContainer;
    firstPage;
    constructor(optionsContainer, firstPage) {
        this.optionsContainer = optionsContainer;
        this.firstPage = firstPage;
    }
    addEventListenerToButton(button) {
        button.addEventListener('click', () => {
            this.deleteAll();
        });
    }
    deleteAll() {
        while (this.optionsContainer.firstChild) {
            this.optionsContainer.firstChild.remove();
        }
        this.firstPage.resetIdCounter();
    }
}


/***/ }),

/***/ "./src/components/buttons/play-btn.ts":
/*!********************************************!*\
  !*** ./src/components/buttons/play-btn.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PlayButton: () => (/* binding */ PlayButton)
/* harmony export */ });
/* harmony import */ var _second_page_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../second-page-style.css */ "./src/components/second-page-style.css");
/* harmony import */ var _second_page_options_notification__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../second-page-options/notification */ "./src/components/second-page-options/notification.ts");


class PlayButton {
    button;
    duration;
    wheel;
    pickedOption;
    notification;
    backButton;
    soundButton;
    constructor(duration, wheel, pickedOption, backButton, soundButton) {
        this.button = document.createElement('button');
        this.button.classList.add('buttons-second-page');
        this.button.textContent = 'GO';
        this.duration = duration;
        this.wheel = wheel;
        this.pickedOption = pickedOption;
        this.notification = new _second_page_options_notification__WEBPACK_IMPORTED_MODULE_1__.Notification();
        this.backButton = backButton;
        this.soundButton = soundButton;
        this.button.addEventListener('click', () => this.startSpin());
    }
    getButton() {
        return this.button;
    }
    startSpin() {
        const duration = this.duration.getDurationValue();
        if (!duration || duration < 5 || duration > 30) {
            this.notification.open();
            return;
        }
        this.button.classList.add('disabled');
        this.button.disabled = true;
        this.backButton.getButton().disabled = true;
        this.soundButton.setDisabled(true);
        this.duration.setDisabled(true);
        console.log(`Запускаем колесо на ${duration} секунд`);
        this.wheel.startSpin(duration, (option) => {
            this.pickedOption.updateText(option);
        });
        setTimeout(() => {
            this.button.classList.remove('disabled');
            this.button.disabled = false;
            this.backButton.getButton().disabled = false;
            this.soundButton.setDisabled(false);
            this.duration.setDisabled(false);
            if (this.soundButton.isSoundEnabled()) {
                const audio = new Audio('audio/audio.mp3');
                audio.play();
            }
        }, duration * 1000);
    }
}


/***/ }),

/***/ "./src/components/buttons/sound-btn.ts":
/*!*********************************************!*\
  !*** ./src/components/buttons/sound-btn.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SoundButton: () => (/* binding */ SoundButton)
/* harmony export */ });
/* harmony import */ var _second_page_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../second-page-style.css */ "./src/components/second-page-style.css");

class SoundButton {
    onButton;
    offButton;
    isSoundOn;
    constructor() {
        this.isSoundOn = true;
        this.onButton = document.createElement('i');
        this.onButton.classList.add('fa-solid', 'fa-volume-high', 'sound-btn');
        this.offButton = document.createElement('i');
        this.offButton.classList.add('fa-solid', 'fa-volume-xmark', 'sound-btn');
        this.offButton.style.display = 'none';
        this.addEventListeners();
    }
    addEventListeners() {
        this.onButton.addEventListener('click', () => this.toggleSound());
        this.offButton.addEventListener('click', () => this.toggleSound());
    }
    toggleSound() {
        this.isSoundOn = !this.isSoundOn;
        if (this.isSoundOn) {
            this.onButton.style.display = 'flex';
            this.offButton.style.display = 'none';
        }
        else {
            this.onButton.style.display = 'none';
            this.offButton.style.display = 'flex';
        }
    }
    setDisabled(isDisabled) {
        if (isDisabled) {
            this.onButton.classList.add('disabled');
            this.offButton.classList.add('disabled');
        }
        else {
            this.onButton.classList.remove('disabled');
            this.offButton.classList.remove('disabled');
        }
    }
    isSoundEnabled() {
        return this.isSoundOn;
    }
    getOnButton() {
        return this.onButton;
    }
    getOffButton() {
        return this.offButton;
    }
}


/***/ }),

/***/ "./src/components/buttons/start-btn.ts":
/*!*********************************************!*\
  !*** ./src/components/buttons/start-btn.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StartButton: () => (/* binding */ StartButton)
/* harmony export */ });
/* harmony import */ var _modal_modal_window_start_btn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modal/modal-window-start-btn */ "./src/components/modal/modal-window-start-btn.ts");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../routes */ "./src/components/routes.ts");


class StartButton {
    firstPage;
    secondPage;
    constructor(firstPage, secondPage) {
        this.firstPage = firstPage;
        this.secondPage = secondPage;
    }
    addEventListenerToButton(button) {
        button.addEventListener('click', () => {
            const optionsContainer = this.firstPage.getOptionsContainer();
            const options = this.firstPage.getOptionsList();
            const options2 = optionsContainer.children;
            if (options2.length < 2) {
                const modal = new _modal_modal_window_start_btn__WEBPACK_IMPORTED_MODULE_0__.ModalWindow();
                modal.open();
                return;
            }
            let isValid = true;
            for (const option of options) {
                const titleValue = option.getTitle().trim();
                const weightValue = option.getWeight();
                if (!titleValue || isNaN(weightValue) || weightValue <= 0) {
                    isValid = false;
                    break;
                }
            }
            if (isValid) {
                (0,_routes__WEBPACK_IMPORTED_MODULE_1__.navigateToPage)('second');
            }
            else {
                const modal = new _modal_modal_window_start_btn__WEBPACK_IMPORTED_MODULE_0__.ModalWindow();
                modal.open();
            }
        });
    }
}


/***/ }),

/***/ "./src/components/first-page-style.css":
/*!*********************************************!*\
  !*** ./src/components/first-page-style.css ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/first-page.ts":
/*!**************************************!*\
  !*** ./src/components/first-page.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FirstPage: () => (/* binding */ FirstPage)
/* harmony export */ });
/* harmony import */ var _header_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header/header */ "./src/components/header/header.ts");
/* harmony import */ var _buttons_buttons_create__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buttons/buttons-create */ "./src/components/buttons/buttons-create.ts");
/* harmony import */ var _options_options__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./options/options */ "./src/components/options/options.ts");
/* harmony import */ var _options_delete_btn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./options/delete-btn */ "./src/components/options/delete-btn.ts");




class FirstPage {
    container;
    optionsContainer;
    currentId = 1;
    optionsList = [];
    secondPage;
    constructor(secondPage) {
        this.container = document.createElement('div');
        this.container.classList.add('container', 'first-page');
        this.optionsContainer = document.createElement('div');
        this.optionsContainer.classList.add('options-container');
        this.secondPage = secondPage;
    }
    getContainer() {
        return this.container;
    }
    addTitle(titleText) {
        const title = new _header_header__WEBPACK_IMPORTED_MODULE_0__.Header(titleText);
        this.container.appendChild(title.header);
    }
    getNextId() {
        return this.currentId++;
    }
    resetIdCounter() {
        this.currentId = 1;
        this.optionsList.length = 0;
    }
    addOption(wheel) {
        const idNumber = this.getNextId();
        const deleteHandler = new _options_delete_btn__WEBPACK_IMPORTED_MODULE_3__.DeleteOptionButton(this);
        const option = new _options_options__WEBPACK_IMPORTED_MODULE_2__.Options(idNumber, deleteHandler, this, wheel);
        this.container.appendChild(this.optionsContainer);
        this.optionsList.push(option);
        this.optionsContainer.appendChild(option.option);
        this.updateWheel(wheel);
    }
    addButton(text, id) {
        const button = new _buttons_buttons_create__WEBPACK_IMPORTED_MODULE_1__.Button(text, id);
        this.container.appendChild(button.button);
        return button.button;
    }
    getOptionsContainer() {
        return this.optionsContainer;
    }
    getOptionsList() {
        return this.optionsList;
    }
    updateWheel(wheel) {
        const options = this.optionsList
            .map((option) => ({
            title: option.getTitle(),
            weight: option.getWeight(),
        }))
            .filter((option) => option.title !== '' && !isNaN(option.weight) && option.weight > 0);
        this.secondPage.updateWheel(options);
    }
}


/***/ }),

/***/ "./src/components/header/header-styles.css":
/*!*************************************************!*\
  !*** ./src/components/header/header-styles.css ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/header/header.ts":
/*!*****************************************!*\
  !*** ./src/components/header/header.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Header: () => (/* binding */ Header)
/* harmony export */ });
class Header {
    header;
    constructor(text) {
        this.header = document.createElement('h1');
        this.header.textContent = 'Decision Making Tool';
        this.header.classList.add('header');
    }
    getElement() {
        return this.header;
    }
}


/***/ }),

/***/ "./src/components/modal/modal-window-start-btn.ts":
/*!********************************************************!*\
  !*** ./src/components/modal/modal-window-start-btn.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ModalWindow: () => (/* binding */ ModalWindow)
/* harmony export */ });
class ModalWindow {
    modalContainer;
    modal;
    closeButton;
    static messageFirst = 'You must add at least 2 valid options.';
    static messageSecond = 'An option is considered valid if its title is not empty and its weight is greater than 0.';
    constructor() {
        this.modalContainer = document.createElement('div');
        this.modalContainer.classList.add('modal-container');
        this.modal = document.createElement('dialog');
        this.modal.classList.add('modal-window');
        this.closeButton = document.createElement('i');
        this.closeButton.classList.add('fa-regular', 'fa-circle-xmark', 'modal-cancel-btn');
        const content = document.createElement('div');
        content.classList.add('modal-content');
        const messageFirstLine = document.createElement('div');
        messageFirstLine.textContent = ModalWindow.messageFirst;
        const messageSecondLine = document.createElement('div');
        messageSecondLine.textContent = ModalWindow.messageSecond;
        content.appendChild(messageFirstLine);
        content.appendChild(messageSecondLine);
        this.modal.append(content, this.closeButton);
        this.modalContainer.appendChild(this.modal);
        document.body.appendChild(this.modalContainer);
        this.addEventListeners();
    }
    addEventListeners() {
        this.closeButton.addEventListener('click', () => this.close());
        this.modalContainer.addEventListener('click', (event) => {
            if (event.target === this.modalContainer)
                this.close();
        });
        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape' && this.modalContainer)
                this.close();
        });
    }
    open() {
        this.modal.style.display = 'flex';
        this.modalContainer.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
    close() {
        this.modal.style.display = 'none';
        this.modalContainer.style.display = 'none';
        document.body.style.overflow = '';
        this.modalContainer.remove();
    }
    getModal() {
        return this.modal;
    }
}


/***/ }),

/***/ "./src/components/modal/modal-window-style.css":
/*!*****************************************************!*\
  !*** ./src/components/modal/modal-window-style.css ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/options/delete-btn.ts":
/*!**********************************************!*\
  !*** ./src/components/options/delete-btn.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DeleteOptionButton: () => (/* binding */ DeleteOptionButton)
/* harmony export */ });
class DeleteOptionButton {
    firstPage;
    constructor(firstPage) {
        this.firstPage = firstPage;
    }
    addEventListenerToButton(button, optionElement) {
        button.addEventListener('click', () => {
            this.deleteOption(optionElement);
        });
    }
    deleteOption(optionElement) {
        const optionsList = this.firstPage.getOptionsList();
        this.firstPage.getOptionsList().splice(optionsList.findIndex((o) => o.option === optionElement), 1);
        optionElement.remove();
    }
}


/***/ }),

/***/ "./src/components/options/options-style.css":
/*!**************************************************!*\
  !*** ./src/components/options/options-style.css ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/options/options.ts":
/*!*******************************************!*\
  !*** ./src/components/options/options.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Options: () => (/* binding */ Options)
/* harmony export */ });
class Options {
    option;
    inputTitle;
    inputWeight;
    deleteButton;
    firstPage;
    wheel;
    id;
    constructor(idNumber, deleteHandler, firstPage, wheel) {
        this.id = idNumber;
        this.firstPage = firstPage;
        this.wheel = wheel;
        this.option = document.createElement('div');
        this.option.classList.add('option-div');
        const optionId = document.createElement('div');
        optionId.classList.add('option-id-div');
        optionId.textContent = `#${idNumber}`;
        this.inputTitle = document.createElement('input');
        this.inputTitle.type = 'text';
        this.inputTitle.placeholder = 'Title';
        this.inputTitle.classList.add('option-input-title');
        this.inputTitle.addEventListener('blur', () => {
            firstPage.updateWheel(this.wheel);
        });
        this.inputWeight = document.createElement('input');
        this.inputWeight.type = 'number';
        this.inputWeight.placeholder = 'Weight';
        this.inputWeight.min = '0';
        this.inputWeight.step = '0.01';
        this.inputWeight.classList.add('option-input-weight');
        this.inputWeight.addEventListener('blur', () => {
            firstPage.updateWheel(this.wheel);
        });
        this.deleteButton = document.createElement('button');
        this.deleteButton.textContent = 'Delete';
        this.deleteButton.classList.add('option-button');
        deleteHandler.addEventListenerToButton(this.deleteButton, this.option);
        this.option.appendChild(optionId);
        this.option.appendChild(this.inputTitle);
        this.option.appendChild(this.inputWeight);
        this.option.appendChild(this.deleteButton);
        setTimeout(() => {
            this.inputTitle.focus();
        }, 0);
    }
    getId() {
        return this.id;
    }
    getTitle() {
        const title = this.inputTitle.value.trim();
        return title;
    }
    getWeight() {
        const weight = parseFloat(this.inputWeight.value);
        return weight;
    }
}


/***/ }),

/***/ "./src/components/routes.ts":
/*!**********************************!*\
  !*** ./src/components/routes.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   navigateToPage: () => (/* binding */ navigateToPage),
/* harmony export */   routes: () => (/* binding */ routes),
/* harmony export */   setPages: () => (/* binding */ setPages),
/* harmony export */   updatePageView: () => (/* binding */ updatePageView)
/* harmony export */ });
const routes = {
    firstPage: '#options',
    secondPage: '#decision-picker',
};
let firstPage = null;
let secondPage = null;
function setPages(first, second) {
    firstPage = first;
    secondPage = second;
}
function navigateToPage(page) {
    window.location.hash = routes[`${page}Page`];
    updatePageView();
}
function updatePageView() {
    const hash = window.location.hash;
    if (hash === routes.firstPage) {
        if (firstPage)
            firstPage.style.display = 'flex';
        if (secondPage)
            secondPage.style.display = 'none';
    }
    else if (hash === routes.secondPage) {
        if (firstPage)
            firstPage.style.display = 'none';
        if (secondPage)
            secondPage.style.display = 'flex';
    }
}
window.addEventListener('hashchange', updatePageView);
document.addEventListener('DOMContentLoaded', updatePageView);


/***/ }),

/***/ "./src/components/second-page-options/duration.ts":
/*!********************************************************!*\
  !*** ./src/components/second-page-options/duration.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Duration: () => (/* binding */ Duration)
/* harmony export */ });
/* harmony import */ var _second_page_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../second-page-style.css */ "./src/components/second-page-style.css");

class Duration {
    durationDiv;
    durationIcon;
    inputDuration;
    constructor() {
        this.durationDiv = document.createElement('div');
        this.durationDiv.classList.add('duration-div');
        this.durationIcon = document.createElement('i');
        this.durationIcon.classList.add('fa-solid', 'fa-clock', 'duration-icon');
        this.inputDuration = document.createElement('input');
        this.inputDuration.type = 'number';
        this.inputDuration.placeholder = 'sec';
        this.inputDuration.classList.add('input-duration');
        this.inputDuration.value = '10';
        this.inputDuration.min = '5';
        this.inputDuration.max = '30';
        this.inputDuration.addEventListener('input', () => {
            console.log(this.getDurationValue());
        });
        this.durationDiv.appendChild(this.durationIcon);
        this.durationDiv.appendChild(this.inputDuration);
    }
    setDisabled(isDisabled) {
        this.inputDuration.disabled = isDisabled;
        if (isDisabled) {
            this.durationIcon.style.opacity = '0.5';
            this.durationIcon.style.pointerEvents = 'none';
        }
        else {
            this.durationIcon.style.opacity = '1';
            this.durationIcon.style.pointerEvents = 'auto';
        }
    }
    getDurationValue() {
        const value = this.inputDuration.value;
        console.log('Полученное значение из поля ввода: ', value);
        return parseInt(value, 10);
    }
    getDuration() {
        return this.durationDiv;
    }
}


/***/ }),

/***/ "./src/components/second-page-options/notification-style.css":
/*!*******************************************************************!*\
  !*** ./src/components/second-page-options/notification-style.css ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/second-page-options/notification.ts":
/*!************************************************************!*\
  !*** ./src/components/second-page-options/notification.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Notification: () => (/* binding */ Notification)
/* harmony export */ });
class Notification {
    notification;
    closeButton;
    static notificationFirst = 'Fill in the field.';
    static notificationSecond = 'Duration must be between 5 and 30 seconds.';
    constructor() {
        this.notification = document.createElement('dialog');
        this.notification.classList.add('notification-window');
        this.closeButton = document.createElement('i');
        this.closeButton.classList.add('fa-regular', 'fa-circle-xmark', 'modal-cancel-btn');
        const content = document.createElement('div');
        content.classList.add('notification');
        const notificationFirstLine = document.createElement('div');
        notificationFirstLine.textContent = Notification.notificationFirst;
        const notificationSecondLine = document.createElement('div');
        notificationSecondLine.textContent = Notification.notificationSecond;
        content.appendChild(notificationFirstLine);
        content.appendChild(notificationSecondLine);
        this.notification.append(content, this.closeButton);
        document.body.appendChild(this.notification);
        this.addEventListeners();
    }
    addEventListeners() {
        this.closeButton.addEventListener('click', () => this.close());
        this.notification.addEventListener('click', (event) => {
            if (event.target === this.notification)
                this.close();
        });
        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape' && this.notification)
                this.close();
        });
    }
    open() {
        this.notification.style.display = 'flex';
        this.notification.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
    close() {
        this.notification.style.display = 'none';
        this.notification.style.display = 'none';
        document.body.style.overflow = '';
    }
    getNotification() {
        return this.notification;
    }
}


/***/ }),

/***/ "./src/components/second-page-options/picked-option.ts":
/*!*************************************************************!*\
  !*** ./src/components/second-page-options/picked-option.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PickedOption: () => (/* binding */ PickedOption)
/* harmony export */ });
/* harmony import */ var _second_page_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../second-page-style.css */ "./src/components/second-page-style.css");

class PickedOption {
    inputPickedOption;
    constructor() {
        this.inputPickedOption = document.createElement('input');
        this.inputPickedOption.type = 'text';
        this.inputPickedOption.placeholder = 'PRESS GO BUTTON TO START';
        this.inputPickedOption.classList.add('input-picked-option');
        this.inputPickedOption.readOnly = true;
    }
    getPickedOption() {
        return this.inputPickedOption;
    }
    updateText(newText) {
        this.inputPickedOption.value = newText;
    }
}


/***/ }),

/***/ "./src/components/second-page-options/wheel.ts":
/*!*****************************************************!*\
  !*** ./src/components/second-page-options/wheel.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Wheel: () => (/* binding */ Wheel)
/* harmony export */ });
class Wheel {
    canvas;
    ctx;
    options = [];
    spinning = false;
    canvasSize;
    constructor() {
        this.canvas = document.createElement('canvas');
        this.canvas.classList.add('wheel-canvas');
        this.canvasSize = Math.min(window.innerWidth, 500);
        this.canvas.width = this.canvasSize;
        this.canvas.height = this.canvasSize;
        this.ctx = this.canvas.getContext('2d');
        if (!this.ctx) {
            throw new Error('Не удалось получить контекст канваса');
        }
        window.addEventListener('resize', this.handleResize.bind(this));
    }
    getWheel() {
        return this.canvas;
    }
    handleResize() {
        this.canvasSize = Math.min(window.innerWidth, 500);
        this.canvas.width = this.canvasSize;
        this.canvas.height = this.canvasSize;
        this.drawWheel(0);
    }
    setOptions(options) {
        this.options = options.map((option) => ({
            ...option,
            color: this.getRandomColor(),
        }));
        this.drawWheel(0);
    }
    easeInOut(t) {
        if (t < 0.5) {
            return 8 * t * t * t;
        }
        else {
            return 1 - Math.pow(-2 * t + 2, 5) / 2;
        }
    }
    startSpin(duration, updatePickedOption) {
        const totalRotation = Math.random() * 360 + 1800;
        const endAngle = totalRotation * (Math.PI / 180);
        const startTime = Date.now();
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        const spinAnimation = () => {
            const elapsedTime = Date.now() - startTime;
            const progress = Math.min(elapsedTime / (duration * 1000), 1);
            const easedProgress = this.easeInOut(progress);
            const currentAngle = easedProgress * endAngle;
            this.drawWheel(currentAngle);
            if (progress < 1) {
                requestAnimationFrame(spinAnimation);
            }
            else {
                this.spinning = false;
                console.log('Остановилось колесо');
            }
        };
        this.spinning = true;
        spinAnimation();
    }
    drawWheel(angle) {
        if (this.options.length === 0)
            return;
        const ctx = this.ctx;
        const totalWeight = this.options.reduce((sum, { weight }) => sum + weight, 0);
        let currentAngle = angle;
        const [centerX, centerY] = [
            this.canvas.width / 2,
            this.canvas.height / 2 + 10,
        ];
        const radius = (this.canvas.width / 2) * 0.9;
        console.log('Рисуем колесо с опциями:', this.options);
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
        ctx.fillStyle = '#f0f0f0';
        ctx.fill();
        ctx.strokeStyle = '#003319';
        ctx.lineWidth = 5;
        ctx.stroke();
        this.options.forEach(({ title, weight, color }) => {
            const sliceAngle = (weight / totalWeight) * 2 * Math.PI;
            ctx.beginPath();
            ctx.moveTo(centerX, centerY);
            ctx.arc(centerX, centerY, radius, currentAngle, currentAngle + sliceAngle);
            ctx.fillStyle = color;
            ctx.fill();
            ctx.lineTo(centerX + radius * Math.cos(currentAngle + sliceAngle), centerY + radius * Math.sin(currentAngle + sliceAngle));
            ctx.strokeStyle = '#ffffff';
            ctx.lineWidth = 2;
            ctx.stroke();
            if (sliceAngle >= Math.PI / 12) {
                const textAngle = currentAngle + sliceAngle / 2;
                const textRadius = radius * 0.5;
                const maxChars = Math.floor(sliceAngle / (Math.PI / 20));
                const shortedTitle = title.length > maxChars ? title.slice(0, maxChars) + '…' : title;
                ctx.save();
                ctx.translate(centerX, centerY);
                ctx.rotate(textAngle);
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillStyle = '#ffffff';
                ctx.font = '1.2rem Kanit';
                ctx.fillText(shortedTitle, textRadius, 0);
                ctx.restore();
            }
            currentAngle += sliceAngle;
        });
        const centerRadius = radius * 0.1;
        ctx.beginPath();
        ctx.arc(centerX, centerY, centerRadius, 0, Math.PI * 2);
        ctx.fillStyle = '#003319';
        ctx.fill();
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 3;
        ctx.stroke();
        this.drawCursor(centerX, centerY, radius);
    }
    drawCursor(centerX, centerY, radius) {
        const cursorSize = 40;
        const cursorX = centerX;
        const cursorY = centerY - radius - cursorSize / 1.5;
        this.ctx.beginPath();
        this.ctx.moveTo(cursorX, cursorY + cursorSize);
        this.ctx.lineTo(cursorX - cursorSize / 2, cursorY);
        this.ctx.lineTo(cursorX + cursorSize / 2, cursorY);
        this.ctx.closePath();
        this.ctx.fillStyle = '#ffffcc';
        this.ctx.fill();
        this.ctx.strokeStyle = '#003319';
        this.ctx.lineWidth = 3;
        this.ctx.stroke();
    }
    getRandomColor() {
        return `#${Math.floor(Math.random() * 16777215)
            .toString(16)
            .padStart(6, '0')}`;
    }
}


/***/ }),

/***/ "./src/components/second-page-style.css":
/*!**********************************************!*\
  !*** ./src/components/second-page-style.css ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/second-page.ts":
/*!***************************************!*\
  !*** ./src/components/second-page.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SecondPage: () => (/* binding */ SecondPage)
/* harmony export */ });
/* harmony import */ var _header_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header/header */ "./src/components/header/header.ts");
/* harmony import */ var _buttons_back_btn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buttons/back-btn */ "./src/components/buttons/back-btn.ts");
/* harmony import */ var _buttons_sound_btn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./buttons/sound-btn */ "./src/components/buttons/sound-btn.ts");
/* harmony import */ var _second_page_options_duration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./second-page-options/duration */ "./src/components/second-page-options/duration.ts");
/* harmony import */ var _buttons_play_btn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./buttons/play-btn */ "./src/components/buttons/play-btn.ts");
/* harmony import */ var _second_page_options_picked_option__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./second-page-options/picked-option */ "./src/components/second-page-options/picked-option.ts");
/* harmony import */ var _second_page_options_wheel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./second-page-options/wheel */ "./src/components/second-page-options/wheel.ts");







class SecondPage {
    container;
    buttonsContainer;
    topButtonsContainer;
    backButton;
    soundButton;
    duration;
    playButton;
    pickedOption;
    wheel;
    constructor() {
        this.container = document.createElement('div');
        this.container.classList.add('container', 'second-page');
        this.topButtonsContainer = document.createElement('div');
        this.topButtonsContainer.classList.add('top-buttons-container');
        this.buttonsContainer = document.createElement('div');
        this.buttonsContainer.classList.add('buttons-container');
        this.backButton = new _buttons_back_btn__WEBPACK_IMPORTED_MODULE_1__.BackButton(this.container, this.container);
        this.topButtonsContainer.appendChild(this.backButton.getButton());
        this.container.appendChild(this.buttonsContainer);
        this.soundButton = new _buttons_sound_btn__WEBPACK_IMPORTED_MODULE_2__.SoundButton();
        this.topButtonsContainer.appendChild(this.soundButton.getOnButton());
        this.topButtonsContainer.appendChild(this.soundButton.getOffButton());
        this.duration = new _second_page_options_duration__WEBPACK_IMPORTED_MODULE_3__.Duration();
        this.topButtonsContainer.appendChild(this.duration.getDuration());
        this.wheel = new _second_page_options_wheel__WEBPACK_IMPORTED_MODULE_6__.Wheel();
        this.pickedOption = new _second_page_options_picked_option__WEBPACK_IMPORTED_MODULE_5__.PickedOption();
        this.playButton = new _buttons_play_btn__WEBPACK_IMPORTED_MODULE_4__.PlayButton(this.duration, this.wheel, this.pickedOption, this.backButton, this.soundButton);
        this.buttonsContainer.appendChild(this.topButtonsContainer);
        this.buttonsContainer.appendChild(this.playButton.getButton());
        this.buttonsContainer.appendChild(this.pickedOption.getPickedOption());
        this.container.appendChild(this.wheel.getWheel());
        this.container.style.display = 'none';
    }
    getContainer() {
        return this.container;
    }
    addTitle(titleText) {
        const title = new _header_header__WEBPACK_IMPORTED_MODULE_0__.Header(titleText);
        this.container.prepend(title.header);
    }
    addDuration(titleText) {
        const title = new _header_header__WEBPACK_IMPORTED_MODULE_0__.Header(titleText);
        this.container.appendChild(title.header);
    }
    updateWheel(options) {
        this.wheel.setOptions(options);
        this.wheel.drawWheel(0);
    }
}


/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _components_first_page_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/first-page-style.css */ "./src/components/first-page-style.css");
/* harmony import */ var _components_second_page_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/second-page-style.css */ "./src/components/second-page-style.css");
/* harmony import */ var _components_header_header_styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/header/header-styles.css */ "./src/components/header/header-styles.css");
/* harmony import */ var _components_buttons_buttons_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/buttons/buttons-style.css */ "./src/components/buttons/buttons-style.css");
/* harmony import */ var _components_options_options_style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/options/options-style.css */ "./src/components/options/options-style.css");
/* harmony import */ var _components_modal_modal_window_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/modal/modal-window-style.css */ "./src/components/modal/modal-window-style.css");
/* harmony import */ var _components_second_page_options_notification_style_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/second-page-options/notification-style.css */ "./src/components/second-page-options/notification-style.css");
/* harmony import */ var _components_routes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/routes */ "./src/components/routes.ts");
/* harmony import */ var _components_first_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/first-page */ "./src/components/first-page.ts");
/* harmony import */ var _components_second_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/second-page */ "./src/components/second-page.ts");
/* harmony import */ var _components_buttons_add_option_btn__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/buttons/add-option-btn */ "./src/components/buttons/add-option-btn.ts");
/* harmony import */ var _components_buttons_clear_list_btn__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/buttons/clear-list-btn */ "./src/components/buttons/clear-list-btn.ts");
/* harmony import */ var _components_buttons_start_btn__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/buttons/start-btn */ "./src/components/buttons/start-btn.ts");
/* harmony import */ var _components_second_page_options_wheel__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/second-page-options/wheel */ "./src/components/second-page-options/wheel.ts");















const secondPage = new _components_second_page__WEBPACK_IMPORTED_MODULE_10__.SecondPage();
const firstPage = new _components_first_page__WEBPACK_IMPORTED_MODULE_9__.FirstPage(secondPage);
document.body.appendChild(secondPage.getContainer());
(0,_components_routes__WEBPACK_IMPORTED_MODULE_8__.setPages)(firstPage.getContainer(), secondPage.getContainer());
const wheel = new _components_second_page_options_wheel__WEBPACK_IMPORTED_MODULE_14__.Wheel();
firstPage.addTitle('Decision Making Tool');
secondPage.addTitle('Decision Making Tool');
firstPage.addOption(wheel);
const addOption = firstPage.addButton('Add option', 'add-option-btn');
firstPage.addButton('Paste list', 'btn2');
const clearListButton = firstPage.addButton('Clear list', 'clear-list');
const saveButton = firstPage.addButton('Save list', 'save-list');
firstPage.addButton('Load list', 'btn5');
const startButton = firstPage.addButton('Start', 'start-btn');
const addOptionHandler = new _components_buttons_add_option_btn__WEBPACK_IMPORTED_MODULE_11__.AddOptionButton(firstPage, firstPage.getOptionsContainer());
addOptionHandler.addEventListenerToButton(addOption, wheel);
const clearListHandler = new _components_buttons_clear_list_btn__WEBPACK_IMPORTED_MODULE_12__.ClearListButton(firstPage.getOptionsContainer(), firstPage);
clearListHandler.addEventListenerToButton(clearListButton);
const startButtonHandler = new _components_buttons_start_btn__WEBPACK_IMPORTED_MODULE_13__.StartButton(firstPage, secondPage);
startButtonHandler.addEventListenerToButton(startButton);
document.body.appendChild(firstPage['container']);
document.body.appendChild(secondPage['container']);
(0,_components_routes__WEBPACK_IMPORTED_MODULE_8__.navigateToPage)('first');
(0,_components_routes__WEBPACK_IMPORTED_MODULE_8__.updatePageView)();
window.addEventListener('hashchange', _components_routes__WEBPACK_IMPORTED_MODULE_8__.updatePageView);

})();

/******/ })()
;