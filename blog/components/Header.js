import React, {useState, useEffect} from 'react'
import '../styles/components/header.css'
import Router from 'next/router';
import Link from 'next/link';
import axios from 'axios';
import servicePath from '../config/apiUrl';
import {Row,Col, Menu, Icon, Affix} from 'antd';
import Item from 'antd/lib/list/Item';

const {SubMenu}  = Menu;



const Header = () => {

    const [navArray, setNavArray] = useState([])
    useEffect(()=>{
        const fetchData = async ()=>{
            const result = await axios(servicePath.getTypeInfo).then((res)=>{
                return res.data.data;
            })
            setNavArray(result);
        }
        fetchData()
    },[])

    const handleClick = (e)=>{
        if(e.key==0){
            Router.push('/')
        }else{
            Router.push('/list?id='+e.key)
        }
    }
    console.log(navArray)

    return (
           <Affix offsetTop="0">
                <div className="header">
        <Row type="flex" justify="center">
            <Col  xs={24} sm={24} md={10} lg={15} xl={8}>
                <span className="header-logo">Kabuto91</span>
                <span className="header-txt">苦海无涯，努力学习</span>
            </Col>

            <Col className="memu-div" xs={0} sm={0} md={14} lg={12} xl={10}>
                <Menu  mode="horizontal" onClick={handleClick} className="header-list">
                <Menu.Item key="0">
                                    <Icon type="home"  theme="twoTone"/>
                                    博客首页
                                </Menu.Item>
                    {
                        navArray.map((item)=>{
                            if(item.typePriority==1){
                                if(item.hasChild==1){
                                    return (
                                        <SubMenu
                                    title={
                                        <span>
                                            <Icon type={item.icon} theme="twoTone"  />
                                            {item.typeName}
                                        </span>
                                    }>
                                        <Menu.ItemGroup>
                                            <Menu.Item key="4">宠物小精灵</Menu.Item>
                                            <Menu.Item key="5">假面骑士</Menu.Item>
                                        </Menu.ItemGroup>
                                    </SubMenu>
                                    )
                                }else{
                                    return (
                                    <Menu.Item key={item.id}>
                                        <Icon type={item.icon} theme="twoTone" />
                                        {item.typeName}
                                    </Menu.Item>
                                )
                                }
                            }
                            
                        })
                    }
                    
                    
                </Menu>
            </Col>
        </Row>
    </div>
           </Affix>
    )
  
}

export default Header