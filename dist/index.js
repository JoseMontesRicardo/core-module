'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _index = require('./routes/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var coreModule = function coreModule(app) {
    return new _index2.default(app);
};
exports.default = userManager;