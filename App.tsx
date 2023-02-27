import React, { useEffect, useState } from "react";
import './App.css';
import { SlidersOutlined, SearchOutlined } from '@ant-design/icons';
import { Button, Collapse, Row, Col,Checkbox,ConfigProvider } from 'antd';

function App() {

  const [hide, showHide] = useState(false);
  const { Panel } = Collapse;
  const [searchInput, setSearchInput] = useState("");
  const providerArr = require('./Formatted.json');
  console.log(providerArr);
  

  // let providerArr = [
  //   {
  //     "providerName": "Sun Life Dental Network",
  //     "nationwideDentistCount": 0,
  //     "states": {
  //       "PR": {
  //         "stateID": "PR",
  //         "stateDentistCount": 0,
  //         "counties": {
  //           "Aguada": 0,
  //           "Arroyo": 0,
  //           "Gurabo": 0,
  //           "Moca": 0,
  //           "Canovanas": 0,
  //           "Guaynabo": 0,
  //           "Catano": 0,
  //           "Vieques": 0,
  //           "Toa Baja": 0,
  //           "Quebradillas": 0,
  //           "Vega Alta": 0,
  //           "Fajardo": 0,
  //           "Corozal": 0,
  //           "Salinas": 0,
  //           "San Sebastian": 0,
  //           "Naranjito": 0,
  //           "Las Marias": 0,
  //           "Humacao": 0,
  //           "Cabo Rojo": 0,
  //           "Isabela": 0,
  //           "Mayaguez": 0,
  //           "Trujillo Alto": 0,
  //           "Carolina": 0,
  //           "Cidra": 0,
  //           "Florida": 0,
  //           "Toa Alta": 0,
  //           "Jayuya": 0,
  //           "San Lorenzo": 0,
  //           "Aibonito": 0,
  //           "Juncos": 0,
  //           "Loiza": 0,
  //           "Comerio": 0,
  //           "Culebra": 0,
  //           "Sabana Grande": 0,
  //           "San German": 0,
  //           "Yabucoa": 0,
  //           "Lares": 0,
  //           "Hatillo": 0,
  //           "Lajas": 0,
  //           "Maricao": 0,
  //           "Bayamon": 0,
  //           "Penuelas": 0,
  //           "Guayama": 0,
  //           "Aguadilla": 0,
  //           "Caguas": 0,
  //           "Naguabo": 0,
  //           "Rincon": 0,
  //           "Villalba": 0,
  //           "Guayanilla": 0,
  //           "Ponce": 0,
  //           "Anasco": 0,
  //           "Camuy": 0,
  //           "Coamo": 0,
  //           "Hormigueros": 0,
  //           "Ciales": 0,
  //           "Barranquitas": 0,
  //           "Santa Isabel": 0,
  //           "Arecibo": 0,
  //           "Aguas Buenas": 0,
  //           "San Juan": 0,
  //           "Morovis": 0,
  //           "Adjuntas": 0,
  //           "Guanica": 0,
  //           "Maunabo": 0,
  //           "Yauco": 0,
  //           "Las Piedras": 0,
  //           "Cayey": 0,
  //           "Manati": 0,
  //           "Utuado": 0,
  //           "Vega Baja": 0,
  //           "Barceloneta": 0,
  //           "Ceiba": 0,
  //           "Luquillo": 0,
  //           "Orocovis": 0,
  //           "Dorado": 0,
  //           "Patillas": 0,
  //           "Juana Diaz": 0
  //         },
  //         "cities": {
  //           "Coamo": 0,
  //           "San Juan-Bayamn-Caguas": 0,
  //           "San Germn": 0,
  //           "Coco": 0,
  //           "Ponce": 0,
  //           "Santa Isabel": 0,
  //           "Arecibo": 0,
  //           "Mayagez": 0,
  //           "Aguadilla-Isabela": 0,
  //           "Jayuya": 0,
  //           "Yauco": 0,
  //           "Guayama": 0
  //         }
  //       },
  //       "VI": {
  //         "stateID": "VI",
  //         "stateDentistCount": 0,
  //         "counties": {
  //           "Saint Croix": 0,
  //           "Saint John": 0,
  //           "Saint Thomas": 0
  //         },
  //         "cities": {

  //         }
  //       },
  //       "GU": {
  //         "stateID": "GU",
  //         "stateDentistCount": 0,
  //         "counties": {
  //           "Guam": 0
  //         },
  //         "cities": {

  //         }
  //       }
  //     }
  //   },
  //   {
  //     "providerName": "Sun Life Focus (P)",
  //     "nationwideDentistCount": 0,
  //     "states": {
  //       "PR": {
  //         "stateID": "PR",
  //         "stateDentistCount": 0,
  //         "counties": {
  //           "Aguada": 0,
  //           "Arroyo": 0,
  //           "Gurabo": 0,
  //           "Moca": 0,
  //           "Canovanas": 0,
  //           "Guaynabo": 0,
  //           "Catano": 0,
  //           "Vieques": 0,
  //           "Toa Baja": 0,
  //           "Quebradillas": 0,
  //           "Vega Alta": 0,
  //           "Fajardo": 0,
  //           "Corozal": 0,
  //           "Salinas": 0,
  //           "San Sebastian": 0,
  //           "Naranjito": 0,
  //           "Las Marias": 0,
  //           "Humacao": 0,
  //           "Cabo Rojo": 0,
  //           "Isabela": 0,
  //           "Mayaguez": 0,
  //           "Trujillo Alto": 0,
  //           "Carolina": 0,
  //           "Cidra": 0,
  //           "Florida": 0,
  //           "Toa Alta": 0,
  //           "Jayuya": 0,
  //           "San Lorenzo": 0,
  //           "Aibonito": 0,
  //           "Juncos": 0,
  //           "Loiza": 0,
  //           "Comerio": 0,
  //           "Culebra": 0,
  //           "Sabana Grande": 0,
  //           "San German": 0,
  //           "Yabucoa": 0,
  //           "Lares": 0,
  //           "Hatillo": 0,
  //           "Lajas": 0,
  //           "Maricao": 0,
  //           "Bayamon": 0,
  //           "Penuelas": 0,
  //           "Guayama": 0,
  //           "Aguadilla": 0,
  //           "Caguas": 0,
  //           "Naguabo": 0,
  //           "Rincon": 0,
  //           "Villalba": 0,
  //           "Guayanilla": 0,
  //           "Ponce": 0,
  //           "Anasco": 0,
  //           "Camuy": 0,
  //           "Coamo": 0,
  //           "Hormigueros": 0,
  //           "Ciales": 0,
  //           "Barranquitas": 0,
  //           "Santa Isabel": 0,
  //           "Arecibo": 0,
  //           "Aguas Buenas": 0,
  //           "San Juan": 0,
  //           "Morovis": 0,
  //           "Adjuntas": 0,
  //           "Guanica": 0,
  //           "Maunabo": 0,
  //           "Yauco": 0,
  //           "Las Piedras": 0,
  //           "Cayey": 0,
  //           "Manati": 0,
  //           "Utuado": 0,
  //           "Vega Baja": 0,
  //           "Barceloneta": 0,
  //           "Ceiba": 0,
  //           "Luquillo": 0,
  //           "Orocovis": 0,
  //           "Dorado": 0,
  //           "Patillas": 0,
  //           "Juana Diaz": 0
  //         },
  //         "cities": {
  //           "Coamo": 0,
  //           "San Juan-Bayamn-Caguas": 0,
  //           "San Germn": 0,
  //           "Coco": 0,
  //           "Ponce": 0,
  //           "Santa Isabel": 0,
  //           "Arecibo": 0,
  //           "Mayagez": 0,
  //           "Aguadilla-Isabela": 0,
  //           "Jayuya": 0,
  //           "Yauco": 0,
  //           "Guayama": 0
  //         }
  //       },
  //       "VI": {
  //         "stateID": "VI",
  //         "stateDentistCount": 0,
  //         "counties": {
  //           "Saint Croix": 0,
  //           "Saint John": 0,
  //           "Saint Thomas": 0
  //         },
  //         "cities": {

  //         }
  //       },
  //       "GU": {
  //         "stateID": "GU",
  //         "stateDentistCount": 0,
  //         "counties": {
  //           "Guam": 0
  //         },
  //         "cities": {

  //         }
  //       }
  //     }
  //   },
  //   {
  //     "providerName": "Aetna PPO II",
  //     "nationwideDentistCount": 0,
  //     "states": {
  //       "PR": {
  //         "stateID": "PR",
  //         "stateDentistCount": 226,
  //         "counties": {
  //           "Aguada": 2,
  //           "Arroyo": 0,
  //           "Gurabo": 1,
  //           "Moca": 0,
  //           "Canovanas": 4,
  //           "Guaynabo": 13,
  //           "Catano": 0,
  //           "Vieques": 0,
  //           "Toa Baja": 3,
  //           "Quebradillas": 0,
  //           "Vega Alta": 1,
  //           "Fajardo": 5,
  //           "Corozal": 2,
  //           "Salinas": 0,
  //           "San Sebastian": 0,
  //           "Naranjito": 0,
  //           "Las Marias": 0,
  //           "Humacao": 5,
  //           "Cabo Rojo": 2,
  //           "Isabela": 2,
  //           "Mayaguez": 9,
  //           "Trujillo Alto": 3,
  //           "Carolina": 11,
  //           "Cidra": 2,
  //           "Florida": 0,
  //           "Toa Alta": 3,
  //           "Jayuya": 0,
  //           "San Lorenzo": 1,
  //           "Aibonito": 1,
  //           "Juncos": 1,
  //           "Loiza": 0,
  //           "Comerio": 0,
  //           "Culebra": 0,
  //           "Sabana Grande": 0,
  //           "San German": 2,
  //           "Yabucoa": 1,
  //           "Lares": 0,
  //           "Hatillo": 0,
  //           "Lajas": 0,
  //           "Maricao": 0,
  //           "Bayamon": 24,
  //           "Penuelas": 0,
  //           "Guayama": 4,
  //           "Aguadilla": 7,
  //           "Caguas": 10,
  //           "Naguabo": 0,
  //           "Rincon": 0,
  //           "Villalba": 2,
  //           "Guayanilla": 0,
  //           "Ponce": 18,
  //           "Anasco": 2,
  //           "Camuy": 0,
  //           "Coamo": 0,
  //           "Hormigueros": 0,
  //           "Ciales": 0,
  //           "Barranquitas": 0,
  //           "Santa Isabel": 0,
  //           "Arecibo": 8,
  //           "Aguas Buenas": 2,
  //           "San Juan": 67,
  //           "Morovis": 1,
  //           "Adjuntas": 0,
  //           "Guanica": 1,
  //           "Maunabo": 0,
  //           "Yauco": 3,
  //           "Las Piedras": 0,
  //           "Cayey": 1,
  //           "Manati": 5,
  //           "Utuado": 2,
  //           "Vega Baja": 3,
  //           "Barceloneta": 3,
  //           "Ceiba": 1,
  //           "Luquillo": 0,
  //           "Orocovis": 1,
  //           "Dorado": 4,
  //           "Patillas": 0,
  //           "Juana Diaz": 2
  //         },
  //         "cities": {
  //           "Coamo": 0,
  //           "San Juan-Bayamn-Caguas": 165,
  //           "San Germn": 4,
  //           "Coco": 0,
  //           "Ponce": 21,
  //           "Santa Isabel": 0,
  //           "Arecibo": 8,
  //           "Mayagez": 9,
  //           "Aguadilla-Isabela": 15,
  //           "Jayuya": 0,
  //           "Yauco": 4,
  //           "Guayama": 4
  //         }
  //       },
  //       "VI": {
  //         "stateID": "VI",
  //         "stateDentistCount": 0,
  //         "counties": {
  //           "Saint Croix": 0,
  //           "Saint John": 0,
  //           "Saint Thomas": 0
  //         },
  //         "cities": {

  //         }
  //       },
  //       "GU": {
  //         "stateID": "GU",
  //         "stateDentistCount": 0,
  //         "counties": {
  //           "Guam": 0
  //         },
  //         "cities": {

  //         }
  //       }
  //     }
  //   }
  // ]
  const [filterList, setFilterList] = useState(providerArr)
  const handleChange = (e: any) => {
    e.preventDefault();
    // console.log(e.target.value);
    setSearchInput(e.target.value);
  };

  useEffect(()=>{
    if (searchInput.length > 0) {
      // console.log(searchInput);
      setFilterList(providerArr.filter((providerName : any) => {
        return providerName.providerName.toUpperCase().match(searchInput.toUpperCase());
      }));
      // console.log(test);
    }
    if(searchInput.length == 0){
      setFilterList(providerArr);
    }
  },[searchInput])
  
  return (
    <div className="App">
      <div className="dropdown">
        <Button  shape="default" onClick={() => showHide(!hide)} icon={<SlidersOutlined />}>Filter</Button>
        {hide && <div id="myDropdown" className="dropdown-content">
          <Row style={{ height: "35px" }} justify="space-around">
            <Col style={{ margin: "auto" }} span={8}>Filter</Col>
            <Col style={{ margin: "auto" }} span={8} offset={8}>
              clear filter
            </Col>
          </Row>
          <Collapse >
            <Panel header="Competitor" key="1">
              {/* <Input placeholder="search" prefix={<SearchOutlined />} /> */}
              
              <div>

                <input type="text" placeholder="Search here" onChange={handleChange} value={searchInput} />

                <table>
                  <>
                  {/* <tr>
                    <th>Sun Life Dental Network</th>
                   

                  </tr> */}

                  {/* {filterList.map((providerName) => 
                    <tr>
                      <td>{providerName.providerName}</td>                   
                    </tr>
                  )} */}
                   <Checkbox.Group style={{ width: '100%' }}>
                    <Row className="checkboxDiv" >
                      {filterList.map((provider: any) =>
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
          </Collapse>
        </div>}
      </div>
    </div>
  );
}

export default App;
