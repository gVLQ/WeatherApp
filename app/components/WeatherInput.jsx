var React = require('react');

var WeatherInput = React.createClass({
  onFormSubmit: function(e) {
    e.preventDefault();
    var location = this.refs.location.value;
    if (location.length>0) {
      this.refs.location.value = '';
      this.props.onSearch(location);
    }
  },
  render: function () {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input type="text" ref="location" placeholder='Search Weather by City'/>
          <button className="button expanded hollow">Search</button>
        </form>
      </div>
    );
  }
});

module.exports = WeatherInput;
