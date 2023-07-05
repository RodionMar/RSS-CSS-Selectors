import { MainCssClasses } from '../../../../../../types/types';
import ElementCreator from '../../../../../util/element-creator';
import View from '../../../../view';
import './editor-css.scss';

export default class EditorCssView extends View {
  constructor() {
    const params = {
      tag: 'div',
      classNames: [MainCssClasses.EDITOR_CSS],
      textContent: '',
      callback: null,
    };
    super(params);
    this.configureView();
  }

  configureView(): void {
    // Create Header for CSS Editor
    const cssHeaderParams = {
      tag: 'div',
      classNames: [MainCssClasses.EDITOR_CSS_HEADER],
      textContent: 'CSS Editor',
      callback: null,
    };
    const creatorCssHeader = new ElementCreator(cssHeaderParams);
    this.elementCreator.addInnerElement(creatorCssHeader);

    const fileNameParams = {
      tag: 'div',
      classNames: [MainCssClasses.FILE_NAME],
      textContent: 'style.css',
      callback: null,
    };
    const creatorFileName = new ElementCreator(fileNameParams);
    creatorCssHeader.addInnerElement(creatorFileName);
  }
}
