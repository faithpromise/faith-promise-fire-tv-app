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
import {
  bool
} from '@ember/object/computed';

export default Component.extend({
  classNames: ['live-stream-button'],

  classNameBindings: ['isLive:isLive'],

  isVisible: bool('eventStartTime'),

  ajax: service(),

  isLive: null,

  eventStartTime: null,

  currentLiveEventURL: computed(function() {
    const config = getOwner(this).resolveRegistration('config:environment');
    return config.APP.urls.currentLiveEvent;
  }),

  checkIfStreamIsLive: task(function*() {
    const url = this.get('currentLiveEventURL');
    const ajaxResponse = yield this.get('ajax').request(url);
    this.setProperties(ajaxResponse.response.item);
  }).on('init'),
});
