import "react";
import trailNames from "../data/trails";
import links from "../data/cardLinks";


const Card = () => {
  return (
    <div className="card">
      <div className="card-list">
        <h2>{trailNames[11].name}</h2>
        <p>
          {trailNames[11].description}
        </p>
        <li>Length: {trailNames[11].length} miles</li>
        <li>Elevation: {trailNames[11].elevation} feet</li>
        <li>Location: {trailNames[11].location}</li>
        <li>Difficulty: {trailNames[11].difficulty}</li>
        <li>Seasons: {trailNames[11].seasons}</li>
        <li>Hike Type: {trailNames[11].hiketype}</li>
        <div className="div">
          <button
            className="button"
            onClick={() => {
              window.open(
                links[22].url,
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
                links[23].url,
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
