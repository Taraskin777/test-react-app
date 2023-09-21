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
      <input type="color" value={commentColor} onChange={handleColorChange} className="inputColor"/>
      <textarea
        placeholder="Type comment here..."
        value={commentText}
        onChange={handleTextChange}
        className="textArea"
      ></textarea>
      <button onClick={handleAddComment} className="addComment">Add New</button>
    </div>
  );
}
