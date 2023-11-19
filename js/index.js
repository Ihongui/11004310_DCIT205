class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: props.likes || 0,
      isLiked: props.isLiked || false,
    };
  }

  handleLikeClick = () => {
    this.setState((prevState) => ({
      likes: prevState.isLiked ? prevState.likes - 1 : prevState.likes + 1,
      isLiked: !prevState.isLiked,
    }));
  };

  render() {
    return (
      <button
        className={`btn btn-link ${this.state.isLiked ? "liked" : ""}`}
        onClick={this.handleLikeClick}
      >
        {this.state.isLiked ? "Unlike" : "Like"} {this.state.likes}
      </button>
    );
  }
}

document
  .querySelectorAll("div.col-lg-3.span.react-like")
  .forEach(function (span) {
    ReactDOM.render(<LikeButton />, span);
  });
