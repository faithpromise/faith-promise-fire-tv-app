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
  readOnly
} from '@ember/object/computed';
import {
  computed
} from '@ember/object';

export default Component.extend(EKMixin, EKOnInitMixin, {
  classNames: ['app-main-container', 'animated', 'fadeIn'],

  numberOfSeries: readOnly('seriesList.length'),

  navigateDown: on(keyDown('ArrowDown'), function() {
    const numberOfSeries = this.get('numberOfSeries');
    this.incrementPropertyWithMax('selectedSeriesIndex', numberOfSeries);
    this.set('selectedEpisodeIndex', 0);
  }),

  navigateUp: on(keyDown('ArrowUp'), function() {
    this.decrementPropertyWithMin('selectedSeriesIndex', 0);
    this.set('selectedEpisodeIndex', 0);
  }),

  navigateLeft: on(keyDown('ArrowLeft'), function() {
    this.decrementPropertyWithMin('selectedEpisodeIndex', 0);
  }),

  navigateRight: on(keyDown('ArrowRight'), function() {
    const numberOfEpisodes = this.get('selectedSeries.episodes.length')
    this.incrementPropertyWithMax('selectedEpisodeIndex', numberOfEpisodes);
  }),

  intentToWatchVideo: on(keyDown('Enter'), keyDown('NumpadEnter'), function() {
    const selectedSeries =  this.get('selectedSeries');
    const selectedEpisode = this.get('selectedEpisode');
    if (selectedSeries && selectedEpisode) {
      this.playEpisode(selectedSeries, selectedEpisode);
    }
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

  selectedSeries: computed('selectedSeriesIndex', function() {
    const seriesList = this.get('seriesList');
    const selectedSeriesIndex = this.get('selectedSeriesIndex');
    return seriesList[selectedSeriesIndex];
  }),

  selectedEpisode: computed('selectedEpisodeIndex', 'selectedSeries', function() {
    const selectedSeries = this.get('selectedSeries');
    const selectedEpisodeIndex = this.get('selectedEpisodeIndex');
    return selectedSeries.episodes[selectedEpisodeIndex];
  }),

  actions: {
    playVideo(episode) {
      const seriesList = this.get('seriesList');
      const selectedSeriesIndex = this.get('selectedSeriesIndex');
      const series =  seriesList[selectedSeriesIndex];
      this.playEpisode(series, episode);
    },
  },
});
