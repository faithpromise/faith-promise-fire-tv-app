import Component from '@ember/component';
import {
  observer
} from '@ember/object';
import {
  readOnly,
} from '@ember/object/computed';
import $ from 'jquery';

export default Component.extend({
  classNames: ['series-carousel'],

  numberOfSeries: readOnly('items.length'),

  selectedItemIndex: null,

  didInsertElement() {
    this._super(...arguments);
    this.isSelectedObserver();
  },

  isSelectedObserver: observer('isSelected', function() {
    if (this.get('isSelected')) {
      this.scrollTo();
    }
  }),

  scrollTo() {
    const scrollTop = $(this.element).position().top;
    $('.app-home-screen').animate({
      scrollTop,
    }, 200);
  },
});
