import Component from '@ember/component';
import {
  computed
} from '@ember/object';
import {
  htmlSafe
} from '@ember/string';
import InViewportMixin from 'ember-in-viewport';

const MARGIN_WIDTH = 40;

export default Component.extend(InViewportMixin, {
  classNames: ['episode'],

  classNameBindings: ['isSelected:episode--selected'],

  attributeBindings: ['style'],

  didInsertElement() {
    this._super(...arguments);
    this.setProperties({
      scrollableArea: `#${this.get('scrollableElement').id}`,
      viewportTolerance: {
        top: 0,
        left: 500,
        bottom: 0,
        right: 500
      }
    });
  },

  _thumbnail: computed('thumbnail', 'viewportEntered', function() {
    const url = this.get('thumbnail');
    return this.get('viewportEntered') && url.replace('&h=1080&w=1920', '&h=576&w=1024') || '';
  }),

  index: 0,

  style: computed('selectedItemIndex', 'index', function() {
    const selectedItemIndex = this.get('selectedItemIndex');
    const index = this.get('index');
    const elementWidth = this.element.offsetWidth || 356;
    const offset = Math.round(elementWidth + MARGIN_WIDTH) * (index - selectedItemIndex);
    const style = `transform: translate3d(${offset}px,0, 0px);`;
    return htmlSafe(style);
  }),
});
