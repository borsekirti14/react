import React, {useEffect, useState} from "react";
import { DndProvider,useDrag } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Drag from "./Drag";
import logo from "./logo.png";
import {
  Form,
  Button,
  Select,
  Space,
  Image
} from 'antd';
import 'antd/dist/antd.css';
import "../App.css";
import DivTag1 from "./DivTag1";
import { Draggable } from "react-drag-and-drop";
const { Option } = Select;

function Box() {  
  
  const [height, setHeight] = useState();
  const [width, setWidth] = useState();  
  const [border,setBorder] = useState("");
  const [centerBorder,setCenterBorder] = useState(0);  
  const [square,setSquare] = useState([]);
  const [switches,setSwitches] = useState([]);
  const [supportedTouch,setSupportedTouch] = useState([]);
  const [value1,setValue] = useState([])
  const [innerWidth,setInnerWidth] = useState("")
  
const BackPlatePriceFunc = (value) => {    
    let width;
    let bSize;
    let localSupportedTouch;
    if(value === "2"){
      width = 150
      bSize = 2;
      localSupportedTouch = ["2S","4S"];
    }else if(value === "4"){
      bSize = 4;
      width = 300;
      localSupportedTouch = ["2S","4S","4S1R"];
    }else if(value === "6"){
      width = 450
      bSize = 6;
      localSupportedTouch = ["2S","4S","4S1R","8S","8S1R"];
    }else if(value === "8"){
      width = 600
      bSize = 8;
      localSupportedTouch = ["2S","4S","4S1R","8S","8S1R"];
    }else if(value === "12"){
      width = 900
      bSize = 12;
      localSupportedTouch = ["2S","4S","4S1R","8S","8S1R"];
    }
    setWidth(width);
    setHeight(150)
    setBorder(2)  
    setSupportedTouch(localSupportedTouch)
    // console.log(localSupportedTouch);
}

const TouchFunc = (value) => {
    let supportedModuleLocal = [];
    let size;
    let localSwitches = {};
    let localWidth;
  console.log("value from selection: "+value.length)
  for(let i = 0 ; i < value.length;i++){
    if(value[i] === "2S"){      
        supportedModuleLocal = ["2","4","6","8","12"]       
        size = "1";
        localSwitches = {
          "id1":"1",
          "id2":"2"
        };
        localWidth = 120
    }else if(value[i] === "4S"){
        supportedModuleLocal = ["2","4","6","8","12"]
        size = "1";
        localSwitches = {
          "id1":"1",
          "id2":"2",
          "id3":"3",
          "id4":"4"
        }; 
        localWidth = 120
    }else if(value[i] === "4S1R"){
        supportedModuleLocal = ["4","6","8","12"]        
        size = "3"
        localSwitches = {
          "id1":"1",
          "id2":"2",
          "id3":"3",
          "id4":"4",
          "id5":"5",
          "id6":"6"
        };
        localWidth = 180
    }else if(value[i] === "8S"){
        supportedModuleLocal = ["6","8","12"]        
        size = "3"
        localSwitches = {
          "id1":"1",
          "id2":"2",
          "id3":"3",
          "id4":"4",
          "id5":"5",
          "id6":"6",
          "id7":"7",
          "id8":"8"
        };
        localWidth = 240
    }else if(value[i] === "8S1R"){
        supportedModuleLocal = ["6","8","12"]        
        size = "3";
        localSwitches = {
          "id1":"1",
          "id2":"2",
          "id3":"3",
          "id4":"4",
          "id5":"5",
          "id6":"6",
          "id7":"7",
          "id8":"8",
          "id9":"9",
          "id10":"10"
        };
        localWidth = 300
    }
  }
    
    // setSupportedModule(supportedModuleLocal)
    setCenterBorder(2)
    // console.log(size)
    setSquare(square => [...square,size] ); 
    setSwitches(localSwitches);
    setValue(value);
    setInnerWidth(localWidth)
    // console.log(value1)
    // console.log(square)
}

const PictureList = [
  {
    id:1,
    url:'./light.png'
  },
  {
    id:2,
    url:'./light.png'
  },
  {
    id:3,
    url:'./light.png'
  }
]


return (
    
    <div>
        <Select onChange={BackPlatePriceFunc} placeholder={"Select Back Plate"}>
            <Option value="2">2M</Option>
            <Option value="4">4M</Option>
            <Option value="6">6M</Option>
            <Option value="8">8M</Option>
            <Option value="12">12M</Option>
        </Select>
        <Select onChange={TouchFunc} placeholder={"Select Touch"} mode="multiple" style={{ width: '30%' }}>
            {supportedTouch.map((value,i) => <Option value={value}>{value}</Option>)}
        </Select>
        <div style={{border:"2px solid black"}}>
          {
            PictureList.map((value,i) => (<Drag key={value} dragImage={logo} dropEffect="link" dataItem={switches}>
              <img src={value.url} key={value.id} width={"50px"}></img>
            </Drag>)            
          )}          
          
        </div>
        
        <div className="Board" style={{width:width+"px",height:height+"px", border:border+"px solid black"}} >

          {/* {[...Array(square)].map((e, i) => <div className="innerFrame" style={{height:"9em",position: "relative",border:centerBorder+"px solid black"}} key={i}> */}
          
          {/*below code is working for square box */}
          {/* {square.map((e, i) => <div className="innerFrame" style={{height:"9em",position: "relative"}} key={i}>  
            <DivTag1 data={switches}/>
          </div>)}             */}

          {/*below code is working for perfect 2s 4s switches box */}
          {/* <div className="innerFrame" style={{height:"9em",position:"relative",width:(width-20)+"px",margin:"auto"}}>  
            <DivTag1 data={switches}/>
          </div> */}

          {/*below code is working for dynamic square box */}
          {/* <div> */}
          {square.map((e,i) =>
          <div className="innerFrame" 
                style={{height:"9em",position:"relative",width:innerWidth+"px",border:"1px solid blue"}}>
                        
            <DivTag1 data={switches}/></div>
            )}
          </div>
        
          {/* </div>   */}
        {/* {value.length > 1 ? (
          <div>
            <ul>
               {this.state.selectedOption.map((option) =>
                <li key={option.value}>
                  {option.label}
                </li>
              )} 
              You cannot selct this
            </ul>
          </div>) : ''
        }    */}
    </div>    
);
}

export default Box;
