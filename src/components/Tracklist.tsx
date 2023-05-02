import Track from "./Track";
import { XCircle, PlusCircle } from "lucide-react";

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
            {onAddTrack ? (
              <button
                onClick={() => onAddTrack(track)}
                className="text-purple-500/75 transition-opacity hover:text-purple-500"
              >
                <PlusCircle />
              </button>
            ) : onRemoveTrack ? (
              <button
                onClick={() => onRemoveTrack(track.id)}
                className="text-red-500/75 transition-opacity hover:text-red-500"
              >
                <XCircle />
              </button>
            ) : null}
            <Track track={track} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default Tracklist;
