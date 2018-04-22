import Route from '@ember/routing/route';

import {
  getOwner
} from '@ember/application';

export default Route.extend({
  //TODO get actual live stream from FP REST call
  model() {
    const config = getOwner(this).resolveRegistration('config:environment');
    return config.APP.urls.liveStream;
  },
});
