// import levels from '../../../../data/levels';
// import { MainCssClasses } from '../../../../types/types';
// import View from '../../view';
// import '../level.scss';
// import LevelMarkupElementView from './level-markup-element-view';

// export default class LevelMarkupView extends View {
//   constructor() {
//     const params = {
//       tag: 'div',
//       classNames: [MainCssClasses.LEVEL_HTML_MARKUP],
//       textContent: '',
//       callback: null,
//     };
//     super(params);
//     this.markupElements = [];
//   }

//   markupElements: LevelMarkupElementView[];

//   setContent(): void {
//     const element: HTMLElement | undefined | null = this.elementCreator.getElement();
//     if (element != undefined && element != null) {
//       const currentLevel = levels[Number(localStorage.getItem('level')) | 0];
//       while (element.childNodes.length > 0) {
//         element.firstChild?.remove();
//       }
//       element.textContent = '';
//       element.textContent += '<div class="air">';
//       currentLevel.htmlMarkup.forEach((markupEl) => {
//         const creatorMarkupEl = new LevelMarkupElementView(markupEl);
//         this.markupElements.push(creatorMarkupEl);
//         const getMarkupEl = creatorMarkupEl.getHtmlElement();
//         if (getMarkupEl != null) this.elementCreator.addInnerElement(getMarkupEl);
//       });
//       element.append('</div>');
//     }
//   }
// }
import levels from '../../../../data/levels';
import { MainCssClasses } from '../../../../types/types';
import View from '../../view';
import '../level.scss';
import LevelMarkupElementView from './level-markup-element-view';

export default class LevelMarkupView extends View {
  constructor() {
    const params = {
      tag: 'div',
      classNames: [MainCssClasses.LEVEL_HTML_MARKUP],
      textContent: '',
      callback: null,
    };
    super(params);
    this.markupElements = [];
  }

  markupElements: LevelMarkupElementView[];

  setContent(): void {
    const element: HTMLElement | undefined | null = this.elementCreator.getElement();
    if (element !== undefined && element !== null) {
      const currentLevel = levels[Number(localStorage.getItem('level')) | 0];
      while (element?.childNodes.length > 1) {
        element.firstChild?.remove();
      }
      element.textContent = '';
      element.textContent += '<div class="air">';
      currentLevel.htmlMarkup.forEach((markupEl) => {
        const creatorMarkupEl = new LevelMarkupElementView(markupEl);
        this.markupElements.push(creatorMarkupEl);
        const getMarkupEl = creatorMarkupEl.getHtmlElement();
        if (getMarkupEl != null) this.elementCreator.addInnerElement(getMarkupEl);
      });
      element.append('</div>');
    }
  }
}
