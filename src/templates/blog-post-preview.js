import React from 'react';
import BlogPostTemplate from './blog-post';

const BlogPostPreview = ({entry, getAsset}) => {
  const data = entry.getIn(['data']).toJS();

  if (data) {
    return <BlogPostTemplate />;
  }
  return <div>Loading...</div>;
};

export default BlogPostPreview;
