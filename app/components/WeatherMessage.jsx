var React = require('react');

var WeatherMessage = ({temp,location}) => {
  return (
    <h5>Sunt {temp}</h5>
  );
};

module.exports = WeatherMessage;
