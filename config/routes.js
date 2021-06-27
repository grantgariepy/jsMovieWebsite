module.exports = function(app, omdbApi, params) {
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
    
    app.post('/searchResult', (req, res) => {
      var title = req.body.movieTitle
      var response = ""

      var page = function(err, data) {
        if (err) {
           console.log(err)
        } else {
          res.render('searchResult', {
            result: data
          })
        }
      }

      omdbApi.search({
        apiKey: 'f3011be7',
        query: "Drive",
        type: 'movie'
      },page)
    })
  
    app.get('/about', (req, res) => {
      res.render('about', { text: 'hey'})
    })
  }