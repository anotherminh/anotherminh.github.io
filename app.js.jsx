window.App = React.createClass({
  getInitialState: function () {
    return { ShowAboutMe: false };
  },

  handleClick: function (e) {
    if (this.state.ShowAboutMe) {
      this.setState({ ShowAboutMe: false });
    } else {
      this.setState({ ShowAboutMe: true });
    }
  },

  render: function () {
    return (
      <div className="component-wrapper">
        <Menu handleClick={this.handleClick}/>
        <AboutMe show={this.state.ShowAboutMe} handleClick={this.handleClick}/>
      </div>
    );
  }
});
