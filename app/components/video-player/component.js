/* eslint ember/closure-actions: "off" */
/* eslint ember/no-on-calls-in-components: "off" */
import Component from '@ember/component';
import {
  readOnly,
  bool
} from '@ember/object/computed';
import {
  EKMixin,
  keyDown
} from 'ember-keyboard';
import {
  task,
  timeout
} from 'ember-concurrency';
import {
  on
} from '@ember/object/evented';

const INFO_DISPLAY_TIMEOUT = 3000;

export default Component.extend(EKMixin, {
  classNames: ['player-main-container'],

  loading: false,

  keyboardActivated: bool('_player'),

  currentTime: null,

  totalTime: null,

  title: readOnly('episode.title'),

  description: readOnly('episode.shortDescription'),

  videoURL: readOnly('episode.content.videos.firstObject.url'),

  autoPlay: true,

  playing: false,

  interacting: false,

  interactiveTimeout: task(function*() {
    this.set('interacting', true);
    yield timeout(INFO_DISPLAY_TIMEOUT);
    this.set('interacting', false);
  }).restartable(),

  skipRight: on(keyDown('ArrowRight'), function() {
    this.get('interactiveTimeout').perform();
  }),

  skipLeft: on(keyDown('ArrowLeft'), function() {
    this.get('interactiveTimeout').perform();
  }),

  playPauseVideo: on(keyDown('Enter'), keyDown('NumpadEnter'), function() {
    if (this.get('playing')) {
      this.pauseVideo();
    } else {
      this.playVideo();
    }
    this.get('interactiveTimeout').perform();
  }),

  showInfoDisplay: on(keyDown('ArrowUp'), function() {
    this.get('interactiveTimeout').perform();
  }),

  hideInfoDisplay: on(keyDown('ArrowDown'), function() {
    this.set('interacting', false);
  }),

  playVideo() {
    this.get('_player').play();
    this.set('playing', true);
  },

  pauseVideo() {
    this.get('_player').pause();
    this.set('playing', false);
  },

  updateCurrentTime: task(function*() {
    yield timeout(1000);
    this.set('currentTime', this.get('_player').currentTime);
  }).enqueue(),

  actions: {
    videoCanPlay(player) {
      this.set('totalTime', player.duration);
      this.set('loading', false);
      this.set('_player', player);
      if (this.get('autoPlay')) {
        this.playVideo();
      }
    },
    videoTimeUpdated() {
      this.get('updateCurrentTime').perform();
    },
    videoEnded() {
      this.sendAction('videoEnded', this.get('episode'));
    },
    videoStartedLoading() {
      this.set('loading', true);
    },
  },
});
