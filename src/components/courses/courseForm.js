"use strict";

var React = require('react');
var Input = require('../common/textInput');
var Select = require('../common/selectInput');

var CourseForm = React.createClass({
  propTypes: {
    course: React.PropTypes.object.isRequired,
    authors: React.PropTypes.array.isRequired,
    onSave: React.PropTypes.func.isRequired,
    onChange: React.PropTypes.func.isRequired,
    errors: React.PropTypes.object
  },
  render: function () {
    return (
        <form>
          <h1>Manage Course</h1>
          <Input
              name="title"
              label="Title"
              value={this.props.course.title}
              onChange={this.props.onChange}
              error={this.props.errors.title} />

          <Input
              name="watchHref"
              label="URL"
              value={this.props.course.watchHref}
              onChange={this.props.onChange}
              error={this.props.errors.watchHref} />

          <Select
              name="author"
              label="Author"
              data={this.props.authors}
              value={this.props.course.author.id}
              onChange={this.props.onChange}
              error={this.props.errors.author} />

          <Input
              name="length"
              label="Length"
              value={this.props.course.length}
              onChange={this.props.onChange}
              error={this.props.errors.length} />

          <Input
              name="category"
              label="Category"
              value={this.props.course.category}
              onChange={this.props.onChange}
              error={this.props.errors.category} />

          <input type="submit"
                 value="Save"
                 className="btn btn-default"
                 onClick={this.props.onSave} />
        </form>
    );
  }
});

module.exports = CourseForm;