import React, {useEffect, useState, useRef} from "react";
import Drag from "./Drag";
import logo from "./logo.png";
import Box from '@mui/material/Box';
import NewComponent from "./NewComponent";
import {
  Form,
  Button,
  Select,
  Space,
  Image,
  Radio
} from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import "../App.css";
import DivTag1 from "./DivTag1";
import { PDFExport, savePDF } from '@progress/kendo-react-pdf';
const { Option } = Select;

function Box1() {  
  
  // const [height, setHeight] = useState();
  // const [width, setWidth] = useState();  
  // const [border,setBorder] = useState("");
  const [centerBorder,setCenterBorder] = useState(0);  
  const [square,setSquare] = useState([]);
  // const [value,setValue] = useState();
  const [switches,setSwitches] = useState([]);
  
  const [supportedTouch,setSupportedTouch] = useState([]);  
  const [backPlateSize,setBackPlateSize] = useState();  
  // const [backColor,setBackColor] = useState();
  const pdfExportComponent = useRef(null);
  const [boardClass,setBoardClass] = useState("");
  // const [divSize,setDivSize] = useState(0);
  // const [form] = Form.useForm();
    
const BackPlatePriceFunc = (value) => {    
    // let width;
    let bSize;
    let localSupportedTouch;
    let localClass;
    if(value === "2"){
      // width = 150
      bSize = 2;
      localSupportedTouch = ["2S","4S"];
      localClass = "two"
    }else if(value === "4"){
      bSize = 4;
      // width = 300;
      localSupportedTouch = ["2S","4S","4S1R"];
      localClass = "four"
    }else if(value === "6"){
      // width = 450
      bSize = 6;
      localSupportedTouch = ["2S","4S","4S1R","8S","8S1R"];
      localClass = "six"
    }else if(value === "8"){
      // width = 600
      bSize = 8;
      localSupportedTouch = ["2S","4S","4S1R","8S","8S1R"];
      localClass = "eight"
    }else if(value === "12"){
      // width = 900
      bSize = 12;
      localSupportedTouch = ["2S","4S","4S1R","8S","8S1R"];
      localClass = "twelve"
    }
    setBoardClass(localClass)
    // setWidth(width);
    // setHeight(150)
    // setBorder(2)  
    setSupportedTouch(localSupportedTouch)
    setBackPlateSize(bSize);
}

const TouchFunc = (value) => {
    let size;
    let localSwitches = {};
    let localWidth;
    let localClassName;
    let requiredModule;
    let supportedModuleLocal;
    
  for(let i = 0 ; i < value.length;i++){
    if(value[i] === "2S"){      
        supportedModuleLocal = ["2","4","6","8","12"]       
        size = {
          name:"twoS",
          width:"50px",
          switches:"2",
          requiredModule:"2"
        };
        localWidth = 120
        requiredModule = "2"
        localClassName = "twoS"
    }else if(value[i] === "4S"){
        supportedModuleLocal = ["2","4","6","8","12"]
        size = {
          name:"fourS",
          width:"100px",
          switches:"4",
          requiredModule:"2"
        };
        localWidth = 120
        requiredModule = "2"
        localClassName = "fourS"
    }else if(value[i] === "4S1R"){
        supportedModuleLocal = ["4","6","8","12"]        
        size = {
          name:"fourSR",
          width:"150px",
          switches:"4",
          requiredModule:"4"
        };
        localWidth = 180
        requiredModule = "4"
        localClassName = "fourSR"
    }else if(value[i] === "8S"){
        supportedModuleLocal = ["6","8","12"]        
        size = {
          name:"eightS",
          width:"200px",
          switches:"8",
          requiredModule:"6"
        };
        localWidth = 240
        requiredModule = "6"
        localClassName = "eightS"
    }else if(value[i] === "8S1R"){
        supportedModuleLocal = ["6","8","12"]        
        size = {
          name:"eightSR",
          width:"250px",
          switches:"8",
          requiredModule:"6"
        };
        localWidth = 300
        requiredModule = "6"
        localClassName = "eightSR"
    }
  }
  setCenterBorder(2)
    
    if(parseInt(requiredModule) <= parseInt(backPlateSize)){
      setBackPlateSize((backPlateSize-requiredModule))
        setSquare(square => [size] ); 
        setSwitches(localSwitches);
    }else{
      {console.log("size not matching")}
    }
    
}

// const RemoveTouchFunc = (value) => {
//   let removeModule;

//   if(value === "2S"){
//     removeModule = 2
//   }else if(value === "4S"){
//     removeModule = 4
//   }else if(value === "4S1R"){
//     removeModule = 4
//   }else if(value === "8S"){
//     removeModule = 8
//   }else if(value === "8S1R"){
//     removeModule = 8
//   }
//   setBackPlateSize( parseInt(removeModule) - parseInt(backPlateSize) )
// }

// const ColorFunc = (value) => {
//   if(value === "white"){
//     setBackColor("whiteColor")
//   }else{
//     setBackColor("blackColor")
//   }
// }

function importAll(r) {
  let images ;
  let imgArr = [];
  r.keys().map((item, i) => { 
	  let index = i;
	  let splitUrl = item.split('.')
	  let url = process.env.PUBLIC_URL +splitUrl[1]+'.png';
	  images = {
		  url : url,
		  id: index
	  }
	  imgArr.push(images)
	});
   return imgArr;
}

let PictureList = importAll(require.context('./icons', false, /\.(png|jpe?g|svg)$/));

const  handleExportWithComponent  = (event) => {
    pdfExportComponent.current.save();
}

return (
  <Form name="dynamic_form_nest_item" >
      <Form.Item
       label="Icons"       
      >
        <div style={{border:"2px solid black"}} >
          <Space>
          {
            PictureList.map((value,i) => (<Drag key={value} dragImage={logo} dropEffect="link" dataItem={switches}>
              {value.url === "./slider.png"?(<img src={value.url} key={value.id} width={"10px"} height={"70px"}></img>
              ):(
                <img src={value.url} key={value.id} width={"50px"} style={{display:"block",position:"initial"}}></img>
              )}
            </Drag>)            
          )}          
          </Space>
        </div>
      </Form.Item>
      <Form.List name="sights">
        {(fields, { add, remove }) => (
          <>
            {fields.map((field) => (
              <Space key={field.key} align="baseline">
                <Form.Item shouldUpdate> 
                
                  {() => (
                    <>
                    
                    <Form.Item
                      {...field}
                      label="Back Plate"
                      name={[field.name, 'Back Plate']}
                      rules={[{ required: true, message: 'Missing backPlate' }]}
                    >
                      <Select onChange={BackPlatePriceFunc} style={{ width: "100px" }}>
                        <Option key="1" value="2">2M</Option>
                        <Option key="2" value="4">4M</Option>
                        <Option key="3" value="6">6M</Option>
                        <Option key="4" value="8">8M</Option>
                      </Select>
                    </Form.Item>
                    <Form.Item
                      {...field}
                      label="Touch"
                      name={[field.name, 'Touch']}
                      rules={[{ required: true, message: 'Missing Touch' }]}
                    >
                      <Select onChange={TouchFunc} mode="multiple" style={{ width: "150px" }}>
                        {supportedTouch.map((value,i) => <Option key={i} value={value}>{value}</Option>)}
                      </Select>
                    </Form.Item>
                    <MinusCircleOutlined onClick={() => remove(field.name)} />
                    <Form.Item
                      {...field}                      
                    >               
                      
                      <PDFExport  ref={pdfExportComponent}  paperSize="A4">
                        {/* {setSquare([0,1,2,3])}                                               */}
                        {/* <Box id={boardClass} className={boardClass} >                        
                          {square.map((e,i) =>   
                            <><div className={e.name} key={i} style={{ height: "9em" }}>
                              <DivTag1 data={e} />
                              </div>{e.name ==="fourSR" || e.name ==="eightSR"?(<Space size="large"><img src="./slider.png" style={{ width: "12px",height:"110px" }}></img><img src="./arrow.png" style={{ width: "15px" }}></img></Space>):(<div></div>)}</>
                          )}
                        </Box> */}
                        <NewComponent data={boardClass} data1={square}/>
                      </PDFExport>
                    </Form.Item>                    
                    </>
                  )}
                </Form.Item>
              </Space>
            ))}
            <Form.Item>
              <Button
                type="dashed"
                onClick={() => add()}
                block
                icon={<PlusOutlined />}
              >
                Add Switch Board
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
      <Form.Item>
        <Button type="primary" htmlType="submit" onClick={handleExportWithComponent}>
          Create PDF
        </Button>
      </Form.Item>
    </Form> 
            
);

}

export default Box1;

    