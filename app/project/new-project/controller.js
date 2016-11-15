import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    saveForm(name, goal, description) {
      if (name && goal && description) {
        fetch(`${config.apiUrl}/projects`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name, goal, description }),
        }).then((r) => r.json())
          .then(() => {
            alert('Project saved');
            this.transitionToRoute('project.index');
          });
      } else {
        alert('You must fill in the form');
      }
    },
  },
});
