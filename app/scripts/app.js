'use strict';

define(['backbone', 'marionette', 'apps/config/marionette/regions/dialog'], function (Backbone, Marionette, DialogRegion) {
    var ContactManager = new Backbone.Marionette.Application();

    ContactManager.addRegions({
        headerRegion: '#header-region',
        mainRegion: '#main-region',
        dialogRegion: DialogRegion.extend({
            el: '#dialog-region'
        })
    });

    ContactManager.navigate = function (route, options) {
        options = options || {};
        Backbone.history.navigate(route, options);
    };

    ContactManager.getCurrentRoute = function () {
        return Backbone.history.fragment;
    };

    ContactManager.startSubApp = function (appName, args) {
        var currentApp = appName ? ContactManager.module(appName) : null;
        if (ContactManager.currentApp === currentApp) {
            return;
        }

        if (ContactManager.currentApp) {
            ContactManager.currentApp.stop();
        }

        ContactManager.currentApp = currentApp;
        if (currentApp) {
            currentApp.start(args);
        }
    };

    ContactManager.on('initialize:after', function () {
        if (Backbone.history) {
            require(['apps/contacts/contacts_app', 'apps/about/about_app'], function () {
                Backbone.history.start();

                if (ContactManager.getCurrentRoute() === '') {
                    ContactManager.trigger('contacts:list');
                }
            });
        }
    });

    return ContactManager;
});
