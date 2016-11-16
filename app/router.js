import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL,
});

Router.map(function () {
  this.route('login');
  this.route('project', { path: '/projects' }, function () {
    this.route('new-project');
    this.route('edit', { path: '/:id' });
  });
});

// Simliar to this route map if we were using vue
// routes = [
//   {
//     name: 'login',
//     path: '/login',
//     component: require('./login/component.vue')
//   }
// ]

export default Router;
