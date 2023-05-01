// Jammming app

interface TrackType {
  id: string;
  name: string;
  artist: string;
  album: string;
  uri: string;
}

// Spotify api

interface Image {
  url: string;
  height: number;
  weight: number;
}

interface TrackResponseObject {
  album: {
    album_type: string;
    total_tracks: number;
    available_markets: string[];
    external_urls: Record<string, string>;
    href: string;
    id: string;
    images: Image[];
    name: string;
    release_date: string;
    release_date_precision: string;
    restrictions: Record<string, string>;
    type: string;
    uri: string;
    copyrights: Record<string, string>[];
    external_ids: Record<string, string>;
    genres: string[];
    label: string;
    popularity: number;
    album_group: string;
    artists: [
      {
        external_urls: Record<string, string>;
        href: string;
        id: string;
        name: string;
        type: string;
        uri: string;
      }
    ];
  };
  artists: [
    {
      external_urls: Record<string, string>;
      followers: Record<string, string>;
      genres: string[];
      href: string;
      id: string;
      images: Image[];
      name: string;
      popularity: number;
      type: string;
      uri: string;
    }
  ];
  available_markets: string[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_ids: Record<string, string>;
  external_urls: Record<string, string>;
  href: string;
  id: string;
  is_playable: boolean;
  linked_from: Record<string, string>;
  restrictions: Record<string, string>;
  name: string;
  popularity: number;
  preview_url: string;
  track_number: number;
  type: string;
  uri: string;
  is_local: boolean;
}
