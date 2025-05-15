import React, { useState } from "react";
import { motion } from "framer-motion";
import PostCard from "./components/PostCard";

const mockPosts = [
  {
    platform: "Twitter",
    content: "AI is transforming the world!",
    timestamp: "2025-05-15T12:30:00Z",
  },
  {
    platform: "Instagram",
    content: "Exploring UI animations with Framer Motion!",
    timestamp: "2025-05-15T14:00:00Z",
  },
  {
    platform: "LinkedIn",
    content: "Why clean design matters in B2B products.",
    timestamp: "2025-05-14T18:20:00Z",
  },
];

function App() {
  const [keyword, setKeyword] = useState("");
  const [sortBy, setSortBy] = useState("latest");

  const filteredPosts = mockPosts
    .filter((post) => post.content.toLowerCase().includes(keyword.toLowerCase()))
    .sort((a, b) => {
      if (sortBy === "latest") {
        return new Date(b.timestamp) - new Date(a.timestamp);
      } else {
        return (
          b.content.toLowerCase().includes(keyword.toLowerCase()) -
          a.content.toLowerCase().includes(keyword.toLowerCase())
        );
      }
    });

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-4">Social Media Aggregator</h1>
      <div className="flex justify-center gap-4 mb-6">
        <input
          type="text"
          className="p-2 border rounded w-1/2"
          placeholder="Search posts..."
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <select
          className="p-2 border rounded"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="latest">Latest</option>
          <option value="relevance">Relevance</option>
        </select>
      </div>

      <div className="grid gap-4 max-w-3xl mx-auto">
        {filteredPosts.map((post, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <PostCard post={post} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default App;
