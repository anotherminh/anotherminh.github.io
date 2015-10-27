window.Projects = React.createClass({
  render: function () {
    var klass = "projects wrapper" ;
    klass += this.props.show ? " show-projects" : " hide-projects";
    var button = "<<";

    return (
      <div className={klass}>
        <div className="project-thumbs-container">

        </div>
        <div value="ShowProjects" className="right button" onClick={this.props.handleClick}>{button}</div>
      </div>
    );
  }
});
