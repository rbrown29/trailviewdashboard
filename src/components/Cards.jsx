import "react";
import trailNames from "../data/trails";
import links from "../data/cardLinks";


const Card = () => {
  return (
    <div className="card">
      <div className="card-list">
        <h2>{trailNames[15].name}</h2>
        <p>
          {trailNames[15].description}
        </p>
        <li>Length: {trailNames[15].length} miles</li>
        <li>Elevation: {trailNames[15].elevation} feet</li>
        <li>Location: {trailNames[15].location}</li>
        <li>Difficulty: {trailNames[15].difficulty}</li>
        <li>Seasons: {trailNames[15].seasons}</li>
        <li>Hike Type: {trailNames[15].hiketype}</li>
        <div className="div">
          <button
            className="button"
            onClick={() => {
              window.open(
                links[30].url,
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
                links[31].url,
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
