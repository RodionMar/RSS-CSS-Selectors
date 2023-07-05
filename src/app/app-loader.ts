import '../global.scss';
import levels from '../data/levels';
import FooterView from './view/left-column/footer/footer-view';
import HeaderView from './view/left-column/header/header-view';
import LeftColumnView from './view/left-column/left-column-view';
import MainView from './view/left-column/main/main-view';
import LevelPlayScreenView from './view/levels/level-play-screen/level-play-screen-view';
import LevelTitleView from './view/levels/level-title-view';
import AsideHeaderView from './view/right-column/aside/aside-header/aside-header-view';
import AsideView from './view/right-column/aside/aside-view';
import RightColumnMenuView from './view/right-column/menu/right-column-menu-view';
import RightColumnView from './view/right-column/right-column-view';
import LevelNumber from './view/right-column/aside/aside-header/level-number/level-number-view';
import AsideHeaderLevelNav from './view/right-column/aside/aside-header/aside-header-level-nav/aside-header-level-nav-view';
import AsideHeaderCheckMark from './view/right-column/aside/aside-header/aside-header-check-mark/aside-header-check-mark-view';
import LevelMarkupView from './view/levels/level-markup/level-html-markup-view';
import EditorView from './view/left-column/main/editor/editor-view';
import EditorCssView from './view/left-column/main/editor/editor-css/editor-css-view';
import EditorHtmlView from './view/left-column/main/editor/editor-html/editor-html-view';
import EditorHtmlBodyView from './view/left-column/main/editor/editor-html/editor-html-body-view.ts/editor-html-body-view';
import InputView from './view/left-column/main/editor/editor-css/editor-css-body/input/input-view';
import EditorCssBodyView from './view/left-column/main/editor/editor-css/editor-css-body/editor-css-body-view';
import EnterButtonView from './view/left-column/main/editor/editor-css/enter-button-view';
import ModalWindowView from './view/modal-window/modal-window-view';
import WithHelpView from './view/modal-window/modal-window-results.ts/with-help-view';
import CompletedView from './view/modal-window/modal-window-results.ts/completed-view';
import ModalWindowBackgroundView from './view/modal-window/modal-window-background-view';
import LevelMarkupWrapperView from './view/levels/level-markup/level-markup-wrapper-view';

export default class AppLoader {
  constructor() {
    this.createView();
  }

  // Components of left part of application
  creatorLeftColumn = new LeftColumnView();
  creatorMain = new MainView();
  creatorEditor = new EditorView();
  creatorEditorHtml = new EditorHtmlView();
  creatorEditorHtmlBody = new EditorHtmlBodyView();
  creatorHtmlMarkup = new LevelMarkupView();
  levelPlayScreen = new LevelPlayScreenView(levels[Number(localStorage.getItem('level'))].gameScreen);
  creatorFooter = new FooterView();
  levelTitle = new LevelTitleView(levels[Number(localStorage.getItem('level')) | 0].title);
  creatorHtmlMarkupWrapper = new LevelMarkupWrapperView(this.creatorHtmlMarkup);

  // Components of right part of application
  creatorAsideHeaderNav = new AsideHeaderLevelNav();
  creatorAsideHeaderCheckMark = new AsideHeaderCheckMark();
  creatorRightColumn = new RightColumnView();
  creatorAside = new AsideView();
  creatorAsideCounter = new LevelNumber();
  creatorRightColumnMenu = new RightColumnMenuView(
    this.creatorMain,
    this.creatorAsideCounter,
    this.levelPlayScreen,
    this.creatorRightColumn,
    this.creatorHtmlMarkup
  );

  creatorAsideHeader = new AsideHeaderView(
    this.creatorMain,
    this.creatorAsideCounter,
    this.creatorAsideHeaderNav,
    this.creatorRightColumnMenu,
    this.levelPlayScreen,
    this.creatorRightColumn,
    this.creatorHtmlMarkup
  );

  // Modal window
  creatorModalWindowBackground = new ModalWindowBackgroundView();
  creatorResultsWithHelp = new WithHelpView();
  creatorResultsCompleted = new CompletedView();
  creatorModalWindow = new ModalWindowView(
    this.creatorResultsWithHelp,
    this.creatorResultsCompleted,
    this.creatorModalWindowBackground,
    this.creatorEditor,
    this.creatorMain,
    this.levelPlayScreen,
    this.creatorAsideCounter,
    this.creatorRightColumnMenu,
    this.creatorHtmlMarkup
  );

  creatorEditorCssBodyInput = new InputView(
    this.creatorEditor,
    this.creatorMain,
    this.levelPlayScreen,
    this.creatorAsideCounter,
    this.creatorRightColumnMenu,
    this.creatorHtmlMarkup,
    this.creatorModalWindowBackground,
    this.creatorResultsWithHelp,
    this.creatorResultsCompleted
  );

  creatorEditorCssBody = new EditorCssBodyView(this.creatorEditorCssBodyInput);

  creatorEditorCssBodyEnter = new EnterButtonView(
    this.creatorEditorCssBodyInput,
    this.creatorEditor,
    this.creatorMain,
    this.levelPlayScreen,
    this.creatorAsideCounter,
    this.creatorRightColumnMenu,
    this.creatorHtmlMarkup,
    this.creatorModalWindowBackground,
    this.creatorResultsWithHelp,
    this.creatorResultsCompleted
  );

  creatorEditorCss = new EditorCssView();

  creatorHeader = new HeaderView(
    this.creatorEditorCssBodyInput,
    this.creatorEditor,
    this.creatorMain,
    this.levelPlayScreen,
    this.creatorAsideCounter,
    this.creatorRightColumnMenu,
    this.creatorHtmlMarkup,
    this.creatorModalWindowBackground,
    this.creatorResultsWithHelp,
    this.creatorResultsCompleted
  );

  createView(): void {
    this.creatorHtmlMarkup.setContent();

    const getHeader = this.creatorHeader.getHtmlElement();
    if (getHeader != null) this.creatorLeftColumn.elementCreator.addInnerElement(getHeader);

    const getMain = this.creatorMain.getHtmlElement();
    if (getMain != null) this.creatorLeftColumn.elementCreator.addInnerElement(getMain);

    const getEditor = this.creatorEditor.getHtmlElement();
    if (getEditor != null) this.creatorMain.elementCreator.addInnerElement(getEditor);

    const getEditorCss = this.creatorEditorCss.getHtmlElement();
    if (getEditorCss != null) this.creatorEditor.elementCreator.addInnerElement(getEditorCss);

    const getEditorCssBody = this.creatorEditorCssBody.getHtmlElement();
    if (getEditorCssBody != null) this.creatorEditorCss.elementCreator.addInnerElement(getEditorCssBody);

    const getEditorCssBodyEnter = this.creatorEditorCssBodyEnter.getHtmlElement();
    if (getEditorCssBodyEnter != null) this.creatorEditorCssBody.elementCreator.addInnerElement(getEditorCssBodyEnter);

    const getEditorHtml = this.creatorEditorHtml.getHtmlElement();
    if (getEditorHtml != null) this.creatorEditor.elementCreator.addInnerElement(getEditorHtml);

    const getEditorHtmlBody = this.creatorEditorHtmlBody.getHtmlElement();
    if (getEditorHtmlBody != null) this.creatorEditorHtml.elementCreator.addInnerElement(getEditorHtmlBody);

    const getHtmlMarkupWrapper = this.creatorHtmlMarkupWrapper.getHtmlElement();
    if (getHtmlMarkupWrapper != null) this.creatorEditorHtmlBody.elementCreator.addInnerElement(getHtmlMarkupWrapper);

    const getLevelTitle = this.levelTitle.getHtmlElement();
    const getLevelPlayScreen = this.levelPlayScreen.getHtmlElement();
    if (getLevelTitle != null && getLevelPlayScreen != null)
      this.creatorMain.setContent([getLevelTitle, getLevelPlayScreen]);

    const getFooter = this.creatorFooter.getHtmlElement();
    if (getFooter != null) this.creatorLeftColumn.elementCreator.addInnerElement(getFooter);

    this.levelPlayScreen.setContent(this.creatorHtmlMarkup.markupElements);

    // Create right part of application
    const getAside = this.creatorAside.getHtmlElement();
    if (getAside != null) this.creatorRightColumn.elementCreator.addInnerElement(getAside);

    const getAsideCounter = this.creatorAsideCounter.getHtmlElement();
    if (getAsideCounter != null) this.creatorAsideHeader.elementCreator.addInnerElement(getAsideCounter);

    const getAsideHeader = this.creatorAsideHeader.getHtmlElement();
    if (getAsideHeader != null) this.creatorAside.elementCreator.addInnerElement(getAsideHeader);

    const getRightColumnMenu = this.creatorRightColumnMenu.getHtmlElement();
    if (getRightColumnMenu != null) this.creatorRightColumn.elementCreator.addInnerElement(getRightColumnMenu);

    const getAsideHeaderNav = this.creatorAsideHeaderNav.getHtmlElement();
    if (getAsideHeaderNav != null) this.creatorAsideHeader.elementCreator.addInnerElement(getAsideHeaderNav);

    const getModalWindow = this.creatorModalWindow.getHtmlElement();
    if (getModalWindow != null) this.creatorModalWindowBackground.elementCreator.addInnerElement(getModalWindow);
    this.creatorResultsWithHelp.setTextContent(1);
    this.creatorResultsCompleted.setTextContent(1);
    // Add components to document
    const getLeftColumn = this.creatorLeftColumn.getHtmlElement();
    const getRightColumn = this.creatorRightColumn.getHtmlElement();
    const getModalWindowBackground = this.creatorModalWindowBackground.getHtmlElement();
    if (getLeftColumn != null && getRightColumn != null && getModalWindowBackground != null) {
      document.body.append(getLeftColumn, getRightColumn, getModalWindowBackground);
    }

    const getCompleteArray = localStorage.getItem('completed');

    if (getCompleteArray !== null) {
      const completedArray: number[] = JSON.parse(getCompleteArray);
      completedArray.forEach((numberEl) => {
        this.creatorRightColumnMenu.menuItems[numberEl].elementCreator.getElement()?.classList.add('completed');
      });
    }

    const getWithHelpArray = localStorage.getItem('with-help');

    if (getWithHelpArray !== null) {
      const withHelpArray: number[] = JSON.parse(getWithHelpArray);
      withHelpArray.forEach((numberEl) => {
        this.creatorRightColumnMenu.menuItems[numberEl].elementCreator.getElement()?.classList.add('with-help');
      });
    }
  }
}
