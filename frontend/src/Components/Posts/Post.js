import React from "react";
import { Link } from "react-router-dom";
import { PostsStyle } from "../../Styles/Posts/PostsStyle";

const Post = ({ post }) => {
  return (
    <>
      <PostsStyle />
      <div className="post">
        <img className="postImg" src={post.photo.url} alt="" />
        <div className="postInfo">
          <div className="postCats">
            {post.categories.map((c) => (
              <span className="postCat">{c.name}</span>
            ))}
          </div>
          <span className="postTitle">
            <Link to={`/single/${post._id}`} className="link">
              {post.title}
            </Link>
          </span>
          <hr />
          <span className="postDate">
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>
        <p className="postDesc">{post.desc}</p>
      </div>
    </>
  );
};

export default Post;
