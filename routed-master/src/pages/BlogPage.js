import React from "react";
import { useState } from "react";
import BlogBox from "../components/BlogBox";
function BlogPage() {
  const [blog, Setblog] = useState([]);
  let [subjectform, Setsubjectform] = useState("");
  let [descriptionform, Setdescriptionform] = useState("");
  let [dateform, Setdateform] = useState("");
  function add(e) {
    e.preventDefault();
    Setblog([
      ...blog,
      { subject: subjectform, description: descriptionform, date: dateform },
    ]);
    console.log(blog);
    Setsubjectform("");
    Setdescriptionform("");
    Setdateform("");
  }
  function subjectinput(e) {
    Setsubjectform(e.target.value);
  }
  function descriptioninput(e) {
    Setdescriptionform(e.target.value);
  }
  function dateinput(e) {
    Setdateform(e.target.value);
  }

  return (
    <div>
      <center>
        <h2> this is Blog page</h2>
        <br />
        <br />
        <h4>
          {" "}
          return to home page <a href="/">click here </a>
        </h4>
        <div className="form">
          <form onSubmit={add}>
            <label htmlFor=""> subject </label>
            <input type="text" required value={subjectform} onChange={subjectinput} />
            <label htmlFor=""> description </label>
            <input
              type="text"
              required
              value={descriptionform}
              onChange={descriptioninput}
            />
            <label htmlFor=""> date </label>
            <input
              type="number"
              required
              value={dateform}
              onChange={dateinput}
            />
            <button type="submit"> submit </button>
          </form>
        </div>
        <dir className="blog-container">
          {blog.map((blog) => (
            <div>
              <BlogBox
                subject={blog.usersubject}
                description={blog.description}
                date={blog.date}
              />
            </div>
          ))}
        </dir>
      </center>
    </div>
  );
}

export default BlogPage;
