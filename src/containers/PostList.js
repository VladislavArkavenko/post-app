import React from 'react';
import { connect } from 'react-redux';
import Post from '../components/Post';
import { deletePost, starPost } from '../actions';

function PostList({ posts, onDelete , star }) {
  return (
    <div className ="allPosts">
      {posts.map(post => {
        return (
          <Post post={ post } onDelete={ onDelete } key={ post.id } star = { star } />
        );
      })}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onDelete: id => {
      dispatch(deletePost(id));
    },
    star: id => {
      dispatch(starPost(id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostList);