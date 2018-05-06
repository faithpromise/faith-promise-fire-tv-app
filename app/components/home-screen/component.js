/* eslint ember/no-on-calls-in-components: "off" */
import Component from '@ember/component';
import {
  EKMixin,
  EKOnInitMixin,
  keyDown
} from 'ember-keyboard';
import {
  on
} from '@ember/object/evented';
import {
  readOnly,
  alias,
} from '@ember/object/computed';
import {
  computed
} from '@ember/object';
import {
  A
} from '@ember/array';
import {
  inject as service
} from '@ember/service';

const typeLabelMap = {
  stream: 'Watch Online',
  sermon: 'Sermons',
  study: 'Group Studies',
};

export default Component.extend(EKMixin, EKOnInitMixin, {
  classNames: ['app-home-screen', 'animated', 'fadeIn'],

  homeScreen: service(),

  selectedCategoryIndex: alias('homeScreen.selectedCategoryIndex'),

  selectedItemIndex: alias('homeScreen.selectedItemIndex'),

  numberOfTags: readOnly('tagSeperatedLists.length'),

  tagSeperatedLists: computed('seriesList', function() {
    const types = Object.keys(typeLabelMap);
    const lists = types.map(type => {
      return {
        type,
        items: A(),
        label: typeLabelMap[type],
      };
    });
    this.get('seriesList').forEach(series => {
      const tag = series.tags[0];
      const tagIndex = types.indexOf(tag);
      const tagList = lists[tagIndex];
      if (tagIndex !== -1) {
        tagList.items.pushObject(series);
      }
    });
    return lists;
  }),

  navigateDown: on(keyDown('ArrowDown'), function() {
    const numberOfTags = this.get('numberOfTags');
    this.incrementPropertyWithMax('selectedCategoryIndex', numberOfTags);
  }),

  navigateUp: on(keyDown('ArrowUp'), function() {
    this.decrementPropertyWithMin('selectedCategoryIndex', 0);
  }),

  navigateLeft: on(keyDown('ArrowLeft'), function() {
    this.decrementPropertyWithMin('selectedItemIndex', 0);
  }),

  navigateRight: on(keyDown('ArrowRight'), function() {
    const numberOfItems = this.get('selectedCategory.items.length')
    this.incrementPropertyWithMax('selectedItemIndex', numberOfItems);
  }),

  showEpisodes: on(keyDown('Enter'), keyDown('NumpadEnter'), function() {
    const selectedCategory = this.get('selectedCategory');
    const selectedItem = this.get('selectedItem');
    if (!selectedCategory || !selectedItem) {
      return;
    }
    this.showSeries(selectedItem);
  }),

  selectedCategory: computed('selectedCategoryIndex', function() {
    const categoryList = this.get('tagSeperatedLists');
    const selectedCategoryIndex = this.get('selectedCategoryIndex');
    return categoryList[selectedCategoryIndex];
  }),

  selectedItem: computed('selectedItemIndex', 'selectedCategory', function() {
    const selectedCategory = this.get('selectedCategory');
    const selectedItemIndex = this.get('selectedItemIndex');
    return selectedCategory.items[selectedItemIndex];
  }),
});
