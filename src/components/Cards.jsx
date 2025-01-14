import "react";
import trailNames from "../data/trails";
import links from "../data/cardLinks";


const Card = () => {
  return (
    <div className="card">
      <div className="card-list">
        <h2>{trailNames[1].name}</h2>
        <p>
          {trailNames[1].description}
        </p>
        <li>Length: {trailNames[1].length} miles</li>
        <li>Elevation: {trailNames[1].elevation} feet</li>
        <li>Location: {trailNames[1].location}</li>
        <li>Difficulty: {trailNames[1].difficulty}</li>
        <li>Seasons: {trailNames[1].seasons}</li>
        <li>Hike Type: {trailNames[1].hiketype}</li>
        <div className="div">
          <button
            className="button"
            onClick={() => {
              window.open(
                links[2].url,
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
                links[3].url,
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
