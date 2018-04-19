import Component from '@ember/component';
import {
  computed
} from '@ember/object';
import {
  htmlSafe
} from '@ember/string';

const prettyDuration = function(keyName) {
  return computed(keyName, function() {
    let seconds = this.get(keyName);
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor(seconds / 60) % 60;
    seconds = Math.floor(seconds % 60);

    let finalString = '';
    if (hours > 0) {
      finalString += `${hours}:`;
    }
    const paddedMinutes = ('00' + minutes).slice(-2);
    const paddedSeconds = ('00' + seconds).slice(-2);
    return finalString + `${paddedMinutes}:${paddedSeconds}`
  });
};

export default Component.extend({
  classNames: ['player-controls-container'],

  classNameBindings: ['interacting:player-controls-container--interacting'],

  _totalTime: prettyDuration('totalTime'),

  _currentTime: prettyDuration('currentTime'),

  seekHeadStyle: computed('totalTime', 'currentTime', function() {
    const totalTime = this.get('totalTime');
    const currentTime = this.get('currentTime');
    const value = (100 / totalTime) * currentTime;
    return htmlSafe(`width: ${value}%;`);
  }),
});
