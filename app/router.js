import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('contact');
  this.route('posts', function() {
    this.route('index', {path: '/'});
  });
  this.route('lesson', function() {
    this.route('index', {path: '/'});
  });
});
