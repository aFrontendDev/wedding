/* eslint-disable no-console */
require('babel-core/register');
var Metalsmith = require('metalsmith');
var reactTemplate = require('metalsmith-react-templates').default;

new Metalsmith(__dirname)
  .source('./app/03_pages')
  .clean(false)
  .use(reactTemplate({
    babel: true,
    directory: './app/_layouts',
    baseFileDirectory: './app/_master-pages',
    baseFile: '_master.html',
    isStatic: true
  }))
  .destination('./dist')
  .build(function(err) {
    if (err) {
      throw err;
    }
  });
