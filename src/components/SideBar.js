import React, {useEffect, useState} from "react";
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import "../App.css";
import { Button, Layout, Menu, Drawer,Select, } from 'antd';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import Box from '@mui/material/Box';
const { Option } = Select;

const { Header, Content, Footer, Sider } = Layout;

const SideBar = () => {
    
    const [visibility,setVisibility] = useState(true);
    const [visibleDrawer,setVisibleDrawer] =useState(false)
    const [btnVisibility,setBtnVisibility] = useState(false)
    const changeVisibility = () => {
        setVisibility(false)
        setBtnVisibility(true)
    }
    const backPlate = [
        { _id: "61d96fa78b6ab6054f6c2c5f",Modular: '2',Price: '100',Name: '2M' },
        { _id: "61d96fc58b6ab6054f6c2c60",Modular: '4',Price: '200',Name: '4M' },
        { _id: "61e6aaaef3c0038bef0875c4",Modular: '6',Price: '300',Name: '6M' },
        { _id: "61e6aaccf3c0038bef0875c5",Modular: '8',Price: '400',Name: '8M' },
        { _id: "61e6aae4f3c0038bef0875c6",Modular: '12',Price: '500',Name: '12M' } ]
    const openBackPlateDrawer = () => {
        setVisibleDrawer(true)
    }
    const onClose = () => {
        setVisibleDrawer(false)
    };
    const backPlateFunction = (value) => {
        setVisibleDrawer(false);
        console.log(value)        
    }
    let backPlateList = backPlate.length > 0
        && backPlate.map((item, i) => {
            return (
                 <Menu.Item key={item._id} icon={<UserOutlined/>} onClick={backPlateFunction} value={item.Price}>{item.Name}</Menu.Item>
            )
        }, this);

         
    return(
        <Layout>
        <Sider
            theme='light'
            breakpoint="xs"
            collapsedWidth="5"
            onBreakpoint={broken => {
                console.log(broken);
            }}
            onCollapse={(collapsed, type) => {
                console.log(collapsed, type);
            }}
        >
            <div className="logo"/>
            
            <Menu theme="light" mode="inline" defaultSelectedKeys={['1']} disabled={visibility}>
                <Menu.Item key="1" icon={<UserOutlined/>} onClick={openBackPlateDrawer}>
                    Back Plate
                </Menu.Item>
                <Menu.Item key="2" icon={<VideoCameraOutlined/>}>
                    Material
                </Menu.Item>
                <Menu.Item key="3" icon={<UploadOutlined/>}>
                    Color
                </Menu.Item>
                <Menu.Item key="4" icon={<UserOutlined/>}>
                    Touch
                </Menu.Item>
            </Menu>
        </Sider>
        <Layout>
            <Header className="site-layout-sub-header-background" style={{padding: 0}}/>
            <Content style={{margin: '16px 16px 16px 16px'}}>
                <div className="site-layout-background" style={{padding: 24, minHeight: 455}}>
                    <Button onClick={changeVisibility} disabled={btnVisibility}>Click to make Switch Board</Button>
                </div>
                <Drawer
                    title="Back Plate Selection"
                    placement={'left'}
                    visible={visibleDrawer}
                    onClose={onClose}
                >
                    {/* <Select style={{ width: 270 }} >{backPlateList}</Select> */}
                    <Menu theme="light" mode="inline" defaultSelectedKeys={['1']} >
                        {backPlateList}
                         {/* <Menu.Item key="1" icon={<UserOutlined/>} onClick={backPlateFunction} value={100}>2 Module</Menu.Item>
                         <Menu.Item key="2" icon={<VideoCameraOutlined/>}>4 Module</Menu.Item>
                         <Menu.Item key="3" icon={<UploadOutlined/>}>6 Module</Menu.Item>
                         <Menu.Item key="4" icon={<UserOutlined/>}>8 Module</Menu.Item> */}
                    </Menu>
                </Drawer>
            </Content>
            <Footer style={{textAlign: 'center'}}>Smart Node Automations</Footer>
        </Layout>
    </Layout>
    )    
}
export default SideBar;