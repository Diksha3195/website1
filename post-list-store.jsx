import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addList: () => {},
  deleteList: () => {},
});
const postListReducer = (currentList, action) => {
  let newpostlist = currentList;
  if (action.type === "DEL_POST") {
    newpostlist = currentList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_POST") {
    newpostlist = [action.payload, ...currentList];
  }
  return newpostlist;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchpostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );
  const addList = (userId, posttitle, postbody, reaction, tags) => {
    // console.log(`${userId},${title},${body},${reaction},${tags}`);
    dispatchpostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: posttitle,
        body: postbody,
        reaction: reaction,
        userId: userId,
        tags: tags,
      },
    });
  };
  const deleteList = (postId) => {
    dispatchpostList({
      type: "DEL_POST",
      payload: { postId },
    });
  };

  return (
    <PostList.Provider
      value={{
        postList,
        addList,
        deleteList,
      }}
    >
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "MOON",
    body: "i am moon ",
    reaction: 2,
    userId: "user-9",
    tags: ["vacation", "mumbai", "enjoy"],
  },
  {
    id: "2",
    title: "sun",
    body: "i am sun ",
    reaction: 12,
    userId: "user-19",
    tags: ["heater", "galaxy", "unbelieve"],
  },
];
export default PostListProvider;
