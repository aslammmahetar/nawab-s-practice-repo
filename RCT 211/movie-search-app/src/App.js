import { useEffect, useState } from 'react';
import './App.css';
import useDebounce from './Hooks/useDebounce';
import useThrottle from './Hooks/useThrottle';

function App() {

  const [searchTerm, setSearchterm] = useState("")
  // console.log(searchTerm)
  const [result, setResult] = useState([])
  const [isSearching, setisSearching] = useState(false)

  const debouncedSearchTerm = useDebounce(searchTerm, 5000)
  const throttleSearchTerm = useThrottle(searchTerm, 2000)
  console.log(throttleSearchTerm)

  const searchMovie = (search) => {
    return fetch(`https://api.themoviedb.org/3/search/movie?api_key=b3d7513e669169551c86a221bb67c912&query=${search}`)
      .then((res) => res.json())
      .then((res) => res.results)
      .catch((err) => {
        console.log(err)
        return []
      })
  }
  // useEffect(() => {
  //   if (debouncedSearchTerm) {
  //     setisSearching(true)
  //     searchMovie(debouncedSearchTerm)
  //       .then((res) => {
  //         setisSearching(false)
  //         setResult(res)
  //         console.log(res)
  //       })
  //   } else {
  //     setResult([])
  //     setSearchterm(false)
  //   }
  //   console.log(result)
  // }, [debouncedSearchTerm])

  useEffect(() => {
    if (throttleSearchTerm) {
      setisSearching(true)
      searchMovie(throttleSearchTerm)
        .then((res) => console.log(res))
      setisSearching(false)
    }
  }, [throttleSearchTerm])

  if (isSearching) {
    return <h1>Loading...</h1>
  }

  return (
    <>
      <div className="App" style={{ marginTop: "25px" }}>
        <input
          type="text"
          style={{
            width: "75%",
            margin: "auto",
            padding: "8px",
          }}
          placeholder="Search Movie"
          onChange={(e) => setSearchterm(e.target.value)}
        ></input>
      </div>
    </>
  );
}

export default App;
