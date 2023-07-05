// import './modal-window.scss';
// import { MenuItems, ModalWindowCssClasses } from '../../../types/types';
// import ElementCreator from '../../util/element-creator';
// import View from '../view';
// import type CompletedView from './modal-window-results.ts/completed-view';
// import type WithHelpView from './modal-window-results.ts/with-help-view';
// import type ModalWindowBackgroundView from './modal-window-background-view';
// import type EditorView from '../left-column/main/editor/editor-view';
// import type MainView from '../left-column/main/main-view';
// import type LevelPlayScreenView from '../levels/level-play-screen/level-play-screen-view';
// import type LevelNumber from '../right-column/aside/aside-header/level-number/level-number-view';
// import type AsideHeaderCheckMark from '../right-column/aside/aside-header/aside-header-check-mark/aside-header-check-mark-view';
// import type RightColumnMenuView from '../right-column/menu/right-column-menu-view';
// import type LevelMarkupView from '../levels/level-markup/level-html-markup-view';
// import LevelController from '../loader/levelController';
// import LevelTitleView from '../levels/level-title-view';
// import levels from '../../../data/levels';
// import LevelCompleted from '../loader/level-completed';
// import LevelWithHelp from '../loader/level-with-help';

// export default class ModalWindowView extends View {
//   constructor(
//     withHelp: WithHelpView,
//     completed: CompletedView,
//     wrapper: ModalWindowBackgroundView,
//     window: EditorView,
//     mainComponent: MainView,
//     levelPlayScreen: LevelPlayScreenView,
//     levelCounter: LevelNumber,
//     checkMark: AsideHeaderCheckMark,
//     menu: RightColumnMenuView,
//     htmlMarkup: LevelMarkupView
//   ) {
//     const params = {
//       tag: 'div',
//       classNames: [ModalWindowCssClasses.MODAL_WINDOW],
//       textContent: '',
//       callback: null,
//     };
//     super(params);
//     this.configureView(
//       withHelp,
//       completed,
//       wrapper,
//       window,
//       mainComponent,
//       levelPlayScreen,
//       levelCounter,
//       checkMark,
//       menu,
//       htmlMarkup
//     );
//   }

//   configureView(
//     withHelp: WithHelpView,
//     completed: CompletedView,
//     wrapper: ModalWindowBackgroundView,
//     window: EditorView,
//     mainComponent: MainView,
//     levelPlayScreen: LevelPlayScreenView,
//     levelCounter: LevelNumber,
//     checkMark: AsideHeaderCheckMark,
//     menu: RightColumnMenuView,
//     htmlMarkup: LevelMarkupView
//   ): void {
//     const modalWindowTitleParams = {
//       tag: 'div',
//       classNames: [ModalWindowCssClasses.MODAL_WINDOW_TITLE],
//       textContent: 'You completed the game',
//       callback: null,
//     };
//     const creatorModalWindowTitle = new ElementCreator(modalWindowTitleParams);
//     this.elementCreator.addInnerElement(creatorModalWindowTitle);

//     const modalWindowResultsParams = {
//       tag: 'div',
//       classNames: [ModalWindowCssClasses.MODAL_WINDOW_RESULTS],
//       textContent: '',
//       callback: null,
//     };
//     const creatorModalWindowResults = new ElementCreator(modalWindowResultsParams);
//     this.elementCreator.addInnerElement(creatorModalWindowResults);

//     const modalWindowResultsTitleParams = {
//       tag: 'div',
//       classNames: [ModalWindowCssClasses.MODAL_WINDOW_RESULTS_TITLE],
//       textContent: 'Your results',
//       callback: null,
//     };
//     const creatorModalWindowResultsTitle = new ElementCreator(modalWindowResultsTitleParams);
//     creatorModalWindowResults.addInnerElement(creatorModalWindowResultsTitle);

//     const getWithHelp = withHelp.getHtmlElement();
//     if (getWithHelp != null) creatorModalWindowResults.addInnerElement(getWithHelp);

//     const getCompleted = completed.getHtmlElement();
//     if (getCompleted != null) creatorModalWindowResults.addInnerElement(getCompleted);

//     const modalWindowButtonParams = {
//       tag: 'button',
//       classNames: [ModalWindowCssClasses.MODAL_WINDOW_BUTTON],
//       textContent: 'Try again',
//       callback: () => {
//         wrapper.elementCreator.getElement()?.classList.remove('opened');
//         wrapper.elementCreator.getElement()?.classList.add('closed');

//         const levelNumber = 0;
//         new LevelController(levelNumber);
//         new LevelCompleted([]);
//         new LevelWithHelp([]);

//         const levelTitle = new LevelTitleView(levels[levelNumber].title);
//         const getLevelTitle = levelTitle.getHtmlElement();
//         const getLevelPlayScreen = levelPlayScreen.getHtmlElement();
//         if (getLevelTitle != null && getLevelPlayScreen != null)
//           mainComponent.setContent([getLevelTitle, getLevelPlayScreen]);

//         menu.menuItems[levelNumber].setSelectedStatus();
//         menu.menuItems.forEach((menuElement) => {
//           if (menuElement.elementCreator.getElement()?.classList.contains(MenuItems.COMPLETED) === true) {
//             menuElement.elementCreator.getElement()?.classList.remove(MenuItems.COMPLETED);
//           } else if (menuElement.elementCreator.getElement()?.classList.contains(MenuItems.WITH_HELP) === true) {
//             menuElement.elementCreator.getElement()?.classList.remove(MenuItems.WITH_HELP);
//           }
//         });
//         levelCounter.setTextContent(levels[levelNumber].level);
//         levelPlayScreen.setContent();
//         htmlMarkup.setContent();
//       },
//     };
//     const creatorModalWindowButton = new ElementCreator(modalWindowButtonParams);
//     this.elementCreator.addInnerElement(creatorModalWindowButton);
//   }
// }
import './modal-window.scss';
import { ModalWindowCssClasses } from '../../../types/types';
import ElementCreator from '../../util/element-creator';
import View from '../view';
import type CompletedView from './modal-window-results.ts/completed-view';
import type WithHelpView from './modal-window-results.ts/with-help-view';
import type ModalWindowBackgroundView from './modal-window-background-view';
import type EditorView from '../left-column/main/editor/editor-view';
import type MainView from '../left-column/main/main-view';
import type LevelPlayScreenView from '../levels/level-play-screen/level-play-screen-view';
import type LevelNumber from '../right-column/aside/aside-header/level-number/level-number-view';
import type RightColumnMenuView from '../right-column/menu/right-column-menu-view';
import type LevelMarkupView from '../levels/level-markup/level-html-markup-view';
import LevelController from '../loader/levelController';
import LevelTitleView from '../levels/level-title-view';
import levels from '../../../data/levels';
import LevelCompleted from '../loader/level-completed';
import LevelWithHelp from '../loader/level-with-help';

export default class ModalWindowView extends View {
  constructor(
    withHelp: WithHelpView,
    completed: CompletedView,
    wrapper: ModalWindowBackgroundView,
    window: EditorView,
    mainComponent: MainView,
    levelPlayScreen: LevelPlayScreenView,
    levelCounter: LevelNumber,
    menu: RightColumnMenuView,
    htmlMarkup: LevelMarkupView
  ) {
    const params = {
      tag: 'div',
      classNames: [ModalWindowCssClasses.MODAL_WINDOW],
      textContent: '',
      callback: null,
    };
    super(params);
    this.configureView(
      withHelp,
      completed,
      wrapper,
      window,
      mainComponent,
      levelPlayScreen,
      levelCounter,
      menu,
      htmlMarkup
    );
  }

  configureView(
    withHelp: WithHelpView,
    completed: CompletedView,
    wrapper: ModalWindowBackgroundView,
    window: EditorView,
    mainComponent: MainView,
    levelPlayScreen: LevelPlayScreenView,
    levelCounter: LevelNumber,
    menu: RightColumnMenuView,
    htmlMarkup: LevelMarkupView
  ): void {
    const modalWindowTitleParams = {
      tag: 'div',
      classNames: [ModalWindowCssClasses.MODAL_WINDOW_TITLE],
      textContent: 'You completed the game',
      callback: null,
    };
    const creatorModalWindowTitle = new ElementCreator(modalWindowTitleParams);
    this.elementCreator.addInnerElement(creatorModalWindowTitle);

    const modalWindowResultsParams = {
      tag: 'div',
      classNames: [ModalWindowCssClasses.MODAL_WINDOW_RESULTS],
      textContent: '',
      callback: null,
    };
    const creatorModalWindowResults = new ElementCreator(modalWindowResultsParams);
    this.elementCreator.addInnerElement(creatorModalWindowResults);

    const modalWindowResultsTitleParams = {
      tag: 'div',
      classNames: [ModalWindowCssClasses.MODAL_WINDOW_RESULTS_TITLE],
      textContent: 'Your results',
      callback: null,
    };
    const creatorModalWindowResultsTitle = new ElementCreator(modalWindowResultsTitleParams);
    creatorModalWindowResults.addInnerElement(creatorModalWindowResultsTitle);

    const getWithHelp = withHelp.getHtmlElement();
    if (getWithHelp != null) creatorModalWindowResults.addInnerElement(getWithHelp);

    const getCompleted = completed.getHtmlElement();
    if (getCompleted != null) creatorModalWindowResults.addInnerElement(getCompleted);

    const modalWindowButtonParams = {
      tag: 'button',
      classNames: [ModalWindowCssClasses.MODAL_WINDOW_BUTTON],
      textContent: 'Try again',
      callback: () => {
        wrapper.elementCreator.getElement()?.classList.remove('opened');
        wrapper.elementCreator.getElement()?.classList.add('closed');

        const levelNumber = 0;
        LevelController(levelNumber);
        LevelCompleted([]);
        LevelWithHelp([]);

        const levelTitle = new LevelTitleView(levels[levelNumber].title);
        const getLevelTitle = levelTitle.getHtmlElement();
        const getLevelPlayScreen = levelPlayScreen.getHtmlElement();
        if (getLevelTitle != null && getLevelPlayScreen != null)
          mainComponent.setContent([getLevelTitle, getLevelPlayScreen]);
        menu.menuItems[levelNumber].setSelectedStatus();
        menu.menuItems.forEach((menuElement) => {
          if (menuElement.elementCreator.getElement()?.classList.contains('completed') === true) {
            menuElement.elementCreator.getElement()?.classList.remove('completed');
          } else if (menuElement.elementCreator.getElement()?.classList.contains('with-help') === true) {
            menuElement.elementCreator.getElement()?.classList.remove('with-help');
          }
        });
        levelCounter.setTextContent(levels[levelNumber].level);
        levelPlayScreen.setContent();
        htmlMarkup.setContent();
      },
    };
    const creatorModalWindowButton = new ElementCreator(modalWindowButtonParams);
    this.elementCreator.addInnerElement(creatorModalWindowButton);
  }
}
