import ApplicationAdapter from './application';
import ENV from 'personal-portfolio/config/environment';

export default class ProjectAdapter extends ApplicationAdapter {
  host = `https://api.github.com/users/${ENV.USERNAME}/repos`;

  urlForFindAll() {
    let baseUrl = this.host;
    return baseUrl;
  }

}
