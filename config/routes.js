module.exports = function(app) {
    app.get('', (req, res) => {
        res.render('index')
    })

    app.get('/index', (req, res) => {
        res.render('index')
    })
    
    app.get('/popularMovies', (req, res) => {
      res.render('popularMovies')
    })

    app.get('/top250', (req, res) => {
        res.render('top250')
      })
    
    app.get('/popularTVShows', (req, res) => {
      res.render('popularTVShows')
    })

    app.get('/searchResult', (req, res) => {
        res.render('searchResult')
    })
    
    app.get('/about', (req, res) => {
      res.render('about', { text: 'hey'})
    })
}