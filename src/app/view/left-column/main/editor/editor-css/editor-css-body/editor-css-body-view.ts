import { MainCssClasses } from '../../../../../../../types/types';
import ElementCreator from '../../../../../../util/element-creator';
import View from '../../../../../view';
import type InputView from './input/input-view';

export default class EditorCssBodyView extends View {
  constructor(input: InputView) {
    const params = {
      tag: 'div',
      classNames: [MainCssClasses.EDITOR_CSS_BODY],
      textContent: '',
      callback: () => {
        input.elementCreator.getElement()?.focus();
      },
    };
    super(params);

    this.configureView(input);
  }

  configureView(input: InputView): void {
    const getInput = input.getHtmlElement();
    if (getInput !== null) this.elementCreator.addInnerElement(getInput);
    // create Numbers line
    const numbersLineParams = {
      tag: 'div',
      classNames: [MainCssClasses.NUMBERS_LINE, MainCssClasses.NUMBERS_LINE_CSS],
      textContent: '1 2 3 4 5 6 7 8 9 10 11 12 13',
      callback: null,
    };
    const creatorNumbersLine = new ElementCreator(numbersLineParams);
    this.elementCreator.addInnerElement(creatorNumbersLine);

    // Create styles should be here field
    const stylesShouldSectionParams = {
      tag: 'div',
      classNames: [MainCssClasses.EDITOR_CSS_BODY_STYLES],
      textContent: '{ /* Styles should be here */ }',
      callback: null,
    };
    const creatorStylesShouldSection = new ElementCreator(stylesShouldSectionParams);
    this.elementCreator.addInnerElement(creatorStylesShouldSection);
  }
}
