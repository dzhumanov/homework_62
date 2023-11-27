import React from "react";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";

export default function App() {
  return (
    <MDBCarousel
      showControls
      interval={3000}
      style={{ width: "75%"}}
    >
      <MDBCarouselItem itemId={1} interval={1000}>
        <img
          src="https://media.formula1.com/image/upload/content/dam/fom-website/manual/Misc/2022manual/2022Races/EmiliaRomagnaGP/Saturday/imola-sprint-start.jpg.transform/9col/image.jpg"
          className="d-block w-100"
          alt="..."
        />
      </MDBCarouselItem>
      <MDBCarouselItem itemId={2}>
        <img
          src="https://media.formula1.com/image/upload/f_auto/q_auto/v1681807881/baku-start-2022.png"
          className="d-block w-100"
          alt="..."
        />
      </MDBCarouselItem>
      <MDBCarouselItem itemId={3}>
        <img
          src="https://images.ps-aws.com/c?url=https%3A%2F%2Fd3cm515ijfiu6w.cloudfront.net%2Fwp-content%2Fuploads%2F2023%2F10%2F30144608%2Fferrari-carlos-sainz-mexican-grand-prix.jpg"
          className="d-block w-100"
          alt="..."
        />
      </MDBCarouselItem>
    </MDBCarousel>
  );
}
