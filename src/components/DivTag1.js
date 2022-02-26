import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import "../App.css";
import { DndProvider,useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import DropTarget from "./DropTarget";

export default (props) => {

    // console.log(props);
    const [square,setSquare] = useState([]);
    const [board, setBoard] = useState([]);
    const [items, setItems] = React.useState([]);
    const [circle,setCircle] = useState([])
    const [margin,setMargin] = useState("");
    // const totalSwitches = Object.keys(props.data).length;
    const data = props.data;
    const totalSwitches = data.switches;
    const touchName = data.name;
    // objectLength = Object.keys(exampleObject).length
    
    const itemDropped = item => {
        let localMargin;
        if(totalSwitches === "2"){
            localMargin = "40px 15px 40px 15px";
            console.log(localMargin);
            setMargin("50px 10px 50px 10px")
        }else if(totalSwitches === "8"){
            setMargin("20px 25px 20px 30px")
        }else{
            setMargin("20px 20px 20px 20px")
        }
        if(items.length < totalSwitches){
            console.log("DivTag1 : "+item)            
            setItems([...items, item]);
        }else{
            console.log("you cannot place the switch")
        }        
    }

    const handleRemoveItem = (e) => {
        // console.log(e);
        // const name = e.target.getAttribute("name")
        // updateList(list.filter(item => item.name !== name));        
    };
    return (             
         //below is working code
        <>
            
            <DropTarget onItemDropped={itemDropped} dropEffect="link">
                {items.map(e => (

                    <div className="hello" key={e} style={{ margin: margin }}>
                        {/* <span name={"1"} onClick={handleRemoveItem} style={{float:"right",visibility:"hidden"}} >
                            x
                        </span> */}
                        <img src={e} style={{width:"25px"}}></img>
                    </div>
                ))}
                
            </DropTarget>
            </>     
    );
    // return (   
        // <div>
        //     {items.map(e=> (
        //         <div className='hello'>
        //         <DropTarget onItemDropped={itemDropped} dropEffect='link'>
        //             <span name={"1"} onClick={handleRemoveItem} style={{float:"right",visibility:"hidden"}} >
        //                 x
        //              </span>
        //             <img src={e} style={{width:"25px"}}></img>
        //         </DropTarget>
        //         </div>
        //     ))}
        // </div>
        // <div>
            
        //     {Object.keys(circle).map((value,i) => <div className='hello' key={i}>
        //      {/* <DropTarget onItemDropped={itemDropped} dropEffect="link">{i}</DropTarget> */}
        //     </div>)}
        // </div>
    // );
};

// export default DivTag1;