/*global require*/
'use strict';

require.config({
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: [
                'underscore',
                'jquery',
                'json2'
            ],
            exports: 'Backbone'
        },
        'backbone.picky': ['backbone'],
        'backbone.syphon': ['backbone'],
        marionette: {
            deps: ['backbone'],
            exports: 'Marionette'
        },
        'bootstrap.modal': {
            deps: ['jquery'],
            exports: '$.fn.modal'
        },
        localstorage: ['backbone'],
        'spin.jquery': ['spin', 'jquery']
    },
    paths: {
        jquery: '../bower_components/jquery/jquery',
        backbone: '../bower_components/backbone/backbone',
        underscore: '../bower_components/underscore/underscore',
        'backbone.picky': '../bower_components/backbone.picky/lib/amd/backbone.picky',
        'backbone.syphon': '../bower_components/backbone.syphon/lib/amd/backbone.syphon',
        'bootstrap.modal': '../bower_components/bootstrap/js/modal',
        json2: '../bower_components/json2/json2',
        localstorage: '../bower_components/backbone.localStorage/backbone.localStorage',
        marionette: '../bower_components/marionette/lib/backbone.marionette',
        spin: '../bower_components/spin.js/spin',
        'spin.jquery': '../bower_components/spin.js/jquery.spin',
        tpl: '../bower_components/requirejs-tpl/tpl'
    }
});

require(['app', 'apps/header/header_app'], function (ContactManager) {
    ContactManager.start();
});