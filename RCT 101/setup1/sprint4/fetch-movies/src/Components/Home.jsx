import { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  const [q, setQuary] = useState("");
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchaAndUpdateData(`http://localhost:8080/movies?q=${q}`);
  }, [q]);

  const handleChange = (e) => {
    setQuary(e.target.value);
  };

  const fetchaAndUpdateData = async (url) => {
    try {
      let req = await axios.get(url);
      setData(req.data);
      console.log(req);
    } catch (error) {}
  };

  return (
    <>
      <input type="text" value={q} onChange={handleChange} />
      <br />
      {data?.map((el) => {
        return (
          <div>
            <p>Title : {el.title}</p>
            <p>Year: {el.year}</p>
          </div>
        );
      })}
    </>
  );
}
export default Home;
