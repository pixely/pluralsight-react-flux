"use strict";

var React = require('react');

var Select = React.createClass({
  propTypes: {
    data: React.PropTypes.array.isRequired,
    name: React.PropTypes.string.isRequired,
    label: React.PropTypes.string.isRequired,
    onChange: React.PropTypes.func.isRequired,
    placeholder: React.PropTypes.string,
    value: React.PropTypes.string,
    error: React.PropTypes.string
  },
  render: function () {
    var wrapperClass = 'form-group';
    if( this.props.error && this.props.error.length > 0) {
      wrapperClass += " " + 'has-error';
    }
    var createOption = function (option) {
      return (
          <option key={option.id}
                  value={option.id}>
            {option.firstName} {option.lastName}
          </option>
      );
    };
    return (
        <div className={wrapperClass}>
          <label htmlFor={this.props.name}>{this.props.label}</label>
          <div className="field">
            <select
                name={this.props.name}
                className="form-control"
                ref={this.props.name}
                onChange={this.props.onChange}
                value={this.props.value}>
              <option value="">Select author</option>
              {this.props.data.map(createOption, this)}
            </select>

            <div className="input">{this.props.error}</div>
          </div>
        </div>
    );
  }
});

module.exports = Select;