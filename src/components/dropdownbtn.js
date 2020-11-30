import React from "react";
import { Dropdown } from "react-bootstrap";

const DropDownBtn = (props) => {
  return (
    <Dropdown className="mt-3 text-center">
      <Dropdown.Toggle variant={props.variant} id="dropdown-basic">
        {props.btnName}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item
          href={props.url1}
          target="_blank"
          rel="noopener noreferrer"
        >
          {props.name1}
        </Dropdown.Item>
        <Dropdown.Item
          href={props.url2}
          target="_blank"
          rel="noopener noreferrer"
        >
          {props.name2}
        </Dropdown.Item>
        <Dropdown.Item
          href={props.url3}
          target="_blank"
          rel="noopener noreferrer"
        >
          {props.name3}
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};
export default DropDownBtn;
