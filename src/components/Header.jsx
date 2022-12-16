// import PropTypes from "prop-types";
import React from "react";

function Header({ text, bgColor, textColor }) {
  const headerStyles = {
    backgroundColor: bgColor,
    color: textColor,
  };
  return (
    <header style={headerStyles}>
      <div className="container">
        <h2>{text}</h2>
      </div>
    </header>
  );
}

// In case of Props is empty, you can use below code:
Header.defaultProps = {
  text: "Feedback UI",
  bgColor: "rgba(0,0,0, 0.4)",
  textColor: "#ff6a95",
};

// It is strongly typed concept like typescript
// Header.propTypes = {
//   text: PropTypes.string,
// };

export default Header;
