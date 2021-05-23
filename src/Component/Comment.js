import React from "react";
import "./Comment.css";

import { dateFormatter } from "../utils";

const Comment = (props) => {
  const {
    postId,
    commentId,
    content,
    authorName,
    autnourImage,
    time,
    liked,
    isReply,
    postData,
    setPostData,
    setShowTextArea,
    setSelectedPostId,
    setSelectedCommentId,
  } = props;

  const changeLikeStatus = (postId, commentId) => {
    let data = { ...postData };
    let post = data.post.filter((post) => post.id === postId);
    if (post.length) {
      let comment = post[0].comments.filter(
        (comment) => comment.id === commentId
      );
      if (comment.length) {
        comment[0].liked = !comment[0].liked;
        setPostData(data);
      }
    }
  };

  return (
    <div className={`comment-wrapper ${isReply ? "reply-container" : ""}`}>
      <div className="comment-container">
        <div className="image-container">
          <img className="authorImage" src={autnourImage} alt="" />
        </div>
        <div className="content-wrapper">
          <div className="content-container">
            <div className="content-name"> {authorName} </div>
            <div className="content-time"> {dateFormatter(time)} </div>
          </div>
          <div className="content-text"> {content} </div>
          {localStorage.getItem("name") &&
            <div className="comment-option">
              {!isReply && (
                <div
                  className="reply-button"
                  onClick={() => {
                    setShowTextArea(true);
                    setSelectedPostId(postId);
                    setSelectedCommentId(commentId);
                  }}
                >
                  Reply
                </div>
              )}
              <div
                className="like-button"
                onClick={() => changeLikeStatus(postId, commentId)}
              >
                {liked ? "Dislike" : "Like"}
              </div>
            </div>
          }
        </div>
      </div>
    </div>
  );
};

export default Comment;
