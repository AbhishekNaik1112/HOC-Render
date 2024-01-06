import React, { useState } from 'react';

const LikeImage = () => {
  const [likeImageCounter, setLikeImageCounter] = useState(0);

  const handleLikeImageCount = () => {
    setLikeImageCounter(likeImageCounter + 1);
  };

  return (
    <div className="p-4">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleLikeImageCount}
      >
        Like Image {likeImageCounter}
      </button>
    </div>
  );
};

export default LikeImage;
