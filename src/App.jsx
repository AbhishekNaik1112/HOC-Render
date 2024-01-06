import React from "react";
import LikeImage from "./components/Without/Image.jsx";
import LikePost from "./components/Without/Post.jsx";
import LikeImageWithHOC from "./components/HOC/HOCimage.jsx";
import LikePostWithHOC from "./components/HOC/HOCpost.jsx";
import LikeImageWithRenderProps from "./components/RenderProps/RenderPropsImage.jsx";
import LikePostWithRenderProps from "./components/RenderProps/RenderPropsPost.jsx";

function App() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">Some Blog</h1>
      <h1 className="text-2xl font-bold mb-4">Without Using Anything</h1>
      <div className="flex mb-8">
        <LikeImage />
        <LikePost />
      </div>
      <div>
        <h1 className="text-2xl font-bold mb-4">Using Higher Order Component (HOC)</h1>
        <div className="flex mb-8">
          <LikeImageWithHOC />
          <LikePostWithHOC />
        </div>
        <h1 className="text-2xl font-bold mb-4">Using Render Props</h1>
        <div className="flex">
          <LikeImageWithRenderProps />
          <LikePostWithRenderProps />
        </div>
      </div>
    </div>
  );
}

export default App;
