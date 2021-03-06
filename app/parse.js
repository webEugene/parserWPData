const sitemapParse = require('./modules/sitemapUrlsParse');
const startParsing = require('./modules/parseData');
const startClean = require('./modules/cleanFolders');

/**
 * Start chosen command app parser
 *
 * @param url
 * @param action
 */
const init = (url, action) => {
  switch (action) {
    case 'gs':
      sitemapParse.url(url);
      break;
    case 'parse':
      startParsing();
      break;
    case 'clean':
      startClean();
      break;
  }
};

module.exports.init = init;
