'use strict';

define(['backbone', 'marionette', 'jquery-ui'], function (Backbone, Marionette) {
    return Backbone.Marionette.Region.extend({
        onShow: function (view) {
            this.listenTo(view, 'dialog:close', this.closeDialog);

            var self = this;
            this.$el.dialog({
                modal: true,
                title: view.title,
                width: 'auto',
                close: function () {
                    self.closeDialog();
                }
            });
        },

        closeDialog: function () {
            this.stopListening();
            this.close();
            this.$el.dialog('destroy');
        }
    });
});