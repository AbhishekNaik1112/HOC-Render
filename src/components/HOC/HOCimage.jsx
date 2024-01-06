import React from "react";
import LikeCounter1 from "./HOC";

function LikeImage({ likeCounter, handleLikeCount }) {
  return (
    <div className="p-4">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleLikeCount}
      >
        Like Image {likeCounter}
      </button>
    </div>
  );
}

export default LikeCounter1(LikeImage);
