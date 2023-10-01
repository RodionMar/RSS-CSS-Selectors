import './share-item.scss';
import View from '../../../../view';

export default class ShareItemView extends View {
  constructor(className: string[]) {
    const params = {
      tag: 'a',
      classNames: className,
      textContent: '',
      callback: null,
    };
    super(params);
  }
}
