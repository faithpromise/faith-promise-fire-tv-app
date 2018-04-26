import seriesData from './seriesData';
import streamData from './streamData';
import moment from 'moment';
import {
  faker
} from 'ember-cli-mirage';

export default function() {

  this.get('/app-api/roku', function() {
    return seriesData;
  }, {
    timing: 1000,
  });

  this.get('/app-api/online', function() {
    return streamData;
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

  this.get('/api/v1/streams/current', function() {
    return {
      response: {
        item: {
          title: 'Like a Boss | Week Three',
          video: 'https://player.vimeo.com/external/263919943.hd.mp4?s=5ae708ed29da2d18e8ae1a4c5ddca3b071512447&profile_id=175',
          thumbnail: 'https://faithpromise.imgix.net/series/like-a-boss-tall.jpg?fit=crop&h=1080&w=1920',
        },
      },
    };
  });

}
