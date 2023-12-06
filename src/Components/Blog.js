const Blog = (props) => {
  const blog = prop.blog;
  return (
    <div className="blog">
      <h2>{blog.title}</h2>
      <p>{blog.text}</p>
    </div>
    );
}
 
export default Blog;