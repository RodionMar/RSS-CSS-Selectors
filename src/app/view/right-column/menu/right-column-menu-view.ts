import levels from '../../../../data/levels';
import { CssClasses } from '../../../../types/types';
import ElementCreator from '../../../util/element-creator';
import type MainView from '../../left-column/main/main-view';
import type LevelMarkupView from '../../levels/level-markup/level-html-markup-view';
import type LevelPlayScreenView from '../../levels/level-play-screen/level-play-screen-view';
import LevelTitleView from '../../levels/level-title-view';
import LevelCompleted from '../../loader/level-completed';
import LevelWithHelp from '../../loader/level-with-help';
import LevelController from '../../loader/levelController';
import View from '../../view';
import type LevelNumber from '../aside/aside-header/level-number/level-number-view';
import type RightColumnView from '../right-column-view';
import MenuItemView from './menu-item/menu-item-view';
import MenuLevelsBlockView from './menu-levels-block/menu-levels-block-view';
import './right-column-menu-view.scss';

export default class RightColumnMenuView extends View {
  constructor(
    mainComponent: MainView,
    levelCounter: LevelNumber,
    levelPlayScreen: LevelPlayScreenView,
    rightColumn: RightColumnView,
    htmlMarkup: LevelMarkupView
  ) {
    const params = {
      tag: 'div',
      classNames: [CssClasses.MENU],
      textContent: '',
      callback: null,
    };
    super(params);
    this.menuItems = [];
    this.configureView(mainComponent, levelCounter, levelPlayScreen, rightColumn, htmlMarkup);
  }

  menuItems: MenuItemView[];

  configureView(
    mainComponent: MainView,
    levelCounter: LevelNumber,
    levelPlayScreen: LevelPlayScreenView,
    rightColumn: RightColumnView,
    htmlMarkup: LevelMarkupView
  ): void {
    const titleParams = {
      tag: 'div',
      classNames: [CssClasses.MENU_TITLE],
      textContent: 'Choose a level',
      callback: null,
    };
    const creatorMenuTitle = new ElementCreator(titleParams);
    this.elementCreator.addInnerElement(creatorMenuTitle);

    const creatorMenuLevelsBlock = new MenuLevelsBlockView();
    const getMenuLevelsBlock = creatorMenuLevelsBlock.getHtmlElement();
    if (getMenuLevelsBlock != null) this.elementCreator.addInnerElement(getMenuLevelsBlock);

    levels.forEach((item, index) => {
      const levelItem = new MenuItemView(
        item.menuText,
        creatorMenuLevelsBlock,
        mainComponent,
        levelCounter,
        this.menuItems,
        levelPlayScreen,
        rightColumn,
        htmlMarkup
      );
      this.menuItems.push(levelItem);

      if (index === Number(localStorage.getItem('level')) || index === 0) {
        levelItem.setSelectedStatus();
      }

      const getLevelItem = levelItem.getHtmlElement();
      if (getLevelItem != null) creatorMenuLevelsBlock.elementCreator.addInnerElement(getLevelItem);
    });

    const resetProgressParams = {
      tag: 'div',
      classNames: [CssClasses.RESET_PROGRESS],
      textContent: 'Reset Progress',
      callback: () => {
        const levelNumber = 0;
        LevelController(levelNumber);
        LevelCompleted([]);
        LevelWithHelp([]);

        const levelTitle = new LevelTitleView(levels[levelNumber].title);
        const getLevelTitle = levelTitle.getHtmlElement();
        const getLevelPlayScreen = levelPlayScreen.getHtmlElement();
        if (getLevelTitle != null && getLevelPlayScreen != null)
          mainComponent.setContent([getLevelTitle, getLevelPlayScreen]);
        this.menuItems[levelNumber].setSelectedStatus();
        this.menuItems.forEach((menuElement) => {
          if (menuElement.elementCreator.getElement()?.classList.contains('completed') === true) {
            menuElement.elementCreator.getElement()?.classList.remove('completed');
          } else if (menuElement.elementCreator.getElement()?.classList.contains('with-help') === true) {
            menuElement.elementCreator.getElement()?.classList.remove('with-help');
          }
        });
        levelCounter.setTextContent(levels[levelNumber].level);
        levelPlayScreen.setContent();
        htmlMarkup.setContent();
        rightColumn.elementCreator.getElement()?.classList.remove('menu-open');
      },
    };
    const creatorResetProgress = new ElementCreator(resetProgressParams);
    creatorMenuLevelsBlock.elementCreator.addInnerElement(creatorResetProgress);
  }
}
