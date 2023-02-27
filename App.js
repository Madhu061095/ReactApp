import React, { useEffect, useState } from "react";
import "./App.css";
// import { SlidersOutlined, SearchOutlined } from '@ant-design/icons';
// import {  Collapse, Row, Col,Checkbox,ConfigProvider } from 'antd';
import { Button, Accordion, InputGroup, Form, Table } from "react-bootstrap";

function App() {
  const [hide, showHide] = useState(false);
  // const { Panel } = Collapse;
  const [searchInput, setSearchInput] = useState("");
  const [checkedArr, setCheckedArr] = useState({})
  let providerArr = require("./Formatted.json");
  providerArr.map((provider,index)=>{
    providerArr[index].id = index+1;
    providerArr[index].isChecked = false
  })
  console.log(providerArr)
  const [filterList, setFilterList] = useState(providerArr);
  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  const handleChecked = (e) =>{
    setCheckedArr({...checkedArr,[e.target.id]: e.target.checked})
  }

  useEffect(() => {
    if (searchInput.length > 0) {
      setFilterList(
        providerArr.filter((providerName) => {
          return providerName.providerName
            .toUpperCase()
            .match(searchInput.toUpperCase());
        })
      );
    }
    if (searchInput.length === 0) {
      setFilterList(providerArr);
    }
  }, [searchInput]);

  return (
    <div className="App">
      <div className="dropdown">
        <Button onClick={() => showHide(!hide)} variant="light">
        <i className="bi bi-sliders2"></i> Filter
        </Button>
        {hide && (
          <div id="myDropdown" className="dropdown-content">
            <Table style={{margin:"0px"}} size="sm">
              <thead>
                <tr>
                  <td>Filter</td>
                  <td>clear filter</td>
                </tr>
              </thead>
            </Table>
            <Accordion alwaysOpen>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Competitor</Accordion.Header>
                <Accordion.Body className="competitor">
                  <InputGroup className="mb-3">
                    <InputGroup.Text
                      style={{ backgroundColor: "none" }}
                      id="basic-addon1"
                    >
                      <i className="bi bi-search"></i>
                    </InputGroup.Text>
                    <Form.Control
                      placeholder="search"
                      aria-label="search"
                      aria-describedby="basic-addon1"
                      onChange={handleChange}
                      value={searchInput}
                    />
                  </InputGroup>
                  <Form>
                    {filterList.map((provider) => (
                      <Form.Check
                        label={provider.providerName}
                        id={provider.id}
                        type="checkbox"
                        name={provider.id}
                        checked={checkedArr[provider.id]}
                        onChange={handleChecked}
                        value={provider.isChecked}
                      />
                    ))}
                  </Form>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Location</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
