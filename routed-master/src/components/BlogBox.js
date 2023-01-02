import React from "react";

function BlogBox({ subject, description, date }) {
  return (
    <div>
      <center>
        <h4>{subject}</h4>
        <h4>{description}</h4>
        <h4>{date}</h4>
      </center>
    </div>
  );
}
export default BlogBox;