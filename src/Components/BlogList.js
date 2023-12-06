import React from "react";
import axios from "axios";

export default class BlogList extends React.Component {
    state = { 
        blogs: [],
    }


    componentDidMount() {
      axios.get("http://127.0.0.1:3001/blog/")
        .then(res => {
          const blogs = res.data.blogs;
          this.setState({ blogs });
        })
        
    }

    render() {
      return (
        <div className="blog-list">
            {this.state.blogs.map((blog) => (
              <div className="blog-preview">
                <h2>{ blog.title }</h2>
                <p>Written by {blog.user.userName} </p>
              </div>
            ))}
        </div>
      )
    }
}