module.exports = function(app) {
    app.get('', (req, res) => {
        res.render('index')
      })
    
    app.get('/popularMovies', (req, res) => {
      res.render('popularMovies')
    })
    
    app.get('/about', (req, res) => {
      res.render('about', { text: 'hey'})
    })
}