'use client'

import { useState, useEffect } from "react";
import PromptCard from "./PromptCard";

const PromptCardList = ({ data, handleTagClick }) => {
  return (
    <div className="mt-16 prompt_layout">
      {data.map((post) => (
        <PromptCard
          key={post._id}
          post={post}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  );
};

const Feed = () => {
  const [searchText, setSearchText] = useState('');
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('api/prompt');
      const data = await response.json();
      setPosts(data);
      setFilteredPosts(data); // Initialize filteredPosts with all posts
    };
    fetchPosts();
  }, []);

  useEffect(() => {
    if (searchText === '') {
      setFilteredPosts(posts);
    } else {
      const lowercasedFilter = searchText.toLowerCase();
      const filteredData = posts.filter((post) =>
        post.tag?.toLowerCase().includes(lowercasedFilter) ||
        post.creator.userName?.toLowerCase().includes(lowercasedFilter) ||
        post.prompt?.toLowerCase().includes(lowercasedFilter)
      );
      setFilteredPosts(filteredData);
    }
  }, [searchText, posts]);

  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          type="text"
          placeholder="Search for tag or a username"
          value={searchText}
          onChange={handleSearchChange}
          required
          id="searchInput"
          className="search_input peer"
        />
      </form>
      <PromptCardList
        data={filteredPosts}
        handleTagClick={() => {}}
      />
    </section>
  );
};

export default Feed;
