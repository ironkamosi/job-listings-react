import JobDisplay from "./JobDisplay.jsx"
const JobListing = (props) => {
    return <div>
        {props.jobListingData.map((data, index) => {
            return (
                <div key={index}><JobDisplay jobInfo={data}/></div>
                
          )
      })}
  </div>;
};
export default JobListing;
