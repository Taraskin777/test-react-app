import "./singleComment.css";

export default function SingleComment(props) {
  const { text, color } = props;

  return (
    <li className="comment" style={{ color: color }}>
      <div className="colorBox" style={{ background: color }}></div>
      <div style={{ color: color }}>{text}</div>
    </li>
  );
}
