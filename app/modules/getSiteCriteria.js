const Constants = require('../constants');
const { URL } = require('url');
const fs = require('fs');
const regex = new RegExp('^([^.]+)');
const jsonReturn = [];
let returnFilename = '';

/**
 * Get site criteria
 *
 * @param site
 *
 * @returns {[]}
 */
const getSiteCriteria = (site) => {
  if (!site) throw new Error(`Url was not received!`);
  const parseDomain = new URL(site).host;
  const hostName = parseDomain.match(regex)[0];

  fs.readdir(Constants.CRITERIA_DIR, (err, files) => {
    if (err) return new Error('Something is wrong!');
    returnFilename = files.filter(item => (item === `${hostName}.json`) ? `${hostName}.json` : '');
    if ('undefined' !== returnFilename[0]) {
      fs.readFile(`${Constants.CRITERIA_DIR}/${returnFilename[0]}`, 'utf8', (err, data) => {
        if (err) throw new Error('Can\'t read file!');
        jsonReturn.push(JSON.parse(data));
      });
    }
  });
  return jsonReturn;
};

module.exports = getSiteCriteria;
