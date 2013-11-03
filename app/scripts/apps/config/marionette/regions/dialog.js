'use strict';

define(['jquery', 'backbone', 'marionette', 'bootstrap.modal'], function ($, Backbone) {
    return Backbone.Marionette.Region.extend({
        open: function(view) {
            this.$el.find('.modal-title').html(view.title);
            this.$el.find('.modal-body').html(view.el);
        },

        onShow: function (view) {
            this.listenTo(view, 'dialog:close', this.closeDialog);

            var self = this;

            this.$el.modal('show');
        },

        closeDialog: function () {
            this.$el.modal('hide');
        }
    });
});