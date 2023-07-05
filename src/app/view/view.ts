import { type IViewParams } from '../../types/types';
import ElementCreator from '../util/element-creator';

export default abstract class View {
  elementCreator: ElementCreator;
  constructor(params: IViewParams) {
    this.elementCreator = this.createView(params);
  }

  getHtmlElement(): HTMLElement | null {
    return this.elementCreator.getElement();
  }

  createView(params: IViewParams): ElementCreator {
    const commonParams = {
      tag: params.tag,
      classNames: params.classNames,
      textContent: params.textContent,
      callback: params.callback,
    };

    const elementCreator = new ElementCreator(commonParams);

    return elementCreator;
  }
}
