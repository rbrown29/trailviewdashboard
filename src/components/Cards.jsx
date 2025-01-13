import "react";
import trailNames from "../data/trails";
import links from "../data/cardLinks";


const Card = () => {
  return (
    <div className="card">
      <div className="card-list">
        <h2>{trailNames[0].name}</h2>
        <p>
          {trailNames[0].description}
        </p>
        <li>Length: {trailNames[0].length} miles</li>
        <li>Elevation: {trailNames[0].elevation} feet</li>
        <li>Location: {trailNames[0].location}</li>
        <li>Difficulty: {trailNames[0].difficulty}</li>
        <li>Seasons: {trailNames[0].seasons}</li>
        <li>Hike Type: {trailNames[0].hiketype}</li>
        <div className="div">
          <button
            className="button"
            onClick={() => {
              window.open(
                links[0].url,
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
                links[1].url,
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
