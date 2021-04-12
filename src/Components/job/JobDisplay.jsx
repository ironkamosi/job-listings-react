import { Container, Col, Row } from "react-bootstrap";
import BadgeContainer from "../Badge/BadgeContainer.jsx";
import Badge from "../Badge/Badge.jsx";
import PillBadge from "../Badge/PillBadge.jsx";
import MiscellaneousInfo from "./MiscellaneousInfo.jsx";
import "./JobDisplay.css";

const JobDisplay = ({ jobInfo }) => {
  let highlighted = "";
  if (jobInfo.featured) {

    highlighted= "highlighted"
    console.log(`highlighted`) 
  }
  return (
    <Container className={`jobDisplay-Row ${highlighted}`}>
      <Row>
        <Col xl={1.6} className="logo">
          <img
            width={88}
            height={88}
            className="mr-3"
            src={jobInfo.logo}
            alt="Generic placeholder"
          />
        </Col>

        <Col xl={4} className="jobDisplay-col2">
          <Row>
            <h3 className="company-name">{jobInfo.company}</h3>{" "}
            {jobInfo.new && <PillBadge text="NEW!" />}
            {jobInfo.featured && <PillBadge text="FEATURED" dark />}
          </Row>

          <Row>
            <h2 className="job-position">{jobInfo.position}</h2>
          </Row>

          <Row>
            <MiscellaneousInfo data={jobInfo} className="m-info-component"/>
          </Row>
        </Col>
        
        <Col xl={6} className="jobDisplay-col3">
          <Row className="m-info">
            <Badge text={jobInfo.role} />
            <Badge text={jobInfo.level} />
            <BadgeContainer languages={jobInfo.languages} />
          </Row>
         
        </Col>
      </Row>
    </Container>
  );
};
export default JobDisplay;
