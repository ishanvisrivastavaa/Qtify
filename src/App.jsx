import "./App.css";
import axios from "axios";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import Section from "./Components/Section";
import FilterSection from "./Components/FilterSection";
import { useEffect, useState } from "react";

function App() {
  const ENDPOINT = "https://qtify-backend-labs.crio.do/";

  const [topAlbums, setTopAlbums] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);
  const [songs, setSongs] = useState([]);
  const [filterSongs, setFilterSongs] = useState([]);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    axios.get(`${ENDPOINT}albums/top`).then(({ data }) => {
      setTopAlbums(data);
    });
    axios.get(`${ENDPOINT}albums/new`).then(({ data }) => {
      setNewAlbums(data);
    });
    axios.get(`${ENDPOINT}songs`).then(({ data }) => {
      setSongs(data);
      setFilterSongs(data);
    });
    axios.get(`${ENDPOINT}genres`).then(({ data }) => {
      setGenres([{ key: "All", label: "All" }, ...data.data]);
    });
  }, []);

  return (
    <>
      <Navbar />
      <HeroSection />
      <Section navId='ta' title="Top Albums" data={topAlbums} />
      <Section navId='na' title="New Albums" data={newAlbums} />
      <FilterSection
        title="Songs"
        data={filterSongs}
        filter={genres}
        executeFilter={(genre) => {
          if (genre === "All") {
            setFilterSongs(songs);
          } else {
            setFilterSongs(songs.filter((song) => song.genre.key === genre));
          }
        }}
      />
    </>
  );
}

export default App;
