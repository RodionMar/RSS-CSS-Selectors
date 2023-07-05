import './modal-window.scss';
import { ModalWindowCssClasses } from '../../../types/types';
import View from '../view';

export default class ModalWindowBackgroundView extends View {
  constructor() {
    const params = {
      tag: 'div',
      classNames: [ModalWindowCssClasses.MODAL_WINDOW_BACKGROUND],
      textContent: '',
      callback: null,
    };
    super(params);
  }
}
