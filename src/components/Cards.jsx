import "react";
import trailNames from "../data/trails";
import links from "../data/cardLinks";


const Card = () => {
  return (
    <div className="card">
      <div className="card-list">
        <h2>{trailNames[7].name}</h2>
        <p>
          {trailNames[7].description}
        </p>
        <li>Length: {trailNames[7].length} miles</li>
        <li>Elevation: {trailNames[7].elevation} feet</li>
        <li>Location: {trailNames[7].location}</li>
        <li>Difficulty: {trailNames[7].difficulty}</li>
        <li>Seasons: {trailNames[7].seasons}</li>
        <li>Hike Type: {trailNames[7].hiketype}</li>
        <div className="div">
          <button
            className="button"
            onClick={() => {
              window.open(
                links[14].url,
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
                links[15].url,
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
