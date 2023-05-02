import Tracklist from "./Tracklist";

interface IPlaylistProps {
  playlistTracks: TrackType[];
  onNameChange: (name: string) => void;
  onRemoveTrack: (trackId: string) => void;
  onSave: () => void;
}

function Playlist({
  playlistTracks,
  onNameChange,
  onRemoveTrack,
  onSave,
}: IPlaylistProps) {
  function handleNameChange(event: React.ChangeEvent<HTMLInputElement>) {
    onNameChange(event.target.value);
  }

  return (
    <article>
      <input
        type="text"
        defaultValue={"New Playlist"}
        onChange={handleNameChange}
        className="mb-8 w-full rounded-md border border-transparent bg-transparent text-2xl font-black transition-colors focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
      />
      <Tracklist tracks={playlistTracks} onRemoveTrack={onRemoveTrack} />
      <button
        onClick={onSave}
        className="my-8 w-full rounded-md border-4 border-purple-500 bg-white px-4 py-2 text-lg font-bold uppercase text-purple-500 shadow transition-colors hover:border-transparent hover:bg-purple-500 hover:text-white"
      >
        save to spotify
      </button>
    </article>
  );
}

export default Playlist;
