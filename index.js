
/**
 * Expose `isHumanUrl`.
 */

module.exports = isHumanUrl;


/**
 * Matcher.
 */

var matcher = /^([^\s\.]+\.[^\s]{2,}|localhost|([^\s\.]+:\/\/localhost))$/;


/**
 * Loosely validate a URL.
 *
 * @param {String} string
 * @return {Boolean}
 */

function isHumanUrl (string) {
  return matcher.test(string);
}