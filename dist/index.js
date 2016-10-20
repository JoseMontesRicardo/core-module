'use strict';

var coreModule = function coreModule(app) {
    app.get('/home', function (req, res) {
        res.send('hola2');
    });
};
module.exports = coreModule;