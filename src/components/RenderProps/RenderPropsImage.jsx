// LikeImage.jsx
import React from 'react';
import LikeCounter2 from './RenderProps';

export default function LikeImage() {
  return (
    <LikeCounter2>
      {(likeCounter, handleLikeCount) => (
        <div className="p-4">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleLikeCount}
          >
            Like Image {likeCounter}
          </button>
        </div>
      )}
    </LikeCounter2>
  );
}
