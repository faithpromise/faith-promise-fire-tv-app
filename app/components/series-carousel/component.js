/* eslint ember/no-on-calls-in-components: "off" */
import Component from '@ember/component';
import {
  observer
} from '@ember/object';
import {
  EKMixin,
  keyDown
} from 'ember-keyboard';
import {
  on
} from '@ember/object/evented';
import {
  readOnly,
} from '@ember/object/computed';
import $ from 'jquery';

export default Component.extend(EKMixin, {
  classNames: ['one-D-details-container'],

  keyboardActivated: readOnly('seriesIsSelected'),

  numberOfEpisodes: readOnly('series.episodes.length'),

  selectedEpisodeIndex: null,

  didInsertElement() {
    this._super(...arguments);
    this.seriesIsSelectedObserver();
  },

  seriesIsSelectedObserver: observer('seriesIsSelected', function() {
    if (this.get('seriesIsSelected')) {
      this.scrollToSeries();
    }
  }),

  scrollToSeries() {
    const scrollTop = $(this.element).position().top;
    $('.app-main-container').animate({
        scrollTop,
    }, 0);
  },

  navigateLeft: on(keyDown('ArrowLeft'), function() {
    this.decrementPropertyWithMin('selectedEpisodeIndex', 0);
  }),

  navigateRight: on(keyDown('ArrowRight'), function() {
    const numberOfEpisodes = this.get('numberOfEpisodes');
    this.incrementPropertyWithMax('selectedEpisodeIndex', numberOfEpisodes);
  }),

  incrementPropertyWithMax(property, max = null) {
    const value = this.get(property);
    if (value + 1 === max) {
      return;
    }
    this.set(property, value < max ? value + 1 : 0);
  },

  decrementPropertyWithMin(property, min = 0) {
    const value = this.get(property) - 1;
    this.set(property, value < min ? min : value);
  },
});
