import "react";
import trailNames from "../data/trails";
import links from "../data/cardLinks";


const Card = () => {
  return (
    <div className="card">
      <div className="card-list">
        <h2>{trailNames[8].name}</h2>
        <p>
          {trailNames[8].description}
        </p>
        <li>Length: {trailNames[8].length} miles</li>
        <li>Elevation: {trailNames[8].elevation} feet</li>
        <li>Location: {trailNames[8].location}</li>
        <li>Difficulty: {trailNames[8].difficulty}</li>
        <li>Seasons: {trailNames[8].seasons}</li>
        <li>Hike Type: {trailNames[8].hiketype}</li>
        <div className="div">
          <button
            className="button"
            onClick={() => {
              window.open(
                links[16].url,
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
                links[17].url,
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
