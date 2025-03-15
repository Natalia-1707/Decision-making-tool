import { Header } from './header/header';
import { Button } from './buttons/buttons-create';
import { Options } from './options/options';
import { DeleteOptionButton } from './options/delete-btn';
import { Wheel } from './second-page-options/wheel';
import { SecondPage } from './second-page';

export class FirstPage {
  private container: HTMLDivElement;
  private optionsContainer: HTMLDivElement;
  private currentId: number = 1;
  private optionsList: Options[] = [];
  private secondPage: SecondPage;

  constructor(secondPage: SecondPage) {
    this.container = document.createElement('div');
    this.container.classList.add('container', 'first-page');
    this.optionsContainer = document.createElement('div');
    this.optionsContainer.classList.add('options-container');
    this.secondPage = secondPage;
  }

  getContainer(): HTMLDivElement {
    return this.container;
  }

  addTitle(titleText: string) {
    const title: Header = new Header(titleText);
    this.container.appendChild(title.header);
  }

  getNextId(): number {
    return this.currentId++;
  }

  resetIdCounter() {
    this.currentId = 1;
    this.optionsList.length = 0;
  }

  addOption(wheel: Wheel): void {
    const idNumber = this.getNextId();
    const deleteHandler = new DeleteOptionButton(this);

    const option: Options = new Options(idNumber, deleteHandler, this, wheel);

    this.container.appendChild(this.optionsContainer);
    this.optionsList.push(option);
    this.optionsContainer.appendChild(option.option);

    this.updateWheel(wheel);
  }

  addButton(text: string, id: string) {
    const button: Button = new Button(text, id);
    this.container.appendChild(button.button);
    return button.button;
  }

  getOptionsContainer(): HTMLDivElement {
    return this.optionsContainer;
  }

  getOptionsList(): Options[] {
    return this.optionsList;
  }
  updateWheel(wheel: Wheel) {
    const options = this.optionsList
      .map((option) => ({
        title: option.getTitle(),
        weight: option.getWeight(),
      }))
      .filter(
        (option) =>
          option.title !== '' && !isNaN(option.weight) && option.weight > 0
      );

    this.secondPage.updateWheel(options);
  }
}
