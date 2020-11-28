function getJoke() {
    fetch('https://api.chucknorris.io/jokes/random')
    .then(response => response.json())
    .then(data => {
        console.log(data['value']);
        document.getElementById('joke').innerHTML = data['value'];
    })
    .catch(error => {
        console.log(error);
    })
    ;
}