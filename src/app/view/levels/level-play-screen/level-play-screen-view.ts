// import levels from '../../../../data/levels';
// import { Birds } from '../../../../types/types';
// import View from '../../view';
// import type LevelMarkupElementView from '../level-markup-element-view';
// import '../level.scss';
// import BirdView from './bird-view';

// export default class LevelPlayScreenView extends View {
//   constructor(text: string[]) {
//     const params = {
//       tag: 'div',
//       classNames: text,
//       textContent: '',
//       callback: null,
//     };
//     super(params);
//   }

//   setContent(markupElements?: LevelMarkupElementView[]): void {
//     const getParentEl = this.elementCreator.getElement();
//     getParentEl?.classList.remove(getParentEl?.classList[1]);
//     levels[Number(localStorage.getItem('level')) | 0].gameScreen.forEach((className): void => {
//       getParentEl?.classList.add(className);
//     });

//     const getParentChild = getParentEl?.childNodes;
//     const getParentFirstChild = getParentEl?.firstChild;
//     if (getParentChild !== undefined && getParentFirstChild !== undefined && getParentFirstChild !== null) {
//       while (getParentChild.length > 0) {
//         getParentFirstChild.remove();
//       }
//     }

//     const birdName = levels[Number(localStorage.getItem('level')) | 0].namesOfBirds;

//     for (let i = 0; i < birdName.length; i++) {
//       if (birdName[i] === 'u') {
//         const creatorOfUsualBird = new BirdView([]);
//         const getUsualBird = creatorOfUsualBird.getHtmlElement();
//         if (getUsualBird != null) this.elementCreator.addInnerElement(getUsualBird);
//       } else if (birdName[i] === 'Y') {
//         const creatorOfYellowBird = new BirdView([]);
//         creatorOfYellowBird.elementCreator.getElement()?.setAttribute('id', Birds.YELLOW);
//         const getYellowBird = creatorOfYellowBird.getHtmlElement();
//         if (getYellowBird != null) this.elementCreator.addInnerElement(getYellowBird);
//       } else if (birdName[i] === 'r') {
//         const creatorOfRedBird = new BirdView([Birds.RED]);
//         const getRedBird = creatorOfRedBird.getHtmlElement();
//         if (getRedBird != null) this.elementCreator.addInnerElement(getRedBird);
//       } else if (birdName[i] === 'g') {
//         const creatorOfGreenBird = new BirdView([Birds.GREEN]);
//         const getGreenBird = creatorOfGreenBird.getHtmlElement();
//         if (getGreenBird != null) this.elementCreator.addInnerElement(getGreenBird);
//       } else if (birdName[i] === 'B') {
//         const creatorOfBlueBird = new BirdView([]);
//         creatorOfBlueBird.elementCreator.getElement()?.setAttribute('id', Birds.BLUE);
//         const getBlueBird = creatorOfBlueBird.getHtmlElement();
//         if (getBlueBird != null) this.elementCreator.addInnerElement(getBlueBird);
//       }
//     }
//   }
// }
import levels from '../../../../data/levels';
import { Birds } from '../../../../types/types';
import View from '../../view';
import type LevelMarkupElementView from '../level-markup-element-view';
import '../level.scss';
import BirdView from './bird-view';

export default class LevelPlayScreenView extends View {
  constructor(text: string[]) {
    const params = {
      tag: 'div',
      classNames: text,
      textContent: '',
      callback: null,
    };
    super(params);
  }

  setContent(markupElements?: LevelMarkupElementView[]): void {
    const getParentEl = this.elementCreator.getElement();
    getParentEl?.classList.remove(getParentEl?.classList[1]);
    levels[Number(localStorage.getItem('level')) | 0].gameScreen.forEach((className) => {
      getParentEl?.classList.add(className);
    });

    if (getParentEl !== null) {
      while (getParentEl.childNodes.length !== 0) {
        getParentEl.firstChild?.remove();
      }
    }

    const birdName = levels[Number(localStorage.getItem('level')) | 0].namesOfBirds;

    for (let i = 0; i < birdName.length; i++) {
      if (birdName[i] === 'u') {
        const creatorOfUsualBird = new BirdView([]);
        const getUsualBird = creatorOfUsualBird.getHtmlElement();
        if (getUsualBird != null) this.elementCreator.addInnerElement(getUsualBird);
      } else if (birdName[i] === 'Y') {
        const creatorOfYellowBird = new BirdView([]);
        creatorOfYellowBird.elementCreator.getElement()?.setAttribute('id', Birds.YELLOW);
        const getYellowBird = creatorOfYellowBird.getHtmlElement();
        if (getYellowBird != null) this.elementCreator.addInnerElement(getYellowBird);
      } else if (birdName[i] === 'r') {
        const creatorOfRedBird = new BirdView([Birds.RED]);
        const getRedBird = creatorOfRedBird.getHtmlElement();
        if (getRedBird != null) this.elementCreator.addInnerElement(getRedBird);
      } else if (birdName[i] === 'g') {
        const creatorOfGreenBird = new BirdView([Birds.GREEN]);
        const getGreenBird = creatorOfGreenBird.getHtmlElement();
        if (getGreenBird != null) this.elementCreator.addInnerElement(getGreenBird);
      } else if (birdName[i] === 'B') {
        const creatorOfBlueBird = new BirdView([]);
        creatorOfBlueBird.elementCreator.getElement()?.setAttribute('id', Birds.BLUE);
        const getBlueBird = creatorOfBlueBird.getHtmlElement();
        if (getBlueBird != null) this.elementCreator.addInnerElement(getBlueBird);
      }
    }
  }
}
