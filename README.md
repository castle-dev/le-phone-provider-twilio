le-phone-provider-twilio
=========

**Connect le-phone-service to Twilio**

## Installation

  `npm install le-phone-provider-twilio`

## Usage

```
  var twilioAccountSID = /* your acount SID */
  var twilioAuthToken = /* your auth token */
  var PhoneProvider = require('le-phone-provider-twilio');
  var provider = new PhoneProvider(twilioAuthToken, twilioAccountSID);
```

## Tests

* `npm test` to run unit tests once
* `gulp tdd` to run unit and e2e tests when tests change
* `gulp coverage` to run unit tests and create a code coverage report

## Contributing

Please follow the project's [conventions](https://github.com/castle-dev/le-phone-provider-twilio/blob/develop/CONTRIBUTING.md) or your changes will not be accepted

## Release History

* 0.1.0 Initial release
