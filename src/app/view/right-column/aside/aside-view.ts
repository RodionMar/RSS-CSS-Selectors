import './aside.scss';
import { AsideCssClasses } from '../../../../types/types';
import View from '../../view';

export default class AsideView extends View {
  constructor() {
    const params = {
      tag: 'aside',
      classNames: [AsideCssClasses.ASIDE],
      textContent: '',
      callback: null,
    };
    super(params);
  }
}
