import React, { useState } from "react";

const AddNotes = () => {
  const [title, setTitle] = useState("");
  const [body, setbody] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const notesDetail = {
      title,
      body,
      category,
    };
    fetch("https://puce-zany-fox.cyclic.app/notes/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(notesDetail),
    })
      .then((res) => res.json())
      .then((res) => console.log(res));
    console.log(
      "I am notes form and i am working very fine, this is your data",
      notesDetail
    );
  };

  return (
    <div>
      <h2>Add New Notes</h2>
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Title : </label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <br />
          <br />
          <label htmlFor="body">Description : </label>
          <input
            type="text"
            name="body"
            value={body}
            onChange={(e) => setbody(e.target.value)}
          />
          <br />
          <br />
          <label htmlFor="category">Category : </label>
          <input
            type="text"
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          <br />
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default AddNotes;
