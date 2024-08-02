import { useContext, useRef } from "react";
import { PostList } from "../store/post-list-store";

const CreatePost = () => {
  const { addList } = useContext(PostList);

  const userIdElement = useRef();
  const posttitleElement = useRef();
  const postbodyElement = useRef();
  const reactionElement = useRef();
  const tagsElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const posttitle = posttitleElement.current.value;
    const postbody = postbodyElement.current.value;
    const reaction = reactionElement.current.value;
    const tags = tagsElement.current.value.split(" ");

    userIdElement.current.value = "";
    posttitleElement.current.value = "";
    postbodyElement.current.value = "";
    reactionElement.current.value = "";
    tagsElement.current.value = "";

    addList(userId, posttitle, postbody, reaction, tags);
  };
  return (
    <>
      <form className="create-post" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            ref={posttitleElement}
            className="form-control"
            id="title"
            placeholder="enter the title"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="body" className="form-label">
            Content
          </label>
          <input
            type="text"
            ref={postbodyElement}
            className="form-control"
            id="body"
            placeholder="enter the content"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="userid" className="form-label">
            UserID
          </label>
          <input
            type="text"
            ref={userIdElement}
            className="form-control"
            id="userId"
            placeholder="enter the userId"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="reaction" className="form-label">
            Reaction
          </label>
          <input
            type="text"
            ref={reactionElement}
            className="form-control"
            id="reaction"
            placeholder="enter the content"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tags" className="form-label">
            Tag
          </label>
          <input
            type="text"
            ref={tagsElement}
            className="form-control"
            id="tags"
            placeholder="enter the userId"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Post
        </button>
      </form>
    </>
  );
};

export default CreatePost;
