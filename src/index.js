
const coreModule = function(app){
    app.get('/home', function(req, res){
        res.send('hola3')
    })
} 
module.exports = coreModule