/* eslint ember/no-on-calls-in-components: "off" */
import Component from '@ember/component';
import {
  computed
} from '@ember/object';
import {
  htmlSafe
} from '@ember/string';
import {
  EKMixin,
  keyDown
} from 'ember-keyboard';
import {
  on
} from '@ember/object/evented';
import {
  readOnly
} from '@ember/object/computed';

const MARGIN_WIDTH = 40;

export default Component.extend(EKMixin, {
  classNames: ['shoveler-rowitem-static'],

  keyboardActivated: readOnly('episodeIsSelected'),

  classNameBindings: ['episodeIsSelected:shoveler-rowitem-selected'],

  attributeBindings: ['style'],

  thumbnail: computed('episode.thumbnail', function() {
    const url = this.get('episode.thumbnail');
    return url.replace('&h=1080&w=1920', '&h=360&w=640');
  }),

  index: 0,

  style: computed('selectedEpisodeIndex', 'index', function() {
    const selectedEpisodeIndex = this.get('selectedEpisodeIndex');
    const index = this.get('index');
    const elementWidth = this.element.offsetWidth || 356;
    const offset = Math.round(elementWidth + MARGIN_WIDTH) * (index - selectedEpisodeIndex);
    const style = `transform: translate3d(${offset}px,0, 0px);`;
    return htmlSafe(style);
  }),

  intentToWatchVideo: on(keyDown('Enter'), keyDown('NumpadEnter'), function() {
    this.playVideo(this.get('episode'));
  }),
});
