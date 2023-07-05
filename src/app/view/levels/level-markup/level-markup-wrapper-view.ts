import ElementCreator from '../../../util/element-creator';
import '../../../../agate.min.css';
import View from '../../view';
import type LevelMarkupView from './level-html-markup-view';
import hljs from 'highlight.js/lib/core';
import 'highlight.js/styles/github.css';
import xml from 'highlight.js/lib/languages/xml';
hljs.registerLanguage('xml', xml);

export default class LevelMarkupWrapperView extends View {
  constructor(htmlMarkup: LevelMarkupView) {
    const params = {
      tag: 'pre',
      classNames: [],
      textContent: '',
      callback: null,
    };
    super(params);
    this.configView(htmlMarkup);
  }

  configView(htmlMarkup: LevelMarkupView): void {
    const codeParams = {
      tag: 'code',
      classNames: ['language-html'],
      textContent: '',
      callback: null,
    };
    const creatorCode = new ElementCreator(codeParams);
    this.elementCreator.addInnerElement(creatorCode);

    const getHtmlMarkup = htmlMarkup.getHtmlElement();
    if (getHtmlMarkup != null) creatorCode.addInnerElement(getHtmlMarkup);
  }
}
