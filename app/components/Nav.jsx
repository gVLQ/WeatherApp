var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
  render: function () {
    return (
  <div>
        <h2>Nav Component</h2>
        <IndexLink to="/" activeCalssName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
        <Link to="/About" activeCalssName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
        <Link to="/Example" activeCalssName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
  </div>
    );
  }
});

module.exports = Nav;
