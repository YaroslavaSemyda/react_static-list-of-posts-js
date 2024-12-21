import './PostInfo.scss';
import { CommentList } from '../CommentList/CommentList';

export const PostInfo = ({ post }) => {
  const { title, body, user, comments } = post;

  return (
    <div className="PostInfo">
      <h2 className="PostInfo__title">{title}</h2>
      <p className="PostInfo__user">
        <strong>{user.name}</strong> ({user.email})
      </p>
      <p className="PostInfo__body">{body}</p>
      <CommentList comments={comments} />
    </div>
  );
};
