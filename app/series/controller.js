import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    playEpisode(series, episode) {
      this.transitionToRoute('play.series.episode', series, episode);
    },
    streamEpisode() {
      this.transitionToRoute('play.live');
    },
  },
});
