import ApplicationSerializer from '../application';

export default class ProjectsShowSerializer extends ApplicationSerializer {
  serialize(snapshot) {
    console.log(snapshot);
    // return {project_name: model.get('name')};
  }
}

