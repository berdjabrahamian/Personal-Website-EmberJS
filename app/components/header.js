import Component from '@glimmer/component';
import ENV from 'personal-portfolio/config/environment';

export default class HeaderComponent extends Component {
  get githubAddress() {
    return ENV.GITHUB + '/' + ENV.USERNAME;
  }

  get email() {
    return ENV.EMAIL;
  }

  get phoneNumber() {
    return ENV.PHONE_NUMBER;
  }
}
