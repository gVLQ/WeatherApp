var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
  onSearch: function(e) {
    e.preventDefault();
  },
  render: function () {
    return (
      <div className="top-bar">
          <div className="top-bar-left">
            <ul className="menu">
              <li className="menu-text">Weather App - CloudComputing Homework</li>
              <li>
                <IndexLink to="/" activeCalssName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
              </li>
              <li>
                <Link to="/About" activeCalssName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
              </li>
              <li>
                <Link to="/Example" activeCalssName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
              </li>
            </ul>
          </div>
          <div className="top-bar-right">
            <form onSubmit={this.onSearch}>
              <ul className="menu">
                <li><input type="search" placeholder="E frig afara?"/></li>
                <li><input type="button" className="button" value="Cauta"/></li>
              </ul>
            </form>
          </div>
      </div>
    );
  }
});

module.exports = Nav;
