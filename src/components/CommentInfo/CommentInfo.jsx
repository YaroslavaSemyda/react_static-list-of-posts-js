import './CommentInfo.scss';

export const CommentInfo = ({ comment }) => {
  const { name, email, body } = comment;

  return (
    <div className="CommentInfo">
      <p className="CommentInfo__name">
        <strong>{name}</strong> ({email})
      </p>
      <p className="CommentInfo__body">{body}</p>
    </div>
  );
};
