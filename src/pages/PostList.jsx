import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import styles from "./PostList.module.css";
import { fetchPosts } from "../shared/api/api";

// import { HandleScrollEffect } from "../../../shared/hooks/hooks";

const PostList = () => {
  const [page, setPage] = useState(1);

  const {
    data: posts,
    isLoading,
    fetchMore,
  } = useQuery(["posts", page], () => fetchPosts(page), {
    keepPreviousData: true,
    staleTime: 60000,
  });

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop ===
          document.documentElement.offsetHeight &&
        !isLoading
      ) {
        fetchMore();
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [fetchMore, isLoading]);

  return (
    <div className={styles.container}>
      <InfiniteScroll
        dataLength={posts ? posts.length : 0}
        next={() => setPage((prevPage) => prevPage + 1)}
        hasMore={Boolean(posts && posts.length > 0)}
        loader={<h4>Loading...</h4>}
      >
        <div className={styles.post_list}>
          {posts &&
            posts.map((post) => (
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
      </InfiniteScroll>
    </div>
  );
};

export default PostList;
