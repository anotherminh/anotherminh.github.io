window.AboutMe = React.createClass({
  render: function () {
    var klass = "about-me-wrapper" ;
    klass += this.props.show ? " show" : " hide";
    var button = "<<";

    return (
      <div className={klass}>
        <div className="blurb">
          <img className="profile-photo" src="./me.png"/>
          I started out as a philosophy major with interests in
          analytic philosophy and formal logic, which eventually led me to learn
          more about computers and computability. I wrote my first "code"
          senior year of college: they were instructions for a Turing Machine.
          Though my introduction to the field was rather abstract and
          removed from what the majority of computer programmers actually do,
          I knew that I enjoyed the type of thinking that comes with being
          a programmer. So, I started teaching myself how to code,
          and enrolled in App Academy, a bootcamp for web development. So far,
          I've built a number of websites, mini games, and web widgets, using
          Ruby on Rails, JavaScript, SQL, jQuery, React/Flux.
        </div>
        <div className="down-button" onClick={this.props.handleClick}>{button}</div>
      </div>
    );
  }
});
