import { Component } from "react";
import CommentList from "./CommentList";

class CommentArea extends Component {
  state = {
    comments: "",
  };

  componentDidMount = () => {
    this.fetchCommenti();
  };

  fetchCommenti = async () => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" +
          this.props.asin,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDEzYzU3YWM1NmIzNjAwMTMzZmU1N2MiLCJpYXQiOjE2ODA1NTIxMzIsImV4cCI6MTY4MTc2MTczMn0.ZHGVupEfAXnmeoOa0t1gPDXwjJwbavEljg6Q2zDq1MA",
            "Content-Type": "application/json",
          },
        },
      );

      if (response.ok) {
        const data = await response.json();
        this.setState({ comments: data });
      }
    } catch (error) {
      throw new Error(error);
    }
  };

  render() {
    return <CommentList comments={this.state.comments}></CommentList>;
  }
}
export default CommentArea;
