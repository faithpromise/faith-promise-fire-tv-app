/* eslint ember/closure-actions: "off" */
import Component from '@ember/component';

const PLAYER_EVENTS = {
  canplay: 'canPlay',
  ended: 'ended',
  timeupdate: 'timeUpdate',
  pause: 'pause',
  error: 'error',
  loadstart: 'videoStartedLoading',
};

export default Component.extend({
  tagName: 'video',

  classNames: ['player-content-video'],

  attributeBindings: ['src'],

  didInsertElement() {
    this._super(...arguments);
    Object.keys(PLAYER_EVENTS).forEach(playerEvent => {
      this.element.addEventListener(playerEvent, () => {
        this.sendAction(PLAYER_EVENTS[playerEvent], this.element, ...arguments);
      });
    });
  },
});
