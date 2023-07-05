import { MainCssClasses } from '../../../types/types';
import View from '../view';
import './level.scss';

export default class LevelTitleView extends View {
  constructor(text: string) {
    const params = {
      tag: 'div',
      classNames: [MainCssClasses.LEVEL_TITLE],
      textContent: text,
      callback: null,
    };
    super(params);
  }
}
