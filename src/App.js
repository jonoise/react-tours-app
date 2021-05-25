import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tours-project";
function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const fetchTours = async () => {
    const res = await fetch(url);
    const data = await res.json();
    setTours(...tours, data);
  };

  const deleteTour = (id) => {
    setTours(() => {
      const currentTours = tours.filter((tour) => {
        if (tour.id !== id) {
          return tour;
        }
      });
      return currentTours;
    });
  };

  useEffect(() => {
    fetchTours();
    if (tours) {
      setLoading(false);
    }
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />;
      </main>
    );
  }

  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h1>No tours</h1>
          <button onClick={fetchTours} className="btn">
            More tours
          </button>
        </div>
      </main>
    );
  }

  return (
    <main>
      <Tours tours={tours} deleteTour={deleteTour} />
    </main>
  );
}

export default App;
