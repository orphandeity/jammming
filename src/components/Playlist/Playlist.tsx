import { ITrack } from "../Track/Track";
import Tracklist from "../Tracklist/Tracklist";

interface IPlaylistProps {
  playlistName: string;
  playlistTracks: ITrack[];
  handleRemoveTrack: (trackId: string) => void;
}

function Playlist({
  playlistName,
  playlistTracks,
  handleRemoveTrack,
}: IPlaylistProps) {
  return (
    <>
      <h2>{playlistName}</h2>
      <Tracklist
        tracks={playlistTracks}
        handleRemoveTrack={handleRemoveTrack}
      />
    </>
  );
}

export default Playlist;
