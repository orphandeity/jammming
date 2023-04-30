import styles from "./SearchResults.module.css";
import type { ITrack } from "../Track/Track";
import Track from "../Track/Track";

interface searchResultsProps {
  searchResults: ITrack[];
  handleAddTrack: (track: ITrack) => void;
}

function SearchResults({ searchResults, handleAddTrack }: searchResultsProps) {
  return (
    <>
      <h2>Search Results</h2>
      <ul className={styles.resultsList}>
        {searchResults.map((track) => (
          <li key={track.id} className={styles.item}>
            <button onClick={() => handleAddTrack(track)}>add</button>
            <Track track={track} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default SearchResults;
