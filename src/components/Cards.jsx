import "react";
import trailNames from "../data/trails";
import links from "../data/cardLinks";


const Card = () => {
  return (
    <div className="card">
      <div className="card-list">
        <h2>{trailNames[13].name}</h2>
        <p>
          {trailNames[13].description}
        </p>
        <li>Length: {trailNames[13].length} miles</li>
        <li>Elevation: {trailNames[13].elevation} feet</li>
        <li>Location: {trailNames[13].location}</li>
        <li>Difficulty: {trailNames[13].difficulty}</li>
        <li>Seasons: {trailNames[13].seasons}</li>
        <li>Hike Type: {trailNames[13].hiketype}</li>
        <div className="div">
          <button
            className="button"
            onClick={() => {
              window.open(
                links[26].url,
                "_blank"
              );
            }}
          >
            {links[0].text}
          </button>
          <button
            className="button"
            onClick={() =>
              window.open(
                links[27].url,
                "_blank"
              )
            }
          >
            {links[1].text}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
