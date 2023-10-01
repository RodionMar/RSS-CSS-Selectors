export type callback = (event: Event) => void;

export interface IViewParams {
  tag: string;
  classNames: string[];
  textContent?: string;
  callback?: callback | null;
}

export interface ICallbackParams {
  classNames: string[];
  callback: callback | null;
}

export interface ICommonViewParams {
  tag: string;
  classNames: string[];
}

export enum CssClasses {
  RIGHT_COLUMN = 'right-column',
  LEFT_COLUMN = 'left-column',
  MENU = 'menu',
  MENU_CHECK_MARK = 'menu-check-mark',
  MENU_TITLE = 'menu-title',
  MENU_LEVELS = 'menu-level',
  ITEM_NUMBER = 'item-number',
  RESET_PROGRESS = 'reset-progress',
  ITEM_SELECTED = 'selected',
}

export enum ModalWindowCssClasses {
  MODAL_WINDOW_BACKGROUND = 'modal-window-background',
  MODAL_WINDOW = 'modal-window',
  OPENED = 'opened',
  CLOSED = 'closed',
  MODAL_WINDOW_TITLE = 'modal-window__title',
  MODAL_WINDOW_RESULTS = 'modal-window__results',
  MODAL_WINDOW_RESULTS_TITLE = 'results-title',
  MODAL_WINDOW_RESULTS_WITH_HELP = 'modal-window__results-with-help',
  MODAL_WINDOW_RESULTS_COMPLETED = 'modal-window__results-completed',
  MODAL_WINDOW_BUTTON = 'modal-window__button',
}

export enum HeaderCssClasses {
  HEADER = 'header',
  HELP = 'help',
  LOGO = 'logo',
  SHARE = 'share',
  SHARE_ITEM = 'share-item',
  SHARE_MAIL = 'share-mail',
  SHARE_FACEBOOK = 'share-facebook',
  SHARE_TWITTER = 'share-twitter',
}

export enum MainCssClasses {
  MAIN = 'main',
  EDITOR = 'editor',
  EDITOR_CSS = 'editor-css',
  EDITOR_CSS_INPUT = 'editor-css-input',
  EDITOR_HTML = 'editor-html',
  EDITOR_CSS_HEADER = 'editor-css-header',
  EDITOR_HTML_HEADER = 'editor-html-header',
  FILE_NAME = 'file-name',
  EDITOR_CSS_BODY = 'editor-css-body',
  EDITOR_CSS_ENTER_BUTTON = 'editor-css-enter-button',
  EDITOR_CSS_BODY_STYLES = 'editor-css-body-styles',
  EDITOR_HTML_BODY = 'editor-html-body',
  MARKUP = 'markup',
  NUMBERS_LINE = 'numbers-line',
  NUMBERS_LINE_CSS = 'numbers-line--css',
  NUMBERS_LINE_HTML = 'numbers-line--html',
  LEVEL_TITLE = 'level-title',
  LEVEL_PLAY_SCREEN = 'level-play-screen',
  LEVEL_HTML_MARKUP = 'level-html-markup',
}

export enum AsideCssClasses {
  ASIDE = 'aside',
  ASIDE_HEADER = 'aside-header',
  ASIDE_HEADER_NAV = 'aside-header-nav',
  ASIDE_HEADER_LEVEL_NAV = 'aside-header-level-nav',
  ASIDE_HEADER_LEVEL_ARROW = 'aside-header-level-arrow',
  ASIDE_HEADER_LEVEL_PREVIOUS = 'aside-header-level-previous',
  ASIDE_HEADER_LEVEL_NEXT = 'aside-header-level-next',
  ASIDE_MENU = 'aside-menu',
  MENU_OPENED = 'menu-opened',
  ASIDE_MENU_LINE = 'aside-menu-line',
  ASIDE_LEVEL = 'aside-level',
  ASIDE_CHECK_MARK = 'aside-check-mark',
}

export enum FooterCssClasses {
  FOOTER = 'footer',
  FOOTER_IMAGE = 'footer-image',
  GITHUB_IMAGE = 'github-image',
  YEAR = 'year',
  LOGO = 'course-logo',
}

export enum Birds {
  YELLOW = 'yellow',
  GREEN = 'green',
  RED = 'red',
  BLUE = 'blue',
  USUAL = 'usual',
}

export enum MenuItems {
  WITH_HELP = 'with-help',
  COMPLETED = 'completed',
}
