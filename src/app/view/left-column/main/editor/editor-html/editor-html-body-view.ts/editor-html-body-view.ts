import { MainCssClasses } from '../../../../../../../types/types';
import ElementCreator from '../../../../../../util/element-creator';
import View from '../../../../../view';

export default class EditorHtmlBodyView extends View {
  constructor() {
    const params = {
      tag: 'div',
      classNames: [MainCssClasses.EDITOR_HTML_BODY],
      textContent: '',
      callback: null,
    };
    super(params);
    this.configureView();
  }

  configureView(): void {
    const numbersLineParams = {
      tag: 'div',
      classNames: [MainCssClasses.NUMBERS_LINE, MainCssClasses.NUMBERS_LINE_HTML],
      textContent: '1 2 3 4 5 6 7 8 9 10 11 12 13',
      callback: null,
    };
    const creatorNumbersLine = new ElementCreator(numbersLineParams);
    this.elementCreator.addInnerElement(creatorNumbersLine);
  }
}
