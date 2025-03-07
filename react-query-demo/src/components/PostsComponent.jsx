// src/components/PostsComponent.jsx
import React from "react";
import { useQuery } from "@tanstack/react-query";

const fetchPosts = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!response.ok) {
        throw new Error("Network response was not ok");
    }
    return response.json();
};

const PostsComponent = () => {
    const {
        data: posts,
        isLoading,
        isError,
        error,
        refetch, // Function to manually refetch data
        isFetching, // Indicates if a refetch is in progress
    } = useQuery({
        queryKey: ["posts"], // Unique key for caching
        queryFn: fetchPosts, // Function to fetch data
        staleTime: 10000, // Data is fresh for 10 seconds
        cacheTime: 60000, // Cache data for 60 seconds
        refetchOnWindowFocus: true, // Refetch data when the window regains focus
        keepPreviousData: true, // Keep previous data while refetching
    });

    if (isLoading) {
        return <div style={{ padding: "20px", fontStyle: "italic" }}>Loading posts...</div>;
    }

    if (isError) {
        return <div style={{ padding: "20px", color: "red" }}>Error: {error.message}</div>;
    }

    return (
        <div style={{ padding: "20px" }}>
            <h1 style={{ borderBottom: "2px solid #333", paddingBottom: "10px" }}>Posts</h1>
            <button
                onClick={() => refetch()} // Trigger a refetch
                disabled={isFetching} // Disable button while refetching
                style={{
                    marginBottom: "20px",
                    padding: "10px 20px",
                    backgroundColor: isFetching ? "#ccc" : "#007bff",
                    color: "#fff",
                    border: "none",
                    borderRadius: "5px",
                    cursor: isFetching ? "not-allowed" : "pointer",
                }}
            >
                {isFetching ? "Refreshing..." : "Refresh Posts"}
            </button>
            <ul style={{ listStyle: "none", padding: "0" }}>
                {posts.map((post) => (
                    <li key={post.id} style={{ marginBottom: "20px", borderBottom: "1px solid #ddd", paddingBottom: "10px" }}>
                        <h2 style={{ margin: "0 0 10px 0", fontSize: "24px" }}>{post.title}</h2>
                        <p style={{ margin: "0", color: "#555" }}>{post.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PostsComponent;