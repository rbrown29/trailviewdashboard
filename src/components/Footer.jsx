const Footer = () => {
  return (
    <p className="footer-container">
      Created by: &nbsp;
      <a href="https://interactive-reality.netlify.app/" target="_blank">
        Richard Brown &nbsp;{new Date().getFullYear()}
      </a>
    </p>
  );
};

export default Footer;
