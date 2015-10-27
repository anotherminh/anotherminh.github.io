window.Pixelate = React.createClass({
  render: function () {
    var klass = "pixelate-wrapper" ;
    klass += this.props.show ? " show-pix" : " hide-pix";
    var button = "<<";

    return (
      <div className={klass}>
        <div className="pix-blurb">
          <a href="http://www.pixelates.xyz">Pixelate</a> is a website that makes creating and sharing pixel art fun and easy.
          Notable features include a fast-rendering paintbrush, a paintbucket, and
          the ability to undo changes. Drawings can be downloaded or saved (editable), and
          can be viewed/liked/commented on by other users. 
        </div>

        <div className="pix-thumbs-container">
          {
            ["yea", "mug", "flowers", "girl", "star", "melon"].map(function (pic, idx) {
              var url = "./images/" + pic + ".png";
              return <img key={idx} className="pix-thumb" src={url}/>;
            })
          }
        </div>
        <div value="ShowPixelate" className="left button" onClick={this.props.handleClick}>{button}</div>
      </div>
    );
  }
});
