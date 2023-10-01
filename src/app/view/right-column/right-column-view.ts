import './right-column.scss';
import { CssClasses } from '../../../types/types';
import View from '../view';

export default class RightColumnView extends View {
  constructor() {
    const params = {
      tag: 'div',
      classNames: [CssClasses.RIGHT_COLUMN],
      textContent: '',
      callback: null,
    };
    super(params);
  }
}
