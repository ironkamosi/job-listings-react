import JobDisplay from "./JobDisplay.jsx";
import "./JobListing.css"

const JobListing = (props) => {
  return (
    <div className="jobListing-container" >
      {props.jobListingData.map((data, index) => {
        return (
          <div className="jobListing-main" key={index}>
            <JobDisplay jobInfo={data} />
          </div>
        );
      })}
    </div>
  );
};
export default JobListing;
