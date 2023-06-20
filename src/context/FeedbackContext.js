import { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import FeedbackData from "../data/FeedbackData";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  // spinner
  const [isLoading, setIsLoading] = useState(true);
  // get local data
  const [feedback, setFeedback] = useState(FeedbackData);

  // get data from server
  // const [feedback, setFeedback] = useState([]);

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  // useEffect(() => {
  //   fetchFeedback();
  // }, []);

  useEffect(() => {
    setIsLoading(false);
    // return feedback;
  }, [feedback]);

  // Fetch feedback
  // const fetchFeedback = async () => {
  //   const response = await fetch("/feedback?_sort=id&_order=desc");
  //   const data = await response.json();
  //   setFeedback(data);
  //   setIsLoading(false);
  // };

  // Add feedback locally
  const addFeedback = (newFeedback) => {
    console.log(newFeedback);
    newFeedback.id = uuidv4(); // this return uuid as a string
    setFeedback([newFeedback, ...feedback]);
    setIsLoading(false);
  };

  // Add feedback server
  // const addFeedback = async (newFeedback) => {
  //   const response = await fetch("/feedback", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(newFeedback),
  //   });
  //   const data = await response.json();

  //   setFeedback([data, ...feedback]);
  // };

  // Delete feedback locally
  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      let data = feedback.filter((item) => item.id !== id);

      setFeedback(data);
      // setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  // Delete feedback server
  // const deleteFeedback = async (id) => {
  //   if (window.confirm("Are you sure you want to delete?")) {
  //     await fetch(`/feedback/${id}`, { method: "DELETE" });
  //     let data = feedback.filter((item) => item.id !== id);

  //     setFeedback(data);
  //     // setFeedback(feedback.filter((item) => item.id !== id));
  //   }
  // };

  // Update feedback item locally
  const updateFeedback = (id, updItem) => {
    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...updItem } : item))
    );
  };

  // Update feedback item server
  // const updateFeedback = async (id, updItem) => {
  //   const response = await fetch(`/feedback/${id}`, {
  //     method: "PUT",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(updItem),
  //   });
  //   const data = await response.json();

  //   setFeedback(
  //     feedback.map((item) => (item.id === id ? { ...item, ...data } : item))
  //   );
  // };

  // Set item to update
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        isLoading,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
