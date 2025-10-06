import { useState } from "react";
import EpisodeList from "../episodes/EpisodeList";
import EpisodeDetails from "../episodes/EpisodeDetails"
import "./shows.css";

/** Allows users to browse through the episodes of the given show */
export default function ShowDetails({ show }) {
  const [selectedEpisode, setSelectedEpisode] = useState(null);

  if (!show) {
    return <p>Select an show to learn more.</p>;
  }

  return ( 
  <div className="show-details">
    <h2>{show.name}</h2>
    <div></div>
    <EpisodeList
      episodes={show.episodes}
      selectedEpisode={selectedEpisode}
      setSelectedEpisode={setSelectedEpisode}
    />

    <EpisodeDetails episode={selectedEpisode} />  
  </div>
  );
}
