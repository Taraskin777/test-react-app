import "./commentList.css";

import SingleComment from "../singleComment/SingleComment";

export default function CommentList(props) {
  const { selectedElement } = props;

  if (!selectedElement || !selectedElement.comments) {
    return null;
  }

  const comments = selectedElement.comments;

  return (
    <ul className="commentList">
      {comments.map((comment) => (
        <SingleComment
          key={comment.id}
          text={comment.text}
          color={comment.color}
        />
      ))}
    </ul>
  );
}
