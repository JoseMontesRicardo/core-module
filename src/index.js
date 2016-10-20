
const coreModule = function(app){
    app.get('/home', function(req, res){
        res.send('hola2')
    })
} 
module.exports = coreModule