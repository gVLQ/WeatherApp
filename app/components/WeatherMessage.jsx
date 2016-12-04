var React = require('react');

var WeatherMessage = ({temp,location}) => {
  return (
    <h3>Sunt {temp}</h3>
  );
};

module.exports = WeatherMessage;
