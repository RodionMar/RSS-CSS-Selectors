import levels from '../../../../../data/levels';
import { AsideCssClasses } from '../../../../../types/types';
import ElementCreator from '../../../../util/element-creator';
import type MainView from '../../../left-column/main/main-view';
import type LevelMarkupView from '../../../levels/level-markup/level-html-markup-view';
import type LevelPlayScreenView from '../../../levels/level-play-screen/level-play-screen-view';
import LevelTitleView from '../../../levels/level-title-view';
import LevelController from '../../../loader/levelController';
import View from '../../../view';
import type RightColumnMenuView from '../../menu/right-column-menu-view';
import type RightColumnView from '../../right-column-view';
import type AsideHeaderLevelNav from './aside-header-level-nav/aside-header-level-nav-view';
import './aside-header.scss';
import LevelView from './level-arrows/level-arrow-view';
import type LevelNumber from './level-number/level-number-view';
import AsideMenuButtonView from './menu/menu-view';

export default class AsideHeaderView extends View {
  constructor(
    mainComponent: MainView,
    headerCounter: LevelNumber,
    creatorAsideHeaderNav: AsideHeaderLevelNav,
    menu: RightColumnMenuView,
    levelPlayScreen: LevelPlayScreenView,
    rightColumn: RightColumnView,
    htmlMarkup: LevelMarkupView
  ) {
    const params = {
      tag: 'div',
      classNames: [AsideCssClasses.ASIDE_HEADER],
      textContent: '',
      callback: null,
    };
    super(params);
    this.configureView(
      mainComponent,
      headerCounter,
      creatorAsideHeaderNav,
      menu,
      levelPlayScreen,
      rightColumn,
      htmlMarkup
    );
  }

  configureView(
    mainComponent: MainView,
    headerCounter: LevelNumber,
    creatorAsideHeaderNav: AsideHeaderLevelNav,
    menu: RightColumnMenuView,
    levelPlayScreen: LevelPlayScreenView,
    rightColumn: RightColumnView,
    htmlMarkup: LevelMarkupView
  ): void {
    const AsideHeaderLevelNavParams = {
      tag: 'div',
      classNames: [AsideCssClasses.ASIDE_HEADER_LEVEL_NAV],
      textContent: ``,
      callback: null,
    };
    const creatorAsideHeaderLevelNav = new ElementCreator(AsideHeaderLevelNavParams);
    creatorAsideHeaderNav.elementCreator.addInnerElement(creatorAsideHeaderLevelNav);

    const levelTitle = new LevelTitleView(levels[Number(localStorage.getItem('level'))].title);
    const levelNavItems = [
      {
        classNames: [AsideCssClasses.ASIDE_HEADER_LEVEL_ARROW, AsideCssClasses.ASIDE_HEADER_LEVEL_PREVIOUS],
        callback: () => {
          const localStorageItem = localStorage.getItem('level');
          let convertToNumber = Number(localStorageItem);
          if (localStorageItem === null) convertToNumber = 0;
          convertToNumber -= 1;
          if (convertToNumber < 0) convertToNumber = 0;
          LevelController(convertToNumber);
          const getLevelTitle = levelTitle.getHtmlElement();
          const getLevelPlayScreen = levelPlayScreen.getHtmlElement();
          if (getLevelTitle != null && getLevelPlayScreen != null)
            mainComponent.setContent([getLevelTitle, getLevelPlayScreen]);
          headerCounter.setTextContent(levels[convertToNumber].level);
          menu.menuItems[convertToNumber].setSelectedStatus();
          levelPlayScreen.setContent();
          htmlMarkup.setContent();
        },
      },
      {
        classNames: [AsideCssClasses.ASIDE_HEADER_LEVEL_ARROW, AsideCssClasses.ASIDE_HEADER_LEVEL_NEXT],
        callback: () => {
          const localStorageItem = localStorage.getItem('level');
          let convertToNumber = Number(localStorageItem);
          if (localStorageItem === null) convertToNumber = 0;
          convertToNumber += 1;
          if (convertToNumber > 9) convertToNumber = 9;
          LevelController(convertToNumber);
          const getLevelTitle = levelTitle.getHtmlElement();
          const getLevelPlayScreen = levelPlayScreen.getHtmlElement();
          if (getLevelTitle != null && getLevelPlayScreen != null)
            mainComponent.setContent([getLevelTitle, getLevelPlayScreen]);
          headerCounter.setTextContent(levels[convertToNumber].level);
          menu.menuItems[convertToNumber].setSelectedStatus();
          levelPlayScreen.setContent();
          htmlMarkup.setContent();
        },
      },
    ];
    levelNavItems.forEach((classNames) => {
      const levelNavItem = new LevelView(classNames);
      const getLevelNavItem = levelNavItem.getHtmlElement();
      if (getLevelNavItem != null) creatorAsideHeaderLevelNav.addInnerElement(getLevelNavItem);
    });

    const creatorMenuButtonView = new AsideMenuButtonView(rightColumn);
    const getMenuButton = creatorMenuButtonView.getHtmlElement();
    if (getMenuButton != null) creatorAsideHeaderNav.elementCreator.addInnerElement(getMenuButton);
  }

  // Set content for Menu Header
  setContent(view: HTMLElement): void {
    const element = view;
    const currentElement = this.elementCreator.getElement();

    while (currentElement?.childNodes[0] != null) {
      currentElement.childNodes[0].remove();
    }

    this.elementCreator.addInnerElement(element);
  }
}
