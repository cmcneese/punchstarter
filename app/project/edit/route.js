import Ember from 'ember';
import config from 'punchstarter/config/environment';

export default Ember.Route.extend({
  model(params) {
    return fetch(`${config.apiUrl}/projects/${params.id}`)
      .then((r) => r.json());
  },
});
