/* eslint ember/closure-actions: "off" */
/* eslint ember/no-on-calls-in-components: "off" */
import Component from '@ember/component';
import {
  reads,
  and
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
import {
  computed
} from '@ember/object';

const INFO_DISPLAY_TIMEOUT = 3000;

export default Component.extend(EKMixin, {
  classNames: ['player-main-container'],

  loading: false,

  keyboardActivated: and('_player', 'canInteract'),

  currentTime: null,

  totalTime: null,

  title: reads('episode.title'),

  description: reads('episode.shortDescription'),

  videoURL: reads('episode.content.videos.firstObject.url'),

  autoPlay: true,

  playing: false,

  interacting: false,

  canInteract: true,

  secondsLeft: computed('totalTime', 'currentTime', function() {
    const totalTime = this.get('totalTime');
    const currentTime = this.get('currentTime');
    return Math.ceil(totalTime) - Math.ceil(currentTime);
  }),

  interactiveTimeout: task(function*() {
    this.set('interacting', true);
    yield timeout(INFO_DISPLAY_TIMEOUT);
    this.set('interacting', false);
  }).restartable(),

  skipRight: on(keyDown('ArrowRight'), function() {
    const player = this.get('_player');
    player.currentTime += 10;
    this.get('interactiveTimeout').perform();
  }),

  skipLeft: on(keyDown('ArrowLeft'), function() {
    const player = this.get('_player');
    player.currentTime -= 10;
    this.get('interactiveTimeout').perform();
  }),

  playPauseVideo: on(keyDown('Enter'), keyDown('NumpadEnter'), function() {
    if (this.get('playing')) {
      this.pauseVideo();
      this.set('interacting', true);
    } else {
      this.playVideo();
      this.get('interactiveTimeout').perform();
    }
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
        this.get('interactiveTimeout').perform();
      } else {
        this.set('interacting', true);
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
