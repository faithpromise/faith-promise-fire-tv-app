import Component from '@ember/component';
import {
  observer
} from '@ember/object';
import {
  readOnly,
} from '@ember/object/computed';
import $ from 'jquery';

export default Component.extend({
  classNames: ['series-carousel'],

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
    $('.app-home-screen').animate({
        scrollTop,
    }, 200);
  },
});
