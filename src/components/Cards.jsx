import "react";
import trailNames from "../data/trails";
import links from "../data/cardLinks";


const Card = () => {
  return (
    <div className="card">
      <div className="card-list">
        <h2>{trailNames[12].name}</h2>
        <p>
          {trailNames[12].description}
        </p>
        <li>Length: {trailNames[12].length} miles</li>
        <li>Elevation: {trailNames[12].elevation} feet</li>
        <li>Location: {trailNames[12].location}</li>
        <li>Difficulty: {trailNames[12].difficulty}</li>
        <li>Seasons: {trailNames[12].seasons}</li>
        <li>Hike Type: {trailNames[12].hiketype}</li>
        <div className="div">
          <button
            className="button"
            onClick={() => {
              window.open(
                links[24].url,
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
                links[25].url,
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
