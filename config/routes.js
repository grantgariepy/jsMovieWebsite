module.exports = function(app, omdbApi) {

    // Support Functions
    function searchOMDB (title, yourFunc) {
      omdbApi.search({
        apiKey: 'f3011be7',
        query: title,
        // type: 'movie'
      }, yourFunc
    )}

    function getOMDBMovie (title, yourFunc) {
      omdbApi.get({
        apiKey: 'f3011be7',
        title: title,
        // type: 'movie'
      }, yourFunc
    )}

    // Routes
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
    
    app.get('/movieCard', (req, res) => {
      res.render('movieCard')
    })

    app.post('/searchResult', (req, res) => {
      var title = req.body.searchTerm
      var OMDBCallback = function(err, data) {
        if (err) {
          console.log(err)
        } else {
          // console.log(data)
          res.render('searchResult', {
            result: data
          })
        }
      }
      searchOMDB(title, OMDBCallback)
    })

    
    app.get('/movieCard/:id', (req, res) => {
      var id = req.params.id
      var title = req.params.id
      console.log(id)
      console.log(title)
      var OMDBCallback = function(err, data) {
        if (err) {
          console.log(err)
          res.render('')
        } else {
          console.log(data)
          res.render('movieCard', {
            result: data
          })
        }
      }
      getOMDBMovie(title, OMDBCallback)
    })
  
    app.get('/testPage', (req, res) => {
      res.render('testPage')
    })
  }