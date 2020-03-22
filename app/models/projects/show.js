import Model, { attr } from '@ember-data/model';

export default class ProjectsShowModel extends Model {
  @attr name;
  @attr full_name;
  @attr('boolean') private;
  @attr owner;
  @attr html_url;
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
