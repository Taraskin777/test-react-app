import { useState } from "react";

import CommentInput from "../commentInput/CommentInput";
import CommentList from "../commentsList/CommentList";

import "./comments.css";

export default function Comments(props) {
  const [commentText, setCommentText] = useState("");
  const [commentColor, setCommentColor] = useState("#000");

 console.log(commentText, commentColor)

  const { selectedItemId, addCommentToItem } = props;

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
      text: commentText,
      color: commentColor,
    };

    // Додаємо новий коментар до обраного елемента за допомогою функції addCommentToItem
    addCommentToItem(selectedItemId, newComment);

    setCommentText("");
    setCommentColor("#000");
  };

  return (
    <div className="commentsBox">
      <h1>Comments # {selectedItemId}</h1>
      <CommentList />
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
