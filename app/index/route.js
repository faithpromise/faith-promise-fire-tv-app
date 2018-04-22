import Route from '@ember/routing/route';

export default Route.extend({
  queryParams: {
    series: {
      replace: true
    },
    episode: {
      replace: true
    },
  },
});
