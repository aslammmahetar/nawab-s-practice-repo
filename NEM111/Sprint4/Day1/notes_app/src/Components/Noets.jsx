import React, { useEffect, useState } from "react";

function Noets() {
  const [notes, setNotes] = useState([]);
  const getNotes = async () => {
    fetch("https://puce-zany-fox.cyclic.app/notes", {
      method: "Get",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((res) => setNotes(res))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getNotes();
  }, []);
  return (
    <div>
      <h2>All Notes</h2>
      <div>
        {notes.map((el, index) => {
          return (
            <ol key={index}>
              <li>Title: {el.title}</li>
              <li>Body: {el.body}</li>
              <li>Category: {el.category}</li>
            </ol>
          );
        })}
      </div>
    </div>
  );
}

export default Noets;
