import axios from "axios";

export const fetchPostById = async (postId) => {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );
  return response.data;
};

export const fetchPosts = async (page) => {
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
};
