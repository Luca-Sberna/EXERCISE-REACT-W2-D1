import { Alert, ListGroup } from "react-bootstrap";
import { ScrollableDiv } from "react";

const CommentList = (props) => {
  const currentComments = [...props.comments];

  if (currentComments.length < 1) {
    return (
      <Alert variant="warning">
        Non ci sono commenti su questo libro, sii il primo ad inserirne uno!
      </Alert>
    );
  }

  {
    /* <ScrollableDiv maxHeight={300}> */
  }
  return (
    <ListGroup
      className="list-scroll mb-2"
      style={{ height: "200px", overflowY: "scroll" }}
    >
      {currentComments.map((comment) => {
        return <ListGroup.Item>{comment.comment}</ListGroup.Item>;
      })}
    </ListGroup>
  );
};
{
  /* </ScrollableDiv> */
}

export default CommentList;
