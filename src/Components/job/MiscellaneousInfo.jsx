import "./MiscellaneousInfo.css";

const MiscellaneousInfo = ({ data }) => {
  return (
    <ul className="M-info">
      <li>{data.postedAt}</li>
      <li>{data.contract}</li>
      <li>{data.location}</li>
    </ul>
  );
};

export default MiscellaneousInfo;
