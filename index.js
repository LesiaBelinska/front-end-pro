"use strict";

const API_URL = "https://jsonplaceholder.typicode.com/";
const postsContainer = document.querySelector("#posts-container");
const newPostForm = document.querySelector("#new-post-form");

const fetchPostsData = () => {
  fetch(API_URL + "posts?_limit=10")
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("Network response was not ok.");
    })
    .then((data) => {
      postsContainer.innerHTML = "";

      data.forEach((post) => {
        const postTemplate = `
                  <div class="post-item">
                    <h2>${post.title}</h2>
                    <p>${post.body}</p>
                    <button type="button" class="show-comments-button" data-post-id="${post.id}">View comments</button>
                    <div class="comments-wrapper" style="display: none;"></div>
                  </div>
                `;
        postsContainer.insertAdjacentHTML("beforeend", postTemplate);
      });

      postsContainer.addEventListener("click", (event) => {
        if (event.target.classList.contains("show-comments-button")) {
          const postId = event.target.getAttribute("data-post-id");
          const commentsWrapper = event.target.nextElementSibling;

          if (commentsWrapper.style.display === "none") {
            fetchPostCommentsData(postId, commentsWrapper);
            commentsWrapper.style.display = "block";
          } else {
            commentsWrapper.style.display = "none";
          }
        }
      });
    })
    .catch((error) => {
      console.error("Fetch error:", error);
    });
};

fetchPostsData();

const fetchPostCommentsData = (postId, commentsWrapper) => {
  fetch(API_URL + `posts/${postId}/comments?_limit=2`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("Network response was not ok.");
    })
    .then((data) => {
      commentsWrapper.innerHTML = "";

      data.forEach((comment) => {
        commentsWrapper.innerHTML += `
                  <div class="comment-item">
                    <p class="comment-author">${comment.name}</p>
                    <p>${comment.body}</p>
                  </div>
                `;
      });
    })
    .catch((error) => {
      console.error("Fetch error:", error);
    });
};

const handleFormSubmit = (event) => {
  event.preventDefault();

  const title = document.querySelector("#title").value;
  const body = document.querySelector("#body").value;

  const newPostData = {
    title: title,
    body: body,
    userId: 1,
  };

  fetch(API_URL + "posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newPostData),
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("Network response was not ok.");
    })
    .then((data) => {
      document.querySelector("#new-post-form").reset();
      addNewPostToDOM(data);
      showSuccessMessage();
    })
    .catch((error) => {
      console.error("Fetch error:", error);
    });
};

const addNewPostToDOM = (post) => {
    const postTemplate = `
    <div class="post-item">
      <h2>${post.title}</h2>
      <p>${post.body}</p>
    </div>
  `;
    postsContainer.insertAdjacentHTML("afterbegin", postTemplate);
};

newPostForm.addEventListener("submit", handleFormSubmit);

const showSuccessMessage = () => {
  const messageElement = document.getElementById("success-message");
  messageElement.classList.add("visible");

  setTimeout(() => {
    messageElement.classList.remove("visible");
  }, 2000);
};
