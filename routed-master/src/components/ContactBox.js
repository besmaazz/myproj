import React from "react";

function ContactBox({ name, email, phone }) {
  return (
    <div>
      <center>
        <h4>{name}</h4>
        <h4>{email}</h4>
        <h4>{phone}</h4>
      </center>
    </div>
  );
}
export default ContactBox;
