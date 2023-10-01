import levels from '../../../../../../data/levels';
import { AsideCssClasses } from '../../../../../../types/types';
import View from '../../../../view';
// import type AsideHeaderCheckMark from '../aside-header-check-mark/aside-header-check-mark-view';

export default class LevelNumber extends View {
  constructor() {
    const params = {
      tag: 'div',
      classNames: [AsideCssClasses.ASIDE_LEVEL],
      textContent: `${levels[Number(localStorage?.getItem('level')) | 0].level}`,
      callback: null,
    };
    super(params);
  }

  setTextContent(textContentParam: string): void {
    const currentElement = this.elementCreator.getElement();

    if (currentElement?.innerText !== undefined) {
      currentElement.innerText = textContentParam;
    }
  }
}
