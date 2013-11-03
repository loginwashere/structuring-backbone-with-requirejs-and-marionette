'use strict';

define(['app', 'tpl!apps/contacts/common/templates/form.tpl', 'backbone.syphon'],
    function (ContactManager, formTpl) {
        ContactManager.module('ContactsApp.Common.Views', function (Views, ContactManager, Backbone, Marionette, $, _) {
            Views.Form = Marionette.ItemView.extend({
                template: formTpl,

                events: {
                    'click button.js-submit': 'submitClicked'
                },

                submitClicked: function (e) {
                    e.preventDefault();
                    var data = Backbone.Syphon.serialize(this);
                    this.trigger('form:submit', data);
                },

                onFormDataInvalid: function (errors) {
                    var $view = this.$el;

                    var clearFormErrors = function () {
                        var $form = $view.find('form');
                        $form.find('.help-block.error').each(function () {
                            $(this).remove();
                        });
                        $form.find('.form-group.has-error').each(function () {
                            $(this).removeClass('has-error');
                        });
                    };

                    var markErrors = function (value, key) {
                        var $controlGroup = $view.find('#contact-' + key).parents('.form-group');
                        var $errorEl = $('<span>', { class: 'help-block error', text: value });
                        $controlGroup.addClass('has-error').append($errorEl);
                    };

                    clearFormErrors();
                    _.each(errors, markErrors);
                }
            });
        });

        return ContactManager.ContactsApp.Common.Views;
    });
