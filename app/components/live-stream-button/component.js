import Component from '@ember/component';
import {
  inject as service
} from '@ember/service';
import {
  readOnly
} from '@ember/object/computed';

export default Component.extend({
  classNames: ['live-stream-button'],

  classNameBindings: ['isLive:isLive'],

  ajax: service(),

  eventStartTime: readOnly('series.eventStartTime'),

  isLive: readOnly('series.isLive'),
});
