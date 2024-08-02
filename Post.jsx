import { useContext } from "react";
import { MdDeleteForever } from "react-icons/md";
import { PostList } from "../store/post-list-store";

const Post = ({ post }) => {
  const { deleteList } = useContext(PostList);
  return (
    <>
      <div className="card post-card" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">
            {post.title}

            <span
              className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
              onClick={() => deleteList(post.id)}
            >
              <MdDeleteForever />
            </span>
          </h5>

          <p className="card-text">{post.body}</p>
          {post.tags.map((tag) => {
            <span key={tag} className="badge text-bg-primary hashtags">
              {tag}
            </span>;
          })}
          <div className="alert alert-success reaction" role="alert">
            The reaction of post is{post.reaction} people.
          </div>
        </div>
      </div>
    </>
  );
};
export default Post;
