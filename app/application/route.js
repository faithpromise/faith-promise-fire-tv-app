import Route from '@ember/routing/route';
import {
  inject as service
} from '@ember/service';
import {
  hash
} from 'rsvp';
import config from '../config/environment';

export default Route.extend({
  ajax: service(),

  model() {
    const contentURL = config.APP.urls.data;
    const currentLiveEventURL = config.APP.urls.currentLiveEvent;
    const onlineDataURL = config.APP.urls.onlineData;

    const content = this.get('ajax').request(contentURL);
    const currentLiveEvent = this.get('ajax').request(currentLiveEventURL);
    const onlineStream = this.get('ajax').request(onlineDataURL);

    return hash({
      content,
      currentLiveEvent,
      onlineStream,
    });
  },

  afterModel(model) {
    const currentLiveEvent = model.currentLiveEvent.response.item;
    const streamSeries = [{
      id: 'stream',
      title: model.onlineStream.title,
      isLive: currentLiveEvent.isLive,
      eventStartTime: currentLiveEvent.eventStartTime,
      releaseDate: new Date(),
      episodes: [{
        id: 'stream',
        title: '',
        content: {
          videos: [{
            url: model.onlineStream.hd_url,
          }],
        },
        thumbnail: model.onlineStream.image,
        shortDescription: '',
      }],
      shortDescription: model.onlineStream.description,
      thumbnail: model.onlineStream.image,
      tags: ['stream'],
    }];
    model.content.series = model.content.series.concat(streamSeries);
  },
});
