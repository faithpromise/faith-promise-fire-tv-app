import data from './data';

export default function() {

  this.get('/app-api/roku', function() {
    return data;
  }, {
    timing: 1000,
  });

}
