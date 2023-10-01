import './share.scss';
import View from '../../../view';
import { HeaderCssClasses } from '../../../../../types/types';
import ShareItemView from './share-item/share-item-view';

export default class ShareView extends View {
  constructor() {
    const params = {
      tag: 'div',
      classNames: [HeaderCssClasses.SHARE],
      textContent: 'Share',
      callback: null,
    };
    super(params);
    this.configureView();
  }

  configureView(): void {
    const shareItems = [
      {
        name: [HeaderCssClasses.SHARE_ITEM, HeaderCssClasses.SHARE_MAIL],
      },
      {
        name: [HeaderCssClasses.SHARE_ITEM, HeaderCssClasses.SHARE_FACEBOOK],
      },
      {
        name: [HeaderCssClasses.SHARE_ITEM, HeaderCssClasses.SHARE_TWITTER],
      },
    ];
    shareItems.forEach((item) => {
      const shareItem = new ShareItemView(item.name);
      if (shareItem.elementCreator.getElement()?.classList.contains(HeaderCssClasses.SHARE_MAIL) === true) {
        shareItem.elementCreator.getElement()?.setAttribute('href', 'https://mail.google.com/mail/');
      }
      if (shareItem.elementCreator.getElement()?.classList.contains(HeaderCssClasses.SHARE_FACEBOOK) !== true) {
        shareItem.elementCreator.getElement()?.setAttribute('href', 'https://www.facebook.com/');
      }
      if (shareItem.elementCreator.getElement()?.classList.contains(HeaderCssClasses.SHARE_TWITTER) !== true) {
        shareItem.elementCreator.getElement()?.setAttribute('href', 'https://www.twitter.com/');
      }
      const getShareItem = shareItem.getHtmlElement();
      if (getShareItem !== null) this.elementCreator.addInnerElement(getShareItem);
    });
  }
}
