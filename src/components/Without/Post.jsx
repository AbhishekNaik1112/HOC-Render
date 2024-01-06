import React, { useState } from 'react';

export default function LikePost() {
  const [likePostCounter, setPostCounter] = useState(0);

  const handlePostCount = () => {
    setPostCounter(likePostCounter + 1);
  };

  return (
    <div className="p-4">
      <button
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        onClick={handlePostCount}
      >
        Like Post {likePostCounter}
      </button>
    </div>
  );
}
