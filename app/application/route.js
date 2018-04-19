import Route from '@ember/routing/route';
import {
  inject as service
} from '@ember/service';
import config from '../config/environment';

export default Route.extend({
  ajax: service(),

  model() {
    const url = config.APP.dataURL;
    return this.get('ajax').request(url);
  },
});
