import Track from "./Track";

interface TracklistProps {
  tracks: TrackType[];
  onAddTrack?: (track: TrackType) => void;
  onRemoveTrack?: (trackId: string) => void;
}

function Tracklist({
  tracks,
  onAddTrack = undefined,
  onRemoveTrack = undefined,
}: TracklistProps) {
  return (
    <>
      <ul className="space-y-2">
        {tracks.map((track) => (
          <li
            key={track.id}
            className="flex items-center gap-4 rounded-md bg-white px-4 py-2 shadow-sm"
          >
            <Track
              track={track}
              onAddTrack={onAddTrack ? onAddTrack : undefined}
              onRemoveTrack={onRemoveTrack ? onRemoveTrack : undefined}
            />
          </li>
        ))}
      </ul>
    </>
  );
}

export default Tracklist;
