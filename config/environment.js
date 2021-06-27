module.exports = function(app, express) {
    var path = require('path');
    app.use(express.static(path.join(__dirname + '/../Public')))
    app.use('/css', express.static(path.join(__dirname + '/../css')))
    app.use('/js', express.static(path.join(__dirname + '/../js')))
    app.use('/views', express.static(path.join(__dirname + '/../views')))
    app.set('views', path.join(path.join(__dirname + '/../Public/views')))
    express.static.mime.define({'text/html': ['ejs']})
    app.set('view engine', 'ejs')
    app.use(express.urlencoded({
        extended: true
    }))
}
