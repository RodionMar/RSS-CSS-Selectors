import './editor.scss';
import View from '../../../view';
import { MainCssClasses } from '../../../../../types/types';

export default class EditorView extends View {
  constructor() {
    const params = {
      tag: 'div',
      classNames: [MainCssClasses.EDITOR],
      textContent: '',
      callback: null,
    };
    super(params);
  }
}
