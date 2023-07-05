import { MainCssClasses } from '../../../../../../types/types';
import ElementCreator from '../../../../../util/element-creator';
import View from '../../../../view';
import './editor-html.scss';

export default class EditorHtmlView extends View {
  constructor() {
    const params = {
      tag: 'div',
      classNames: [MainCssClasses.EDITOR_HTML],
      textContent: '',
      callback: null,
    };
    super(params);
    this.configureView();
  }

  configureView(): void {
    // Create Header for HTML Editor
    const htmlHeaderParams = {
      tag: 'div',
      classNames: [MainCssClasses.EDITOR_HTML_HEADER],
      textContent: 'HTML Viewer',
      callback: null,
    };
    const creatorHtmlHeader = new ElementCreator(htmlHeaderParams);
    this.elementCreator.addInnerElement(creatorHtmlHeader);

    const fileNameParams = {
      tag: 'div',
      classNames: [MainCssClasses.FILE_NAME],
      textContent: 'air.html',
      callback: null,
    };
    const creatorFileName = new ElementCreator(fileNameParams);
    creatorHtmlHeader.addInnerElement(creatorFileName);
  }
}
