import "./App.css";
import React, { useState, useEffect } from "react";
import FinalViewComponent from "./component/FinalViewComponent";
import InputComponent from "./component/InputComponent";
import ViewComponent from "./component/ViewComponent";
import Header from "./component/Header";

const App = () => {
  const [finalView, setFinalView] = useState([]);
  const [finalQueue, setFinalQueue] = useState([]);
  const [queue, setQueue] = useState([]);
  var value = [];
  // function to add text the queue
  const addToQueue = (text) => {
    const newQueue = [...queue];
    newQueue.unshift(text);
    localStorage.setItem("array", JSON.stringify(queue));
    setQueue(newQueue);
  };

  //function to remove from the queue
  const removeFromQueue = () => {
    if (queue.length > 0) {
    }
  };

  //function to handle the End button click
  const handleEndClick = () => {
    if (queue.length === 0) {
      alert("Success! Queue is empty. ");
    } else {
      //  queue is empty
      setTimeout(() => {
        setQueue([]);
        alert("Success! Queue is now empty.");
      }, queue.length * 10000);
    }
  };

  //function Reset button click
  const handleResetClick = () => {
    setQueue([]);
  };
  useEffect(() => {
    if (
      JSON.parse(localStorage.getItem("array")) !== null ||
      JSON.parse(localStorage.getItem("array")) !== undefined
    ) {
      if (queue.length > 0) {
        const pollLocalStorage = () => {
          const storedQueue = localStorage.getItem("array");
          if (storedQueue) {
            const parsedQueue = JSON.parse(storedQueue);
            const newFinalQueue = [...finalQueue];
            newFinalQueue.push(parsedQueue.pop());
            setFinalQueue(newFinalQueue);
            setQueue(parsedQueue);
            localStorage.setItem("array", JSON.stringify(parsedQueue));
          }

          // Call pollLocalStorage again after 1 second
          setTimeout(pollLocalStorage, 1000);
        };

        // Start polling when the component mounts
        pollLocalStorage();
      }
      // Cleanup function to clear the timeout when component unmounts
    }
  }, []);

  // Add finalView as a dependency
  console.log(JSON.parse(localStorage.getItem("array")));
  return (
    <div className="Container">
      <Header />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", width: "50%" }}>
          <InputComponent onAdd={addToQueue} />
          <div className="col-md-6">
            <ViewComponent queue={queue} />
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", width: "50%" }}>
          <div className="col-md-6">
            <FinalViewComponent
              finalQueue={finalQueue}
              onEnd={handleEndClick}
              onReset={handleResetClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
