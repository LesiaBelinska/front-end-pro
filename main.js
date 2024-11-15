"use strict";

import { fetchPosts, fetchPostComments, createPost } from "./api.js";
import {
    renderPosts,
    renderComments,
    addNewPostToDOM,
    showSuccessMessage,
} from "./dom.js";

const postsContainer = document.querySelector("#posts-container");
const newPostForm = document.querySelector("#new-post-form");

const fetchPostsData = async () => {
    try {
        const posts = await fetchPosts();
        renderPosts(posts, postsContainer, handleCommentsToggle);
    } catch (error) {
        console.error("Fetch error:", error);
    }
};

const handleCommentsToggle = async (button) => {
    const postId = button.getAttribute("data-post-id");
    const commentsWrapper = button.nextElementSibling;

    if (commentsWrapper.style.display === "none") {
        try {
            const comments = await fetchPostComments(postId);
            renderComments(comments, commentsWrapper);
            commentsWrapper.style.display = "block";
        } catch (error) {
            console.error("Fetch error:", error);
        }
    } else {
        commentsWrapper.style.display = "none";
    }
};

const handleFormSubmit = async (event) => {
    event.preventDefault();

    const title = document.querySelector("#title").value;
    const body = document.querySelector("#body").value;

    const newPostData = {
        title: title,
        body: body,
        userId: 1,
    };

    try {
        const newPost = await createPost(newPostData);
        newPostForm.reset();
        addNewPostToDOM(newPost, postsContainer);
        showSuccessMessage("success-message");
    } catch (error) {
        console.error("Fetch error:", error);
    }
};

newPostForm.addEventListener("submit", handleFormSubmit);
fetchPostsData();
