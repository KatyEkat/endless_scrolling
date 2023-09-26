import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PostList from './components/PostList/PostList';
import PostDetail from './components/PostDetails/PostDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<PostList />} />
        <Route path="/post/:id" element={<PostDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
