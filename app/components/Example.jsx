var React = require('react');
var {Link} = require('react-router');

var Example = React.createClass({
  render: function () {
    return (
      <div>
      <h1 className="text-center">Examples</h1>
      <p>Exemple de cautari:</p>
      <ol>
        <li><Link to='/?location=Bucharest'>Bucharest, RO</Link></li>
        <li><Link to='/?location=NewYork'>New York, US</Link></li>
      </ol>
      </div>
    )
  }
});

module.exports = Example;
