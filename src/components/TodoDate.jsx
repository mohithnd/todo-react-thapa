import { useEffect, useState } from "react";

const TodoDate = () => {
  const [dateAndTime, setDateAndTime] = useState("");

  useEffect(() => {
    const updateDateAndTime = () => setDateAndTime(getFormattedDate());
    updateDateAndTime();
    const intervalId = setInterval(updateDateAndTime, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const getFormattedDate = () => {
    const date = new Date();
    return `${date.toLocaleDateString()} - ${date.toLocaleTimeString()}`;
  };

  return <div className="text-center text-gray-600 mb-4">{dateAndTime}</div>;
};

export default TodoDate;
