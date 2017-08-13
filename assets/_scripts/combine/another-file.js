
window.siteObj = window.siteObj ? window.siteObj : {};
(function() {
  const moduleB = {
    init() {
      console.log('another-file');
    }
  };

  pubsub.subscribe( 'something', function(e) {
    moduleB.init();
  });

  window.siteObj.moduleB = moduleB;
}());

