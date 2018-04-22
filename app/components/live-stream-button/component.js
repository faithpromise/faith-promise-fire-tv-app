import Component from '@ember/component';
import {
  inject as service
} from '@ember/service';
import {
  task
} from 'ember-concurrency';
import {
  computed
} from '@ember/object';
import {
  getOwner
} from '@ember/application';

export default Component.extend({
  ajax: service(),

  isLive: null,

  currentLiveEventURL: computed(function() {
    const config = getOwner(this).resolveRegistration('config:environment');
    return config.APP.urls.currentLiveEvent;
  }),

  checkIfStreamIsLive: task(function*() {
    const url = this.get('currentLiveEventURL');
    const ajaxResponse = yield this.get('ajax').request(url);
    const isLive = ajaxResponse.response.item.isLive;
    this.set('isLive', isLive);
  }).on('init'),
});
