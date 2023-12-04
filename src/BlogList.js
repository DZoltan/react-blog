import React from "react";
import axios from "axios";

export default class BlogList extends React.Component {
    state = { 
        blogs: []
    }


    componentDidMount() {
      axios.get("http://127.0.0.1:3001/blog/")
        .then(res => {
          const blogs = res.data.blogs;
          this.setState({blogs});
        })
    }

    render() {
      return (
        <ul>
          {
            this.state.blogs.map(blog =>
              <li key={blog._id}>{blog.title}</li>)
          }
        </ul>
      )
    }
}