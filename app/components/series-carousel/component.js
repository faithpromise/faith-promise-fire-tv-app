/* eslint ember/no-on-calls-in-components: "off" */
import Component from '@ember/component';
import {
  computed,
  observer
} from '@ember/object';
import {
  inject as service
} from '@ember/service';
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

  application: service(),

  numberOfEpisodes: readOnly('series.episodes.length'),

  currentIndex: null,

  didInsertElement() {
    this._super(...arguments);
    this.seriesSelectedObserver(this.get('application.selectedEpisodeIndex'));
  },

  seriesSelected: computed('application.selectedSeries', function() {
    return this.get('application.selectedSeries') === this.get('series');
  }),

  seriesSelectedObserver: observer('seriesSelected', function(index) {
    if (this.get('seriesSelected')) {
      const isValidIndex = typeof index === 'object' || !index;
      this.set('currentIndex', isValidIndex ? 0 : index);
      this.scrollToSeries();
      this._selectEpisode();
    } else {
      this.set('currentIndex', null);
    }
  }),

  scrollToSeries() {
    const scrollTop = $(this.element).position().top;
    $('.app-main-container').animate({
        scrollTop,
    }, 0);
  },

  navigateLeft: on(keyDown('ArrowLeft'), function() {
    if (!this.get('seriesSelected')) {
      return;
    }
    const currentIndex = this.get('currentIndex') - 1;
    this.set('currentIndex', currentIndex < 0 ? 0 : currentIndex);
    this._selectEpisode();
  }),

  navigateRight: on(keyDown('ArrowRight'), function() {
    if (!this.get('seriesSelected')) {
      return;
    }
    const numberOfEpisodes = this.get('numberOfEpisodes');
    let currentIndex = this.get('currentIndex');
    if (currentIndex + 1 === numberOfEpisodes) {
      return;
    }
    this.set('currentIndex', currentIndex < numberOfEpisodes ? currentIndex + 1: 0);
    this._selectEpisode();
  }),

  _selectEpisode() {
    const currentIndex = this.get('currentIndex');
    const episode = this.get('series.episodes')[currentIndex];
    this.set('application.selectedEpisodeIndex', currentIndex);
    this.selectEpisode(episode);
  },
});
