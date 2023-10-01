import levels from '../../../../../data/levels';
import { CssClasses } from '../../../../../types/types';
import ElementCreator from '../../../../util/element-creator';
import type MainView from '../../../left-column/main/main-view';
import type LevelMarkupView from '../../../levels/level-markup/level-html-markup-view';
import type LevelPlayScreenView from '../../../levels/level-play-screen/level-play-screen-view';
import LevelTitleView from '../../../levels/level-title-view';
import LevelController from '../../../loader/levelController';
import View from '../../../view';
import type LevelNumber from '../../aside/aside-header/level-number/level-number-view';
import type RightColumnView from '../../right-column-view';
import type MenuLevelsBlockView from '../menu-levels-block/menu-levels-block-view';
import './menu-item.scss';

export default class MenuItemView extends View {
  constructor(
    text: string,
    menuLevelsBlock: MenuLevelsBlockView,
    mainComponent: MainView,
    levelCounter: LevelNumber,
    menuItems: MenuItemView[],
    levelPlayScreen: LevelPlayScreenView,
    rightColumn: RightColumnView,
    htmlMarkup: LevelMarkupView
  ) {
    const params = {
      tag: 'a',
      classNames: [],
      textContent: text,
      callback: (event: Event) => {
        const menuLevelBlockArray = menuLevelsBlock.elementCreator.getElement()?.childNodes;
        this.setNotSelectedStatus();
        const levelTitle = new LevelTitleView(levels[Number(localStorage.getItem('level'))].title);
        menuLevelBlockArray?.forEach((item, index) => {
          if (item === event.target) {
            LevelController(index);
            const getLevelTitle = levelTitle.getHtmlElement();
            const getLevelPlayScreen = levelPlayScreen.getHtmlElement();
            if (getLevelTitle != null && getLevelPlayScreen != null)
              mainComponent.setContent([getLevelTitle, getLevelPlayScreen]);
            levelCounter.setTextContent(levels[Number(localStorage.getItem('level'))].level);
            this.setSelectedStatus();
            levelPlayScreen.setContent();
            rightColumn.elementCreator.getElement()?.classList.remove('menu-open');
            htmlMarkup.setContent();
          }
        });
      },
    };
    super(params);
    this.menuItems = menuItems;
    this.configureView();
  }

  menuItems: MenuItemView[];

  configureView(): void {
    const checkMarkParams = {
      tag: 'div',
      classNames: [CssClasses.MENU_CHECK_MARK],
      textContent: '',
      callback: null,
    };
    const creatorMenuCheckMark = new ElementCreator(checkMarkParams);
    this.elementCreator.addInnerElement(creatorMenuCheckMark);
  }

  setSelectedStatus(): void {
    this.menuItems.forEach((menuItem) => {
      menuItem.setNotSelectedStatus();
    });
    const element = this.elementCreator.getElement();
    element?.classList.add(CssClasses.ITEM_SELECTED);
  }

  setNotSelectedStatus(): void {
    const element = this.elementCreator.getElement();
    element?.classList.remove(CssClasses.ITEM_SELECTED);
  }
}
