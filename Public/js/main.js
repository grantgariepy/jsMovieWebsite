function searchForMovie() {
    var request = new XMLHttpRequest()
    var title = document.getElementById('movieTitle').value;

    //open new connection, using the GET request on the URL endpoint
    request.open('GET', 'http://www.omdbapi.com/?t=' + title + '&apikey=f3011be7&', true)
    document.getElementById('requestText').value= 'http://www.omdbapi.com/?apikey=f3011be7&t=' + title;
    request.onload = function () {
        // Begin accessing JSON data here
        var data = JSON.parse(this.response)

        if (request.status >= 200 && request.status < 400) {
            document.getElementById('result').innerHTML = this.response;
        } else {
            console.log('error')
        }
    }
    request.send()
}
