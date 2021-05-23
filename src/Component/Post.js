import React, { useState } from "react";

import data from "../MockData/post.json";
import Comment from "./Comment";

import { dateFormatter } from "../utils";

import "./Post.css";

const Post = () => {
  const [postData, setPostData] = useState(data);
  const [showTextArea, setShowTextArea] = useState(false);
  const [selectedPostId, setSelectedPostId] = useState(null);
  const [selectedCommentId, setSelectedCommentId] = useState(null);
  const [comment, setComment] = useState("");
  const loggedInUser = localStorage.getItem("name");

  const addReply = () => {
    if (comment) {
      let data = { ...postData };
      let post = data.post.filter((post) => post.id === selectedPostId);
      let index = post[0].comments.findIndex(
        (comment) => comment.id === selectedCommentId
      );
      let id = post[0].comments.length + 1;
      let commentData = {
        id: "comment" + id,
        content: comment,
        author_name: loggedInUser,
        autnour_image: "/logo192.png",
        time: "2021-03-24T05:15:26.661+00:00",
        liked: false,
        isReply: true,
      };

      post[0].comments.splice(index + 1, 0, commentData);
      setPostData(data);
      setShowTextArea(false);
    }
  };

  return (
    <div className="post-container">
      {postData.post.map((post) => {
        return (
          <div key={post.id}>
            <div className="post-conatiner">
              <div className="post-header"> Post </div>
              <div className="content-container">
                <div className="content-name"> {post.author} </div>
                <div className="content-time"> {dateFormatter(post.date)} </div>
              </div>
              <div className="post-content"> {post.content} </div>
            </div>
            <div className="comment-header"> Comments </div>
            <div className="comment-content">
              {post.comments.map((comment) => {
                return (
                  <Comment
                    key={comment.id}
                    postId={post.id}
                    commentId={comment.id}
                    content={comment.content}
                    authorName={comment.author_name}
                    autnourImage={comment.autnour_image}
                    time={comment.time}
                    liked={comment.liked}
                    isReply={comment.isReply}
                    postData={postData}
                    setPostData={setPostData}
                    setShowTextArea={setShowTextArea}
                    setSelectedPostId={setSelectedPostId}
                    setSelectedCommentId={setSelectedCommentId}
                  />
                );
              })}
            </div>
          </div>
        );
      })}
      {showTextArea && (
        <div className="add-comment">
          <textarea
            placeholder=""
            cols={100}
            rows={10}
            onChange={(e) => setComment(e.target.value)}
          />
          <div className="add-reply" onClick={addReply}>
            Add Reply
          </div>
        </div>
      )}
    </div>
  );
};

export default Post;
