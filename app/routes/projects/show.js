import Route from '@ember/routing/route';

export default class ProjectsShowRoute extends Route {
  model(params) {
    console.log(params);
    //this works
    return this.store.findRecord('projects/show', params.project_name);

  }
}
