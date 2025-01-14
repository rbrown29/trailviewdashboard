import "react";
import trailNames from "../data/trails";
import links from "../data/cardLinks";


const Card = () => {
  return (
    <div className="card">
      <div className="card-list">
        <h2>{trailNames[4].name}</h2>
        <p>
          {trailNames[4].description}
        </p>
        <li>Length: {trailNames[4].length} miles</li>
        <li>Elevation: {trailNames[4].elevation} feet</li>
        <li>Location: {trailNames[4].location}</li>
        <li>Difficulty: {trailNames[4].difficulty}</li>
        <li>Seasons: {trailNames[4].seasons}</li>
        <li>Hike Type: {trailNames[4].hiketype}</li>
        <div className="div">
          <button
            className="button"
            onClick={() => {
              window.open(
                links[8].url,
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
                links[9].url,
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
