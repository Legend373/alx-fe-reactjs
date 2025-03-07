// src/components/Post.jsx
import React from "react";
import { useParams } from "react-router-dom";

const posts = [
    { id: 1, title: "Post 1", content: "This is the content of Post 1." },
    { id: 2, title: "Post 2", content: "This is the content of Post 2." },
    { id: 3, title: "Post 3", content: "This is the content of Post 3." },
];

const Post = () => {
    const { postId } = useParams(); // Get the dynamic parameter from the URL
    const post = posts.find((p) => p.id === parseInt(postId));

    if (!post) {
        return <div>Post not found!</div>;
    }

    return (
        <div style={{ padding: "20px" }}>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
        </div>
    );
};

export default Post;