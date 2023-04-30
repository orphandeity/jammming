import { useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import SearchResults from "./components/SearchResults/SearchResults";
import Playlist from "./components/Playlist/Playlist";
import { ITrack } from "./components/Track/Track";

const initialResults: ITrack[] = [
  {
    id: crypto.randomUUID(),
    name: "Nightlights w/ 1Bjarke",
    artist: "Rune Bagge",
    album: "Grab a Star",
    uri: crypto.randomUUID(),
  },
  {
    id: crypto.randomUUID(),
    name: "Past, Six Of Swords, Upright",
    artist: "Internazionale",
    album: "Out Of The Blue, Into The Light",
    uri: crypto.randomUUID(),
  },
  {
    id: crypto.randomUUID(),
    name: "Do You Believe In Energy?",
    artist: "Anthony Linell",
    album: "Outlines (Repurposed) 2013-2019",
    uri: crypto.randomUUID(),
  },
];

const initialPlaylist: ITrack[] = [
  {
    id: crypto.randomUUID(),
    name: "Power Corrupts",
    artist: "Croatian Amor & Scandinavian Star",
    album: "Two Autumns",
    uri: crypto.randomUUID(),
  },
  {
    id: crypto.randomUUID(),
    name: "For The Butterfly",
    artist: "E-Saggila",
    album: "Corporate Cross",
    uri: crypto.randomUUID(),
  },
  {
    id: crypto.randomUUID(),
    name: "Machine Guns & Peacock Feathers",
    artist: "Ulver",
    album: "Flowers Of Evil",
    uri: crypto.randomUUID(),
  },
];

function App() {
  // user input
  const [searchQuery, setSearchQuery] = useState("");

  // spotify api response
  const [searchResults, setSearchResults] = useState(initialResults);

  // array of tracks user has added to custom playlist
  const [playlistTracks, setPlaylistTracks] = useState(initialPlaylist);

  // add track to custom playlist after first checking if it's already there
  function handleAddTrack(track: ITrack): void {
    const found = playlistTracks.find(
      (playlistTrack) => track.id == playlistTrack.id
    );
    if (!found) {
      setPlaylistTracks([...playlistTracks, track]);
    } else return;
  }

  // remove track from custom playlist
  function handleRemoveTrack(trackId: string): void {
    const newPlaylist = playlistTracks.filter(
      (playlistTrack) => playlistTrack.id != trackId
    );
    setPlaylistTracks(newPlaylist);
  }

  return (
    <>
      <h1>Jammming</h1>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <SearchResults
        searchResults={searchResults}
        handleAddTrack={handleAddTrack}
      />
      <Playlist
        playlistTracks={playlistTracks}
        handleRemoveTrack={handleRemoveTrack}
      />
    </>
  );
}

export default App;
