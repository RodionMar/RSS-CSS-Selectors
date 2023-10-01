import { AsideCssClasses } from '../../../../../../types/types';
import View from '../../../../view';

export default class AsideHeaderLevelNav extends View {
  constructor() {
    const params = {
      tag: 'aside',
      classNames: [AsideCssClasses.ASIDE_HEADER_NAV],
      textContent: '',
      callback: null,
    };
    super(params);
  }
}
