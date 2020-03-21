import Model, { attr } from '@ember-data/model';

export default class ProjectsShowModel extends Model {
  @attr name;
  @attr full_name;
  @attr('boolean') private;
  @attr owner;
  @attr('date') createdAt;
  @attr avatar;
  @attr html_url;
  @attr status;
  @attr description;
  @attr fork;
}
