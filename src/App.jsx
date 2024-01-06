import React from 'react';
import LikeImage from './components/LikeImage';
import LikePost from './components/LikePost';

function App() {
  return (
    <div className="container mx-auto p-4">
      <h3 className="text-2xl font-bold mb-4">Some Blog</h3>
      <div className="flex space-x-4">
        <LikePost />
        <LikeImage />
      </div>
    </div>
  );
}

export default App;
