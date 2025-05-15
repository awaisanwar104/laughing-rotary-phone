import React from "react";

function PostCard({ post }) {
  const date = new Date(post.timestamp);
  return (
    <div className="bg-white p-4 rounded-2xl shadow">
      <div className="text-sm text-gray-500">{post.platform}</div>
      <div className="text-lg font-medium mt-2">{post.content}</div>
      <div className="text-xs text-gray-400 mt-1">
        {date.toLocaleString()}
      </div>
    </div>
  );
}

export default PostCard;
