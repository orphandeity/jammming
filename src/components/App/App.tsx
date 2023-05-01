import { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";
import Spotify from "../../util/spotify";

function App() {
  const [searchResults, setSearchResults] = useState<TrackType[]>([]);
  const [playlistName, setPlaylistName] = useState<string>("New Playlist");
  const [playlistTracks, setPlaylistTracks] = useState<TrackType[]>([]);

  // search Spotify and update searchResults with response
  function search(term: string) {
    Spotify.search(term).then(setSearchResults);
  }

  // add track to playlist
  function addTrack(track: TrackType): void {
    if (playlistTracks.find((playlistTrack) => track.id == playlistTrack.id))
      return;
    setPlaylistTracks([...playlistTracks, track]);
  }

  // remove track from playlist
  function removeTrack(trackId: string): void {
    const newPlaylist = playlistTracks.filter(
      (playlistTrack) => playlistTrack.id != trackId
    );
    setPlaylistTracks(newPlaylist);
  }

  function updatePlaylistName(name: string) {
    setPlaylistName(name);
  }

  // save playlist to user's Spotify account
  function savePlaylist() {
    const trackUris = playlistTracks.map((track) => track.uri);
    Spotify.savePlaylist(playlistName, trackUris)?.then(() => {
      setPlaylistName("New Playlist");
      setPlaylistTracks([]);
    });
  }

  return (
    <>
      <h1>Jammming</h1>
      <SearchBar onSearch={search} />
      <SearchResults searchResults={searchResults} onAddTrack={addTrack} />
      <Playlist
        playlistTracks={playlistTracks}
        onNameChange={updatePlaylistName}
        onRemoveTrack={removeTrack}
        onSave={savePlaylist}
      />
    </>
  );
}

export default App;
