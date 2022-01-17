import React from "react";
import { useSelector } from "react-redux";
import { Post, MetaData } from "../../Imports/Index";
import { PostStyle } from "../../Styles/Posts/PostStyle";
const AllPosts = () => {
  const { allPost } = useSelector((state) => state.post);
  return (
    <>
      <MetaData title="All-Blog-Dev" />
      <PostStyle />
      <div className="posts">
        {allPost.map((item) => {
          return <Post post={item} key={item._id} />;
        })}
      </div>
    </>
  );
};

export default AllPosts;
