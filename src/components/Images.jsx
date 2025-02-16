import "react";
import PropTypes from "prop-types";
import trails from "../data/trails";

const Images = () => {
  return (
    <div className="images-container">
      {trails[9].images.map((image, index) => (
        <img
          key={index}
          src={image} 
          alt={image.alt || `Trail Image ${index + 1}`} 
          className="image"
        />
      ))}
    </div>
  );
};

Images.propTypes = {
  trails: PropTypes.arrayOf(
    PropTypes.shape({
      images: PropTypes.arrayOf(
        PropTypes.shape({
          src: PropTypes.string.isRequired,
          alt: PropTypes.string,
        })
      ),
    })
  ),
};

export default Images;
