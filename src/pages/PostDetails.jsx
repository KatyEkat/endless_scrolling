import React from "react";
import { useParams, Link } from "react-router-dom";
import { useQuery } from "react-query";
import styles from "./PostDetail.module.css";
import { fetchPostById } from "../shared/api/api";

const PostDetail = () => {
  const { id } = useParams();
  const { data: post, isLoading } = useQuery(["post", id], () =>
    fetchPostById(id)
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.post_detail}>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
        <Link className={styles.back_link} to="/">
          Назад
        </Link>
      </div>
    </div>
  );
};

export default PostDetail;
