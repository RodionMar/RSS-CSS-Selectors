import './logo.scss';
import View from '../../../view';
import { HeaderCssClasses } from '../../../../../types/types';

export default class LogoView extends View {
  constructor() {
    const params = {
      tag: 'h1',
      classNames: [HeaderCssClasses.LOGO],
      textContent: 'RSS CSS Selectors',
      callback: null,
    };
    super(params);
  }
}
