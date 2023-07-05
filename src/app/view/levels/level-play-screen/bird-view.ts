import View from './../../view';

export default class BirdView extends View {
  constructor(className: string[]) {
    const params = {
      tag: 'div',
      classNames: className,
      textContent: '',
      callback: null,
    };
    super(params);
    this.hoverListener();
  }

  hoverListener(): void {
    const element = this.elementCreator.getElement();

    element?.addEventListener('mouseover', () => {
      element.classList.add('hovered');
    });
    element?.addEventListener('mouseout', () => {
      element.classList.remove('hovered');
    });
  }
}
