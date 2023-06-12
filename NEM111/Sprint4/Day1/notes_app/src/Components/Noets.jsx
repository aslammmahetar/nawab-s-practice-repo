import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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

  const handleDelete = async (id) => {
    try {
      let req = await axios.delete(
        `https://puce-zany-fox.cyclic.app/notes/delete/${id}`,
        {
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      console.log(req);
    } catch (error) {
      console.log(error);
    }
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
            <>
              <ol key={index}>
                <li>Title: {el.title}</li>
                <li>Body: {el.body}</li>
                <li>Category: {el.category}</li>
              </ol>
              <Link to={`/edit/${el._id}`}>
                <button>Edit</button>
              </Link>
              <button onClick={() => handleDelete(el._id)}>Delete</button>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Noets;
