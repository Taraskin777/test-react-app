import "./singleComment.css";

export default function SingleComment(props) {
  const { text, color } = props;

  return (
    <li className="comment" style={{ color: color }}>
      {text}
    </li>
  );
}
