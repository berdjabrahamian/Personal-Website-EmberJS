import ApplicationAdapter from '../application';
import ENV from 'personal-portfolio/config/environment';

export default class ProjectsShowAdapter extends ApplicationAdapter {
  host = 'https://api.github.com';

  urlForFindRecord(params) {
    console.log(params);
    let baseUrl = this.host + `/repos/${ENV.USERNAME}/${params}`;
    return baseUrl;
  }
}
