import React, { useEffect, useState } from "react";
import "./App.css";
// import { SlidersOutlined, SearchOutlined } from '@ant-design/icons';
// import {  Collapse, Row, Col,Checkbox,ConfigProvider } from 'antd';
import { Button, Accordion, InputGroup, Form, Table } from "react-bootstrap";

function App() {
  const [hide, showHide] = useState(false);
  // const { Panel } = Collapse;
  const [searchInput, setSearchInput] = useState("");
  const providerArr = require("./Formatted.json");
  // console.log(providerArr);
  // providerArr.map((provider,index)=>{
  //   providerArr[index].isChecked = false
  // })
  const [filterList, setFilterList] = useState(providerArr);
  const handleChange = (e) => {
    e.preventDefault();
    // console.log(e.target.value);
    setSearchInput(e.target.value);
  };

  // const handleChecked = (e) =>{
  //   console.log(e.target.checked);
  //   e.preventDefault();
  //   // console.log(e.target.value);
  //   providerArr.map((provider, index) =>{

  //     if(provider.id == e.target.id){
  //       console.log(index);
  //       providerArr[index].isChecked = e.target.checked;
  //     }
  //   })
  //   console.log(providerArr);
  // }

  useEffect(() => {
    if (searchInput.length > 0) {
      // console.log(searchInput);
      setFilterList(
        providerArr.filter((providerName) => {
          return providerName.providerName
            .toUpperCase()
            .match(searchInput.toUpperCase());
        })
      );
      // console.log(test);
    }
    if (searchInput.length == 0) {
      setFilterList(providerArr);
    }
  }, [searchInput]);

  return (
    <div className="App">
      <div className="dropdown">
        {/* <button class="btn btn-lg" style="background-color:transparent;">
        <i class="fa fa-pencil"></i> Edit
      </button> */}
        {/* <button type="button" class="btn btn-light">Light</button> */}
        <Button onClick={() => showHide(!hide)} variant="light">
        <i class="bi bi-sliders2"></i> Filter
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
                      <i class="bi bi-search"></i>
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
                        // checked={provider.isChecked}
                        // onChange={handleChecked}
                        // value={provider.providerName}
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
            {/* <Row style={{ height: "35px" }} justify="space-around">
            <Col style={{ margin: "auto" }} span={8}>Filter</Col>
            <Col style={{ margin: "auto" }} span={8} offset={8}>
              clear filter
            </Col>
          </Row> */}
            {/* <Collapse >
            <Panel header="Competitor" key="1">
              
              <div>

                <input type="text" placeholder="Search here" onChange={handleChange} value={searchInput} />

                <table>
                  <>
                   <Checkbox.Group style={{ width: '100%' }}>
                    <Row className="checkboxDiv" >
                      {filterList.map((provider) =>
                        //  <Col span={24}>
                                <Checkbox value={provider.providerName}>{provider.providerName}</Checkbox>
                              // </Col>
                      )}
                      </Row>
                      </Checkbox.Group>
                  </>
                </table>

              </div>
            </Panel>
            <Panel header="Location" key="2">
              <p>Location</p>
              <p>Location</p>
              <p>Location</p>
            </Panel>
          </Collapse> */}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
