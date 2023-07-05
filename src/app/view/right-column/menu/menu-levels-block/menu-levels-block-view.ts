import { CssClasses } from '../../../../../types/types';
import View from '../../../view';

export default class MenuLevelsBlockView extends View {
  constructor() {
    const params = {
      tag: 'div',
      classNames: [CssClasses.MENU_LEVELS],
      textContent: '',
      callback: null,
    };
    super(params);
  }
}
