import "react";
import trailNames from "../data/trails";
import links from "../data/cardLinks";


const Card = () => {
  return (
    <div className="card">
      <div className="card-list">
        <h2>{trailNames[17].name}</h2>
        <p>
          {trailNames[17].description}
        </p>
        <li>Length: {trailNames[17].length} miles</li>
        <li>Elevation: {trailNames[17].elevation} feet</li>
        <li>Location: {trailNames[17].location}</li>
        <li>Difficulty: {trailNames[17].difficulty}</li>
        <li>Seasons: {trailNames[17].seasons}</li>
        <li>Hike Type: {trailNames[17].hiketype}</li>
        <div className="div">
          <button
            className="button"
            onClick={() => {
              window.open(
                links[34].url,
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
                links[35].url,
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
