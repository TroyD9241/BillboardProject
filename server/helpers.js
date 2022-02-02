var axios = require('axios').default

var options = {
  method: 'GET',
  url: 'https://shazam.p.rapidapi.com/charts/track',
  params: {
    locale: 'en-US',
    pageSize: '20',
    startFrom: '21',
    listId: 'ip-country-chart-KR',
  },
  headers: {
    'x-rapidapi-host': 'shazam.p.rapidapi.com',
    'x-rapidapi-key': '1d9807bd7emshf12c12e9aa5ceb4p1c0c2djsnd7abd4669d0e',
  },
}

axios
  .request(options)
  .then(function (response) {
    response.data.tracks.map((track) => {
      const trackObject = new Object()
      trackObject.trackName = track.title
      trackObject.artist = track.subtitle
      trackObject.image = track.images.coverarthq
      console.log(trackObject)
    })
  })
  .catch(function (error) {
    console.error(error)
  })
