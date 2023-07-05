import './footer.scss';
import { FooterCssClasses } from '../../../../types/types';
import View from '../../view';
import ElementCreator from '../../../util/element-creator';

export default class FooterView extends View {
  constructor() {
    const params = {
      tag: 'footer',
      classNames: [FooterCssClasses.FOOTER],
      textContent: '',
      callback: null,
    };
    super(params);
    this.configureView();
  }

  configureView(): void {
    const gitHubImageParams = {
      tag: 'a',
      classNames: [FooterCssClasses.FOOTER_IMAGE, FooterCssClasses.GITHUB_IMAGE],
      textContent: '',
      callback: null,
    };
    const creatorGitHubImage = new ElementCreator(gitHubImageParams);
    creatorGitHubImage.getElement()?.setAttribute('href', 'https://github.com/flukeout');
    this.elementCreator.addInnerElement(creatorGitHubImage);

    const yearParams = {
      tag: 'div',
      classNames: [FooterCssClasses.YEAR],
      textContent: '2023',
      callback: null,
    };
    const creatorYear = new ElementCreator(yearParams);
    this.elementCreator.addInnerElement(creatorYear);

    const courseLogoParams = {
      tag: 'a',
      classNames: [FooterCssClasses.FOOTER_IMAGE, FooterCssClasses.LOGO],
      textContent: '',
      callback: null,
    };
    const creatorCourseLogo = new ElementCreator(courseLogoParams);
    creatorCourseLogo.getElement()?.setAttribute('href', 'https://rs.school/js/');
    this.elementCreator.addInnerElement(creatorCourseLogo);
  }
}
