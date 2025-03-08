// src/components/BlogPost.jsx
import React from "react";
import { useParams } from "react-router-dom";

// Mock data for blog posts
const blogPosts = [
    { id: 1, title: "Blog Post 1", content: "This is the content of Blog Post 1." },
    { id: 2, title: "Blog Post 2", content: "This is the content of Blog Post 2." },
    { id: 3, title: "Blog Post 3", content: "This is the content of Blog Post 3." },
];

const BlogPost = () => {
    const { id } = useParams(); // Get the dynamic `id` parameter from the URL
    const post = blogPosts.find((p) => p.id === parseInt(id));

    if (!post) {
        return <div>Blog post not found!</div>;
    }

    return (
        <div style={{ padding: "20px" }}>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
        </div>
    );
};

export default BlogPost;