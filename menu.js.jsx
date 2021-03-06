window.Menu = React.createClass({
  render: function () {
    return (
      <div className="thumbs-container">
        <a value="ShowPixelate" onClick={this.props.handleClick}>
          <img className="thumb" src="pixelate_icon.png"/>
        </a>
        <a value="ShowAboutMe" onClick={this.props.handleClick}>
          <img className="thumb" src="about_me.png"/>
        </a>
        <a value="ShowProjects" href="https://github.com/anotherminh">
          <img className="thumb" href="https://github.com/anotherminh" src="github_icon.png"/>
        </a>
      </div>
    );
  }
});
