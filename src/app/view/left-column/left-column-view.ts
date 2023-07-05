import './left-column.scss';
import { CssClasses } from '../../../types/types';
import View from '../view';

export default class LeftColumnView extends View {
  constructor() {
    const params = {
      tag: 'div',
      classNames: [CssClasses.LEFT_COLUMN],
      textContent: '',
      callback: null,
    };
    super(params);
  }
}
