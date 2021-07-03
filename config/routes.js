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
        t: title,
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

    app.post('/movieCard', (req, res) => {
      var title = req.body.name
      var OMDBCallback = function(err, data) {
        if (err) {
          console.log(err)
        } else {
          console.log(data)
          res.render('movieCard', {
            result: data
          })
        }
      }
      getOMDBMovie(title, OMDBCallback)
    })
  
    app.get('/about', (req, res) => {
      res.render('about', { text: 'hey'})
    })
  }