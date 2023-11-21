// LikeButton.js
import React, { useState } from "react";

const LikeButton = () => {
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  return (
    <div>
      <button onClick={handleLike} className="react-like">
        Like {likes}
      </button>
    </div>
  );
};

export default LikeButton;
