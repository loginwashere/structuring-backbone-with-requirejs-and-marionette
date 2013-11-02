'use strict';

define(['backbone', 'marionette', 'tpl!apps/about/show/templates/message.tpl'], function (Backbone, Marionette, messageTpl) {
    return {
        Message: Backbone.Marionette.ItemView.extend({
            template: messageTpl
        })
    };
});
