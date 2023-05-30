import React from "react";
import PostCreate from "./PostCreate";
import PostList from "./PostList";

const App = () => {
  const currentHost = process.env.REACT_APP_HOSTNAME;
  const nodeEnv = process.env.NODE_ENV;
  console.log(process.env);
  return (
    <div className="container">
      <h1>Create Post</h1>
      <p>Running on host: <b>{currentHost}</b><br></br>
      Environment: {nodeEnv}</p>
      <PostCreate />
      <hr />
      <h1>Posts</h1>
      <PostList />
    </div>
  );
};
export default App;
