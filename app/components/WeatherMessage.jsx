var React = require('react');

var WeatherMessage = ({temp, location}) => {
  return (
    <p className="text-center">There are {temp} .</p>
  )
};

module.exports = WeatherMessage;
