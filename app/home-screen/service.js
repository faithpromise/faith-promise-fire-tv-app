import Service from '@ember/service';
import {
  computed
} from '@ember/object';

export default Service.extend({
  selectedCategoryIndex: 0,

  selectedItemIndex: computed('selectedCategoryIndex', {
    set(key, value) {
      this.set(this.get('selectedCategoryIndex'), value);
      return value;
    },
    get() {
      return this.get(this.get('selectedCategoryIndex'));
    },
  }),

  unknownProperty() {
    return 0;
  },
});
