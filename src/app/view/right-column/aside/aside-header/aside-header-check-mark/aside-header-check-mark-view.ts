import { AsideCssClasses } from '../../../../../../types/types';
import View from '../../../../view';

export default class AsideHeaderCheckMark extends View {
  constructor() {
    const params = {
      tag: 'span',
      classNames: [AsideCssClasses.ASIDE_CHECK_MARK],
      textContent: ``,
      callback: null,
    };
    super(params);
  }
}
