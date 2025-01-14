import "react";
import trailNames from "../data/trails";
import links from "../data/cardLinks";


const Card = () => {
  return (
    <div className="card">
      <div className="card-list">
        <h2>{trailNames[3].name}</h2>
        <p>
          {trailNames[3].description}
        </p>
        <li>Length: {trailNames[3].length} miles</li>
        <li>Elevation: {trailNames[3].elevation} feet</li>
        <li>Location: {trailNames[3].location}</li>
        <li>Difficulty: {trailNames[3].difficulty}</li>
        <li>Seasons: {trailNames[3].seasons}</li>
        <li>Hike Type: {trailNames[3].hiketype}</li>
        <div className="div">
          <button
            className="button"
            onClick={() => {
              window.open(
                links[6].url,
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
                links[7].url,
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
