"use client";

import React, { useState, useEffect } from "react";
import PromptCard from "./PromptCard";

const Feed = () => {
    const [allPosts, setAllPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch("/api/prompt");
            const data = await response.json();

            setAllPosts(data);
        };

        fetchPosts();
    }, []);

    const [searchText, setSearchText] = useState("");
    const [searchedResults, setSearchedResults] = useState([]);
    const [searchTimeout, setSearchTimeout] = useState(null);

    const handleSearchChange = (e) => {
        clearTimeout(searchTimeout);
        setSearchText(e.target.value);

        // debounce method
        setSearchTimeout(
            setTimeout(() => {
                const searchResult = filterPrompts(e.target.value);
                setSearchedResults(searchResult);
            }, 500)
        );
    };

    const filterPrompts = (searchText) => {
        const regex = new RegExp(searchText, "i"); // Case-insensitive search
        return allPosts.filter(
            (item) =>
                regex.test(item.creator.username) || // Checks username
                regex.test(item.prompt) || // Checks prompt
                regex.test(item.tag) // Checks tag
        );
    };

    const handleTagClick = (tagName) => {
        setSearchText(tagName);

        const searchResult = filterPrompts(tagName);
        setSearchedResults(searchResult);
    };

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

    return (
        <section className="feed">
            <form className="relative w-full flex-center">
                <input
                    type="text"
                    placeholder="Search for a tag or a username"
                    value={searchText}
                    onChange={handleSearchChange}
                    required
                    className="search_input peer"
                />
            </form>

            {searchText ? (
                <PromptCardList
                    data={searchedResults}
                    handleTagClick={handleTagClick}
                />
            ) : (
                <PromptCardList
                    data={allPosts}
                    handleTagClick={handleTagClick}
                />
            )}
        </section>
    );
};

export default Feed;
