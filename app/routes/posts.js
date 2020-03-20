import Route from '@ember/routing/route';
import {action} from '@ember/object';


export default class PostsRoute extends Route {
  model() {
    return this.store.findAll('post');
  }

  @action
  loading() {
    return true;
  }

  @action
  error(error) {
    this.replaceWith('/');
    return true;


    // if (error.status === '403') {
    //   this.replaceWith('/');
    // } else {
    //   this.notifier.error(error);
    //   // Let the route above this handle the error.
    //   return true;
    // }
  }
}
