import { type ICallbackParams } from '../../../../../../types/types';
import View from '../../../../view';
import './level-arrow.scss';

export default class LevelView extends View {
  constructor(param: ICallbackParams) {
    const params = {
      tag: 'a',
      classNames: param.classNames,
      textContent: '',
      callback: param.callback,
    };
    super(params);
  }
}
