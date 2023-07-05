import { MainCssClasses } from '../../../types/types';
import View from '../view';

export default class LevelMarkupElementView extends View {
  constructor(text: string) {
    const params = {
      tag: 'div',
      classNames: [MainCssClasses.EDITOR_HTML],
      textContent: text,
      callback: null,
    };
    super(params);
    // this.configureView();
  }
}
