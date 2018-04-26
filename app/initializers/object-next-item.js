import Object from '@ember/object';

export function initialize() {
  Object.reopen({
    incrementPropertyWithMax(property, max = null) {
      const value = this.get(property);
      if (value + 1 === max) {
        return;
      }
      this.set(property, value < max ? parseInt(value) + 1 : 0);
    },

    decrementPropertyWithMin(property, min = 0) {
      const value = this.get(property) - 1;
      this.set(property, value < min ? min : parseInt(value));
    },
  });
}

export default {
  initialize
};
