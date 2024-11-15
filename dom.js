"use strict";

export const renderPosts = (posts, container, handleCommentsToggle) => {
    container.innerHTML = "";
    
    posts.forEach((post) => {
        const postTemplate = `
            <div class="post-item">
                <h2>${post.title}</h2>
                <p>${post.body}</p>
                <button type="button" class="show-comments-button" data-post-id="${post.id}">View comments</button>
                <div class="comments-wrapper" style="display: none;"></div>
            </div>
        `;
        container.insertAdjacentHTML("beforeend", postTemplate);
    });

    container.addEventListener("click", (event) => {

        if (event.target.classList.contains("show-comments-button")) {
            handleCommentsToggle(event.target);
        }
    });
};

export const renderComments = (comments, container) => {
    container.innerHTML = comments.map((comment) => `
        <div class="comment-item">
            <p class="comment-author">${comment.name}</p>
            <p>${comment.body}</p>
        </div>`)
        .join("");
};

export const addNewPostToDOM = (post, container) => {
    const postTemplate = `
        <div class="post-item">
            <h2>${post.title}</h2>
            <p>${post.body}</p>
        </div>
        `;
    container.insertAdjacentHTML("afterbegin", postTemplate);
};

export const showSuccessMessage = (messageElementId) => {
    const messageElement = document.getElementById(messageElementId);
    messageElement.classList.add("visible");

    setTimeout(() => {
        messageElement.classList.remove("visible");
    }, 2000);
};
