import React from "react";
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { useMutation } from "@apollo/client";
import { CREATE_COMMENT } from "../utils/mutations";
import { QUERY_SINGLE_POST } from "../utils/queries";
import CommentForm from "../components/CommentForm";
import CommentList from '../components/CommentList';


import Auth from "../utils/auth";

const SinglePost = () => {

  const { postId } = useParams();
  console.log(postId)

  const { loading, data } = useQuery(QUERY_SINGLE_POST, {
    // Pass the `thoughtId` URL parameter into query to retrieve this thought's data
    variables: { postId: postId },
  });

  const post = data?.post || {};

  // function hasComments() {
  //   if (post.comments?.length) {
  //     return (
  //       <div>
  //         {<CommentForm postId={post._id} />}
  //         {post.comments.map((comment) => (
  //           <div key={comment._id}>
  //             <p>{comment.commentText}</p>
  //             <p>{comment.commentAuthor}</p>
  //             <p>{comment.createdAt}</p>
  //           </div>
  //         ))}
  //       </div>
  //     );
  //   } else {
  //     return <div>No comments yet!</div>;
  //   }
  // }


  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="singlePostPageContainer">
      <div className="stockContainer">
        <div className="stockDetails">
          <h2>Stock Details TBD</h2>
        </div>
      </div>
      <div className="postContainer">
        <div className="postDetails" style={{width: "100%", gap: "10%"}}>
          <h2 style={{textAlign:"center"}}>{post.postTitle}</h2>
          <p style={{textAlign:"center"}}>{post.postText}</p>
          <p style={{textAlign:"right", fontSize:"15px"}}>{post.postAuthor}{post.createdAt}</p>
          {/* <p style={{textAlign:"right", fontSize:"15px"}}>{post.createdAt}</p> */}
        </div>
        <div className="commentDetails">
          <h2>Comments</h2>
            <div>
              <CommentForm postId={post._id} />
            </div>
            <div>
              <CommentList comments={post.comments} />
            </div>
        </div>
      </div>
    </div >)
}

export default SinglePost;






