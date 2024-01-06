// LikePost.jsx
import React from 'react';
import LikeCounter2 from './RenderProps';

export default function LikePost() {
  return (
    <LikeCounter2>
      {(likeCounter, handleLikeCount) => (
        <div className="p-4">
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleLikeCount}
          >
            Like Post {likeCounter}
          </button>
        </div>
      )}
    </LikeCounter2>
  );
}
