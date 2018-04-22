import data from './data';

export default function() {

  this.get('/app-api/roku', function() {
    return data;
  }, {
    timing: 1000,
  });

  this.get('/api/v1/events/current', function() {
    return {
      meta: {
        status: 200
      },
      response: {
        item: {
          isLive: true,
          eventStartTime: '2018-04-22T11:30:00Z',
        },
      },
    };
  });

}
