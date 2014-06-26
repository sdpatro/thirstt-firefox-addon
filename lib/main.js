console.log("main.js initialized.....");

// Some necessary variable initializations.
var buttons = require('sdk/ui/button/action');
var tabs = require("sdk/tabs");
var self = require("sdk/self");

// Attach required content scripts
tabs.activeTab.attach({
	contentScriptFile: [self.data.url("inject-moz-styles.js"),self.data.url("inject-moz.js")]
});

var button = buttons.ActionButton({
  id: "mozilla-link",
  label: "Visit Mozilla",
  icon: {
    "16": "./logo-16.png",
    "32": "./logo-115.png",
    "64": "./logo-115.png"
  },
  onClick: function(state) { console.log(state);}
});