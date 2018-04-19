import Service from '@ember/service';
import {
  computed
} from '@ember/object';

export default Service.extend({
  selectedSeries: computed('seriesList', 'selectedSeriesIndex', function() {
    return this.get('seriesList')[this.get('selectedSeriesIndex')];
  }),
});
