window.siteObj = window.siteObj ? window.siteObj : {};
(function() {
  const moduleA = {};

  function privateFunction () {
      console.log('moduleA js');

      const myobject = [{a:1}, {b:2}, {c:3}];
      for (const i of myobject) {
        console.log(i);
      }
  }

  moduleA.exampleString = 'a string';

  moduleA.init = function () {
      privateFunction();
  };

  pubsub.subscribe( 'something', function(e) {
    moduleA.init();
  });

  window.siteObj.moduleA = moduleA;
}());