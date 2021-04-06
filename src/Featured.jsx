import { Badge } from "react-bootstrap";

const Featured = ({ featuredJob }) => {
//   return featuredJob ? (
//     <Badge pill variant="secondary">
//       {" "}
//       Secondary
//     </Badge>
//   ) : (
//     <></>
//   );
   if (featuredJob === true) {
      return (
        <Badge pill variant="secondary">
          FEATURED
        </Badge>
      )
   } else {
   return <></>;
}
 
};

export default Featured;
