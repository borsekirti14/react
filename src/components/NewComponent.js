import React, {useEffect, useState, useRef} from "react";
import "../App.css";
import DivTag1 from "./DivTag1";
import Box from '@mui/material/Box';
import {
  Space
} from 'antd';

function NewComponent(props) {       
    return(
        <Box id={props.data} className={props.data} >                        
            {props.data1.map((e,i) =>   
            <><div className={e.name} key={i} style={{ height: "9em" }}>
                <DivTag1 data={e} />
                </div>{e.name ==="fourSR" || e.name ==="eightSR"?(<Space size="large"><img src="./slider.png" style={{ width: "12px",height:"110px" }}></img><img src="./arrow.png" style={{ width: "15px" }}></img></Space>):(<div></div>)}</>
            )}
        </Box> 
    )
}
export default NewComponent;