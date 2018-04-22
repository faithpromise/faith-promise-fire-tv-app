import Route from '@ember/routing/route';
import {
  inject as service
} from '@ember/service';
import config from '../config/environment';

export default Route.extend({
  ajax: service(),

  model() {
    const url = config.APP.urls.data;
    return this.get('ajax').request(url);
  },
});
