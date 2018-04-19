/* eslint ember/no-on-calls-in-components: "off" */
import Component from '@ember/component';
import {
  EKMixin,
  EKOnInitMixin,
  keyDown
} from 'ember-keyboard';
import {
  on
} from '@ember/object/evented';
import {
  inject as service
} from '@ember/service';
import {
  alias,
  readOnly
} from '@ember/object/computed';

export default Component.extend(EKMixin, EKOnInitMixin, {
  classNames: ['app-main-container', 'animated', 'fadeIn'],

  application: service(),

  router: service(),

  selectedSeriesIndex: alias('application.selectedSeriesIndex'),

  numberOfSeries: readOnly('seriesList.length'),

  init() {
    this._super(...arguments);
    this.set('application.seriesList', this.get('seriesList'));
    if (!this.get('selectedSeriesIndex')) {
      this.set('application.selectedSeriesIndex', 0);
    }
  },

  navigateDown: on(keyDown('ArrowDown'), function() {
    const numberOfSeries = this.get('numberOfSeries');
    this.incrementPropertyWithMax('selectedSeriesIndex', numberOfSeries);
  }),

  navigateUp: on(keyDown('ArrowUp'), function() {
    this.decrementPropertyWithMin('selectedSeriesIndex', 0);
  }),

  incrementPropertyWithMax(property, max = null) {
    const value = this.get(property);
    if (value + 1 === max) {
      return;
    }
    this.set('selectedSeriesIndex', value < max ? value + 1 : 0);
  },

  decrementPropertyWithMin(property, min = 0) {
    const value = this.get(property) - 1;
    this.set('selectedSeriesIndex', value < min ? min : value);
  },

  actions: {
    playVideo(episode) {
      this.get('router').transitionTo('play.video', episode);
    },
  },
});
