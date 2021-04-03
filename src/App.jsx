import React from "react"
import './App.css';
import data from "./data.json"
import JobListing from "./JobListing.jsx"
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
    return (
    <div>
      <JobListing jobListingData={data} />
    </div>
  );
}

export default App;
