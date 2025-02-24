import "react";
import trailNames from "../data/trails";
import links from "../data/cardLinks";


const Card = () => {
  return (
    <div className="card">
      <div className="card-list">
        <h2>{trailNames[16].name}</h2>
        <p>
          {trailNames[16].description}
        </p>
        <li>Length: {trailNames[16].length} miles</li>
        <li>Elevation: {trailNames[16].elevation} feet</li>
        <li>Location: {trailNames[16].location}</li>
        <li>Difficulty: {trailNames[16].difficulty}</li>
        <li>Seasons: {trailNames[16].seasons}</li>
        <li>Hike Type: {trailNames[16].hiketype}</li>
        <div className="div">
          <button
            className="button"
            onClick={() => {
              window.open(
                links[32].url,
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
                links[33].url,
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
