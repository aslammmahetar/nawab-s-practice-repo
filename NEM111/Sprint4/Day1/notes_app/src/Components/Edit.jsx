import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Edit() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [category, setCategory] = useState("");

  const [data, setData] = useState({});

  const { id } = useParams();

  const getData = async () => {
    try {
      let req = await axios.get(`https://puce-zany-fox.cyclic.app/notes`, {
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const newdata = req.data.filter((el, ind) => {
        return el._id === id;
      });
      setData(newdata[0]);
      setTitle(newdata[0].title);
      setBody(newdata[0].body);
      setCategory(newdata[0].category);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      title,
      body,
      category,
    };
    try {
      let req = await axios.patch(
        `https://puce-zany-fox.cyclic.app/notes/update/${id}`,
        payload,
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

  return (
    <div>
      <h1>Edit page</h1>
      <form action="" method="" onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="body">Body</label>
        <input
          type="text"
          name="body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <label htmlFor="category">Category</label>
        <input
          type="text"
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Edit;
