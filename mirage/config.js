import data from './data';
import moment from 'moment';
import {
  faker
} from 'ember-cli-mirage';

export default function() {

  this.get('/app-api/roku', function() {
    return data;
  }, {
    timing: 1000,
  });

  this.get('/api/v1/events/current', function() {
    return {
      response: {
        item: {
          isLive: faker.random.boolean(),
          eventStartTime: moment().add(15, 'minute').toISOString(),
        },
      },
    };
  });

}
