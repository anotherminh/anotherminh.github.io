window.Menu = React.createClass({
  render: function () {
    return (
      <div className="thumbs-container">
        <a href="http://www.pixelates.xyz">
          <img className="thumb" src="pixelate_icon.png"/>
        </a>
        <a onClick={this.props.handleClick}>
          <img value="About Me" className="thumb" src="about_me.png"/>
        </a>
        <a href="https://github.com/anotherminh">
          <img className="thumb" src="github_icon.png"/>
        </a>
      </div>
    );
  }
});
