import "./commentInput.css";

export default function CommentInput(props) {
  const {
    handleAddComment,
    handleColorChange,
    handleTextChange,
    commentColor,
    commentText,
  } = props;

  return (
    <div className="commentForm">
      <input type="color" value={commentColor} onChange={handleColorChange} />
      <textarea
        placeholder="Enter your comment..."
        value={commentText}
        onChange={handleTextChange}
      ></textarea>
      <button onClick={handleAddComment}>Add Comment</button>
    </div>
  );
}
