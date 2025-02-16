import "react";
import trailNames from "../data/trails";
import links from "../data/cardLinks";


const Card = () => {
  return (
    <div className="card">
      <div className="card-list">
        <h2>{trailNames[9].name}</h2>
        <p>
          {trailNames[9].description}
        </p>
        <li>Length: {trailNames[9].length} miles</li>
        <li>Elevation: {trailNames[9].elevation} feet</li>
        <li>Location: {trailNames[9].location}</li>
        <li>Difficulty: {trailNames[9].difficulty}</li>
        <li>Seasons: {trailNames[9].seasons}</li>
        <li>Hike Type: {trailNames[9].hiketype}</li>
        <div className="div">
          <button
            className="button"
            onClick={() => {
              window.open(
                links[18].url,
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
                links[19].url,
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
