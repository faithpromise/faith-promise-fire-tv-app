'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'faith-promise-fire-tv-app',
    environment,
    rootURL: '/',
    locationType: 'hash',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      urls: {
        currentLiveEvent: '/api/v1/events/current',
        onlineData: '/app-api/online',
        data: '/app-api/roku'
      }
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    ENV.APP.urls = {
      currentLiveEvent: 'http://online.faithpromise.org/api/v1/events/current',
      onlineData: 'https://faithpromise.org/app-api/online',
      data: 'https://faithpromise.org/app-api/roku'
    }
  }

  return ENV;
};
