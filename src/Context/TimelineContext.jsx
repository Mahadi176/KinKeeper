import { createContext, useState } from "react";

export const TimelineContext = createContext();

const TimelineProvider = ({ children }) => {
  const [timeline, setTimeline] = useState([]);

  const addAction = (type, friendId, name) => {
    const newEntry = {
      id: Date(),
      type,
      friendId,
      name
    };

    setTimeline(entry => [newEntry, ...entry]);
  };

  return (
    <TimelineContext.Provider value={{ timeline, addAction }}>
      {children}
    </TimelineContext.Provider>
  );
};

export default TimelineProvider;