import { CssClasses } from '../../../../../../types/types';
import View from '../../../../view';

export default class ItemNumber extends View {
  constructor(text: string) {
    const params = {
      tag: 'span',
      classNames: [CssClasses.ITEM_NUMBER],
      textContent: text,
      callback: null,
    };
    super(params);
  }
}
