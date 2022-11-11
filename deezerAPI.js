
const searchButton = $('.searchButton')
let artist;
const songNameEL = document.getElementById('songTitle')
const albumPic = document.getElementById('albumCover')
const artistName = document.getElementById('artistName')
const albumNameEL = document.getElementById('albumName')
// const albumPicUrl = img[`src`]
const nextButton = document.createElement(`button`)



function getApi() {
    const queryURL = 'https://api.deezer.com/artist/' + artist
    fetch(queryURL)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            getTopSongs(data.id)
            // console.log(data)
        })

}

function getTopSongs(id) {
    const topSongApi = 'https://api.deezer.com/artist/' + id + '/top'
    fetch(topSongApi)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            // img[`src`] = data.data[0].album.cover_medium
            songNameEL.textContent = `Song Title:` + data.data[0].title
            artistName.textContent = `Artist Name:` + data.data[0].artist.name
            albumNameEL.textContent = `Album Name:` + data.data[0].album.title
            // albumPicUrl.textContent = data.data[0].album.cover_medium

            // songNameEL.textContent = data.data[1].title + data.data[1].album.title + data.data[1].artist.name
            // songNameEL.textContent = data.data[2].title + data.data[2].album.title + data.data[2].artist.name
            // songNameEL.textContent = data.data[3].title + data.data[3].album.title + data.data[3].artist.name
            // songNameEL.textContent = data.data[4].title + data.data[4].album.title + data.data[4].artist.name
            // nextButton.textContent = 'Get 5 more songs!'
            // nextButton.append(songNameEL)
            // albumPic.innerHTML = img[`src`]
            console.log(data.data[0].album.cover_medium)
            console.log(data)
        })
}



searchButton.click(function () {
    artist = $('.userInput').val().trim().replace()
    getApi()
    // youtubeApi()
})
