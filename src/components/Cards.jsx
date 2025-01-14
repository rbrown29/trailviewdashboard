import "react";
import trailNames from "../data/trails";
import links from "../data/cardLinks";


const Card = () => {
  return (
    <div className="card">
      <div className="card-list">
        <h2>{trailNames[2].name}</h2>
        <p>
          {trailNames[2].description}
        </p>
        <li>Length: {trailNames[2].length} miles</li>
        <li>Elevation: {trailNames[2].elevation} feet</li>
        <li>Location: {trailNames[2].location}</li>
        <li>Difficulty: {trailNames[2].difficulty}</li>
        <li>Seasons: {trailNames[2].seasons}</li>
        <li>Hike Type: {trailNames[2].hiketype}</li>
        <div className="div">
          <button
            className="button"
            onClick={() => {
              window.open(
                links[4].url,
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
                links[5].url,
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
