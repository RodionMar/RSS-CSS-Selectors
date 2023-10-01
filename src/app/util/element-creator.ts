import { type IViewParams, type callback } from '../../types/types';

export default class ElementCreator {
  element: HTMLElement | null;
  constructor(param: IViewParams) {
    this.element = null;
    this.createElement(param);
  }

  createElement(param: IViewParams): void {
    this.element = document.createElement(param.tag);
    this.setCssClasses(param.classNames);
    if (param.textContent !== undefined) this.setTextContent(param.textContent);
    if (param.callback !== null && param.callback !== undefined) this.setCallback(param.callback);
  }

  getElement(): HTMLElement | null | HTMLInputElement {
    return this.element;
  }

  addInnerElement(element: HTMLElement | ElementCreator): void {
    if (element instanceof ElementCreator) {
      const getElement = element.getElement();
      if (getElement !== null) this.element?.append(getElement);
    } else {
      this.element?.append(element);
    }
  }

  setCssClasses(cssClasses: string[]): void {
    cssClasses.forEach((className) => this.element?.classList.add(className));
  }

  setTextContent(text: string): void {
    if (this.element !== undefined && this.element !== null) this.element.textContent = text;
  }

  setCallback(callback: callback | null): void {
    if (typeof callback === 'function')
      this.element?.addEventListener('click', (event) => {
        callback(event);
      });
  }
}
