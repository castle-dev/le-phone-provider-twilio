var q = require('q');
var twilio = require('twilio');
/**
 * A bridge between le-phone-service and Twilio
 * @class PhoneProvider
 * @param {string} accountSID the twilio account SID
 * @param {string} authToken the twilio auth token
 * @returns {provider}
 */
var PhoneProvider = function (accountSID, authToken) {
  if (!accountSID) { throw new Error('Account SID required'); }
  if (!authToken) { throw new Error('Auth token required'); }
  var _api = twilio(accountSID, authToken);
  /**
   * Sends a text message
   * @function text
   * @memberof PhoneProvider
   * @instance
   * @param {string} from the phone number of the sender
   * @param {string} to the phone number of the recipient
   * @param {string} message the content of the text message
   * @returns {promise}
   */
  this.text = function (from, to, message) {
    if (!from) { return q.reject(new Error('From phone number required')); }
    if (!to) { return q.reject(new Error('To phone number required')); }
    if (!message) { return q.reject(new Error('Message required')); }
    return q.resolve();
  };
}

module.exports = PhoneProvider;
