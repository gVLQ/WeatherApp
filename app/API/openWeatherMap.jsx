var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?&appid=cd749a3b0620a14c973338722066a273&units=metric';

module.exports = {
  getTemp: function(location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function(response){
      var temperatura = response.data.main.temp;
      var oras = response.data.name;
      var tara = response.data.sys.country
      if(response.data.cod && response.data.message) {
        throw new Error(response.data.message);
      } else {
        return temperatura+" grade in "+oras+", "+tara;
      }
    },function(response){
      throw new Error(response.data.message);
    });
  }
}
