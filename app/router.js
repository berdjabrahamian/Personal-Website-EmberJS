import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('contact', function () {
    this.route('index', {path: '/'});
  });
  this.route('posts', function () {
    this.route('index', {path: '/'});
  });
  this.route('lessons', function () {
    this.route('index', {path: '/'});
  });

  this.route('projects', function() {
    this.route('index', {path: '/'});
  });
});
