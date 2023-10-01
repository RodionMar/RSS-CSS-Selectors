import { ModalWindowCssClasses } from '../../../../types/types';
import View from '../../view';

export default class WithHelpView extends View {
  constructor() {
    const params = {
      tag: 'div',
      classNames: [ModalWindowCssClasses.MODAL_WINDOW_RESULTS_WITH_HELP],
      textContent: '',
      callback: null,
    };
    super(params);
  }

  setTextContent(lengthParam: number): void {
    const element: HTMLElement | undefined | null = this.elementCreator.getElement();
    if (element !== undefined && element !== null) {
      element.textContent = '';
      element.textContent = `Complete with help: ${lengthParam}`;
    }
  }
}
