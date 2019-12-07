window.App = React.createClass({
  getInitialState: function () {
    return { ShowAboutMe: false, ShowPixelate: false, ShowProjects: false };
  },

  handleClick: function (e) {
    var buttonClicked = e.currentTarget.getAttribute('value');
    var currentState = this.state[buttonClicked];

    if (currentState) {
      this.state[buttonClicked] = false;
    } else {
      this.state[buttonClicked] = true;
    }

    this.forceUpdate();
  },

  render: function () {
    return (
      <div className="component-wrapper">
        <Menu handleClick={this.handleClick}/>
        <AboutMe show={this.state.ShowAboutMe} handleClick={this.handleClick}/>
        <Pixelate show={this.state.ShowPixelate} handleClick={this.handleClick}/>
      </div>
    );
  }
});
