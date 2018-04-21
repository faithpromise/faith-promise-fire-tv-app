import Controller from '@ember/controller';

export default Controller.extend({
  queryParams: ['series', 'episode'],
  series: 0,
  episode: 0,
});
