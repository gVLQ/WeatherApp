var React = require('react');
var {Link} = require('react-router');

var Example = React.createClass({
  render: function () {
    return (
      <div>
      <h3 className="text-center">Examples</h3>
      <p>Here are a few example locations to try out:</p>
      <ol>
        <li><Link to='/?location=Bucharest'> Bucharest, RO</Link></li>
        <li><Link to='/?location=New York'> New York, US</Link></li>
      </ol>
      </div>
    )
  }
});

module.exports = Example;
