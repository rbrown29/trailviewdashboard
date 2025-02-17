import "react";
import trailNames from "../data/trails";
import links from "../data/cardLinks";


const Card = () => {
  return (
    <div className="card">
      <div className="card-list">
        <h2>{trailNames[10].name}</h2>
        <p>
          {trailNames[10].description}
        </p>
        <li>Length: {trailNames[10].length} miles</li>
        <li>Elevation: {trailNames[10].elevation} feet</li>
        <li>Location: {trailNames[10].location}</li>
        <li>Difficulty: {trailNames[10].difficulty}</li>
        <li>Seasons: {trailNames[10].seasons}</li>
        <li>Hike Type: {trailNames[10].hiketype}</li>
        <div className="div">
          <button
            className="button"
            onClick={() => {
              window.open(
                links[20].url,
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
                links[21].url,
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
