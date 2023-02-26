import React, { useState } from "react";
import './App.css';
import { SlidersOutlined, SearchOutlined } from '@ant-design/icons';
import { Button, Collapse, Row, Col, Input, Checkbox } from 'antd';

function App() {

  const [hide, showHide] = useState(false);
  const { Panel } = Collapse;
  return (
    <div className="App">
      <div class="dropdown">
      <Button shape="default" onClick={() => showHide(!hide)} icon={<SlidersOutlined />}>Filter</Button>
      {hide && <div id="myDropdown" class="dropdown-content">
      <Row style={{height: "35px"}} justify="space-around">
        <Col style={{margin: "auto"}} span={8}>Filter</Col>
        <Col style={{margin: "auto"}} span={8} offset={8}>
          clear filter
        </Col>
      </Row>
        <Collapse >
        <Panel header="Competitor" key="1">
        <Input placeholder="search" prefix={<SearchOutlined />} />
        <Checkbox.Group style={{ width: '100%' }}>
          <Row class="checkboxDiv" >
            <Col span={24}>
              <Checkbox value="Competitor1">Competitor1</Checkbox>
            </Col>
            <Col span={24}>
              <Checkbox value="Competitor2">Competitor2</Checkbox>
            </Col>
            <Col span={24}>
              <Checkbox value="Competitor3">Competitor3</Checkbox>
            </Col>
            <Col span={24}>
              <Checkbox value="Competitor4">Competitor4</Checkbox>
            </Col>
            <Col span={24}>
              <Checkbox value="Competitor5">Competitor5</Checkbox>
            </Col>
          </Row>
        </Checkbox.Group>
        </Panel>
        <Panel header="Location" key="2">
        <p>Location</p>
        <p>Location</p>
        <p>Location</p>
        </Panel>
      </Collapse>
      </div>}
    </div>
    </div>
  );
}

export default App;
