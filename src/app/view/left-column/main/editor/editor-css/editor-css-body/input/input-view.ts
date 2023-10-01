import levels from '../../../../../../../../data/levels';
import { MainCssClasses } from '../../../../../../../../types/types';
import type LevelMarkupView from '../../../../../../levels/level-markup/level-html-markup-view';
import type LevelPlayScreenView from '../../../../../../levels/level-play-screen/level-play-screen-view';
import LevelTitleView from '../../../../../../levels/level-title-view';
import LevelCompleted from '../../../../../../loader/level-completed';
import LevelController from '../../../../../../loader/levelController';
import type ModalWindowBackgroundView from '../../../../../../modal-window/modal-window-background-view';
import type CompletedView from '../../../../../../modal-window/modal-window-results.ts/completed-view';
import type WithHelpView from '../../../../../../modal-window/modal-window-results.ts/with-help-view';
import type LevelNumber from '../../../../../../right-column/aside/aside-header/level-number/level-number-view';
import type RightColumnMenuView from '../../../../../../right-column/menu/right-column-menu-view';
import View from '../../../../../../view';
import type MainView from '../../../../main-view';
import type EditorView from '../../../editor-view';
import './input.scss';

export default class InputView extends View {
  constructor(
    window: EditorView,
    mainComponent: MainView,
    levelPlayScreen: LevelPlayScreenView,
    levelCounter: LevelNumber,
    menu: RightColumnMenuView,
    htmlMarkup: LevelMarkupView,
    modalWrapper: ModalWindowBackgroundView,
    withHelpLevels: WithHelpView,
    completedLevels: CompletedView
  ) {
    const params = {
      tag: 'input',
      classNames: [MainCssClasses.EDITOR_CSS_INPUT],
      textContent: '',
      callback: null,
    };
    super(params);

    this.configure(
      window,
      mainComponent,
      levelPlayScreen,
      levelCounter,
      menu,
      htmlMarkup,
      modalWrapper,
      withHelpLevels,
      completedLevels
    );
  }

  configure(
    window: EditorView,
    mainComponent: MainView,
    levelPlayScreen: LevelPlayScreenView,
    levelCounter: LevelNumber,
    menu: RightColumnMenuView,
    htmlMarkup: LevelMarkupView,
    modalWrapper: ModalWindowBackgroundView,
    withHelpLevels: WithHelpView,
    completedLevels: CompletedView
  ): void {
    const element = this.elementCreator.getElement();
    element?.setAttribute('type', 'text');
    element?.setAttribute('placeholder', 'Type in a CSS selector');
    if (element instanceof HTMLInputElement) {
      element?.addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {
          let levelNumber = Number(localStorage.getItem('level')) | 0;
          if (levels[levelNumber].rightAnswer === element.value) {
            const getCompleteArray = localStorage.getItem('completed');
            const getWithHelpArray = localStorage.getItem('with-help');
            const ourArray: number[] = [];
            if (getCompleteArray !== null) {
              const completedArray: number[] = JSON.parse(getCompleteArray);

              if (!completedArray.includes(levelNumber)) {
                if (
                  menu.menuItems[levelNumber].elementCreator.getElement()?.classList.contains('with-help') === false
                ) {
                  completedArray.push(levelNumber);
                  menu.menuItems[levelNumber].elementCreator.getElement()?.classList.add('completed');

                  if (getWithHelpArray !== null) {
                    const withHelpArray: number[] = JSON.parse(getWithHelpArray);
                    completedArray.forEach((numberEl) => {
                      if (ourArray.length <= levels.length) ourArray.push(numberEl);
                    });
                    withHelpArray.forEach((numberEl) => {
                      if (ourArray.length <= levels.length) ourArray.push(numberEl);
                    });
                    if (ourArray.length === levels.length) {
                      if (modalWrapper.elementCreator.getElement()?.classList.contains('closed') === true) {
                        modalWrapper.elementCreator.getElement()?.classList.remove('closed');
                      }
                      modalWrapper.elementCreator.getElement()?.classList.add('opened');
                      withHelpLevels.setTextContent(withHelpArray.length);
                      completedLevels.setTextContent(completedArray.length);
                    }
                  } else {
                    completedArray.forEach((numberEl) => {
                      if (ourArray.length <= levels.length) ourArray.push(numberEl);
                    });
                    if (ourArray.length === levels.length) {
                      if (modalWrapper.elementCreator.getElement()?.classList.contains('closed') === true) {
                        modalWrapper.elementCreator.getElement()?.classList.remove('closed');
                      }
                      modalWrapper.elementCreator.getElement()?.classList.add('opened');
                      withHelpLevels.setTextContent(0);
                      completedLevels.setTextContent(completedArray.length);
                    }
                  }
                }
              }
              LevelCompleted(completedArray);
            } else {
              const completedArray: number[] = [];
              if (menu.menuItems[levelNumber].elementCreator.getElement()?.classList.contains('with-help') === false) {
                menu.menuItems[levelNumber].elementCreator.getElement()?.classList.add('completed');
                completedArray.push(levelNumber);
              }

              if (getWithHelpArray !== null) {
                const withHelpArray: number[] = JSON.parse(getWithHelpArray);
                completedArray.forEach((numberEl) => {
                  if (ourArray.length <= levels.length) ourArray.push(numberEl);
                });
                withHelpArray.forEach((numberEl) => {
                  if (ourArray.length <= levels.length) ourArray.push(numberEl);
                });

                if (ourArray.length === levels.length) {
                  if (modalWrapper.elementCreator.getElement()?.classList.contains('closed') === true) {
                    modalWrapper.elementCreator.getElement()?.classList.remove('closed');
                  }
                  modalWrapper.elementCreator.getElement()?.classList.add('opened');
                  withHelpLevels.setTextContent(withHelpArray.length);
                  completedLevels.setTextContent(completedArray.length);
                }
              } else {
                completedArray.forEach((numberEl) => {
                  if (ourArray.length <= levels.length) ourArray.push(numberEl);
                });
                if (ourArray.length === levels.length) {
                  if (modalWrapper.elementCreator.getElement()?.classList.contains('closed') === true) {
                    modalWrapper.elementCreator.getElement()?.classList.remove('closed');
                  }
                  modalWrapper.elementCreator.getElement()?.classList.add('opened');
                  withHelpLevels.setTextContent(0);
                  completedLevels.setTextContent(completedArray.length);
                }
              }
              LevelCompleted(completedArray);
            }

            levelNumber += 1;
            if (levelNumber > 9) levelNumber = 9;
            LevelController(levelNumber);
            element.value = '';
            const levelTitle = new LevelTitleView(levels[levelNumber].title);
            levelPlayScreen.elementCreator.getElement()?.classList.add('completed');
            levelTitle.elementCreator.getElement()?.classList.add('completed');
            setTimeout(() => {
              levelPlayScreen.elementCreator.getElement()?.classList.remove('completed');
              levelTitle.elementCreator.getElement()?.classList.remove('completed');
              const getLevelTitle = levelTitle.getHtmlElement();
              const getLevelPlayScreen = levelPlayScreen.getHtmlElement();
              if (getLevelTitle != null && getLevelPlayScreen != null)
                mainComponent.setContent([getLevelTitle, getLevelPlayScreen]);

              menu.menuItems[levelNumber].setSelectedStatus();
              levelCounter.setTextContent(levels[levelNumber].level);
              levelPlayScreen.setContent();
              htmlMarkup.setContent();
            }, 3000);
          } else {
            window.elementCreator.getElement()?.classList.add('error');
            setTimeout(() => {
              window.elementCreator.getElement()?.classList.remove('error');
            }, 1000);
          }
        }
      });
    }
  }
}
