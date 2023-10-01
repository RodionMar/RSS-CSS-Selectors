import './main.scss';
import View from '../../view';
import { MainCssClasses } from '../../../../types/types';

export default class MainView extends View {
  constructor() {
    const params = {
      tag: 'main',
      classNames: [MainCssClasses.MAIN],
      textContent: '',
      callback: null,
    };
    super(params);
  }

  // Set content for Main
  setContent(view: HTMLElement[]): void {
    const title = view[0];
    const gameScreen = view[1];
    const currentElement = this.elementCreator.getElement();

    const currentElementChild = currentElement?.childNodes;
    if (currentElementChild !== undefined) {
      while (currentElementChild?.length > 1) {
        currentElementChild[1].remove();
      }
    }

    this.elementCreator.addInnerElement(title);
    this.elementCreator.addInnerElement(gameScreen);
  }
}
