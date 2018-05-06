import Component from '@ember/component';
import {
  observer
} from '@ember/object';
import $ from 'jquery';

export default Component.extend({
  classNames: ['series-episodes--episode'],

  classNameBindings: ['isSelected:series-episodes--episode--selected'],

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
    $('.app-series-screen').animate({
      scrollTop,
    }, 200);
  },
});
