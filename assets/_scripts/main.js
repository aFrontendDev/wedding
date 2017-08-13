
require('./combine/a-file.js');
require('./combine/another-file.js');

window.siteObj = window.siteObj ? window.siteObj : {};

document.addEventListener("DOMContentLoaded", function(event) {
  console.log("DOM fully loaded and parsed");
  pubsub.publish('something');
});
