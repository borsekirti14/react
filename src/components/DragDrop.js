import React, {useEffect, useState} from "react";
import Picture from "./Picture";
import { useDrop } from "react-dnd";
// import { PlusOutlined } from '@ant-design/icons';
import "../App.css";
import {
  Form,
  Button,
  Select,
  Space,
  Tag
} from 'antd';
import 'antd/dist/antd.css';
const { Option } = Select;

const PictureList = [
  {
    id: 1,
    url:
      "/2S.png",
    modular:2
  },
  {
    id: 2,
    url:
      "/4S.png",
    modular: 2
  },
  {
    id: 3,
    url:
        "/4S1R.png",
    modular: 4
  },
  {
    id: 4,
    url:
        "/8S.png",
    modular: 6
  },
  {
    id: 5,
    url:
        "/8S1R.png",
    modular: 6
  }
];

function DragDrop() {
  const [board, setBoard] = useState([]);
  const [height, setHeight] = useState(150);
  const [width, setWidth] = useState(150);
  const [boardSize, setBoardSize] = useState(0);
  let checkBoardSize = 0;
  let bSize;

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "image",
    drop: (item) => addImageToBoard(item.id,item.modular,bSize),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addImageToBoard = (id,modular,bSize) => {
    let modularSize = modular;
    console.log("bSize in icon: "+bSize);
    console.log("modularSize-> "+modularSize+ " : bSize-> "+bSize)
    if(modularSize <= bSize){
      if(checkBoardSize < bSize){
        checkBoardSize = parseInt(checkBoardSize) + parseInt(modularSize)
        const pictureList = PictureList.filter((picture) => id === picture.id);
        setBoard((board) => [...board, pictureList[0]]);
      }else{
        {console.log("inside if")}
        <Tag>you cannot set image</Tag>
      }
    }
    /*if(checkBoardSize >= bSize && modularSize >= bSize){
      {console.log("inside if")}
      <Tag>you cannot set image</Tag>
    }
    else{
      checkBoardSize = parseInt(checkBoardSize) + parseInt(modularSize)
      const pictureList = PictureList.filter((picture) => id === picture.id);
      setBoard((board) => [...board, pictureList[0]]);
    }*/
  };

  const BackPlatePriceFunc = (value) => {
    console.log(value)
    let width;
    if(value === "2"){
      width = 150
      bSize = 2;
    }else if(value === "4"){
      bSize = 4;
      width = 300;
    }else if(value === "6"){
      width = 450
      bSize = 6;
    }else if(value === "8"){
      width = 600
      bSize = 8;
    }else if(value === "12"){
      width = 900
      bSize = 12;
    }
    setWidth(width);
    setBoardSize(bSize);
    console.log(bSize)
  }

  return (
    <>
      <Select onChange={BackPlatePriceFunc} style={{ width: 120 }} >
        <Option value="2">2M</Option>
        <Option value="4">4M</Option>
        <Option value="6">6M</Option>
        <Option value="8">8M</Option>
        <Option value="12">12M</Option>
      </Select>
      <div className="Pictures" >
        {PictureList.map((picture) => {
          return <Picture url={process.env.PUBLIC_URL + picture.url} id={picture.id} label={picture.modular}/>;
        })}
      </div>
      <div className="Board" ref={drop} style={{width:width+"px",height:height+"px"}}>
        {board.map((picture) => {
          return <Picture url={process.env.PUBLIC_URL + picture.url} id={picture.id} />;
        })}
      </div>
    </>
  );
}

export default DragDrop;
