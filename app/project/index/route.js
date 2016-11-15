import Ember from 'ember';
import config from 'punchstarter/config/environment';

export default Ember.Route.extend({
  model() {
    return fetch(`${config.apiUrl}/projects`)
    .then((r) => r.json());
  },
});
