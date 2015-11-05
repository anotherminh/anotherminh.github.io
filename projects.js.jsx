window.Projects = React.createClass({
  render: function () {
    var klass = "projects wrapper" ;
    klass += this.props.show ? " show-projects" : " hide-projects";
    var button = "<<";

    return (
      <div className={klass}>
        <div className="project-thumbs-container">

          <div className="browser">
            <a className="project-thumb-wrapper" href="https://minhi-keyboard.herokuapp.com/">
              <div className="project-thumb keyboard"></div>
              <div className="thumb-title">Minhi Keyboard</div>
            </a>

            <a className="project-thumb-wrapper" href="http://anotherminh.github.io/SET/">
              <div className="project-thumb pepper"></div>
              <div className="thumb-title">Pretty Peppers</div>
            </a>
          </div>

          <div className="terminal">
            <a className="project-thumb-wrapper" href="https://github.com/anotherminh/RailsLite">
              <div className="project-thumb rails"></div>
              <div className="thumb-title">Minhi Rails</div>
            </a>

            <a className="project-thumb-wrapper" href="https://github.com/anotherminh/minesweeper">
              <div className="project-thumb minesweeper"></div>
              <div className="thumb-title">Minesweeper</div>
            </a>

            <a className="project-thumb-wrapper" href="https://github.com/anotherminh/ruby_chess_game">
              <div className="project-thumb chess"></div>
                <div className="thumb-title">Chess</div>
            </a>
          </div>
        </div>
        <div value="ShowProjects" className="right button" onClick={this.props.handleClick}>{button}</div>
      </div>
    );
  }
});
