import React from "react";
import "./StyleComponent.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV, faWheelchair } from "@fortawesome/free-solid-svg-icons";
import { Table, Nav } from "react-bootstrap";

const Bar = () => {
  return (
    <div className="bar-wrapper">
      <div className="data-wrapper">
        <Nav justify variant="tabs" defaultActiveKey="/home" className="title">
          <Nav.Item>
            <Nav.Link href="/home">
              <p id="title">
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
              <th>Website</th>
              <th>Disability Type</th>
              <th>Violations</th>
              <th>Criteria</th>
              <th>Short Explanation</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>&#9633; http://achitectsorange.com</td>
              <td>
                <FontAwesomeIcon icon={faWheelchair} /> Motor
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
                <span id="square-icon">&#9633;</span> http://achitectsorange.com
              </td>
              <td>
                <FontAwesomeIcon icon={faWheelchair} /> Motor
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
              <td>&#9633; http://achitectsorange.com</td>
              <td>
                <FontAwesomeIcon icon={faWheelchair} /> Motor
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
              <td>&#9633; http://achitectsorange.com</td>
              <td>
                <FontAwesomeIcon icon={faWheelchair} /> Motor
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
              <td>&#9633; http://achitectsorange.com</td>
              <td>
                <FontAwesomeIcon icon={faWheelchair} /> Motor
              </td>
              <td>
                &#128314;
                {"         "}
                High
              </td>
              <td>WCAG 1.2.1</td>
              <td>Elements must have sufficient color contrast</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};
//<i class="far fa-square"></i>
export default Bar;
