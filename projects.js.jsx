window.Projects = React.createClass({
  render: function () {
    var klass = "projects wrapper" ;
    klass += this.props.show ? " show-projects" : " hide-projects";
    var button = "<<";

    return (
      <div className={klass}>
        <div className="project-thumbs-container">
          <a className="project-thumb-wrapper" href="https://github.com/anotherminh/Rent-a-Bench">
            <img className="project-thumb" src="./images/benchIcon.png"></img>
            Seat-Finder
          </a>
          <a className="project-thumb-wrapper" href="https://github.com/anotherminh/minesweeper">
            <img className="project-thumb" src="./images/minesweeper.png"></img>
            Minesweeper
          </a>
          <a className="project-thumb-wrapper" href="https://github.com/anotherminh/ruby_chess_game">
            <img className="project-thumb" src="./images/chess.png"></img>
            Chess
          </a>
          <a className="project-thumb-wrapper" href="https://github.com/anotherminh/mini-keyboard">
            <img className="project-thumb" src="./images/keyboard.png"></img>
            Minhi Keyboard
          </a>
          <a className="project-thumb-wrapper" href="https://github.com/anotherminh/RailsLite">
            <img className="project-thumb" src="./images/rails.png"></img>
            Minhi Rails
          </a>
          <a className="project-thumb-wrapper" href="https://github.com/anotherminh/FlyingSheep">
            <img className="project-thumb" src="./images/flying-sheep.png"></img>
            FlyingSheep
          </a>
        </div>
        <div value="ShowProjects" className="right button" onClick={this.props.handleClick}>{button}</div>
      </div>
    );
  }
});
