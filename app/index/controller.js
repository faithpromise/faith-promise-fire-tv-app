import Controller from '@ember/controller';

export default Controller.extend({
  queryParams: ['series', 'episode'],

  series: 0,

  episode: 0,

  actions: {
    playEpisode(series, episode) {
      this.replaceRoute('play.series.episode', series, episode);
    },
  },
});
