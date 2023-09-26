import React from "react";
import { useQuery } from "react-query";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from './PostList.module.css'
import InfiniteScroll from 'react-infinite-scroll-component'

const fetchPosts = async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return response.data;
};

const PostList = () => {
  const { data: posts, isLoading } = useQuery("posts", fetchPosts);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.post_list}>
        {posts.map((post) => (
          <div className={styles.post} key={post.id}>
            <h2>{post.title}</h2>
            <p>
              {post.body.length > 100
                ? `${post.body.slice(0, 100)}...`
                : post.body}
            </p>
            <Link to={`/post/${post.id}`}>Просмотр</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostList;
