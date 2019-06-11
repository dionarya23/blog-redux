import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postAction'

class Posts extends Component {

    componentWillMount() {
        this.props.fetchPosts();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.newPost) {
            this.props.posts.unshift(nextProps.newPost)
        } 
    }

    render() {
        const postsItem = this.props.posts.map(post => (
            <div key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </div>
          ));

        return (
            <div>
                <h1>Posts</h1>
                {postsItem}
            </div>
        )
    }
}

Posts.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
    newPost: PropTypes.object.isRequired
}

/**
 * 
 * arti kode dibawah ini adalah
 * kita mengambil state.posts
 * posts berasal dari index.js pada folder reducers
 * dimana kita mendeklarasi posts: PostReducers
 * otomatis jika kita inging menambil state tersebut kita harus 
 * menggunakan state.posts
 */
const mapStateToProps = state => ({
    posts: state.posts.items,
    newPost : state.posts.item
})

export default connect(mapStateToProps, { fetchPosts })(Posts);