import React from "react";
import LikeCounter1 from "./HOC";

function LikePost({ likeCounter, handleLikeCount }) {
  return (
    <div className="p-4">
      <button
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleLikeCount}
      >
        Like Post {likeCounter}
      </button>
    </div>
  );
}

export default LikeCounter1(LikePost);
