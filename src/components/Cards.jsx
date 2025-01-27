import "react";
import trailNames from "../data/trails";
import links from "../data/cardLinks";


const Card = () => {
  return (
    <div className="card">
      <div className="card-list">
        <h2>{trailNames[6].name}</h2>
        <p>
          {trailNames[6].description}
        </p>
        <li>Length: {trailNames[6].length} miles</li>
        <li>Elevation: {trailNames[6].elevation} feet</li>
        <li>Location: {trailNames[6].location}</li>
        <li>Difficulty: {trailNames[6].difficulty}</li>
        <li>Seasons: {trailNames[6].seasons}</li>
        <li>Hike Type: {trailNames[6].hiketype}</li>
        <div className="div">
          <button
            className="button"
            onClick={() => {
              window.open(
                links[12].url,
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
                links[13].url,
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
