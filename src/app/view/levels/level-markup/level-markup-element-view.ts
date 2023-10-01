import View from '../../view';

export default class LevelMarkupElementView extends View {
  constructor(text: string) {
    const params = {
      tag: 'div',
      classNames: [],
      textContent: text,
      callback: null,
    };
    super(params);
    this.hoverListener();
  }

  hoverListener(): void {
    const element = this.elementCreator.getElement();

    element?.addEventListener('mouseover', (event) => {
      element.classList.add('hovered');
    });
    element?.addEventListener('mouseout', (event) => {
      element.classList.remove('hovered');
    });
  }
}
