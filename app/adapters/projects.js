import ApplicationAdapter from './application';
import ENV from 'personal-portfolio/config/environment';

export default class ProjectsAdapter extends ApplicationAdapter {
  host = 'https://api.github.com';

  urlForFindAll() {
    let baseUrl = this.host + `/users/${ENV.USERNAME}/repos`;
    return baseUrl;
  }
  
}
