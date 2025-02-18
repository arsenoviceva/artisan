import { Row, Col, Container } from "react-bootstrap";
import { LogoBrending } from "./LogoBrending";
import { WebDesign } from "./WebDesign";
import { Archviz } from "./Archviz";
import { TopArrow } from "../../topArrow/TopArrow";

export const Work = () => {
  return (
    <Container className="py-5">
      <div className="navigation-bar my-5">
        <a
          href="#logo"
          className="a-tag border-end border-3 pe-2 d-md-flex d-none"
        >
          {" "}
          LOGO / BRANDING
        </a>
        <a
          href="#archwiz"
          className="a-tag border-end border-3 pe-2 d-xs-flex d-md-none"
        >
          {" "}
          LOGO
        </a>
        <a href="#webdesign" className="a-tag border-end border-3 ps-2 pe-2">
          {" "}
          WEB DESIGN
        </a>
        <a href="#archwiz" className="a-tag ps-2 d-md-flex d-none">
          {" "}
          ARCHITECTURAL VISUALIZATION
        </a>
        <a href="#archviz" className="a-tag ps-2 d-xs-flex d-md-none">
          {" "}
          ARCHVIZ
        </a>
      </div>

      <LogoBrending title={"LOGO / BRANDING //"} id={"logo"} />
      <WebDesign title={"WEB DESIGN"} id={"webdesign"} />
      <Archviz title={"ARCHITECTURAL VISUALIZATION"} id={"archviz"} />
      <TopArrow />
    </Container>
  );
};
