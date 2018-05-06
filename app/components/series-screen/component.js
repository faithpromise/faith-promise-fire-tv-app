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
  computed
} from '@ember/object';
import {
  equal
} from '@ember/object/computed';


export default Component.extend(EKMixin, EKOnInitMixin, {
  classNames: ['app-series-screen', 'animated', 'fadeIn'],

  isStreamSeries: equal('series.id', 'stream'),

  selectedIndex: 0,

  thumbnail: computed('series.thumbnail', function() {
    const url = this.get('series.thumbnail');
    return url.replace('&h=1080&w=1920', '&h=360&w=640') || '';
  }),

  navigateDown: on(keyDown('ArrowDown'), function() {
    if (this.get('isStreamSeries')) {
      return;
    }
    const numberofEpisodes = this.get('series.episodes.length');
    this.incrementPropertyWithMax('selectedIndex', numberofEpisodes);
  }),

  navigateUp: on(keyDown('ArrowUp'), function() {
    if (this.get('isStreamSeries')) {
      return;
    }
    this.decrementPropertyWithMin('selectedIndex', 0);
  }),

  select: on(keyDown('Enter'), keyDown('NumpadEnter'), function() {
    if (this.get('isStreamSeries')) {
      this.streamEpisode();
      return;
    }
    const series = this.get('series');
    const episodes = this.get('series.episodes');
    const episode = episodes[this.get('selectedIndex')];
    this.playEpisode(series, episode);
  }),
});
