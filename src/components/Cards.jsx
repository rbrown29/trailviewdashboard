import "react";
import trailNames from "../data/trails";
import links from "../data/cardLinks";


const Card = () => {
  return (
    <div className="card">
      <div className="card-list">
        <h2>{trailNames[14].name}</h2>
        <p>
          {trailNames[14].description}
        </p>
        <li>Length: {trailNames[14].length} miles</li>
        <li>Elevation: {trailNames[14].elevation} feet</li>
        <li>Location: {trailNames[14].location}</li>
        <li>Difficulty: {trailNames[14].difficulty}</li>
        <li>Seasons: {trailNames[14].seasons}</li>
        <li>Hike Type: {trailNames[14].hiketype}</li>
        <div className="div">
          <button
            className="button"
            onClick={() => {
              window.open(
                links[28].url,
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
                links[29].url,
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
