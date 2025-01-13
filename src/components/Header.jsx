import "react";
import links from "../data/links";

const Header = () => {
  return (
    <header className="header-container">
      <ul className="nav">
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.url} target="_blank">
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
