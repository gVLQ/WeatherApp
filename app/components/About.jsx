var React = require('react');
var {Link} = require('react-router');

var About = (props) => {
  return (
    <div>
    <h3 className="text-center">About</h3>
    <p>This is a weather application built on React.</p>
    <p>Here are some of the tools I've used:</p>
    <ul>
      <li><a href="https://facebook.github.io/react">React.js</a></li>
      <li><a href="http://openweathermap.org">OpenWeatherMap.org</a></li>
    </ul>
    </div>
  )
};

module.exports = About;
