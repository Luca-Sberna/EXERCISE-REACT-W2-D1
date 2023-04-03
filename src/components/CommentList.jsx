import { Alert, ListGroup } from "react-bootstrap";

const CommentList = (props) => {
  const currentComments = [...props.comments];

  if (currentComments.length < 1) {
    return (
      <Alert variant="warning">
        Non ci sono commenti su questo libro, sii il primo a inserirne uno!
      </Alert>
    );
  }

  return (
    <ListGroup className="mb-2">
      {currentComments.map((comment) => {
        return <ListGroup.Item>{comment.comment}</ListGroup.Item>;
      })}
    </ListGroup>
  );
};

export default CommentList;
