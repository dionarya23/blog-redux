import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {createPost} from '../actions/postAction'

class PostsForm extends Component {

    constructor() {
        super()
        this.state = {
            title: '',
            body: ''
        }

        this.onSubmit = this.onSubmit.bind(this)
        this.onChange = this.onChange.bind(this)
    }

    onChange(e) {
        this.setState({
            [e.target.name] : [e.target.value]
        })
    }

    onSubmit (e) {
        e.preventDefault();

        this.props.createPost(this.state)
      
    }

    render(){
        return(
            <div>
        <h1>Add Post</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Title: </label>
            <br />
            <input
              type="text"
              name="title"
              onChange={this.onChange}
              value={this.state.title}
            />
          </div>
          <br />
          <div>
            <label>Body: </label>
            <br />
            <textarea
              name="body"
              onChange={this.onChange}
              value={this.state.body}
            />
          </div>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
        )
    }
}

PostsForm.propTypes = {
  createPost: PropTypes.func.isRequired
}


export default connect(null, {createPost})(PostsForm)