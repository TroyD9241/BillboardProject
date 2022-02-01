var axios = require("axios").default;

const marketListId = {
  us: "ip-country-chart-US",
  jp: "ip-country-chart-JP",
  es: "ip-country-chart-ES",
  fr: "ip-country-chart-FR",
  kr: "ip-country-chart-KR",
  za: "ip-country-chart-ZA",
};

var getJapanChart = {
  method: "GET",
  url: "https://shazam.p.rapidapi.com/charts/track",
  params: {
    locale: "en-US",
    listId: marketListId.jp,
    pageSize: "100",
    startFrom: "0",
  },
  headers: {
    "x-rapidapi-host": "shazam.p.rapidapi.com",
    "x-rapidapi-key": "1d9807bd7emshf12c12e9aa5ceb4p1c0c2djsnd7abd4669d0e",
  },
};

var getUSChart = {
  method: "GET",
  url: "https://shazam.p.rapidapi.com/charts/track",
  params: {
    locale: "en-US",
    listId: marketListId.us,
    pageSize: "100",
    startFrom: "0",
  },
  headers: {
    "x-rapidapi-host": "shazam.p.rapidapi.com",
    "x-rapidapi-key": "1d9807bd7emshf12c12e9aa5ceb4p1c0c2djsnd7abd4669d0e",
  },
};

var getSpainChart = {
  method: "GET",
  url: "https://shazam.p.rapidapi.com/charts/track",
  params: {
    locale: "en-US",
    listId: marketListId.es,
    pageSize: "100",
    startFrom: "0",
  },
  headers: {
    "x-rapidapi-host": "shazam.p.rapidapi.com",
    "x-rapidapi-key": "1d9807bd7emshf12c12e9aa5ceb4p1c0c2djsnd7abd4669d0e",
  },
};

var getFranceChart = {
  method: "GET",
  url: "https://shazam.p.rapidapi.com/charts/track",
  params: {
    locale: "en-US",
    listId: marketListId.fr,
    pageSize: "100",
    startFrom: "0",
  },
  headers: {
    "x-rapidapi-host": "shazam.p.rapidapi.com",
    "x-rapidapi-key": "1d9807bd7emshf12c12e9aa5ceb4p1c0c2djsnd7abd4669d0e",
  },
};

var getKoreaChart = {
  method: "GET",
  url: "https://shazam.p.rapidapi.com/charts/track",
  params: {
    locale: "en-US",
    listId: marketListId.kr,
    pageSize: "100",
    startFrom: "0",
  },
  headers: {
    "x-rapidapi-host": "shazam.p.rapidapi.com",
    "x-rapidapi-key": "1d9807bd7emshf12c12e9aa5ceb4p1c0c2djsnd7abd4669d0e",
  },
};

var getSouthAfricaChart = {
  method: "GET",
  url: "https://shazam.p.rapidapi.com/charts/track",
  params: {
    locale: "en-US",
    listId: marketListId.za,
    pageSize: "100",
    startFrom: "0",
  },
  headers: {
    "x-rapidapi-host": "shazam.p.rapidapi.com",
    "x-rapidapi-key": "1d9807bd7emshf12c12e9aa5ceb4p1c0c2djsnd7abd4669d0e",
  },
};
const getJP = () =>
  axios
    .request(getJapanChart)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });

const getUS = () => {
  axios
    .request(getUSChart)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
};

const getSpain = () => {
  axios
    .request(getSpainChart)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
};

const getFrance = () => {
  axios
    .request(getFranceChart)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
};

const getKorean = () => {
  axios
    .request(getKoreaChart)
    .then(function (response) {
      response.data;
    })
    .then(function (response) {
      console.log(response.title);
    })

    .catch(function (error) {
      console.error(error);
    });
};

const getSA = () => {
  axios
    .request(getSouthAfricaChart)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
};

getKorean();
