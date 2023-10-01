import { ModalWindowCssClasses } from '../../../../types/types';
import View from '../../view';

export default class CompletedView extends View {
  constructor() {
    const params = {
      tag: 'div',
      classNames: [ModalWindowCssClasses.MODAL_WINDOW_RESULTS_COMPLETED],
      textContent: '',
      callback: null,
    };
    super(params);
  }

  setTextContent(lengthParam: number): void {
    const element: HTMLElement | undefined | null = this.elementCreator.getElement();
    if (element !== undefined && element !== null) {
      element.textContent = '';
      element.textContent = `Successfully completed: ${lengthParam}`;
    }
  }
}
