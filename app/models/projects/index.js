import Model, { attr } from '@ember-data/model';

export default class ProjectsIndexModel extends Model {
  @attr name;
  @attr full_name;
  @attr('boolean') private;
  @attr owner;
  @attr('date') createdAt;
  @attr avatar;
  @attr html_url;
  @attr status;
  @attr description;
  @attr ('boolean') fork;
  @attr status;
  @attr ('date') created_at;
  @attr ('date') updated_at;
  @attr ('date') pushed_at;
  @attr ssh_url;
  @attr clone_url;
  @attr ('string') language;
}
