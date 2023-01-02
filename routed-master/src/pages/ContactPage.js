import React from "react";
import { useState } from "react";
import ContactBox from "../components/ContactBox";

function ContactPage() {
  //state
  const [contacts, SetContacts] = useState([]);
  let [userform, SetUserform] = useState("");
  let [phoneform, SetPhoneform] = useState("");
  let [emailform, SetEmailform] = useState("");
  //function handler

  function subm(e) {
    e.preventDefault();
    SetContacts([
      ...contacts,
      { username: userform, phone: phoneform, email: emailform },
    ]);
    console.log(contacts);
    SetUserform("");
    SetPhoneform("");
    SetEmailform("");
  }
  function userinput(e) {
    SetUserform(e.target.value);
  }
  function phoneinput(e) {
    SetPhoneform(e.target.value);
  }
  function emailinput(e) {
    SetEmailform(e.target.value);
  }

  return (
    <div>
      <center>
        <h2> this is contact page</h2>
        <br />
        <br />
        <h4>
          {" "}
          return to home page <a href="/">click here </a>
        </h4>
        <div className="form">
          <form onSubmit={subm}>
            <label htmlFor=""> name </label>
            <input type="text" required value={userform} onChange={userinput} />
            <label htmlFor=""> Phone </label>
            <input
              type="number"
              required
              value={phoneform}
              onChange={phoneinput}
            />
            <label htmlFor=""> email </label>
            <input
              type="email"
              required
              value={emailform}
              onChange={emailinput}
            />
            <button type="submit"> submit </button>
          </form>
        </div>
        <dir className="contacts-container">
          {contacts.map((contact) => (
            <div>
              <ContactBox
                name={contact.username}
                email={contact.email}
                phone={contact.phone}
              />
            </div>
          ))}
        </dir>
      </center>
    </div>
  );
}
export default ContactPage;
