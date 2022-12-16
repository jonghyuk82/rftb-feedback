import React from "react";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";
// type impt
// import PropTypes from "prop-types";

function FeedbackStats() {
  const { feedback } = useContext(FeedbackContext);
  // Calulate rating avg
  let average =
    feedback.reduce((acc, cur) => {
      return acc + cur.rating;
    }, 0) / feedback.length;

  // only one decimal point and remove if the decimal point is 0
  average = average.toFixed(1).replace(/[,.]0$/, "");

  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Raiting: {isNaN(average) ? 0 : average}</h4>
    </div>
  );
}

// FeedbackStats.propTypes = {
//   feedback: PropTypes.array.isRequired,
// };

export default FeedbackStats;
