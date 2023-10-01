import { AsideCssClasses } from '../../../../../../types/types';
import ElementCreator from '../../../../../util/element-creator';
import View from '../../../../view';
import type RightColumnView from '../../../right-column-view';
import './menu.scss';

export default class AsideMenuButtonView extends View {
  constructor(rightColumn: RightColumnView) {
    const params = {
      tag: 'div',
      classNames: [AsideCssClasses.ASIDE_MENU],
      textContent: '',
      callback: () => {
        rightColumn.elementCreator.getElement()?.classList.toggle('menu-open');
      },
    };
    super(params);
    this.configureView();
  }

  configureView(): void {
    const AsideMenuCenterLineParams = {
      tag: 'div',
      classNames: [AsideCssClasses.ASIDE_MENU_LINE],
      textContent: '',
      callback: null,
    };
    const creatorAsideMenuCenterLine = new ElementCreator(AsideMenuCenterLineParams);
    this.elementCreator.addInnerElement(creatorAsideMenuCenterLine);
  }
}
