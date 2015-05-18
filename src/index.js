var q = require('q');
var twilio = require('twilio');

var PhoneProvider = function (accountSID, authToken) {
  if (!accountSID) { throw new Error('Account SID required'); }
  if (!authToken) { throw new Error('Auth token required'); }
  var _api = twilio(accountSID, authToken);

  this.text = function (from, to, message) {
    if (!from) { return q.reject(new Error('From phone number required')); }
    if (!to) { return q.reject(new Error('To phone number required')); }
    if (!message) { return q.reject(new Error('Message required')); }
    var deferred = q.defer();
    _api.messages.create({
      from: from,
      to: to,
      body: message
    }, function (err, sms) {
      if (err) { deferred.reject(err); }
      else { deferred.resolve(); }
    });
    return deferred.promise;
  };
}

module.exports = PhoneProvider;
