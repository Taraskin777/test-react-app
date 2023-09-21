import { useState } from "react";

import CommentInput from "../commentInput/CommentInput";
import CommentList from "../commentsList/CommentList";

import "./comments.css";

export default function Comments(props) {
  const [commentText, setCommentText] = useState("");
  const [commentColor, setCommentColor] = useState("#000");

  console.log(commentText, commentColor);

  const { selectedItemId, addCommentToItem, items } = props;

  const handleTextChange = (e) => {
    setCommentText(e.target.value);
  };

  const handleColorChange = (e) => {
    setCommentColor(e.target.value);
  };

  const handleAddComment = () => {
    if (commentText.trim() === "") {
      return;
    }

    const newComment = {
      id: Date.now(),
      text: commentText,
      color: commentColor,
    };

    addCommentToItem(selectedItemId, newComment);

    setCommentText("");
    setCommentColor("#000");
  };

  const selectedElement = items.find((item) => item.id === selectedItemId);

  return (
    <div className="commentsBox">
      <h1>Comments # {selectedItemId}</h1>
      <CommentList selectedElement={selectedElement} />
      <CommentInput
        handleAddComment={handleAddComment}
        handleColorChange={handleColorChange}
        handleTextChange={handleTextChange}
        commentColor={commentColor}
        commentText={commentText}
      />
    </div>
  );
}
