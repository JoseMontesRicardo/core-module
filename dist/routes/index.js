'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Routes = function () {
    function Routes(app) {
        (0, _classCallCheck3.default)(this, Routes);

        this.app = app;
        this.homeRoute();
        this.userRoute();
    }

    (0, _createClass3.default)(Routes, [{
        key: 'homeRoute',
        value: function homeRoute() {
            console.log('holaa');
            this.home = {
                route: app.router('/home')
            };
        }
    }, {
        key: 'userRoute',
        value: function userRoute() {
            console.log('holaa2');
            this.home = {
                route: app.router('/home')
            };
        }
    }]);
    return Routes;
}();

exports.default = Routes;