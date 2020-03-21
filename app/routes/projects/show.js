import Route from '@ember/routing/route';

export default class ProjectsShowRoute extends Route {
  model(params) {
    return this.store.findRecord('projects/show', params.project_id);

  }
}
