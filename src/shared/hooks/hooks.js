// import React, { useEffect, useState } from "react";
// import { useQuery } from "react-query";
// import { fetchPosts } from "../api/api";

// export const HandleScrollEffect = () => {
//   const [page, setPage] = useState(1);

//   const {
//     data: posts,
//     isLoading,
//     fetchMore,
//   } = useQuery(["posts", page], () => fetchPosts(page), {
//     keepPreviousData: true,
//     staleTime: 60000,
//   });

//   useEffect(() => {
//     const handleScroll = () => {
//       if (
//         window.innerHeight + document.documentElement.scrollTop ===
//           document.documentElement.offsetHeight &&
//         !isLoading
//       ) {
//         fetchMore();
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, [fetchMore, isLoading]);
// };
