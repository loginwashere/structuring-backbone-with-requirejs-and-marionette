requirejs.config({
  baseUrl: "assets/js",
  paths: {
    backbone: "vendor/backbone",
    "backbone.syphon": "vendor/backbone.syphon",
    jquery: "vendor/jquery",
    "jquery-ui": "vendor/jquery-ui",
    json2: "vendor/json2",
    localstorage: "vendor/backbone.localstorage",
    marionette: "vendor/backbone.marionette",
    tpl: "vendor/tpl",
    underscore: "vendor/underscore"
  },

  shim: {
    underscore: {
      exports: "_"
    },
    backbone: {
      deps: ["jquery", "underscore", "json2"],
      exports: "Backbone"
    },
    "backbone.syphon": ["backbone"],
    marionette: {
      deps: ["backbone"],
      exports: "Marionette"
    },
    "jquery-ui": ["jquery"],
    localstorage: ["backbone"]
  }
});

require(["app"], function(ContactManager){
  ContactManager.start();
});