import React from "react";
import "./StyleComponent.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV, faWheelchair } from "@fortawesome/free-solid-svg-icons";
import { Table, Nav } from "react-bootstrap";
import CheckBoxOutlineBlankOutlinedIcon from "@material-ui/icons/CheckBoxOutlineBlankOutlined";
import AccessibleOutlinedIcon from "@material-ui/icons/AccessibleOutlined";
import img from "./23bff8b9-9a79-4669-9b03-1940423bd5ce.svg";
import orange_sqaure from "./square-16.ico";
import green_circle from "./circle-16.ico";
import yellow_down_arrow from "./yellowdownarrow.ico";
import red_up_arrow from "./reduparrow.ico";
const Bar = () => {
  return (
    <div className="bar-wrapper">
      <div className="data-wrapper">
        <Nav justify variant="tabs" defaultActiveKey="/home" className="title">
          <Nav.Item>
            <Nav.Link href="/home">
              <p id="title-01">
                <FontAwesomeIcon icon={faEllipsisV} />
                {"    "}
                Main Report
              </p>
            </Nav.Link>
          </Nav.Item>
        </Nav>

        <Table responsive>
          <thead>
            <tr>
              <p id="website">Website</p>
              <th>Disability Type</th>
              <th>Violations</th>
              <th>Criteria</th>
              <th>Short Explanation</th>
            </tr>
          </thead>
          <tbody>
            <tr className="row-01">
              <td>
                {" "}
                <CheckBoxOutlineBlankOutlinedIcon id="square-image" />
                http://achitectsorange.com
              </td>
              <td>
                <AccessibleOutlinedIcon id="wheelchair-icon" /> Motor
              </td>
              <td>
                &#128314;
                {"         "}
                High
              </td>
              <td>WCAG 1.2.1</td>
              <td>Elements must have sufficient color contrast</td>
            </tr>
            <tr>
              <td>
                {" "}
                <CheckBoxOutlineBlankOutlinedIcon id="square-image" />
                http://achitectsorange.com
              </td>
              <td id="td-text">
                <span
                  className="glyphicon glyphicon-volume-off"
                  id="mute-image"
                >
                  {" "}
                </span>
                {"  "}
                Hearing
              </td>
              <td>
                &#128314;
                {"         "}
                High
              </td>
              <td>WCAG 1.2.1</td>
              <td>Elements must have sufficient color contrast</td>
            </tr>
            <tr>
              <td>
                {" "}
                <CheckBoxOutlineBlankOutlinedIcon id="square-image" />
                http://achitectsorange.com
              </td>
              <td>
                <img src={img} width="22px" id="brain-image" /> Cognitive
              </td>
              <td>
                <img src={orange_sqaure} id="square-orange-image" />
                {"         "}
                High
              </td>
              <td>WCAG 1.2.1</td>
              <td>Elements must have sufficient color contrast</td>
            </tr>
            <tr>
              <td>
                {" "}
                <CheckBoxOutlineBlankOutlinedIcon id="square-image" />
                http://achitectsorange.com
              </td>
              <td>
                <span
                  className="glyphicon glyphicon-eye-close"
                  id="eye-image"
                ></span>{" "}
                Visual
              </td>
              <td>
                <img src={green_circle} id="circle-orange-image" />
                {"         "}
                High
              </td>
              <td>WCAG 1.2.1</td>
              <td>Elements must have sufficient color contrast</td>
            </tr>
          </tbody>
        </Table>
        <br />
        <br />
        <br />
        <Nav justify variant="tabs" defaultActiveKey="/home" className="title">
          <Nav.Item>
            <Nav.Link href="/home">
              <p id="title-02">
                <FontAwesomeIcon icon={faEllipsisV} />
                {"    "}
                Top 10 Criteria
              </p>
            </Nav.Link>
          </Nav.Item>
        </Nav>

        <Table responsive>
          <thead>
            <tr>
              <p id="instances">Instances</p>
              <th>Criteria</th>
              <th>Explanation</th>
              <th>Change</th>
              <th>Disability</th>
              <th>Average per page</th>
              <th>Priority</th>
            </tr>
          </thead>
          <tbody>
            <tr className="row-01">
              <td>
                {" "}
                <CheckBoxOutlineBlankOutlinedIcon id="square-image" />
                4500
              </td>
              <td>WCAG 1.2.1.</td>
              <td>Elements must have sufficient color contrast</td>
              <td>
                <img
                  src={yellow_down_arrow}
                  width="30px"
                  id="yellow-down-arrow"
                />
              </td>
              <td>Cognitive,hearing, Visual</td> <p id="text-01">40.9</p>{" "}
              <td>
                {" "}
                <p id="red-arrow">
                  <img src={orange_sqaure} />
                </p>{" "}
              </td>
            </tr>
            <tr className="row-01">
              <td>
                {" "}
                <CheckBoxOutlineBlankOutlinedIcon id="square-image" />
                4500
              </td>
              <td>WCAG 1.2.1.</td>
              <td>Elements must have sufficient color contrast</td>
              <td>
                <img src={red_up_arrow} width="28px" id="red-up-arrow" />
              </td>
              <td> Cognitive,hearing, Visual</td>
              <td>
                {" "}
                <p id="text-01">40.9</p>{" "}
              </td>
              <td>
                {" "}
                <p id="red-arrow">&#128314;</p>{" "}
              </td>
            </tr>
          </tbody>
        </Table>
        <br />
        <br />
        <br />
        <Nav justify variant="tabs" defaultActiveKey="/home" className="title">
          <Nav.Item>
            <Nav.Link href="/home">
              <p id="title">
                <FontAwesomeIcon icon={faEllipsisV} />
                {"    "}
                Pages with most violations
              </p>
            </Nav.Link>
          </Nav.Item>
        </Nav>

        <Table responsive>
          <thead>
            <tr>
              <p id="webpage">Webpage</p>
              <th>Change</th>
              <th>Instances</th>
              <th>Disability</th>
            </tr>
          </thead>
          <tbody>
            <tr className="row-01">
              <td>
                {" "}
                <CheckBoxOutlineBlankOutlinedIcon id="square-image" />
                www.example.com/loremipsumdolor/sitmet
              </td>
              <td>
                <img
                  src={yellow_down_arrow}
                  width="30px"
                  id="yellow-down-arrow"
                />
              </td>
              <td>4500</td>
              <td>Cognitve,hearing,visual,motor</td>
            </tr>
            <tr className="row-01">
              <td>
                {" "}
                <CheckBoxOutlineBlankOutlinedIcon id="square-image" />
                www.example.com/loremipsumdolor/sitmet
              </td>
              <td>
                <img src={red_up_arrow} width="30px" id="yellow-down-arrow" />
              </td>
              <td>4500</td>
              <td>Cognitve,hearing,visual,motor</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};
//<i class="far fa-square"></i>
export default Bar;
