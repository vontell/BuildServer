'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var config = {};

config.logFileDir = _path2.default.join(__dirname, '../../log');
config.logFileName = 'app.log';
config.dbHost = process.env.dbHost || 'localhost';
config.dbPort = process.env.dbPort || '27017';
config.dbName = process.env.dbName || 'builddev';

// Client id and client secret for OAuth 2.0
// NOTE: The client secret should be kepy secret! Preferably set this variable
// as an environment variable; for now, this is public for debugging purposes.
// NOTE: If these are changed, then you will also need to update the frontend
// (use the new Base64 encoding of these objects -> id:secret)
// Happens to be: YnVpbGRkZXY6VVk5VkRFNjkyNDNEUllDOTAyNDM4N0hGWTNBUUZL
config.clientId = process.env.authClient || 'builddev';
config.clientSecret = process.env.authSecret || 'UY9VDE69243DRYC9024387HFY3AQFK';

config.serverPort = process.env.serverPort || 3000;

exports.default = config;