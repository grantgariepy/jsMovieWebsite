// imports
const express = require('express');
const app = express();
const port = 3000
var cors = require('cors')
app.use(cors())

// Listen on port 3000
app.listen(port, () => console.info(`App listening on port ${port}`))

// Static Files

app.use(express.static('./Public'))


app.use('/css', express.static(__dirname + 'Public/css'))
app.use('/js', express.static(__dirname + 'Public/js'))
app.use('/img', express.static(__dirname + 'Public/img'))
app.use('/views', express.static(__dirname + 'Public/views'))

express.static.mime.define({'text/html': ['ejs']
});

// Set Views
app.set('css', './Public/css')
app.set('views', './Public/views')
app.set('view engine', 'ejs')


app.get('', (req, res) => {
  res.render('index')
})

app.get('/popularMovies', (req, res) => {
  res.render('popularMovies')
})

app.get('/popularTVShows', (req, res) => {
  res.render('popularTVShows')
})

app.get('/top250', (req, res) => {
  res.render('top250')
})

app.get('/about', (req, res) => {
  res.render('about', { text: 'hey'})
})

// d