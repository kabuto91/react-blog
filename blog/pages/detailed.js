import Head from 'next/head'
import React from 'react';
import Header from '../components/Header';
import {Row, Col, Breadcrumb, Affix, Icon} from 'antd';

import Author from '../components/Author';

import Footer from '../components/Footer';
import '../styles/pages/detailed.css';

import MarkNav from 'markdown-navbar';
import 'markdown-navbar/dist/navbar.css';
import axios from 'axios';
import marked from 'marked';
import hljs from 'highlight.js';
import 'highlight.js/styles/monokai-sublime.css';
import servicePath from '../config/apiUrl';


const Detailed = (props)=> {

  const renderer = new marked.Renderer();
  marked.setOptions({
    renderer:renderer,
    gfm:true,
    pedantic:false,
    sanitize:false,
    tables: true,
    breaks: false,
    smartLists:true,
    highlight:function(code){
      return hljs.highlightAuto(code).value
    }
  })

  let html = marked(props.article_content);
  console.log(props.typeId);
  return (
    <div>
      <Head>
        <title>Detailed</title>
        
      </Head>
      <Header />
      <Row className="comm-main" type="flex" justify="center">
        <Col className="comm-white" xs={24} sm={24} md={16} lg={18} xl={14}>
          <div>
            <div className="bread-div">
              <Breadcrumb>
                <Breadcrumb.Item><a href="/">首页</a></Breadcrumb.Item>
                <Breadcrumb.Item><a href={'/list?id='+props.typeId}>{props.typeName}</a></Breadcrumb.Item>
                <Breadcrumb.Item>xxxx</Breadcrumb.Item>
              </Breadcrumb>
            </div>
            <div>
              <div className="detailed-title">
                {props.title}
              </div>
              <div className="list-icon center">
                <span><Icon type="calendar" />{props.addTime}</span>
                
                
              </div>
              <div className="detailed-content" dangerouslySetInnerHTML={{__html:html}} >
                
              </div>
            </div>
          </div>
        </Col>
        <Col className="comm-right" xs={24} sm={24} md={7} lg={5} xl={4}>
          <Author />
          <Affix offsetTop={50}>
            <div className="detailed-nav comm-box">
              <div className="nav-title">文章目录</div>
              <MarkNav 
                className="article-menu"
                source={props.article_content}
                headingTopOffset={0}
                ordered={false}
              />
            </div>
          </Affix>
        </Col>
      </Row>
      <Footer />
    </div>
  )
}

Detailed.getInitialProps = async(context)=>{
  console.log(context.query.id);
  let id = context.query.id;
  const promise = new Promise((resolve)=>{
    axios(servicePath.getArticleById+id).then(
      (res)=>{
        
        resolve(res.data.data[0])
      }
    )
  })
  return await promise;
}

export default Detailed;
