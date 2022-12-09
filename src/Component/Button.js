import React from "react";
import Data from "../Data/Data";

import Dropdown from "react-bootstrap/Dropdown";



const Buttons = ({ filterItem, setItem, menuItems }) => {
 

  return (
   
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
      <i className="fa-light fa-filter-list">Filter</i>
      </Dropdown.Toggle>

      <Dropdown.Menu >
        {menuItems.map((val, id) => {
          return (
            <>
              <Dropdown.Item key={id} onClick={() => filterItem(val)} >
                {val}
              </Dropdown.Item>

            </>
          );
        })}
                      <Dropdown.Item onClick={() => setItem(Data)}>All</Dropdown.Item>

      </Dropdown.Menu>
    </Dropdown>

    
  );
};

export default Buttons;
