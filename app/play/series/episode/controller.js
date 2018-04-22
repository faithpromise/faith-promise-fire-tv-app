import Controller from '@ember/controller';

export default Controller.extend({
  queryParams: ['nextEpisodeId'],

  nextEpisodeId: null,

  actions: {
    playEpisode(series, episode) {
      this.replaceRoute('play.series.episode', series, episode);
    },
  },
});
