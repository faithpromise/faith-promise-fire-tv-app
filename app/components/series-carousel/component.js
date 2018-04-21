/* eslint ember/no-on-calls-in-components: "off" */
import Component from '@ember/component';
import {
  observer
} from '@ember/object';
import {
  EKMixin,
  EKOnInitMixin,
  keyDown
} from 'ember-keyboard';
import {
  on
} from '@ember/object/evented';
import {
  readOnly,
} from '@ember/object/computed';
import $ from 'jquery';

export default Component.extend(EKMixin, EKOnInitMixin, {
  classNames: ['one-D-details-container'],

  numberOfEpisodes: readOnly('series.episodes.length'),

  selectedEpisodeIndex: null,

  didInsertElement() {
    this._super(...arguments);
    this.seriesIsSelectedObserver();
  },

  seriesIsSelectedObserver: observer('seriesIsSelected', function() {
    if (this.get('seriesIsSelected')) {
      this.scrollToSeries();
      this._selectEpisode();
    }
  }),

  scrollToSeries() {
    const scrollTop = $(this.element).position().top;
    $('.app-main-container').animate({
        scrollTop,
    }, 0);
  },

  navigateLeft: on(keyDown('ArrowLeft'), function() {
    if (!this.get('seriesIsSelected')) {
      return;
    }
    this.decrementPropertyWithMin('selectedEpisodeIndex', 0);
    this._selectEpisode();
  }),

  navigateRight: on(keyDown('ArrowRight'), function() {
    if (!this.get('seriesIsSelected')) {
      return;
    }
    const numberOfEpisodes = this.get('numberOfEpisodes');
    this.incrementPropertyWithMax('selectedEpisodeIndex', numberOfEpisodes);
    this._selectEpisode();
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

  _selectEpisode() {
    const selectedEpisodeIndex = this.get('selectedEpisodeIndex');
    const episode = this.get('series.episodes')[selectedEpisodeIndex];
    this.selectEpisode(episode, selectedEpisodeIndex);
  },
});
