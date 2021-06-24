// imports
const express = require('express');
const app = express();
const port = 3000


// Listen on port 3000
app.listen(port, () => console.info(`App listening on port ${port}`))

// Static Files
app.use(express.static('Public'))
app.use('/css', express.static(__dirname + 'Public/css'))
app.use('/js', express.static(__dirname + 'Public/js'))
app.use('/img', express.static(__dirname + 'Public/img'))

 
// Set Views
app.set('views', './views')
app.set('view engine', 'ejs')

app.get('', (req, res) => {
  res.render('index')
})

app.get('/about', (req, res) => {
  res.render('about', { text: "About Page"})
})

// d