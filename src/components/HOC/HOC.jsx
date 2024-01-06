import React, { useState } from 'react';

const LikeCounter1 = (WrappedComponent) => {
  return function LikeCounter1(props) {
    const [likeCounter, setLikeCounter] = useState(0);

    const handleLikeCount = () => {
      setLikeCounter(likeCounter + 1);
    };

    return (
      <WrappedComponent
        {...props}
        likeCounter={likeCounter}
        handleLikeCount={handleLikeCount}
      />
    );
  };
};

export default LikeCounter1;