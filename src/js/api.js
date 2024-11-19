"use strict";

const API_URL = "https://jsonplaceholder.typicode.com/";

export const fetchPosts = async () => {
  const response = await fetch(API_URL + "posts?_limit=10");

  if (!response.ok) {
    throw new Error("Network response was not ok.");
  }

  return await response.json();
};

export const fetchPostComments = async (postId) => {
  const response = await fetch(API_URL + `posts/${postId}/comments?_limit=2`);

  if (!response.ok) {
    throw new Error("Network response was not ok.");
  }

  return await response.json();
};

export const createPost = async (postData) => {
  const response = await fetch(API_URL + "posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(postData),
  });

  if (!response.ok) {
    throw new Error("Network response was not ok.");
  }

  return await response.json();
};
