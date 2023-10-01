import './header.scss';
import { HeaderCssClasses } from '../../../../types/types';
import View from '../../view';
import LogoView from './logo/logo';
import ShareView from './share-section/share-view';
import HelpView from './help/help-view';
import type InputView from '../main/editor/editor-css/editor-css-body/input/input-view';
import type EditorView from '../main/editor/editor-view';
import type MainView from '../main/main-view';
import type LevelPlayScreenView from '../../levels/level-play-screen/level-play-screen-view';
import type LevelNumber from '../../right-column/aside/aside-header/level-number/level-number-view';
import type RightColumnMenuView from '../../right-column/menu/right-column-menu-view';
import type LevelMarkupView from '../../levels/level-markup/level-html-markup-view';
import type ModalWindowBackgroundView from '../../modal-window/modal-window-background-view';
import type WithHelpView from '../../modal-window/modal-window-results.ts/with-help-view';
import type CompletedView from '../../modal-window/modal-window-results.ts/completed-view';

export default class HeaderView extends View {
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
      tag: 'header',
      classNames: [HeaderCssClasses.HEADER],
      textContent: '',
      callback: null,
    };
    super(params);

    this.configureView(
      input,
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

  configureView(
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
  ): void {
    const creatorHelp = new HelpView(
      input,
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

    const getHelp = creatorHelp.getHtmlElement();
    if (getHelp != null) this.elementCreator.addInnerElement(getHelp);

    const creatorLogo = new LogoView();
    const getLogo = creatorLogo.getHtmlElement();
    if (getLogo != null) this.elementCreator.addInnerElement(getLogo);

    const creatorShare = new ShareView();
    const getShare = creatorShare.getHtmlElement();
    if (getShare != null) this.elementCreator.addInnerElement(getShare);
  }
}
