import Model, {belongsTo} from '@ember-data/model';

export default class ProjectsCommitsModel extends Model {
  @belongsTo('projects.show') projectsShow;
}
