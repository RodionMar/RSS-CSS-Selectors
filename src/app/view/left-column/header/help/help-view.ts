import './help.scss';
import { HeaderCssClasses } from '../../../../../types/types';
import View from '../../../view';
import type InputView from '../../main/editor/editor-css/editor-css-body/input/input-view';
import levels from '../../../../../data/levels';
import type EditorView from '../../main/editor/editor-view';
import type MainView from '../../main/main-view';
import type LevelPlayScreenView from '../../../levels/level-play-screen/level-play-screen-view';
import type LevelNumber from '../../../right-column/aside/aside-header/level-number/level-number-view';
import type RightColumnMenuView from '../../../right-column/menu/right-column-menu-view';
import type LevelMarkupView from '../../../levels/level-markup/level-html-markup-view';
import LevelController from '../../../loader/levelController';
import LevelTitleView from '../../../levels/level-title-view';
import LevelWithHelp from '../../../loader/level-with-help';
import type ModalWindowBackgroundView from '../../../modal-window/modal-window-background-view';
import type WithHelpView from '../../../modal-window/modal-window-results.ts/with-help-view';
import type CompletedView from '../../../modal-window/modal-window-results.ts/completed-view';

export default class HelpView extends View {
  constructor(
    input: InputView,
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
      tag: 'div',
      classNames: [HeaderCssClasses.HELP],
      textContent: 'Help',
      callback: () => {
        const inputElement = input.elementCreator.getElement();
        inputElement?.focus();
        if (inputElement instanceof HTMLInputElement) {
          const word = levels[Number(localStorage.getItem('level')) | 0].rightAnswer;
          let count = 0;
          const ourArray: number[] = [];
          const typing = (): void => {
            setTimeout(() => {
              if (inputElement != null && inputElement instanceof HTMLInputElement) {
                inputElement.value += word[count];
                count += 1;

                if (inputElement.value === word) {
                  let levelNumber = Number(localStorage.getItem('level')) | 0;

                  const getWithHelpArray = localStorage.getItem('with-help');

                  if (getWithHelpArray !== null) {
                    const withHelpArray: number[] = JSON.parse(getWithHelpArray);
                    if (!withHelpArray.includes(levelNumber)) {
                      if (
                        menu.menuItems[levelNumber].elementCreator.getElement()?.classList.contains('completed') ===
                        false
                      ) {
                        menu.menuItems[levelNumber].elementCreator.getElement()?.classList.add('with-help');
                        withHelpArray.push(levelNumber);

                        const getCompleteArray = localStorage.getItem('completed');
                        if (getCompleteArray !== null) {
                          const completedArray: number[] = JSON.parse(getCompleteArray);
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
                          withHelpArray.forEach((numberEl) => {
                            if (ourArray.length <= levels.length) ourArray.push(numberEl);
                          });
                          if (ourArray.length === levels.length) {
                            if (modalWrapper.elementCreator.getElement()?.classList.contains('closed') === true) {
                              modalWrapper.elementCreator.getElement()?.classList.remove('closed');
                            }
                            modalWrapper.elementCreator.getElement()?.classList.add('opened');
                            withHelpLevels.setTextContent(withHelpArray.length);
                            completedLevels.setTextContent(0);
                          }
                        }
                      }
                    }
                    LevelWithHelp(withHelpArray);
                  } else {
                    const withHelpArray: number[] = [];
                    if (
                      menu.menuItems[levelNumber].elementCreator.getElement()?.classList.contains('completed') === false
                    ) {
                      menu.menuItems[levelNumber].elementCreator.getElement()?.classList.add('with-help');
                      withHelpArray.push(levelNumber);
                    }

                    const getCompleteArray = localStorage.getItem('completed');
                    if (getCompleteArray !== null) {
                      const completedArray: number[] = JSON.parse(getCompleteArray);
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
                      withHelpArray.forEach((numberEl) => {
                        if (ourArray.length <= levels.length) ourArray.push(numberEl);
                      });
                      if (ourArray.length === levels.length) {
                        if (modalWrapper.elementCreator.getElement()?.classList.contains('closed') === true) {
                          modalWrapper.elementCreator.getElement()?.classList.remove('closed');
                        }
                        modalWrapper.elementCreator.getElement()?.classList.add('opened');
                        withHelpLevels.setTextContent(withHelpArray.length);
                        completedLevels.setTextContent(0);
                      }
                    }
                    LevelWithHelp(withHelpArray);
                  }

                  levelNumber += 1;
                  if (levelNumber > 9) levelNumber = 9;
                  LevelController(levelNumber);
                  const levelTitle = new LevelTitleView(levels[levelNumber].title);
                  levelPlayScreen.elementCreator.getElement()?.classList.add('completed');
                  levelTitle.elementCreator.getElement()?.classList.add('completed');
                  setTimeout(() => {
                    inputElement.value = '';
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
                }
              }
              if (count >= word.length) return;
              typing();
            }, 300);
          };
          typing();
        }
      },
    };
    super(params);
  }
}
